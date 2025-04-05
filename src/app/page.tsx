import { HeroSection } from "../components/hero-section";
import { FeaturesSection } from "../components/features-sections";
import { WhyChooseUs } from "../components/why-choose-us";
import TopFundraisers from "../components/top-fundraisers";
import { SuccessStories } from "../components/success-stories";
import { FaWhatsapp } from "react-icons/fa";
import { Suspense } from 'react';

export default function Home() {
  return (
    <div className="space-y-8 pb-15 relative">
      <HeroSection />
      <FeaturesSection />
      <WhyChooseUs />
      <Suspense fallback={<div className="text-center py-12">Loading top fundraisers...</div>}>
        <TopFundraisers />
      </Suspense>
      <SuccessStories />
      <a
        href="https://wa.me/9311536630"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all flex items-center justify-center"
      >
        <FaWhatsapp size={34} />
      </a>
    </div>
  );
}
