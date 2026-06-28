const SNAPSHOT = {
  assumptions: { years: 10, annualKm: 20000, electricity: 0.58, catA: 123847, catB: 123502, insurance: 1000 },
  defaultSelectedCarIds: ["hyptec-ht-premium", "xpeng-g6-air", "xpeng-g6-pro"],
  cars: [
    {
      id: "hyptec-ht-premium", make: "HYPTEC", name: "HT Premium", category: "B", publishedPrice: 216988, embeddedCoe: 126236,
      powerKw: 250, torqueNm: 430, zeroTo100: 5.8, topSpeed: 183, efficiency: 5.5, batteryKwh: 83.3, batteryType: "LFP", rangeKm: 520, rangeBasis: "WLTP claim",
      acKw: 6.6, dcKw: 280, fastCharge: "10–70% in 15 min", drive: "RWD", length: 4935, width: 1920, height: 1700, wheelbase: 2935, weight: 2200, boot: 672, wheels: "20-inch",
      suspension: "Double wishbone / five-link", seats: "Nappa; ventilated + massage front", displays: "14.6-inch centre + HUD", audio: "22-speaker Dolby Atmos", mirror: "Conventional",
      processor: "Not disclosed", sensors: "360° camera; inventory to verify", carplay: "Wired; verify wireless OTA", adas: "ACC, AEB, LKA, BSM, driver monitoring", airbags: "6",
      warranty: "8 yr / 160,000 km reported", batteryWarranty: "First-owner ‘Three Electrics’ lifetime offer—verify", service: "10 yr / 200,000 km free servicing reported—verify",
      roadTaxOverride: 3398, arf: 19900, dealerOffer: 0, terminalValue: 995, maintenanceAnnual: 0, tyresTenYear: 0, financeCost: 0,
      take: "Best for rear-cabin comfort and sheer space. Its 250 kW road tax is the recurring sting."
    },
    {
      id: "xpeng-g6-air", make: "XPENG", name: "G6 Air", category: "A", publishedPrice: 209999, embeddedCoe: 124790,
      powerKw: 110, torqueNm: 440, zeroTo100: 9.6, topSpeed: 202, efficiency: 5.9, batteryKwh: 68.5, batteryType: "LFP", rangeKm: 470, rangeBasis: "WLTP",
      acKw: 11, dcKw: 382, fastCharge: "10–80% in 12 min", drive: "RWD", length: 4758, width: 1920, height: 1650, wheelbase: 2890, weight: 2065, boot: 571, wheels: "18-inch Maxxis",
      suspension: "Double wishbone / multi-link", seats: "Vegan leather; heated + ventilated", displays: "10.25-inch + 15.6-inch", audio: "18-speaker Xopera, 960W", mirror: "Conventional",
      processor: "MediaTek 8676", sensors: "5 cameras + 4 radars", carplay: "Wireless CarPlay + Android Auto", adas: "XPILOT, auto park; reduced LCC perception", airbags: "Verify local spec",
      warranty: "5 yr / 120,000 km", batteryWarranty: "8 yr / 160,000 km; ≥70% capacity", service: "Paid; request schedule and package",
      roadTaxOverride: 1560, arf: 0, dealerOffer: 0, terminalValue: 0, maintenanceAnnual: 0, tyresTenYear: 0, financeCost: 0,
      take: "The rational Singapore choice: lowest TCO, ample torque and most of the G6 experience."
    },
    {
      id: "xpeng-g6-pro", make: "XPENG", name: "G6 Pro Long Range", category: "B", publishedPrice: 228999, embeddedCoe: 129501,
      powerKw: 218, torqueNm: 440, zeroTo100: 6.7, topSpeed: 202, efficiency: 5.6, batteryKwh: 80.8, batteryType: "LFP", rangeKm: 525, rangeBasis: "WLTP",
      acKw: 11, dcKw: 451, fastCharge: "10–80% in 12 min", drive: "RWD", length: 4758, width: 1920, height: 1650, wheelbase: 2890, weight: 2115, boot: 571, wheels: "20-inch Michelin",
      suspension: "Double wishbone / multi-link", seats: "Nappa; heated, ventilated + massage", displays: "10.25-inch + 15.6-inch", audio: "18-speaker Xopera, 960W", mirror: "Digital streaming",
      processor: "Snapdragon SA8295", sensors: "12 cameras + 5 radars", carplay: "Wireless CarPlay + Android Auto", adas: "Full local XPILOT + auto park", airbags: "Verify local spec",
      warranty: "5 yr / 120,000 km", batteryWarranty: "8 yr / 160,000 km; ≥70% capacity", service: "Paid; request schedule and package",
      roadTaxOverride: 2194, arf: 11181, dealerOffer: 0, terminalValue: 559, maintenanceAnnual: 0, tyresTenYear: 0, financeCost: 0,
      take: "Best all-round car: much quicker, richer cabin and stronger sensor hardware, but not the TCO winner."
    },
    {
      id: "tesla-model-3-rwd-110", make: "TESLA", name: "Model 3 RWD 110 · Standard", category: "A", publishedPrice: 187999, embeddedCoe: 123847,
      powerKw: 110, torqueNm: null, zeroTo100: 8.6, topSpeed: 201, efficiency: 7.7, batteryKwh: 62.5, batteryType: "LFP", rangeKm: 534, rangeBasis: "18-inch WLTP claim",
      acKw: 11, dcKw: 175, fastCharge: "Up to 270 km added in 15 min", drive: "RWD", length: 4720, width: 1933, height: 1440, wheelbase: 2875, weight: 1768, boot: 682, bootLabel: "682 L total cargo (Tesla method)", wheels: "18-inch steel",
      suspension: "Double wishbone / multi-link; passive dampers", seats: "Vegan leather/textile; heated + ventilated front; no rear heat", displays: "15.4-inch centre; no rear screen", audio: "7 speakers; no FM/DAB", mirror: "Power-folding; auto-dimming to verify",
      processor: "Not disclosed", sensors: "8 exterior cameras", carplay: "No CarPlay or Android Auto", adas: "Traffic-aware cruise; Autosteer availability to verify", airbags: "Verify local specification",
      warranty: "4 yr / 80,000 km", batteryWarranty: "8 yr / 160,000 km; ≥70% capacity", service: "Condition-based; no fixed annual Tesla service requirement",
      roadTaxOverride: 1560, arf: 11568, dealerOffer: 0, terminalValue: 578, maintenanceAnnual: 0, tyresTenYear: 0, financeCost: 0,
      take: "The efficiency and Cat A tax play. It keeps the drivetrain and range, but strips meaningful cabin equipment."
    },
    {
      id: "tesla-model-3-premium-110", make: "TESLA", name: "Model 3 Premium RWD 110", category: "A", publishedPrice: 202999, embeddedCoe: 123847,
      powerKw: 110, torqueNm: null, zeroTo100: 8.6, topSpeed: 201, efficiency: 7.7, batteryKwh: 62.5, batteryType: "LFP", rangeKm: 534, rangeBasis: "18-inch estimate; 19-inch 520 km WLTP",
      acKw: 11, dcKw: 175, fastCharge: "Up to 243 km added in 15 min", drive: "RWD", length: 4720, width: 1933, height: 1441, wheelbase: 2875, weight: 1760, boot: 682, bootLabel: "682 L total cargo (Tesla method)", wheels: "18-inch alloy; 19-inch option",
      suspension: "Double wishbone / multi-link; frequency-dependent dampers", seats: "Perforated vegan leather; ventilated front + heated rear", displays: "15.4-inch centre + 8-inch rear", audio: "9 speakers; FM/DAB", mirror: "Power-folding + auto-dimming",
      processor: "Not disclosed", sensors: "8 exterior cameras", carplay: "No CarPlay or Android Auto", adas: "Autopilot: traffic-aware cruise + Autosteer", airbags: "Verify local specification",
      warranty: "4 yr / 80,000 km", batteryWarranty: "8 yr / 160,000 km; ≥70% capacity", service: "Condition-based; no fixed annual Tesla service requirement",
      roadTaxOverride: 1560, arf: 26560, dealerOffer: 0, terminalValue: 1328, maintenanceAnnual: 0, tyresTenYear: 0, financeCost: 0,
      take: "The smarter Model 3 trim if the rear screen, acoustic glass, better seats and dampers matter over ten years."
    },
    {
      id: "tesla-model-y-110", make: "TESLA", name: "Model Y Premium RWD 110", category: "A", publishedPrice: 222999, embeddedCoe: 123847,
      powerKw: 110, torqueNm: null, zeroTo100: 9.6, topSpeed: 201, efficiency: 6.5, batteryKwh: 62.5, batteryType: "LFP", rangeKm: 488, rangeBasis: "19-inch estimate; 20-inch 466 km WLTP",
      acKw: 11, dcKw: 175, fastCharge: "Up to 238 km added in 15 min", drive: "RWD", length: 4790, width: 1982, height: 1624, wheelbase: 2890, weight: 1921, boot: 2138, bootLabel: "2,138 L maximum cargo (Tesla method)", wheels: "19-inch; 20-inch option",
      suspension: "Double wishbone / multi-link", seats: "Vegan leather; ventilated front + heated rear", displays: "16-inch centre + 8-inch rear", audio: "Premium Tesla audio; speaker count to verify", mirror: "Power-folding + auto-dimming",
      processor: "Not disclosed", sensors: "8 exterior cameras + front bumper camera", carplay: "No CarPlay or Android Auto", adas: "Autopilot; FSD capability is optional and supervised", airbags: "Verify local specification",
      warranty: "4 yr / 80,000 km", batteryWarranty: "8 yr / 160,000 km; ≥70% capacity", service: "Condition-based; no fixed annual Tesla service requirement",
      roadTaxOverride: 1560, arf: 26886, dealerOffer: 0, terminalValue: 1344, maintenanceAnnual: 0, tyresTenYear: 0, financeCost: 0,
      take: "The Cat A family-space choice, trading acceleration and long-range headroom for a substantially lower recurring tax bill."
    },
    {
      id: "tesla-model-y-premium", make: "TESLA", name: "Model Y Premium Long Range RWD", category: "B", publishedPrice: 237999, embeddedCoe: 123502,
      powerKw: 220, torqueNm: null, zeroTo100: 5.8, topSpeed: 201, efficiency: 7.04, batteryKwh: 84, batteryType: "Lithium-ion; chemistry not disclosed", rangeKm: 691, rangeBasis: "Tesla estimate; verify homologated WLTP",
      acKw: 11, dcKw: 250, fastCharge: "Up to 267 km added in 15 min", drive: "RWD", length: 4790, width: 1982, height: 1624, wheelbase: 2890, weight: 1901, boot: 2138, bootLabel: "2,138 L maximum cargo (Tesla method)", wheels: "19-inch",
      suspension: "Double wishbone / multi-link", seats: "Vegan leather; ventilated front + heated rear", displays: "16-inch centre + 8-inch rear", audio: "Premium Tesla audio; speaker count to verify", mirror: "Power-folding + auto-dimming",
      processor: "Not disclosed", sensors: "8 exterior cameras + front bumper camera", carplay: "No CarPlay or Android Auto", adas: "Autopilot; FSD capability is optional and supervised", airbags: "Verify local specification",
      warranty: "4 yr / 80,000 km", batteryWarranty: "8 yr / 192,000 km; ≥70% capacity", service: "Condition-based; no fixed annual Tesla service requirement",
      roadTaxOverride: 2205, arf: 34137, dealerOffer: 0, terminalValue: 1707, maintenanceAnnual: 0, tyresTenYear: 0, financeCost: 0,
      take: "The range and performance upgrade, but the Cat B purchase price and 220 kW road tax need to earn their keep."
    }
  ]
};

