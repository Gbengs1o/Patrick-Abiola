'use client';

// Helper component for SVG icons. Color is now hardcoded.
const ExpertiseIcons = ({ area }) => {
  const iconColor = "#00C49A";

  switch (area) {
    case 'product':
      return (
        <svg viewBox="0 0 64 64" fill="none" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="expertise-svg">
          <title>Product Management Icon</title>
          <rect x="12" y="20" width="40" height="32" className="product-box" />
          <circle cx="32" cy="32" r="6" className="user-head" />
          <path d="M42 48a10 10 0 00-20 0" className="user-body" />
          <circle cx="20" cy="16" r="4" />
          <path d="M20 12V8m0 16v-4m-4-4H8m16 0h-4" className="gear-one" />
          <circle cx="44" cy="16" r="5" />
          <path d="M44 11V6m0 20v-5m-5-5H34m20 0h-5" className="gear-two" />
        </svg>
      );
    case 'cv':
      return (
        <svg viewBox="0 0 64 64" fill="none" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="expertise-svg">
          <title>CV & Career Services Icon</title>
          <path d="M20 12h16l8 8v28a4 4 0 01-4 4H20a4 4 0 01-4-4V16a4 4 0 014-4z" />
          <polyline points="36 12 36 20 44 20" />
          <path d="M24 38l8-8 8 8" className="arrow-up" />
          <path d="M32 30v14" className="arrow-up" />
        </svg>
      );
    case 'speaking':
      return (
        <svg viewBox="0 0 64 64" fill="none" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="expertise-svg">
          <title>Public Speaking Icon</title>
          <path d="M24 54h16" />
          <path d="M32 54V38" />
          <path d="M20 38h24v-8H20v8z" />
          <path d="M42 30a10 10 0 00-20 0" className="wave-1"/>
          <path d="M46 30a14 14 0 00-28 0" className="wave-2"/>
          <path d="M50 30a18 18 0 00-36 0" className="wave-3"/>
        </svg>
      );
    case 'community':
      return (
        <svg viewBox="0 0 64 64" fill="none" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="expertise-svg">
          <title>Community Engagement Icon</title>
          <circle cx="32" cy="18" r="5" className="person-icon" style={{ animationDelay: '0s' }}/>
          <path d="M42 32a10 10 0 00-20 0" className="person-icon" style={{ animationDelay: '0s' }} />
          <circle cx="16" cy="28" r="4" className="person-icon" style={{ animationDelay: '0.2s' }}/>
          <path d="M23 40a7 7 0 00-14 0" className="person-icon" style={{ animationDelay: '0.2s' }} />
          <circle cx="48" cy="28" r="4" className="person-icon" style={{ animationDelay: '0.4s' }}/>
          <path d="M55 40a7 7 0 00-14 0" className="person-icon" style={{ animationDelay: '0.4s' }} />
          <path d="M20.5 32.5L28.5 22.5" className="connecting-line" />
          <path d="M43.5 32.5L35.5 22.5" className="connecting-line" />
        </svg>
      );
    case 'approach':
       return (
        <svg viewBox="0 0 64 64" fill="none" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="expertise-svg">
            <title>My Approach Icon</title>
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L24 24l10.88-10.88 1.06-1.06a5.5 5.5 0 0 0-7.78-7.78L24 8.51l-3.16-3.9z" transform="translate(6, 40)" className="heart-beat"/>
            <path d="M32 50a10 10 0 007.5-16.5A10 10 0 0032 18a10 10 0 00-7.5 16.5A10 10 0 0032 50z" className="bulb-glow"/>
            <path d="M36 50h-8v4h8v-4z"/>
            <path d="M12 12l8 8" className="strategy-line" />
            <path d="M52 12l-8 8" className="strategy-line" style={{ animationDelay: '0.2s' }} />
        </svg>
       );
    default:
      return null;
  }
};

