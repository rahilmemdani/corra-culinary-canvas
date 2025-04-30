
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import DailyOffer from '@/components/DailyOffer';
import Menu from '@/components/Menu';
import Locations from '@/components/Locations';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll reveal animation
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="bg-corra-dark text-corra-light min-h-screen">
      <Navbar />
      <Hero />
      
      <div className="reveal-on-scroll">
        <DailyOffer />
      </div>
      
      <div className="reveal-on-scroll">
        <Menu />
      </div>
      
      <div className="reveal-on-scroll">
        <Locations />
      </div>
      
      <div className="reveal-on-scroll">
        <Contact />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
