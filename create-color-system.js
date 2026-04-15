// ─────────────────────────────────────────────────────────────────────────────
// Figma Plugin: Create Color System Table  v2
// File:   ExvVwUqRN0HIFGoV0PFyUH  (Platform-Design-System)
//
// Layout:
//   Section 1 — "Color Grid Reference"  (original named colors, read-only ref)
//   Section 2 — "Extended Palette 0–9"  (full 10-step scale, step 5 identical
//                                         in light and dark for every group)
// ─────────────────────────────────────────────────────────────────────────────

// ── Section 1: Original named colors (from node 4007:1193) ───────────────────
// These are the canonical named values from the existing Color Grid.
// Step-500 dark values were blank in the source → same as light.

const ORIGINAL = [
  {
    group: "Brand Blue",
    rows: [
      { name: "Brand — Primary",  light: "#0471d7", dark: "#89c4f4" },
      { name: "Blue 100",         light: "#e6f1fb", dark: "#000b15" },
      { name: "Blue 250",         light: "#82b8eb", dark: "#02396c" },
      { name: "Blue 750",         light: "#02396c", dark: "#82b8eb" },
      { name: "Blue 1000",        light: "#000b15", dark: "#e6f1fb" },
      { name: "Page Background",  light: "#f8f8f8", dark: "#000312" },
      { name: "Level",            light: "#fcfcfc", dark: "#050817" },
    ],
  },
  {
    group: "Neutrals",
    rows: [
      { name: "Neutral 100",  light: "#ffffff", dark: "#080808" },
      { name: "Neutral 150",  light: "#e3e3e3", dark: "#2d2d2d" },
      { name: "Neutral 250",  light: "#c7c7c7", dark: "#515151" },
      { name: "Neutral 500",  light: "#727272", dark: "#7f7f7f" },
      { name: "Neutral 750",  light: "#3a3a3a", dark: "#c7c7c7" },
      { name: "Neutral 850",  light: "#2d2d2d", dark: "#e3e3e3" },
      { name: "Neutral 1000", light: "#080808", dark: "#ffffff" },
    ],
  },
  {
    group: "Orange",
    rows: [
      { name: "Orange 100",  light: "#fcf4ef", dark: "#170e09" },
      { name: "Orange 250",  light: "#f2c7af", dark: "#72482f" },
      { name: "Orange 500",  light: "#e48f5e", dark: "#e48f5e" }, // same
      { name: "Orange 750",  light: "#72482f", dark: "#f2c7af" },
      { name: "Orange 1000", light: "#170e09", dark: "#fcf4ef" },
    ],
  },
  {
    group: "Purple",
    rows: [
      { name: "Purple 100",  light: "#f6effd", dark: "#100a18" },
      { name: "Purple 250",  light: "#d2b1f7", dark: "#523178" },
      { name: "Purple 500",  light: "#a462ef", dark: "#a462ef" }, // same
      { name: "Purple 750",  light: "#523178", dark: "#d2b1f7" },
      { name: "Purple 1000", light: "#100a18", dark: "#f6effd" },
    ],
  },
  {
    group: "Green",
    rows: [
      { name: "Green 100",  light: "#ecf5f0", dark: "#06100a" },
      { name: "Green 250",  light: "#a0ceb2", dark: "#214f32" },
      { name: "Green 500",  light: "#419d64", dark: "#419d64" }, // same
      { name: "Green 750",  light: "#214f32", dark: "#a0ceb2" },
      { name: "Green 1000", light: "#06100a", dark: "#ecf5f0" },
    ],
  },
  {
    group: "Yellow",
    rows: [
      { name: "Yellow 100",  light: "#fbf8ef", dark: "#161309" },
      { name: "Yellow 250",  light: "#edddad", dark: "#6e5e2d" },
      { name: "Yellow 500",  light: "#dbbb5a", dark: "#dbbb5a" }, // same
      { name: "Yellow 750",  light: "#6e5e2d", dark: "#edddad" },
      { name: "Yellow 1000", light: "#161309", dark: "#fbf8ef" },
    ],
  },
  {
    group: "Red",
    rows: [
      { name: "Red 100",  light: "#fcf0ef", dark: "#170a09" },
      { name: "Red 250",  light: "#ec958e", dark: "#99251d" },
      { name: "Red 500",  light: "#e4675e", dark: "#e4675e" }, // same
      { name: "Red 750",  light: "#99251d", dark: "#ec958e" },
      { name: "Red 1000", light: "#170a09", dark: "#fcf0ef" },
    ],
  },
  {
    group: "Analytics",
    rows: [
      { name: "Primary Data 100",    light: "#e6f1fc", dark: "#032342" },
      { name: "Primary Data 500",    light: "#0976dc", dark: "#0976dc" }, // same
      { name: "Secondary Data 100",  light: "#eaf9fb", dark: "#0e3b3f" },
      { name: "Secondary Data 500",  light: "#2ec5d3", dark: "#2ec5d3" }, // same
      { name: "Projections 100",     light: "#efeff9", dark: "#1b1d3c" },
      { name: "Projections 500",     light: "#5b5fc7", dark: "#5b5fc7" }, // same
      { name: "Targets 100",         light: "#fef8ec", dark: "#493713" },
      { name: "Targets 500",         light: "#f4b740", dark: "#f4b740" }, // same
      { name: "Upsides 100",         light: "#f1fbf6", dark: "#214032" },
      { name: "Upsides 500",         light: "#6ed6a8", dark: "#6ed6a8" }, // same
    ],
  },
];

