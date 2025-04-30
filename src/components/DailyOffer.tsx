
import { useState, useEffect } from 'react';
import { dailyOffers, getDayOfWeek, getTodayOffer } from '@/utils/dailyOffers';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const DailyOffer = () => {
  const [todayOffer, setTodayOffer] = useState(getTodayOffer());
  const [selectedDay, setSelectedDay] = useState(getDayOfWeek());

  useEffect(() => {
    const offer = dailyOffers.find(offer => offer.day === selectedDay);
    if (offer) setTodayOffer(offer);
  }, [selectedDay]);

  return (
    <section id="offers" className="section-padding bg-corra-dark/95">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Daily Specials</h2>
          <p className="text-corra-light/80 max-w-2xl mx-auto">
            Explore our rotating menu of exclusive daily offers, crafted with seasonal ingredients and our chef's creative touch.
          </p>
        </div>

        <div className="flex flex-nowrap gap-2 md:gap-3 justify-center mb-10 overflow-x-auto py-2 px-4">
          {dailyOffers.map((offer) => (
            <Button 
              key={offer.day}
              variant={selectedDay === offer.day ? "default" : "outline"} 
              onClick={() => setSelectedDay(offer.day)}
              className={`whitespace-nowrap ${selectedDay === offer.day ? 
                'bg-corra-brand text-corra-dark hover:bg-corra-brand/90' : 
                'border-corra-light/20 text-corra-light hover:border-corra-brand hover:text-corra-brand'}`}
            >
              {offer.day}
            </Button>
          ))}
        </div>

        <Card className="bg-corra-dark border border-corra-base/20 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="h-64 md:h-auto">
              <img 
                src={todayOffer.image} 
                alt={todayOffer.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="flex flex-col justify-center p-6 md:p-10">
              <div className="mb-2 text-corra-brand font-medium">
                {todayOffer.day}'s Special
              </div>
              <h3 className="text-2xl md:text-3xl font-serif mb-3">{todayOffer.title}</h3>
              <p className="text-corra-light/80 mb-4">{todayOffer.description}</p>
              <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
                <span className="text-2xl text-corra-brand font-serif">{todayOffer.price}</span>
                <Button className="bg-corra-brand text-corra-dark hover:bg-corra-brand/90">
                  Reserve a Table
                </Button>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default DailyOffer;
