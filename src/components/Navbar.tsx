
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Menu', href: '#menu' },
  { name: 'Offers', href: '#offers' },
  { name: 'Locations', href: '#locations' },
  { name: 'Contact', href: '#contact' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-corra-dark/95 backdrop-blur-md py-4 shadow-md" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-corra-brand hover:text-corra-brand/80 transition-colors">
          <h1 className="font-serif text-3xl font-medium">Corra</h1>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map(link => (
            <a 
              key={link.name}
              href={link.href}
              className="text-corra-light hover:text-corra-brand font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-corra-light p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-0 bg-corra-dark/95 flex flex-col justify-center items-center transition-all duration-300 md:hidden",
          isMobileMenuOpen ? "opacity-100 z-40" : "opacity-0 pointer-events-none -z-10"
        )}
      >
        <div className="flex flex-col items-center space-y-8">
          {navLinks.map(link => (
            <a 
              key={link.name}
              href={link.href}
              className="text-corra-light hover:text-corra-brand text-2xl font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
