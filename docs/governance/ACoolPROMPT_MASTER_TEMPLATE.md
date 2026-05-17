# ACoolPROMPT Master Template

**Purpose:** Governed starting point for ACool ecosystem builds  
**Default stack:** React, Next.js, Firebase, Node.js  
**Default entity:** ACool Ecosystem unless another workspace is explicitly named

## I. Project Control Block

```yaml
PROJECT_NAME:
ENTITY_WORKSPACE:
ENTITY_NAME:
PROJECT_TYPE:
CLUSTER_ID:
CLUSTER_COLOR:
OWNER:
AUDIENCE:
DELIVERY_DATE:
SOURCE_OF_TRUTH:
OUTPUT_FORMATS:
GOVERNANCE_SCOPE:
```

## II. Entity Firewall

Before implementation, confirm that the build belongs to one workspace only.

| Workspace | Allowed Use | Restricted Use |
| --- | --- | --- |
| ACool Ecosystem | ACoolNERD, ACoolCOLLECTOR, ACoolARCHITECT, ACoolMEAP | No Bossy Claws, Pure 13 Wellness, O3 Media LLC, or FCAgency identity leakage. |
| Bossy Claws Nail Bar | Mobile-first beauty and wellness portal | No ACool dark/chrome system. No Nike Orange. |
| Pure 13 Wellness | Standalone skincare brand | Never call it Mint or Mint Skin. |
| O3 Media LLC | Corporate media operations | Do not mix with personal ACool operations. |
| My Freedem and The FCAgency | Agency and brand operations | Do not mix with ACool technical governance. |

If the workspace is unclear, pause and resolve the entity before producing branded or operational artifacts.

## III. Delivery Spec

Every project starts from a template and produces a delivery manifest.

```text
Master Template
  -> Entity customization
  -> Governance mapping
  -> Build artifacts
  -> Verification evidence
  -> Handoff package
```

Minimum delivery manifest:

- Project name and entity workspace
- Build type
- Source files created or changed
- Governance controls applied
- Known limitations
- Verification steps completed

Use `docs/governance/DELIVERY_MANIFEST_TEMPLATE.md`.

## IV. 7-Field Schema Law

All new database structures and object models must use seven governed top-level fields unless the project has a documented exception.

| Field | Purpose |
| --- | --- |
| `id` | Stable unique identifier. |
| `entity` | Owning entity or workspace. |
| `type` | Classification or object type. |
| `name` | Human-readable label. |
| `status` | Lifecycle state. |
| `owner` | Accountable person, team, or role. |
| `updatedAt` | Last governed update timestamp. |

For domain objects requiring more detail, place extra values inside a nested `metadata` object instead of expanding the top-level schema without approval.

### Default Object Shape

```json
{
  "id": "stable-id",
  "entity": "ACool Ecosystem",
  "type": "object-classification",
  "name": "Human Readable Name",
  "status": "draft",
  "owner": "Accountable role or person",
  "updatedAt": "2026-05-17T00:00:00.000Z",
  "metadata": {}
}
```

## V. Governance Layer

Governance is required in the first build pass.

| Control | Required Behavior |
| --- | --- |
| RBAC | Define user roles and access boundaries. |
| Separation of duties | Avoid combining requester, approver, deployer, and auditor responsibilities. |
| Audit logging | Capture meaningful create, update, delete, approval, and access events. |
| Config validation | Fail fast when required environment values are missing. |
| API protection | Validate request shape, identity, and authorization before business logic. |
| Error handling | Prevent internal stack traces or secrets from reaching users. |

## VI. Automation Cadence Layer

Every project must decide what should happen automatically, what should remain manual, and what cadence is appropriate. Automations are governed assets, not casual reminders.

### Automation Decision Prompt

Before implementation, answer:

1. What outcomes must happen without the owner remembering?
2. What decisions still require a human yes/no?
3. What is the correct pace: daily, weekly, monthly, quarterly, event-driven, or manual?
4. Who owns the automation?
5. What channel should it use?
6. What happens when the user ignores it, snoozes it, or the automation fails?
7. What audit events must be logged?

