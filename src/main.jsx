import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "boxicons/css/boxicons.css";
import App from "./App.jsx";
import "./index.scss";
import { Provider } from "react-redux";
import store from "./components/redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
