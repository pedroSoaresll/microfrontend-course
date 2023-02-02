import React from "react";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Routes from "./routes/Routes";
import AuthProvider from "./contexts/AuthProvider";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export default () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </StylesProvider>
  );
};
