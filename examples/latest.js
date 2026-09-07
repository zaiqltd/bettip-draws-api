// Node 18+ or any browser. Prints the latest UK49s Teatime result.
const { data } = await (await fetch('https://bettip.co.za/api/v1/uk49s/latest.json')).json();
const t = data.byDraw.teatime;
console.log(`Teatime ${t.date}: ${t.numbers.join(' ')} booster ${t.booster}`);
