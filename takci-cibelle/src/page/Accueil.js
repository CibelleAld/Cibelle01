// Accueil.js
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import AOS from "aos";
import { FaCheck } from "react-icons/fa";

import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/pagination";
import Headerpage from "./Headerpage";
import Footerpage from "./Footerpage";
import Scrolltop from "./Scrolltop";

export default function Accueil() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [active, setActive] = useState("accueil");

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Comment lancer une course sur Takci ?",
      answer:
        "Pour commander une course via l’application Takci, connectez-vous puis sélectionnez le type de course souhaité (moto, tricycle ou voiture). Indiquez ensuite votre adresse de départ ainsi que votre destination. Le système vous affiche automatiquement les tarifs applicables en fonction de la distance. Si vous disposez d’un solde suffisant dans votre portefeuille, un prélèvement peut être effectué. Une fois cette étape validée, Takci recherche automatiquement un conducteur disponible. Dès qu’un conducteur accepte la course et arrive à votre position, le trajet peut débuter en toute sécurité et sérénité.",
    },
    {
      question: "Comment Takci détermine-t-il le coût d’une course ?",
      answer:
        "Dès que votre course est validée, les informations relatives à la facturation s’affichent automatiquement sur le côté droit de votre écran. Le tarif varie selon le type de véhicule : pour les trajets en moto, tricycle ou en voiture, la facturation se base sur la distance parcourue et le temps estimé pour atteindre votre destination. Takci vous garantit une tarification claire et transparente pour chacun de vos déplacements.",
    },
    {
      question:
        "Est-ce que je peux créditer mon portefeuille pendant que la course est en cours ?",
      answer:
        "Oui, il est tout à fait possible d’accéder à votre portefeuille et de le recharger pendant votre trajet.",
    },
    {
      question: "Est-il possible de réserver une course pour quelqu’un d’autre ?",
      answer:
        'Oui, vous avez la possibilité de commander une course pour une autre personne. Dans l’application, au moment de la commande, vous trouverez deux options : "Pour moi" et "Autre". Il vous suffit de sélectionner l’option "Autre" pour débuter la procédure et renseigner les informations nécessaires à la réservation du trajet pour d\'autres personnes.',
    },
    {
      question: "Puis-je faire un retrait de mon portefeuille ?",
      answer:
        "Non, l’argent sur votre portefeuille est utilisable exclusivement via l’application.",
    },
  ];

  const testimonials = [
    {
      img: "assets/img/testimonials/testimonials-1.jpg",
      name: "Saul Goodman",
      role: "Ceo & Founder",
      text:
        "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
    },
    {
      img: "assets/img/testimonials/testimonials-2.jpg",
      name: "Sara Wilsson",
      role: "Designer",
      text:
        "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
    },
    {
      img: "assets/img/testimonials/testimonials-3.jpg",
      name: "Jena Karlis",
      role: "Store Owner",
      text:
        "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
    },
    {
      img: "assets/img/testimonials/testimonials-4.jpg",
      name: "Matt Brandon",
      role: "Freelancer",
      text:
        "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
    },
    {
      img: "assets/img/testimonials/testimonials-5.jpg",
      name: "John Larson",
      role: "Entrepreneur",
      text:
        "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
    },
  ];

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Index - Bootslander Bootstrap Template</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />

        <link rel="icon" href="assets/img/favicon.png" />
        <link rel="apple-touch-icon" href="assets/img/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
        <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
        <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
        <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

        <link href="assets/css/main.css" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </Helmet>

      <Headerpage />

      <main className="font-sans text-gray-900 bg-gray-50 overflow-x-hidden max-w-full">
        {/* Hero Section */}
        <section className="relative min-h-screen overflow-hidden text-white max-w-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover max-w-full"
          >
            <source src="./assets/img/video_takci.mov" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-blue-600/30 z-0" />

          <div className="relative z-10 container mx-auto px-6 max-w-full">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
              <div className="lg:w-1/3 order-last lg:order-last" data-aos="zoom-out" data-aos-delay="100">
                <img
                  src="assets/img/hero_imgg.png"
                  alt="Hero TAKCI"
                  className="w-full animate-softBounce max-w-full"
                />
              </div>

              <div className="lg:w-2/3 flex flex-col justify-center" data-aos="fade-in">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Faites-vous transporter facilement avec <span className="text-yellow-400">TAKCI</span>
                </h1>
                <p className="text-lg mb-6">
                  Il suffit d'appuyer sur un bouton et un chauffeur sera là pour vous récupérer
                </p>
                <div>
                  <a
                    href="#detaills"
                    className="bg-yellow-400 text-gray-900 font-semibold px-8 py-3 rounded shadow hover:bg-yellow-500 transition"
                  >
                    Commencer
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Waves SVG */}
          <div className="absolute bottom-0 w-full h-40 overflow-hidden max-w-full">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full max-w-full">
              <path
                d="M-200,100 C-50,80 150,120 350,90 C550,60 750,110 950,80 C1150,50 1350,100 1400,90 L1400,120 L-200,120 Z"
                className="fill-white opacity-30"
              />
              <path
                d="M-200,108 C-50,95 150,125 350,105 C550,85 750,115 950,100 C1150,85 1350,110 1400,100 L1400,120 L-200,120 Z"
                className="fill-white opacity-60"
              />
              <path
                d="M-200,112 C-50,108 150,122 350,115 C550,108 750,120 950,115 C1150,110 1350,118 1400,115 L1400,120 L-200,120 Z"
                className="fill-white"
              />
            </svg>

            <style jsx>{`
              path { shape-rendering: geometricPrecision; }
              path:nth-child(1) { animation: waveFlow 16s cubic-bezier(0.4,0,0.2,1) -3s infinite; }
              path:nth-child(2) { animation: waveFlow 14s cubic-bezier(0.4,0,0.2,1) -1s infinite; }
              path:nth-child(3) { animation: waveFlow 12s cubic-bezier(0.4,0,0.2,1) infinite; }
              @keyframes waveFlow {
                0%,100% { transform: translateX(0) translateY(0); }
                25% { transform: translateX(-10%) translateY(-2px); }
                50% { transform: translateX(-10%) translateY(0); }
                75% { transform: translateX(-50%) translateY(2px); }
              }
            `}</style>
          </div>
        </section>
               
        {/* Stats Section */}
        <section className="bg-white py-16 text-center" id="stats">
          <div className="container mx-auto px-6">
            <h1 className="text-3xl font-bold mb-12">Comment ça marche ?</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              <div className="flex flex-col items-center" data-aos="fade-up">
                <i className="bi bi-hand-index-thumb text-yellow-400 text-5xl mb-4"></i>
                <h5 className="font-semibold mb-2">Sur l'application</h5>
                <p>Le passager saisit sa destination et examine les options disponibles</p>
              </div>
              <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="100">
                <i className="bi bi-person text-yellow-400 text-5xl mb-4"></i>
                <h5 className="font-semibold mb-2">Trouver un chauffeur</h5>
                <p>Un chauffeur à proximité accepte la course du passager.</p>
              </div>
              <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-car-front text-yellow-400 text-5xl mb-4"></i>
                <h5 className="font-semibold mb-2">Suivez votre chauffeur</h5>
                <p>Suivez en temps réel la position de votre chauffeur</p>
              </div>
              <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="300">
                <i className="bi bi-shield-lock text-yellow-400 text-5xl mb-4"></i>
                <h5 className="font-semibold mb-2">Arriver en toute sécurité</h5>
                <p>Le chauffeur conduit son passager à destination.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section className="py-16 container mx-auto px-6" id="detaills">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-7/12" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-2xl font-bold mb-4">Télécharger l'application mobile TAKCI.</h3>
              <p className="italic mb-8 text-gray-700">
                TAKCI est une nouvelle application pour commander un véhicule qui vous conduira, de
                façon sur, rapide et pas cher, à destination. Opérationnel uniquement au Bénin pour
                le moment, avec un déploiement futur vers toute l’Afrique de l’Ouest et Centrale,
                nous sommes engagés à offrir les meilleures solutions de transport et de livraison à
                nos utilisateurs
              </p>

              <div className="flex gap-8 max-w-md">
                <a href="#" aria-label="Google Play">
                  <img src="assets/img/play.png" alt="Google Play" className="h-14 object-contain" />
                </a>
                <a href="#" aria-label="App Store">
                  <img src="assets/img/apl.jpg" alt="App Store" className="h-14 object-contain" />
                </a>
              </div>
            </div>

            <div className="md:w-5/12 flex justify-center" data-aos="zoom-out" data-aos-delay="100">
              <img
                src="assets/img/new_rectt.png"
                alt="Télécharger l'application"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Qui sommes-nous */}
        <section id="details" className="py-16 bg-white">
          <div className="container mx-auto px-4 mb-8 text-center">
            <div>
              <span className="block text-yellow-500 text-xl font-semibold uppercase">
                Qui sommes-nous ?
              </span>
              <span className="description-title"></span>
            </div>
          </div>

          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-5/12 flex justify-center" data-aos="zoom-out" data-aos-delay="100">
              <img
                src="assets/img/mydetail4.png"
                alt="Qui sommes-nous"
                className="w-full max-w-md object-contain rounded-lg shadow-lg"
              />
            </div>

            <div className="md:w-7/12" data-aos="fade-up" data-aos-delay="100">
              <p className="italic text-gray-700 leading-relaxed text-justify">
                Takci est un service de mobilité et de livraison de la société de technologie
                Marktech qui fournit des services numériques dans plusieurs pays d’Afrique. C'est
                une plateforme technologique qui permet de connecter utilisateurs et chauffeurs via
                une application pratique, en favorisant des changements positifs avec des services
                proposés à des tarifs raisonnables. À ce titre, nous restons un service
                d’information et non un service de transport ou de taxi ; les services de transport
                sont fournis par des tiers. Nous sommes passionnés par la résolution de problèmes.
                Nous relevons des défis que d'autres jugent impossibles. Nous voyons grand et
                optimisons ce qu'il y a de mieux pour l'ensemble de l'entreprise, pas seulement pour
                une équipe. Chaque fois que nous constatons des problèmes en dehors de notre cœur de
                métier, nous en parlons et nous trouvons des solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section id="details" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800 uppercase">Repérez</h2>
            <div>
              <span className="text-yellow-500 text-xl font-semibold">Notre </span>
              <span className="description-title text-xl font-semibold">Vision</span>
            </div>
          </div>

          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-5/12 flex justify-center" data-aos="zoom-out" data-aos-delay="100">
              <img
                src="assets/img/detai.png"
                alt="Notre Vision"
                className="w-full max-w-md object-contain rounded-lg shadow-lg"
              />
            </div>

            <div className="md:w-7/12" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Redéfinir l'Expérience du Voyage et Expansion Géographique.
              </h3>
              <p className="italic text-gray-700 leading-relaxed mb-4 text-justify">
                Notre vision consiste à redéfinir l’expérience du voyage en mettant l’accent sur la
                satisfaction du client, la durabilité de l’environnement et la perturbation positive
                de l’industrie du transport. Notre zone de couverture est actuellement disponible
                uniquement au Bénin. Notre principale vocation est de contribuer à créer des villes
                intelligentes et durables, au sein desquelles la mobilité et le transport se basent
                sur des modes de déplacements actifs et partagés. Nous ambitionnons très rapidement
                nous étendre à d’autres zones telles que :
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <i className="bi bi-check text-yellow-500 text-lg mr-2"></i>
                  <span className="text-gray-800"><FaCheck className=" inline-block text-yellow-500 "/>Le Togo</span>
                </li>
                <li className="flex items-center">
                  <i className="bi bi-check text-yellow-500 text-lg mr-2"></i>
                  <span className="text-gray-800"> <FaCheck className=" inline-block text-yellow-500 "/>Le Sénégal</span>
                </li>
                <li className="flex items-center">
                  <i className="bi bi-check text-yellow-500 text-lg mr-2"></i>
                  <span className="text-gray-800"><FaCheck className=" inline-block text-yellow-500 "/>La Côte d'Ivoire</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="relative py-20 bg-gray-900 text-white overflow-hidden">
          <img
            src="assets/img/conduire.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
          />
          <div className="absolute inset-0 bg-black/30" />

          <div className="relative container mx-auto px-6" data-aos="fade-up" data-aos-delay="100">
            <Swiper
              modules={[Pagination, Autoplay]}
              loop
              speed={600}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              slidesPerView={1}
              pagination={{ clickable: true }}
              className="!pb-10"
            >
              {testimonials.map((t, i) => (
                <SwiperSlide key={i}>
                  <div className="max-w-3xl mx-auto text-center">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white/30 shadow-lg"
                    />
                    <h3 className="mt-6 text-xl font-semibold">{t.name}</h3>
                    <h4 className="text-sm text-white/70">{t.role}</h4>

                    <div className="my-3 text-yellow-400 text-lg" aria-hidden="true">
                      {"★★★★★"}
                    </div>

                    <p className="relative mt-4 text-white/90 leading-relaxed px-4">
                      <span className="align-super text-2xl mr-1">“</span>
                      {t.text}
                      <span className="align-sub text-2xl ml-1">”</span>
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-white py-16 container mx-auto px-6" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-12 text-center"></h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-gray-300 rounded-lg p-6 cursor-pointer"
                onClick={() => toggleFaq(i)}
                aria-expanded={ `openFaqIndex === i `}
                aria-controls={ `faq-content-${i} `}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") toggleFaq(i);
                }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{faq.question}</h3>
                  <svg
                    className={`w-6 h-6 text-yellow-400 transform transition-transform duration-300 ${
                      openFaqIndex === i ? "rotate-90" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
                {openFaqIndex === i && (
                  <div id={ `faq-content-${i} `} className="mt-4 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
            
          </div>
        </section>

        {/* Ici tu peux coller toutes les autres sections de ton code original exactement comme elles sont */}
        {/* Assure-toi que tous les containers ont max-w-full et overflow-x-hidden pour éviter le débordement */}

        <Footerpage />
        <Scrolltop />
      </main>
    </>
  );
}