// ── Section 2: Extended palette 0–9 ─────────────────────────────────────────
// Step 5 is the canonical mid-point value — identical in light and dark.

const LIGHT = {
  blue:      { 0:"#e6f1fb", 1:"#bad8f4", 2:"#8dbeed", 3:"#5aa5ec", 4:"#208bf0", 5:"#0471d7", 6:"#0355a2", 7:"#023a6d", 8:"#012241", 9:"#000b15" },
  gray:      { 0:"#ffffff", 1:"#eaeaea", 2:"#d6d6d6", 3:"#bcbcbc", 4:"#979797", 5:"#727272", 6:"#525252", 7:"#373737", 8:"#282828", 9:"#080808" },
  orange:    { 0:"#fcf4ef", 1:"#f7e0d3", 2:"#f3ccb6", 3:"#eeb899", 4:"#e9a37b", 5:"#e48f5e", 6:"#be6735", 7:"#73492f", 8:"#452b1c", 9:"#170e09" },
  purple:    { 0:"#f6effd", 1:"#e6d4fa", 2:"#d6b8f8", 3:"#c69bf5", 4:"#b57ff2", 5:"#a462ef", 6:"#7a30ce", 7:"#53317a", 8:"#311e48", 9:"#100a18" },
  green:     { 0:"#ecf5f0", 1:"#cae4d5", 2:"#a8d2b9", 3:"#84c39c", 4:"#5cb67f", 5:"#419d64", 6:"#31764b", 7:"#215032", 8:"#13301e", 9:"#06100a" },
  yellow:    { 0:"#fbf8ef", 1:"#f4ecd2", 2:"#eee0b4", 3:"#e8d496", 4:"#e2c778", 5:"#dbbb5a", 6:"#b29437", 7:"#6f5f2d", 8:"#42391b", 9:"#161309" },
  red:       { 0:"#fcf0ef", 1:"#f4c8c4", 2:"#ee9f99", 3:"#ea8981", 4:"#e7786f", 5:"#e4675e", 6:"#d63226", 7:"#9a251d", 8:"#541c18", 9:"#170a09" },
  dataBlue:  { 0:"#e6f1fc", 1:"#c9e2f9", 2:"#abd3f6", 3:"#8ec6f4", 4:"#45a2f2", 5:"#0976dc", 6:"#07539b", 7:"#04305a", 8:"#011a35", 9:"#000d1e" },
  dataTeal:  { 0:"#eaf9fb", 1:"#c7f0f5", 2:"#a3e8ef", 3:"#7fe1e9", 4:"#56d4df", 5:"#2ec5d3", 6:"#208b95", 7:"#135157", 8:"#0a2f32", 9:"#051a1c" },
  dataIndigo:{ 0:"#efeff9", 1:"#d7d8f2", 2:"#bec0ec", 3:"#a3a7e8", 4:"#7e83da", 5:"#5b5fc7", 6:"#393d94", 7:"#242753", 8:"#161732", 9:"#0e0f22" },
  dataAmber: { 0:"#fef8ec", 1:"#fcedcd", 2:"#fbe1ae", 3:"#f9d68f", 4:"#f7c768", 5:"#f4b740", 6:"#c0881a", 7:"#674d17", 8:"#38290f", 9:"#1e1508" },
  dataMint:  { 0:"#f1fbf6", 1:"#dbf6e9", 2:"#c4f1dd", 3:"#acedd2", 4:"#8ce3be", 5:"#6ed6a8", 6:"#3ea778", 7:"#2b5a45", 8:"#193226", 9:"#0d1a14" },
};

