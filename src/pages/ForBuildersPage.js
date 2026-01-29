import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Package, TrendingUp, Users, Phone, MessageCircle, CheckCircle } from 'lucide-react';

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

export default function ForBuildersPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const phoneNumber = '+918617895132';
  const whatsappMessage = 'Hello! I am a builder/designer interested in partnership with MH ENTERPRISES.';
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  const services = [
    {
      icon: Package,
      title: 'Bulk Supply Support',
      desc: 'We handle large orders efficiently with timely delivery to your project sites. Special pricing available for bulk purchases.',
    },
    {
      icon: TrendingUp,
      title: 'Consistent Stock',
      desc: 'Reliable inventory management ensures you never face material shortages during critical project phases.',
    },
    {
      icon: Users,
      title: 'Design Assistance',
      desc: 'Our team provides expert guidance on material selection, helping you choose the right products for your projects.',
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      desc: 'All products come from trusted manufacturers with quality certifications and warranties.',
    },
  ];

  const benefits = [
    'Competitive wholesale pricing for contractors and builders',
    'Dedicated account manager for large projects',
    'Flexible payment terms for established partners',
    'On-site delivery coordination',
    'Technical support and installation guidance',
    'Access to latest products and design trends',
  ];

  return (
    <div className="pt-20 noise-texture">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden" data-testid="builders-hero">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.7) 100%), url('https://images.unsplash.com/photo-1759178459554-c27da3a5ecc6?crop=entropy&cs=srgb&fm=jpg&q=85')`,
          }}
        />
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-playfair font-bold text-4xl sm:text-5xl lg:text-6xl mb-6"
            data-testid="builders-title"
          >
            For Builders & Designers
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-manrope text-lg md:text-xl text-white/90"
          >
            Your Trusted Partner for Construction & Interior Projects
          </motion.p>
        </div>
      </section>

      <AnimatedSection className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-charcoal mb-4" data-testid="services-title">
              What We Offer
            </h2>
            <p className="font-manrope text-base text-gray-600 max-w-2xl mx-auto">
              Comprehensive support for your construction and design projects
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`service-card-${index}`}
                className="bg-white p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="bg-emerald/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-emerald" />
                </div>
                <h3 className="font-playfair font-semibold text-xl text-charcoal mb-3">
                  {service.title}
                </h3>
                <p className="font-manrope text-sm text-gray-700 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-charcoal mb-12 text-center" data-testid="benefits-title">
            Partnership Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                data-testid={`benefit-item-${index}`}
                className="flex items-start gap-4"
              >
                <div className="bg-emerald rounded-full p-1 flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="font-manrope text-base text-gray-700">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="bg-marble p-12 md:p-16">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-charcoal mb-6 text-center" data-testid="partnership-title">
              Build a Long-Term Partnership
            </h2>
            <p className="font-manrope text-base text-gray-700 text-center mb-8 leading-relaxed max-w-3xl mx-auto">
              We understand the demands of construction and design projects. Our team is committed to supporting your success with reliable supply, competitive pricing, and expert guidance. Let's discuss how we can support your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${phoneNumber}`}
                data-testid="call-button"
                className="bg-emerald text-white px-8 py-4 font-manrope font-medium text-base hover:bg-emerald/90 transition-colors duration-300 inline-flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Call Us Now
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="whatsapp-partnership-button"
                className="border-2 border-charcoal text-charcoal px-8 py-4 font-manrope font-medium text-base hover:bg-charcoal hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                WhatsApp Inquiry
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24 md:py-32 bg-emerald text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl mb-6" data-testid="site-visit-title">
            Schedule a Site Visit
          </h2>
          <p className="font-manrope text-lg mb-8 text-white/90">
            Our team can visit your project site to better understand your requirements and provide tailored solutions.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="site-visit-button"
            className="inline-block bg-white text-emerald px-8 py-4 font-manrope font-medium text-base hover:bg-gold hover:text-white transition-all duration-300"
          >
            Request Site Visit
          </a>
        </div>
      </AnimatedSection>
    </div>
  );
}
