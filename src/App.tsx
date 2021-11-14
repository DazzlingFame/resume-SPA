import React from "react";

import "./css/variables.css";
import "./css/font.css";
import { Resume } from "./screen/Resume";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route
          path="*"
          element={<Resume />}
        />
      </Routes>
  );
}

export default App;
