import { Phone, Mail, MapPin, Wrench, Heart } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  'Plumbing',
  'Electrical',
  'Carpentry',
  'Painting',
  'General Repairs',
  'Outdoor & Yard',
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const appId = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'handypro-website'
  );

  return (
    <footer className="bg-snow-off border-t border-border">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-orange flex items-center justify-center flex-shrink-0">
                <Wrench size={20} className="text-snow" />
              </div>
              <div>
                <span className="block font-heading text-xl font-bold text-ink tracking-wider uppercase leading-none">
                  PRO FIX
                </span>
                <span className="block text-orange text-xs font-body tracking-widest uppercase font-semibold">
                  Handyman
                </span>
              </div>
            </div>
            <p className="font-body text-sm leading-relaxed text-ink font-medium mb-6">
              Your trusted local handyman service. Quality work, honest pricing, and a commitment to your satisfaction — backed by 20+ years of experience.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="tel:2677870190"
                className="inline-flex items-center gap-2 font-body text-sm text-ink hover:text-orange transition-colors duration-200 font-medium"
              >
                <Phone size={14} className="text-orange" />
                267-787-0190
              </a>
              <a
                href="mailto:profxhandyman@gmail.com"
                className="inline-flex items-center gap-2 font-body text-sm text-ink hover:text-orange transition-colors duration-200 font-medium"
              >
                <Mail size={14} className="text-orange" />
                profxhandyman@gmail.com
              </a>
              <span className="inline-flex items-start gap-2 font-body text-sm text-ink font-medium">
                <MapPin size={14} className="text-orange mt-0.5 flex-shrink-0" />
                Metro City & Surrounding Areas
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-bold text-ink uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="font-body text-sm text-ink hover:text-orange transition-colors duration-200 flex items-center gap-2 group font-medium"
                  >
                    <span className="w-3 h-px bg-orange/50 group-hover:w-5 group-hover:bg-orange transition-all duration-200" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-sm font-bold text-ink uppercase tracking-wider mb-5">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => handleNavClick('#services')}
                    className="font-body text-sm text-ink hover:text-orange transition-colors duration-200 flex items-center gap-2 group font-medium"
                  >
                    <span className="w-3 h-px bg-orange/50 group-hover:w-5 group-hover:bg-orange transition-all duration-200" />
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & CTA */}
          <div>
            <h4 className="font-heading text-sm font-bold text-ink uppercase tracking-wider mb-5">
              Business Hours
            </h4>
            <ul className="space-y-2 font-body text-sm mb-6">
              <li className="flex justify-between gap-4">
                <span className="text-ink font-medium">Monday – Friday</span>
                <span className="text-ink font-semibold">7am – 7pm</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="text-ink font-medium">Saturday</span>
                <span className="text-ink font-semibold">8am – 5pm</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="text-ink font-medium">Sunday</span>
                <span className="text-orange font-bold">Emergency Only</span>
              </li>
            </ul>
            <button
              onClick={() => handleNavClick('#contact')}
              className="w-full py-3 bg-orange text-snow font-heading font-bold text-xs tracking-wider uppercase hover:bg-orange-dark transition-colors duration-200"
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-ink font-medium">
            © {new Date().getFullYear()} Pro Fix Handyman. All rights reserved.
          </p>
          <p className="font-body text-xs text-ink font-medium flex items-center gap-1">
            Built with{' '}
            <Heart size={11} className="text-orange fill-orange" />{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange hover:text-orange-dark transition-colors duration-200 font-semibold"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
