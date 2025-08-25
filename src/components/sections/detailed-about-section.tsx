'use client';

import { useState, useEffect, useRef } from 'react';

export function DetailedAboutSection() {
  const personalPhotos = [
    'https://seagreen-cobra-133672.hostingersite.com/wp-content/uploads/2025/08/guypic11.png',
    'https://seagreen-cobra-133672.hostingersite.com/wp-content/uploads/2025/08/guypic10.png',
    'https://seagreen-cobra-133672.hostingersite.com/wp-content/uploads/2025/08/guypic9.png',
    'https://seagreen-cobra-133672.hostingersite.com/wp-content/uploads/2025/08/guypic8.avif',
    'https://seagreen-cobra-133672.hostingersite.com/wp-content/uploads/2025/08/guypic7.avif',
    'https://seagreen-cobra-133672.hostingersite.com/wp-content/uploads/2025/08/guypic6.avif',
    'https://seagreen-cobra-133672.hostingersite.com/wp-content/uploads/2025/08/guypic5.jpeg',
    'https://seagreen-cobra-133672.hostingersite.com/wp-content/uploads/2025/08/guypic4.jpeg',
    'https://seagreen-cobra-133672.hostingersite.com/wp-content/uploads/2025/08/guypic3.jpeg',
    'https://seagreen-cobra-133672.hostingersite.com/wp-content/uploads/2025/08/guypic2.jpeg',
    'https://seagreen-cobra-133672.hostingersite.com/wp-content/uploads/2025/08/guypic1.jpeg',
  ];

  const scrollerPhotos = personalPhotos.slice(0, 4);

  // Text for the hover overlays
  const scrollerText = [
    "Tech Entrepreneur",
    "Product Strategist",
    "Career Coach",
    "Innovator"
  ];

  const posters = [
    'https://seagreen-cobra-133672.hostingersite.com/wp-content/uploads/2025/08/guyposter1.png',
    'https://seagreen-cobra-133672.hostingersite.com/wp-content/uploads/2025/08/guyposter2.png',
    'https://seagreen-cobra-133672.hostingersite.com/wp-content/uploads/2025/08/guyposter3.png',
  ];

  const certificates = [
    'https://seagreen-cobra-133672.hostingersite.com/wp-content/uploads/2025/08/certificate.jpg',
    'https://seagreen-cobra-133672.hostingersite.com/wp-content/uploads/2025/08/certificateanotherone.jpg',
  ];

  const [visibleElements, setVisibleElements] = useState(new Set());
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, entry.target.dataset.animateId]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    const elements = document.querySelectorAll('[data-animate-id]');
    elements.forEach(el => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const isVisible = (id) => visibleElements.has(id);

  return (
    <>
      <section className="detailed-about-section">
        <div className="container">
          
          {/* Chapter 1: The Introduction */}
          <div className="story-chapter">
            <div 
              className={`story-content ${isVisible('intro') ? 'visible' : ''}`}
              data-animate-id="intro"
            >
              <div className="chapter-header">
                <span className="chapter-number liquid-hover">01</span>
                <h2 className="chapter-title liquid-hover">The Journey Begins</h2>
              </div>
              <div className="text-content">
                <p className="liquid-hover">
                  I'm Patrick Abiola, a Lagos-based tech entrepreneur, product manager, and career development coach. My journey combines years of operational leadership—as a former Head of Operations and certified trainer—with a deep passion for technology and human development. Over the years, I've built a reputation for bringing people-centered thinking and a growth mindset to every product and career initiative I take on.
                </p>
              </div>
            </div>

            {/* ROLLING IMAGE SCROLLER WITH HOVER EFFECT */}
            <div
              className={`scroller-container ${isVisible('featured-photos') ? 'visible' : ''}`}
              data-animate-id="featured-photos"
            >
              <div className="scroller-wrapper">
                {scrollerPhotos.map((src, index) => (
                  <div key={`first-${index}`} className="scroller-item">
                    <img src={src} alt={`Patrick's journey moment ${index + 1}`} loading="lazy" />
                    <div className="scroller-overlay">
                      <p>{scrollerText[index]}</p>
                    </div>
                  </div>
                ))}
                {scrollerPhotos.map((src, index) => (
                  <div key={`second-${index}`} className="scroller-item" aria-hidden="true">
                    <img src={src} alt="" loading="lazy" />
                    <div className="scroller-overlay">
                      <p>{scrollerText[index]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Chapter 2: Product Management (UNCHANGED) */}
          <div className="story-chapter">
            <div 
              className={`story-content reverse ${isVisible('product') ? 'visible' : ''}`}
              data-animate-id="product"
            >
              <div className="chapter-header">
                <span className="chapter-number liquid-hover">02</span>
                <h2 className="chapter-title liquid-hover">Building Solutions That Matter</h2>
              </div>
              <div className="text-content">
                <p className="liquid-hover">
                  In my product management work, I focus on building HR-tech solutions that solve real problems while connecting user needs to business goals. I've managed end-to-end product lifecycles, from research and ideation to design and launch, always using tools like roadmaps and user research to keep the process grounded and collaborative. One of my key projects, for example, involved developing Rictan, a remote team HR app, alongside other innovative tech solutions—all with the aim of simplifying processes and empowering people.
                </p>
              </div>
            </div>

            <div 
              className={`product-showcase ${isVisible('product-showcase') ? 'visible' : ''}`}
              data-animate-id="product-showcase"
            >
              {personalPhotos.slice(4, 8).map((src, index) => (
                <div key={index} className={`product-photo photo-delay-${index}`}>
                  <div className="gallery-item">
                    <img src={src} alt={`Product development moment ${index + 1}`} loading="lazy" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chapter 3: Career Consultancy (UNCHANGED) */}
          <div className="story-chapter">
            <div 
              className={`story-content ${isVisible('career') ? 'visible' : ''}`}
              data-animate-id="career"
            >
              <div className="chapter-header">
                <span className="chapter-number liquid-hover">03</span>
                <h2 className="chapter-title liquid-hover">Empowering Career Growth</h2>
              </div>
              <div className="text-content">
                <p className="liquid-hover">
                  Beyond product management, I'm also the founder of Abiola Writes, a Lagos-based CV writing and career consultancy that has grown into one of Nigeria's leading firms in its field. At Abiola Writes, I've helped professionals across industries—whether they're entering the job market, pivoting careers, or climbing the corporate ladder—create powerful resumes and LinkedIn profiles that truly tell their stories. I believe that personal branding and storytelling are critical in career growth, and my work reflects that belief, helping countless clients secure interviews and land their dream jobs.
                </p>
              </div>
            </div>

            <div 
              className={`career-moments ${isVisible('career-moments') ? 'visible' : ''}`}
              data-animate-id="career-moments"
            >
              {personalPhotos.slice(8).map((src, index) => (
                <div key={index} className={`career-photo photo-stagger-${index}`}>
                  <div className="gallery-item">
                    <img src={src} alt={`Career milestone ${index + 1}`} loading="lazy" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Speaking Engagements Section (UNCHANGED) */}
          <div className="story-chapter">
            <div 
              className={`speaking-section ${isVisible('speaking') ? 'visible' : ''}`}
              data-animate-id="speaking"
            >
              <div className="chapter-header centered">
                <span className="chapter-number liquid-hover">04</span>
                <h2 className="chapter-title liquid-hover">Sharing Knowledge & Inspiring Others</h2>
                <p className="chapter-subtitle liquid-hover">From stages to screens, spreading insights across Nigeria's tech community</p>
              </div>
              
              <div className="poster-showcase">
                {posters.map((src, index) => (
                  <div key={index} className={`poster-reveal poster-${index}`}>
                    <div className="gallery-item">
                      <img src={src} alt={`Speaking engagement poster ${index + 1}`} loading="lazy" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications Section (UNCHANGED) */}
          <div className="story-chapter final">
            <div 
              className={`certifications-section ${isVisible('certs') ? 'visible' : ''}`}
              data-animate-id="certs"
            >
              <div className="chapter-header centered">
                <span className="chapter-number liquid-hover">05</span>
                <h2 className="chapter-title liquid-hover">Continuous Learning & Growth</h2>
                <p className="chapter-subtitle liquid-hover">Credentials that validate the journey</p>
              </div>
              
              <div className="certificates-showcase">
                {certificates.map((src, index) => (
                  <div key={index} className={`certificate-reveal cert-${index}`}>
                    <div className="gallery-item">
                      <img src={src} alt={`Professional certificate ${index + 1}`} loading="lazy" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      <style jsx>{`
        /* Keyframes for the scrolling animation */
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      
        .detailed-about-section { padding: 60px 0 120px; overflow: hidden; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .story-chapter { margin-bottom: 120px; position: relative; }
        .story-chapter.final { margin-bottom: 60px; }
        .chapter-header { margin-bottom: 60px; cursor: pointer; }
        .chapter-header.centered { text-align: center; }
        .chapter-number { display: inline-block; font-size: 1rem; font-weight: 600; opacity: 0.6; letter-spacing: 0.2em; margin-bottom: 10px; }
        .chapter-title { font-size: clamp(2rem, 5vw, 3rem); font-weight: 600; margin-bottom: 15px; line-height: 1.2; }
        .chapter-subtitle { font-size: clamp(1rem, 2.5vw, 1.2rem); opacity: 0.7; font-style: italic; margin-top: 10px; }
        .story-content { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; margin-bottom: 80px; opacity: 0; transform: translateY(50px); transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
        .story-content.reverse { direction: rtl; }
        .story-content.reverse > * { direction: ltr; }
        .story-content.visible { opacity: 1; transform: translateY(0); }
        .text-content p { font-size: clamp(1em, 2vw, 1.1em); line-height: 1.8; opacity: 0.9; }

        /* SCROLLER STYLES */
        .scroller-container {
          max-width: 100%;
          overflow: hidden;
          -webkit-mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
          mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 1s ease 0.3s, transform 1s ease 0.3s;
        }
        .scroller-container.visible { opacity: 1; transform: translateY(0); }
        .scroller-wrapper { display: flex; gap: 20px; padding-block: 10px; width: max-content; animation: scroll 30s linear infinite; }
        .scroller-container:hover .scroller-wrapper { animation-play-state: paused; }
        .scroller-item {
          position: relative; /* REQUIRED FOR OVERLAY */
          height: 300px;
          width: auto;
          flex-shrink: 0;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }
        .scroller-item:hover { transform: scale(1.05); box-shadow: 0 12px 28px rgba(0,0,0,0.2); }
        .scroller-item img { height: 100%; width: 100%; object-fit: cover; }

        /* NEW OVERLAY STYLES */
        .scroller-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background-color: rgba(0, 196, 154, 0.85); /* #00C49A with opacity */
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }
        .scroller-item:hover .scroller-overlay { opacity: 1; }
        .scroller-overlay p {
          color: #102542;
          font-size: 1.25rem;
          font-weight: 600;
          text-align: center;
          padding: 10px;
        }

        /* ALL ORIGINAL STYLES BELOW THIS LINE ARE UNCHANGED */
        .product-showcase { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; opacity: 0; transform: translateX(-50px); transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s; }
        .product-showcase.visible { opacity: 1; transform: translateX(0); }
        .product-photo { opacity: 0; transform: translateY(30px); transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
        .product-showcase.visible .photo-delay-0 { opacity: 1; transform: translateY(0); transition-delay: 0.1s; }
        .product-showcase.visible .photo-delay-1 { opacity: 1; transform: translateY(0); transition-delay: 0.2s; }
        .product-showcase.visible .photo-delay-2 { opacity: 1; transform: translateY(0); transition-delay: 0.3s; }
        .product-showcase.visible .photo-delay-3 { opacity: 1; transform: translateY(0); transition-delay: 0.4s; }
        .career-moments { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; }
        .career-photo { flex: 0 1 250px; opacity: 0; transform: scale(0.8) rotate(-5deg); transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1); }
        .career-moments.visible .photo-stagger-0 { opacity: 1; transform: scale(1) rotate(0deg); transition-delay: 0.1s; }
        .career-moments.visible .photo-stagger-1 { opacity: 1; transform: scale(1) rotate(0deg); transition-delay: 0.3s; }
        .career-moments.visible .photo-stagger-2 { opacity: 1; transform: scale(1) rotate(0deg); transition-delay: 0.5s; }
        .speaking-section { opacity: 0; transform: translateY(50px); transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
        .speaking-section.visible { opacity: 1; transform: translateY(0); }
        .poster-showcase { display: flex; justify-content: center; gap: 30px; flex-wrap: wrap; margin-top: 60px; }
        .poster-reveal { flex: 0 1 350px; max-width: 400px; opacity: 0; transform: translateY(40px) rotate(-2deg); transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1); }
        .speaking-section.visible .poster-0 { opacity: 1; transform: translateY(0) rotate(0deg); transition-delay: 0.2s; }
        .speaking-section.visible .poster-1 { opacity: 1; transform: translateY(0) rotate(0deg); transition-delay: 0.4s; }
        .speaking-section.visible .poster-2 { opacity: 1; transform: translateY(0) rotate(0deg); transition-delay: 0.6s; }
        .certifications-section { opacity: 0; transform: translateY(50px); transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
        .certifications-section.visible { opacity: 1; transform: translateY(0); }
        .certificates-showcase { display: flex; justify-content: center; gap: 40px; flex-wrap: wrap; margin-top: 60px; }
        .certificate-reveal { flex: 0 1 450px; max-width: 500px; opacity: 0; transform: translateY(40px) scale(0.9); transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1); }
        .certifications-section.visible .cert-0 { opacity: 1; transform: translateY(0) scale(1); transition-delay: 0.2s; }
        .certifications-section.visible .cert-1 { opacity: 1; transform: translateY(0) scale(1); transition-delay: 0.4s; }
        .gallery-item { overflow: hidden; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.1); transition: transform 0.3s ease, box-shadow 0.3s ease, z-index 0.3s ease; height: 100%; position: relative; cursor: pointer; }
        .gallery-item:hover { transform: translateY(-8px) scale(1.05); box-shadow: 0 16px 32px rgba(0,0,0,0.2); z-index: 100; }
        .gallery-item img { display: block; width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease; }
        
        @media (max-width: 1024px) {
          .story-content { grid-template-columns: 1fr; gap: 40px; text-align: center; }
          .story-content.reverse { direction: ltr; }
          .product-showcase { transform: translateY(50px); }
          .product-showcase.visible { transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .story-chapter { margin-bottom: 80px; }
          .scroller-item { height: 200px; }
          .scroller-wrapper { animation-duration: 25s; }
          .product-showcase { grid-template-columns: 1fr; }
          .poster-showcase, .certificates-showcase { gap: 20px; }
          .career-photo { flex: 0 1 200px; }
        }
      `}</style>
    </>
  );
}