const SNAPSHOT = {
  assumptions: { years: 10, annualKm: 20000, electricity: 0.58, catA: 123847, catB: 123502, insurance: 1000 },
  cars: [
    {
      id: "hyptec-ht-premium", make: "HYPTEC", name: "HT Premium", category: "B", publishedPrice: 216988, embeddedCoe: 126236,
      powerKw: 250, torqueNm: 430, zeroTo100: 5.8, topSpeed: 183, efficiency: 5.5, batteryKwh: 83.3, batteryType: "LFP", rangeKm: 520,
      acKw: 6.6, dcKw: 280, fastCharge: "10–70% in 15 min", drive: "RWD", length: 4935, width: 1920, height: 1700, wheelbase: 2935, weight: 2200, boot: 672, wheels: "20-inch",
      suspension: "Double wishbone / five-link", seats: "Nappa; ventilated + massage front", displays: "14.6-inch centre + HUD", audio: "22-speaker Dolby Atmos", mirror: "Conventional",
      processor: "Not disclosed", sensors: "360° camera; inventory to verify", carplay: "Wired; verify wireless OTA", adas: "ACC, AEB, LKA, BSM, driver monitoring", airbags: "6",
      warranty: "8 yr / 160,000 km reported", batteryWarranty: "First-owner ‘Three Electrics’ lifetime offer—verify", service: "10 yr / 200,000 km free servicing reported—verify",
      roadTaxOverride: 3398, arf: 19900, terminalValue: 995, maintenanceAnnual: 0, tyresTenYear: 0, financeCost: 0,
      take: "Best for rear-cabin comfort and sheer space. Its 250 kW road tax is the recurring sting."
    },
    {
      id: "xpeng-g6-air", make: "XPENG", name: "G6 Air", category: "A", publishedPrice: 209999, embeddedCoe: 124790,
      powerKw: 110, torqueNm: 440, zeroTo100: 9.6, topSpeed: 202, efficiency: 5.9, batteryKwh: 68.5, batteryType: "LFP", rangeKm: 470,
      acKw: 11, dcKw: 382, fastCharge: "10–80% in 12 min", drive: "RWD", length: 4758, width: 1920, height: 1650, wheelbase: 2890, weight: 2065, boot: 571, wheels: "18-inch Maxxis",
      suspension: "Double wishbone / multi-link", seats: "Vegan leather; heated + ventilated", displays: "10.25-inch + 15.6-inch", audio: "18-speaker Xopera, 960W", mirror: "Conventional",
      processor: "MediaTek 8676", sensors: "5 cameras + 4 radars", carplay: "Wireless CarPlay + Android Auto", adas: "XPILOT, auto park; reduced LCC perception", airbags: "Verify local spec",
      warranty: "5 yr / 120,000 km", batteryWarranty: "8 yr / 160,000 km; ≥70% capacity", service: "Paid; request schedule and package",
      roadTaxOverride: 1560, arf: 0, terminalValue: 0, maintenanceAnnual: 0, tyresTenYear: 0, financeCost: 0,
      take: "The rational Singapore choice: lowest TCO, ample torque and most of the G6 experience."
    },
    {
      id: "xpeng-g6-pro", make: "XPENG", name: "G6 Pro Long Range", category: "B", publishedPrice: 228999, embeddedCoe: 129501,
      powerKw: 218, torqueNm: 440, zeroTo100: 6.7, topSpeed: 202, efficiency: 5.6, batteryKwh: 80.8, batteryType: "LFP", rangeKm: 525,
      acKw: 11, dcKw: 451, fastCharge: "10–80% in 12 min", drive: "RWD", length: 4758, width: 1920, height: 1650, wheelbase: 2890, weight: 2115, boot: 571, wheels: "20-inch Michelin",
      suspension: "Double wishbone / multi-link", seats: "Nappa; heated, ventilated + massage", displays: "10.25-inch + 15.6-inch", audio: "18-speaker Xopera, 960W", mirror: "Digital streaming",
      processor: "Snapdragon SA8295", sensors: "12 cameras + 5 radars", carplay: "Wireless CarPlay + Android Auto", adas: "Full local XPILOT + auto park", airbags: "Verify local spec",
      warranty: "5 yr / 120,000 km", batteryWarranty: "8 yr / 160,000 km; ≥70% capacity", service: "Paid; request schedule and package",
      roadTaxOverride: 2194, arf: 11181, terminalValue: 559, maintenanceAnnual: 0, tyresTenYear: 0, financeCost: 0,
      take: "Best all-round car: much quicker, richer cabin and stronger sensor hardware, but not the TCO winner."
    }
  ]
};

