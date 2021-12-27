import { AnimatePresence } from "framer-motion";
import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import DarkButton from "./components/darkMode/DarkButton";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <AnimatePresence>
      
          <Routes>
            <Route path='/' exact element={<Home />} />
          </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
