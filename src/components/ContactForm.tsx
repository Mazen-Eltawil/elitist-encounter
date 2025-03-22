
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "We've received your message and will be in touch soon.",
        className: "bg-luxury-gray border border-luxury-gold/30 text-luxury-white",
      });
      
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="mt-16 max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="luxury-input w-full group-hover:border-luxury-gold/60"
          />
        </div>
        
        <div className="group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="luxury-input w-full group-hover:border-luxury-gold/60"
          />
        </div>
        
        <div className="group">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows={5}
            className="luxury-input w-full resize-none group-hover:border-luxury-gold/60"
          />
        </div>
        
        <div className="flex justify-center mt-8">
          <button
            type="submit"
            disabled={isSubmitting}
            className="luxury-btn opacity-90 hover:opacity-100 bg-gold-gradient bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
