'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function VideoSection() {
  const videoId = "ZgfYhXCaPQc";
  
  // 1. Create a reference to the section element
  const sectionRef = useRef(null);

  // 2. Track scroll progress within the referenced section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    // Start animation when the top of the section hits the bottom of the viewport
    // End animation when the bottom of the section hits the top of the viewport
    offset: ["start end", "end start"]
  });

  // 3. Create transformed values based on scroll progress
  // Map scroll progress (0 to 1) to a scale value (1 to 1.3 for a 30% zoom)
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  
  // Map scroll progress to the background-size for the highlight wipe effect
  // The highlight starts filling when the section is 30% scrolled, and is full at 70%
  const highlightSize = useTransform(scrollYProgress, [0.3, 0.7], ["0% 100%", "100% 100%"]);


  return (
    <>
      {/* Add the ref to the section */}
      <section ref={sectionRef} id="video-feature" className="video-section">
        {/* Use motion.div to animate the background */}
        <motion.div className="video-background" style={{ scale }}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&autohide=1&modestbranding=1&rel=0`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="video-iframe"
            title="Embedded YouTube Video"
          ></iframe>
           <div className="video-overlay"></div>
        </motion.div>

        <div className="video-content container">
          {/* Use motion components for the text to apply the highlight animation */}
          <motion.h2 className="liquid-hover" style={{ backgroundSize: highlightSize, backgroundPosition: 'left' }}>
            Featured Content
          </motion.h2>
          <motion.p className="liquid-hover" style={{ backgroundSize: highlightSize, backgroundPosition: 'left' }}>
            A showcase of dynamic speaking and presentation skills in action.
          </motion.p>
        </div>
      </section>

      <style jsx>{`
        .video-section {
          position: relative;
          height: 80vh; /* Increased height slightly for a better parallax feel */
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
          color: white;
        }

        .video-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          /* The scale will be applied here by Framer Motion */
        }

        .video-iframe {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100vw;
          min-height: 100vh;
          min-width: 177.77vh; /* 16/9 aspect ratio */
          transform: translate(-50%, -50%);
          pointer-events: none;
        }
        
        .video-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(16, 37, 66, 0.7);
            z-index: 1;
        }

        .video-content {
          position: relative;
          z-index: 2;
        }

        /* --- CSS CHANGES FOR THE HIGHLIGHT --- */
        /* We set up the highlight but let Framer Motion control the 'background-size' */
        .liquid-hover {
            background-image: linear-gradient(to right, var(--secondary-accent-color), var(--secondary-accent-color));
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            background-repeat: no-repeat;
            /* The initial background-size is now controlled by the animation */
        }
        
        .video-content h2 {
          font-size: clamp(2.5em, 6vw, 4em);
          font-weight: 700;
          color: white; /* Fallback color */
          text-shadow: 0 2px 10px rgba(0,0,0,0.5);
        }

        .video-content p {
          font-size: clamp(1em, 2vw, 1.2em);
          max-width: 600px;
          margin: 1rem auto 0;
          opacity: 0.9;
          color: white; /* Fallback color */
          text-shadow: 0 1px 5px rgba(0,0,0,0.5);
        }
      `}</style>
    </>
  );
}
