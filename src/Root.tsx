import { Nav } from "./components/common/Nav";
import { NavItemProps } from "./components/common/Nav/NavItem";
import { Outlet } from "react-router-dom";

const navItems: NavItemProps[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Blog",
    path: "/blog",
  },
];

function Root() {
  return (
    <>
      <Nav navItems={navItems} />
      <main>
        <Outlet />
      </main>
      <footer>Made by me!</footer>
    </>
  );
}

export default Root;
