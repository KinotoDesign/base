import Express from "express";
import Root from "./routes/root.route";
import Login from "./routes/login.route";

import { configure, getLogger, connectLogger } from "log4js";
import { getPort, getLog4js, getMode } from "./utils/config.function";
import { Mode } from "./utils/mode.enum";

const app = Express();
configure(getLog4js());
app.use(connectLogger(getLogger(), {}));
app.set("view engine", "pug");
if (getMode() === Mode.Development) {
  app.use(Express.static("public"));
}
app.use("/", Root);
app.use("/login", Login);
app.listen(getPort());
