import styled from "styled-components";
import { ColorType } from "../../../../theme/colors";
import { applyColor } from "../../../mixins";

export const ButtonStyled = styled.a<{ color: ColorType }>`
  ${applyColor};
  padding: 0.5rem;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;
