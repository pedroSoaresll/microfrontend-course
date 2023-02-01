import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";
import CustomRouter from "./components/CustomRouter";

const generateClassName = createGenerateClassName({
  productionPrefix: "ma",
});

export default ({ history }) => {
  return (
    <React.StrictMode>
      <StylesProvider generateClassName={generateClassName}>
        <CustomRouter history={history}>
          <Routes>
            <Route path="/pricing" element={<Pricing />} />
            <Route index element={<Landing />} />
          </Routes>
        </CustomRouter>
      </StylesProvider>
    </React.StrictMode>
  );
};