// Dark: step 5 is always identical to light for every group
const DARK = {
  blue:      { 0:"#000b15", 1:"#00172c", 2:"#012443", 3:"#02315d", 4:"#034a8d", 5:"#0471d7", 6:"#1f8df0", 7:"#4ba2ee", 8:"#92c5f1", 9:"#e6f1fb" },
  gray:      { 0:"#080808", 1:"#141414", 2:"#222222", 3:"#323232", 4:"#414141", 5:"#727272", 6:"#7b7b7b", 7:"#a4a4a4", 8:"#cecece", 9:"#f5f5f5" },
  orange:    { 0:"#170e09", 1:"#28170f", 2:"#391f14", 3:"#673720", 4:"#a2552b", 5:"#e48f5e", 6:"#e7985d", 7:"#f5b77f", 8:"#f9d1b1", 9:"#fdeee4" },
  purple:    { 0:"#100a18", 1:"#1d102f", 2:"#291449", 3:"#4c1f8e", 4:"#7a2fdd", 5:"#a462ef", 6:"#c292f7", 7:"#d4aafc", 8:"#e2c9fd", 9:"#f2e8fe" },
  green:     { 0:"#06100a", 1:"#0a1e13", 2:"#0d2c1d", 3:"#1e5e3e", 4:"#359962", 5:"#419d64", 6:"#82d1a3", 7:"#a7e0bf", 8:"#c5ebd5", 9:"#e2f5ea" },
  yellow:    { 0:"#161309", 1:"#211d0c", 2:"#2d270f", 3:"#64561b", 4:"#b29422", 5:"#dbbb5a", 6:"#efd062", 7:"#f5dc84", 8:"#fbedb1", 9:"#fefae0" },
  red:       { 0:"#170a09", 1:"#2c0f0e", 2:"#441010", 3:"#881919", 4:"#df2121", 5:"#e4675e", 6:"#f68f8f", 7:"#faafaf", 8:"#fccccc", 9:"#feeaea" },
  dataBlue:  { 0:"#000d1e", 1:"#011731", 2:"#032443", 3:"#053f76", 4:"#075aa9", 5:"#0976dc", 6:"#389bf2", 7:"#7cbdf3", 8:"#b3d7f7", 9:"#e6f1fc" },
  dataTeal:  { 0:"#051a1c", 1:"#092b2e", 2:"#0e3c40", 3:"#196a71", 4:"#2398a3", 5:"#2ec5d3", 6:"#52d2dd", 7:"#77dee6", 8:"#aeeaf0", 9:"#eaf9fb" },
  dataIndigo:{ 0:"#0e0f22", 1:"#14162f", 2:"#1b1d3d", 3:"#2d316e", 4:"#3d41a2", 5:"#5b5fc7", 6:"#787dd9", 7:"#999ee7", 8:"#c5c7ef", 9:"#efeff9" },
  dataAmber: { 0:"#1e1508", 1:"#34260e", 2:"#4a3813", 3:"#8b651a", 4:"#d49519", 5:"#f4b740", 6:"#f7c75d", 7:"#fad57a", 8:"#fbe5b0", 9:"#fef8ec" },
  dataMint:  { 0:"#0d1a14", 1:"#172d23", 2:"#214133", 3:"#347a5a", 4:"#41b883", 5:"#6ed6a8", 6:"#87e1bb", 7:"#a2ebcc", 8:"#caf2e0", 9:"#f1fbf6" },
};

// ── Helpers ───────────────────────────────────────────────────────────────────

function hex(h) {
  return { r: parseInt(h.slice(1,3),16)/255, g: parseInt(h.slice(3,5),16)/255, b: parseInt(h.slice(5,7),16)/255 };
}
function solid(color, opacity=1) { return [{ type:"SOLID", color, opacity }]; }

function txt(chars, size, bold, color, w, h) {
  const t = figma.createText();
  t.fontName = { family:"Inter", style: bold ? "Semi Bold" : "Regular" };
  t.fontSize = size;
  t.characters = chars;
  t.fills = solid(color);
  if (w && h) t.resize(w, h);
  return t;
}

