import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";
import { Home } from "./pages/Home";
import ErrorPage from "./pages/Error";
import "./index.css";
import { Nav } from "./components/common/Nav";

const navItems: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <h1>About</h1>,
  },
];
const router = createBrowserRouter(navItems);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Nav navItems={navItems} />
    <main>
      <RouterProvider router={router} />
    </main>
    <footer>Made by me!</footer>
  </React.StrictMode>
);