const comparisonRows = [
  ["Price & tax", "COE category", "category"], ["Price & tax", "Published price", "publishedPrice", "money"], ["Price & tax", "Price at entered COE", "adjustedPrice", "money"], ["Price & tax", "Annual road tax", "annualTax", "money"],
  ["Performance", "Power", "powerKw", "kw"], ["Performance", "Torque", "torqueNm", "nm"], ["Performance", "0–100 km/h", "zeroTo100", "seconds", "low"], ["Performance", "Top speed", "topSpeed", "kmh"], ["Performance", "Driven wheels", "drive"],
  ["Battery & charging", "Battery", "batteryKwh", "kwh"], ["Battery & charging", "Chemistry", "batteryType"], ["Battery & charging", "WLTP range", "rangeKm", "km"], ["Battery & charging", "Rated efficiency", "efficiency", "kmkwh", "high"], ["Battery & charging", "AC charging", "acKw", "kw"], ["Battery & charging", "Peak DC charging", "dcKw", "kw"], ["Battery & charging", "Fast-charge claim", "fastCharge"],
  ["Dimensions", "Length", "length", "mm"], ["Dimensions", "Width", "width", "mm"], ["Dimensions", "Height", "height", "mm"], ["Dimensions", "Wheelbase", "wheelbase", "mm"], ["Dimensions", "Kerb weight", "weight", "kg", "low"], ["Dimensions", "Boot", "boot", "litres"], ["Dimensions", "Wheels", "wheels"], ["Dimensions", "Suspension", "suspension"],
  ["Cabin & technology", "Seats", "seats"], ["Cabin & technology", "Displays", "displays"], ["Cabin & technology", "Audio", "audio"], ["Cabin & technology", "Rear-view mirror", "mirror"], ["Cabin & technology", "Cabin processor", "processor"], ["Cabin & technology", "Phone integration", "carplay"],
  ["Safety & ownership", "Camera/radar hardware", "sensors"], ["Safety & ownership", "Driver assistance", "adas"], ["Safety & ownership", "Airbags", "airbags"], ["Safety & ownership", "Vehicle warranty", "warranty"], ["Safety & ownership", "Battery warranty", "batteryWarranty"], ["Safety & ownership", "Servicing", "service"]
];

const commonQuestions = {
  "The actual deal": [
    ["Give me the written, all-in price using the latest COE.", "Show vehicle price and COE separately; state guaranteed/non-guaranteed and number of bids."],
    ["What is the true cash price with no loan, trade-in or dealer insurance?", "Then itemise every rebate that disappears if you decline a condition."],
    ["What are the OMV, final ARF, VES/EEAI rebates and expected PARF?", "Ask for the registration figures, not an estimate from a salesperson."],
    ["What is the build month, incoming-stock status and committed delivery date?", "Add the exact colour/interior and chassis/model year to the sales order."],
    ["What makes the deposit refundable or non-refundable?", "Cover failed loan, COE expiry, delayed delivery and changed specifications."],
    ["Give me a firm trade-in quote for my Nov 2016 BMW 216D.", "Ask how long the quote stays valid and whether it is independent of new-car discounts."]
  ],
  "Warranty & aftersales": [
    ["Put the full vehicle, motor, inverter and battery warranties in writing.", "Include time, mileage, first-owner limitations and transferability."],
    ["What battery State-of-Health threshold triggers repair or replacement?", "Clarify measurement method, labour, exclusions and whether degradation is covered."],
    ["Give me the service schedule and ten-year cost.", "Include labour, fluids, air-con filters, brake fluid and mandatory inspections."],
    ["Where is the workshop and what are current parts lead times?", "Ask about replacement cars, roadside assistance and typical diagnostic turnaround."],
    ["Which warranty items require authorised-dealer servicing?", "Also ask whether aftermarket tyres, dashcams or electrical accessories affect coverage."]
  ],
  "Car & software": [
    ["Confirm the exact local-production-month equipment list.", "Attach it to the order; websites warn that equipment can vary by production batch."],
    ["Demonstrate every ADAS and auto-parking function on the actual local car.", "Test lane centring, ACC, blind-spot views, 360° camera and driver monitoring."],
    ["Are app connectivity, data services, maps and OTA updates free for ten years?", "Ask what stops working if a subscription ends or the distributor changes."],
    ["Confirm AC/DC limits, cable supplied and battery preconditioning behaviour.", "Quoted peak charging requires a compatible charger and suitable battery conditions."],
    ["What charging or software faults have service campaigns or outstanding fixes?", "Ask for current campaign completion on the allocated chassis."]
  ],
  "Test-drive checks": [
    ["Drive it over patched roads, humps and a tight multi-storey carpark.", "Listen for tyre roar, suspension busyness and check turning circle/visibility."],
    ["Sit three adults across the rear and load the actual family luggage.", "Check headroom, seat base support, doors, boot slope and charging-cable storage."],
    ["Test air-con pull-down after the car has sat in the sun.", "Also test rear vents, ventilated seats and screen heat/reflections."],
    ["Price one replacement tyre and a full matching set.", "Record brand, size, load rating and whether the tyre is commonly stocked locally."]
  ]
};