const comparisonRows = [
  ["Price & tax", "COE category", "category"], ["Price & tax", "Published price", "publishedPrice", "money"], ["Price & tax", "COE-adjusted benchmark", "adjustedPrice", "money"], ["Price & tax", "TCO purchase price", "purchasePrice", "money", "low"], ["Price & tax", "Annual road tax", "annualTax", "money"],
  ["Performance", "Power", "powerKw", "kw"], ["Performance", "Torque", "torqueNm", "nm"], ["Performance", "0–100 km/h", "zeroTo100", "seconds", "low"], ["Performance", "Top speed", "topSpeed", "kmh"], ["Performance", "Driven wheels", "drive"],
  ["Battery & charging", "Battery", "batteryKwh", "kwh"], ["Battery & charging", "Chemistry", "batteryType"], ["Battery & charging", "Published range", "rangeKm", "km"], ["Battery & charging", "Range basis", "rangeBasis"], ["Battery & charging", "Rated efficiency", "efficiency", "kmkwh", "high"], ["Battery & charging", "AC charging", "acKw", "kw"], ["Battery & charging", "Peak DC charging", "dcKw", "kw"], ["Battery & charging", "Fast-charge claim", "fastCharge"],
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
  ],
  "tesla-model-3-rwd-110": [
    ["Show me the exact Standard-versus-Premium equipment omissions on my order.", "Confirm the rear screen, FM/DAB, speakers, ambient lighting, rear-seat heating, acoustic glass and damper specification."],
    ["Does this Standard car include Autosteer or only traffic-aware cruise control?", "Demonstrate the active functions on the allocated Singapore car; do not rely on the global website."],
    ["Confirm the 62.5 kWh LFP pack, 110 kW homologation and 534 km published range.", "Ask whether 534 km is WLTP or an estimate and request the LTA/specification documents."],
    ["Are the 18-inch steel wheels covered by aerodynamic trims?", "Price a replacement trim, wheel and tyre and inspect the appearance with the trim removed."],
    ["What happens to my price if Tesla changes its online price before delivery?", "Confirm COE treatment, inventory discounts, order-fee refundability and price protection in writing."]
  ],
  "tesla-model-3-premium-110": [
    ["Confirm this is the Premium RWD 110—not Standard RWD 110 or Long Range RWD.", "Put the 110 kW output, Cat A status, 62.5 kWh battery and exact trim name on the order."],
    ["Demonstrate the Premium-only equipment back-to-back with Standard.", "Check the rear screen and vents, FM/DAB, nine speakers, rear heating, ambient lights, auto-dimming mirrors and powered steering adjustment."],
    ["Confirm whether the 18-inch-wheel range is WLTP or Tesla-estimated.", "The public page mixes estimated and WLTP figures; record the range tied to your exact wheel choice."],
    ["Explain the frequency-dependent damper hardware and replacement cost.", "Test broken urban roads and ask whether the Standard car rides materially differently."],
    ["What happens to my price if Tesla changes its online price before delivery?", "Confirm COE treatment, inventory discounts, order-fee refundability and price protection in writing."]
  ],
  "tesla-model-y-110": [
    ["Confirm this exact car is the Premium RWD 110 with Cat A COE.", "Put 110 kW, 62.5 kWh, 19-inch wheels and the exact published range on the order."],
    ["Is the advertised 488 km figure WLTP or a Tesla estimate?", "Also obtain the 20-inch-wheel WLTP figure and quantify the range and tyre-cost penalty."],
    ["Demonstrate Autopilot, front camera visibility and parking assistance.", "Confirm which functions are included, which require FSD, and what currently works under Singapore regulation."],
    ["Measure the usable boot with the rear seats upright.", "Tesla's 2,138 L claim is a maximum-cargo method and is not directly comparable with rivals' conventional boot figures."],
    ["Show the ten-year cost difference versus Long Range RWD on the same quote date.", "Separate COE, road tax, battery, performance and charging differences from temporary inventory discounts."]
  ],
  "tesla-model-y-premium": [
    ["Confirm this is the Premium Long Range RWD, not AWD or RWD 110.", "Put 220 kW, Cat B, 84 kWh, 19-inch wheels and the exact range basis on the order."],
    ["Is the advertised 691 km range WLTP or a Tesla estimate?", "Request the homologated WLTP figure and usable battery capacity for the allocated Singapore car."],
    ["Explain why I should pay the Cat B and annual-road-tax premium over RWD 110.", "Quantify realistic Singapore range, acceleration and charging gains rather than brochure maxima."],
    ["Demonstrate Autopilot, front camera visibility and parking assistance.", "Confirm which functions are included, which require FSD, and what currently works under Singapore regulation."],
    ["Confirm the longer 8-year/192,000 km battery warranty and 70% threshold.", "Ask how Tesla measures capacity, what remedy is provided and whether a repaired pack inherits the remaining warranty."]
  ]
};

