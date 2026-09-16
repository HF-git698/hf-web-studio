import type { Metadata } from 'next';
import SanTungDemo from '@/components/SanTungDemo';
import './san-tung.css';

export const metadata: Metadata = {
  title: 'San Tung 山東小館 — Website Redesign Concept',
  description: 'An independent redesign concept for San Tung, a San Francisco neighborhood restaurant since 1986.',
  robots: { index: false, follow: false },
  icons: { icon: '/san-tung-mark.svg' },
  openGraph: { title: 'San Tung — A San Francisco Original', description: 'Independent website redesign concept. Not the official restaurant website.', images: [] },
};

export default function Page() { return <SanTungDemo />; }