const specificQuestions = {
  "hyptec-ht-premium": [
    ["Will ‘Three Electrics Lifetime Warranty’ appear verbatim in my agreement?", "Confirm battery, motor and integrated power system coverage, first-owner clause and exclusions."],
    ["Is 10 years/200,000 km free servicing still included for this exact deal?", "Ask what consumables and labour are excluded."],
    ["Is local AC charging definitely limited to 6.6 kW?", "Confirm actual onboard charger and a realistic 10–100% AC time."],
    ["Does this build have wireless CarPlay/Android Auto now?", "Demonstrate it; do not accept a future-OTA promise without a date."],
    ["Is an HT replacement/facelift planned for Singapore?", "Ask how long current-model parts and software support are committed."],
    ["Confirm annual road tax at 250 kW and all rear comfort equipment.", "Test massage, ventilation, recline, footrest/table and memory on the actual Premium car."]
  ],
  "xpeng-g6-air": [
    ["Confirm the Air has 5 cameras and 4 radars versus the Pro hardware.", "Ask which XPILOT functions or future updates it cannot receive."],
    ["Demonstrate the Air’s lane centring and instrument visualisation.", "Compare it back-to-back with the Pro on the same route."],
    ["Confirm MediaTek 8676, vegan seats and conventional rear-view mirror.", "Also confirm no massage function and the exact roof-liner material."],
    ["Price the original 18-inch Maxxis tyres and premium-brand alternatives.", "Confirm any efficiency/range or warranty impact of changing brand."],
    ["Confirm the motor is LTA-rated at exactly 110 kW and road tax is about $1,560.", "Ensure this is the Cat A homologated car, not another market variant."]
  ],
  "xpeng-g6-pro": [
    ["Confirm 12 cameras, 5 radars and the Snapdragon SA8295 processor.", "Ask whether every sensor is active in Singapore or only reserved for future functions."],
    ["Demonstrate Nappa seats, both massage functions and digital mirror.", "Check memory, heating, ventilation and mirror clarity at night."],
    ["Where in Singapore or Malaysia can I actually reach near 451 kW?", "Peak capability is not useful if compatible chargers are unavailable."],
    ["Price one original 20-inch Michelin tyre and a full set.", "Compare against the Air’s 18-inch running cost."],
    ["Confirm annual road tax at 218 kW and the 80.8 kWh LFP pack.", "Ask for homologation/spec sheet and usable versus gross battery capacity."]
  ]
};

const money = new Intl.NumberFormat("en-SG", { style: "currency", currency: "SGD", maximumFractionDigits: 0 });
const number = new Intl.NumberFormat("en-SG", { maximumFractionDigits: 1 });
const clone = value => JSON.parse(JSON.stringify(value));
const stored = JSON.parse(localStorage.getItem("sgEvDecisionLab") || "null");
let state = stored || clone(SNAPSHOT);
let activeFilter = "All";
let activeDealer = state.cars[0]?.id;

function roadTax(powerKw) {
  let base;
  if (powerKw <= 7.5) base = 200 * .782;
  else if (powerKw <= 30) base = (200 + 2 * (powerKw - 7.5)) * .782;
  else if (powerKw <= 230) base = (250 + 3.75 * (powerKw - 30)) * .782;
  else base = (1525 + 10 * (powerKw - 230)) * .782;
  return Math.round((base + 350) * 2);
}

