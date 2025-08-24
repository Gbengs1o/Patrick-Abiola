'use client';

import { useState } from 'react';
import Image from 'next/image';

export function HeroSection() {
  // --- STATE FOR DESKTOP HOVER ---
  const [activeRole, setActiveRole] = useState(-1);

  // --- STATE FOR MOBILE DIAL ---
  const [mobileCurrentIndex, setMobileCurrentIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState('');

  const roles = [
    {
      name: 'Product Manager',
      imageUrl: 'https://seagreen-cobra-133672.hostingersite.com/wp-content/uploads/2025/08/productmanager.png',
    },
    {
      name: 'Career Coach',
      imageUrl: 'https://seagreen-cobra-133672.hostingersite.com/wp-content/uploads/2025/08/carreare-couch.png',
    },
    {
      name: 'HR Consultant',
      imageUrl: 'https://seagreen-cobra-133672.hostingersite.com/wp-content/uploads/2025/08/HR-consultant.png',
    },
    {
      name: 'Public Speaker',
      imageUrl: 'https://seagreen-cobra-133672.hostingersite.com/wp-content/uploads/2025/08/publicspeaker.png',
    },
  ];
  
  // --- MOBILE NAVIGATION LOGIC ---
  const handleMobileNext = () => {
    setAnimationDirection('next');
    setMobileCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
  };

  const handleMobilePrev = () => {
    setAnimationDirection('prev');
    setMobileCurrentIndex((prevIndex) => (prevIndex - 1 + roles.length) % roles.length);
  };


  return (
    <>
      <section id="home" className="hero-section">

        {/* ================================================================== */}
        {/* ======================= DESKTOP EXPERIENCE ======================= */}
        {/* =================== (EXACTLY AS YOU APPROVED) ==================== */}
        {/* ================================================================== */}
        <div className="hero-desktop">
          <div className="hero-content">
            <div className="hero-text-main">
              <h1 className="liquid-hover">Patrick Abiola</h1>
              <div className="hero-subtitle-container">
                <p className={`subtitle-prompt ${activeRole !== -1 ? 'hidden' : ''}`}>
                  [ Explore my roles ]
                </p>
                {roles.map((role, index) => (
                  <p key={role.name} className={`subtitle-dynamic ${activeRole === index ? 'visible' : ''}`}>
                    {role.name}
                  </p>
                ))}
              </div>
            </div>
            <ul className="roles-list" onMouseLeave={() => setActiveRole(-1)}>
              {roles.map((role, index) => (
                <li key={role.name} className="role-item liquid-hover" onMouseEnter={() => setActiveRole(index)}>
                  {role.name}
                </li>
              ))}
            </ul>
          </div>
          <div className={`hero-visuals ${activeRole !== -1 ? 'is-active' : ''}`}>
            <div className="hero-bg-glow"></div>
            {roles.map((role, index) => (
              <div key={role.name} className={`hero-image-wrapper ${activeRole === index ? 'is-visible' : ''}`}>
                <Image src={role.imageUrl} alt={`A portrait of Patrick Abiola as a ${role.name}`} fill sizes="50vw" className="hero-image" priority={index < 2} />
              </div>
            ))}
          </div>
        </div>

        {/* ================================================================= */}
        {/* =================== NEW MOBILE "VISUAL DIAL" ==================== */}
        {/* ================================================================= */}
        <div className="hero-mobile">
          <h1>Patrick Abiola</h1>
          <div className="visual-dial-container">
            <div className="image-fader">
              {roles.map((role, index) => {
                let status = 'inactive';
                if (index === mobileCurrentIndex) {
                  status = `active-${animationDirection}`;
                }
                return (
                  <div key={role.name} className={`mobile-image-wrapper ${status}`}>
                     <Image src={role.imageUrl} alt={role.name} fill sizes="100vw" className="mobile-image" />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="dial-nav">
            <button onClick={handleMobilePrev} aria-label="Previous role">
               <svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <div className="role-title-fader">
              {roles.map((role, index) => (
                <span key={role.name} className={`role-title ${index === mobileCurrentIndex ? 'active' : ''}`}>{role.name}</span>
              ))}
            </div>
            <button onClick={handleMobileNext} aria-label="Next role">
              <svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </div>

      </section>

      <style jsx>{`
        /* --- Universal Base --- */
        .hero-section { min-height: 100vh; width: 100%; position: relative; overflow: hidden; }

        /* ===================================================================== */
        /* --- DESKTOP STYLES (> 900px) --- (UNCHANGED FROM APPROVED VERSION) --- */
        /* ===================================================================== */
        .hero-desktop { min-height: 100vh; display: flex; align-items: center; justify-content: center; text-align: center; padding: 2rem; }
        .hero-content { display: flex; flex-direction: column; align-items: center; gap: 3rem; z-index: 10; }
        .hero-text-main h1 { font-size: clamp(3rem, 8vw, 6rem); font-weight: 700; margin: 0; line-height: 1.1; }
        .hero-subtitle-container { margin-top: 1rem; min-height: 2em; position: relative; font-size: clamp(1.1rem, 2.5vw, 1.5rem); }
        .subtitle-prompt, .subtitle-dynamic { position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 100%; transition: opacity 0.4s ease, transform 0.4s ease; }
        .subtitle-prompt { opacity: 0.6; }
        .subtitle-prompt.hidden { opacity: 0; transform: translate(-50%, -10px); }
        .subtitle-dynamic { opacity: 0; font-weight: 500; transform: translate(-50%, 10px); }
        .subtitle-dynamic.visible { opacity: 1; transform: translateX(-50%); }
        .roles-list { display: flex; flex-wrap: wrap; justify-content: center; gap: 1rem 1.5rem; padding: 0; margin: 0; list-style: none; }
        .role-item { font-size: clamp(0.9rem, 2vw, 1.1rem); cursor: pointer; padding: 0.5rem 1rem; border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 20px; transition: background-color 0.3s ease, transform 0.3s ease; }
        .role-item:hover { background-color: var(--card-bg-color); transform: translateY(-3px); }
        .hero-visuals { position: absolute; right: 0; bottom: 0; width: 50%; height: 100%; max-width: 600px; opacity: 0; transform: translateX(100px) scale(0.95); transition: opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1), transform 0.6s cubic-bezier(0.25, 1, 0.5, 1); z-index: 1; }
        .hero-visuals.is-active { opacity: 1; transform: translateX(0) scale(1); }
        .hero-image-wrapper { position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0; transition: opacity 0.4s ease-in-out; pointer-events: none; }
        .hero-image-wrapper.is-visible { opacity: 1; transition-delay: 0.1s; }
        .hero-image { object-fit: contain; object-position: bottom right; }
        .hero-bg-glow { position: absolute; bottom: 0; right: 0; width: 150%; height: 80%; background: radial-gradient(circle, var(--card-bg-color) 30%, transparent 70%); filter: blur(20px); opacity: 0.6; z-index: -1; }
        .hero-mobile { display: none; }


        /* ===================================================== */
        /* --- NEW MOBILE STYLES (<= 900px) --- "VISUAL DIAL" --- */
        /* ===================================================== */
        @media (max-width: 900px) {
          .hero-desktop { display: none; }
          .hero-mobile {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100vh;
            text-align: center;
            padding: 2rem 1rem 1.5rem 1rem;
          }
          
          .hero-mobile h1 {
            font-size: clamp(2.5rem, 12vw, 3.5rem);
            line-height: 1.1;
            padding-top: 5vh;
          }

          .visual-dial-container {
            flex-grow: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            width: 100%;
          }

          .image-fader {
            position: relative;
            width: 85%;
            max-width: 400px;
            aspect-ratio: 4 / 5;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 40px rgba(0,0,0,0.3);
          }
          
          .mobile-image-wrapper {
            position: absolute;
            inset: 0;
            opacity: 0;
            transform: scale(1.1);
            transition: opacity 0.5s ease, transform 0.5s ease;
          }
          
          @keyframes slideInFromRight {
            from { transform: translateX(100%) scale(0.9); opacity: 0; }
            to { transform: translateX(0) scale(1); opacity: 1; }
          }
          @keyframes slideInFromLeft {
            from { transform: translateX(-100%) scale(0.9); opacity: 0; }
            to { transform: translateX(0) scale(1); opacity: 1; }
          }

          .mobile-image-wrapper.active-next {
             animation: slideInFromRight 0.6s cubic-bezier(0.25, 1, 0.5, 1) forwards;
          }
          .mobile-image-wrapper.active-prev {
             animation: slideInFromLeft 0.6s cubic-bezier(0.25, 1, 0.5, 1) forwards;
          }
          /* Initial load animation */
          .mobile-image-wrapper.active- {
            opacity: 1;
            transform: scale(1);
          }

          .mobile-image {
            object-fit: cover;
          }

          .dial-nav {
            display: grid;
            grid-template-columns: 44px 1fr 44px;
            align-items: center;
            width: 100%;
            max-width: 400px;
            margin: 0 auto;
            padding-bottom: 2vh;
          }

          .role-title-fader {
            position: relative;
            height: 2em;
            overflow: hidden;
          }
          .role-title {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: clamp(1rem, 4vw, 1.2rem);
            font-weight: 500;
            opacity: 0;
            transform: translateY(100%);
            transition: opacity 0.4s ease, transform 0.4s ease;
          }
          .role-title.active {
            opacity: 1;
            transform: translateY(0);
            transition-delay: 0.2s;
          }

          .dial-nav button {
            background: rgba(255,255,255,0.1);
            border: 1px solid rgba(255,255,255,0.2);
            border-radius: 50%;
            width: 44px; height: 44px;
            display: grid; place-items: center;
            cursor: pointer; color: white;
            transition: background-color 0.2s;
          }
          .dial-nav button:hover { background: rgba(255,255,255,0.2); }
          .dial-nav svg { width: 24px; height: 24px; stroke: currentColor; stroke-width: 2; fill: none; stroke-linecap: round; stroke-linejoin: round; }
        }
      `}</style>
    </>
  );
}