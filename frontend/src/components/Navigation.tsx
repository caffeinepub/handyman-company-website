import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-snow shadow-md border-b border-border'
          : 'bg-snow/98 border-b border-border'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-orange rounded flex items-center justify-center flex-shrink-0">
              <img
                src="/assets/generated/logo-icon.dim_256x256.png"
                alt="Pro Fix Handyman Logo"
                className="w-8 h-8 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML =
                    '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>';
                }}
              />
            </div>
            <div className="text-left">
              <span className="block font-heading text-xl font-bold text-ink leading-none tracking-wider">
                PRO FIX
              </span>
              <span className="block text-orange text-xs font-body tracking-widest uppercase font-semibold">
                Handyman
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 font-heading text-sm font-semibold tracking-wider uppercase text-ink-light hover:text-orange transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-orange transition-all duration-200 group-hover:w-4/5" />
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className="ml-4 px-5 py-2 bg-orange text-snow font-heading font-bold text-sm tracking-wider uppercase hover:bg-orange-dark transition-colors duration-200"
            >
              Get a Quote
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-ink hover:text-orange transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-snow border-t border-border px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left px-4 py-3 font-heading text-sm font-semibold tracking-wider uppercase text-ink-light hover:text-orange hover:bg-snow-off transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#contact')}
            className="mt-2 px-4 py-3 bg-orange text-snow font-heading font-bold text-sm tracking-wider uppercase hover:bg-orange-dark transition-colors duration-200 text-center"
          >
            Get a Free Quote
          </button>
        </div>
      </div>
    </header>
  );
}
