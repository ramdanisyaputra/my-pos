import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import NotFound from "../views/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home category="makanan" />} />
        <Route path="/makanan" element={<Home category="makanan" />} />
        <Route path="/minuman" element={<Home category="minuman" />} />
        <Route path="/favorite" element={<Home category="favorite" />} />
        <Route path="/cemilan" element={<Home category="cemilan" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
  
export default Router;