function swatch(hexVal, w, h) {
  const r = figma.createRectangle();
  r.resize(w, h);
  r.fills = solid(hex(hexVal));
  r.cornerRadius = 4;
  r.strokes = solid({ r:0, g:0, b:0 }, 0.1);
  r.strokeWeight = 1;
  r.strokeAlign = "INSIDE";
  return r;
}

// ── Layout constants ──────────────────────────────────────────────────────────

const PAD        = 48;
const COL_TOKEN  = 200;
const COL_SWATCH = 48;
const COL_HEX    = 110;
const GAP        = 12;
const ROW_H      = 40;
const SWATCH_H   = 28;
const HDR_H      = 44;
const GROUP_GAP  = 24;
const SECTION_GAP = 64;

const ROW_W = COL_TOKEN + GAP + COL_SWATCH + GAP + COL_HEX + GAP + COL_SWATCH + GAP + COL_HEX;

const INK     = { r:0.07, g:0.07, b:0.09 };
const INK_MID = { r:0.35, g:0.35, b:0.40 };
const BG_MAIN = { r:0.976, g:0.976, b:0.984 };
const BG_REF  = { r:0.97,  g:0.972, b:0.978 }; // slightly cooler for reference section
const STRIPE  = { r:1, g:1, b:1 };

// ── Row builder ───────────────────────────────────────────────────────────────

function buildRow(name, lHex, dHex, stepIndex, yPos) {
  const row = figma.createFrame();
  row.name = name;
  row.resize(ROW_W, ROW_H);
  row.x = PAD;
  row.y = yPos;
  row.cornerRadius = 4;
  row.fills = stepIndex % 2 === 0 ? solid(STRIPE, 0.7) : [];

  const ty = (ROW_H - 14) / 2;
  let x = 0;

  // Token / color name
  const tn = txt(name, 12, false, INK_MID, COL_TOKEN - 8, 14);
  tn.x = x + 8; tn.y = ty;
  row.appendChild(tn);
  x += COL_TOKEN + GAP;

  // Light swatch
  const ls = swatch(lHex, COL_SWATCH, SWATCH_H);
  ls.x = x; ls.y = (ROW_H - SWATCH_H) / 2;
  row.appendChild(ls);
  x += COL_SWATCH + GAP;

  // Light hex
  const lt = txt(lHex.toLowerCase(), 11, false, INK_MID, COL_HEX, 14);
  lt.x = x; lt.y = ty;
  row.appendChild(lt);
  x += COL_HEX + GAP;

  // Dark swatch
  const ds = swatch(dHex, COL_SWATCH, SWATCH_H);
  ds.x = x; ds.y = (ROW_H - SWATCH_H) / 2;
  row.appendChild(ds);
  x += COL_SWATCH + GAP;

  // Dark hex — dim if identical to light
  const sameVal = lHex.toLowerCase() === dHex.toLowerCase();
  const dtColor = sameVal ? { r:0.55, g:0.55, b:0.60 } : INK_MID;
  const dt = txt(dHex.toLowerCase() + (sameVal ? "  ↔" : ""), 11, false, dtColor, COL_HEX, 14);
  dt.x = x; dt.y = ty;
  row.appendChild(dt);

  return row;
}

// ── Section header ────────────────────────────────────────────────────────────

function buildSectionTitle(label, subtitle, yPos, bgColor) {
  const frame = figma.createFrame();
  frame.name = `__section/${label}`;
  frame.resize(ROW_W + PAD * 2, 56);
  frame.x = 0; frame.y = yPos;
  frame.fills = solid(bgColor);

  const t1 = txt(label, 18, true, INK, null, null);
  t1.x = PAD; t1.y = 12;
  frame.appendChild(t1);

  if (subtitle) {
    const t2 = txt(subtitle, 11, false, { r:0.5, g:0.5, b:0.55 }, null, null);
    t2.x = PAD + t1.width + 16; t2.y = 16;
    frame.appendChild(t2);
  }

  return frame;
}

// ── Column header row ─────────────────────────────────────────────────────────

function buildColHeader(yPos) {
  const row = figma.createFrame();
  row.name = "__col-headers";
  row.resize(ROW_W, 24);
  row.x = PAD; row.y = yPos;
  row.fills = [];

  const DIM = { r:0.55, g:0.55, b:0.60 };
  const cols = [
    { label: "Token / Name", x: 8 },
    { label: "Light",        x: COL_TOKEN + GAP },
    { label: "Dark",         x: COL_TOKEN + GAP + COL_SWATCH + GAP + COL_HEX + GAP },
  ];
  for (const c of cols) {
    const t = txt(c.label, 10, true, DIM, null, null);
    t.x = c.x; t.y = 4;
    row.appendChild(t);
  }
  return row;
}

