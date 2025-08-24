'use client';

import React from 'react';

const YT_ID = 'ZgfYhXCaPQc'; // youtube short id

export function VideoSection(): JSX.Element {
  const src = `https://www.youtube.com/embed/${YT_ID}?autoplay=1&mute=1&loop=1&playlist=${YT_ID}&controls=0&modestbranding=1&rel=0&playsinline=1`;

  return (
    <>
      <section className="video-section" role="region" aria-label="Featured background video section">
        <iframe
          className="bg-iframe"
          title="Background video"
          src={src}
          frameBorder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          aria-hidden="true"
        />

        <div className="video-overlay" />

        <div className="video-content">
          <h2 className="liquid-hover">Featured Content</h2>
          <p className="liquid-hover">A showcase of dynamic speaking and presentation skills in action.</p>

          <a className="cta-button liquid-hover" href="#contact">Contact Us</a>
        </div>
      </section>

      <style jsx>{`
        :root {
          --accent-color: #00f2ea;
          --accent-color-rgb: 0,242,234;
        }

        .video-section {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }

        .bg-iframe {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 177.78vh;
          height: 100vh;
          min-width: 100vw;
          min-height: 100vh;
          border: 0;
          z-index: 0;
          pointer-events: none;
        }

        /* Default overlay (desktop) - moderate tint */
        .video-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 8, 20, 0.45);
          z-index: 1;
          pointer-events: none;
          transition: background-color 220ms ease;
        }

        .video-content {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 1rem;
          color: #fff;
        }

        /* reusable hover */
        .liquid-hover {
          display: inline-block;
          transition: transform 280ms cubic-bezier(.2,.9,.2,1), color 220ms ease, text-shadow 220ms ease;
          cursor: pointer;
          will-change: transform, text-shadow;
        }
        .liquid-hover:hover,
        .liquid-hover:focus {
          transform: translateY(-4px);
          color: var(--accent-color);
          text-shadow: 0 8px 28px rgba(0,0,0,0.55);
        }
        .liquid-hover::after {
          content: "";
          display: block;
          height: 6px;
          width: 0%;
          margin: 6px auto 0;
          background: linear-gradient(90deg, rgba(var(--accent-color-rgb),0.12), rgba(255,255,255,0.02));
          transition: width 320ms ease;
          border-radius: 999px;
        }
        .liquid-hover:hover::after,
        .liquid-hover:focus::after {
          width: 44%;
        }

        .video-content h2 {
          font-size: clamp(2rem, 6vw, 3.5rem);
          margin: 0;
          font-weight: 700;
          text-shadow: 0 6px 20px rgba(0, 0, 0, 0.6);
        }

        .video-content p {
          font-size: clamp(1rem, 2vw, 1.25rem);
          max-width: 850px;
          margin: 0;
          opacity: 0.95;
          text-shadow: 0 4px 12px rgba(0,0,0,0.5);
        }

        .cta-button {
          margin-top: 0.6rem;
          display: inline-grid;
          place-items: center;
          padding: 0.9rem 1.2rem;
          border-radius: 8px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.08);
          color: inherit;
          text-decoration: none;
          font-weight: 600;
          transition: transform 220ms ease, background-color 220ms ease;
        }
        .cta-button:hover,
        .cta-button:focus {
          background-color: rgba(var(--accent-color-rgb), 0.09);
          transform: translateY(-6px) scale(1.02);
        }

        /* ---- MOBILE TWEAKS: stronger overlay for readability ---- */
        @media (max-width: 768px) {
          .video-overlay {
            background: rgba(0, 8, 20, 0.72); /* darker on tablet/phone */
          }
        }

        @media (max-width: 480px) {
          .video-overlay {
            background: rgba(0, 8, 20, 0.82); /* even darker on small phones */
          }

          /* beef up text-shadow and slightly increase contrast for tiny screens */
          .video-content h2 {
            text-shadow: 0 8px 26px rgba(0,0,0,0.75);
          }
          .video-content p {
            text-shadow: 0 6px 18px rgba(0,0,0,0.65);
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .bg-iframe { min-width: 140vw; }
          .video-content h2 { font-size: 1.6rem; }
        }
      `}</style>
    </>
  );
}

export default VideoSection;
