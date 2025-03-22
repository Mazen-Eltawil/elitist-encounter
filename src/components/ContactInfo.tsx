
import React from 'react';
import { Mail, Phone, Instagram, MapPin, Clock, MessageSquare } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { motion } from "framer-motion";

const ContactInfo: React.FC = () => {
  const contactItems = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      content: "elitistlinks@gmail.com",
      link: "mailto:elitistlinks@gmail.com",
      delay: 0.3,
      hoverContent: {
        title: "Email Response Time",
        description: "Our team typically responds within 6-12 hours to all inquiries."
      }
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "WhatsApp & Phone",
      content: "+971 50 997 7198",
      link: "tel:+971509977198",
      delay: 0.5,
      hoverContent: {
        title: "Availability",
        description: "Available for calls and WhatsApp messages 24/7 for our premium clients."
      }
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      title: "Instagram",
      content: "@elitist.links",
      link: "https://instagram.com/elitist.links",
      delay: 0.7,
      hoverContent: {
        title: "Social Updates",
        description: "Follow us for exclusive previews of our latest luxury acquisitions."
      }
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      content: "Dubai, United Arab Emirates",
      link: "https://maps.app.goo.gl/your-location-link",
      delay: 0.9,
      hoverContent: {
        title: "Private Viewings",
        description: "Exclusive showroom visits are available by appointment only."
      }
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Hours",
      content: "By Appointment Only",
      delay: 1.1,
      hoverContent: {
        title: "Concierge Service",
        description: "Our luxury concierge team is available 24/7 for our most distinguished clients."
      }
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "Live Chat",
      content: "Chat with a Representative",
      delay: 1.3,
      hoverContent: {
        title: "Personalized Service",
        description: "Connect with our specialists for immediate assistance with any inquiry."
      }
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
      {contactItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.7, 
            delay: item.delay, 
            ease: [0.22, 1, 0.36, 1] 
          }}
          className="contact-card"
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-luxury-gray border border-luxury-gold/30 text-luxury-gold mb-4 transition-all duration-300">
              {item.icon}
            </div>
            <h3 className="text-luxury-gold font-playfair text-lg mb-2">{item.title}</h3>
            <HoverCard>
              <HoverCardTrigger asChild>
                {item.link ? (
                  <a 
                    href={item.link} 
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-luxury-white hover:text-luxury-gold transition-all duration-300"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-luxury-white hover:text-luxury-gold transition-all duration-300 cursor-pointer">
                    {item.content}
                  </p>
                )}
              </HoverCardTrigger>
              <HoverCardContent className="w-80 bg-luxury-gray border border-luxury-gold/30 text-luxury-white">
                <div className="flex justify-between space-x-4">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-luxury-gold">{item.hoverContent?.title}</h4>
                    <p className="text-sm text-luxury-white/80">
                      {item.hoverContent?.description}
                    </p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ContactInfo;
