import PageContainer from '@/components/layout/page-container';
import HeroSection from '@/features/home/components/hero-section';
import FeatureHighlightSection from '@/features/home/components/feature-highlight-section';
import FeaturesGridSection from '@/features/home/components/features-grid-section';
import HowItWorksSection from '@/features/home/components/how-it-works-section';
import TestimonialsSection from '@/features/home/components/testimonials-section';
import CTASection from '@/components/ui/cta-section';

export default function HomePage() {
  const seoData = {
    description: 'Mottivve eleva sua presença, com qualidade.',
    keywords: ['mottivve', 'motive', 'roupas', 'bad boy', 'badboy', 'mochilas', 'qualidade']
  };

  return (
    <PageContainer
      title="Mottivve"
      seo={seoData}
    >
      <section className="relative pb-24">
        <HeroSection />
      </section>

      <FeatureHighlightSection />
      <FeaturesGridSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
    </PageContainer>
  );
}