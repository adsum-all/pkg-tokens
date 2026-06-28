import { brand, dark, light, type ThemeColors } from "./colors.js";
import { radius, shadow, space } from "./scale.js";
import { fonts, fontSize, fontWeight } from "./typography.js";

// Single source: build the CSS custom properties from the token objects, so the
// shipped tokens.css never drifts from the TypeScript values.

function themeVars(colors: ThemeColors): string[] {
  return Object.entries(colors).map(([key, value]) => `  --adsum-${kebab(key)}: ${value};`);
}

function kebab(key: string): string {
  return key.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
}

function staticVars(): string[] {
  const lines: string[] = [];
  for (const [k, v] of Object.entries(brand)) lines.push(`  --adsum-brand-${k}: ${v};`);
  for (const [k, v] of Object.entries(fonts)) lines.push(`  --adsum-font-${k}: ${v};`);
  for (const [k, v] of Object.entries(fontSize)) lines.push(`  --adsum-text-${k}: ${v};`);
  for (const [k, v] of Object.entries(fontWeight)) lines.push(`  --adsum-weight-${k}: ${v};`);
  for (const [k, v] of Object.entries(space)) lines.push(`  --adsum-space-${k}: ${v};`);
  for (const [k, v] of Object.entries(radius)) lines.push(`  --adsum-radius-${k}: ${v};`);
  for (const [k, v] of Object.entries(shadow)) lines.push(`  --adsum-shadow-${k}: ${v};`);
  return lines;
}

export function buildCss(): string {
  const rootLight = [...staticVars(), ...themeVars(light)].join("\n");
  const darkVars = themeVars(dark).join("\n");
  return (
    `:root {\n${rootLight}\n}\n\n` +
    `[data-theme="dark"] {\n${darkVars}\n}\n\n` +
    `@media (prefers-color-scheme: dark) {\n  :root:not([data-theme="light"]) {\n${darkVars}\n  }\n}\n`
  );
}
