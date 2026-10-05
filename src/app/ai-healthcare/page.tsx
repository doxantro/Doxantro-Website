import type { Metadata } from 'next';
import { industryPages } from '../../content/site';
import IndustryPage from '../../components/industries/IndustryPage';

const industry = industryPages.find((i) => i.slug === 'ai-healthcare')!;

export const metadata: Metadata = {
  title: 'Healthcare',
  description: industry.intro,
};

export default function Page() {
  return <IndustryPage industry={industry} />;
}
