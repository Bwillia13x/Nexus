import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Schedule | Prairie Signal',
  description:
    'Book a discovery call. We will assess readiness and scope a vendor‑neutral, no‑code pilot your team can own.',
};

export default function SchedulePage() {
  redirect('/book');
}
