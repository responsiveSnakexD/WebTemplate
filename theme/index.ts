import { dark, light } from "./colors";
import { typography } from "./typography";
import { spacing } from "./spacing";

const commonTheme = {
  typography,
  spacing,
};

export const lightTheme = {
  ...commonTheme,
  colors: light,
};

export const darkTheme = {
  ...commonTheme,
  colors: dark,
};
export type Theme = typeof lightTheme;
