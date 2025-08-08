// src/App.js

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./page/Index"; // Assure-toi que le chemin est correct

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;
