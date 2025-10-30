# Cosmocrat v1 quickstart

1) Copy one or more env samples to `.env` files:
   - `.env` (core) from `.env.sample.core`
   - `.env.re`  from `.env.sample.re`
   - `.env.ecom` from `.env.sample.ecom`
   - `.env.trading` from `.env.sample.trading`

2) Start core stack:
   ```bash
   docker compose -f deploy/cosmocrat/docker-compose.yml --env-file deploy/cosmocrat/.env up -d
   ```
   Add `--env-file` for each lane you’re enabling.

3) Open UIs:
   - n8n: http://localhost:5678
   - Langfuse: http://localhost (via Traefik if routed)

4) Enable flows:
   - Import the 5 Day-1 flows (JSON) into n8n and turn on their Cron/sources.

5) Memory: run Chat Import in n8n → verify retrieval hits.

6) Smoke test RE booking & E-com return.