### Default Automation Object

Use the 7-field schema law at the top level. Place cadence details in `metadata`.

```json
{
  "id": "automation-revenue-daily-checkin",
  "entity": "ACool Ecosystem",
  "type": "automation",
  "name": "Daily Revenue Pipeline Check-In",
  "status": "draft",
  "owner": "ACoolNERD",
  "updatedAt": "2026-05-17T00:00:00.000Z",
  "metadata": {
    "cadence": "daily",
    "trigger": "08:30 America/New_York",
    "channel": "WhatsApp",
    "audience": "Keith Z. C. McPherson",
    "prompt": "List yesterday's revenue actions, today's top 3 revenue moves, and any blocked follow-ups.",
    "escalation": "If no response by 12:00, resend once. If no response by 17:00, mark missed and include in weekly review.",
    "successMetric": "One revenue-producing action logged per business day.",
    "auditEvents": ["activated", "sent", "responded", "snoozed", "missed", "escalated", "retired"]
  }
}
```

### Default Cadence Guidance

| Cadence | Best Use | ACool Example |
| --- | --- | --- |
| Daily | Revenue, priorities, urgent blockers, compliance deadlines | ACoolNERD revenue check-in; board reply review; top 3 execution priorities. |
| Weekly | KPI summaries, board outreach, funding scans, roadmap review | Friday ACoolECOSYSTEM progress digest; grant opportunity scan. |
| Monthly | Governance, financials, board packet, compliance calendar | Monthly board packet; entity filing calendar; finance summary. |
| Quarterly | Strategy, portfolio review, RACI refresh, annual planning | Butler and Sons enterprise strategy review; entity portfolio audit. |
| Event-driven | Leads, yes/no replies, webhook failures, payments, filings | Board member says yes; WhatsApp webhook fails; payment received; EIN issued. |
| Manual | Sensitive actions requiring judgment or legal review | Entity filing submission; legal document approval; board appointment. |

### Recommended ACool Operating Automations

| Automation | Cadence | Owner | Channel | Purpose |
| --- | --- | --- | --- | --- |
| Revenue Pipeline Check-In | Daily weekday | ACoolNERD | WhatsApp/dashboard | Keep ACoolNERD and ACoolBUSINESS focused on cash-first execution. |
| Top 3 Priority Lock | Daily weekday | ACoolNERD | WhatsApp | Force the day into three accountable outcomes. |
| Board Reply Tracker | Daily until first board meeting | ACoolBOARD owner | Email/dashboard | Track yes/no/needs-follow-up responses. |
| LA Resource Opportunity Scan | Weekly | ACoolACADEMY owner | Dashboard/email | Review BSC, EWDD, NEW, CRCD, PACE, MCS opportunities. |
| Governance Review Digest | Weekly | Auditor role | Dashboard | Surface missed approvals, stale tasks, and role conflicts. |
| Entity Compliance Calendar | Monthly | Compliance owner | Calendar/email | Track LLC, FBN, tax, nonprofit, and board filing deadlines. |
| Board Packet Builder | Monthly | Secretary/Treasurer | Docs/email | Prepare decisions, metrics, risks, and asks for board review. |

## VII. Standard Build Templates

See `docs/governance/BUILD_TEMPLATES.md`.

## VIII. Integration Pattern

Default to hub-and-spoke when multiple entities or tools are involved.

```text
Command Hub
  -> Governance policies
  -> Shared AI backbone
  -> KPI dashboards
  -> Audit events
  -> Entity spokes
```

Each spoke must own its branding, routes, config, deployment target, and P&L logic where applicable.

## IX. Pre-Ship Checklist

- [ ] Entity workspace is explicit.
- [ ] No brand or logic crosses workspace boundaries.
- [ ] 7-field schema law is applied or exception is documented.
- [ ] RBAC and separation of duties are defined.
- [ ] Audit events are identified.
- [ ] Automation cadence is defined or explicitly marked not required.
- [ ] Source of truth is named.
- [ ] Output formats match stakeholder needs.
- [ ] README or handoff doc exists.
- [ ] Verification evidence is included.
