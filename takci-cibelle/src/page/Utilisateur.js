import React, { useState, useEffect } from "react";

import {FaPhone ,FaArrowDown} from "react-icons/fa";
import Headerpage from "./Headerpage";
import Footerpage from "./Footerpage";
import Scrolltop from "./Scrolltop";
import { FaCheck} from "react-icons/fa";
import VagueAnimee from "./Vagueanimmee";


 function Utilisateur() {
  const [activeCourseStep, setActiveCourseStep] = useState(1);
  const [activeDeliveryStep, setActiveDeliveryStep] = useState(1);
   const [active, setActive] = useState("utilisateur");

 const courseSteps = [
  { 
    id: 1,
    wizardTitle: "Le client ouvre l'application", // pour le wizard
    title: "Inscription", // pour le contenu détaillé
    content: (
      <div>
        <ul className="list-disc ml-5">
          <p><FaCheck className=" inline-block text-yellow-500 "/>Remplissez les informations demandées</p>
          <p><FaCheck className=" inline-block text-yellow-500 "/>Vérifiez votre numéro de téléphone</p>
        </ul>
        <p className="list-disc ml-5"><FaCheck className=" inline-block text-yellow-500 "/>Connectez-vous ensuite pour accéder à Takci.</p>
      </div>
    )
  },
  { 
    id: 2, 
    wizardTitle: "Le client est mis en relation avec un chauffeur",
    title: "Type de course",
    content: (
      <ul className="list-disc ml-5">
        <p><FaCheck className=" inline-block text-yellow-500 "/>Zémidjan</p>
        <p><FaCheck className=" inline-block text-yellow-500 "/>Tricycle</p>
        <p><FaCheck className=" inline-block text-yellow-500 "/>Voiture</p>
      </ul>
    )
  },
  { 
    id: 3, 
    wizardTitle: "Le chauffeur prend en charge le client",
    title: "Destination",
    content: <p><FaCheck className=" inline-block text-yellow-500 "/>Choisissez votre lieu de destination.</p>
  },
  { 
    id: 4, 
    wizardTitle: "Le chauffeur conduit son client à destination",
    title: "Paiement",
    content: <p><FaCheck className=" inline-block text-yellow-500 "/>Sélectionnez votre mode de paiement.</p>
  },
  { 
    id: 5, 
    wizardTitle: "Le chauffeur et le client s'attribuent mutuellement une note et un commentaire (facultatif)",
    title: "Notation",
    content: <p><FaCheck className=" inline-block text-yellow-500 "/>Le chauffeur et le client s'attribuent mutuellement une note et un commentaire (facultatif).</p>
  },
];
const deliverySteps = [
  { 
    id: 1,
    wizardTitle: "Le client ouvre l'application", // pour le wizard
    title: "Connexion", // pour le contenu détaillé
    content: (
      <div>
        <ul className="list-disc ml-5">
          <p><FaCheck className=" inline-block text-yellow-500 "/>Remplissez les informations demandées</p>
          <p><FaCheck className=" inline-block text-yellow-500 "/>Vérifiez votre numéro de téléphone</p>
        </ul>
        <p className="list-disc ml-5"><FaCheck className=" inline-block text-yellow-500 "/>Connectez-vous ensuite pour accéder à Takci.</p>
      </div>
    )
  },
  { 
    id: 2, 
    wizardTitle: "Le client est mis en relation avec un chauffeur",
    title: "Type de livraison",
    content: (
      <ul className="list-disc ml-5">
        <p><FaCheck className=" inline-block text-yellow-500 "/>Zémidjan</p>
        <p><FaCheck className=" inline-block text-yellow-500 "/>Tricycle</p>
        <p><FaCheck className=" inline-block text-yellow-500 "/>Voiture</p>
      </ul>
    )
  },
  { 
    id: 3, 
    wizardTitle: "Le livreur récupère le colis",
    title: "Récupération colis",
    content: <p><FaCheck className=" inline-block text-yellow-500 "/>Le livreur récupère le colis.</p>
  },
  { 
    id: 4, 
    wizardTitle: "Le livreur conduit le colis à destination",
    title: "Conduite",
    content: <p><FaCheck className=" inline-block text-yellow-500 "/>Le livreur conduit le colis à destination.</p>
  },
  { 
    id: 5, 
    wizardTitle: "Livraison finale",
    title: "Livraison",
    content: <p><FaCheck className=" inline-block text-yellow-500 "/>La livraison à destination.</p>
  },
  { 
    id: 6, 
    wizardTitle: "Notation mutuelle",
    title: "Notation",
    content: <p><FaCheck className=" inline-block text-yellow-500 "/>Le livreur et le client s'attribuent mutuellement une note et un commentaire (facultatif).</p>
  },
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

  <VagueAnimee />
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
<section className="py-12 bg-white" id="details">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-10">
      Comment effectuer une course sur <span className="text-blue-700">Takci</span> ?
    </h2>

  {/* Wizard horizontal */}
<div className="flex justify-between items-start relative mb-12">
  {/* Étapes */}
  {courseSteps.map((step) => (
    <div
      key={step.id}
      className="flex flex-col items-center w-1/5 cursor-pointer"
      onClick={() => setActiveCourseStep(step.id)}
    >
      {/* Cercle numéroté */}
      <div
        className={`w-12 h-12 flex items-center justify-center rounded-full text-white text-lg font-semibold transition-all duration-300 ${
          activeCourseStep === step.id
            ? "bg-blue-600 shadow-lg scale-110"
            : "bg-gray-400"
        }`}
      >
        {step.id}
      </div>
      {/* Titre du wizard */}
      <p
        className={`mt-3 text-center text-sm ${
          activeCourseStep === step.id
            ? "text-blue-700 font-semibold"
            : "text-gray-500"
        }`}
      >
        {step.wizardTitle} {/* <-- ici on utilise wizardTitle au lieu de title */}
      </p>
    </div>
  ))}
</div>


    {/* Contenu de l’étape active */}
    <div className="bg-gray-50 p-6 rounded-lg shadow flex flex-col md:flex-row items-start gap-8">
      {/* Bloc texte */}
      <div className="md:w-1/2">
        <div className="p-6 rounded-lg shadow bg-white">
          <h3 className="text-xl font-semibold">
            {courseSteps.find((s) => s.id === activeCourseStep).title}
          </h3>
          <div className="mt-3 text-gray-700 leading-relaxed">
            {courseSteps.find((s) => s.id === activeCourseStep).content}
          </div>
        </div>
      </div>

      {/* Bloc image */}
      <div className="md:w-1/2 p-6 rounded-lg shadow bg-white sticky top-8">
        <div className="">
          
          <img
            src="/assets/img/im1.png"
            alt="Interface Takci"
            className="w-full h-auto rounded border border-gray-200 object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</section>

{/* ETAPES LIVRAISON */}
<section className="py-12 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-10">
      Comment effectuer une livraison sur <span className="text-blue-700">Takci</span> ?
    </h2>

    {/* Wizard horizontal */}
    <div className="flex justify-between items-start relative mb-12">
      {/* Étapes */}
      {deliverySteps.map((step) => (
        <div
          key={step.id}
          className="flex flex-col items-center w-1/6 cursor-pointer"
          onClick={() => setActiveDeliveryStep(step.id)}
        >
          {/* Cercle numéroté */}
          <div
            className={`w-12 h-12 flex items-center justify-center rounded-full text-white text-lg font-semibold transition-all duration-300 ${
              activeDeliveryStep === step.id
                ? "bg-blue-600 shadow-lg scale-110"
                : "bg-gray-400"
            }`}
          >
             {step.id}
      </div>
      {/* Titre du wizard */}
      <p
        className={`mt-3 text-center text-sm ${
          activeCourseStep === step.id
            ? "text-blue-700 font-semibold"
            : "text-gray-500"
        }`}
      >
        {step.wizardTitle} {/* <-- ici on utilise wizardTitle au lieu de title */}
      </p>
    </div>
  ))}
</div>
    {/* Contenu de l’étape active */}
    <div className="bg-white p-6 rounded-lg shadow flex flex-col md:flex-row items-start gap-8">
      {/* Bloc texte */}
      <div className="md:w-1/2 bg-white p-6 rounded-lg shadow">
        <div className="">
          <h3 className="text-xl font-semibold">
            {deliverySteps.find((s) => s.id === activeDeliveryStep).title}
          </h3>
          <div className="mt-3 text-gray-700 leading-relaxed">
            {deliverySteps.find((s) => s.id === activeDeliveryStep).content}
            
          </div>
             
        </div>
      </div>
               {/* Bloc image */}
      <div className="md:w-1/2 bg-white p-6 rounded-lg shadow sticky top-8">
    
         
          <img
            src="/assets/img/im1.png"
            alt="Interface Takci"
            className="w-full h-auto rounded border border-gray-200 object-cover"
          />
      
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
