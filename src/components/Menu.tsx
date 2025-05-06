
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const categories = ["Starters", "Main Course", "Desserts", "Drinks"];

interface MenuItem {
  name: string;
  description: string;
  price: string;
  category: string;
  isSignature?: boolean;
}

const menuItems: MenuItem[] = [
  // Starters
  {
    name: "Truffle Arancini",
    description: "Crispy risotto balls with truffle and mozzarella center, served with saffron aioli",
    price: "₹550",
    category: "Starters",
    isSignature: true
  },
  {
    name: "Beetroot Carpaccio",
    description: "Thinly sliced golden and red beetroot with goat cheese mousse, candied walnuts and microgreens",
    price: "₹480",
    category: "Starters"
  },
  {
    name: "Burrata & Heirloom Tomatoes",
    description: "Fresh burrata with assorted heirloom tomatoes, basil oil and aged balsamic",
    price: "₹620",
    category: "Starters"
  },
  {
    name: "Wild Mushroom Velouté",
    description: "Smooth mushroom soup with truffle cream and sourdough croutons",
    price: "₹420",
    category: "Starters"
  },
  
  // Main Course
  {
    name: "Sous Vide Lamb Rack",
    description: "Perfectly cooked lamb with celeriac purée, glazed vegetables and red wine jus",
    price: "₹1,450",
    category: "Main Course",
    isSignature: true
  },
  {
    name: "Wild Sea Bass",
    description: "Pan-seared sea bass with saffron risotto, asparagus and citrus beurre blanc",
    price: "₹1,350",
    category: "Main Course"
  },
  {
    name: "Truffle Tagliatelle",
    description: "Handmade pasta with black truffle cream, aged parmesan and wild mushrooms",
    price: "₹980",
    category: "Main Course"
  },
  {
    name: "Aged Tenderloin",
    description: "28-day aged tenderloin with truffled potato gratin, roasted vegetables and peppercorn sauce",
    price: "₹1,650",
    category: "Main Course",
    isSignature: true
  },
  
  // Desserts
  {
    name: "Chocolate Délice",
    description: "Rich dark chocolate mousse with salted caramel center, hazelnut praline and gold leaf",
    price: "₹580",
    category: "Desserts",
    isSignature: true
  },
  {
    name: "Vanilla Bean Crème Brûlée",
    description: "Classic vanilla custard with caramelized sugar crust and seasonal berries",
    price: "₹480",
    category: "Desserts"
  },
  {
    name: "Coconut Panna Cotta",
    description: "Silky coconut panna cotta with passion fruit coulis and mango sorbet",
    price: "₹520",
    category: "Desserts"
  },
  
  // Drinks
  {
    name: "Signature Corra Martini",
    description: "House vodka infused with lemongrass, elderflower liqueur, cucumber and lime",
    price: "₹750",
    category: "Drinks",
    isSignature: true
  },
  {
    name: "Barrel Aged Negroni",
    description: "Aged for 30 days in oak barrels, with handcrafted vermouth and orange bitters",
    price: "₹820",
    category: "Drinks"
  },
  {
    name: "Herbal Elixir",
    description: "Non-alcoholic blend of herbs, cucumber, elderflower and sparkling water",
    price: "₹450",
    category: "Drinks"
  }
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Starters");

  return (
    <section id="menu" className="section-padding bg-gradient-to-b from-corra-dark to-corra-dark/90">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Our Menu</h2>
          <p className="text-corra-light/80 max-w-2xl mx-auto">
            Thoughtfully crafted dishes featuring seasonal ingredients and innovative techniques.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button 
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`md:min-w-[120px] ${activeCategory === category ? 
                'bg-corra-brand text-corra-dark hover:bg-corra-brand/90' : 
                'border-corra-light/20 text-corra-light hover:border-corra-brand hover:text-corra-brand'}`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {menuItems
            .filter(item => item.category === activeCategory)
            .map((item, index) => (
              <div 
                key={index} 
                className={cn(
                  "border-b border-corra-base/10 pb-6", 
                  item.isSignature && "relative"
                )}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-serif">{item.name}</h3>
                  {item.isSignature && (
                  <div className="absolute -top-6 -right-2 bg-corra-brand text-corra-dark text-xs px-2 py-1 rounded-md">
                    Signature
                  </div>
                  )}
                  <div className="text-corra-brand font-medium ml-4">{item.price}</div>
                </div>
                <p className="text-corra-light/70 text-sm">{item.description}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