const money = new Intl.NumberFormat("en-SG", { style: "currency", currency: "SGD", maximumFractionDigits: 0 });
const number = new Intl.NumberFormat("en-SG", { maximumFractionDigits: 1 });
const clone = value => JSON.parse(JSON.stringify(value));
const stored = JSON.parse(localStorage.getItem("sgEvDecisionLab") || "null");
let state = {
  assumptions: { ...SNAPSHOT.assumptions, ...(stored?.assumptions || {}) },
  cars: SNAPSHOT.cars.map(base => ({ ...base, ...(stored?.cars?.find(car => car.id === base.id) || {}) })),
  selectedCarIds: stored?.selectedCarIds?.filter(id => SNAPSHOT.cars.some(car => car.id === id)) || [...SNAPSHOT.defaultSelectedCarIds]
};
if (state.selectedCarIds.length < 2) state.selectedCarIds = [...SNAPSHOT.defaultSelectedCarIds];
let activeFilter = "All";
let activeDealer = state.selectedCarIds[0];

function visibleCars() { return state.cars.filter(car => state.selectedCarIds.includes(car.id)); }

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
  const purchasePrice = Number(car.dealerOffer) > 0 ? Number(car.dealerOffer) : adjustedPrice;
  const annualEnergy = (a.annualKm / car.efficiency) * a.electricity;
  const annualTax = car.roadTaxOverride || roadTax(car.powerKw);
  const running = a.years * (annualEnergy + annualTax + a.insurance + (car.maintenanceAnnual || 0));
  const other = (car.tyresTenYear || 0) * (a.years / 10) + (car.financeCost || 0);
  const tco = purchasePrice + running + other - (car.terminalValue || 0);
  return { adjustedPrice, purchasePrice, offerApplied: Number(car.dealerOffer) > 0, annualEnergy, annualTax, running, other, tco, monthly: tco/(a.years*12), costKm: tco/(a.years*a.annualKm) };
}

