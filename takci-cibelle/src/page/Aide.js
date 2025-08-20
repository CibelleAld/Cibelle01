import { useState } from "react";
import { Link } from "react-router-dom";
import { FaPhone,FaArrowDown } from "react-icons/fa";
import Headerpage from "./Headerpage";
import Footerpage from "./Footerpage";
import Scrolltop from "./Scrolltop";


function Aide() {
  const [role, setRole] = useState(null);
  const [active, setActive] = useState("aide");

  // FAQ pour Utilisateur
  const faqUtilisateur = [
    {
      question: "C'est quoi Takci ?",
      reponse: (
        <>
          <p>
            <strong>Takci</strong> est une application mobile innovante qui réunit deux
            services principaux pour faciliter la vie des utilisateurs :
          </p>
          <ul className="list-disc pl-5">
            <li>
              <strong>Transport :</strong> Déplacements sécurisés et rapides via Takci.
            </li>
            <li>
              <strong>Billetterie :</strong> Achat et revente de billets pour divers événements.
            </li>
          </ul>
        </>
      ),
    },
    {
      question: "Comment lancer une course sur Takci ?",
      reponse: (
        <p>
          Pour commander une course via l’application Takci, ouvrez l’app, sélectionnez votre
          destination, choisissez votre type de véhicule et validez.
        </p>
      ),
    },
  ];

  // FAQ pour Takci Pro
  const faqPro = [
    {
      question: "C'est quoi Takci ?",
      reponse: (
        <p>
          Takci est une application mobile innovante qui connecte conducteurs et passagers pour
          un service de transport sûr et rapide.
        </p>
      ),
    },
    {
      question: "Comment accepter une course sur TakciPro ?",
      reponse: (
        <p>
          Sur TakciPro, lorsque vous recevez une notification de course, appuyez sur
          “Accepter” pour démarrer le trajet vers le client.
        </p>
      ),
    },
  ];

  const dataToShow =
    role === "utilisateur" ? faqUtilisateur : role === "pro" ? faqPro : [];

  return (
    <div className="min-h-screen flex flex-col bg-blue-800"
      
      >
      {/* Header */}
     <Headerpage />

      {/* Hero Section */}
       
      <main className="bg-gray-900 text-white min-h-screen flex flex-col">
       <section className="relative h-[60vh] flex items-center justify-center text-center ">
        {/* Image en arrière-plan */}
       
        <img
       
          src="/assets/img/user_aide.jpg" alt="Utilisateur Takci"
          className="absolute inset-0 w-full h-full object-cover"
        />
         <div className="absolute inset-0 bg-blue-600/30 z-0" />
      
        <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white underline decoration-yellow-500 ">Utilisateur</h1>
             
        <a href="#details" className="mt-10 inline-block relative">
          {/* Halo jaune animé avec pulse de Tailwind */}
          <div className="absolute w-20 h-20 bg-yellow-400 rounded-full blur-xl opacity-50 -left-2 -top-2 animate-pulse duration-3000"></div>
          
          {/* Bouton principal avec animation bounce de Tailwind */}
          <button className="relative w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center text-white animate-bounce duration-2000">
            <FaArrowDown className="text-xl" />
          </button>
        </a>
        
            
          </div>
        </section>
         {/* Choix de rôle */}

        <div
           className="relative w-full py-10"
            style={{
            backgroundColor: "white",
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1440 320' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23ffffff' fill-opacity='1' d='M0,64L60,74.7C120,85,240,107,360,122.7C480,139,600,149,720,160C840,171,960,181,1080,186.7C1200,192,1320,192,1380,192L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'/%3E%3C/svg%3E")`,
                 backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                   }}
             >
          <div className="container mx-auto flex justify-center gap-6">
         <div
      onClick={() => setRole("utilisateur")}
      className={`cursor-pointer px-6 py-4 border rounded-lg transition-all duration-300 ${
        role === "utilisateur"
          ? "bg-blue-500 text-white"
          : "bg-white text-blue-500"
          }`}
        >
             Utilisateur
        </div>
        <div
           onClick={() => setRole("pro")}
               className={`cursor-pointer px-6 py-4 border rounded-lg transition-all duration-300 ${
               role === "pro"
               ? "bg-blue-500 text-white"
               : "bg-white text-blue-500"
              }`}
             >
                 Takci Pro
               </div>
            </div>
              {/* FAQ */}
        {role && (
        <section id="faq" className="container mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6 capitalize">{role}</h2>
         <div className="space-y-4">
    {dataToShow.map((item, idx) => (
      <details
        key={idx}
        className="bg-white rounded-lg p-4 shadow-md border"
      >
        <summary className="cursor-pointer font-semibold text-blue-600">
          {item.question}
        </summary>
        <div className="mt-2 text-sm text-gray-700">{item.reponse}</div>
      </details>
    ))}
        </div>
     </section>
        )}

            </div>
        

      
       {/* Footer */}
           <Footerpage />
            <Scrolltop />
        </main>
    </div>
    
    
  );
}

export default Aide;
