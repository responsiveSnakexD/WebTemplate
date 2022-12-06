import React from "react";
import { ColorType } from "../../../../theme/colors";
import { ButtonStyled } from "./Button.styled";
import { ButtonProps } from "./type";

export const Button: React.FC<ButtonProps> = ({
  type = ColorType.Primary,
  children,
  onClick,
}) => {
  return (
    <ButtonStyled color={type} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};
