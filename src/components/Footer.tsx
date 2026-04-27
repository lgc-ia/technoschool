"use client";

import { Facebook, Instagram, Linkedin, X } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const year = new Date().getFullYear();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-black border-t border-gray-900 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="p-2 hover:bg-gray-900 rounded-full transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="p-2 hover:bg-gray-900 rounded-full transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="p-2 hover:bg-gray-900 rounded-full transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
              </a>
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm text-gray-400">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="hover:text-white transition-colors duration-200 cursor-pointer"
              >
                Mentions légales
              </button>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Accessibilité
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Contact
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Politique de confidentialité
              </a>
            </div>
          </div>

          <div className="footer-copyright mt-8 border-t border-gray-900 text-center text-sm text-gray-500">
            © {year}&nbsp;TechnoSchool — Recherche &amp; Développement, tous droits réservés.
          </div>
        </div>
      </footer>

      {/* Modal Mentions légales */}
      {isModalOpen && (
        <div
          style={{ position: "fixed", inset: 0, zIndex: 9999, backgroundColor: "rgba(0,0,0,0.85)", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 1rem" }}
          onClick={() => setIsModalOpen(false)}
        >
          <div
            style={{ width: "750px", maxWidth: "100%", backgroundColor: "#0a0a0f", border: "1px solid #1f2937", borderRadius: "1rem", boxShadow: "0 25px 60px rgba(0,0,0,1)", overflow: "hidden", position: "relative" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
              <h2 className="text-base font-semibold text-white tracking-wide">
                <strong>Mentions légales</strong>
              </h2>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-lg text-gray-500 hover:text-white hover:bg-gray-800 transition-colors"
                aria-label="Fermer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="px-6 py-6 space-y-5 text-sm">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">
                  Éditeur du service
                </p>
                <p className="text-gray-400 mb-4">
                  Le présent espace <strong>LGC Recherche Développement</strong> est édité par :
                </p>
                <div className="bg-gray-900 rounded-xl p-4 space-y-2.5">
                  <p className="font-semibold text-white">LGC Recherche et Développement</p>
                  <div className="w-full h-px bg-gray-800" />
                  <div className="space-y-1.5 text-gray-400">
                    <p>SAS – Société par actions simplifiée</p>
                    <p>51 rue Gaston Lauriau, 93100 Montreuil</p>
                    <p>
                      <span className="text-gray-500">SIRET</span>{" "}
                      882 626 229 00026
                    </p>
                    <p>
                      <span className="text-gray-500">Code APE</span>{" "}
                      72.19Z – R&amp;D en autres sciences physiques et naturelles
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-gray-800 flex justify-end">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 text-sm rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
