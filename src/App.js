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
        <div
          className='transition duration-500  
                     bg-white dark:bg-dark-900 '
        >
          <Routes>
            <Route path='/' exact element={<Home />} />
          </Routes>
        </div>
      </AnimatePresence>
    </Router>
  );
}

export default App;
