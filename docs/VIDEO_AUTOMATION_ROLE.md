# ACoolAGENT — Video Automation Orchestrator

`ACoolAGENT` coordinates the complete source-to-published-video workflow for all tenants.

## Workflow
`DRAFT -> SOURCED -> SCRIPTED -> COMPLIANCE_REVIEW -> APPROVED -> RENDERING -> QA -> PUBLISH_READY -> PUBLISHED -> ARCHIVED`

## Responsibilities
- source ingestion and freshness checks
- structured script/storyboard requests
- asset-generation/request routing
- TTS/STT provider abstraction
- render queue
- retry/idempotency handling
- human approval gates
- QA checks
- publish queue
- audit events
- webhook handling

## Required Job Fields
- tenant
- brand profile version
- source registry version
- prompt version
- template version
- approval policy version
- requested formats
- approver state

Mortgage jobs must not bypass compliance review. Tenant assets, legal copy, CTAs, and analytics must remain isolated.

See the master manifest in `ACoolNerd/ACoolECOSYSTEM`.
