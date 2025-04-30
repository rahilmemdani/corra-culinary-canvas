
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent",
        description: "We'll get back to you soon!",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding bg-corra-dark/95">
      <div className="container mx-auto container-padding">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Get in Touch</h2>
            <p className="text-corra-light/80 mb-6">
              For reservations, private events, or any inquiries, please reach out to us.
            </p>
            
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-lg font-serif mb-2">Email</h3>
                <p className="text-corra-light/80">reservations@corra.com</p>
              </div>
              <div>
                <h3 className="text-lg font-serif mb-2">Phone</h3>
                <p className="text-corra-light/80">+91 22 4985 7700</p>
              </div>
              <div>
                <h3 className="text-lg font-serif mb-2">Working Hours</h3>
                <p className="text-corra-light/80">12:00 PM - 11:30 PM, All days</p>
              </div>
            </div>
          </div>

          <div className="bg-corra-dark/50 p-6 md:p-8 rounded-lg border border-corra-base/20">
            <h3 className="text-xl font-serif mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-corra-dark/70 border-corra-base/20 focus:border-corra-brand placeholder:text-corra-light/50"
                />
              </div>
              
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-corra-dark/70 border-corra-base/20 focus:border-corra-brand placeholder:text-corra-light/50"
                />
              </div>
              
              <div>
                <Input
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-corra-dark/70 border-corra-base/20 focus:border-corra-brand placeholder:text-corra-light/50"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-corra-dark/70 border-corra-base/20 focus:border-corra-brand placeholder:text-corra-light/50 min-h-[120px]"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-corra-brand text-corra-dark hover:bg-corra-brand/90 w-full"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
