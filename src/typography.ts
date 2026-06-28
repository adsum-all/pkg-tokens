// Typography tokens from the ADSUM Design System: Space Grotesk for display,
// IBM Plex Sans for UI, IBM Plex Mono for code and identifiers.

export const fonts = {
  display: "'Space Grotesk', 'IBM Plex Sans', system-ui, sans-serif",
  ui: "'IBM Plex Sans', system-ui, sans-serif",
  mono: "'IBM Plex Mono', ui-monospace, monospace",
} as const;

export const fontSize = {
  xs: "12px",
  sm: "13px",
  base: "15px",
  md: "16px",
  lg: "18px",
  xl: "22px",
  "2xl": "28px",
  "3xl": "34px",
  "4xl": "44px",
} as const;

export const fontWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
} as const;

export const lineHeight = {
  tight: 1.15,
  normal: 1.5,
  relaxed: 1.7,
} as const;
