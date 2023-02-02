import React, { createContext, useState, useContext } from "react";

export const AuthContext = createContext({
  isSignedIn: false,
  onSignIn() {},
  onSignOut() {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export default ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState();

  const onSignIn = () => setIsSignedIn(true);

  const onSignOut = () => setIsSignedIn(false);

  const values = {
    onSignIn,
    onSignOut,
    isSignedIn,
  };

  return (
    <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
  );
};
