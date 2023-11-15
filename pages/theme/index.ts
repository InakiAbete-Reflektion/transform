import border from "./border";
import palette from "./palette";
import spacing from "./spacing";
import typography from "./typography";

export interface Color {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

export interface PaletteColor {
  light: string;
  main: string;
  dark: string;
  contrastText: string;
}

export interface CommonColor {
  black: string;
  white: string;
}

export interface TypeText {
  primary: string;
  secondary: string;
  disabled: string;
}

export interface Palette {
  common: CommonColor;
  primary: PaletteColor;
  secondary: PaletteColor;
  error: PaletteColor;
  warning: PaletteColor;
  info: PaletteColor;
  success: PaletteColor;
  grey: Color;
  text: TypeText;
}

export interface FontStyleSize {
  fontSize: React.CSSProperties["fontSize"];
  fontWeight: React.CSSProperties["fontWeight"];
  lineHeight: React.CSSProperties["lineHeight"];
}

export interface FontStyle extends FontStyleSize {
  fontFamilySystem: React.CSSProperties["fontFamily"];
}

export interface Typography extends FontStyle {
  fontSize1: FontStyleSize;
  fontSize2: FontStyleSize;
  fontSize3: FontStyleSize;
  fontSize4: FontStyleSize;
  fontSize5: FontStyleSize;
  fontSize6: FontStyleSize;
  fontSize7: FontStyleSize;
  fontSize8: FontStyleSize;
  h1: FontStyle;
  h2: FontStyle;
  h3: FontStyle;
  h4: FontStyle;
  h5: FontStyle;
  h6: FontStyle;
}

export interface Spacing {
  default: number | string | undefined;
  none: number | string | undefined;
  xs: number | string | undefined;
  s: number | string | undefined;
  m: number | string | undefined;
  l: number | string | undefined;
  xl: number | string | undefined;
}

export interface Border {
  width: number | string | undefined;
  radius: number | string | undefined;
}

export interface Theme {
  border: Border;
  palette: Palette;
  spacing: Spacing;
  typography: Typography;
  vars?: Record<string, string>;
}

export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

export type ThemePartial = DeepPartial<Theme>;

// When a new prop is added here, if should be used as css vars include the property in createCSSVariables.js function
const defaultTheme: Theme = {
  border,
  palette,
  spacing,
  // @ts-ignore
  typography
};

export default defaultTheme;
