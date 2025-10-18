# Kit Bootstrap (v1)
Single source of truth for the chatbot launch. Edit in place; raise PRs with Conventional Commits.

## Contents
01_stack.md • 02_scope_faq.csv • 03_flow_spec.json • 04_prompts.md • 05_sheets_setup.md • 06_zaps_make.yaml • 07_provisioning.md • 08_integrations.md • 09_qa_checklist.md • 10_kpi_rollup.md • 11_sales_playbook.md • 12_monitoring.md • 13_pull_site_strategy.md

Artifacts included:
- docs/kit/marketing/orion_ai_bots_marketing_kit_v1.md
- docs/kit/faqpacks/beauty.json
- docs/kit/faqpacks/pets.json
- docs/kit/faqpacks/home_garden.json

## Tone column guidance
Use `Tone` to hint the reply style per row:
- `brand_default`: Use the brand’s standard tone from prompts.
- `concise`: Extra short; prioritize brevity and clarity.
- `empathetic`: Acknowledge concern before answering.
Mapping: the app should pass Tone → small style modifiers in the prompt (never change facts).

## Attribution / source_notes
Keep `Source/Notes` consistent:
- `kb:...` for internal KB docs (e.g., `kb:returns/v2`).
- `policy:https://...` for public policy pages.
- `faqpack:<vertical>/<intent>` for vertical packs.
Prefer internal KB over public pages when both exist.

## Import instructions (GS/Excel/Notion)
- Google Sheets: File → Import → Upload CSV → Insert new sheet; set column types; keep header row.
- Excel: Data → From Text/CSV → UTF‑8; comma‑separated; confirm columns.
- Notion: New Database → Import → CSV; map columns to properties.
After import, spot‑check 3 rows and run the CSV generator for vertical packs.

## DO NOT
- Duplicate files in other folders
- Change numbering