function metrics(car) {
  const a = state.assumptions;
  const coe = car.category === "A" ? a.catA : a.catB;
  const adjustedPrice = car.publishedPrice - car.embeddedCoe + coe;
  const annualEnergy = (a.annualKm / car.efficiency) * a.electricity;
  const annualTax = car.roadTaxOverride || roadTax(car.powerKw);
  const running = a.years * (annualEnergy + annualTax + a.insurance + (car.maintenanceAnnual || 0));
  const other = (car.tyresTenYear || 0) * (a.years / 10) + (car.financeCost || 0);
  const tco = adjustedPrice + running + other - (car.terminalValue || 0);
  return { adjustedPrice, annualEnergy, annualTax, running, other, tco, monthly: tco/(a.years*12), costKm: tco/(a.years*a.annualKm) };
}

function save() { localStorage.setItem("sgEvDecisionLab", JSON.stringify(state)); }
function toast(message) { const el=document.querySelector("#toast"); el.textContent=message; el.classList.add("show"); setTimeout(()=>el.classList.remove("show"),2200); }
function inputField(label, key, value, prefix="", suffix="") { return `<div class="field"><label for="${key}">${label}</label><div class="input-shell">${prefix?`<span>${prefix}</span>`:""}<input id="${key}" data-assumption="${key}" type="number" step="any" value="${value}">${suffix?`<span>${suffix}</span>`:""}</div></div>`; }

function renderAssumptions() {
  const a=state.assumptions;
  document.querySelector("#assumptionInputs").innerHTML = [
    inputField("Ownership", "years", a.years, "", "yr"), inputField("Annual distance", "annualKm", a.annualKm, "", "km"), inputField("Charging", "electricity", a.electricity, "$", "/kWh"),
    inputField("Cat A COE", "catA", a.catA, "$"), inputField("Cat B COE", "catB", a.catB, "$"), inputField("Insurance / car", "insurance", a.insurance, "$", "/yr")
  ].join("");
  document.querySelectorAll("[data-assumption]").forEach(el=>el.addEventListener("input", e=>{ state.assumptions[e.target.dataset.assumption]=Number(e.target.value)||0; save(); renderResults(); }));
  document.querySelector("#advancedInputs").innerHTML = state.cars.map(car => `<div class="advanced-car"><strong>${car.make} ${car.name}</strong>${carCostField(car,"Maintenance / year","maintenanceAnnual")}${carCostField(car,"Tyres / 10 years","tyresTenYear")}${carCostField(car,"Finance cost","financeCost")}${carCostField(car,"Terminal value","terminalValue")}</div>`).join("");
  document.querySelectorAll("[data-car-cost]").forEach(el=>el.addEventListener("input", e=>{ const car=state.cars.find(c=>c.id===e.target.dataset.car); car[e.target.dataset.carCost]=Number(e.target.value)||0; save(); renderResults(); }));
}
function carCostField(car,label,key){ return `<div class="field"><label>${label}</label><div class="input-shell"><span>$</span><input type="number" step="any" data-car="${car.id}" data-car-cost="${key}" value="${car[key]||0}"></div></div>`; }

