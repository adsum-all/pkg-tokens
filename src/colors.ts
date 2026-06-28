// Color tokens extracted from the ADSUM Design System (02-design-system).
// Blue based palette, with a fixed brand scale and light/dark theme neutrals.

export const brand = {
  50: "#eef3fc",
  100: "#d9e4f8",
  200: "#b4c8f0",
  300: "#8aa8e6",
  400: "#5b82d8",
  500: "#3563c9",
  600: "#2a4fad",
  700: "#223f8a",
  800: "#1d3470",
  900: "#172a5a",
} as const;

export interface ThemeColors {
  bg: string;
  panel: string;
  board: string;
  ink: string;
  ink2: string;
  mut: string;
  faint: string;
  line: string;
  dot: string;
  acc: string;
  acc2: string;
  ok: string;
  okBg: string;
  danger: string;
  dangerBg: string;
  info: string;
  infoBg: string;
}

export const light: ThemeColors = {
  bg: "#f4f5f7",
  panel: "#ffffff",
  board: "#e8eaee",
  ink: "#16181d",
  ink2: "#3d4047",
  mut: "#676b73",
  faint: "#6a6e78",
  line: "#e3e5ea",
  dot: "#d4d7de",
  acc: "#2a4fad",
  acc2: "#1d3470",
  ok: "#1f8a5b",
  okBg: "#e6f3ec",
  danger: "#c0392b",
  dangerBg: "#fae9e7",
  info: "#2a4fad",
  infoBg: "#eef3fc",
};

export const dark: ThemeColors = {
  bg: "#101218",
  panel: "#13151b",
  board: "#161922",
  ink: "#eceef2",
  ink2: "#c7cad1",
  mut: "#9499a3",
  faint: "#9498a1",
  line: "#2a2e38",
  dot: "#262a35",
  acc: "#5b82d8",
  acc2: "#8aa8e6",
  ok: "#1f8a5b",
  okBg: "#16271f",
  danger: "#c0392b",
  dangerBg: "#2a1715",
  info: "#2a4fad",
  infoBg: "#1a2236",
};