function save() { localStorage.setItem("sgEvDecisionLab", JSON.stringify(state)); }
function toast(message) { const el=document.querySelector("#toast"); el.textContent=message; el.classList.add("show"); setTimeout(()=>el.classList.remove("show"),2200); }
function inputField(label, key, value, prefix="", suffix="") { return `<div class="field"><label for="${key}">${label}</label><div class="input-shell">${prefix?`<span>${prefix}</span>`:""}<input id="${key}" data-assumption="${key}" type="number" step="any" value="${value}">${suffix?`<span>${suffix}</span>`:""}</div></div>`; }

function setSelectedCars(ids) {
  const valid = [...new Set(ids)].filter(id => state.cars.some(car => car.id === id));
  if (valid.length < 2) { toast("Keep at least two cars in the comparison"); return; }
  state.selectedCarIds = valid;
  if (!valid.includes(activeDealer)) activeDealer = valid[0];
  save();
  renderAll();
}

function renderModelPicker() {
  const cars = state.cars;
  document.querySelector("#modelPicker").innerHTML = cars.map(car => {
    const selected = state.selectedCarIds.includes(car.id);
    return `<button class="model-toggle ${selected?"selected":""}" data-model-id="${car.id}" aria-pressed="${selected}"><span>${car.make} · CAT ${car.category}</span><strong>${car.name}</strong><small>${selected?"IN COMPARISON":"ADD TO COMPARISON"}</small></button>`;
  }).join("");
  document.querySelector("#selectedCount").textContent = `${state.selectedCarIds.length} of ${cars.length} selected`;
  document.querySelectorAll("[data-model-id]").forEach(button => button.addEventListener("click", () => {
    const id = button.dataset.modelId;
    const next = state.selectedCarIds.includes(id) ? state.selectedCarIds.filter(item => item !== id) : [...state.selectedCarIds, id];
    setSelectedCars(next);
  }));
  document.querySelectorAll("[data-model-preset]").forEach(button => button.onclick = () => {
    const preset = button.dataset.modelPreset;
    const ids = preset === "tesla" ? cars.filter(car => car.make === "TESLA").map(car => car.id)
      : preset === "all" ? cars.map(car => car.id) : [...SNAPSHOT.defaultSelectedCarIds];
    setSelectedCars(ids);
  });
}

