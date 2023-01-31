import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma'
})

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
      <StylesProvider generateClassName={generateClassName}>
        <RouterProvider router={router} />
      </StylesProvider>
    </React.StrictMode>
  );
};
