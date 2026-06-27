# SG EV Decision Lab

A client-side Singapore EV comparison and 10-year total-cost calculator, initially populated with:

- Hyptec HT Premium
- XPeng G6 Air
- XPeng G6 Pro Long Range RWD

## Features

- Editable electricity, annual distance, COE, insurance and ownership period
- LTA EV road-tax calculation from motor power
- COE-normalised purchase prices
- Per-car maintenance, tyre, finance and terminal-value assumptions
- Full specification comparison
- Persistent dealer-question checklist
- Manual and JSON car imports
- Optional private AI page importer for Gemini or DeepSeek
- Browser-only persistence via `localStorage`

## Run locally

```sh
python3 -m http.server 4173
```

Then open `http://127.0.0.1:4173`.

Run the calculation smoke tests with:

```sh
node tests.mjs
```

## Optional AI importer

GitHub Pages cannot protect an API key. The `worker/` directory therefore contains an optional Cloudflare Worker that fetches a public car page and calls Gemini or DeepSeek using a server-side secret.

1. Copy `worker/wrangler.toml.example` to `worker/wrangler.toml`.
2. Set `ALLOWED_ORIGIN` to the published Pages origin.
3. Choose `AI_PROVIDER = "gemini"` or `"deepseek"`.
4. Store the key with `npx wrangler secret put GEMINI_API_KEY` or `npx wrangler secret put DEEPSEEK_API_KEY`.
5. Deploy from `worker/` with `npx wrangler deploy`.
6. Paste the Worker URL into **Add cars → Configure importer**.

The importer treats unknown specifications as `null`. Always confirm imported values against the local dealer's written specification and sales agreement.

## Data note

The bundled figures are a 27 June 2026 research snapshot, not a live dealer quotation. Prices are adjusted from their published embedded COE to the calculator's Cat A/B COE inputs. Warranty offers and production-batch equipment must be reconfirmed before purchase.
