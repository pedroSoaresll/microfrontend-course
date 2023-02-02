import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import Header from "./components/Header";
import Progress from "./components/Progress";

const MarketingApp = React.lazy(() => import("./components/MarketingApp"));
const AuthApp = React.lazy(() => import("./components/AuthApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Header />

        <Suspense fallback={<Progress />}>
          <Routes>
            <Route path="/auth/*" element={<AuthApp />} />
            <Route path="/*" element={<MarketingApp />} />
          </Routes>
        </Suspense>
      </StylesProvider>
    </BrowserRouter>
  );
};
