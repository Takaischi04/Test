import React from "react";
import { StyleSheet, View } from "react-native";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Flavourtask from "./src/components/pages/flavourtask";
import firstPage from "./src/components/pages/firstPage";
import fluidpage from "./src/components/pages/fluidpage";
import supplementpage from "./src/components/pages/supplementpage";
import acceptingPage from "./src/components/pages/acceptingPage";
import customPage from "./src/components/pages/customPage";
import loadingPage from "./src/components/pages/loadingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <firstPage />,
    loader: <loadingPage />,
    children: [
      {
        path: "flavour",
        element: <Flavourtask />,
        loader: <loadingPage />,
      },
      {
        path: "fluid",
        element: <fluidpage />,
        loader: <loadingPage />,
      },
      {
        path: "supplement",
        element: <supplementpage />,
        loader: <loadingPage />,
      },
      {
        path: "accepting",
        element: <Flavourtask />,
        loader: <loadingPage />,
      },
      {
        path: "custom",
        element: <Flavourtask />,
        loader: <loadingPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
