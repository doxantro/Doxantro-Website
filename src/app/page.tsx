import Hero from '../components/home/Hero';
import ServicesExplorer from '../components/home/ServicesExplorer';
import Transformation from '../components/home/Transformation';
import Process from '../components/home/Process';
import ExampleEngagements from '../components/home/ExampleEngagements';
import Industries from '../components/home/Industries';
import Faq from '../components/home/Faq';
import ClosingCta from '../components/home/ClosingCta';

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <ServicesExplorer />
      <Transformation />
      <Process />
      <ExampleEngagements />
      <Industries />
      <Faq />
      <ClosingCta />
    </main>
  );
}
