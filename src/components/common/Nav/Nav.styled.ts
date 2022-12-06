import styled from "styled-components";
import { ColorType } from "../../../../theme/colors";
import { SpacingGroup } from "../../../../theme/spacing";
import { applyColor, applySpacing } from "../../../mixins";

export const NavStyled = styled.nav`
  ${({ theme }) => applyColor({ theme, color: ColorType.Secondary })}
  ${({ theme }) => applySpacing({ theme, spacing: SpacingGroup.Small })}

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
