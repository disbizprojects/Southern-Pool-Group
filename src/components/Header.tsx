import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, User } from 'lucide-react';
import logo from 'figma:asset/31d98d8fdebbd5d47bc479f6e9cd6a7b8f22c109.png';

interface HeaderProps {
  isLoggedIn: boolean;
}

export function Header({ isLoggedIn }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Bar with CTA */}
      <div className="bg-accent-blue text-white py-2">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span className="text-sm">(555) 123-4567</span>
          </div>
          <Link 
            to="/contact" 
            className="bg-white text-accent-blue px-4 py-1 rounded hover:bg-light-grey transition-colors text-sm"
          >
            Get Free Quote
          </Link>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="container-custom py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img src={logo} alt="Southern Pool Group" className="h-12 md:h-16" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`hover:text-accent-blue ${
                    isActive(link.path) ? 'text-accent-blue' : 'text-charcoal'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              {isLoggedIn && (
                <Link
                  to="/dashboard"
                  className="flex items-center gap-2 bg-charcoal text-white px-6 py-2 rounded hover:bg-dark-grey"
                >
                  <User className="w-4 h-4" />
                  Dashboard
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-charcoal"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t pt-4">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`hover:text-accent-blue ${
                      isActive(link.path) ? 'text-accent-blue' : 'text-charcoal'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                {isLoggedIn && (
                  <Link
                    to="/dashboard"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2 bg-charcoal text-white px-6 py-2 rounded hover:bg-dark-grey w-fit"
                  >
                    <User className="w-4 h-4" />
                    Dashboard
                  </Link>
                )}
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
