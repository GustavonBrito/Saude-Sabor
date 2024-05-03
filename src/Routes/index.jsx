import { Route, BrowserRouter, Routes } from "react-router-dom";

import { App } from "../App";
import { Home } from "../pages/Home/Home";

export function RouteList() {
  return (
    // BrowserRouter se comunica com o Routes
    // O Routes verifica dentro de Route e se tiver alguma Rota ele manda para o BrowserRouter
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
