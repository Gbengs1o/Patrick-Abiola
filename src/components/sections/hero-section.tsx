'use client';

import Image from 'next/image';

export function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="liquid-hover">Patrick Abiola</h1>
          <p className="subtitle liquid-hover">Product Manager | Career Coach | HR Consultant | Public Speaker</p>
          <div className="scroll-prompt liquid-hover">[ Scroll down ]</div>
        </div>
        <div className="hero-image-container">
          <div className="hero-bg-shape"></div>
          <Image
            src="https://seagreen-cobra-133672.hostingersite.com/wp-content/uploads/2025/08/guypic4nobg.jpg"
            alt="A portrait of Patrick Abiola"
            width={450}
            height={550}
            className="hero-image"
            priority
            data-ai-hint="professional portrait"
          />
        </div>
      </div>
    </section>
  );
}
