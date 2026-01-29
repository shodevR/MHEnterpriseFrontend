import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const galleryItems = [
    {
      category: 'Showroom Interior',
      images: [
        { url: 'https://images.pexels.com/photos/32046747/pexels-photo-32046747.jpeg', title: 'Showroom Display' },
        { url: 'https://images.pexels.com/photos/4249687/pexels-photo-4249687.jpeg', title: 'Tile Collections' },
      ],
    },
    {
      category: 'Marble & Granite',
      images: [
        { url: 'https://images.unsplash.com/photo-1719107647328-dd2134da4fa7?crop=entropy&cs=srgb&fm=jpg&q=85', title: 'Premium Marble' },
        { url: 'https://images.unsplash.com/photo-1759178459554-c27da3a5ecc6?crop=entropy&cs=srgb&fm=jpg&q=85', title: 'Marble Texture' },
      ],
    },
    {
      category: 'Bathroom Setups',
      images: [
        { url: 'https://images.unsplash.com/photo-1764475501545-d5cc9719af1a?crop=entropy&cs=srgb&fm=jpg&q=85', title: 'Modern Bathroom' },
        { url: 'https://images.unsplash.com/photo-1758548157466-7c454382035a?crop=entropy&cs=srgb&fm=jpg&q=85', title: 'Luxury Bathroom' },
      ],
    },
    {
      category: 'Hardware & Fittings',
      images: [
        { url: 'https://images.unsplash.com/photo-1607811122037-0750dc8ddebc?crop=entropy&cs=srgb&fm=jpg&q=85', title: 'Door Hardware' },
        { url: 'https://images.pexels.com/photos/4249687/pexels-photo-4249687.jpeg', title: 'Fittings Display' },
      ],
    },
  ];

  return (
    <div className="pt-20 noise-texture">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden" data-testid="gallery-hero">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.7) 100%), url('https://images.unsplash.com/photo-1719107647328-dd2134da4fa7?crop=entropy&cs=srgb&fm=jpg&q=85')`,
          }}
        />
        <div className="relative z-10 text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-playfair font-bold text-4xl sm:text-5xl lg:text-6xl mb-4"
            data-testid="gallery-title"
          >
            Our Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-manrope text-lg text-white/90"
          >
            Explore Our Collection & Showroom
          </motion.p>
        </div>
      </section>

      <div className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {galleryItems.map((section, sectionIndex) => (
            <AnimatedSection key={sectionIndex} className="mb-20">
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-charcoal mb-12" data-testid={`gallery-category-${sectionIndex}`}>
                {section.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {section.images.map((image, imageIndex) => (
                  <motion.div
                    key={imageIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: imageIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    data-testid={`gallery-image-${sectionIndex}-${imageIndex}`}
                    className="group relative overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
                    onClick={() => setSelectedImage(image)}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={image.url}
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <p className="font-playfair font-semibold text-white text-xl p-6">
                        {image.title}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          data-testid="gallery-modal"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="max-w-6xl w-full"
          >
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[90vh] object-contain"
            />
            <p className="text-white text-center mt-4 font-playfair text-2xl">
              {selectedImage.title}
            </p>
          </motion.div>
        </div>
      )}

      <AnimatedSection className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-charcoal mb-6" data-testid="gallery-cta-title">
            Visit Our Showroom
          </h2>
          <p className="font-manrope text-base text-gray-700 mb-8 leading-relaxed">
            See our complete collection in person. Our showroom showcases the full range of tiles, marbles, sanitaryware, and interior materials.
          </p>
          <a
            href="https://www.google.com/maps/place/MH+ENTERPRISES/@26.2429159,88.1626201,17z"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="gallery-visit-button"
            className="inline-block bg-emerald text-white px-8 py-4 font-manrope font-medium text-base hover:bg-emerald/90 transition-colors duration-300"
          >
            Get Directions
          </a>
        </div>
      </AnimatedSection>
    </div>
  );
}
