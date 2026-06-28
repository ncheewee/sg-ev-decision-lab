# SG EV Decision Lab

A client-side Singapore EV comparison and 10-year total-cost calculator, populated with:

- Hyptec HT Premium
- XPeng G6 Air
- XPeng G6 Pro Long Range RWD
- Tesla Model 3 RWD 110 Standard
- Tesla Model 3 Premium RWD 110
- Tesla Model Y Premium RWD 110
- Tesla Model Y Premium Long Range RWD

## Features

- Editable electricity, annual distance, COE, insurance and ownership period
- Selectable side-by-side shortlist with original-three, Tesla-four and all-model presets
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

The bundled figures are a 28 June 2026 research snapshot, not a live dealer quotation. Prices are adjusted from their published embedded COE to the calculator's Cat A/B COE inputs. Tesla range figures explicitly identify estimates versus WLTP where the Singapore product pages distinguish them. Warranty offers and production-batch equipment must be reconfirmed before purchase.

Tesla specifications were checked against the official Singapore [Model 3](https://www.tesla.com/en_sg/model3) and [Model Y](https://www.tesla.com/en_sg/modely) pages. Local price, COE, ARF, road-tax and efficiency snapshots were cross-checked against Sgcarmart's [Model 3](https://www.sgcarmart.com/new-cars/info/12847/tesla-model-3-electric) and [Model Y](https://www.sgcarmart.com/new-cars/info/21506/tesla-model-y-electric) listings.
