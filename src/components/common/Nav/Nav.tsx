import React from "react";
import { NavStyled } from "./Nav.styled";
import { NavItem } from "./NavItem";
import { NavProps } from "./type";

const getPageName = (path: string | undefined) => {
  if (!path) return "";
  if (path === "/") return "Home";
  //  remove / from path and capitalize first letter
  return path.slice(1).charAt(0).toUpperCase() + path.slice(2);
};

export const Nav: React.FC<NavProps> = ({ navItems }) => {
  return (
    <NavStyled>
      <ul>
        {navItems.map(({ path, name }) => (
          <NavItem key={path} name={name} path={path} />
        ))}
      </ul>
    </NavStyled>
  );
};
