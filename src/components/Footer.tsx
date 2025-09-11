import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Osbert SHS</span>
            </div>
            <p className="text-gray-300 text-sm">
              Shaping bright futures through quality education and character development in Accra, Ghana.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://wa.me/233553306538" className="hover:text-blue-400 transition-colors">
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" onClick={handleLinkClick} className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/about" onClick={handleLinkClick} className="hover:text-blue-400 transition-colors">About</Link></li>
              <li><Link to="/academics" onClick={handleLinkClick} className="hover:text-blue-400 transition-colors">Academics</Link></li>
              <li><Link to="/admissions" onClick={handleLinkClick} className="hover:text-blue-400 transition-colors">Admissions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/e-learning" onClick={handleLinkClick} className="hover:text-blue-400 transition-colors">E-Learning</Link></li>
              <li><Link to="/gallery" onClick={handleLinkClick} className="hover:text-blue-400 transition-colors">Gallery</Link></li>
              <li><Link to="/news-events" onClick={handleLinkClick} className="hover:text-blue-400 transition-colors">News & Events</Link></li>
              <li><Link to="/contact" onClick={handleLinkClick} className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Ashongman Estate, Accra-Ghana</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <div>
                  <div>0553306538</div>
                  <div>0266077995</div>
                </div>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@osbertshs.edu.gh</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Osbert Senior High School. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;