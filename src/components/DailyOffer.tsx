import { useState, useEffect } from 'react';
import { dailyOffers, getDayOfWeek, getTodayOffer } from '@/utils/dailyOffers';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';

const locations = [
  { name: 'Oshiwara', status: 'active' },
  { name: 'Versova', status: 'active' },
  { name: 'Santacruz', status: 'inactive' },
];

const DailyOffer = () => {
  const [todayOffer, setTodayOffer] = useState(getTodayOffer());
  const [selectedDay, setSelectedDay] = useState(getDayOfWeek());
  const [modalOpen, setModalOpen] = useState(false);

  const activeLocations = locations.filter((loc) => loc.status === 'active');
  const defaultLocation = activeLocations.length === 1 ? activeLocations[0].name : '';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: null,
    guests: '',
    requests: '',
    location: defaultLocation,
  });

  useEffect(() => {
    const offer = dailyOffers.find((offer) => offer.day === selectedDay);
    if (offer) setTodayOffer(offer);
  }, [selectedDay]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    // Validation
    if (!formData.name || !formData.phone || !formData.date || !formData.guests || !formData.location) {
      alert('Please fill in all required fields.');
      return;
    }

    const payload = {
      ...formData,
      date: formData.date ? formData.date.toLocaleDateString() : '',
      offer: todayOffer.title,
    };

    console.log('Reservation Data:', payload, selectedDay);

    await fetch('YOUR_WEBHOOK_URL', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    // Reset and close
    setFormData({
      name: '',
      phone: '',
      date: null,
      guests: '',
      requests: '',
      location: defaultLocation,
    });
    setModalOpen(false);
    // Optionally: Add a toast/notification here for success
  };

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
              variant={selectedDay === offer.day ? 'default' : 'outline'}
              onClick={() => setSelectedDay(offer.day)}
              className={`whitespace-nowrap ${
                selectedDay === offer.day
                  ? 'bg-corra-brand text-corra-dark hover:bg-corra-brand/90'
                  : 'border-corra-light/20 text-corra-light hover:border-corra-brand hover:text-corra-brand'
              }`}
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
                <Button
                  className="bg-corra-brand text-corra-dark hover:bg-corra-brand/90"
                  onClick={() => setModalOpen(true)}
                >
                  Reserve a Table
                </Button>
              </div>
            </CardContent>
          </div>
        </Card>

        {/* Reservation Modal */}
        <Dialog open={modalOpen} onOpenChange={setModalOpen}>
          <DialogContent className="p-6 bg-corra-dark text-corra-light max-w-lg">
            <DialogHeader>
              <DialogTitle className="text-2xl font-serif text-corra-brand mb-4">
                Reserve a Table
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="bg-corra-base/20 border-corra-brand placeholder:text-corra-light/50"
              />
              <Input
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="bg-corra-base/20 border-corra-brand placeholder:text-corra-light/50"
              />
              <div>
                <label className="block mb-2 text-corra-light/70">Select Date</label>
                <Calendar
                  mode="single"
                  selected={formData.date}
                  onSelect={(date) => setFormData((prev) => ({ ...prev, date }))}
                  className="bg-corra-base/20 border-corra-brand"
                />
              </div>
              <Input
                name="guests"
                placeholder="Number of Guests"
                value={formData.guests}
                onChange={handleChange}
                className="bg-corra-base/20 border-corra-brand placeholder:text-corra-light/50"
              />
              <div>
                <label className="block mb-2 text-corra-light/70">Select Location</label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full bg-corra-base/20 border-corra-brand text-corra-light p-2 rounded-lg"
                >
                  {locations
                    .filter((loc) => loc.status === 'active')
                    .map((loc) => (
                      <option key={loc.name} value={loc.name}>
                        {loc.name}
                      </option>
                    ))}
                  {locations
                    .filter((loc) => loc.status === 'inactive')
                    .map((loc) => (
                      <option key={loc.name} value={loc.name} disabled>
                        {loc.name} (Currently Unavailable)
                      </option>
                    ))}
                </select>
              </div>
              <Textarea
                name="requests"
                placeholder="Special Requests (optional)"
                value={formData.requests}
                onChange={handleChange}
                className="bg-corra-base/20 border-corra-brand placeholder:text-corra-light/50"
              />
              <Button
                className="w-full bg-corra-brand text-corra-dark hover:bg-corra-brand/90"
                onClick={handleSubmit}
              >
                Submit Reservation
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default DailyOffer;
