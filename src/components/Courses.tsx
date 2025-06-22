
const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Complete Design Fundamentals",
      price: "$199",
      originalPrice: "$299",
      image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=400&h=300&fit=crop",
      duration: "12 weeks",
      lessons: "45 lessons",
      level: "Beginner",
      description: "Master the essential principles of design, from color theory to typography and layout composition.",
      features: [
        "Color Theory & Psychology",
        "Typography Mastery",
        "Layout & Composition",
        "Design Tools Training",
        "Real Project Portfolio"
      ]
    },
    {
      id: 2,
      title: "Brand Identity Masterclass",
      price: "$299",
      originalPrice: "$399",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      duration: "8 weeks",
      lessons: "32 lessons",
      level: "Intermediate",
      description: "Learn to create compelling brand identities that resonate with audiences and drive business success.",
      features: [
        "Brand Strategy Development",
        "Logo Design Process",
        "Visual Identity Systems",
        "Brand Guidelines Creation",
        "Client Presentation Skills"
      ]
    },
    {
      id: 3,
      title: "Advanced UI/UX Design",
      price: "$399",
      originalPrice: "$499",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      duration: "16 weeks",
      lessons: "60 lessons",
      level: "Advanced",
      description: "Dive deep into user experience design and create interfaces that are both beautiful and functional.",
      features: [
        "User Research Methods",
        "Wireframing & Prototyping",
        "Interaction Design",
        "Usability Testing",
        "Design Systems"
      ]
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Design <span className="text-gray-500">Courses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive courses designed to elevate your design skills and advance your career
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                    {course.level}
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-black">{course.price}</span>
                    <span className="text-lg text-gray-400 line-through">{course.originalPrice}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-black mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <span>{course.duration}</span>
                  <span>•</span>
                  <span>{course.lessons}</span>
                </div>
                
                <div className="space-y-2 mb-6">
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <button className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition-colors duration-300 font-medium">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            All courses include lifetime access, downloadable resources, and certificate of completion
          </p>
          <button className="border-2 border-black text-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition-all duration-300">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
