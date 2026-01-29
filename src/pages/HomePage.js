import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, MessageCircle, Phone, Award, Users, ThumbsUp, Building2, Package, Droplet, Wrench, Sparkles, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

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

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const phoneNumber = '+918617895132';
  const whatsappMessage = 'Hello! I would like to inquire about your products.';
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  const features = [
    { icon: Package, title: 'Tiles', desc: 'Wall, Floor, Outdoor' },
    { icon: Sparkles, title: 'Marble & Granite', desc: 'Premium Quality' },
    { icon: Droplet, title: 'Bathroom & Sanitary', desc: 'Modern Designs' },
    { icon: Wrench, title: 'Hardware & Fittings', desc: 'Durable Materials' },
    { icon: Building2, title: 'Interior Design', desc: 'Complete Solutions' },
  ];

  const whyChoose = [
    { icon: Award, title: 'Trusted Local Supplier', desc: 'Years of experience serving Islampur' },
    { icon: ThumbsUp, title: 'Quality Brands', desc: 'Only premium, certified products' },
    { icon: Users, title: 'Builder & Designer Friendly', desc: 'Bulk orders and project support' },
    { icon: Building2, title: 'On-site Guidance', desc: 'Expert consultation available' },
  ];

  const reviews = [
    { name: 'Rajesh Kumar', rating: 5, text: 'Excellent quality tiles and very helpful staff. Highly recommended for home renovation projects.' },
    { name: 'Priya Sharma', rating: 5, text: 'Great variety of marble and granite. Found exactly what I was looking for. Professional service!' },
    { name: 'Amit Das', rating: 5, text: 'Best hardware shop in Islampur. Good prices and genuine products. Very satisfied with my purchase.' },
  ];

  return (
    <div className="noise-texture">
      <section className="relative h-screen flex items-center justify-center overflow-hidden" data-testid="hero-section">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), url('https://images.unsplash.com/photo-1719107647328-dd2134da4fa7?crop=entropy&cs=srgb&fm=jpg&q=85')`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-playfair font-bold text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight"
            data-testid="hero-title"
          >
            Premium Tiles, Marbles<br />& Interior Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-manrope text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto"
            data-testid="hero-subtitle"
          >
            For Homes • Builders • Interior Designers • Contractors
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://www.google.com/maps/place/MH+ENTERPRISES/@26.2429159,88.1626201,17z"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="visit-showroom-button"
              className="bg-emerald text-white px-8 py-4 font-manrope font-medium text-base hover:bg-emerald/90 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              <MapPin size={20} />
              Visit Our Showroom
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="whatsapp-hero-button"
              className="border-2 border-white text-white px-8 py-4 font-manrope font-medium text-base hover:bg-white hover:text-charcoal transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              WhatsApp Us
            </a>
          </motion.div>
        </div>
      </section>

      <AnimatedSection className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-charcoal mb-4" data-testid="what-we-offer-title">
              What We Offer
            </h2>
            <p className="font-manrope text-base text-gray-600 max-w-2xl mx-auto">
              Complete range of premium materials for your construction and interior needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`feature-card-${index}`}
                className="group bg-[#F4F4F5] p-8 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 text-emerald mb-4" />
                <h3 className="font-playfair font-semibold text-xl text-charcoal mb-2">
                  {feature.title}
                </h3>
                <p className="font-manrope text-sm text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-charcoal mb-4" data-testid="why-choose-title">
              Why Choose MH ENTERPRISES
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChoose.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                data-testid={`why-choose-card-${index}`}
                className="flex items-start gap-4 p-6 bg-marble hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-emerald/10 p-3 rounded-full flex-shrink-0">
                  <item.icon className="w-6 h-6 text-emerald" />
                </div>
                <div>
                  <h3 className="font-playfair font-semibold text-lg text-charcoal mb-2">
                    {item.title}
                  </h3>
                  <p className="font-manrope text-sm text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-gold text-gold" />
              ))}
            </div>
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-charcoal mb-4" data-testid="reviews-title">
              Trusted by Islampur & Nearby Areas
            </h2>
            <p className="font-manrope text-base text-gray-600">
              See what our customers have to say
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`review-card-${index}`}
                className="bg-white p-8 shadow-sm border border-gray-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-manrope text-sm text-gray-700 mb-4 leading-relaxed">
                  "{review.text}"
                </p>
                <p className="font-manrope font-semibold text-charcoal">{review.name}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="https://www.google.com/maps/place/MH+ENTERPRISES/@26.2429159,88.1626201,17z"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="view-all-reviews-button"
              className="inline-block border-2 border-charcoal text-charcoal px-8 py-4 font-manrope font-medium text-base hover:bg-charcoal hover:text-white transition-all duration-300"
            >
              View All Reviews on Google
            </a>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24 md:py-32 bg-emerald text-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl mb-6" data-testid="cta-title">
            Ready to Transform Your Space?
          </h2>
          <p className="font-manrope text-lg mb-8 text-white/90">
            Visit our showroom or get in touch with us today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              data-testid="cta-contact-button"
              className="bg-white text-emerald px-8 py-4 font-manrope font-medium text-base hover:bg-gold hover:text-white transition-all duration-300"
            >
              Contact Us
            </Link>
            <a
              href={`tel:${phoneNumber}`}
              data-testid="cta-call-button"
              className="border-2 border-white text-white px-8 py-4 font-manrope font-medium text-base hover:bg-white hover:text-emerald transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Call Now
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
