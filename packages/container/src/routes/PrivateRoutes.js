import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import { Navigate } from "react-router-dom";

export default ({ children }) => {
  const { isSignedIn } = useContext(AuthContext);

  if (!isSignedIn) return <Navigate to="/auth/signin" />;

  return <Outlet />;
};
