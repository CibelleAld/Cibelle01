import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // icône flèche

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  // Montrer le bouton quand on descend
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Fonction pour remonter en haut
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-yellow-400 text-white px-4 py-3 rounded-md shadow-lg hover:bg-orange-600 transition"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}

