
'use client';

import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { DetailedAboutSection } from '@/components/sections/detailed-about-section';
import { ExtendedAboutSection } from '@/components/sections/extended-about-section';

// Using a separate component for the SVG icons keeps the main component cleaner
const Icon = ({ name }: { name: string }) => {
  const icons: { [key: string]: JSX.Element } = {
    innovator: <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
    mentor: <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    speaker: <svg viewBox="0 0 24 24"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
  };
  return <div className="icon-wrapper">{icons[name]}</div>;
};

export default function AboutPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const pillars = [
    {
      id: 'innovator',
      title: 'Product Innovator',
      description: "With a proven track record in designing user-centric tech solutions, I bring a results-driven approach to every project, focusing on building a product roadmap that delivers real value.",
    },
    {
      id: 'mentor',
      title: 'Career Mentor',
      description: "I specialize in coaching professionals to land their dream roles and crafting standout CVs, bridging the gap between talent and opportunity with empathy and strategic guidance.",
    },
    {
      id: 'speaker',
      title: 'Public Speaker',
      description: "Known for bringing energy and insight to the stage, I captivate audiences by delivering inspiring keynotes that translate complex ideas into actionable, memorable messages.",
    }
  ];

  return (
    <>
      <Header />
      <main>
        <section id="about" className="about-section">
          <div className="container">
            <div className="intro-text">
              <h2 className="liquid-hover">Professional Profile</h2>
              <p className="liquid-hover">
                A dynamic and multi-talented professional bridging the gap between product innovation, human resources, and career development.
              </p>
            </div>

            {/* ========================================================== */}
            {/* ======================= DESKTOP VIEW ======================= */}
            {/* ========================================================== */}
            <div className="about-desktop">
              <div className="pillar-nav">
                {pillars.map((pillar, index) => (
                  <button
                    key={pillar.id}
                    className={`pillar-button liquid-hover ${index === activeIndex ? 'active' : ''}`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <Icon name={pillar.id} />
                    <span className="pillar-title">{pillar.title}</span>
                  </button>
                ))}
              </div>
              <div className="pillar-content">
                {pillars.map((pillar, index) => (
                   <p
                     key={pillar.id}
                     className={`pillar-description liquid-hover ${index === activeIndex ? 'active' : ''}`}
                   >
                     {pillar.description}
                   </p>
                ))}
              </div>
            </div>

            {/* ======================================================== */}
            {/* ============ NEW & IMPROVED MOBILE SWIPER ================ */}
            {/* ======================================================== */}
            <div className="about-mobile">
              <div className="swiper-container">
                <div
                  className="swiper-wrapper"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                  {pillars.map((pillar) => (
                    <div key={pillar.id} className="mobile-card">
                      <Icon name={pillar.id} />
                      <h3>{pillar.title}</h3>
                      <p>{pillar.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="swiper-dots">
                {pillars.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === activeIndex ? 'active' : ''}`}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>
        </section>
        <DetailedAboutSection />
        <ExtendedAboutSection />
      </main>
      <Footer />
      <style jsx>{`
        /* Common styles from your original code are kept for consistency */
        .about-section {
          padding: 120px 0 60px; /* Adjusted padding */
          --active-color: var(--accent-color);
          --card-bg-color: transparent; /* Assuming a dark theme */
        }
        .container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .intro-text { text-align: center; margin-bottom: 60px; }
        .intro-text h2 { font-size: clamp(2.5em, 6vw, 3.5em); margin-bottom: 20px; }
        .intro-text p { font-size: clamp(1em, 2vw, 1.1em); line-height: 1.8; max-width: 750px; margin: 0 auto; opacity: 0.9; }

        /* Icon Wrapper (shared between mobile/desktop) */
        .icon-wrapper { color: var(--active-color); }
        .icon-wrapper svg {
            width: 100%; height: 100%;
            fill: none; stroke: currentColor;
            stroke-width: 2; stroke-linecap: round; stroke-linejoin: round;
        }

        /* ========================================================== */
        /* ======================= DESKTOP STYLES ===================== */
        /* ========================================================== */
        .pillar-nav { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 40px; }
        .pillar-button { background: var(--card-bg-color); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 8px; padding: 20px; text-align: left; color: inherit; cursor: pointer; transition: transform 0.3s ease, background-color 0.3s ease; display: flex; align-items: center; gap: 15px; }
        .pillar-button:hover { transform: translateY(-5px); background: rgba(255, 255, 255, 0.05); }
        .pillar-button.active { background: rgba(var(--accent-color-rgb), 0.1); border-color: var(--active-color); }
        .pillar-button .icon-wrapper { width: 24px; height: 24px; }
        .pillar-title { font-size: 1.1em; font-weight: 600; }
        .pillar-content { position: relative; min-height: 100px; text-align: center; }
        .pillar-description { position: absolute; inset: 0; font-size: 1.1em; line-height: 1.8; opacity: 0; transform: translateY(10px); transition: opacity 0.4s ease, transform 0.4s ease; pointer-events: none; }
        .pillar-description.active { opacity: 0.9; transform: translateY(0); pointer-events: auto; }

        /* Hide mobile view on desktop */
        .about-mobile { display: none; }
        
        /* ======================================================== */
        /* ============= NEW & IMPROVED MOBILE STYLES =============== */
        /* ======================================================== */
        @media (max-width: 768px) {
          /* Hide desktop view on mobile */
          .about-desktop { display: none; }
          .about-mobile { display: block; }
          
          .swiper-container {
            overflow: hidden; /* This is the key to the carousel effect */
          }
          .swiper-wrapper {
            display: flex;
            transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
          }
          
          .mobile-card {
            flex: 0 0 100%; /* Each card takes up the full container width */
            box-sizing: border-box;
            padding: 20px;
            text-align: center;
          }
          .mobile-card .icon-wrapper {
            width: 40px;
            height: 40px;
            margin: 0 auto 20px auto;
          }
          .mobile-card h3 {
            font-size: 1.5em;
            margin-bottom: 15px;
            color: var(--active-color);
          }
          .mobile-card p {
            font-size: 1em;
            line-height: 1.7;
            opacity: 0.9;
          }

          .swiper-dots {
            display: flex;
            justify-content: center;
            gap: 12px;
            margin-top: 30px;
          }
          .dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.3);
            border: none;
            padding: 0;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.3s ease;
          }
          .dot.active {
            background-color: var(--active-color);
            transform: scale(1.2);
          }
        }
      `}</style>
    </>
  );
}
