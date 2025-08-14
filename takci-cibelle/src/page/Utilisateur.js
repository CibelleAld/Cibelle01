import React, { useState, useEffect } from "react";
import logo from "../assets/logo2_3.png";
import {FaPhone} from "react-icons/fa";
import imaget from "../assets/user_takci.jpg"


 function Utilisateur() {
  const [activeCourseStep, setActiveCourseStep] = useState(1);
  const [activeDeliveryStep, setActiveDeliveryStep] = useState(1);
   const [active, setActive] = useState("utilisateur");

  const courseSteps = [
    { id: 1, title: "Inscription", content: (
        <div>
          <ul className="list-disc ml-5">
            <li>Remplissez les informations demandées</li>
            <li>Vérifiez votre numéro de téléphone</li>
          </ul>
          <p>Connectez-vous ensuite pour accéder à Takci.</p>
        </div>
      )
    },
    { id: 2, title: "Type de course", content: (
        <ul className="list-disc ml-5">
          <li>Zémidjan</li>
          <li>Tricycle</li>
          <li>Voiture</li>
        </ul>
      )
    },
    { id: 3, title: "Destination", content: <p>Choisissez votre lieu de destination.</p> },
    { id: 4, title: "Paiement", content: <p>Sélectionnez votre mode de paiement.</p> },
    { id: 5, title: "Notation", content: <p>Le chauffeur et le client s'attribuent mutuellement une note et un commentaire (facultatif).</p> },
  ];

  const deliverySteps = [
    { id: 1, title: "Inscription", content: (
        <div>
          <ul className="list-disc ml-5">
            <li>Remplissez les informations demandées</li>
            <li>Vérifiez votre numéro de téléphone</li>
          </ul>
          <p>Connectez-vous ensuite pour accéder à Takci.</p>
        </div>
      )
    },
    { id: 2, title: "Type de livraison", content: (
        <ul className="list-disc ml-5">
          <li>Zémidjan</li>
          <li>Tricycle</li>
          <li>Voiture</li>
        </ul>
      )
    },
    { id: 3, title: "Récupération colis", content: <p>Le livreur récupère le colis.</p> },
    { id: 4, title: "Conduite", content: <p>Le livreur conduit le colis à destination.</p> },
    { id: 5, title: "Livraison finale", content: <p>La livraison à destination.</p> },
    { id: 6, title: "Notation", content: <p>Le livreur et le client s'attribuent mutuellement une note et un commentaire (facultatif).</p> },
  ];

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

      {/* HERO */}
     <section className="relative h-[60vh] flex items-center justify-center text-center mt-16">
  {/* Image en arrière-plan */}
  <img
    src={imaget}
    alt="Takci"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="relative z-10">
    <h1 className="text-4xl md:text-5xl font-bold text-white">Utilisateur</h1>
    <a href="#details" className="mt-10 inline-block">
      <div className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center animate-bounce">
        ⬇
      </div>
    </a>
  </div>

  <div className="absolute bottom-0 w-full overflow-hidden leading-[0]">
    <svg
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
      className="relative block w-full h-12"
    >
      <defs>
        <path
          id="wave-path"
          d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>
      <g className="fill-white opacity-70">
        <use href="#wave-path" x="50" y="3"></use>
        <use href="#wave-path" x="50" y="0"></use>
        <use href="#wave-path" x="50" y="9"></use>
      </g>
    </svg>
  </div>
</section>
      {/* POURQUOI CHOISIR */}
      <section id="details" className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-4">
            Pourquoi choisir Takci pour vos déplacements ?
          </h3>
          <p className="leading-relaxed">
            Les déplacements deviennent une expérience sans tracas avec Takci, votre compagnon de voyage idéal...
          </p>
        </div>
      </section>

      {/* ETAPES COURSE */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Comment effectuer une course sur Takci ?
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {courseSteps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveCourseStep(step.id)}
                className={`w-12 h-12 rounded-full text-white font-bold ${
                  activeCourseStep === step.id ? "bg-yellow-500" : "bg-gray-400"
                }`}
              >
                {step.id}
              </button>
            ))}
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">{courseSteps.find(s => s.id === activeCourseStep).title}</h3>
            <div className="mt-2 text-gray-700">
              {courseSteps.find(s => s.id === activeCourseStep).content}
            </div>
          </div>
        </div>
      </section>

      {/* ETAPES LIVRAISON */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Comment effectuer une livraison sur Takci ?
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {deliverySteps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveDeliveryStep(step.id)}
                className={`w-12 h-12 rounded-full text-white font-bold ${
                  activeDeliveryStep === step.id ? "bg-yellow-500" : "bg-gray-400"
                }`}
              >
                {step.id}
              </button>
            ))}
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">{deliverySteps.find(s => s.id === activeDeliveryStep).title}</h3>
            <div className="mt-2 text-gray-700">
              {deliverySteps.find(s => s.id === activeDeliveryStep).content}
            </div>
          </div>
        </div>
      </section>

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
export default Utilisateur;
