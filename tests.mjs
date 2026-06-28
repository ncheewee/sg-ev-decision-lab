import fs from "node:fs";
import vm from "node:vm";
import assert from "node:assert/strict";

const source = fs.readFileSync(new URL("./app.js", import.meta.url), "utf8");
const match = source.match(/function roadTax\(powerKw\) \{[\s\S]*?\n\}/);
assert(match, "roadTax function exists");
const context = {};
vm.runInNewContext(`${match[0]}; globalThis.roadTax = roadTax`, context);
assert.equal(context.roadTax(110), 1560);
assert.equal(context.roadTax(218), 2194);
assert.equal(context.roadTax(250), 3398);

const html = fs.readFileSync(new URL("./index.html", import.meta.url), "utf8");
const css = fs.readFileSync(new URL("./styles.css", import.meta.url), "utf8");
assert(html.includes("Dealer interrogation list"));
assert(!html.includes("Add a car"));
assert(!html.includes("AI page importer"));
assert(html.includes("app.js"));
assert(css.includes("tbody th:not([colspan])"));
assert(css.includes("tr.category-row th { position:relative; z-index:1"));
console.log("All calculator checks passed.");
