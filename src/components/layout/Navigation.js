import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/products', label: 'Products' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/builders', label: 'For Builders' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-black/5 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3" data-testid="logo-link">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-emerald flex items-center justify-center">
                <span className="text-white font-bold text-xl font-playfair">MH</span>
              </div>
              <div className="ml-3">
                <div className="font-playfair font-bold text-xl text-charcoal tracking-tight">
                  MH ENTERPRISES
                </div>
                <div className="text-xs text-gray-500 font-manrope tracking-wide">
                  Premium Tiles & Interiors
                </div>
              </div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-testid={`nav-link-${link.label.toLowerCase().replace(' ', '-')}`}
                className={`font-manrope font-medium text-sm tracking-wide transition-colors duration-300 ${
                  location.pathname === link.to
                    ? 'text-emerald'
                    : 'text-gray-700 hover:text-emerald'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            data-testid="mobile-menu-toggle"
            className="lg:hidden text-charcoal p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-black/5"
            data-testid="mobile-menu"
          >
            <div className="px-6 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  data-testid={`mobile-nav-link-${link.label.toLowerCase().replace(' ', '-')}`}
                  className={`block py-2 font-manrope font-medium text-base ${
                    location.pathname === link.to
                      ? 'text-emerald'
                      : 'text-gray-700'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
