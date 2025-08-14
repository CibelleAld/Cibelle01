import React from "react";
import { Link } from "react-router-dom";

export default function FooterComponent() {
  const footerLinks = [
    {
      title: "Takci Pro",
      links: [
        { href: "/Taksipro", label: "Conduire sur Takci" },
        { href: "/Formulaire1", label: "Conduire" }
      ]
    },
    {
      title: "Utilisateur",
      links: [
        { href: "/utilisateur", label: "Se déplacer avec Takci" },
        { href: "/conditions", label: "Conditions générales d'utilisation" }
      ]
    },
    {
      title: "Contacts",
      links: [
        { href: "/newsletter", label: "Newsletter" },
        { href: "/download", label: "Télécharger PDF" }
      ]
    }
  ];

  return (
    <footer className="bg-blue-900 text-gray-300 py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* About Section */}
        <div>
          <Link to="/" className="inline-flex items-center mb-4  ml-20">
            <img
              src="/assets/img/logo2_3.png"
              alt="Takci logo"
              className="h-12 object-contain"
              style={{ imageRendering: "-webkit-optimize-contrast" }}
            />
          </Link>
          <p className="mb-4 ml-20">
            Si vous avez des questions ou si vous avez besoin d'aide, n'hésitez pas à
            contacter notre équipe.
          </p>
          <p className="mb-2 ml-20"><strong>Contact:</strong> <span>+229 00 00 00 00</span></p>
          <p className="ml-20"><strong>Email:</strong> <span>marktech@example.com</span></p>
          <div className="flex space-x-4 mt-6 text-yellow-400">
            <a href="#" aria-label="Twitter" className="hover:text-yellow-300">
              <i className="bi bi-twitter-x text-2xl"></i>
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-yellow-300">
              <i className="bi bi-facebook text-2xl"></i>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-yellow-300">
              <i className="bi bi-instagram text-2xl"></i>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-yellow-300">
              <i className="bi bi-linkedin text-2xl"></i>
            </a>
          </div>
        </div>

        {/* Dynamic Footer Links */}
        {footerLinks.map((section, index) => (
          <div key={index}>
            <h4 className="text-xl font-semibold mb-6 text-yellow-400">{section.title}</h4>
            <ul className="space-y-4">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  {link.href === "/download" ? (
                    <Link 
                      to={link.href}
                      className="inline-flex items-center bg-yellow-400 text-gray-900 font-semibold px-4 py-2 rounded hover:bg-yellow-500 transition"
                    >
                      <i className="icon-download mr-2"></i> {link.label}
                    </Link>
                  ) : (
                    <Link 
                      to={link.href} 
                      className="hover:underline"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Copyright Section */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-white">
        <p>
          © 2024 <strong className="text-white px-1">Takci</strong> Tout droit réservé
        </p>
        <p className="mt-1">
          Conçu & développé par{" "}
          <a
            href="https://bootstrapmade.com/"
            className="text-yellow-400 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            MARKTECH
          </a>
        </p>
      </div>
    </footer>
  );
}