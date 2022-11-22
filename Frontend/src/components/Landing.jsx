import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCoustomer from "./AddCoustomer";
import Navi from "./Navi";
import Showcoustomer from "./Showcoustomer";
import Update from "./Update";

const Landing = () => {
  return (
    <div>
      <BrowserRouter>
        <Navi />
        <Routes>
          <Route path="/add" element={<AddCoustomer />} />
          <Route path="/show" element={<Showcoustomer />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Landing;
