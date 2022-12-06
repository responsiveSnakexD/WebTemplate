import styled from "styled-components";
import { ColorType } from "../../../../../theme/colors";
import { SpacingGroup } from "../../../../../theme/spacing";
import { applyColor, applySpacing } from "../../../../mixins";

export const NavItemStyled = styled.li`
  a {
    ${({ theme }) => applySpacing({ theme, spacing: SpacingGroup.Small })}
    transition: all 0.3s ease-in-out;
    &:hover {
      ${({ theme }) => applyColor({ theme, color: ColorType.Primary })}
    }
  }
`;
