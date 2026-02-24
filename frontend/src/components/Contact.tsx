import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '267-787-0190',
    href: 'tel:2677870190',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'profxhandyman@gmail.com',
    href: null,
  },
  {
    icon: MapPin,
    label: 'Service Area',
    value: 'Philadelphia, PA to New Jersey & surrounding areas',
    href: null,
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon–Sat: 7am–7pm | Sun: Emergency Only',
    href: null,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-snow-off">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-body text-orange text-sm font-semibold tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="section-title text-ink mb-4">Request a Free Quote</h2>
          <div className="w-16 h-1 bg-orange mx-auto mb-6" />
          <p className="font-body text-ink-light max-w-xl mx-auto text-base leading-relaxed font-medium">
            Ready to get started? Reach out directly and we'll get back to you within 24 hours with a free, no-obligation estimate.
          </p>
          {/* Service Area Note */}
          <div className="inline-flex items-center gap-2 mt-5 px-4 py-2 border border-orange/60 bg-orange-subtle">
            <MapPin size={14} className="text-orange flex-shrink-0" />
            <span className="font-body text-sm text-orange font-semibold">
              Proudly serving clients from Philadelphia, PA up to New Jersey
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Quote CTA */}
          <div className="lg:col-span-3 flex flex-col justify-center">
            <div className="bg-snow border border-border p-10 shadow-xs text-center flex flex-col items-center gap-6">
              {/* Icon */}
              <div className="w-20 h-20 bg-orange-subtle flex items-center justify-center">
                <Mail size={36} className="text-orange" />
              </div>

              {/* Heading */}
              <div>
                <h3 className="font-heading text-2xl font-bold text-ink uppercase tracking-wide mb-3">
                  Email Us for a Free Quote
                </h3>
                <p className="font-body text-ink-light text-base leading-relaxed font-medium max-w-md">
                  Simply send us an email describing your project and we'll respond with a free, no-obligation estimate — usually within 24 hours.
                </p>
              </div>

              {/* Email Display (plain text) */}
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-orange-subtle border border-orange/30">
                <Mail size={18} className="text-orange flex-shrink-0" />
                <span className="font-heading font-bold text-base tracking-wider uppercase text-ink">
                  profxhandyman@gmail.com
                </span>
              </div>

              {/* Divider */}
              <div className="w-full flex items-center gap-4">
                <div className="flex-1 h-px bg-border" />
                <span className="font-body text-xs text-ink-muted uppercase tracking-widest font-medium">or call us directly</span>
                <div className="flex-1 h-px bg-border" />
              </div>

              {/* Phone CTA */}
              <a
                href="tel:2677870190"
                className="inline-flex items-center gap-2 font-heading text-xl font-bold text-orange hover:text-orange-dark transition-colors duration-200 tracking-wide"
              >
                <Phone size={20} />
                267-787-0190
              </a>
            </div>
          </div>

          {/* Contact Info Panel */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-snow border border-border p-6 shadow-xs">
              <h3 className="font-heading text-base font-bold text-ink uppercase tracking-wide mb-5">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-orange-subtle flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={15} className="text-orange" />
                    </div>
                    <div>
                      <p className="font-heading text-xs font-bold text-ink uppercase tracking-wider mb-0.5">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="font-body text-sm text-ink-light hover:text-orange transition-colors duration-200 font-medium"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="font-body text-sm text-ink-light font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Coverage Area Block */}
            <div className="bg-orange p-6 shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <MapPin size={16} className="text-snow flex-shrink-0" />
                <h3 className="font-heading text-sm font-bold text-snow uppercase tracking-wide">
                  Coverage Area
                </h3>
              </div>
              <p className="font-body text-sm text-snow leading-relaxed font-medium">
                We proudly serve homeowners and businesses across <strong className="font-bold">Philadelphia, PA</strong> and all the way up through <strong className="font-bold">New Jersey</strong>, including surrounding suburbs and communities.
              </p>
            </div>

            {/* Emergency Notice */}
            <div className="bg-snow border-l-4 border-orange p-5 shadow-xs">
              <p className="font-heading text-xs font-bold text-ink uppercase tracking-wider mb-1">
                Emergency Services
              </p>
              <p className="font-body text-sm text-ink-light font-medium">
                Need urgent help? Call us directly at{' '}
                <a href="tel:2677870190" className="text-orange font-bold hover:text-orange-dark transition-colors">
                  267-787-0190
                </a>{' '}
                — we offer emergency services on Sundays.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
