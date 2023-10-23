import React from "react";
import ReactDOM from "react-dom/client";
import { RouteList } from "./Routes/index.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouteList />
  </React.StrictMode>
);
