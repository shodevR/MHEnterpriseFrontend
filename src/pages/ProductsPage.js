import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Package, Sparkles, Droplet, Wrench, Building2 } from 'lucide-react';

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

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const phoneNumber = '+918617895132';
  const whatsappUrl = (category) => {
    const message = `Hello! I would like to inquire about ${category}.`;
    return `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
  };

  const categories = [
    {
      icon: Package,
      title: 'Tiles',
      subtitle: 'Wall, Floor & Outdoor',
      image: 'https://images.pexels.com/photos/4249687/pexels-photo-4249687.jpeg',
      description: 'Explore our extensive collection of tiles including glossy, matte, and anti-skid varieties. Perfect for walls, floors, and outdoor spaces.',
      types: ['Ceramic Tiles', 'Vitrified Tiles', 'Porcelain Tiles', 'Wall Tiles', 'Floor Tiles', 'Outdoor Tiles'],
    },
    {
      icon: Sparkles,
      title: 'Marble & Granite',
      subtitle: 'Premium Quality Stone',
      image: 'https://images.unsplash.com/photo-1719107647328-dd2134da4fa7?crop=entropy&cs=srgb&fm=jpg&q=85',
      description: 'Premium quality marble and granite in various colors and patterns. Ideal for flooring, countertops, and decorative purposes.',
      types: ['White Marble', 'Italian Marble', 'Black Granite', 'Polished Granite', 'Natural Stone', 'Imported Marble'],
    },
    {
      icon: Droplet,
      title: 'Bathroom & Sanitaryware',
      subtitle: 'Modern & Stylish',
      image: 'https://images.unsplash.com/photo-1764475501545-d5cc9719af1a?crop=entropy&cs=srgb&fm=jpg&q=85',
      description: 'Complete bathroom solutions including sanitaryware, fittings, and accessories from trusted brands.',
      types: ['Wash Basins', 'Commodes', 'Faucets', 'Shower Systems', 'Bath Accessories', 'Bathroom Fittings'],
    },
    {
      icon: Wrench,
      title: 'Hardware & Accessories',
      subtitle: 'Durable & Reliable',
      image: 'https://images.unsplash.com/photo-1607811122037-0750dc8ddebc?crop=entropy&cs=srgb&fm=jpg&q=85',
      description: 'Quality hardware products for construction and interior needs including door fittings, handles, and more.',
      types: ['Door Handles', 'Hinges', 'Locks', 'Cabinet Hardware', 'Building Materials', 'Tools & Equipment'],
    },
    {
      icon: Building2,
      title: 'Interior Design Materials',
      subtitle: 'Complete Solutions',
      image: 'https://images.unsplash.com/photo-1759178459554-c27da3a5ecc6?crop=entropy&cs=srgb&fm=jpg&q=85',
      description: 'Everything you need for interior projects including wall panels, decorative items, and finishing materials.',
      types: ['Wall Panels', 'Decorative Items', 'Lighting Solutions', 'Paint & Finishes', 'Flooring Materials', 'Ceiling Solutions'],
    },
  ];

  return (
    <div className="pt-20 noise-texture">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden" data-testid="products-hero">
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
            data-testid="products-title"
          >
            Our Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-manrope text-lg text-white/90"
          >
            Premium Quality Materials for Every Project
          </motion.p>
        </div>
      </section>

      <AnimatedSection className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="space-y-16">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`product-category-${index}`}
                className="group relative overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500 border border-transparent hover:border-gold/30"
              >
                <div className={`grid grid-cols-1 ${index % 2 === 0 ? 'lg:grid-cols-5' : 'lg:grid-cols-5'} gap-0`}>
                  <div className={`${index % 2 === 0 ? 'lg:col-span-2' : 'lg:col-span-2 lg:order-2'} relative h-64 lg:h-auto overflow-hidden`}>
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-emerald text-white p-3 rounded-full">
                      <category.icon size={28} />
                    </div>
                  </div>
                  <div className={`${index % 2 === 0 ? 'lg:col-span-3' : 'lg:col-span-3 lg:order-1'} p-8 md:p-12 flex flex-col justify-center`}>
                    <h2 className="font-playfair font-bold text-3xl md:text-4xl text-charcoal mb-2">
                      {category.title}
                    </h2>
                    <p className="font-manrope text-sm text-emerald mb-4">{category.subtitle}</p>
                    <p className="font-manrope text-base text-gray-700 leading-relaxed mb-6">
                      {category.description}
                    </p>
                    <div className="mb-6">
                      <h3 className="font-playfair font-semibold text-lg text-charcoal mb-3">Available Types:</h3>
                      <div className="flex flex-wrap gap-2">
                        {category.types.map((type, i) => (
                          <span
                            key={i}
                            className="bg-marble px-4 py-2 text-sm font-manrope text-gray-700 border border-gray-200"
                          >
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <a
                        href={whatsappUrl(category.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid={`whatsapp-button-${index}`}
                        className="bg-emerald text-white px-6 py-3 font-manrope font-medium text-sm hover:bg-emerald/90 transition-colors duration-300"
                      >
                        WhatsApp Inquiry
                      </a>
                      <a
                        href="https://www.google.com/maps/place/MH+ENTERPRISES/@26.2429159,88.1626201,17z"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid={`visit-button-${index}`}
                        className="border border-charcoal text-charcoal px-6 py-3 font-manrope font-medium text-sm hover:bg-charcoal hover:text-white transition-all duration-300"
                      >
                        Visit Showroom
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24 md:py-32 bg-emerald text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl mb-6" data-testid="products-cta-title">
            Can't Find What You're Looking For?
          </h2>
          <p className="font-manrope text-lg mb-8 text-white/90">
            We stock a wide variety of products. Visit our showroom or contact us for specific requirements.
          </p>
          <a
            href={whatsappUrl('product inquiries')}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="products-cta-whatsapp"
            className="inline-block bg-white text-emerald px-8 py-4 font-manrope font-medium text-base hover:bg-gold hover:text-white transition-all duration-300"
          >
            Contact Us on WhatsApp
          </a>
        </div>
      </AnimatedSection>
    </div>
  );
}
