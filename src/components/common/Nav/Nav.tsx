import React from "react";
import { NavStyled } from "./Nav.styled";
import { NavItem } from "./NavItem";
import { NavProps } from "./type";

export const Nav: React.FC<NavProps> = ({ navItems }) => {
  return (
    <NavStyled>
      <ul>
        {navItems.map((item) => (
          <NavItem {...item} />
        ))}
      </ul>
    </NavStyled>
  );
};
