import { css, DefaultTheme } from "styled-components";
import { SpacingGroup } from "../../theme/spacing";

type Props = {
  theme: DefaultTheme;
  spacing: SpacingGroup;
};

export const applySpacing = ({ theme, spacing }: Props) =>
  css`
    padding: ${theme.spacing[spacing]};
    margin: ${theme.spacing[spacing]};
  `;
