// ── TAB SWITCHING ──────────────────────────────────────────────────────
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
  });
});

// ── ENTITY TABLE ───────────────────────────────────────────────────────
function buildEntityTable() {
  const tbody = document.getElementById('entity-tbody');
  if (!tbody) return;
  ENTITIES.forEach(e => {
    const badgeClass = e.priority === 'high' ? 'badge-high' : e.priority === 'med' ? 'badge-med' : 'badge-low';
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${e.name}</td>
      <td><code style="font-size:.73rem;color:var(--muted);font-family:var(--mono)">${e.type}</code></td>
      <td style="color:var(--muted)">${e.cluster}</td>
      <td style="color:var(--muted)">${e.purpose}</td>
      <td><span class="badge ${badgeClass}">${e.priority.toUpperCase()}</span></td>`;
    tbody.appendChild(tr);
  });
}

// ── BOARD HUB ──────────────────────────────────────────────────────────
let boardState = {};
function buildBoardHub() {
  const grid = document.getElementById('board-grid');
  if (!grid) return;
  BOARD.forEach((m, i) => {
    boardState[i] = 'pending';
    const card = document.createElement('div');
    card.className = 'bm-card';
    card.style.setProperty('--accent', m.accent);
    const initBg = m.accent + '22';
    card.innerHTML = `
      <div class="bm-header">
        <div class="bm-avatar" style="background:${initBg};color:${m.accent};border-color:${m.accent}55">${m.initials}</div>
        <div class="bm-info">
          <h4>${m.name}</h4>
          <div class="bm-title">${m.title}</div>
        </div>
      </div>
      <div class="bm-entity">${m.entities}</div>
      <div class="bm-role" style="font-size:.78rem;color:var(--muted);margin-bottom:8px;font-weight:600">${m.role}</div>
      <div class="bm-bio">${m.bg}</div>
      <div class="bm-actions">
        <button class="bm-btn bm-yes" onclick="setBoardStatus(${i},'yes',this)">✅ Yes</button>
        <button class="bm-btn bm-no" onclick="setBoardStatus(${i},'no',this)">❌ No</button>
        <button class="bm-btn bm-email" onclick="openEmail(${i})">✉️ Email</button>
      </div>`;
    grid.appendChild(card);
  });
  updateBoardCounts();
}

window.setBoardStatus = function(idx, status, btn) {
  boardState[idx] = status;
  const card = btn.closest('.bm-card');
  card.querySelectorAll('.bm-yes,.bm-no').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  updateBoardCounts();
};

function updateBoardCounts() {
  const vals = Object.values(boardState);
  document.getElementById('yes-count').textContent = vals.filter(v => v === 'yes').length;
  document.getElementById('no-count').textContent = vals.filter(v => v === 'no').length;
  document.getElementById('pending-count').textContent = vals.filter(v => v === 'pending').length;
}

window.openEmail = function(idx) {
  const m = BOARD[idx];
  const subject = encodeURIComponent(`ACoolECOSYSTEM Board Invitation — ${m.title}`);
  const body = encodeURIComponent(
    `Dear ${m.name},\n\nI hope this message finds you well.\n\nI am reaching out to personally invite you to join the ACoolECOSYSTEM Board in your capacity as ${m.title}.\n\nYour expertise in ${m.expertise.slice(0,2).join(' and ')} is exactly what we need as we build this ecosystem across ${m.entities}.\n\nACoolECOSYSTEM is an AI-powered, multi-entity venture infrastructure designed to deliver education, economic development, and community impact at scale across Los Angeles.\n\nI would love to schedule a 30-minute call to share our vision and discuss how your leadership can shape the direction of this initiative.\n\nAre you available this week or next for a brief conversation?\n\nWith gratitude and respect,\nACoolECOSYSTEM Leadership Team\nhttps://acoolnerd.github.io/ACoolAGENT/`
  );
  window.open(`mailto:${m.email}?subject=${subject}&body=${body}`);
};

// ── BSC LOCATIONS ──────────────────────────────────────────────────────
function buildBSC() {
  const grid = document.getElementById('bsc-locations');
  if (!grid) return;
  BSC_LOCATIONS.forEach(b => {
    const card = document.createElement('div');
    card.className = 'bsc-card';
    card.innerHTML = `
      <div class="bsc-region">${b.region}</div>
      <div class="bsc-name">${b.name}</div>
      <div class="bsc-address">📍 ${b.address}</div>
      <div class="bsc-phone">📞 ${b.phone}</div>
      <div class="bsc-operator">Operator: ${b.operator}</div>
      <div class="bsc-langs">🌐 ${b.langs}</div>`;
    grid.appendChild(card);
  });
}

// ── RESOURCE ORG PILLS ─────────────────────────────────────────────────
document.querySelectorAll('.org-pill').forEach(pill => {
  pill.addEventListener('click', () => {
    document.querySelectorAll('.org-pill').forEach(p => p.classList.remove('active-org'));
    document.querySelectorAll('.resource-panel').forEach(p => p.classList.remove('active-panel'));
    pill.classList.add('active-org');
    document.getElementById('panel-' + pill.dataset.org).classList.add('active-panel');
  });
});

// ── ROADMAP ────────────────────────────────────────────────────────────
let totalTasks = 0, doneTasks = 0;
function buildRoadmap() {
  const grid = document.getElementById('phases-grid');
  if (!grid) return;
  PHASES.forEach(ph => {
    totalTasks += ph.tasks.length;
    const card = document.createElement('div');
    card.className = 'phase-card';
    const tasksHTML = ph.tasks.map((t, ti) => {
      const id = `ph${ph.num}_t${ti}`;
      return `<div class="phase-task">
        <input type="checkbox" id="${id}" onchange="updateProgress()">
        <label for="${id}">${t}</label>
      </div>`;
    }).join('');
    card.innerHTML = `
      <div class="phase-header">
        <div class="phase-num">${ph.num}</div>
        <div><div class="phase-title">${ph.title}</div><div class="phase-sub">${ph.sub}</div></div>
      </div>
      <div class="phase-tasks">${tasksHTML}</div>`;
    grid.appendChild(card);
  });
}

window.updateProgress = function() {
  doneTasks = document.querySelectorAll('.phase-task input:checked').length;
  const pct = Math.round((doneTasks / totalTasks) * 100);
  document.getElementById('progress-pct').textContent = pct + '%';
  document.getElementById('progress-fill').style.width = pct + '%';
  // also update critical tasks
  updateCriticalProgress();
};

function updateCriticalProgress() {
  const done = document.querySelectorAll('#critical-tasks input:checked').length;
  const total = document.querySelectorAll('#critical-tasks input').length;
  // visual feedback only
}

// ── WHATSAPP CHAT ──────────────────────────────────────────────────────
function addMsg(text, sender) {
  const win = document.getElementById('chat-window');
  const div = document.createElement('div');
  div.className = `chat-msg ${sender === 'user' ? 'user-msg' : 'agent-msg'}`;
  const bubble = text.replace(/\*(.*?)\*/g, '<strong>$1</strong>').replace(/\n/g, '<br/>');
  div.innerHTML = `<div class="chat-bubble">${bubble}</div><div class="chat-time">${sender === 'user' ? 'You' : 'ACoolAGENT'} · ${new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})}</div>`;
  win.appendChild(div);
  win.scrollTop = win.scrollHeight;
}

function processCmd(raw) {
  const cmd = raw.trim().toUpperCase().replace(/[^A-Z]/g, '');
  addMsg(raw, 'user');
  setTimeout(() => {
    const reply = WA_RESPONSES[cmd];
    if (reply) {
      addMsg(reply, 'agent');
    } else {
      // smart fallback
      let resp = `🤖 I understand you're asking about: "${raw}"\n\nAs your strategic advisor, I'd say: that's a valid question. Here's how it fits the ecosystem:\n\n`;
      if (/fund|money|capital|loan|grant/i.test(raw)) resp += WA_RESPONSES.FUNDING;
      else if (/board|member|director/i.test(raw)) resp += WA_RESPONSES.BOARD;
      else if (/bsc|center|free|help|resource/i.test(raw)) resp += WA_RESPONSES.BSC;
      else if (/status|health|progress/i.test(raw)) resp += WA_RESPONSES.STATUS;
      else resp += `Type *START* to see all available commands, or *ADVISOR* for strategic guidance tailored to your situation.`;
      addMsg(resp, 'agent');
    }
  }, 600);
}

document.getElementById('chat-send')?.addEventListener('click', () => {
  const inp = document.getElementById('chat-input');
  if (!inp.value.trim()) return;
  processCmd(inp.value);
  inp.value = '';
});
document.getElementById('chat-input')?.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    const inp = document.getElementById('chat-input');
    if (!inp.value.trim()) return;
    processCmd(inp.value);
    inp.value = '';
  }
});
document.querySelectorAll('.qcmd').forEach(btn => {
  btn.addEventListener('click', () => processCmd(btn.dataset.cmd));
});

// ── NAVBAR SHADOW ──────────────────────────────────────────────────────
window.addEventListener('scroll', () => {
  document.getElementById('navbar').style.boxShadow =
    window.scrollY > 10 ? '0 4px 32px rgba(0,0,0,.6)' : 'none';
}, {passive: true});

// ── INIT ───────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildEntityTable();
  buildBoardHub();
  buildBSC();
  buildRoadmap();
});
