import Link from 'next/link';
import Image from 'next/image';
import { Card } from './Card';

interface MediaKitItem {
  title: string;
  note: string;
}

interface MediaKitProps {
  items: MediaKitItem;
}

export function MediaKit({ items }: MediaKitProps) {
  const mediaItems = [
    {
      icon: '/icons-svg/about/hero/profile-hex-spark.svg',
      title: 'Headshot',
      description: 'High-resolution photo for media use',
    },
    {
      icon: '/icons-svg/playbooks/cards/prompting-guide_chat-wand.svg',
      title: 'Short Bio',
      description: '250-word professional summary',
    },
    {
      icon: '/icons-svg/playbooks/hero/playbooks-download.svg',
      title: 'Brand Assets',
      description: 'Logo, colors, and brand guidelines',
    },
  ];

  return (
    <Card className="p-8 max-w-4xl mx-auto" variant="glass">
      <h2
        id="media-kit-heading"
        className="text-3xl font-bold mb-6 text-center"
      >
        {items.title}
      </h2>
      <p className="text-muted-foreground mb-8 text-center leading-7">
        {items.note}
      </p>

      <ul
        role="list"
        aria-labelledby="media-kit-heading"
        className="grid md:grid-cols-3 gap-6 mb-8"
      >
        {mediaItems.map((item, index) => (
          <li key={index} className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
              <Image src={item.icon} alt="" width={40} height={40} />
            </div>
            <h3 className="font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-6">
              {item.description}
            </p>
          </li>
        ))}
      </ul>

      <div className="text-center">
        <Link
          href="/contact?intent=media"
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary/40"
        >
          <span>Request Media Kit</span>
          <span className="text-xl" aria-hidden="true">
            →
          </span>
        </Link>
      </div>
    </Card>
  );
}
