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
import Blog from "./pages/Blog";
import BlogItem, { loader as blogLoader } from "./pages/Blog/BlogItem";
import Root from "./Root";

const navItems: RouteObject[] = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "blog",
        element: <Blog />,
        children: [
          {
            path: ":blogId",
            element: <BlogItem />,
            loader: blogLoader,
          },
        ],
      },
    ],
  },
];
const router = createBrowserRouter(navItems);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
