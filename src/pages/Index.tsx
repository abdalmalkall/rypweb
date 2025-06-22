
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Videos from '@/components/Videos';
import Courses from '@/components/Courses';
import Contact from '@/components/Contact';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Videos />
      <Courses />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
