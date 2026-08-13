# Automation Cadence Playbook

Use this playbook when deciding what ACool automations should run daily, weekly, monthly, quarterly, event-driven, or manually.

## Hard Rule

Automation is not a productivity decoration. It is a governed operating control. If an automation cannot name its owner, trigger, channel, escalation path, and success metric, it is not ready to run.

## Recommended ACool Daily Operating System

| Time | Automation | Owner | Channel | Outcome |
| --- | --- | --- | --- | --- |
| 08:30 | Top 3 Priority Lock | ACoolNERD | WhatsApp | Name the three outcomes that matter today. |
| 09:00 | Revenue Pipeline Check-In | ACoolNERD / ACoolBUSINESS | WhatsApp or dashboard | Identify one revenue-producing action before noon. |
| 12:00 | Blocker Check | ACoolNERD | WhatsApp | Surface stalled decisions, missing replies, and execution blockers. |
| 16:30 | Board Reply Tracker | ACoolBOARD owner | Dashboard/email | Update yes/no/needs-follow-up status for board prospects. |
| 17:30 | End-of-Day Audit | Auditor role | Dashboard | Log completed actions, missed actions, and next-day carryovers. |

## Weekly Operating Rhythm

| Day | Automation | Owner | Purpose |
| --- | --- | --- | --- |
| Monday | Weekly Execution Plan | ACoolNERD | Confirm revenue target, filings, board asks, and resource outreach. |
| Wednesday | LA Resource Opportunity Scan | ACoolACADEMY owner | Review EWDD, BusinessSource Centers, NEW, CRCD, PACE, MCS, grants, workshops. |
| Friday | Weekly Governance Digest | Auditor role | Summarize completed tasks, missed tasks, risks, and decisions needed. |

## Monthly Operating Rhythm

| Automation | Owner | Purpose |
| --- | --- | --- |
| Entity Compliance Calendar | Compliance owner | Track filings, renewals, taxes, board minutes, nonprofit obligations. |
| Board Packet Builder | Secretary/Treasurer | Prepare metrics, decisions, risks, and asks for board review. |
| Financial Snapshot | Finance owner | Revenue, expenses, runway, invoices, grant pipeline, restricted funds. |
| RACI Refresh | Governance owner | Confirm roles still match the work. |

## Event-Driven Automations

| Trigger | Automation | Escalation |
| --- | --- | --- |
| Board member replies yes | Create onboarding checklist and schedule intro call | Escalate if no meeting is scheduled in 48 hours. |
| Board member replies no | Mark status and archive outreach thread | No escalation unless strategic relationship remains active. |
| New lead arrives | Create revenue opportunity record | Escalate if no response within one business day. |
| WhatsApp webhook fails | Alert technical owner | Escalate to deployer after two consecutive failures. |
| Filing deadline approaches | Send compliance reminder | Escalate seven days before deadline if incomplete. |
| Payment received | Update revenue dashboard and thank client | Escalate only if invoice reconciliation fails. |

## Automation Object Pattern

```json
{
  "id": "automation-board-reply-tracker",
  "entity": "ACool Ecosystem",
  "type": "automation",
  "name": "Board Reply Tracker",
  "status": "draft",
  "owner": "ACoolBOARD owner",
  "updatedAt": "2026-05-17T00:00:00.000Z",
  "metadata": {
    "cadence": "daily",
    "trigger": "16:30 America/New_York",
    "channel": "dashboard",
    "sourceOfTruth": "Board Hub response state",
    "escalation": "If no response after 3 business days, queue one follow-up. If no response after 7 business days, mark dormant.",
    "successMetric": "All active board prospects have a current yes/no/needs-follow-up status.",
    "auditEvents": ["sent", "opened", "responded", "follow_up_queued", "status_changed", "archived"]
  }
}
```

## Pre-Activation Checklist

- [ ] Entity workspace is explicit.
- [ ] Automation owner is named.
- [ ] Cadence is justified.
- [ ] Channel is appropriate for the audience.
- [ ] Escalation rule is documented.
- [ ] Human approval gates are named.
- [ ] Audit events are defined.
- [ ] Success metric is measurable.
- [ ] Retirement or pause condition exists.
