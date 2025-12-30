import CTASection from '@/components/ui/cta-section';

/**
 * About page CTA section component
 * Uses the reusable CTASection component with about page specific image path
 */
const AboutCTASection: React.FC = () => {
  return (
    <CTASection
      backgroundImagePath="/images"
    />
  );
};

export default AboutCTASection;