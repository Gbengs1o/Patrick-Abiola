'use client';

// Icons object remains the same
const icons = {
  YouTube: <svg viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 11.75a29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>,
  TikTok: <svg viewBox="0 0 24 24"><path d="M12.53.02C13.84 0 15.14.01 16.44 0a5 5 0 0 1 5 5v5.09c0 4.47-2.59 5.86-7 5.86v-3.4c2.44 0 4.22-.61 4.22-2.88V5.38a2.17 2.17 0 0 0-2.17-2.19h-2.52Z"/><path d="M12.53 14.15V24H8.71V1.82h3.82v12.33Z"/></svg>,
  Threads: <svg viewBox="0 0 24 24"><path d="M12 22a10 10 0 0 1-5.6-18.2c.4-.2.8.2.7.7-.3 1.2-1.7 5.7 1.1 7.2 2 .9 4.3-.9 5-2.6.8-2-1-4.2-3.1-5.1-2.2-1-4.7.4-5.9 2.3-.3.5-.8.2-.7-.2C6.3 3.4 9 2 12 2a10 10 0 0 1 0 20Z"/></svg>,
  Facebook: <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
  Instagram: <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
  LinkedIn: <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
};


export function ContactSection() {
    const socialLinks = [
        { name: 'YouTube', href: '...', area: '1 / 1' },
        { name: 'TikTok', href: '...', area: '1 / 2' },
        { name: 'Threads', href: '...', area: '1 / 3' },
        { name: 'Facebook', href: '...', area: '3 / 1' },
        { name: 'Instagram', href: '...', area: '3 / 2' },
        { name: 'LinkedIn', href: '...', area: '3 / 3' },
    ];


  return (
    <>
      <section id="contact" className="contact-section">
        <div className="contact-container">
            <div className="line-h top"></div>
            <h1 className="liquid-hover">Get In Touch</h1>

            <div className="contact-layout">
                <a href="mailto:checkonpat@gmail.com" className="primary-cta liquid-hover">
                    <span className="cta-text">Email Me</span>
                    <div className="spinner-visual">
                        {/* --- THE FIX IS APPLIED HERE --- */}
                        <svg viewBox="-10 -10 120 120"> 
                            <path d="M 0,50 a 50,50 0 1,1 0,1 z" id="circlePath"></path>
                            <text>
                                <textPath href="#circlePath">
                                    AVAILABLE FOR COLLABORATION • AVAILABLE FOR COLLABORATION •
                                </textPath>
                            </text>
                        </svg>
                    </div>
                </a>
                
                <div className="social-links-container">
                    {socialLinks.map((link) => (
                        <a 
                          key={link.name} 
                          href={link.href} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="social-link liquid-hover"
                          style={{ gridArea: link.area }}
                          aria-label={link.name}
                        >
                          <div className="icon-wrapper">{icons[link.name]}</div>
                          <span className="link-name">{link.name}</span>
                        </a>
                    ))}
                </div>
            </div>

            <div className="line-h bottom"></div>
            <div className="footer-contacts">
                 <a href="mailto:rictanservices@gmail.com" className="liquid-hover">rictanservices@gmail.com</a>
                 <span className="footer-separator">•</span>
                 <a href="tel:+2348066073909" className="liquid-hover">+234 806 607 3909</a>
            </div>
        </div>
      </section>
      <style jsx>{`
        /* --- Base & Container Styles --- */
        .contact-section { min-height: 100vh; width: 100%; display: flex; align-items: center; justify-content: center; padding: 4rem 1.5rem; font-family: inherit; }
        .contact-container { width: 100%; max-width: 1100px; display: flex; flex-direction: column; align-items: center; gap: 2rem; }
        h1 { font-size: clamp(3rem, 8vw, 5rem); font-weight: 700; text-align: center; margin: 0; }
        .line-h { width: 1px; height: 40px; background-color: var(--accent-color); }
        
        /* --- Footer Styles --- */
        .footer-contacts { display: flex; flex-wrap: wrap; justify-content: center; align-items: center; font-size: 0.9rem; color: rgba(255,255,255,0.6); gap: 1rem; }
        .footer-contacts a { color: inherit; text-decoration: none; transition: color 0.3s ease; }
        .footer-contacts a:hover { color: #fff; }
        .footer-contacts .footer-separator { opacity: 0.5; }

        /* Icon styling (shared) */
        .icon-wrapper { width: 24px; height: 24px; color: var(--accent-color); }
        .icon-wrapper svg { width: 100%; height: 100%; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }

        /* ========================================================== */
        /* ============== MOBILE-FIRST STYLES ======================= */
        /* ========================================================== */
        .contact-layout {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2.5rem;
          width: 100%;
          max-width: 450px;
        }

        .primary-cta {
          display: grid;
          place-items: center;
          width: 100%;
          padding: 1rem;
          background-color: var(--card-bg-color);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 8px;
          text-decoration: none;
          color: var(--accent-color);
          font-size: 1.1rem;
          font-weight: 600;
          transition: transform 0.3s ease, background-color 0.3s ease;
        }
        .primary-cta:hover {
          transform: translateY(-3px);
          background-color: rgba(var(--accent-color-rgb, 0, 242, 234), 0.1);
        }
        .spinner-visual { display: none; }

        .social-links-container {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1.5rem;
        }
        .social-link {
          display: grid;
          place-items: center;
          width: 48px;
          height: 48px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: inherit;
          transition: background-color 0.3s ease, border-color 0.3s ease;
        }
        .social-link:hover {
          border-color: var(--accent-color);
          background-color: rgba(var(--accent-color-rgb, 0, 242, 234), 0.1);
        }
        .social-link .link-name { display: none; }

        @media (max-width: 768px) {
            .line-h, .footer-contacts .footer-separator { display: none; }
            .footer-contacts { flex-direction: column; gap: 0.5rem; }
        }

        /* ========================================================== */
        /* ========= DESKTOP STYLES (GRID & SPINNER REVEAL) ========= */
        /* ========================================================== */
        @media (min-width: 769px) {
            .contact-layout {
              max-width: none;
              display: grid;
              grid-template-columns: 1fr auto 1fr;
              grid-template-rows: 1fr auto 1fr;
              align-items: center;
              justify-items: center;
              gap: 1.5rem;
              padding: 2rem 0;
            }

            .primary-cta {
              grid-area: 2 / 2;
              position: relative;
              width: 160px;
              height: 160px;
              padding: 0;
              background-color: transparent;
              border: none;
            }
            .primary-cta:hover { transform: none; background-color: transparent; }
            
            .cta-text {
              width: 110px;
              height: 110px;
              background-color: var(--card-bg-color);
              border: 1px solid rgba(255, 255, 255, 0.1);
              border-radius: 50%;
              display: grid; place-items: center;
              transition: transform 0.3s ease, background-color 0.3s ease;
              z-index: 2;
            }
            .primary-cta:hover .cta-text {
              transform: scale(1.1);
              background-color: rgba(var(--accent-color-rgb, 0, 242, 234), 0.1);
            }

            .spinner-visual { 
              display: block; 
              position: absolute; width: 100%; height: 100%;
              animation: spin 30s linear infinite; z-index: 1;
            }
            @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
            .spinner-visual svg { 
                /* This is also important - ensures SVG content doesn't get clipped by its own element boundaries */
                overflow: visible; 
            }
            .spinner-visual text { fill: rgba(255,255,255,0.7); font-size: 9px; text-transform: uppercase; letter-spacing: 2px; }

            .social-links-container {
              grid-area: 1 / 1 / 4 / 4;
              display: contents;
            }
            .social-link {
              display: flex;
              flex-direction: column;
              text-align: center;
              gap: 0.75rem;
              padding: 1.5rem;
              width: 150px;
              height: auto;
              border-radius: 8px;
              justify-content: center;
            }
            .social-link .link-name { display: block; font-weight: 500; }
        }
      `}</style>
    </>
  );
}