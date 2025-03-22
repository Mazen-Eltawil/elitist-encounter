
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formFocus, setFormFocus] = useState({
    name: false,
    email: false,
    phone: false,
    subject: false,
    message: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFocus = (field: string) => {
    setFormFocus(prev => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field: string) => {
    setFormFocus(prev => ({ ...prev, [field]: false }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Inquiry Received",
        description: "Thank you for contacting Elitist Links. A personal representative will be in touch shortly.",
        className: "bg-luxury-gray border border-luxury-gold/30 text-luxury-white",
      });
      
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="mt-16 max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group relative">
            <div className={`absolute -inset-0.5 bg-gradient-to-r from-luxury-gold/30 to-luxury-gold-light/30 rounded-md blur opacity-30 group-hover:opacity-100 transition duration-1000 ${formFocus.name ? 'opacity-100' : ''}`}></div>
            <div className="relative">
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => handleFocus('name')}
                onBlur={() => handleBlur('name')}
                placeholder="Your Name"
                required
                className="luxury-input w-full bg-luxury-gray border-luxury-gold/40 focus:border-luxury-gold transition-all duration-500"
              />
            </div>
          </div>
          
          <div className="group relative">
            <div className={`absolute -inset-0.5 bg-gradient-to-r from-luxury-gold/30 to-luxury-gold-light/30 rounded-md blur opacity-30 group-hover:opacity-100 transition duration-1000 ${formFocus.email ? 'opacity-100' : ''}`}></div>
            <div className="relative">
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus('email')}
                onBlur={() => handleBlur('email')}
                placeholder="Your Email"
                required
                className="luxury-input w-full bg-luxury-gray border-luxury-gold/40 focus:border-luxury-gold transition-all duration-500"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group relative">
            <div className={`absolute -inset-0.5 bg-gradient-to-r from-luxury-gold/30 to-luxury-gold-light/30 rounded-md blur opacity-30 group-hover:opacity-100 transition duration-1000 ${formFocus.phone ? 'opacity-100' : ''}`}></div>
            <div className="relative">
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onFocus={() => handleFocus('phone')}
                onBlur={() => handleBlur('phone')}
                placeholder="Your Phone (Optional)"
                className="luxury-input w-full bg-luxury-gray border-luxury-gold/40 focus:border-luxury-gold transition-all duration-500"
              />
            </div>
          </div>
          
          <div className="group relative">
            <div className={`absolute -inset-0.5 bg-gradient-to-r from-luxury-gold/30 to-luxury-gold-light/30 rounded-md blur opacity-30 group-hover:opacity-100 transition duration-1000 ${formFocus.subject ? 'opacity-100' : ''}`}></div>
            <div className="relative">
              <Input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onFocus={() => handleFocus('subject')}
                onBlur={() => handleBlur('subject')}
                placeholder="Subject"
                required
                className="luxury-input w-full bg-luxury-gray border-luxury-gold/40 focus:border-luxury-gold transition-all duration-500"
              />
            </div>
          </div>
        </div>
        
        <div className="group relative">
          <div className={`absolute -inset-0.5 bg-gradient-to-r from-luxury-gold/30 to-luxury-gold-light/30 rounded-md blur opacity-30 group-hover:opacity-100 transition duration-1000 ${formFocus.message ? 'opacity-100' : ''}`}></div>
          <div className="relative">
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => handleFocus('message')}
              onBlur={() => handleBlur('message')}
              placeholder="Your Message"
              required
              rows={5}
              className="luxury-input w-full resize-none bg-luxury-gray border-luxury-gold/40 focus:border-luxury-gold transition-all duration-500"
            />
          </div>
        </div>
        
        <div className="flex justify-center mt-12">
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="luxury-btn group relative px-8 py-4 overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 text-luxury-black font-medium tracking-wider">
              {isSubmitting ? 'Submitting...' : 'Send Inquiry'}
            </span>
            <span className="absolute inset-0 bg-gold-gradient bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-800"></span>
            <span className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
              <span className="absolute inset-0 bg-gradient-to-r from-luxury-gold-light to-luxury-gold blur-md"></span>
            </span>
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
