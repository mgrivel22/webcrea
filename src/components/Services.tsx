import React from 'react';
import { Laptop, Palette, Rocket } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Palette className="h-8 w-8 text-blue-500" />,
      title: "Design Webflow",
      description: "Création de designs uniques et personnalisés avec les fonctionnalités avancées de Webflow."
    },
    {
      icon: <Laptop className="h-8 w-8 text-blue-500" />,
      title: "Développement No-Code",
      description: "Développement rapide et efficace sans compromettre la qualité et les fonctionnalités."
    },
    {
      icon: <Rocket className="h-8 w-8 text-blue-500" />,
      title: "SEO & Performance",
      description: "Optimisation pour les moteurs de recherche et performances exceptionnelles garanties."
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Mes Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Expert Webflow pour des sites web professionnels et performants
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-slate-700/30 p-6 rounded-xl hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-blue-500/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}