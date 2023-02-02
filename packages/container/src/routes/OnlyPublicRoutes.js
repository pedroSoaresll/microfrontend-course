import React from "react";
import { Outlet, Navigate } from "react-router-dom";

import { useAuth } from "../contexts/AuthProvider";

export default () => {
  const { isSignedIn } = useAuth();

  if (isSignedIn) return <Navigate to="/dashboard" />;

  return <Outlet />;
};
