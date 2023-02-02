import React from 'react'
import { useLayoutEffect } from "react";
import { useState } from "react";
import { Router } from "react-router-dom";

export default ({ history, ...props }) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      {...props}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  );
};
