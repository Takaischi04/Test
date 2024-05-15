import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Flavourtask from "./src/components/pages/flavourtask";
import FirstPage from "./src/components/pages/firstPage";
import FluidPage from "./src/components/pages/fluidPage";
import SupplementPage from "./src/components/pages/supplementPage";
import AcceptingPage from "./src/components/pages/acceptingPage";
import CustomPage from "./src/components/pages/customPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FirstPage />,
  },
  {
    path: "/fluid",
    element: <FluidPage />,
  },
  {
    path: "/flavour",
    element: <Flavourtask />,
  },

  {
    path: "/supplement",
    element: <SupplementPage />,
  },
  {
    path: "/accepting",
    element: <AcceptingPage />,
  },
  {
    path: "/custom",
    element: <CustomPage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
