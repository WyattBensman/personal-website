import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/Contact";
import App from "./App";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);
