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

## Data note

The bundled figures are a 27 June 2026 research snapshot, not a live dealer quotation. Prices are adjusted from their published embedded COE to the calculator's Cat A/B COE inputs. Warranty offers and production-batch equipment must be reconfirmed before purchase.