function renderAssumptions() {
  const a=state.assumptions;
  const cars=visibleCars();
  document.querySelector("#assumptionInputs").innerHTML = [
    inputField("Ownership", "years", a.years, "", "yr"), inputField("Annual distance", "annualKm", a.annualKm, "", "km"), inputField("Charging", "electricity", a.electricity, "$", "/kWh"),
    inputField("Cat A COE", "catA", a.catA, "$"), inputField("Cat B COE", "catB", a.catB, "$"), inputField("Insurance / car", "insurance", a.insurance, "$", "/yr")
  ].join("");
  document.querySelectorAll("[data-assumption]").forEach(el=>el.addEventListener("input", e=>{ state.assumptions[e.target.dataset.assumption]=Number(e.target.value)||0; save(); renderResults(); }));
  document.querySelector("#offerInputs").innerHTML = cars.map(car => { const m=metrics(car); return `<div class="field"><label for="offer-${car.id}">${car.make} ${car.name}</label><div class="input-shell offer-input"><span>$</span><input id="offer-${car.id}" data-dealer-offer="${car.id}" type="number" step="1" min="0" inputmode="numeric" value="${car.dealerOffer||""}" placeholder="${Math.round(m.adjustedPrice)}"></div></div>`; }).join("");
  document.querySelectorAll("[data-dealer-offer]").forEach(el=>el.addEventListener("input", e=>{ const car=state.cars.find(c=>c.id===e.target.dataset.dealerOffer); car.dealerOffer=Number(e.target.value)||0; save(); renderResults(); }));
  document.querySelector("#advancedInputs").innerHTML = cars.map(car => `<div class="advanced-car"><strong>${car.make} ${car.name}</strong>${carCostField(car,"Maintenance / year","maintenanceAnnual")}${carCostField(car,"Tyres / 10 years","tyresTenYear")}${carCostField(car,"Finance cost","financeCost")}${carCostField(car,"Terminal value","terminalValue")}</div>`).join("");
  document.querySelectorAll("[data-car-cost]").forEach(el=>el.addEventListener("input", e=>{ const car=state.cars.find(c=>c.id===e.target.dataset.car); car[e.target.dataset.carCost]=Number(e.target.value)||0; save(); renderResults(); }));
}
function carCostField(car,label,key){ return `<div class="field"><label>${label}</label><div class="input-shell"><span>$</span><input type="number" step="any" data-car="${car.id}" data-car-cost="${key}" value="${car[key]||0}"></div></div>`; }

