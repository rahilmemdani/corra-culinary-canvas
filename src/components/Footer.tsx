
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-corra-dark text-corra-light/80 py-12">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-serif text-2xl text-corra-brand mb-4">Corra</h3>
            <p className="mb-6 max-w-sm">
              A culinary journey where tradition meets innovation, 
              delivering exceptional dining experiences in the heart of Mumbai.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-corra-brand transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-corra-brand transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-corra-brand transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-corra-brand transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-corra-brand transition-colors">Menu</a></li>
              <li><a href="#offers" className="hover:text-corra-brand transition-colors">Daily Offers</a></li>
              <li><a href="#locations" className="hover:text-corra-brand transition-colors">Locations</a></li>
              <li><a href="#contact" className="hover:text-corra-brand transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-4">Newsletter</h4>
            <p className="mb-4">Subscribe to receive updates on special events and offers.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-corra-dark/50 border border-corra-base/20 rounded-l px-3 py-2 w-full focus:outline-none focus:border-corra-brand"
              />
              <button 
                type="submit" 
                className="bg-corra-brand text-corra-dark px-4 py-2 rounded-r hover:bg-corra-brand/90 transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-corra-base/10 mt-10 pt-6 text-center">
          <p>© {currentYear} Corra Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
