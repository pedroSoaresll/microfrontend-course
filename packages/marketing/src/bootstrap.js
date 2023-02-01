import React from "react";
import ReactDOM from "react-dom/client";
import { createMemoryHistory } from "history";
import App from "./App";

const component = () => {
  let root;
  
  const mount = (el, { onNavigate }) => {
    const history = createMemoryHistory();
    history.listen(({ location }) => onNavigate(location));

    root = ReactDOM.createRoot(el);

    root.render(<App history={history} />);
  };

  const unmount = () => root.unmount();

  return { mount, unmount };
};

// Mount function to start up the app

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");

  if (devRoot) {
    mount(devRoot);
  }
}

// We are running through container
// and we should export the mount function
export { component };
