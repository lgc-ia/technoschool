import { Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-900 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-gray-400">
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
              Contact
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Politique de confidentialité
            </a>
          </div>

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
        </div>
      </div>
    </footer>
  );
}