function renderResults() {
  const cars=visibleCars();
  if (!cars.length) return;
  const ranked=[...cars].sort((a,b)=>metrics(a).tco-metrics(b).tco);
  const best=ranked[0], bestM=metrics(best), second=ranked[1], delta=second?metrics(second).tco-bestM.tco:0;
  document.querySelector("#heroVerdict").innerHTML=`<span class="label">CURRENT TCO WINNER</span><h2>${best.make} ${best.name}</h2><div class="verdict-price">${money.format(bestM.tco)} <small>over ${state.assumptions.years} years</small></div><p>${second?`It is <strong>${money.format(delta)} cheaper</strong> than the next car under your assumptions.`:"Add another car to create a comparison."}</p>`;
  document.querySelector("#carCards").innerHTML=cars.map(car=>{const m=metrics(car);return `<article class="car-card ${car.id===best.id?"best":""}">${car.id===best.id?'<span class="rank-tag">LOWEST TCO</span>':""}<span class="make">${car.make} · CAT ${car.category}</span><h3>${car.name}</h3><div class="tco-number">${money.format(m.tco)}<small>${state.assumptions.years}-year total · ${money.format(m.monthly)}/month</small></div><div class="card-stats"><span>${m.offerApplied?"Dealer offer":"COE-adjusted benchmark"}<strong>${money.format(m.purchasePrice)}</strong></span><span>Energy / year<strong>${money.format(m.annualEnergy)}</strong></span><span>Road tax / year<strong>${money.format(m.annualTax)}</strong></span><span>Cost / km<strong>$${m.costKm.toFixed(2)}</strong></span></div></article>`}).join("");
  const max=Math.max(...cars.map(c=>metrics(c).tco));
  document.querySelector("#costChart").innerHTML=cars.map(car=>{const m=metrics(car), years=state.assumptions.years, energy=m.annualEnergy*years,tax=m.annualTax*years,other=state.assumptions.insurance*years+(car.maintenanceAnnual||0)*years+(car.tyresTenYear||0)*(years/10)+(car.financeCost||0);return `<div class="chart-row"><div class="chart-name">${car.make} ${car.name}</div><div class="stacked-bar" style="max-width:${m.tco/max*100}%"><i class="bar-purchase" style="width:${m.purchasePrice/m.tco*100}%"></i><i class="bar-energy" style="width:${energy/m.tco*100}%"></i><i class="bar-tax" style="width:${tax/m.tco*100}%"></i><i class="bar-other" style="width:${other/m.tco*100}%"></i></div><div class="chart-total">${money.format(m.tco)}</div></div>`}).join("");
  const rangePick=[...cars].sort((a,b)=>b.rangeKm-a.rangeKm)[0];
  const quickPick=[...cars].sort((a,b)=>a.zeroTo100-b.zeroTo100)[0];
  const rangeDelta=rangePick.rangeKm-Math.min(...cars.map(car=>car.rangeKm));
  document.querySelector("#analysisGrid").innerHTML=`<article class="analysis-card"><p class="eyebrow">FINANCIAL PICK</p><h3>${best.make} ${best.name}</h3><p>${best.take}</p></article><article class="analysis-card"><p class="eyebrow">RANGE PICK</p><h3>${rangePick.make} ${rangePick.name}</h3><p><strong>${number.format(rangePick.rangeKm)} km</strong> published range—${number.format(rangeDelta)} km more than the shortest-range selected car.</p></article><article class="analysis-card"><p class="eyebrow">PERFORMANCE PICK</p><h3>${quickPick.make} ${quickPick.name}</h3><p><strong>${number.format(quickPick.zeroTo100)} sec</strong> to 100 km/h. Judge this against its annual road tax, not acceleration alone.</p></article>`;
  renderComparison();
}

