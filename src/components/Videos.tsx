
const Videos = () => {
  const videos = [
    {
      id: 1,
      title: "Design Process Walkthrough",
      thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      duration: "12:45",
      description: "A comprehensive look at my design process from concept to completion"
    },
    {
      id: 2,
      title: "Brand Identity Masterclass",
      thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop",
      duration: "25:30",
      description: "Learn the fundamentals of creating memorable brand identities"
    },
    {
      id: 3,
      title: "UI/UX Design Tips",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      duration: "18:20",
      description: "Essential tips and tricks for modern UI/UX design"
    },
    {
      id: 4,
      title: "Color Theory in Practice",
      thumbnail: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&h=400&fit=crop",
      duration: "15:10",
      description: "Understanding and applying color theory in your designs"
    }
  ];

  return (
    <section id="videos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Design <span className="text-gray-500">Videos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Educational content and behind-the-scenes looks at my design process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-black border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">{video.title}</h3>
                  <p className="text-gray-600">{video.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