// ── Group header ──────────────────────────────────────────────────────────────

function buildGroupHeader(label, yPos) {
  const frame = figma.createFrame();
  frame.name = `__group/${label}`;
  frame.resize(ROW_W, HDR_H);
  frame.x = PAD; frame.y = yPos;
  frame.fills = [];

  const t = txt(label, 14, true, INK, null, null);
  t.x = 0; t.y = HDR_H - 20;
  frame.appendChild(t);
  return frame;
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  await figma.loadFontAsync({ family:"Inter", style:"Regular" });
  await figma.loadFontAsync({ family:"Inter", style:"Semi Bold" });

  const page = figma.currentPage;
  page.findAll(n => n.name === "Color System" && n.type === "FRAME").forEach(n => n.remove());

  // ── Calculate total height
  const origRows   = ORIGINAL.reduce((s, g) => s + g.rows.length, 0);
  const origGroups = ORIGINAL.length;
  const extGroups  = Object.keys(LIGHT).length;
  const extRows    = extGroups * 10;

  const origH = 56 + 32 + origGroups * HDR_H + origRows * ROW_H + (origGroups - 1) * GROUP_GAP;
  const extH  = 56 + 32 + extGroups  * HDR_H + extRows  * ROW_H + (extGroups  - 1) * GROUP_GAP;
  const totalH = PAD + origH + SECTION_GAP + extH + PAD;

  // ── Outer frame
  const main = figma.createFrame();
  main.name = "Color System";
  main.resize(ROW_W + PAD * 2, totalH);
  main.fills = solid(BG_MAIN);
  main.clipsContent = false;
  page.appendChild(main);

  let y = PAD;

  // ────────────────────────────────────────────────────────────────────────────
  // SECTION 1 — Color Grid Reference
  // ────────────────────────────────────────────────────────────────────────────
  const secRef = buildSectionTitle("Color Grid Reference", "original named colors — for asset comparison", y, BG_REF);
  main.appendChild(secRef);
  y += 56 + 8;

  main.appendChild(buildColHeader(y));
  y += 24 + 8;

  for (let gi = 0; gi < ORIGINAL.length; gi++) {
    const g = ORIGINAL[gi];
    main.appendChild(buildGroupHeader(g.group, y));
    y += HDR_H;

    for (let ri = 0; ri < g.rows.length; ri++) {
      const { name, light, dark } = g.rows[ri];
      const row = buildRow(name, light, dark, ri, y);
      main.appendChild(row);
      y += ROW_H;
    }
    if (gi < ORIGINAL.length - 1) y += GROUP_GAP;
  }

  y += SECTION_GAP;

  // ────────────────────────────────────────────────────────────────────────────
  // SECTION 2 — Extended Palette 0–9
  // ────────────────────────────────────────────────────────────────────────────
  const secExt = buildSectionTitle("Extended Palette 0–9", "step 5 is the canonical value — identical in light and dark", y, BG_MAIN);
  main.appendChild(secExt);
  y += 56 + 8;

  main.appendChild(buildColHeader(y));
  y += 24 + 8;

  const groups = Object.keys(LIGHT);
  for (let gi = 0; gi < groups.length; gi++) {
    const key = groups[gi];
    main.appendChild(buildGroupHeader(key, y));
    y += HDR_H;

    for (let step = 0; step <= 9; step++) {
      const lHex = LIGHT[key][step];
      const dHex = DARK[key][step];
      const row = buildRow(`${key}/${step}`, lHex, dHex, step, y);
      main.appendChild(row);
      y += ROW_H;
    }
    if (gi < groups.length - 1) y += GROUP_GAP;
  }

  // ── Final resize to actual content
  main.resize(ROW_W + PAD * 2, y + PAD);

  figma.viewport.scrollAndZoomIntoView([main]);
  figma.closePlugin(`Done — ${ORIGINAL.reduce((s,g)=>s+g.rows.length,0)} reference rows + ${groups.length * 10} palette rows`);
}

main().catch(err => {
  console.error(err);
  figma.closePlugin(`Error: ${err.message}`);
});
