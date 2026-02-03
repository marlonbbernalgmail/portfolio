import HeroSection from '@/components/HeroSection';
import ProductGrid from '@/components/ProductGrid';
import CustomSystemsSection from '@/components/CustomSystemsSection';
import ResearchLabSection from '@/components/ResearchLabSection';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="max-w-[1200px] w-full px-6">
        <HeroSection />
        <ProductGrid />
        <CustomSystemsSection />
        <ResearchLabSection />
      </div>
    </main>
  );
}

