import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Clock, Send } from 'lucide-react';
import axios from 'axios';
import { toast } from 'sonner';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const AnimatedSection = ({ children, className = '' }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    inquiry_type: 'general',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    try {
      await axios.post(`${API}/contact`, formData);
      toast.success('Thank you! We will contact you soon.');
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
        inquiry_type: 'general',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Something went wrong. Please try WhatsApp instead.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20 noise-texture">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden" data-testid="contact-hero">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.7) 100%), url('https://images.unsplash.com/photo-1758548157466-7c454382035a?crop=entropy&cs=srgb&fm=jpg&q=85')`,
          }}
        />
        <div className="relative z-10 text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-playfair font-bold text-4xl sm:text-5xl lg:text-6xl mb-4"
            data-testid="contact-title"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-manrope text-lg text-white/90"
          >
            We're Here to Help
          </motion.p>
        </div>
      </section>

      <AnimatedSection className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-charcoal mb-8" data-testid="contact-info-title">
                Get in Touch
              </h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4" data-testid="contact-address">
                  <div className="bg-emerald/10 p-3 rounded-full flex-shrink-0">
                    <MapPin className="w-6 h-6 text-emerald" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-semibold text-lg text-charcoal mb-1">Address</h3>
                    <p className="font-manrope text-sm text-gray-700">
                      Taranjibari, Islampur NH-31<br />
                      Islampur, West Bengal 733202
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4" data-testid="contact-phone">
                  <div className="bg-emerald/10 p-3 rounded-full flex-shrink-0">
                    <Phone className="w-6 h-6 text-emerald" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-semibold text-lg text-charcoal mb-1">Phone</h3>
                    <a href="tel:+918617895132" className="font-manrope text-sm text-gray-700 hover:text-emerald transition-colors duration-300">
                      +91 86178 95132
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4" data-testid="contact-hours">
                  <div className="bg-emerald/10 p-3 rounded-full flex-shrink-0">
                    <Clock className="w-6 h-6 text-emerald" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-semibold text-lg text-charcoal mb-1">Business Hours</h3>
                    <p className="font-manrope text-sm text-gray-700">
                      Monday - Saturday: 9:00 AM - 8:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-marble p-8">
                <h3 className="font-playfair font-semibold text-xl text-charcoal mb-4">Quick Contact</h3>
                <p className="font-manrope text-sm text-gray-700 mb-4">
                  For immediate assistance, reach us on WhatsApp
                </p>
                <a
                  href="https://wa.me/918617895132?text=Hello!%20I%20would%20like%20to%20inquire%20about%20your%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="whatsapp-contact-button"
                  className="inline-block bg-[#25D366] text-white px-6 py-3 font-manrope font-medium text-sm hover:bg-[#128C7E] transition-colors duration-300"
                >
                  Message on WhatsApp
                </a>
              </div>
            </div>

            <div>
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-charcoal mb-8" data-testid="contact-form-title">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                <div>
                  <label htmlFor="name" className="block font-manrope font-medium text-sm text-charcoal mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    data-testid="contact-form-name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 font-manrope text-sm border border-gray-300 focus:border-emerald focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block font-manrope font-medium text-sm text-charcoal mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    data-testid="contact-form-phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 font-manrope text-sm border border-gray-300 focus:border-emerald focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-manrope font-medium text-sm text-charcoal mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    data-testid="contact-form-email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 font-manrope text-sm border border-gray-300 focus:border-emerald focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="inquiry_type" className="block font-manrope font-medium text-sm text-charcoal mb-2">
                    Inquiry Type
                  </label>
                  <select
                    id="inquiry_type"
                    name="inquiry_type"
                    data-testid="contact-form-inquiry-type"
                    value={formData.inquiry_type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 font-manrope text-sm border border-gray-300 focus:border-emerald focus:outline-none transition-colors duration-300"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="tiles">Tiles</option>
                    <option value="marble">Marble & Granite</option>
                    <option value="bathroom">Bathroom & Sanitary</option>
                    <option value="hardware">Hardware</option>
                    <option value="bulk">Bulk Order</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-manrope font-medium text-sm text-charcoal mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    data-testid="contact-form-message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 font-manrope text-sm border border-gray-300 focus:border-emerald focus:outline-none transition-colors duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  data-testid="contact-form-submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald text-white px-8 py-4 font-manrope font-medium text-base hover:bg-emerald/90 transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={20} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-charcoal mb-8 text-center" data-testid="map-title">
            Find Us on the Map
          </h2>
          <div className="w-full h-[500px] shadow-lg" data-testid="google-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3568.1234567890123!2d88.1626201!3d26.2429159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e5037491a22b99%3A0xa10a30967aba8bf6!2sMH%20ENTERPRISES!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MH ENTERPRISES Location"
            />
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
