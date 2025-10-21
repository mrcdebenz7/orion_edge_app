# Orion Intelligence Agency Launch — message_standards.md

## Deferral Macro (Exact)

“I'm not sure on that. Let me have a teammate follow up—what’s your email?”

**Usage notes**
- Apply to policy, pricing/negotiation, order/PII, medical/legal, or missing info requests.
- When the user agrees, capture `email` + `email_optin` and open an Unknown ticket in `#ops-bot`.

## Operational Message Templates

### Daily Standup (Orchestrator, 09:00 local)
```
[DAILY] D{XX}
Goals: …
Completed: …
Today: …
Blockers: …
Links: 01_stack.md | 02_scope_faq.csv | 03_flow_spec.json
```

### Artifact Handoff
```
[HANDOFF] Agent {N} → {M}
Artifact: {filename}
Summary (≤3 bullets):
1) …
2) …
3) …
Dependencies: …
```

### Unknown → Ticket (auto from bot)
```
[UNKNOWN] {client}:{channel}
User Q: “{text}”
Bot deferral captured: {email? yes/no}
Action: Assign owner, add to FAQ backlog
Link: GSheet row {url}
```

### Incident (P1 Template)
```
[INCIDENT P1] {client} – {symptom}
Start: {UTC time}
Impact: {orders/chat affected}
Workaround: {msg or rollback}
Owner: {name}
Next update: {+30m}
```

## Customer Reply Rules (Always)

- ≤60 words, 1–2 short sentences, plain language.
- No payment/PII requests. Offer **email opt‑in** only.
- If unknown: “I don’t have that yet. Want a quick follow-up by email?”
- If degraded: “We’re fixing a hiccup—reply may be delayed.”
- Tone: helpful, specific, never over‑promise.

## Pass/Fail — message_standards.md

- **PASS** if templates are pinned in `#proj-chatbot`, the length guard lives in prompts, the deferral macro is active, and the no-PII rule is documented. Otherwise **FAIL**.
