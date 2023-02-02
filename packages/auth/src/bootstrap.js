import React from "react";
import ReactDOM from "react-dom/client";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

const component = () => {
  let root;

  const mount = (
    el,
    { onNavigate, onSignIn, defaultHistory, initialPath } = {}
  ) => {
    const history =
      defaultHistory ||
      createMemoryHistory({
        initialEntries: [initialPath],
      });

    if (onNavigate) {
      history.listen(({ location }) => onNavigate(location));
    }

    root = ReactDOM.createRoot(el);
    root.render(<App history={history} onSignIn={onSignIn} />);

    return {
      onParentNavigate(location) {
        const { pathname: nextPathname } = location;
        const { pathname } = history.location;
        if (pathname !== nextPathname) history.push(nextPathname);
      },
    };
  };

  const unmount = () => root.unmount();

  return { mount, unmount };
};

// Mount function to start up the app

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_auth-dev-root");
  const { mount } = component();

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

// We are running through container
// and we should export the mount function
export { component };
