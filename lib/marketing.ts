import heroProofData from '@/content/hero-proof.json';

type HeroProofMetric = {
  value: string;
  label: string;
  helper?: string;
};

type HeroProofTestimonial = {
  quote: string;
  author: string;
  company?: string;
};

type HeroProofMedia =
  | {
      type: 'image';
      src: string;
      alt: string;
      caption?: string;
    }
  | {
      type: 'video';
      src: string;
      poster?: string;
      caption?: string;
      autoPlay?: boolean;
      loop?: boolean;
      muted?: boolean;
    };

export interface HeroProof {
  metrics?: HeroProofMetric[];
  testimonial?: HeroProofTestimonial;
  media?: HeroProofMedia;
}

function isHeroProof(value: unknown): value is HeroProof {
  if (!value || typeof value !== 'object') return false;

  const data = value as HeroProof;

  if (data.metrics && !Array.isArray(data.metrics)) return false;
  if (data.metrics) {
    for (const metric of data.metrics) {
      if (
        !metric ||
        typeof metric.value !== 'string' ||
        typeof metric.label !== 'string'
      ) {
        return false;
      }
    }
  }

  if (data.testimonial) {
    const testimonial = data.testimonial;
    if (
      typeof testimonial.quote !== 'string' ||
      typeof testimonial.author !== 'string'
    ) {
      return false;
    }
  }

  if (data.media) {
    const media = data.media as HeroProofMedia;
    if (media.type === 'image') {
      if (typeof media.src !== 'string' || typeof media.alt !== 'string') {
        return false;
      }
    } else if (media.type === 'video') {
      if (typeof media.src !== 'string') {
        return false;
      }
    } else {
      return false;
    }
  }

  return true;
}

function sanitizeTestimonial(
  testimonial: HeroProofTestimonial
): HeroProofTestimonial {
  const allowNames = process.env.NEXT_PUBLIC_ALLOW_HERO_NAMES === 'true';
  if (allowNames) return testimonial;

  return {
    quote: testimonial.quote,
    author: testimonial.author.split(' ')[0] ?? testimonial.author,
    company: testimonial.company
      ? `${testimonial.company.split(' ')[0] ?? testimonial.company} (confidential)`
      : undefined,
  };
}

export function getHeroProof(): HeroProof | null {
  const showProof = process.env.NEXT_PUBLIC_SHOW_HERO_PROOF === 'true';
  if (!showProof) return null;

  const candidate: unknown = heroProofData;
  if (!isHeroProof(candidate)) return null;

  const proof: HeroProof = {
    ...candidate,
  };

  if (proof.testimonial) {
    proof.testimonial = sanitizeTestimonial(proof.testimonial);
  }

  const forcedMediaSrc = process.env.NEXT_PUBLIC_HERO_MEDIA_SRC;
  if (forcedMediaSrc) {
    const forcedType = process.env.NEXT_PUBLIC_HERO_MEDIA_TYPE ?? 'image';
    if (forcedType === 'video') {
      proof.media = {
        type: 'video',
        src: forcedMediaSrc,
        poster: process.env.NEXT_PUBLIC_HERO_MEDIA_POSTER,
        autoPlay: process.env.NEXT_PUBLIC_HERO_MEDIA_AUTOPLAY === 'true',
        loop: process.env.NEXT_PUBLIC_HERO_MEDIA_LOOP === 'true',
        muted: process.env.NEXT_PUBLIC_HERO_MEDIA_MUTED !== 'false',
        caption: process.env.NEXT_PUBLIC_HERO_MEDIA_CAPTION,
      };
    } else {
      proof.media = {
        type: 'image',
        src: forcedMediaSrc,
        alt:
          process.env.NEXT_PUBLIC_HERO_MEDIA_ALT ?? 'Pilot deliverable preview',
        caption: process.env.NEXT_PUBLIC_HERO_MEDIA_CAPTION,
      };
    }
  }

  return proof;
}
