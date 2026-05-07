/**
 * ACoolAGENT Conversation Store
 *
 * In-memory store for development. Replace with Redis or a database
 * (Upstash Redis on Vercel is the recommended production path).
 *
 * Each conversation keeps the last MAX_TURNS exchanges to stay within
 * Claude's context budget while preserving meaningful continuity.
 */

const MAX_TURNS = 20;      // 10 user + 10 assistant messages per session
const SESSION_TTL = 24 * 60 * 60 * 1000; // 24 hours in ms

export class ConversationStore {
  constructor() {
    this._store = new Map(); // phone -> { history, lastSeen }
  }

  get(phone) {
    const entry = this._store.get(phone);
    if (!entry) return [];

    // Expire sessions older than TTL
    if (Date.now() - entry.lastSeen > SESSION_TTL) {
      this._store.delete(phone);
      return [];
    }

    return entry.history;
  }

  set(phone, history) {
    // Keep only the last MAX_TURNS messages
    const trimmed = history.slice(-MAX_TURNS);
    this._store.set(phone, { history: trimmed, lastSeen: Date.now() });
  }

  clear(phone) {
    this._store.delete(phone);
  }

  stats() {
    return {
      activeSessions: this._store.size,
      phones: [...this._store.keys()].map(p => `***${p.slice(-4)}`),
    };
  }
}

/*
 * ─── PRODUCTION UPGRADE: Upstash Redis ───────────────────────────────────────
 *
 * npm install @upstash/redis
 *
 * import { Redis } from '@upstash/redis';
 *
 * export class ConversationStore {
 *   constructor() {
 *     this.redis = new Redis({
 *       url: process.env.UPSTASH_REDIS_REST_URL,
 *       token: process.env.UPSTASH_REDIS_REST_TOKEN,
 *     });
 *   }
 *
 *   async get(phone) {
 *     const data = await this.redis.get(`conv:${phone}`);
 *     return data ? JSON.parse(data) : [];
 *   }
 *
 *   async set(phone, history) {
 *     const trimmed = history.slice(-MAX_TURNS);
 *     await this.redis.setex(`conv:${phone}`, 86400, JSON.stringify(trimmed));
 *   }
 *
 *   async clear(phone) {
 *     await this.redis.del(`conv:${phone}`);
 *   }
 * }
 */
