import { css } from "styled-components";
import { Theme } from ".";
import { ColorType } from "./colors";

export const getColor = (theme: Theme, color: ColorType) => css`
  color: ${theme.colors[color].text};
  background-color: ${theme.colors[color].background};
`;
