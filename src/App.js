import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Loading } from "./components/shared";
import DashBoardLayout from "./layout/DashBoardLayout";

import "./scss/style.scss";
import "./index.css";

const App = () => (
  <BrowserRouter>
    <Suspense fallback={Loading}>
      <Routes>
        <Route path="*" name="Home" element={<DashBoardLayout />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
