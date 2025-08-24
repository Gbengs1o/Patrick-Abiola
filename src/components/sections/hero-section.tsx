'use client';

import Image from 'next/image';

export function HeroSection() {
  return (
    <>
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
      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 20px;
          width: 100%;
        }
        .hero-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 2rem;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }
        .hero-text {
          text-align: left;
        }
        .hero h1 {
          font-size: clamp(2.5rem, 6vw, 5rem);
          font-weight: 700;
          margin: 0;
          line-height: 1.1;
        }
        .hero .subtitle {
          font-size: clamp(1rem, 2vw, 1.2rem);
          font-weight: 400;
          margin-top: 15px;
          opacity: 0.9;
          max-width: 500px;
        }
        .hero-image-container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .hero-image {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 450px;
          height: auto;
        }
        .hero-bg-shape {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          z-index: 1;
          background: linear-gradient(45deg, var(--card-bg-color), var(--bg-color));
          width: 90%;
          height: 90%;
          filter: blur(20px);
        }
        .hero .scroll-prompt {
          margin-top: 40px;
          font-size: 0.9em;
          opacity: 0.7;
        }
        @media (max-width: 768px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-text {
            text-align: center;
            order: 2;
          }
          .hero-image-container {
            order: 1;
            margin-bottom: 2rem;
          }
          .hero .subtitle {
            margin: 15px auto 0 auto;
          }
        }
      `}</style>
    </>
  );
}
