// Spacing, radius and shadow scales for ADSUM, consistent with the Design System
// (4px based spacing, soft radii, layered shadows).

export const space = {
  0: "0",
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "20px",
  6: "24px",
  8: "32px",
  10: "40px",
  12: "48px",
  16: "64px",
} as const;

export const radius = {
  sm: "8px",
  md: "12px",
  lg: "16px",
  xl: "20px",
  pill: "999px",
} as const;

export const shadow = {
  sm: "0 1px 2px rgba(16, 18, 24, 0.08)",
  md: "0 8px 24px rgba(16, 18, 24, 0.12)",
  lg: "0 18px 40px rgba(16, 18, 24, 0.22)",
} as const;
