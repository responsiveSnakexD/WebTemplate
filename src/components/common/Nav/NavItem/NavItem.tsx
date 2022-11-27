import React from "react";
import { NavItemStyled } from "./NavItem.styled";
import { NavItemProps } from "./type";

export const NavItem: React.FC<NavItemProps> = ({ name, path }) => {
  return (
    <NavItemStyled>
      <a href={path}>{name}</a>
    </NavItemStyled>
  );
};