function renderResults() {
  if (!state.cars.length) return;
  const ranked=[...state.cars].sort((a,b)=>metrics(a).tco-metrics(b).tco);
  const best=ranked[0], bestM=metrics(best), second=ranked[1], delta=second?metrics(second).tco-bestM.tco:0;
  document.querySelector("#heroVerdict").innerHTML=`<span class="label">CURRENT TCO WINNER</span><h2>${best.make} ${best.name}</h2><div class="verdict-price">${money.format(bestM.tco)} <small>over ${state.assumptions.years} years</small></div><p>${second?`It is <strong>${money.format(delta)} cheaper</strong> than the next car under your assumptions.`:"Add another car to create a comparison."}</p>`;
  document.querySelector("#carCards").innerHTML=state.cars.map(car=>{const m=metrics(car);return `<article class="car-card ${car.id===best.id?"best":""}">${car.id===best.id?'<span class="rank-tag">LOWEST TCO</span>':""}<span class="make">${car.make} · CAT ${car.category}</span><h3>${car.name}</h3><div class="tco-number">${money.format(m.tco)}<small>${state.assumptions.years}-year total · ${money.format(m.monthly)}/month</small></div><div class="card-stats"><span>Latest-COE price<strong>${money.format(m.adjustedPrice)}</strong></span><span>Energy / year<strong>${money.format(m.annualEnergy)}</strong></span><span>Road tax / year<strong>${money.format(m.annualTax)}</strong></span><span>Cost / km<strong>$${m.costKm.toFixed(2)}</strong></span></div>${SNAPSHOT.cars.some(c=>c.id===car.id)?"":`<button class="delete-car" data-delete-car="${car.id}">Remove</button>`}</article>`}).join("");
  const max=Math.max(...state.cars.map(c=>metrics(c).tco));
  document.querySelector("#costChart").innerHTML=state.cars.map(car=>{const m=metrics(car), years=state.assumptions.years, energy=m.annualEnergy*years,tax=m.annualTax*years,other=state.assumptions.insurance*years+(car.maintenanceAnnual||0)*years+(car.tyresTenYear||0)*(years/10)+(car.financeCost||0);return `<div class="chart-row"><div class="chart-name">${car.make} ${car.name}</div><div class="stacked-bar" style="max-width:${m.tco/max*100}%"><i class="bar-purchase" style="width:${m.adjustedPrice/m.tco*100}%"></i><i class="bar-energy" style="width:${energy/m.tco*100}%"></i><i class="bar-tax" style="width:${tax/m.tco*100}%"></i><i class="bar-other" style="width:${other/m.tco*100}%"></i></div><div class="chart-total">${money.format(m.tco)}</div></div>`}).join("");
  const air=state.cars.find(c=>c.id==="xpeng-g6-air"), pro=state.cars.find(c=>c.id==="xpeng-g6-pro"), ht=state.cars.find(c=>c.id==="hyptec-ht-premium");
  const upgrade=air&&pro?metrics(pro).monthly-metrics(air).monthly:0, htPro=ht&&pro?Math.abs(metrics(ht).tco-metrics(pro).tco):0;
  document.querySelector("#analysisGrid").innerHTML=`<article class="analysis-card"><p class="eyebrow">FINANCIAL PICK</p><h3>${air?"G6 Air":"Lowest TCO"}</h3><p>${air&&pro?`The Pro experience costs about <strong>${money.format(upgrade)}/month</strong> extra. The Air also carries cheaper 18-inch tyres.`:"The lowest-cost car changes live with your inputs."}</p></article><article class="analysis-card"><p class="eyebrow">ALL-ROUNDER</p><h3>${pro?"G6 Pro":"Balance"}</h3><p>Pay for the Pro if richer seats, stronger ADAS hardware and performance will matter every day—not for its modest range gain alone.</p></article><article class="analysis-card"><p class="eyebrow">COMFORT PICK</p><h3>${ht?"Hyptec HT":"Cabin"}</h3><p>${ht&&pro?`Only <strong>${money.format(htPro)}</strong> separates the HT and Pro over the full term. Let rear comfort versus software decide.`:"Compare cabin comfort independently from cost."}</p></article>`;
  document.querySelectorAll("[data-delete-car]").forEach(b=>b.addEventListener("click",()=>{state.cars=state.cars.filter(c=>c.id!==b.dataset.deleteCar); save(); activeDealer=state.cars[0]?.id; renderAll();}));
  renderComparison();
}

