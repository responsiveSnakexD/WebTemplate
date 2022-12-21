import { Home } from "./pages/Home";
import "./App.css";
import { Nav } from "./components/common/Nav";
import { NavItemProps } from "./components/common/Nav/NavItem";
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
