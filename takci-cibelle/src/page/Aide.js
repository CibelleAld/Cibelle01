import { useState } from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaArrowDown } from "react-icons/fa";
import Headerpage from "./Headerpage";
import Footerpage from "./Footerpage";
import Scrolltop from "./Scrolltop";
import VagueAnimee from "./Vagueanimmee";

function Aide() {
  const [role, setRole] = useState(null);

  const faqUtilisateur = [
    {
      question: "C'est quoi Takci ?",
      reponse: (
        <>
          <p><strong>Takci</strong> est une application mobile innovante qui réunit, en une seule plateforme, des services essentiels tels que la mobilité, la livraison, la billetterie et les services financiers, répondant ainsi aux besoins quotidiens des utilisateurs à travers l’Afrique.</p>
          <p>Présente actuellement au Bénin, Takci ambitionne de s’étendre progressivement à d’autres pays du continent.</p>
          <ul className="list-disc pl-5">
            <li><strong>Transport :</strong> déplacements en moto, tricycle ou voiture, ainsi que des services de livraison.</li>
            <li><strong>Billetterie :</strong> achat et revente de tickets pour divers événements.</li>
          </ul>
          <p><strong>Quels sont les emplacements des bureaux de Takci ?</strong></p>
          <p>Le bureau actuel de Takci est situé à Cotonou, dans une ruelle à gauche juste avant la Poste de Wologuèdè...</p>
        </>
      ),
    },
    {
      question: "Comment lancer une course sur Takci ?",
      reponse: <p>Pour commander une course via l’application Takci, ouvrez l’app, sélectionnez votre destination, choisissez votre type de véhicule et validez.</p>,
    },
    {
      question: "Comment faire si le conducteur tarde à venir me chercher ?",
      reponse: (
        <ul className="list-disc pl-5">
          <li>Suivez l’arrivée de votre TakciPro en direct grâce à la carte.</li>
          <li>Contactez le conducteur via téléphone ou messagerie.</li>
          <li>Patientez ou annulez la course si nécessaire.</li>
          <li>Signalez toute récurrence au support.</li>
        </ul>
      ),
    },
    {
      question: "Comment Takci détermine-t-il le coût d’une course ?",
      reponse: <p>Le tarif varie selon le type de véhicule et la distance. Takci garantit une tarification claire et transparente.</p>,
    },
    {
      question: "Est-ce que je peux créditer mon portefeuille pendant que la course est en cours ?",
      reponse: <p>Oui, il est possible de recharger votre portefeuille pendant votre trajet.</p>,
    },
    {
      question: "Est-il possible de réserver une course pour quelqu’un d’autre ?",
      reponse: <p>Sélectionnez l’option "Autre" lors de la commande pour réserver une course pour quelqu’un d’autre.</p>,
    },
    {
      question: "Puis-je faire un retrait de mon portefeuille ?",
      reponse: <p>Non, l’argent sur votre portefeuille est utilisable exclusivement via l’application.</p>,
    },
    {
      question: "Comment et où je télécharge l’application pour m’inscrire ?",
      reponse: <p>Téléchargez l’application depuis le Play Store ou l’App Store et suivez les instructions d’inscription.</p>,
    },
    {
      question: "Que faire si le chauffeur que j’ai demandé n’a pas le casque pour le passager ?",
      reponse: <p>Après le choix de l'option, suivez les instructions à l’écran.</p>,
    },
    {
      question: "Comment faire si il y a un accident ?",
      reponse: (
        <ul className="list-disc pl-5">
          <li>Contactez immédiatement les services d'urgence.</li>
          <li>Avertissez la police.</li>
          <li>Prévenez le support client Takci.</li>
        </ul>
      ),
    },
    {
      question: "Comment ajouter un code de parrainage sur Takci ?",
      reponse: <p>Renseignez le champ code de parrainage lors de l’enregistrement si vous en avez un.</p>,
    },
    {
      question: "Je conteste le tarif de ma course, que faire ?",
      reponse: <p>Contactez notre support client et patientez quelques instants.</p>,
    },
    {
      question: "Que faire si je rencontre des difficultés pour me connecter à l'application ?",
      reponse: (
        <ul className="list-disc pl-5">
          <p>Vérifiez votre connexion Internet.</p>
          <p>Redémarrez votre téléphone.</p>
          <p>Vérifiez que l’application est à jour.</p>
        </ul>
      ),
    },
    {
      question: "Que dois-je faire pour réinitialiser mon mot de passe ?",
      reponse: <p>Cliquez sur "Mot de passe oublié" sur la page de connexion et suivez les étapes.</p>,
    },
    {
      question: "Comment faire si j'oublie un objet après ma course ?",
      reponse: <p>Contactez le conducteur ou le Service Client via l’application pour récupérer l’objet.</p>,
    },
    {
      question: "Puis-je modifier l’itinéraire en cours de route ?",
      reponse: <p>Oui, vous pouvez modifier la destination ou ajouter des arrêts via l’application.</p>,
    },
    {
      question: "Comment garantissez-vous la sécurité ?",
      reponse: <p>Chaque conducteur suit une formation rigoureuse et les véhicules sont inspectés régulièrement...</p>,
    },
  ];

  const faqPro = [
    {
      question: "C'est quoi Takci ?",
      reponse: <p>Takci est une application mobile qui connecte conducteurs et passagers pour un service de transport sûr et rapide.</p>,
    },
    {
      question: "Comment accepter une course sur TakciPro ?",
      reponse: <p>Sur TakciPro, lorsque vous recevez une notification de course, appuyez sur “Accepter” pour démarrer le trajet vers le client.</p>,
    },
  ];

  const dataToShow = role === "utilisateur" ? faqUtilisateur : role === "pro" ? faqPro : [];

  // Icône question personnalisée : contour orange, centre transparent
  const QuestionIcon = () => (
    <svg
      className="w-5 h-5 flex-shrink-0"
      viewBox="0 0 512 512"
      fill="none"
      stroke="#f97316"
      strokeWidth="32"
    >
      <circle cx="256" cy="256" r="200" /> {/* contour du cercle */}
      <text
        x="50%"
        y="55%"
        textAnchor="middle"
        fontSize="180"
        fill="#f97316"
        fontFamily="Arial, sans-serif"
      >?</text>
    </svg>
  );

  return (
    <div className="min-h-screen flex flex-col bg-blue-800">
      <Headerpage />

      <main className="bg-gray-900 text-white min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center text-center">
          <img src="/assets/img/user_aide.jpg" alt="Utilisateur Takci" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-blue-600/30 z-0" />
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white underline decoration-yellow-500">Comment pouvons-nous vous aidez</h1>
            <a href="#details" className="mt-10 inline-block relative">
              <div className="absolute w-20 h-20 bg-yellow-400 rounded-full blur-xl opacity-50 -left-2 -top-2 animate-pulse duration-3000"></div>
              <button className="relative w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center text-white animate-bounce duration-2000">
                <FaArrowDown className="text-xl" />
              </button>
            </a>
          </div>
          <VagueAnimee />
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
              className={`cursor-pointer px-6 py-4 border rounded-lg transition-all duration-300 ${role === "utilisateur" ? "bg-blue-500 text-white" : "bg-white text-blue-500"}`}
            >
              Utilisateur
            </div>
            <div
              onClick={() => setRole("pro")}
              className={`cursor-pointer px-6 py-4 border rounded-lg transition-all duration-300 ${role === "pro" ? "bg-blue-500 text-white" : "bg-white text-blue-500"}`}
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
                    <summary className="cursor-pointer font-semibold text-blue-900 flex items-center gap-3">
                      <QuestionIcon />
                      {item.question}
                    </summary>
                    <div className="mt-2 text-sm text-gray-700">{item.reponse}</div>
                  </details>
                ))}
              </div>
            </section>
          )}
        </div>

        <Footerpage />
        <Scrolltop />
      </main>

      <style jsx>{`
        details[open] summary {
          color: #f97316; /* texte orange au clic */
        }
      `}</style>
    </div>
  );
}

export default Aide;
