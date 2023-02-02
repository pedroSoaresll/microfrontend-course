import React, { useRef, useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default ({ component }) => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [childReturn, setChildReturn] = useState();

  useEffect(() => {
    const { mount } = component();

    const childReturn = mount(ref.current, {
      initialPath: location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        if (location.pathname !== nextPathname) navigate(nextPathname);
      },
    });

    setChildReturn(childReturn);
  }, []);

  useEffect(() => {
    if (childReturn) {
      const { onParentNavigate } = childReturn;
      onParentNavigate(location);
    }
  }, [location, childReturn]);

  return <div ref={ref} />;
};
