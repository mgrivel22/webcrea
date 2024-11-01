import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="accueil" className="pt-24 pb-32 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center bg-blue-500/10 rounded-full px-3 py-1 mb-6">
          <Sparkles className="h-4 w-4 text-blue-500 mr-2" />
          <span className="text-blue-500 text-sm">Expert Webflow</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Des sites web professionnels avec Webflow
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Je crée des sites web élégants et performants avec Webflow, alliant design moderne et fonctionnalités avancées.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Démarrer un projet
          </a>
          <a href="#portfolio" className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Voir mes réalisations
          </a>
        </div>
      </div>
    </section>
  );
}