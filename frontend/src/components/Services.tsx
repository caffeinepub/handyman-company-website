import { Wrench, Zap, Hammer, Paintbrush, Home, Droplets, TreePine, ShieldCheck, MapPin } from 'lucide-react';

const services = [
  {
    icon: Droplets,
    title: 'Plumbing',
    description: 'Leak repairs, pipe installations, faucet replacements, and drain cleaning. We handle all your plumbing needs quickly and efficiently.',
    iconClass: 'text-blue-600',
    bgClass: 'bg-blue-50',
  },
  {
    icon: Zap,
    title: 'Electrical',
    description: 'Outlet installations, light fixture replacements, switch repairs, and minor electrical work performed safely by experienced professionals.',
    iconClass: 'text-amber-600',
    bgClass: 'bg-amber-50',
  },
  {
    icon: Hammer,
    title: 'Carpentry',
    description: 'Custom shelving, door repairs, deck maintenance, trim work, and furniture assembly. Quality craftsmanship on every project.',
    iconClass: 'text-orange',
    bgClass: 'bg-orange-subtle',
  },
  {
    icon: Paintbrush,
    title: 'Painting',
    description: 'Interior and exterior painting, touch-ups, and staining. We prep, prime, and paint for a flawless, long-lasting finish.',
    iconClass: 'text-green-700',
    bgClass: 'bg-green-50',
  },
  {
    icon: Home,
    title: 'General Repairs',
    description: 'Drywall patching, tile repairs, caulking, weatherstripping, and all the small fixes that keep your home in top shape.',
    iconClass: 'text-ink',
    bgClass: 'bg-snow-gray',
  },
  {
    icon: TreePine,
    title: 'Outdoor & Yard',
    description: 'Fence repairs, deck staining, gutter cleaning, and exterior maintenance to keep your property looking its best year-round.',
    iconClass: 'text-emerald-700',
    bgClass: 'bg-emerald-50',
  },
  {
    icon: Wrench,
    title: 'Appliance Install',
    description: 'Dishwasher, washer/dryer, and other appliance installations done right — properly connected, leveled, and tested.',
    iconClass: 'text-slate-700',
    bgClass: 'bg-slate-50',
  },
  {
    icon: ShieldCheck,
    title: 'Home Inspection',
    description: 'Pre-sale or maintenance inspections to identify issues before they become costly problems. Peace of mind for homeowners.',
    iconClass: 'text-orange',
    bgClass: 'bg-orange-subtle',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-snow-off">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="font-body text-orange text-sm font-semibold tracking-widest uppercase mb-3">
            What We Do
          </p>
          <h2 className="section-title text-ink mb-4">Our Services</h2>
          <div className="w-16 h-1 bg-orange mx-auto mb-6" />
          <p className="font-body text-ink max-w-2xl mx-auto text-base leading-relaxed font-medium">
            We offer a comprehensive range of handyman services to keep your home running smoothly. No job is too small — we take pride in every task we complete.
          </p>
        </div>

        {/* Service Area Banner */}
        <div className="flex items-center justify-center mb-12">
          <div className="inline-flex items-center gap-3 bg-orange px-6 py-3 shadow-md">
            <MapPin size={18} className="text-snow flex-shrink-0" />
            <span className="font-heading font-bold text-snow text-sm tracking-wider uppercase">
              Serving Clients from Philadelphia to New Jersey
            </span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-snow border border-border p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 cursor-default hover:border-orange/40"
              >
                {/* Icon */}
                <div className={`w-12 h-12 ${service.bgClass} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={24} className={service.iconClass} />
                </div>

                {/* Title */}
                <h3 className="font-heading text-lg font-semibold text-ink uppercase tracking-wide mb-2">
                  {service.title}
                </h3>

                {/* Divider */}
                <div className="w-8 h-0.5 bg-orange mb-3 group-hover:w-12 transition-all duration-300" />

                {/* Description */}
                <p className="font-body text-sm text-ink leading-relaxed font-medium">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="font-body text-ink font-medium mb-4">
            Don't see what you need? We handle many more tasks!
          </p>
          <button
            onClick={() => {
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-orange text-orange font-heading font-bold text-sm tracking-wider uppercase hover:bg-orange hover:text-snow transition-all duration-200"
          >
            <Wrench size={16} />
            Ask About Your Project
          </button>
        </div>
      </div>
    </section>
  );
}
