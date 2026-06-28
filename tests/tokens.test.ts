import { describe, expect, it } from "vitest";

import { brand, dark, light } from "../src/colors.js";
import { buildCss } from "../src/css.js";
import { fonts } from "../src/typography.js";

describe("tokens", () => {
  it("exposes the blue brand scale from the design system", () => {
    expect(brand[600]).toBe("#2a4fad");
    expect(brand[50]).toBe("#eef3fc");
    expect(Object.keys(brand)).toHaveLength(10);
  });

  it("has light and dark themes with distinct backgrounds", () => {
    expect(light.bg).toBe("#f4f5f7");
    expect(dark.bg).toBe("#101218");
    expect(light.ink).not.toBe(dark.ink);
  });

  it("uses IBM Plex and Space Grotesk", () => {
    expect(fonts.display).toContain("Space Grotesk");
    expect(fonts.ui).toContain("IBM Plex Sans");
    expect(fonts.mono).toContain("IBM Plex Mono");
  });
});

describe("buildCss", () => {
  it("emits root and dark theme custom properties", () => {
    const css = buildCss();
    expect(css).toContain(":root {");
    expect(css).toContain('[data-theme="dark"]');
    expect(css).toContain("--adsum-brand-600: #2a4fad;");
    expect(css).toContain("--adsum-acc:");
    expect(css).toContain("--adsum-font-ui:");
  });
});
