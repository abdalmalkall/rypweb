
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-black">Ibrahim Alian</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-black transition-colors duration-200">About</button>
            <button onClick={() => scrollToSection('portfolio')} className="text-gray-600 hover:text-black transition-colors duration-200">Portfolio</button>
            <button onClick={() => scrollToSection('videos')} className="text-gray-600 hover:text-black transition-colors duration-200">Videos</button>
            <button onClick={() => scrollToSection('courses')} className="text-gray-600 hover:text-black transition-colors duration-200">Courses</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-black transition-colors duration-200">Contact</button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-black">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-gray-600 hover:text-black transition-colors duration-200">About</button>
              <button onClick={() => scrollToSection('portfolio')} className="block px-3 py-2 text-gray-600 hover:text-black transition-colors duration-200">Portfolio</button>
              <button onClick={() => scrollToSection('videos')} className="block px-3 py-2 text-gray-600 hover:text-black transition-colors duration-200">Videos</button>
              <button onClick={() => scrollToSection('courses')} className="block px-3 py-2 text-gray-600 hover:text-black transition-colors duration-200">Courses</button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-gray-600 hover:text-black transition-colors duration-200">Contact</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
