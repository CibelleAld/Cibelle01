import React from "react";
import {BrowserRouter as Router, Routes, Route,Navigate} from "react-router-dom";
import Evenement from "./page/Evenement";
import Aide from "./page/Aide";
import Utilisateur from "./page/Utilisateur";

function App() {
  return (
    <Router>
       <Routes>
        <Route path="/" element={<Navigate to="/evenement" />} />
         <Route path ="/evenement" element={<Evenement />} />
         <Route path ="/aide" element={<Aide />} />
         <Route path ="/utilisateur" element={<Utilisateur />} />
       </Routes >
    </Router>
  
  );
}

export default App;