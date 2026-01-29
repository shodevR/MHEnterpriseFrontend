import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Heart, Users, TrendingUp } from 'lucide-react';

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

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    { icon: Target, title: 'Quality First', desc: 'We never compromise on the quality of our products' },
    { icon: Heart, title: 'Customer Care', desc: 'Your satisfaction is our top priority' },
    { icon: Users, title: 'Expert Team', desc: 'Knowledgeable staff ready to assist you' },
    { icon: TrendingUp, title: 'Continuous Growth', desc: 'Always expanding our product range' },
  ];

  return (
    <div className="pt-20 noise-texture">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden" data-testid="about-hero">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%), url('https://images.pexels.com/photos/32046747/pexels-photo-32046747.jpeg')`,
          }}
        />
        <div className="relative z-10 text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-playfair font-bold text-4xl sm:text-5xl lg:text-6xl"
            data-testid="about-title"
          >
            About MH ENTERPRISES
          </motion.h1>
        </div>
      </section>

      <AnimatedSection className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-charcoal mb-8" data-testid="our-story-title">
            Our Story
          </h2>
          <div className="space-y-6 font-manrope text-base text-gray-700 leading-relaxed">
            <p>
              MH ENTERPRISES is a trusted destination for tiles, marbles, hardware, and interior materials in Islampur, West Bengal. Located conveniently on NH-31 at Taranjibari, we have been serving the community with dedication and quality for years.
            </p>
            <p>
              We pride ourselves on offering a comprehensive range of products that cater to homeowners, builders, contractors, and interior designers. Whether you're renovating your home, working on a large-scale construction project, or seeking premium materials for an interior design concept, we have everything you need under one roof.
            </p>
            <p>
              Our commitment goes beyond just selling products. We believe in building long-term relationships with our customers by providing honest guidance, competitive pricing, and exceptional service. Our knowledgeable team is always ready to help you make the right choices for your projects.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-charcoal mb-16 text-center" data-testid="our-values-title">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`value-card-${index}`}
                className="text-center"
              >
                <div className="bg-emerald/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-emerald" />
                </div>
                <h3 className="font-playfair font-semibold text-xl text-charcoal mb-2">
                  {value.title}
                </h3>
                <p className="font-manrope text-sm text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-charcoal mb-8" data-testid="who-we-serve-title">
            Who We Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-marble p-8">
              <h3 className="font-playfair font-semibold text-xl text-charcoal mb-3">
                Homeowners
              </h3>
              <p className="font-manrope text-sm text-gray-700 leading-relaxed">
                Transform your living spaces with our wide selection of tiles, marbles, and interior materials. We help you bring your vision to life with quality products and expert advice.
              </p>
            </div>
            <div className="bg-marble p-8">
              <h3 className="font-playfair font-semibold text-xl text-charcoal mb-3">
                Builders & Contractors
              </h3>
              <p className="font-manrope text-sm text-gray-700 leading-relaxed">
                We support your large-scale projects with bulk supply options, consistent stock availability, and competitive pricing. Count on us for timely delivery and quality assurance.
              </p>
            </div>
            <div className="bg-marble p-8">
              <h3 className="font-playfair font-semibold text-xl text-charcoal mb-3">
                Interior Designers
              </h3>
              <p className="font-manrope text-sm text-gray-700 leading-relaxed">
                Discover premium materials that match your creative vision. Our diverse range allows you to explore textures, colors, and finishes that elevate your design concepts.
              </p>
            </div>
            <div className="bg-marble p-8">
              <h3 className="font-playfair font-semibold text-xl text-charcoal mb-3">
                Local Community
              </h3>
              <p className="font-manrope text-sm text-gray-700 leading-relaxed">
                As a local business, we're committed to serving Islampur and nearby areas with integrity, reliability, and a personal touch that larger chains can't match.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
