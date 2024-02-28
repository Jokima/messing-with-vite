import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/home";
import { homeLoader } from "./pages/home/homeLoader";
import Systems from "./pages/systems/systems";
import { systemsLoader } from "./pages/systems/systemsLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: homeLoader,
  },
  {
    path: "systems",
    element: <Systems />,
    loader: systemsLoader,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App