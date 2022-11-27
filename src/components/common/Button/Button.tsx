import React from "react";
import { ButtonStyled } from "./Button.styled";
import { ButtonProps } from "./type";

export const Button: React.FC<ButtonProps> = ({ type, children, onClick }) => {
  return (
    <ButtonStyled type={type} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};
