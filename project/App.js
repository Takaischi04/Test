import React from "react";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Flavourtask from "./src/components/pages/flavourtask";
import firstPage from "./src/components/pages/firstPage";
import fluidPage from "./src/components/pages/fluidPage";
import supplementPage from "./src/components/pages/supplementPage";
import acceptingPage from "./src/components/pages/acceptingPage";
import customPage from "./src/components/pages/customPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <firstPage />,
  },
  {
    path: "/flavour",
    element: <Flavourtask />,
  },
  {
    path: "/fluid",
    element: <fluidPage />,
  },
  {
    path: "/supplement",
    element: <supplementPage />,
  },
  {
    path: "/accepting",
    element: <acceptingPage />,
  },
  {
    path: "/custom",
    element: <customPage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />
}