import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

const initialForm: FormData = {
  name: '',
  phone: '',
  email: '',
  service: '',
  message: '',
};

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
    href: 'mailto:profxhandyman@gmail.com',
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
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setForm(initialForm);
    setSubmitted(false);
  };

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
            Tell us about your project and we'll get back to you within 24 hours with a free, no-obligation estimate.
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
          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-16 h-16 bg-orange-subtle flex items-center justify-center mb-6">
                  <CheckCircle size={32} className="text-orange" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-ink uppercase tracking-wide mb-3">
                  Message Sent!
                </h3>
                <p className="font-body text-ink-light max-w-sm mb-8 leading-relaxed font-medium">
                  Thanks for reaching out! We'll review your request and get back to you within 24 hours.
                </p>
                <button
                  onClick={handleReset}
                  className="px-6 py-3 bg-orange text-snow font-heading font-bold text-sm tracking-wider uppercase hover:bg-orange-dark transition-colors duration-200"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="font-heading text-xs font-bold text-ink uppercase tracking-wider">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                      className="border-border bg-snow text-ink placeholder:text-ink-muted focus:border-orange focus-visible:ring-orange/30 font-body"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="phone" className="font-heading text-xs font-bold text-ink uppercase tracking-wider">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(555) 000-0000"
                      className="border-border bg-snow text-ink placeholder:text-ink-muted focus:border-orange focus-visible:ring-orange/30 font-body"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="email" className="font-heading text-xs font-bold text-ink uppercase tracking-wider">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="border-border bg-snow text-ink placeholder:text-ink-muted focus:border-orange focus-visible:ring-orange/30 font-body"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="service" className="font-heading text-xs font-bold text-ink uppercase tracking-wider">
                    Service Needed
                  </Label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full h-10 px-3 py-2 border border-border bg-snow text-ink font-body text-sm focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/30 transition-colors"
                  >
                    <option value="">Select a service...</option>
                    <option value="plumbing">Plumbing</option>
                    <option value="electrical">Electrical</option>
                    <option value="carpentry">Carpentry</option>
                    <option value="painting">Painting</option>
                    <option value="general">General Repairs</option>
                    <option value="outdoor">Outdoor & Yard</option>
                    <option value="appliance">Appliance Installation</option>
                    <option value="inspection">Home Inspection</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="message" className="font-heading text-xs font-bold text-ink uppercase tracking-wider">
                    Project Details *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder="Describe your project or repair needs..."
                    rows={5}
                    className="border-border bg-snow text-ink placeholder:text-ink-muted focus:border-orange focus-visible:ring-orange/30 font-body resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-orange text-snow font-heading font-bold text-sm tracking-wider uppercase hover:bg-orange-dark transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-snow/40 border-t-snow rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send My Request
                    </>
                  )}
                </button>
              </form>
            )}
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
