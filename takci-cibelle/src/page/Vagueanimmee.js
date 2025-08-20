// VagueAnimee.jsx
import React from "react";

export default function VagueAnimee() {
  return (
    <div className="absolute bottom-0 w-full h-40 overflow-hidden">
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-full block"
      >
        {/* Vague supérieure */}
        <path
          d="M0,100 
             C300,80 600,120 900,90 
             C1200,60 1500,110 1800,80 
             L1800,120 
             L0,120 Z"
          className="fill-white opacity-30"
        />

        {/* Vague intermédiaire */}
        <path
          d="M0,108 
             C300,95 600,125 900,105 
             C1200,85 1500,115 1800,100 
             L1800,120 
             L0,120 Z"
          className="fill-white opacity-60"
        />

        {/* Vague principale */}
        <path
          d="M0,112 
             C300,108 600,122 900,115 
             C1200,108 1500,120 1800,115 
             L1800,120 
             L0,120 Z"
          className="fill-white"
        />
      </svg>

      <style jsx>{`
        div {
          /* S'assure que le fond de la div couvre le bas exactement */
          background: transparent;
        }

        path {
          shape-rendering: geometricPrecision;
        }

        path:nth-child(1) {
          animation: waveFlow 12s ease-in-out -3s infinite;
        }
        path:nth-child(2) {
          animation: waveFlow 10s ease-in-out -1s infinite;
        }
        path:nth-child(3) {
          animation: waveFlow 8s ease-in-out infinite;
        }

        @keyframes waveFlow {
          0%, 100% { transform: translateX(0) translateY(0); }
          25% { transform: translateX(-1.5%) translateY(-3px); }
          50% { transform: translateX(-3%) translateY(0); }
          75% { transform: translateX(-1.5%) translateY(3px); }
        }
      `}</style>
    </div>
  );
}
