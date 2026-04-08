import { Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-900 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-6">
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
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Mentions légales
            </a>
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
              Politique de confidentialité
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-gray-400">
          &copy; TechnoSchool - Recherche &amp; D&eacute;veloppement {year}.
        </p>
      </div>
    </footer>
  );
}

