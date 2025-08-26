'use client';

import { sectionContent } from '../_content';
import { MaybeIcon } from '@/components/ui/MaybeIcon';
const tools = [
  { name: 'Google Workspace', icon: '📧' },
  { name: 'Microsoft 365', icon: '💼' },
  { name: 'QuickBooks', icon: '📊' },
  { name: 'Shopify', icon: '🛒' },
  { name: 'Stripe', icon: '💳' },
  { name: 'Square', icon: '📱' },
  { name: 'Slack', icon: '💬' },
  { name: 'Teams', icon: '👥' },
  { name: 'HubSpot', icon: '🎯' },
  { name: 'Zapier/Make', icon: '🔗' },
];

export default function IntegrationsSection() {
  return (
    <section id="integrations" className="py-16 md:py-24">
      <div className="mx-auto max-w-container px-4">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 gradient-title-animated">
            {sectionContent.integrations.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Native integrations with the tools your Calgary team already uses
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 max-w-6xl mx-auto">
          {tools.map(tool => (
            <div
              key={tool.name}
              className="card-glass glass-liquid hover:scale-105 transition-transform duration-300 group cursor-pointer h-full flex flex-col justify-center items-center"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <MaybeIcon tool={tool.name} size={36} title={tool.name} />
              </div>
              <div className="text-sm md:text-base font-medium text-ink group-hover:text-primary transition-colors leading-tight text-center">
                {tool.name}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Don't see your tool? We integrate with 50+ platforms via API or
            webhook.
          </p>
        </div>
      </div>
    </section>
  );
}
