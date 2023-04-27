import React from "react";
import { Provider } from "react-redux";
import App from "./App";

import { store } from "./store";

import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

import "./index.css";

import "./assets/scss/style.scss";

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

