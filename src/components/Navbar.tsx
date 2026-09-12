import { useState, useEffect } from 'react';
import { Menu, X, Box } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Features', href: '#features' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Demo', href: '#demo' },
  { name: 'Screenshots', href: '#screenshots' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = navLinks.map(link => link.href.substring(1));
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 200)) {
          current = section;
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 pointer-events-none">
      <header 
        className={`mx-auto max-w-5xl transition-all duration-300 rounded-2xl pointer-events-auto ${
          isScrolled 
            ? 'bg-elevated/70 backdrop-blur-lg border border-borderDefault py-3 shadow-2xl' 
            : 'bg-transparent py-4 border border-transparent'
        }`}
      >
        <div className="px-5 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" aria-label="Smart AR Measure – go to top" className="flex items-center gap-3 group">
            <div className="text-primaryText group-hover:text-accent transition-colors">
              <Box size={24} strokeWidth={2.5} aria-hidden="true" />
            </div>
            <span className="font-bold text-primaryText tracking-tight hidden sm:block">Smart AR Measure</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a 
                  key={link.name} 
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-accent' 
                      : 'text-secondaryText hover:text-primaryText'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-secondaryText hover:text-primaryText transition-colors p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              id="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-[calc(100%+12px)] left-0 right-0 bg-elevated/95 backdrop-blur-xl border border-borderDefault rounded-2xl shadow-2xl md:hidden overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-6">
                <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.href.substring(1);
                    return (
                      <a 
                        key={link.name} 
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        aria-current={isActive ? 'page' : undefined}
                        className={`text-lg font-semibold min-h-[44px] flex items-center ${
                          isActive
                            ? 'text-accent' 
                            : 'text-secondaryText hover:text-primaryText'
                        }`}
                      >
                        {link.name}
                      </a>
                    );
                  })}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
