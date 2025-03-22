
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
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="mt-16 max-w-2xl mx-auto"
    >
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              className={`luxury-input w-full bg-luxury-gray border-luxury-gold/40 focus:border-luxury-gold transition-all duration-300 ${
                formFocus.name ? 'border-luxury-gold' : ''
              }`}
            />
            {formFocus.name && (
              <motion.div 
                layoutId="inputFocus"
                className="absolute -bottom-px left-0 h-px w-full bg-luxury-gold"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </div>
          
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
              className={`luxury-input w-full bg-luxury-gray border-luxury-gold/40 focus:border-luxury-gold transition-all duration-300 ${
                formFocus.email ? 'border-luxury-gold' : ''
              }`}
            />
            {formFocus.email && (
              <motion.div 
                layoutId="inputFocus"
                className="absolute -bottom-px left-0 h-px w-full bg-luxury-gold"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onFocus={() => handleFocus('phone')}
              onBlur={() => handleBlur('phone')}
              placeholder="Your Phone (Optional)"
              className={`luxury-input w-full bg-luxury-gray border-luxury-gold/40 focus:border-luxury-gold transition-all duration-300 ${
                formFocus.phone ? 'border-luxury-gold' : ''
              }`}
            />
            {formFocus.phone && (
              <motion.div 
                layoutId="inputFocus"
                className="absolute -bottom-px left-0 h-px w-full bg-luxury-gold"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </div>
          
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
              className={`luxury-input w-full bg-luxury-gray border-luxury-gold/40 focus:border-luxury-gold transition-all duration-300 ${
                formFocus.subject ? 'border-luxury-gold' : ''
              }`}
            />
            {formFocus.subject && (
              <motion.div 
                layoutId="inputFocus"
                className="absolute -bottom-px left-0 h-px w-full bg-luxury-gold"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </div>
        </div>
        
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
            className={`luxury-input w-full resize-none bg-luxury-gray border-luxury-gold/40 focus:border-luxury-gold transition-all duration-300 ${
              formFocus.message ? 'border-luxury-gold' : ''
            }`}
          />
          {formFocus.message && (
            <motion.div 
              layoutId="inputFocus"
              className="absolute -bottom-px left-0 h-px w-full bg-luxury-gold"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </div>
        
        <div className="flex justify-center mt-12">
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="relative px-8 py-4 overflow-hidden font-montserrat font-medium text-luxury-black bg-luxury-gold rounded-sm transition-all duration-300 hover:bg-luxury-gold-light"
            whileHover={{ y: -2 }}
            whileTap={{ y: 1 }}
          >
            <span className="relative z-10 tracking-wider">
              {isSubmitting ? 'Submitting...' : 'Send Inquiry'}
            </span>
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
