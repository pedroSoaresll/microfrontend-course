import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../components/shared/Header";
import Progress from "../components/shared/Progress";

import { useAuth } from "../contexts/AuthProvider";
import OnlyPublicRoutes from "./OnlyPublicRoutes";
import PrivateRoutes from "./PrivateRoutes";

const MarketingApp = React.lazy(() => import("../components/MarketingApp"));
const AuthApp = React.lazy(() => import("../components/AuthApp"));
const DashboardApp = React.lazy(() => import("../components/DashboardApp"));

export default () => {
  const { isSignedIn, onSignIn, onSignOut } = useAuth();

  return (
    <BrowserRouter>
      <Header signedIn={isSignedIn} onSignOut={onSignOut} />
      <Suspense fallback={<Progress />}>
        <Routes>
          <Route path="/dashboard/*" element={<PrivateRoutes />}>
            <Route path="*" element={<DashboardApp />} />
          </Route>

          <Route element={<OnlyPublicRoutes />}>
            <Route path="/auth/*" element={<AuthApp onSignIn={onSignIn} />} />
            <Route path="/*" element={<MarketingApp />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
