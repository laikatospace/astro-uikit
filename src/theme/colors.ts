import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  secondary: "#30d5d6",
  success: "#229378",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  primary: "#001150",
  primaryBright: "#1c5094",
  primaryDark: "#001150",
  background: "#AFC9DF",
  backgroundDisabled: "#d7e4ef",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#222B45",
  textDisabled: "#BDC2C4",
  textSubtle: "#222B45",
  borderColor: "#E9EAEB",
  card: "#AFC9DF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  primary: "#30d5d6",
  primaryBright: "#30d5d6",
  primaryDark: "#001150",
  secondary: "#AFC9DF",
  background: "#222B45",
  backgroundDisabled: "#122935",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#AFC9DF",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#eefcff",
  textDisabled: "#727B75",
  textSubtle: "#90b9d4",
  borderColor: "#30d5d6",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
