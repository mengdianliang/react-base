import dva from "dva";
import "./index.css";
// import createHistory from "history/createBrowserHistory";
import { createBrowserHistory as createHistory } from "history";
// import RouterConfig from "./router";

// 1. Initialize
const app = dva({
  history: createHistory(),
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
// app.model(require("./models/product").default);
require("./models").default.forEach((key) => app.model(key.default));

// 4. Router
app.router(require("./router").default);
// app.router(RouterConfig);

// 5. Start
app.start("#root");
