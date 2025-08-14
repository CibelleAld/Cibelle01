import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo2_3.png";
import { FaPhone } from "react-icons/fa";
import Image from "../assets/user_aide.jpg";

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
      <header className="bg-blue-800 text-white px-8 py-4 flex items-center justify-between">
        <div className="container mx-auto flex items-center justify-between p-4">
          <Link to="/" className="flex items-center justify-between">
            <img src={logo} alt="Takci" className="h-10 mr-12" />
          </Link>
          <nav>
            <ul className="flex gap-4 items-center">
              <li>
                <Link
                  to="/"
                  onClick={() => setActive("accueil")}
                  className={`px-2 py-1 ${active === "accueil" ? "border-b-4 border-yellow-400" : ""} hover:text-yellow-400`}
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/driver"
                  onClick={() => setActive("takciPro")}
                  className={`px-2 py-1 ${active === "takciPro" ? "border-b-4 border-yellow-400" : ""} hover:text-yellow-400`}
                >
                  Takci Pro
                </Link>
              </li>
              <li>
                <Link
                  to="/utilisateur"
                  onClick={() => setActive("utilisateur")}
                  className={`px-2 py-1 ${active === "utilisateur" ? "border-b-4 border-yellow-400" : ""} hover:text-yellow-400`}
                >
                  Utilisateur
                </Link>
              </li>
              <li>
                <Link
                  to="/evenement"
                  onClick={() => setActive("evenement")}
                  className={`px-2 py-1 ${active === "evenement" ? "border-b-4 border-yellow-400" : ""} hover:text-yellow-400`}
                >
                  Évènement
                </Link>
              </li>
              <li>
                <Link
                  to="/aide"
                  onClick={() => setActive("aide")}
                  className={`px-2 py-1 ${active === "aide" ? "border-b-4 border-yellow-400" : ""} hover:text-yellow-400`}
                >
                  Aide
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => setActive("contact")}
                  className={`px-2 py-1 ${active === "contact" ? "border-b-4 border-yellow-400" : ""} hover:text-yellow-400`}
                >
                  Contacts
                </Link>
              </li>
              <li className="flex items-center gap-1 ml-4">
                <FaPhone size={20} />
                <span>01 55 55 65 65</span>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="bg-gray-900 text-white min-h-screen flex flex-col">
      <section
        className="relative flex flex-col items-center justify-center min-h-[60vh] text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${Image})` }}
      >
        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Texte au-dessus */}
        <h1 className="text-3xl font-bold z-10 mt-10">
          Comment pouvons-nous vous aider ?
        </h1>
        <div className="mt-10 z-10">
          <a href="#faq" className="inline-block rounded-full bg-white p-3">
            <span className="text-black text-2xl">↓</span>
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
        </main>
    </div>
    
    
  );
}

export default Aide;
