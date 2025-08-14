import React, { useState, useEffect } from "react";
import logo from "../assets/logo2_3.png"; 
import {FaPhone} from "react-icons/fa";


function Evenement() {
    const [active, setActive] = useState("evenement");
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
    <div className="min-h-screen flex flex-col  bg-blue-800">
      {/* Header */}
      <header className="bg-blue-800 text-white px-8 py-4 flex items-center justify-between">
        <div className="container mx-auto flex items-center justify-between p-4">
          <a href="/" className="flex items-center justify-between">
            <img src={logo} alt="Takci" className="h-10 mr-12" />
          </a>
         <nav>
      <ul className="flex gap-4 items-center">
        <li>
          <a
            href="/"
            onClick={() => setActive("accueil")}
            className={`px-2 py-1 ${active === "accueil" ? "border-b-4 border-yellow-400" : ""} hover:text-yellow-400`}
          >
            Accueil
          </a>
        </li>
        <li>
          <a
            href="/driver"
            onClick={() => setActive("takciPro")}
            className={`px-2 py-1 ${active === "takciPro" ? "border-b-4 border-yellow-400" : ""} hover:text-yellow-400`}
          >
            Takci Pro
          </a>
        </li>
        <li>
          <a
            href="/utilisateur"
            onClick={() => setActive("utilisateur")}
            className={`px-2 py-1 ${active === "utilisateur" ? "border-b-4 border-yellow-400" : ""} hover:text-yellow-400`}
          >
            Utilisateur
          </a>
        </li>
        <li>
          <a
            href="/evenement"
            onClick={() => setActive("evenement")}
            className={`px-2 py-1 ${active === "evenement" ? "border-b-4 border-yellow-400" : ""} hover:text-yellow-400`}
          >
            Évènement
          </a>
        </li>
        <li>
          <a
            href="/aide"
            onClick={() => setActive("aide")}
            className={`px-2 py-1 ${active === "aide" ? "border-b-4 border-yellow-400" : ""} hover:text-yellow-400`}
          >
            Aide
          </a>
        </li>
        <li>
          <a
            href="/contact"
            onClick={() => setActive("contact")}
            className={`px-2 py-1 ${active === "contact" ? "border-b-4 border-yellow-400" : ""} hover:text-yellow-400`}
          >
            Contacts
          </a>
        </li>
        <li className="flex items-center gap-1 ml-4">
          <FaPhone size={20} />
          <span>01 55 55 65 65</span>
        </li>
      </ul>
    </nav>
        </div>
      </header>

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
        <footer className="bg-blue-800 text-white px-8 py-4 mt-auto">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
      {/* Footer About / Logo */}
            <div className="md:col-span-4 flex flex-col items-start space-y-4">
              <a href="/" className="flex items-center">
                
                  <img src={logo} alt="Takci" className="h-10" />
              
              </a>
              <div className="space-y-2">
                <p>Si vous avez des questions ou si vous avez besoin d'aide, n'hésitez pas à contacter notre équipe.</p>
                <p>
                  <strong>Contact:</strong> <span>+229 00 00 00 00</span>
                </p>
                <p>
                  <strong>Email:</strong> <span>marktech@example.com</span>
                </p>
              </div>
              <div className="flex space-x-4 mt-4 text-2xl">
                <a href="/evenement"><i className="bi bi-twitter"></i></a>
                <a href="/evenement"><i className="bi bi-facebook"></i></a>
                <a href="/evenement"><i className="bi bi-instagram"></i></a>
                <a href="/evenement"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>

            {/* Takci Pro Links */}
            <div className="md:col-span-2">
              <h4 className="font-bold mb-4">Takci Pro</h4>
              <ul className="space-y-2">
                <li><a href="/evenement" className="hover:underline">Conduire sur Takci</a></li>
                <li>
                  <a href="Formulaire1.html" className="bg-yellow-500 text-white px-3 py-1 rounded inline-block mt-2">
                    Conduire
                  </a>
                </li>
              </ul>
            </div>

            {/* Utilisateur Links */}
            <div className="md:col-span-2">
              <h4 className="font-bold mb-4">Utilisateur</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Se déplacer avec Takci</a></li>
                <li><a href="#" className="hover:underline">Conditions générales d'utilisation</a></li>
              </ul>
            </div>

            {/* Newsletter / Contacts */}
            <div className="md:col-span-4">
              <h4 className="font-bold mb-4">Contacts</h4>
              <p className="mb-4">Subscribe to our newsletter and receive the latest news about our products and services!</p>
              <a href="#" className="bg-yellow-500  text-white px-4 py-2 rounded inline-flex items-center gap-2">
                <i className="icon-download"></i>
                <span>Télécharger PDF</span>
               
              </a>
            </div>

          </div>
           <div className="bg-blue-800 text-white px-8 py-4 flex-col items-center text-center space-y-1">
                   <p>© 2024 Takci - Tout droit réservé</p>
                   <p>Conçu & développé par MARKTECH</p>
                </div>
          
        </footer>
    </div>
    
  );
}

export default Evenement;