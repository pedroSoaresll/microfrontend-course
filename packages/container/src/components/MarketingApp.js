import { component } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // TODO: bug when mount and unmount the route when moving between routes
  useEffect(() => {
    const { mount, unmount } = component();

    mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = location;
        if (pathname !== nextPathname) navigate(nextPathname);
      },
    });

    return () => {
      console.log("marketing app unmounted");
      unmount();
    };
  });

  return <div ref={ref} />;
};
