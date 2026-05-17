# Governed Build Templates

## Template A: New Entity Boilerplate

Use for a new ACool entity, microsite, dashboard, or internal app.

```text
/ENTITY_NAME
  /src
    /app
    /components
    /data
    /lib
    /styles
  /docs
    ARCHITECTURE.md
    API.md
    GOVERNANCE.md
    DEPLOYMENT.md
    TROUBLESHOOTING.md
  README.md
  package.json
  .env.example
```

## Template B: Governed System

Use for hubs, operating systems, AI routers, and multi-entity infrastructure.

```text
/SYSTEM_NAME
  /apps
  /packages
  /schema
  /docs
  /governance
  /scripts
  /tests
  SYSTEM_MANIFEST.md
```

## Template C: Documentation Pack

Use for BRDs, RACI matrices, functional specs, playbooks, and strategy systems.

```text
/docs
  00_EXECUTIVE_SUMMARY.md
  01_REQUIREMENTS.md
  02_ARCHITECTURE.md
  03_RACI.md
  04_GOVERNANCE.md
  05_IMPLEMENTATION_PLAN.md
  06_HANDOFF.md
```

## Template D: Multi-Format Data System

Use when a spreadsheet, dashboard, API, and documentation must stay aligned.

```text
/data
  source.xlsx
  export.csv
  export.json
/dashboard
/docs
  DATA_DICTIONARY.md
  SYNC_GUIDE.md
  GOVERNANCE.md
```

## Required Governance Artifacts

Every template must include or reference:

- Delivery manifest
- 7-field schema mapping
- RBAC matrix
- RACI matrix
- Audit event list
- Source-of-truth statement
- Verification evidence
- Handoff notes