function formatCell(car,key,fmt){ const m=metrics(car); const v=key in m?m[key]:car[key]; if(v===undefined||v===null||v==="")return '<span class="verify-badge">VERIFY</span>'; if(key==="boot"&&car.bootLabel)return car.bootLabel; const f={money:()=>money.format(v),kw:()=>`${number.format(v)} kW`,nm:()=>`${number.format(v)} Nm`,seconds:()=>`${number.format(v)} sec`,kmh:()=>`${number.format(v)} km/h`,kwh:()=>`${number.format(v)} kWh`,km:()=>`${number.format(v)} km`,kmkwh:()=>`${number.format(v)} km/kWh`,mm:()=>`${number.format(v)} mm`,kg:()=>`${number.format(v)} kg`,litres:()=>`${number.format(v)} L`}; return f[fmt]?f[fmt]():String(v); }
function renderComparison(){
  const cars=visibleCars();
  const cats=["All",...new Set(comparisonRows.map(r=>r[0]))]; document.querySelector("#comparisonFilters").innerHTML=cats.map(c=>`<button class="filter-chip ${c===activeFilter?"active":""}" data-filter="${c}">${c}</button>`).join("");
  let last=""; const rows=comparisonRows.filter(r=>activeFilter==="All"||r[0]===activeFilter).map(row=>{const [cat,label,key,fmt,better]=row; let category="";if(cat!==last){category=`<tr class="category-row"><th colspan="${cars.length+1}">${cat}</th></tr>`;last=cat;} const vals=cars.map(c=>key==="roadTax"?metrics(c).annualTax:(key in metrics(c)?metrics(c)[key]:c[key])); let bestIndex=-1;if(better&&vals.every(v=>typeof v==="number")){bestIndex=better==="low"?vals.indexOf(Math.min(...vals)):vals.indexOf(Math.max(...vals));}return `${category}<tr><th>${label}</th>${cars.map((c,i)=>`<td class="${i===bestIndex?"winner-cell":""}">${formatCell(c,key,fmt)}</td>`).join("")}</tr>`;}).join("");
  const table=document.querySelector("#comparisonTable"); table.style.minWidth=`${220+cars.length*210}px`; table.innerHTML=`<thead><tr><th>Specification</th>${cars.map(c=>`<th><span>${c.make}</span><br>${c.name}</th>`).join("")}</tr></thead><tbody>${rows}</tbody>`;
  document.querySelectorAll("[data-filter]").forEach(b=>b.addEventListener("click",()=>{activeFilter=b.dataset.filter;renderComparison();}));
}

