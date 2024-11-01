import React from 'react';
import { Code2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-6 md:mb-0">
            <Code2 className="h-8 w-8 text-blue-500" />
            <span className="ml-2 text-xl font-bold">Webcrea</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-gray-400">
            <a href="#accueil" className="hover:text-blue-500 transition-colors">Accueil</a>
            <a href="#services" className="hover:text-blue-500 transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-blue-500 transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Webcrea. Expert Webflow - Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}