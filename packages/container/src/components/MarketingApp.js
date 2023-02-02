import { component } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [childReturn, setChildReturn] = useState();

  useEffect(() => {
    const { mount, unmount } = component();

    const childReturn = mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        if (location.pathname !== nextPathname) navigate(nextPathname);
      },
    });

    setChildReturn(childReturn);

    return () => {
      unmount();
    };
  }, []);

  useEffect(() => {
    if (childReturn) {
      const { onParentNavigate } = childReturn;
      onParentNavigate(location);
    }
  }, [location, childReturn]);

  return <div ref={ref} />;
};
