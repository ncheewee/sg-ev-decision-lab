const CAR_SCHEMA = `Return only JSON with this shape. Use null for unknown fields and never invent values:
{"car":{"make":"string","name":"string","category":"A or B","publishedPrice":0,"embeddedCoe":0,"powerKw":0,"torqueNm":0,"zeroTo100":0,"topSpeed":0,"efficiency":0,"batteryKwh":0,"batteryType":"string","rangeKm":0,"acKw":0,"dcKw":0,"fastCharge":"string","drive":"string","length":0,"width":0,"height":0,"wheelbase":0,"weight":0,"boot":0,"wheels":"string","seats":"string","displays":"string","audio":"string","sensors":"string","adas":"string","warranty":"string","batteryWarranty":"string","service":"string"},"sources":["url"],"warnings":["string"]}`;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const headers = cors(env.ALLOWED_ORIGIN || "*");
    if (request.method === "OPTIONS") return new Response(null, { headers });
    if (url.pathname !== "/extract" || request.method !== "POST") return json({ error: "POST /extract" }, 404, headers);
    try {
      const body = await request.json();
      const target = new URL(body.url);
      if (target.protocol !== "https:") throw new Error("Only HTTPS pages are accepted");
      if (isPrivateHost(target.hostname)) throw new Error("Private network addresses are blocked");
      const page = await fetch(target.toString(), { headers: { "user-agent": "SG-EV-Decision-Lab/1.0" }, redirect: "follow" });
      if (!page.ok) throw new Error(`Source page returned HTTP ${page.status}`);
      const type = page.headers.get("content-type") || "";
      if (!type.includes("text/html") && !type.includes("text/plain")) throw new Error("Source must be an HTML or text page");
      const text = stripHtml((await page.text()).slice(0, 600000)).slice(0, 45000);
      const prompt = `Extract the Singapore-market car variant from this page. Distinguish claimed facts from unknowns. ${CAR_SCHEMA}\nSOURCE URL: ${target}\nPAGE TEXT:\n${text}`;
      const result = env.AI_PROVIDER === "deepseek" ? await deepseek(prompt, env) : await gemini(prompt, env);
      return json(JSON.parse(cleanJson(result)), 200, headers);
    } catch (error) {
      return json({ error: error.message }, 400, headers);
    }
  }
};

async function gemini(prompt, env) {
  if (!env.GEMINI_API_KEY) throw new Error("GEMINI_API_KEY is not configured");
  const model = env.GEMINI_MODEL || "gemini-2.5-flash";
  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${env.GEMINI_API_KEY}`, {
    method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }], generationConfig: { responseMimeType: "application/json", temperature: 0 } })
  });
  const data = await response.json(); if (!response.ok) throw new Error(data.error?.message || `Gemini HTTP ${response.status}`);
  return data.candidates?.[0]?.content?.parts?.[0]?.text || "";
}
async function deepseek(prompt, env) {
  if (!env.DEEPSEEK_API_KEY) throw new Error("DEEPSEEK_API_KEY is not configured");
  const response = await fetch("https://api.deepseek.com/chat/completions", {
    method: "POST", headers: { "content-type": "application/json", authorization: `Bearer ${env.DEEPSEEK_API_KEY}` },
    body: JSON.stringify({ model: env.DEEPSEEK_MODEL || "deepseek-chat", temperature: 0, response_format: { type: "json_object" }, messages: [{ role: "user", content: prompt }] })
  });
  const data = await response.json(); if (!response.ok) throw new Error(data.error?.message || `DeepSeek HTTP ${response.status}`);
  return data.choices?.[0]?.message?.content || "";
}
function stripHtml(html) { return html.replace(/<script[\s\S]*?<\/script>/gi," ").replace(/<style[\s\S]*?<\/style>/gi," ").replace(/<[^>]+>/g," ").replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/\s+/g," "); }
function cleanJson(value) { return value.trim().replace(/^```(?:json)?/i,"").replace(/```$/,"").trim(); }
function isPrivateHost(host) { return /^(localhost|127\.|10\.|192\.168\.|169\.254\.|0\.|\[?::1\]?$)/i.test(host) || /^172\.(1[6-9]|2\d|3[01])\./.test(host); }
function cors(origin) { return { "access-control-allow-origin": origin, "access-control-allow-methods": "POST, OPTIONS", "access-control-allow-headers": "content-type", "content-type": "application/json; charset=utf-8" }; }
function json(data, status, headers) { return new Response(JSON.stringify(data), { status, headers }); }
