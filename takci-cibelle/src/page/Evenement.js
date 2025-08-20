import React, { useState, useEffect } from "react";

import {FaPhone} from "react-icons/fa";
import Headerpage from "./Headerpage";
import Footerpage from "./Footerpage";
import Scrolltop from "./Scrolltop";


function Evenement() {
    
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://takci.inawo.pro/eventpublicget/")
      .then((res) => res.json())
      .then((data) => {
        const filteredEvents = data.data
          .filter(
            (event) =>
              event.status &&
              event.status.trim().toLowerCase() !== "passé"
          )
          .sort((a, b) => new Date(a.date) - new Date(b.date));
        setEvents(filteredEvents);
      })
      .catch((err) => console.error("Erreur:", err));
  }, []);

  const filteredEvents = events.filter(
    (event) =>
      event.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (event.description &&
        event.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (event.lieu &&
        event.lieu.toLowerCase().includes(searchTerm.toLowerCase()))
       
  );

  return (
    <div className="min-h-screen flex flex-col  bg-blue-900  ">
      {/* Header */}
      <Headerpage />

      {/* Main */}
      <main className="flex-grow pt-20 container mx-auto bg-white">
        <section className="my-8">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <a href="/evenement" className="bg-blue-800 text-white px-8 py-4 flex items-center justify-betweenbg-yellow-500 text-white px-4 py-2 rounded">
              Créer un évènement
            </a>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Rechercher un évènement"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border p-2 rounded"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Rechercher
              </button>
            </div>
          </div>

          {/* Liste d'évènements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {filteredEvents.length === 0 ? (
              <p className="text-red-500">Aucun évènement trouvé.</p>
            ) : (
              filteredEvents.map((event, index) => (
                <div key={index} className="border rounded-lg overflow-hidden shadow">
                  <img
                    src={
                      event.banniere
                        ? `https://takci.inawo.pro/event_banniere/${event.banniere}`
                        : "/assets/img/image_defaut.jpg"
                    }
                    alt={event.nom}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold">{event.nom}</h3>
                    <p>{event.description || "Aucune description"}</p>
                    <p>Date: {new Date(event.date).toLocaleDateString("fr-FR")}</p>
                    <p>Lieu: {event.lieu || "Non précisé"}</p>
                    <p>Heure: {event.heure || "Non précisée"}</p>
                    <p>Statut: {event.status}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
     

    
        
     </main> 
       {/* Footer */}
       {/* Footer intégré après la recherche */}
       <Footerpage />
       <Scrolltop />
    </div>
    
  );
}

export default Evenement;