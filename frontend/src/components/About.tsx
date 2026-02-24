import { Star, Clock, Award, Users, Wrench } from 'lucide-react';

const highlights = [
  { icon: Clock, title: '20+ Years Experience', desc: 'Over two decades of hands-on expertise in home repairs and renovations.' },
  { icon: Star, title: '5-Star Rated', desc: 'Consistently top-rated by hundreds of satisfied homeowners.' },
  { icon: Award, title: 'Quality Guaranteed', desc: 'Every job backed by our 100% satisfaction guarantee.' },
  { icon: Users, title: 'Local & Trusted', desc: 'A proud member of the community, serving neighbors for over 20 years.' },
  { icon: Wrench, title: 'All Trades Covered', desc: 'From plumbing to electrical — one call handles it all.' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-snow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-body text-orange text-sm font-semibold tracking-widest uppercase mb-3">
            Who We Are
          </p>
          <h2 className="section-title text-ink mb-4">About Pro Fix Handyman</h2>
          <div className="w-16 h-1 bg-orange mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-ink uppercase tracking-wide mb-6">
              Your Trusted Home Repair Partner
            </h3>
            <p className="font-body text-ink leading-relaxed mb-5 font-medium">
              Pro Fix Handyman was built on a simple promise: deliver honest, high-quality work at a fair price. With over <strong className="text-orange font-bold">20 years of hands-on experience</strong>, we've helped hundreds of homeowners tackle everything from leaky faucets to full room renovations.
            </p>
            <p className="font-body text-ink leading-relaxed mb-5 font-medium">
              We believe every home deserves the best care. That's why we show up on time, communicate clearly, and never cut corners — no matter the size of the job.
            </p>
            <p className="font-body text-ink leading-relaxed font-medium">
              When you call Pro Fix Handyman, you're not just hiring a contractor — you're partnering with a craftsman who takes pride in every nail, pipe, and brushstroke.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mt-8">
              {['Background Checked', '20+ Yrs Experience'].map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1.5 border border-orange/60 text-orange font-body text-xs tracking-wider uppercase bg-orange-subtle font-semibold"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Founder Quote */}
          <div className="relative">
            <div className="bg-snow-off p-8 border-l-4 border-orange shadow-card">
              <div className="text-orange font-heading text-6xl leading-none mb-4 opacity-60">"</div>
              <blockquote className="font-body text-lg text-ink leading-relaxed italic mb-6 font-medium">
                I started Pro Fix Handyman because I saw too many homeowners getting overcharged for simple repairs. After 20+ years in the trades, I knew I could do better — and I've been proving it ever since.
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-orange flex items-center justify-center flex-shrink-0">
                  <span className="text-snow font-heading font-bold text-sm">PF</span>
                </div>
                <div>
                  <p className="font-heading font-bold text-ink text-sm uppercase tracking-wide">The Pro Fix Team</p>
                  <p className="font-body text-xs text-ink">Founder & Master Tradesman</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex items-start gap-4 p-6 bg-snow-off border border-border hover:border-orange/40 transition-colors duration-200"
            >
              <div className="w-10 h-10 bg-orange-subtle flex items-center justify-center flex-shrink-0">
                <Icon size={20} className="text-orange" />
              </div>
              <div>
                <h4 className="font-heading text-sm font-bold text-ink uppercase tracking-wide mb-1">
                  {title}
                </h4>
                <p className="font-body text-sm text-ink leading-relaxed font-medium">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
