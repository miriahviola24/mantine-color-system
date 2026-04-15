# mantine-color-system

Tools for normalizing color families into a [Mantine](https://mantine.dev/) 10-step scale (indices 0–9), with step 5 anchored to the canonical 500 value. Supports both light and dark mode token generation.

## Files

### `build_color_system.py`
Python script that generates the full Mantine color token set, including:
- 10-step light and dark ramps for each color family (blue, gray, orange, purple, green, yellow, red, and data colors)
- Magenta color family computed via piecewise-linear interpolation from anchor hex values
- Outputs `tokens-light.json`, `tokens-dark.json`, and `variables-import-export.json` with corrections applied
- Builds `color-system-mantine-expansion.xlsx` with three sheets:
  - **All Colors** — full 10-step grid with light/dark swatches
  - **Active Colors** — only colors that existed in the old design system, mapped old name → new Mantine token
  - **Mantine Config** — ready-to-paste `createTheme({ colors: { ... } })` config

**Requirements:**
```
pip install openpyxl
```

**Usage:**
```bash
python build_color_system.py
```

---

### `create-color-system.js`
Figma plugin script that renders a visual Color System table directly in Figma, with two sections:

- **Color Grid Reference** — original named colors from the existing design system (read-only reference)
- **Extended Palette 0–9** — full 10-step Mantine scale for all color groups; step 5 is identical in light and dark

To use, paste into a Figma plugin (run once) or wire up to the Figma Plugin API in your plugin project.

---

## Color Scale Convention

| Step | Role |
|------|------|
| 0 | Lightest tint — subtle background |
| 1 | Very light — hover/selection bg |
| 2 | Soft — secondary surface |
| 3 | Border / divider |
| 4 | Inactive border / chip |
| **5** | **Primary / canonical 500 value** ⭐ |
| 6 | Strong / pressed state |
| 7 | Deep shade / filled badge |
| 8 | Near-dark — high emphasis |
| 9 | Darkest — near-black equivalent |

Step 5 in dark mode is always identical to step 5 in light mode, preserving the original brand color.

## Color Families

**Semantic:** blue, gray, orange, purple, green, yellow, red, magenta

**Data visualization:** dataBlue, dataTeal, dataIndigo, dataAmber, dataMint
