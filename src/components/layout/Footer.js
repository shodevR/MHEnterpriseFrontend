import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-charcoal text-white py-16 mt-32" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-emerald flex items-center justify-center">
                <span className="text-white font-bold text-xl font-playfair">MH</span>
              </div>
              <div className="ml-3">
                <div className="font-playfair font-bold text-lg text-white">
                  MH ENTERPRISES
                </div>
              </div>
            </div>
            <p className="text-gray-400 font-manrope text-sm leading-relaxed">
              Your trusted destination for premium tiles, marbles, hardware, and interior materials in Islampur.
            </p>
          </div>

          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-gold transition-colors duration-300 text-sm" data-testid="footer-link-home">
                Home
              </Link>
              <Link to="/about" className="block text-gray-400 hover:text-gold transition-colors duration-300 text-sm" data-testid="footer-link-about">
                About Us
              </Link>
              <Link to="/products" className="block text-gray-400 hover:text-gold transition-colors duration-300 text-sm" data-testid="footer-link-products">
                Products
              </Link>
              <Link to="/gallery" className="block text-gray-400 hover:text-gold transition-colors duration-300 text-sm" data-testid="footer-link-gallery">
                Gallery
              </Link>
              <Link to="/contact" className="block text-gray-400 hover:text-gold transition-colors duration-300 text-sm" data-testid="footer-link-contact">
                Contact
              </Link>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-400 text-sm">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>Taranjibari, Islampur NH-31<br />Islampur, West Bengal 733202</span>
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <a href="tel:+918617895132" className="hover:text-gold transition-colors duration-300">
                  +91 86178 95132
                </a>
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <Clock size={18} className="mr-2 flex-shrink-0" />
                <span>Mon-Sat: 9 AM - 8 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="social-facebook"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="social-instagram"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <p className="text-center text-gray-400 text-sm font-manrope">
            © {new Date().getFullYear()} MH ENTERPRISES. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
