
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-primary">Dragon</span>
              <span className="text-foreground ml-1">China</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              On-the-ground expertise across China. Connecting European companies with real business professionals. Direct, no-jargon approach to China business success.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Home
              </Link>
              <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Services
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                About
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Contact</h3>
            <div className="flex flex-col space-y-3">
              <div className="flex items-start space-x-2 text-sm">
                <Mail className="text-primary mt-0.5 flex-shrink-0" size={16} />
                <span className="text-muted-foreground">contact@dragonchina.com</span>
              </div>
              <div className="flex items-start space-x-2 text-sm">
                <MapPin className="text-primary mt-0.5 flex-shrink-0" size={16} />
                <span className="text-muted-foreground">
                  Hong Kong • Shenzhen • Ningbo • Shanghai
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Dragon China. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
