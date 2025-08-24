 

export const metadata = {
  title: 'About Drew | Calgary AI Consultant — Nexus AI',
  description: 'Solo AI-integration consultancy in Calgary, led by Drew. Pragmatic, secure, measurable outcomes for SMBs.',
};

export default function AboutPage() {
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || '/contact';
  const bookingExternal = bookingUrl.startsWith('http');
  return (
    <section id="about" className="section">
      {/* Hero Section */}
      <div className="container-wide max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-title">
          About Drew — Calgary AI Consultant
        </h1>
        <p className="text-xl text-muted max-w-3xl mx-auto mb-8">
          Solo AI-integration consultancy for Calgary SMBs. I help teams ship useful assistants, automations, and analytics—fast, safe, and measurable.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
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
      <div className="container-wide grid md:grid-cols-2 gap-8 mb-20">
        <div className="card-glass relative overflow-hidden group hover:scale-105 cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold flex items-center gap-3 mb-4">
              <span className="text-3xl group-hover:scale-110 transition-transform duration-300">🎯</span>
              Who I Am
            </h3>
            <p className="text-muted leading-relaxed">
              I'm Drew — a hands-on AI consultant helping Calgary businesses automate support, streamline ops, and turn data into decisions. I work directly with your team to deliver pragmatic, secure outcomes.
            </p>
          </div>
        </div>
        <div className="card-glass relative overflow-hidden group hover:scale-105 cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold flex items-center gap-3 mb-4">
              <span className="text-3xl group-hover:scale-110 transition-transform duration-300">🔭</span>
              How I Work
            </h3>
            <p className="text-muted leading-relaxed">
              Start small, ship a pilot, measure impact, then scale. Human-in-the-loop by default, clear guardrails, and maintainable systems your team can own.
            </p>
          </div>
        </div>
      </div>

      {/* Company Story */}
      <div className="mb-20">
        <div className="container-wide text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Background</h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Calgary-based, solo consultancy focused on high-impact AI integrations for SMBs — assistants, automations, and analytics that pay for themselves.
          </p>
        </div>
        <div className="container-wide grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted leading-relaxed">
              For the past decade, I've helped teams adopt AI to reduce busywork and improve customer experience. My focus is practical delivery over hype — ship value in weeks, not months, with clear safeguards.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              Typical work: GPT assistants trained on your docs, automation pilots across tools, and dashboards that answer real operator questions. Vendor‑neutral, privacy‑aware, and built so your team can maintain it.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 rounded-2xl bg-glass border border-glass-border backdrop-blur-md">
                <div className="text-2xl font-bold text-primary mb-1">Calgary</div>
                <div className="text-sm text-muted">Based</div>
              </div>
              <div className="text-center p-4 rounded-2xl bg-glass border border-glass-border backdrop-blur-md">
                <div className="text-2xl font-bold text-primary mb-1">SMBs</div>
                <div className="text-sm text-muted">Focus</div>
              </div>
              <div className="text-center p-4 rounded-2xl bg-glass border border-glass-border backdrop-blur-md">
                <div className="text-2xl font-bold text-primary mb-1">Hands-on</div>
                <div className="text-sm text-muted">Delivery</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="card-glass rounded-4xl relative overflow-hidden group hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">What Clients See</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold">-78%</div>
                    <div>
                      <div className="font-semibold">Faster Replies</div>
                      <div className="text-sm text-muted">From AI assistant deployments</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold">62%</div>
                    <div>
                      <div className="font-semibold">Deflected Tickets</div>
                      <div className="text-sm text-muted">Web + SMS channels</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold">3w</div>
                    <div>
                      <div className="font-semibold">Time to Value</div>
                      <div className="text-sm text-muted">Typical pilot duration</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Focus */}
      <div className="mb-20">
        <div className="container-wide text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Principles</h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            A few beliefs that guide every project
          </p>
        </div>
        <div className="container-wide grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card-glass p-6 hover:scale-105 transition-all duration-300 group">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-2">Start Small, Ship Fast</h3>
            <p className="text-muted mb-4">Prove value with a focused pilot in weeks, then scale deliberately.</p>
            <div className="flex flex-wrap gap-2">
              <span className="chip text-xs">Pilot</span>
              <span className="chip text-xs">Iteration</span>
              <span className="chip text-xs">ROI</span>
            </div>
          </div>
          <div className="card-glass p-6 hover:scale-105 transition-all duration-300 group">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold mb-2">Human-in-the-Loop</h3>
            <p className="text-muted mb-4">Keep humans in control with approvals, audits, and clear escalation paths.</p>
            <div className="flex flex-wrap gap-2">
              <span className="chip text-xs">Escalations</span>
              <span className="chip text-xs">Approvals</span>
              <span className="chip text-xs">Guardrails</span>
            </div>
          </div>
          <div className="card-glass p-6 hover:scale-105 transition-all duration-300 group">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold mb-2">Privacy-first & Safe</h3>
            <p className="text-muted mb-4">Private deployments, data controls, and sensible defaults for safety.</p>
            <div className="flex flex-wrap gap-2">
              <span className="chip text-xs">PII</span>
              <span className="chip text-xs">SOC2-friendly</span>
              <span className="chip text-xs">Data Controls</span>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="mb-20">
        <div className="container-wide text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">More Principles</h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Operating guidelines I bring to every engagement
          </p>
        </div>
        <div className="container-wide grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="card-glass text-center group hover:scale-110 cursor-pointer">
            <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">⚡</div>
            <div className="font-bold text-lg mb-2">Measure Outcomes</div>
            <p className="text-sm text-muted leading-relaxed">Define success upfront. Track deflection, hours saved, and revenue impact.</p>
          </div>
          <div className="card-glass text-center group hover:scale-110 cursor-pointer">
            <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">🛡️</div>
            <div className="font-bold text-lg mb-2">Vendor‑Neutral</div>
            <p className="text-sm text-muted leading-relaxed">Choose the right stack for your constraints. No lock‑in or hidden agendas.</p>
          </div>
          <div className="card-glass text-center group hover:scale-110 cursor-pointer">
            <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">🎨</div>
            <div className="font-bold text-lg mb-2">Ship Weekly</div>
            <p className="text-sm text-muted leading-relaxed">Frequent releases keep momentum and de‑risk change.</p>
          </div>
          <div className="card-glass text-center group hover:scale-110 cursor-pointer">
            <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">🤝</div>
            <div className="font-bold text-lg mb-2">Teach Your Team</div>
            <p className="text-sm text-muted leading-relaxed">Documentation and training so you can run it without me.</p>
          </div>
        </div>
      </div>
      {/* Call to Action */}
      <div className="text-center">
        <div className="max-w-4xl mx-auto p-12 rounded-4xl border border-glass-border bg-gradient-to-br from-glass via-glass-2 to-glass backdrop-blur-xl relative overflow-hidden group hover:scale-[1.02] transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">Calgary SMBs: Ready to Pilot AI?</h2>
            <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
              Book a 20‑minute intro. We'll identify a high‑impact assistant, automation, or analytics pilot we can ship in ~3 weeks.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={bookingUrl}
                {...(bookingExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="btn-primary px-8 py-4"
              >
                Book an intro <span className="ml-2">→</span>
              </a>
              <a
                href="/services"
                className="btn-outline px-8 py-4"
              >
                See services
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-glass-border">
              <p className="text-sm text-muted">Based in Calgary. Remote‑friendly.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}