export function ExtendedAboutSection() {
  return (
    <>
      <section className="extended-about-section">
        <div className="container">
          <div className="content-wrapper">
            <h2 className="main-title liquid-hover">Key Areas of Expertise</h2>

            <div className="expertise-item">
              <div className="svg-container">
                <ExpertiseIcons area="product" />
              </div>
              <h3 className="liquid-hover">Product Management & HRTech</h3>
              <p className="liquid-hover">
                My transition into product management was a natural one, built on my leadership experience and my love for solving complex problems. I’ve designed and delivered complete product solutions, always prioritizing collaboration, iteration, and aligning every feature to both user needs and business goals.
              </p>
            </div>

            <div className="expertise-item">
              <div className="svg-container">
                <ExpertiseIcons area="cv" />
              </div>
              <h3 className="liquid-hover">Professional CV & Career Services</h3>
              <p className="liquid-hover">
                Running Abiola Writes has been one of my most rewarding ventures. Our services—from resume creation and revamping to LinkedIn optimization—are designed to deliver quick, personalized results that help people stand out. I’ve seen firsthand how the right story, told well, can transform a career, and it’s something I take pride in providing for my clients.
              </p>
            </div>

            <div className="expertise-item">
              <div className="svg-container">
                <ExpertiseIcons area="speaking" />
              </div>
              <h3 className="liquid-hover">Public Speaking & Training</h3>
              <p className="liquid-hover">
                Public speaking has always been close to my heart. As a certified public speaker, coach, and compere, I regularly train and speak on topics like career development, leadership, and product management. One of my proudest moments was in March 2025 when I organized the Abiola Patrick Public Speaking Competition (APPSC 4.0) in Osogbo. The event gave secondary school students a platform to speak on global peace, and seeing their confidence and passion reaffirmed my belief in the power of communication to change lives.
              </p>
            </div>

            <div className="expertise-item">
               <div className="svg-container">
                <ExpertiseIcons area="community" />
              </div>
              <h3 className="liquid-hover">Youth Leadership & Community Engagement</h3>
              <p className="liquid-hover">
                Community leadership is another area where I’ve invested a lot of energy, especially through JCI Osogbo Elite (Junior Chamber International), where I served as the Charter President. Working with JCI leaders and NGOs, I’ve helped coordinate mentorship programs, speaking events, and initiatives aimed at youth empowerment and social change. From gender equality campaigns to International Women’s Day events, I’ve always believed in using my platform to inspire and equip young people to lead with purpose.
              </p>
            </div>

            <div className="approach-section">
              <div className="expertise-item">
                <div className="svg-container">
                    <ExpertiseIcons area="approach" />
                </div>
                <h3 className="liquid-hover">My Approach</h3>
                <p className="liquid-hover">
                    What sets me apart is my ability to combine strategy, creativity, and empathy in everything I do. Whether I’m mapping out a product strategy, designing a new service, or coaching a client, I draw on my communication skills, leadership experience, and technical know-how. Tools like Figma and Notion help me bring ideas to life, but it’s my belief that “creativity isn’t just a talent—it’s a way of seeing” that drives my success.
                </p>
              </div>
              <p className="liquid-hover">
                By blending strategic thinking, storytelling, and innovation, I continue to guide businesses and individuals toward growth and success. For me, it’s not just about building products or writing resumes—it’s about empowering people to see possibilities and take bold steps toward their goals.
              </p>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .extended-about-section {
          padding: 60px 0 120px;
          background-color: rgba(27, 58, 105, 0.5);
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
        }
        .container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .content-wrapper {
          max-width: 750px;
          margin: 0 auto;
        }
        .main-title {
          font-size: clamp(2rem, 5vw, 2.5rem);
          text-align: center;
          margin-bottom: 4rem;
        }
        
        /* --- NEW LAYOUT STYLES --- */
        .expertise-item {
          margin-bottom: 4rem;
          text-align: center; /* Center the icon and h3 */
        }

        .svg-container {
          width: 65px;
          height: 65px;
          margin: 0 auto 1.5rem; /* Center horizontally and add space below */
        }

        .expertise-item p {
          text-align: left; /* Reset paragraph text for readability */
        }
        /* --- END NEW LAYOUT STYLES --- */
        
        .approach-section {
          margin-top: 5rem;
        }

        /* Original styles are preserved */
        h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--accent-color);
          display: inline-block;
        }
        p {
          font-size: clamp(1em, 2vw, 1.1em);
          line-height: 1.8;
          opacity: 0.9;
        }
        .approach-section > p { /* Target only the final paragraph */
          margin-bottom: 1.5rem;
          text-align: left;
        }
        
        /* --- SVG ANIMATIONS (UNCHANGED) --- */
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.05); opacity: 1; }
        }
        @keyframes float-up {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes pop-in {
          from { transform: scale(0.5); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
         @keyframes wave-spread {
          0% { transform: scale(0.5); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        @keyframes draw-line {
            to { stroke-dashoffset: 0; }
        }

        .gear-one {
          transform-origin: 20px 16px;
          animation: rotate 10s linear infinite;
        }
        .gear-two {
          transform-origin: 44px 16px;
          animation: rotate 12s linear infinite reverse;
        }
        
        .arrow-up {
          animation: float-up 2.5s ease-in-out infinite;
        }

        .wave-1, .wave-2, .wave-3 {
            transform-origin: 32px 30px;
            animation: wave-spread 3s linear infinite;
        }
        .wave-2 { animation-delay: 1s; }
        .wave-3 { animation-delay: 2s; }

        .person-icon {
            opacity: 0;
            animation: pop-in 0.8s forwards;
        }
        .connecting-line {
            stroke-dasharray: 100;
            stroke-dashoffset: 100;
            animation: draw-line 1s forwards 0.5s;
        }
        
        .heart-beat {
            transform-origin: center;
            animation: pulse 2s ease-in-out infinite;
        }
        .bulb-glow {
            animation: pulse 3s ease-in-out infinite 1s;
        }
        .strategy-line {
            opacity: 0;
            animation: pop-in 1s forwards 0.3s;
        }
      `}</style>
    </>
  );
}