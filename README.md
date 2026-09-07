# BetTip Draws API

Free JSON and CSV feed of every **UK49s** draw since September 2018, plus **Gosloto** and the **South African National Lottery** (Lotto, Lotto Plus 1 and 2, PowerBall, PowerBall Plus, Daily Lotto). No key, no account, CORS open. Results land minutes after each draw.

**Base URL:** `https://bettip.co.za/api/v1/` · **Docs:** https://bettip.co.za/api/ · **OpenAPI:** https://bettip.co.za/api/openapi.json

| Endpoint | What you get |
|---|---|
| `uk49s/latest.json` | latest result per draw (Brunchtime, Lunchtime, Drivetime, Teatime) and the last eight overall |
| `uk49s/next.json` | the next draw, its time in SAST and UTC, and seconds to go (computed live) |
| `uk49s/schedule.json` | draw times and the summer/winter rule |
| `uk49s/draws.json` · `uk49s/draws.csv` | every draw, oldest first |
| `uk49s/2026.json` | one year |
| `uk49s/draws/2026-09-06.json` | one date, both draws |
| `gosloto/latest.json` · `gosloto/draws.json` · `gosloto/draws.csv` | Gosloto 4/20, 5/36, 5/50, 6/45, 7/49 |
| `lotto/latest.json` · `lotto/draws.json` · `lotto/draws.csv` · `lotto/payouts.json` | SA National Lottery results and prize divisions |
| `world/latest.json` · `world/draws.json` | France Lotto, Greece Powerball and others |

Every JSON response is wrapped: `{ api, version, docs, attribution, licence, builtAt, resource, data }`.

## Show the results on your own page

[uk49s-widget](https://github.com/zaiqltd/uk49s-widget) renders the latest UK49s draws and a countdown to the next one with one script tag, reading this API. It prints the attribution line for you.

```html
<div data-uk49s-widget data-draws="lunchtime,teatime"></div>
<script src="https://cdn.jsdelivr.net/gh/zaiqltd/uk49s-widget@main/dist/uk49s-widget.min.js" defer></script>
```

## Examples

```js
const r = await fetch('https://bettip.co.za/api/v1/uk49s/latest.json');
const { data } = await r.json();
console.log(data.byDraw.teatime.numbers, data.byDraw.teatime.booster);
```

```python
import requests
draws = requests.get('https://bettip.co.za/api/v1/uk49s/draws.json').json()['data']
print(len(draws), draws[-1])
```

Google Sheets: `=IMPORTDATA("https://bettip.co.za/api/v1/uk49s/draws.csv")`

## The data in this repository

`data/uk49s.csv`, `data/gosloto.csv`, `data/sa-lottery.csv` are the same archives as CSV, refreshed daily by the workflow in `.github/workflows/sync.yml` from the live API. The API is the source of truth; the CSVs are for people who want a file.

## Attribution and licence

Free for any use. Please credit **BetTip** with a link to https://bettip.co.za/ where the data is shown. Results are the operators' published draws, reproduced as facts; no guarantee is given and nothing here is betting advice. 18+. Code in this repository is MIT licensed; the data carries the attribution request above (CC BY 4.0).

If you build something with it, open an issue and say so: it gets listed here.
