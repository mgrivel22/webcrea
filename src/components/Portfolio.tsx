import React from 'react';

export default function Portfolio() {
  const projects = [
    {
      title: "Site E-commerce Mode",
      description: "Boutique en ligne créée avec Webflow et WooCommerce",
      image: "https://images.unsplash.com/photo-1491897554428-130a60dd4757?auto=format&fit=crop&w=800&q=80",
      tags: ["Webflow", "E-commerce", "Design"]
    },
    {
      title: "Portfolio Photographe",
      description: "Site portfolio avec galerie dynamique Webflow",
      image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=800&q=80",
      tags: ["Webflow", "Portfolio", "CMS"]
    },
    {
      title: "Site Restaurant",
      description: "Site vitrine avec réservations intégrées",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      tags: ["Webflow", "Intégrations", "SEO"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Exemple de sites Web</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            je prend en charge plusieurs type de sites 
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}