import THEME from "tailwindcss/defaultTheme";

export default {
  fontFamilySystem:
    "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Arial, sans-serif",
  fontSize: THEME.fontSize.base[0],
  lineHeight: THEME.fontSize.base[1].lineHeight,
  fontWeight: THEME.fontWeight.light,

  fontSize1: {
    fontSize: THEME.fontSize.sm[0],
    fontWeight: THEME.fontWeight.normal,
    lineHeight: THEME.fontSize.sm[1].lineHeight
  },

  fontSize2: {
    fontSize: THEME.fontSize.base[0],
    fontWeight: THEME.fontWeight.normal,
    lineHeight: THEME.fontSize.base[1].lineHeight
  },

  fontSize3: {
    fontSize: THEME.fontSize.lg[0],
    fontWeight: THEME.fontWeight.normal,
    lineHeight: THEME.fontSize.lg[1].lineHeight
  },

  fontSize4: {
    fontSize: THEME.fontSize.xl[0],
    fontWeight: THEME.fontWeight.normal,
    lineHeight: THEME.fontSize.xl[1].lineHeight
  },

  fontSize5: {
    fontSize: THEME.fontSize["2xl"][0],
    fontWeight: THEME.fontWeight.normal,
    lineHeight: THEME.fontSize["2xl"][1].lineHeight
  },

  fontSize6: {
    fontSize: THEME.fontSize["3xl"][0],
    fontWeight: THEME.fontWeight.normal,
    lineHeight: THEME.fontSize["3xl"][1].lineHeight
  },

  fontSize7: {
    fontSize: THEME.fontSize["4xl"][0],
    fontWeight: THEME.fontWeight.normal,
    lineHeight: THEME.fontSize["4xl"][1].lineHeight
  },

  fontSize8: {
    fontSize: THEME.fontSize["5xl"][0],
    fontWeight: THEME.fontWeight.normal,
    lineHeight: THEME.fontSize["5xl"][1].lineHeight
  },

  h1: {
    fontFamilySystem: THEME.fontFamily.sans.join(", "),
    fontSize: THEME.fontSize["5xl"][0],
    fontWeight: THEME.fontWeight.normal,
    lineHeight: THEME.fontSize["5xl"][1].lineHeight
  },
  h2: {
    fontFamilySystem: THEME.fontFamily.sans.join(", "),
    fontSize: THEME.fontSize["4xl"][0],
    fontWeight: THEME.fontWeight.normal,
    lineHeight: THEME.fontSize["4xl"][1].lineHeight
  },
  h3: {
    fontFamilySystem: THEME.fontFamily.sans.join(", "),
    fontSize: THEME.fontSize["3xl"][0],
    fontWeight: THEME.fontWeight.normal,
    lineHeight: THEME.fontSize["3xl"][1].lineHeight
  },
  h4: {
    fontFamilySystem: THEME.fontFamily.sans.join(", "),
    fontSize: THEME.fontSize["2xl"][0],
    fontWeight: THEME.fontWeight.normal,
    lineHeight: THEME.fontSize["2xl"][1].lineHeight
  },
  h5: {
    fontFamilySystem: THEME.fontFamily.sans.join(", "),
    fontSize: THEME.fontSize["xl"][0],
    fontWeight: THEME.fontWeight.semibold,
    lineHeight: THEME.fontSize["xl"][1].lineHeight
  },
  h6: {
    fontFamilySystem: THEME.fontFamily.sans.join(", "),
    fontSize: THEME.fontSize["lg"][0],
    fontWeight: THEME.fontWeight.semibold,
    lineHeight: THEME.fontSize["lg"][1].lineHeight
  }
};