function checklistKey(carId,index){return `check:${carId}:${index}`;}
function renderChecklist(){
  const cars=visibleCars(); if(!cars.length)return; if(!cars.some(c=>c.id===activeDealer))activeDealer=cars[0].id; const car=cars.find(c=>c.id===activeDealer);
  document.querySelector("#dealerTabs").innerHTML=cars.map(c=>`<button class="dealer-tab ${c.id===activeDealer?"active":""}" data-dealer="${c.id}">${c.make} ${c.name}</button>`).join("");
  const groups={...commonQuestions,"Model-specific":specificQuestions[car.id]||[["Confirm every imported specification in writing.","Imported data may be incomplete or refer to a different market variant."]]}; let idx=0,total=0,checked=0;
  const body=Object.entries(groups).map(([group,items])=>`<div class="question-group"><h3>${group}</h3>${items.map(([q,note])=>{const key=checklistKey(car.id,idx++);total++;const on=localStorage.getItem(key)==="1";if(on)checked++;return `<div class="check-item"><input type="checkbox" id="${key}" data-check-key="${key}" ${on?"checked":""}><label for="${key}">${q}<small>${note}</small></label></div>`}).join("")}</div>`).join("");
  document.querySelector("#dealerChecklist").innerHTML=`<div class="checklist-progress"><div><p class="eyebrow">${car.make} ${car.name}</p><strong>${checked} of ${total} checked</strong></div><div class="progress-track"><i style="width:${total?checked/total*100:0}%"></i></div></div>${body}`;
  document.querySelectorAll("[data-dealer]").forEach(b=>b.addEventListener("click",()=>{activeDealer=b.dataset.dealer;renderChecklist();})); document.querySelectorAll("[data-check-key]").forEach(c=>c.addEventListener("change",()=>{localStorage.setItem(c.dataset.checkKey,c.checked?"1":"0");renderChecklist();}));
}

function renderAll(){renderModelPicker();renderAssumptions();renderResults();renderChecklist();}
document.querySelector("#resetButton").addEventListener("click",()=>{if(confirm("Reset cars, selection, assumptions and advanced costs to the June 2026 snapshot?")){state={assumptions:clone(SNAPSHOT.assumptions),cars:clone(SNAPSHOT.cars),selectedCarIds:[...SNAPSHOT.defaultSelectedCarIds]};save();activeDealer=state.selectedCarIds[0];renderAll();toast("Calculator reset");}});
document.querySelector("#printChecklist").addEventListener("click",()=>window.print());
renderAll();

window.SGEV = { roadTax, metrics: car => metrics(car), snapshot: clone(SNAPSHOT) };
