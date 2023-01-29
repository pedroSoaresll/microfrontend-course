import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const router = createBrowserRouter([
  {
    path: "pricing",
    element: <Pricing />,
  },
  {
    index: true,
    element: <Landing />,
  },
]);

export default () => {
  return (
    <React.StrictMode>
      <StylesProvider>
        <RouterProvider router={router} />
      </StylesProvider>
    </React.StrictMode>
  );
};
