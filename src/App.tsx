import { Home } from "./pages/Home";
import "./App.css";
import { Nav } from "./components/common/Nav";
import { NavItemProps } from "./components/common/Nav/NavItem";
import { useState } from "react";
import LoginModal from "./components/common/LoginModal";

const navItems: NavItemProps[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Nav navItems={navItems} />

      <main>
        <Home />
        <LoginModal />
      </main>
      <footer>Made by me!</footer>
    </>
  );
}

export default App;
