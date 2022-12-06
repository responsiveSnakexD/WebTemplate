import { css, DefaultTheme } from "styled-components";
import { ColorType } from "../../theme/colors";

type Props = { theme: DefaultTheme; color: ColorType };

export const applyColor = ({ theme, color }: Props) =>
  css`
    color: ${theme.colors[color].text};
    background-color: ${theme.colors[color].background};
  `;
