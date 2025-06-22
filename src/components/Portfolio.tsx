
const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Brand Identity System",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
      description: "Complete brand identity design for a tech startup"
    },
    {
      id: 2,
      title: "E-commerce Platform UI",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      description: "Modern e-commerce platform with seamless user experience"
    },
    {
      id: 3,
      title: "Mobile App Design",
      category: "App Design",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      description: "Intuitive mobile application for productivity tracking"
    },
    {
      id: 4,
      title: "Corporate Website",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      description: "Professional corporate website with modern aesthetics"
    },
    {
      id: 5,
      title: "Logo Collection",
      category: "Logo Design",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop",
      description: "Collection of memorable logos for various industries"
    },
    {
      id: 6,
      title: "Print Campaign",
      category: "Print Design",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop",
      description: "Award-winning print advertising campaign"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Featured <span className="text-gray-500">Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent design projects spanning various industries and design disciplines
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold text-black mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
