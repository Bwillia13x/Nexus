'use client';

import { CONTACT_CONTENT } from '../_content';

export function SidebarCards() {
  return (
    <div className="space-y-6">
      {/* Why Choose Us Card */}
      <div className="card-glass group transition-all duration-200 hover:shadow-elev-lg hover:ring-1 hover:ring-primary/10">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <span className="text-2xl">💡</span>
          {CONTACT_CONTENT.sidebar.whyChoose.title}
        </h3>
        <ul className="space-y-3 text-sm text-muted">
          {CONTACT_CONTENT.sidebar.whyChoose.items.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-primary mt-0.5 text-sm">✓</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Response Time Card */}
      <div className="card-glass group transition-all duration-200 hover:shadow-elev-lg hover:ring-1 hover:ring-primary/10">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <span className="text-2xl">⏱️</span>
          {CONTACT_CONTENT.sidebar.responseTime.title}
        </h3>
        <div className="space-y-3">
          {CONTACT_CONTENT.sidebar.responseTime.items.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-3 rounded-xl bg-gradient-to-r from-primary/5 to-secondary/5 border border-glass-border/50"
            >
              <span className="font-medium text-sm">{item.method}</span>
              <span className="text-sm text-primary font-semibold">
                {item.time}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Security Card */}
      <div className="card-glass group transition-all duration-200 hover:shadow-elev-lg hover:ring-1 hover:ring-primary/10">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <span className="text-2xl">🔐</span>
          {CONTACT_CONTENT.sidebar.security.title}
        </h3>
        <p className="text-sm text-muted leading-relaxed">
          {CONTACT_CONTENT.sidebar.security.content}
        </p>
      </div>
    </div>
  );
}