function formatCell(car,key,fmt){ const m=metrics(car); const v=key in m?m[key]:car[key]; if(v===undefined||v===null||v==="")return '<span class="verify-badge">VERIFY</span>'; const f={money:()=>money.format(v),kw:()=>`${number.format(v)} kW`,nm:()=>`${number.format(v)} Nm`,seconds:()=>`${number.format(v)} sec`,kmh:()=>`${number.format(v)} km/h`,kwh:()=>`${number.format(v)} kWh`,km:()=>`${number.format(v)} km`,kmkwh:()=>`${number.format(v)} km/kWh`,mm:()=>`${number.format(v)} mm`,kg:()=>`${number.format(v)} kg`,litres:()=>`${number.format(v)} L`}; return f[fmt]?f[fmt]():String(v); }
function renderComparison(){
  const cats=["All",...new Set(comparisonRows.map(r=>r[0]))]; document.querySelector("#comparisonFilters").innerHTML=cats.map(c=>`<button class="filter-chip ${c===activeFilter?"active":""}" data-filter="${c}">${c}</button>`).join("");
  let last=""; const rows=comparisonRows.filter(r=>activeFilter==="All"||r[0]===activeFilter).map(row=>{const [cat,label,key,fmt,better]=row; let category="";if(cat!==last){category=`<tr class="category-row"><th colspan="${state.cars.length+1}">${cat}</th></tr>`;last=cat;} const vals=state.cars.map(c=>key==="roadTax"?metrics(c).annualTax:(key in metrics(c)?metrics(c)[key]:c[key])); let bestIndex=-1;if(better&&vals.every(v=>typeof v==="number")){bestIndex=better==="low"?vals.indexOf(Math.min(...vals)):vals.indexOf(Math.max(...vals));}return `${category}<tr><th>${label}</th>${state.cars.map((c,i)=>`<td class="${i===bestIndex?"winner-cell":""}">${formatCell(c,key,fmt)}</td>`).join("")}</tr>`;}).join("");
  document.querySelector("#comparisonTable").innerHTML=`<thead><tr><th>Specification</th>${state.cars.map(c=>`<th>${c.make}<br>${c.name}</th>`).join("")}</tr></thead><tbody>${rows}</tbody>`;
  document.querySelectorAll("[data-filter]").forEach(b=>b.addEventListener("click",()=>{activeFilter=b.dataset.filter;renderComparison();}));
}

function checklistKey(carId,index){return `check:${carId}:${index}`;}
function renderChecklist(){
  if(!state.cars.length)return; if(!state.cars.some(c=>c.id===activeDealer))activeDealer=state.cars[0].id; const car=state.cars.find(c=>c.id===activeDealer);
  document.querySelector("#dealerTabs").innerHTML=state.cars.map(c=>`<button class="dealer-tab ${c.id===activeDealer?"active":""}" data-dealer="${c.id}">${c.make} ${c.name}</button>`).join("");
  const groups={...commonQuestions,"Model-specific":specificQuestions[car.id]||[["Confirm every imported specification in writing.","Imported data may be incomplete or refer to a different market variant."]]}; let idx=0,total=0,checked=0;
  const body=Object.entries(groups).map(([group,items])=>`<div class="question-group"><h3>${group}</h3>${items.map(([q,note])=>{const key=checklistKey(car.id,idx++);total++;const on=localStorage.getItem(key)==="1";if(on)checked++;return `<div class="check-item"><input type="checkbox" id="${key}" data-check-key="${key}" ${on?"checked":""}><label for="${key}">${q}<small>${note}</small></label></div>`}).join("")}</div>`).join("");
  document.querySelector("#dealerChecklist").innerHTML=`<div class="checklist-progress"><div><p class="eyebrow">${car.make} ${car.name}</p><strong>${checked} of ${total} checked</strong></div><div class="progress-track"><i style="width:${total?checked/total*100:0}%"></i></div></div>${body}`;
  document.querySelectorAll("[data-dealer]").forEach(b=>b.addEventListener("click",()=>{activeDealer=b.dataset.dealer;renderChecklist();})); document.querySelectorAll("[data-check-key]").forEach(c=>c.addEventListener("change",()=>{localStorage.setItem(c.dataset.checkKey,c.checked?"1":"0");renderChecklist();}));
}

