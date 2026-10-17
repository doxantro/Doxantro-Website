import type { Metadata } from 'next';
import TichaLanding from '../../components/ticha/TichaLanding';
import './ticha.css';

const description = 'Meet Ticha, an AI education platform in development by Doxantro. Personalised learning, daily learning habits, exam practice and pupil insights for teachers.';

export const metadata: Metadata = {
  title: 'Ticha — A little more understanding. A lot more possibility.',
  description,
  alternates: { canonical: '/ticha' },
  openGraph: { title: 'Ticha — Learning that gets you.', description, url: '/ticha' },
  twitter: { card: 'summary', title: 'Ticha — Learning that gets you.', description },
};

export default function TichaPage() {
  return <TichaLanding />;
}
