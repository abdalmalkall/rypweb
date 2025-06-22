
const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg: -8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Ibrahim Alian</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Creating exceptional design experiences and empowering the next generation of designers through comprehensive education.
            </p>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-300">
                <span className="text-xs font-bold">in</span>
              </button>
              <button className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-300">
                <span className="text-xs font-bold">ig</span>
              </button>
              <button className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-300">
                <span className="text-xs font-bold">tw</span>
              </button>
              <button className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-300">
                <span className="text-xs font-bold">be</span>
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button className="block text-gray-400 hover:text-white transition-colors duration-200">About</button>
              <button className="block text-gray-400 hover:text-white transition-colors duration-200">Portfolio</button>
              <button className="block text-gray-400 hover:text-white transition-colors duration-200">Videos</button>
              <button className="block text-gray-400 hover:text-white transition-colors duration-200">Courses</button>
              <button className="block text-gray-400 hover:text-white transition-colors duration-200">Contact</button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <div className="space-y-2">
              <div className="text-gray-400">Brand Identity</div>
              <div className="text-gray-400">UI/UX Design</div>
              <div className="text-gray-400">Web Design</div>
              <div className="text-gray-400">Logo Design</div>
              <div className="text-gray-400">Design Consultation</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2024 Ibrahim Alian. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Privacy Policy</button>
            <button className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
