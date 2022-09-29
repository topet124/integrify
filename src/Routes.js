import React from "react";
import Home from "./Home";
import {
  Routes,
  Route,
} from "react-router-dom";

import UserPage from "./userPage";

export default function AppRoutes() {
  return (
    <div>
      
        <Routes>
          <Route path="/user/:userId" element={<UserPage/>} />
          <Route path="/" exact element={<Home />} />
        </Routes>
    
    </div>
  );
}
