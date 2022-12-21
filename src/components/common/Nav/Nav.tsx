import React from "react";
import useMachines from "../../../hooks/useMachines";
import { NavStyled } from "./Nav.styled";
import { NavItem } from "./NavItem";
import { NavItemStyled } from "./NavItem/NavItem.styled";
import { NavProps } from "./type";

export const Nav: React.FC<NavProps> = ({ navItems }) => {
  const { auth } = useMachines();

  return (
    <NavStyled>
      <ul>
        {navItems.map((item) => (
          <NavItem key={item.name} {...item} />
        ))}
        <NavItemStyled>
          <span
            onClick={() => {
              auth.send("SHOW_MODAL");
            }}
          >
            Login
          </span>
        </NavItemStyled>
      </ul>
    </NavStyled>
  );
};
