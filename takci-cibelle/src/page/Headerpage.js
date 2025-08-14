// Accueil.js
import React, { useEffect, useMemo, useState } from "react";
import { FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";



// Styles (tu peux aussi les mettre dans index.css si tu préfères)
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/pagination";

export default function Headerpage() {
  const [active, setActive] = useState("accueil");
  const [menuOpen, setMenuOpen] = useState(false);

  const itemsLink = useMemo(
    () => [
      { href: "/Accueil", label: "Accueil", key: "accueil" },
      { href: "/Taksipro", label: "Takci Pro", key: "Taksipro" },
      { href: "/utilisateur", label: "Utilisateur", key: "utilisateur" },
      { href: "/evenement", label: "Évènement", key: "evenement" },
      { href: "/aide", label: "Aide", key: "aide" },
      { href: "/contact", label: "Contacts", key: "contact" }
    ],
    []
  );
  useEffect(() => {
    const location = window.location.pathname;
    const activeItem = itemsLink.find(item => item.href === location);
    // console.log({ location, activeItem });
    setActive(activeItem.key);
  }, [itemsLink]);

  return (
    <header className="bg-blue-900 text-white px-8 py-4 flex items-center justify-between">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="flex items-center  ml-20">
          <img
            src="/assets/img/logo2_3.png"
            alt="takci"
            className="h-10 mr-12"
            style={{ imageRendering: "-webkit-optimize-contrast" }}
          />
        </Link>
           
        {/* Navigation */}
     <nav className="relative">
  {/* Bouton hamburger visible uniquement en mobile */}
  <button
    className="md:hidden text-white text-2xl"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    {menuOpen ? "✖" : "☰"}
  </button>

  {/* Menu mobile vertical */}
  <ul
    className={`absolute top-full left-0 bg-blue-900 text-white md:bg-transparent md:flex md:gap-4 md:items-center ${
      menuOpen ? "block" : "hidden"
    } w-auto px-4 py-2 rounded md:static`}
  >
    {itemsLink.map(({ href, label, key }) => (
      <li key={key} className="md:border-none border-b border-blue-800 md:mb-0 mb-2">
        <Link
          to={href}
          onClick={() => setActive(key)}
          className={`block px-4 py-2 ${
            active === key ? "border-b-4 border-yellow-400 md:border-none" : ""
          } hover:text-yellow-400 transition`}
        >
          {label}
        </Link>
      </li>
    ))}

    {/* Numéro de téléphone horizontal */}
    <li className="flex items-center gap-2 px-4 py-2 md:ml-4 md:mr-20">
      <span>01 55 55 65 65</span>
    </li>
  </ul>
</nav>



      </div>
    </header>
  );
}