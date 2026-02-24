import { ArrowDown, Phone } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    const el = document.querySelector('#services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/hero-banner.dim_1600x700.png"
          alt="Handyman workshop"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        {/* Strong white overlay so dark text is always crisp */}
        <div className="absolute inset-0 bg-snow/88" />
        {/* Subtle orange gradient at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-orange/8 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-orange/10 border border-orange/40 text-orange px-4 py-1.5 mb-8 text-xs font-body font-semibold tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-orange inline-block" />
          Licensed & Insured Professionals
        </div>

        {/* Headline */}
        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-ink uppercase leading-none tracking-wide mb-4">
          Pro Fix
          <span className="block text-orange">Handyman</span>
        </h1>

        {/* Tagline */}
        <p className="font-body text-lg sm:text-xl text-white max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          From small repairs to major renovations — we get the job done right, on time, and within budget. Serving the community with pride for over 20 years.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToContact}
            className="group px-8 py-4 bg-orange text-snow font-heading font-bold text-base tracking-wider uppercase hover:bg-orange-dark transition-all duration-200 shadow-orange-glow hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2"
          >
            Get a Free Quote
            <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform duration-200" />
          </button>
          <a
            href="tel:2677870190"
            className="group px-8 py-4 border-2 border-ink/60 text-ink font-heading font-bold text-base tracking-wider uppercase hover:border-orange hover:text-orange transition-all duration-200 flex items-center gap-2"
          >
            <Phone size={18} />
            267-787-0190
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: '20+', label: 'Years Experience' },
            { value: '500+', label: 'Jobs Completed' },
            { value: '100%', label: 'Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-3xl font-bold text-orange">{stat.value}</div>
              <div className="font-body text-xs text-white font-semibold uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white hover:text-orange transition-colors duration-200 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
}
