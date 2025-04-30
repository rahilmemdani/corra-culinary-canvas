
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Full width background image - using placeholder image */}
      <div className="absolute inset-0 bg-black">
        <img 
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2074"
          alt="Elegant restaurant ambience" 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-corra-dark via-corra-dark/40 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-4 sm:px-6">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-white mb-4">
            Experience <span className="text-corra-brand">culinary</span> artistry
          </h1>
          <p className="text-xl md:text-2xl text-corra-light/90 mb-8 max-w-lg">
            Where tradition meets innovation in a celebration of flavor and craft
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#menu" 
              className="bg-corra-brand hover:bg-corra-brand/90 text-corra-dark font-medium py-3 px-8 rounded inline-flex justify-center items-center transition-colors"
            >
              Explore Menu
            </a>
            <a 
              href="#offers" 
              className="border border-corra-light/30 hover:border-corra-brand hover:bg-corra-dark/50 text-corra-light font-medium py-3 px-8 rounded inline-flex justify-center items-center transition-all"
            >
              Today's Specials
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