const formFields=[
  ["Make","make","text"],["Model / variant","name","text"],["COE category","category","select"],["Published price","publishedPrice","number"],["COE embedded in price","embeddedCoe","number"],["Power (kW)","powerKw","number"],["Efficiency (km/kWh)","efficiency","number"],["Battery (kWh)","batteryKwh","number"],["WLTP range (km)","rangeKm","number"],["DC charging (kW)","dcKw","number"],["Annual maintenance","maintenanceAnnual","number"],["Terminal value","terminalValue","number"]
];
function openCarDialog(prefill={}){document.querySelector("#carFormFields").innerHTML=formFields.map(([label,key,type])=>`<label>${label}${type==="select"?`<select name="${key}"><option>A</option><option>B</option></select>`:`<input name="${key}" type="${type}" step="any" value="${prefill[key]??""}" ${["make","name","publishedPrice","embeddedCoe","powerKw","efficiency"].includes(key)?"required":""}>`}</label>`).join("");document.querySelector("#carDialog").showModal();}
function normaliseCar(raw){const slug=`${raw.make||"car"}-${raw.name||Date.now()}`.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"");return {...raw,id:`${slug}-${Date.now().toString(36)}`,make:String(raw.make||"OTHER").toUpperCase(),name:String(raw.name||"Unnamed car"),category:raw.category==="A"?"A":"B",publishedPrice:Number(raw.publishedPrice)||0,embeddedCoe:Number(raw.embeddedCoe)||0,powerKw:Number(raw.powerKw)||0,efficiency:Number(raw.efficiency)||5,batteryKwh:Number(raw.batteryKwh)||0,rangeKm:Number(raw.rangeKm)||0,dcKw:Number(raw.dcKw)||0,maintenanceAnnual:Number(raw.maintenanceAnnual)||0,terminalValue:Number(raw.terminalValue)||0,tyresTenYear:Number(raw.tyresTenYear)||0,financeCost:Number(raw.financeCost)||0,take:raw.take||"New contender—verify imported specifications with the dealer."};}
function addCar(raw){const car=normaliseCar(raw);state.cars.push(car);activeDealer=car.id;save();renderAll();toast(`${car.make} ${car.name} added`);}

function bindDialogs(){
  document.querySelectorAll("[data-open-add]").forEach(b=>b.addEventListener("click",()=>openCarDialog()));
  document.querySelector("#carForm").addEventListener("submit",e=>{if(e.submitter?.value==="cancel")return; e.preventDefault();const data=Object.fromEntries(new FormData(e.target));addCar(data);document.querySelector("#carDialog").close();});
  document.querySelector("#openJsonImport").addEventListener("click",()=>{document.querySelector("#jsonError").textContent="";document.querySelector("#jsonDialog").showModal();});
  document.querySelector("#jsonForm").addEventListener("submit",e=>{if(e.submitter?.value==="cancel")return;e.preventDefault();try{addCar(JSON.parse(document.querySelector("#jsonInput").value));document.querySelector("#jsonDialog").close();}catch(err){document.querySelector("#jsonError").textContent=`Could not import: ${err.message}`;}});
  document.querySelector("#copyJsonExample").addEventListener("click",()=>{const example={make:"BYD",name:"Sealion 7 Premium",category:"B",publishedPrice:0,embeddedCoe:state.assumptions.catB,powerKw:230,efficiency:5.0,batteryKwh:82.5,rangeKm:482,dcKw:150,terminalValue:0};navigator.clipboard.writeText(JSON.stringify(example,null,2));toast("Example JSON copied");});
  document.querySelector("#openAiImport").addEventListener("click",()=>{document.querySelector("#importEndpoint").value=localStorage.getItem("sgEvImporterEndpoint")||"";document.querySelector("#aiDialog").showModal();});
  document.querySelector("#aiForm").addEventListener("submit",async e=>{if(e.submitter?.value==="cancel")return;e.preventDefault();const endpoint=document.querySelector("#importEndpoint").value.replace(/\/$/,""),url=document.querySelector("#importUrl").value,status=document.querySelector("#importStatus");if(!endpoint||!url){status.textContent="Enter both the endpoint and car-page URL.";return;}localStorage.setItem("sgEvImporterEndpoint",endpoint);status.textContent="Fetching and extracting specifications…";e.submitter.disabled=true;try{const res=await fetch(`${endpoint}/extract`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({url})});const body=await res.json();if(!res.ok)throw new Error(body.error||`HTTP ${res.status}`);addCar(body.car||body);document.querySelector("#aiDialog").close();}catch(err){status.textContent=`Import failed: ${err.message}`;}finally{e.submitter.disabled=false;}});
}

function renderAll(){renderAssumptions();renderResults();renderChecklist();}
document.querySelector("#resetButton").addEventListener("click",()=>{if(confirm("Reset cars, assumptions and advanced costs to the June 2026 snapshot?")){state=clone(SNAPSHOT);save();activeDealer=state.cars[0].id;renderAll();toast("Calculator reset");}});
document.querySelector("#printChecklist").addEventListener("click",()=>window.print());
bindDialogs();renderAll();

window.SGEV = { roadTax, metrics: car => metrics(car), snapshot: clone(SNAPSHOT) };
