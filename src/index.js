import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./views/App";
import "./sass/main.scss";

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
