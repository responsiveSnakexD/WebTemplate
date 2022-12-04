import React from "react";
import { Link } from "react-router-dom";
import { NavItemStyled } from "./NavItem.styled";
import { NavItemProps } from "./type";

export const NavItem: React.FC<NavItemProps> = ({ name, path }) => {
  return (
    <NavItemStyled>
      <Link to={path}>{name}</Link>
    </NavItemStyled>
  );
};
