import { Breadcrumb } from '@/components/Breadcrumb';

export const metadata = {
  title: 'About Drew | Calgary AI Consultant — Nexus AI',
  description:
    'Solo AI-integration consultancy in Calgary, led by Drew. Pragmatic, secure, measurable outcomes for SMBs.',
};

export default function AboutPage() {
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || '/contact';
  const bookingExternal = bookingUrl.startsWith('http');
  return (
    <div className="min-h-screen">
      {/* Breadcrumb Navigation */}
      <Breadcrumb />

      <section id="about" className="section">
        {/* Hero Section */}
        <div className="container-wide max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-title">
            About Drew — Calgary AI Consultant
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto mb-8 px-4">
            Solo AI-integration consultancy for Calgary SMBs. I help teams ship
            useful assistants, automations, and analytics—fast, safe, and
            measurable.
          </p>
          <div className="flex justify-center gap-4 flex-wrap px-4">
            <div className="chip">
              <span className="text-sm font-medium">Based in Calgary, AB</span>
            </div>
            <div className="chip">
              <span className="text-sm font-medium">SMB Focus</span>
            </div>
            <div className="chip">
              <span className="text-sm font-medium">Hands-on Delivery</span>
            </div>
          </div>
        </div>
        {/* Mission & Vision */}
        <div className="container-wide grid md:grid-cols-2 gap-8 mb-20 px-4">
          <div className="card-glass relative overflow-hidden group hover:scale-105 cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold flex items-center gap-3 mb-4">
                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  🎯
                </span>
                Who I Am
              </h3>
              <p className="text-muted leading-relaxed">
                I'm Drew — a hands-on AI consultant helping Calgary businesses
                automate support, streamline ops, and turn data into decisions.
                I work directly with your team to deliver pragmatic, secure
                outcomes.
              </p>
            </div>
          </div>
          <div className="card-glass relative overflow-hidden group hover:scale-105 cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold flex items-center gap-3 mb-4">
                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  🔭
                </span>
                How I Work
              </h3>
              <p className="text-muted leading-relaxed">
                Start small, ship a pilot, measure impact, then scale.
                Human-in-the-loop by default, clear guardrails, and maintainable
                systems your team can own.
              </p>
            </div>
          </div>
        </div>

        {/* Company Story */}
        <div className="mb-20">
          <div className="container-wide text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Background</h2>
            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto px-4">
              Calgary-based, solo consultancy focused on high-impact AI
              integrations for SMBs — assistants, automations, and analytics
              that pay for themselves.
            </p>
          </div>
          <div className="container-wide grid lg:grid-cols-2 gap-12 items-center px-4">
            <div className="space-y-6">
              <p className="text-lg text-muted leading-relaxed">
                For the past decade, I've helped teams adopt AI to reduce
                busywork and improve customer experience. My focus is practical
                delivery over hype — ship value in weeks, not months, with clear
                safeguards.
              </p>
              <p className="text-lg text-muted leading-relaxed">
                Typical work: GPT assistants trained on your docs, automation
                pilots across tools, and dashboards that answer real operator
                questions. Vendor‑neutral, privacy‑aware, and built so your team
                can maintain it.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4 rounded-2xl bg-glass border border-glass-border backdrop-blur-md">
                  <div className="text-2xl font-bold text-primary mb-1">
                    Calgary
                  </div>
                  <div className="text-sm text-muted">Based</div>
                </div>
                <div className="text-center p-4 rounded-2xl bg-glass border border-glass-border backdrop-blur-md">
                  <div className="text-2xl font-bold text-secondary mb-1">
                    10+
                  </div>
                  <div className="text-sm text-muted">Years</div>
                </div>
                <div className="text-center p-4 rounded-2xl bg-glass border border-glass-border backdrop-blur-md">
                  <div className="text-2xl font-bold text-primary mb-1">
                    50+
                  </div>
                  <div className="text-sm text-muted">Projects</div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">
                What Sets Me Apart
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-1">🎯</span>
                  <div>
                    <h4 className="font-semibold text-ink mb-1">Local Focus</h4>
                    <p className="text-muted text-sm">
                      Calgary-based with deep understanding of local business
                      challenges and opportunities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-secondary text-xl mt-1">⚡</span>
                  <div>
                    <h4 className="font-semibold text-ink mb-1">
                      Fast Delivery
                    </h4>
                    <p className="text-muted text-sm">
                      Ship working solutions in weeks, not months. Start with
                      pilots, scale what works.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-1">🔒</span>
                  <div>
                    <h4 className="font-semibold text-ink mb-1">
                      Security First
                    </h4>
                    <p className="text-muted text-sm">
                      Enterprise-grade security and privacy controls built into
                      every solution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="container-wide text-center">
          <div className="card-glass max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted mb-6">
              Let's discuss how AI can transform your business operations and
              customer experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={bookingUrl}
                target={bookingExternal ? '_blank' : undefined}
                rel={bookingExternal ? 'noopener noreferrer' : undefined}
                className="btn-primary min-h-[44px] justify-center"
                aria-label="Book a consultation call"
              >
                Book a Call <span aria-hidden="true">→</span>
              </a>
              <a
                href="/contact"
                className="btn-outline min-h-[44px] justify-center"
                aria-label="Send us a message"
              >
                Send Message
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
