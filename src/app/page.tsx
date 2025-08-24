'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { RollingImagesSection } from '@/components/sections/rolling-images-section';
import { VideoSection } from '@/components/sections/video-section';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <RollingImagesSection />
        <VideoSection />
      </main>
      <Footer />
    </>
  );
}
