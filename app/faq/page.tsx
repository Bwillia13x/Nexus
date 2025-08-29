export const metadata = {
  title: 'FAQ | Prairie Signal',
  description:
    'Answers about costs, data safety, tool choice, what’s included, and how we check results.',
};

const faqs = [
  {
    q: 'What do you actually do?',
    a: 'We set up and connect useful AI tools so they work with what you already use. We do not build big custom systems or use your data to train AI.',
  },
  {
    q: 'Are you tied to one vendor?',
    a: 'No. We choose the tools that fit your needs and budget. We prefer what you already have when it makes sense.',
  },
  {
    q: 'How do you handle privacy and security?',
    a: 'We keep your private data private. We only use the access we need and remove it when we’re done. NDA available.',
  },
  {
    q: 'How do you know it’s working?',
    a: 'We agree on simple signs like time saved, fewer mistakes, and faster replies.',
  },
  {
    q: 'What’s included?',
    a: 'Set up and connect existing tools, training for your team, and easy instructions. We avoid long, custom builds unless you ask for them.',
  },
  {
    q: 'How much does it cost?',
    a: 'Short overview is a fixed fee; checkups, tool choice, and small pilot setup are fixed price. Exact pricing depends on scope.',
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 -z-10 overflow-hidden ambient-orbs">
        <div className="ambient-orb absolute -top-40 -left-40 w-[780px] h-[780px] rounded-full bg-gradient-to-br from-primary/20 via-primary/10 via-secondary/5 to-transparent blur-3xl" />
        <div className="ambient-orb ambient-orb--slow absolute -bottom-40 -right-40 w-[620px] h-[620px] rounded-full bg-gradient-to-br from-secondary/20 via-secondary/10 via-primary/5 to-transparent blur-3xl" />
        <div className="ambient-vignette" />
      </div>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight gradient-title text-center mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground text-center mb-10">
            Costs, safety, tool choice, what’s included, and how we check
            results.
          </p>

          <div className="space-y-4">
            {faqs.map((item, i) => (
              <div key={i} className="card-glass glass-liquid p-6">
                <h2 className="text-xl font-semibold mb-2">{item.q}</h2>
                <p className="text-muted leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
