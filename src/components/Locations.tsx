import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
// import Calendar from 'react-calendar'; // Import Calendar component
import 'react-calendar/dist/Calendar.css'; // Make sure to import the calendar styles
import { Input } from './ui/input';
import { Calendar } from '@/components/ui/calendar';


interface Location {
  name: string;
  address: string;
  phone: string;
  hours: string;
  mapLink: string;
  image: string;
}

const locations: Location[] = [
  {
    name: "Corra Oshiwara",
    address: "Plot No. 47, Oshiwara Link Rd, Andheri West, Mumbai 400053",
    phone: "+91 22 4985 7700",
    hours: "12:00 PM - 11:30 PM",
    mapLink: "https://maps.google.com",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070"
  },
  {
    name: "Corra Versova",
    address: "27, Versova Beach Rd, Seven Bungalows, Andheri West, Mumbai 400061",
    phone: "+91 22 4985 7701",
    hours: "12:00 PM - 11:30 PM",
    mapLink: "https://maps.google.com",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070"
  },
  {
    name: "Corra Santacruz",
    address: "Plot No. 142, Linking Rd, Santacruz West, Mumbai 400054",
    phone: "+91 22 4985 7702",
    hours: "12:00 PM - 11:30 PM",
    mapLink: "https://maps.google.com",
    image: "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?q=80&w=2080"
  }
];

const Locations = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: new Date(), // Default to today's date
  });

  const handleReserve = (location: Location) => {
    setSelectedLocation(location);
    setModalOpen(true); // Open the modal on Reserve click
  };

  const handleSubmitReservation = () => {
    if (selectedLocation && formData.name && formData.phone && formData.date) {
      alert(`Reservation made for ${formData.name} at ${selectedLocation.name} on ${formData.date.toLocaleDateString()}`);
      setModalOpen(false); // Close the modal after reservation submission
    } else {
      alert('Please fill in all the details.');
    }
  };

  return (
    <section id="locations" className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Our Locations</h2>
          <p className="text-corra-light/80 max-w-2xl mx-auto">
            Visit us at any of our elegant locations across Mumbai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <Card
              key={index}
              className="bg-corra-dark border border-corra-base/20 overflow-hidden h-full"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif mb-3">{location.name}</h3>
                <div className="flex items-start mb-3">
                  <MapPin className="w-5 h-5 text-corra-brand mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-corra-light/80 text-sm">{location.address}</p>
                </div>
                <div className="text-sm text-corra-light/80 mb-1">
                  <strong>Phone:</strong> {location.phone}
                </div>
                <div className="text-sm text-corra-light/80 mb-4">
                  <strong>Hours:</strong> {location.hours}
                </div>
                <div className="flex gap-3 mt-auto">
                  <Button
                    variant="outline"
                    className="w-full border-corra-light/20 text-corra-light hover:border-corra-brand hover:text-corra-brand"
                    onClick={() => handleReserve(location)} // Open reservation modal
                  >
                    Reserve
                  </Button>
                  <Button
                    className="w-full bg-corra-brand text-corra-dark hover:bg-corra-brand/90"
                    asChild
                  >
                    <a href={location.mapLink} target="_blank" rel="noopener noreferrer">
                      Directions
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Reservation Modal */}
      {modalOpen && selectedLocation && (
        <Dialog open={modalOpen} onOpenChange={setModalOpen}>
          <DialogContent className="p-6 bg-corra-dark text-corra-light max-w-md sm:max-w-lg mx-auto rounded-lg h-auto max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-serif text-corra-brand mb-4">
                Reserve a Table at {selectedLocation.name}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                className="bg-corra-base/20 border-corra-brand placeholder:text-corra-light/50 w-full"
              />
              <Input
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                className="bg-corra-base/20 border-corra-brand placeholder:text-corra-light/50 w-full"
              />
              <div>
                <label className="block mb-2 text-corra-light/70">Select Date</label>
                <Calendar
                  mode="single"
                  selected={formData.date}
                  onSelect={(date) => setFormData((prev) => ({ ...prev, date }))}
                  className="bg-corra-base/20 border-corra-brand w-full"
                />
              </div>
              <div>
                <label className="block mb-2 text-corra-light/70">Location</label>
                <select
                  name="location"
                  value={selectedLocation.name}
                  disabled
                  className="w-full bg-corra-base/20 border-corra-brand text-corra-light p-2 rounded-lg"
                >
                  <option value={selectedLocation.name}>{selectedLocation.name}</option>
                </select>
              </div>
              <Button
                className="w-full bg-corra-brand text-corra-dark hover:bg-corra-brand/90 py-3"
                onClick={handleSubmitReservation}
              >
                Submit Reservation
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default Locations;
