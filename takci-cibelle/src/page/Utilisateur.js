import React, { useState, useEffect } from "react";

import {FaPhone ,FaArrowDown} from "react-icons/fa";
import Headerpage from "./Headerpage";
import Footerpage from "./Footerpage";
import Scrolltop from "./Scrolltop";


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
    className="absolute inset-0 w-full h-full object-cover" />
           {/* Overlay */}
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

  <div className="absolute bottom-0 w-full h-40 overflow-hidden">
  <svg
    viewBox="0 0 1200 120" 
    preserveAspectRatio="none"
    className="w-full h-full"
  >
    {/* Vague supérieure - ondulation douce */}
    <path
      d="M-200,100 
         C-50,80 150,120 350,90 
         C550,60 750,110 950,80 
         C1150,50 1350,100 1400,90 
         L1400,120 
         L-200,120 Z"
      className="fill-white opacity-30"
    />
    
    {/* Vague intermédiaire - ondulation moyenne */}
    <path
      d="M-200,108 
         C-50,95 150,125 350,105 
         C550,85 750,115 950,100 
         C1150,85 1350,110 1400,100 
         L1400,120 
         L-200,120 Z"
      className="fill-white opacity-60"
    />
    
    {/* Vague principale - ondulation marquée */}
    <path
      d="M-200,112 
         C-50,108 150,122 350,115 
         C550,108 750,120 950,115 
         C1150,110 1350,118 1400,115 
         L1400,120 
         L-200,120 Z"
      className="fill-white"
    />
  </svg>

  <style jsx>{`
    path {
      shape-rendering: geometricPrecision;
    }
    path:nth-child(1) {
      animation: waveFlow 16s cubic-bezier(0.4,0,0.2,1) -3s infinite;
    }
    path:nth-child(2) {
      animation: waveFlow 14s cubic-bezier(0.4,0,0.2,1) -1s infinite;
    }
    path:nth-child(3) {
      animation: waveFlow 12s cubic-bezier(0.4,0,0.2,1) infinite;
    }
    @keyframes waveFlow {
      0%, 100% { 
        transform: translateX(0) translateY(0);
      }
      25% { 
        transform: translateX(-2%) translateY(-2px);
      }
      50% { 
        transform: translateX(-4%) translateY(0);
      }
      75% { 
        transform: translateX(-2%) translateY(2px);
      }
    }
  `}</style>
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
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-8">
      Comment effectuer une course sur Takci ?
    </h2>

    {/* Boutons pour étapes */}
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

    {/* Conteneur unique pour texte + image */}
    <div className="bg-gray-50 p-6 rounded-lg shadow flex flex-col md:flex-row items-start gap-8">
      {/* Bloc texte */}
      <div className="md:w-1/2">
        <div className="p-6 rounded-lg shadow bg-white">
          <h3 className="text-xl font-semibold">
            {courseSteps.find((s) => s.id === activeCourseStep).title}
          </h3>
          <div className="mt-2 text-gray-700">
            {courseSteps.find((s) => s.id === activeCourseStep).content}
          </div>
        </div>
      </div>

      {/* Bloc image */}
      <div className="md:w-1/2">
        <div className="p-6 rounded-lg shadow bg-white sticky top-8">
          <h2 className="text-xl font-bold mb-4">Interface originale</h2>
          <img
            src="/assets/img/im1.png"
            alt="Capture d'écran de l'interface TAKCI"
            className="w-full h-auto border border-gray-200 rounded object-cover"
          />
        </div>
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
        <div className="bg-white p-6 rounded-lg shadow flex flex-col md:flex-row items-start gap-8">
  {/* Bloc texte */}
  <div className="md:w-1/2">
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-xl font-semibold">
        {deliverySteps.find(s => s.id === activeDeliveryStep).title}
      </h3>
      <p className="mt-2 text-gray-700">
        {deliverySteps.find(s => s.id === activeDeliveryStep).content}
      </p>
    </div>
  </div>

  {/* Bloc image */}
  <div className="md:w-1/2">
    <div className="bg-white p-6 rounded-lg shadow sticky top-8">
      <h2 className="text-xl font-bold mb-4">Interface originale</h2>
      <img
        src="/assets/img/im1.png"
        alt="Capture d'écran de l'interface TAKCI"
        className="w-full h-auto border border-gray-200 rounded object-cover"
      />
    </div>
  </div>
</div>


        </div>
            
          
        </div>
      </section>

      {/* Footer intégré après la recherche */}
       <Footerpage/>
       <Scrolltop />
    </div>
    
  );
}
export default Utilisateur;
