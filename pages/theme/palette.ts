import COLORS from "tailwindcss/colors";

export default {
  common: {
    black: "#000",
    white: "#FFF"
  },
  primary: {
    main: "#5548D9",
    light: "#EEECFB",
    dark: "#4A37D5",
    contrastText: "#fff"
  },
  secondary: {
    main: "#ff3d00",
    light: "#ff6e40",
    dark: "#dd2c00",
    contrastText: "#fff"
  },
  grey: {
    "100": COLORS.gray[100],
    "200": COLORS.gray[200],
    "300": COLORS.gray[300],
    "400": COLORS.gray[400],
    "500": COLORS.gray[500],
    "600": COLORS.gray[600],
    "700": COLORS.gray[700],
    "800": COLORS.gray[800],
    "900": COLORS.gray[900]
  },
  info: {
    main: "#0288d1",
    light: "#03a9f4",
    dark: "#01579b",
    contrastText: "#fff"
  },
  success: {
    main: "#2e7d32",
    light: "#4caf50",
    dark: "#1b5e20",
    contrastText: "#fff"
  },
  error: {
    main: "#d32f2f",
    light: "#ef5350",
    dark: "#c62828",
    contrastText: "#fff"
  },
  warning: {
    main: "#ed6c02",
    light: "#ff9800",
    dark: "#e65100",
    contrastText: "#fff"
  },
  text: {
    primary: "rgba(0, 0, 0, 0.87)",
    secondary: "rgba(0, 0, 0, 0.6)",
    disabled: "rgba(0, 0, 0, 0.38)"
  }
};
