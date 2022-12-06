import { dark, light, Colors } from "./colors";
import { Typography, typography } from "./typography";
import { Spacing, spacing } from "./spacing";

export type Theme = {
  colors: Colors;
  typography: Typography;
  spacing: Spacing;
  transitionTime: number;
};

const commonTheme: Omit<Theme, "colors"> = {
  transitionTime: 0.3,
  typography,
  spacing,
};

export const lightTheme: Theme = {
  ...commonTheme,
  colors: light,
};

export const darkTheme: Theme = {
  ...commonTheme,
  colors: dark,
};
