import { Home } from "./pages/Home";
import { Nav } from "./components/common/Nav";
import { NavItemProps } from "./components/common/Nav/NavItem";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../theme";
import GlobalStyle from "./globalStyles";

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
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Nav navItems={navItems} />
      <main>
        <Home />
      </main>
      <footer>Made by me!</footer>
    </ThemeProvider>
  );
}

export default App;
