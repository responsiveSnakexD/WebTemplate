import styled from "styled-components";
import { ButtonType } from "./type";

export const ButtonStyled = styled.a<{ type: ButtonType }>`
  background-color: #000;
  color: #fff;
  padding: 0.5rem;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;
