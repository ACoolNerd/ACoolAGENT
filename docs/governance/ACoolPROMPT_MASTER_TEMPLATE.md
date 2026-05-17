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

## VI. Standard Build Templates

See `docs/governance/BUILD_TEMPLATES.md`.

## VII. Integration Pattern

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

## VIII. Pre-Ship Checklist

- [ ] Entity workspace is explicit.
- [ ] No brand or logic crosses workspace boundaries.
- [ ] 7-field schema law is applied or exception is documented.
- [ ] RBAC and separation of duties are defined.
- [ ] Audit events are identified.
- [ ] Source of truth is named.
- [ ] Output formats match stakeholder needs.
- [ ] README or handoff doc exists.
- [ ] Verification evidence is included.
