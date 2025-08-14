import React, { useState, useEffect } from "react";

import {FaPhone ,FaArrowDown} from "react-icons/fa";
import Headerpage from "./Headerpage";
import Footerpage from "./Footerpage";


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
     <div className="min-h-screen flex flex-col ">
      {/* Header */}
      <Headerpage />

      {/* HERO */}
     <section className="relative h-[60vh] flex items-center justify-center text-center ">
  {/* Image en arrière-plan */}
  
  <img
    src="/assets/img/user_takci.jpg" alt="Utilisateur Takci"
    className="absolute inset-0 w-full h-full object-cover"
  />
  

  <div className="relative z-10">
    <h1 className="text-4xl md:text-5xl font-bold text-white underline decoration-yellow-500 ">Utilisateur</h1>
     
    <a href="#details" className="mt-10 inline-block">
      <div className="absolute w-20 h-20 bg-yellow-400 rounded-full blur-xl opacity-50"></div>
       <button className="relative w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center text-white">
           <FaArrowDown className="text-xl" />
  </button>   

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
      <section className="bg-blue-50 py-8 px-6 mt-12 ">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-2xl font-bold text-blue-900 mb-4">
      Pourquoi choisir Takci pour vos déplacements ?
    </h2>
    <p className="text-gray-600 leading-relaxed text-justify">
      Les déplacements deviennent une expérience sans tracas avec Takci, votre compagnon de voyage idéal. Nous comprenons que chaque déplacement est unique, c'est pourquoi nous mettons à votre disposition un service de taxi exceptionnel pour répondre à vos besoins professionnels et personnels. En choisissant Takci pour vos déplacements, vous bénéficiez d'une expérience de voyage exceptionnelle. Premièrement, votre confidentialité et votre sécurité sont notre priorité absolue. Les données que vous partagez avec nous sont traitées de manière confidentielle, garantissant ainsi la protection de vos informations personnelles. De plus, nos chauffeurs, tous des professionnels qualifiés, vous assurent un voyage sûr et confortable. Takci met l'accent sur la qualité du service, faisant de chaque déplacement une expérience digne de confiance. En outre, avec la possibilité de partager votre position en temps réel, Takci offre un niveau supplémentaire de sécurité. Cette fonctionnalité rassurante permet à vos proches de suivre votre trajet, renforçant ainsi la tranquillité d'esprit pendant le voyage. Enfin, notre assistance 24/7 garantit une présence continue tout au long de votre parcours. Que ce soit pour des questions, des conseils ou un support technique, l'équipe Takci est toujours là pour vous, assurant un accompagnement constant lors de vos déplacements. Optez pour Takci et transformez vos voyages en une expérience sans soucis.
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
              <div className="flex-1">
          <div className="flex flex-col md:flex-row gap-8">
  {/* Conteneur de l'image - sur le côté à partir de md (768px) */}
  <div className="md:w-1/2">
    <div className="bg-white p-6 rounded-lg shadow-ml sticky top-8">
      <h2 className="text-xl font-bold mb-4">Interface originale</h2>
      <img 
        src="/assets/img/im1.png"
        alt="Capture d'écran de l'interface TAKCI"
        className="w-full h-auto border border-gray-200 rounded object-cover"
      />
    </div>
  </div>

  {/* Conteneur du contenu - sur le côté à partir de md */}
  <div className="md:w-1/2">
    {/* Votre contenu texte/formulaire ici */}
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Inscription</h1>
      {/* ... reste de votre contenu ... */}
    </div>
  </div>
</div>
        </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer intégré après la recherche */}
       <Footerpage/>
    </div>
    
  );
}
export default Utilisateur;
