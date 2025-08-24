'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { RollingImagesSection } from '@/components/sections/rolling-images-section';
import { ExpertiseSection } from '@/components/sections/expertise-section';
import { VideoSection } from '@/components/sections/video-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <RollingImagesSection />
        <ExpertiseSection />
        <VideoSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
