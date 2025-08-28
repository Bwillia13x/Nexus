import { securityContent } from '../_content';
import { SecurityPanel } from '@/app/about/_components/SecurityPanel';

export default function SecuritySection() {
  return (
    <section id="security" className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <SecurityPanel items={securityContent.items} />
      </div>
    </section>
  );
}
