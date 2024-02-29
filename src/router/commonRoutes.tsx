import Home from "../pages/home/home";
import Systems from "../pages/systems/systems";

export const commonRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "systems",
    element: <Systems />,
  },
];