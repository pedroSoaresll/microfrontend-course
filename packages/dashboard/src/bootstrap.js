import { createApp } from "vue";
import PrimeVue from "primevue/config";

// PrimeVue components
import Checkbox from "primevue/checkbox";
import Panel from "primevue/panel";
import Dropdown from "primevue/dropdown";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Column from "primevue/column";
import DataTable from "primevue/datatable";
import Chart from "primevue/chart";
import ProgressBar from "primevue/progressbar";

// PrimeVue css
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

// components
import Dashboard from "./components/Dashboard.vue";

// Mount function to start up the app
const component = () => {
  let app;
  const mount = (el) => {
    app = createApp(Dashboard);
    app.use(PrimeVue);

    app.component("Checkbox", Checkbox);
    app.component("Panel", Panel);
    app.component("Dropdown", Dropdown);
    app.component("InputText", InputText);
    app.component("Button", Button);
    app.component("Column", Column);
    app.component("DataTable", DataTable);
    app.component("Chart", Chart);
    app.component("ProgressBar", ProgressBar);

    app.mount(el);
  };

  const unmount = () => app.unmount();

  return {
    mount,
    unmount,
  };
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_dashboard-dev-root");
  const { mount } = component();

  if (devRoot) {
    mount(devRoot);
  }
}

// We are running through container
// and we should export the mount function
export { component };
