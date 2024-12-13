// app/page.tsx
'use client';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import MarketAnalysis from '@/components/sections/MarketAnalysis';
import HowItWorks from '@/components/sections/HowItWorks';
import PlatformAdvantages from '@/components/sections/PlatformAdvantages';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <PlatformAdvantages />
      <MarketAnalysis />
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            开启AI人才服务新时代
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            立即加入我们，连接AI人才与企业需求，共创智能未来
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="secondary">
              预约演示
            </Button>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              立即注册
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}