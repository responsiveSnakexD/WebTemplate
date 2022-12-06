import React from "react";
import { ButtonStyled } from "./Button.styled";
import { ButtonProps, ButtonType } from "./type";

export const Button: React.FC<ButtonProps> = ({
  type = ButtonType.Primary,
  children,
  onClick,
}) => {
  return (
    <ButtonStyled type={type} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};
