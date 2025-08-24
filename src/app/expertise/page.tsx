
'use client';

import { useEffect, useRef, useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

// We'll create a structured data array for easier mapping on mobile.
const expertiseData = [
  {
    title: "Product Management",
    subtitle: "Building Intuitive Solutions",
    description: "Focused on building tech solutions that solve real-world problems for HR and remote teams.",
    list: [
      "<strong>Rictan App (Ongoing):</strong> A solution connecting HR teams with a global remote workforce. Authored PRDs, developed the roadmap, and led user research.",
      "<strong>Capstone Project:</strong> Designed and delivered a complete end-to-end product solution, demonstrating practical skills in market research and execution."
    ],
    skillsTitle: "Skills & Tools",
    tags: ["Roadmapping", "PRD Writing", "User Research", "Figma", "Miro", "Notion"]
  },
  {
    title: "Career Development",
    subtitle: "Empowering Professionals",
    description: "Dedicated to helping professionals articulate their value and advance their careers, with a track record of success.",
    list: [
      "Empowered over <strong>50 clients</strong> across diverse industries.",
      "Clients have secured interviews at startups, multinational corporations, and public agencies.",
      "<strong>Services:</strong> CV Writing (₦30k), CV Revamp (₦20k), LinkedIn Optimization (₦20k)."
    ],
    skillsTitle: "Services",
    tags: ["CV Writing", "CV Revamp", "LinkedIn Optimization", "Career Coaching"]
  },
  {
    title: "HR & People Operations",
    subtitle: "Building Thriving Teams",
    description: "Leveraging a strong foundation in HR to build efficient and engaged teams, with a specialty in remote work culture.",
    list: [
      "End-to-end recruitment and onboarding for remote teams.",
      "Employee engagement strategies to boost morale and retention.",
      "Consulting for small businesses on building strong remote cultures."
    ],
    skillsTitle: "Core Competencies",
    tags: ["Recruitment", "Onboarding", "Employee Engagement", "Remote Culture", "HR-Tech"]
  },
  {
    title: "Public Speaking",
    subtitle: "Inspiring Action",
    description: "An engaging speaker and trainer passionate about empowering the next generation of leaders and professionals. Founder of the Abiola Patrick Public Speaking Competition.",
    list: [
      "Available for physical and virtual keynotes, workshops, and panel discussions."
    ],
    skillsTitle: "Key Topics",
    tags: ["Career Growth", "Product Management", "Leadership", "Youth Empowerment", "Communication"]
  }
];


export default function ExpertisePage() {
  // --- STATE FOR MOBILE SLIDER ---
  const [activeIndex, setActiveIndex] = useState(0);

  // --- REFS AND EFFECT FOR DESKTOP SCROLLYTELLING ---
  const portfolioContainerRef = useRef<HTMLElement>(null);
  const timelineProgressRef = useRef<HTMLDivElement>(null);
  const timelineDotRef = useRef<HTMLDivElement>(null);
  const projectTitlesRef = useRef<Array<HTMLHeadingElement | null>>([]);
  const projectContentsRef = useRef<Array<HTMLDivElement | null>>([]);
  const triggersRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    // Media query to ensure this complex logic ONLY runs on desktop
    if (window.innerWidth <= 768) return;

    const portfolioContainer = portfolioContainerRef.current;
    if (!portfolioContainer) return;

    projectTitlesRef.current = Array.from(portfolioContainer.querySelectorAll('.project-titles h2'));
    projectContentsRef.current = Array.from(portfolioContainer.querySelectorAll('.project-content'));
    triggersRef.current = Array.from(portfolioContainer.querySelectorAll('.scroll-triggers .trigger'));

    const setActiveProject = (index: number) => {
      projectTitlesRef.current.forEach(title => title?.classList.remove('active'));
      projectContentsRef.current.forEach(content => content?.classList.remove('active'));
      if (projectTitlesRef.current[index]) projectTitlesRef.current[index]?.classList.add('active');
      if (projectContentsRef.current[index]) projectContentsRef.current[index]?.classList.add('active');
    };

    const handleScroll = () => {
      let activeIndex = -1;
      const viewportHeight = window.innerHeight;
      triggersRef.current.forEach((trigger, index) => {
        if (trigger) {
          const triggerTop = trigger.getBoundingClientRect().top;
          if (triggerTop <= viewportHeight / 2) activeIndex = index;
        }
      });

      if (activeIndex > -1) setActiveProject(activeIndex);
      else setActiveProject(0);

      const portfolioTop = portfolioContainer.offsetTop;
      const portfolioHeight = portfolioContainer.offsetHeight;
      const totalScrollableHeight = portfolioHeight - viewportHeight;
      const currentScroll = window.scrollY - portfolioTop;
      const progress = Math.min(Math.max(currentScroll / totalScrollableHeight, 0), 1);
      
      if (window.scrollY < portfolioTop) {
        if(timelineProgressRef.current) timelineProgressRef.current.style.height = '0%';
        if(timelineDotRef.current) timelineDotRef.current.style.top = '0%';
        return;
      }
      
      if (timelineProgressRef.current) timelineProgressRef.current.style.height = `${progress * 100}%`;
      if (timelineDotRef.current) timelineDotRef.current.style.top = `${progress * 100}%`;
    };

    setActiveProject(0);
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <section id="expertise" ref={portfolioContainerRef}>
          
          {/* ========================================================== */}
          {/* =========== DESKTOP VIEW (UNCHANGED) ===================== */}
          {/* ========================================================== */}
          <div className="expertise-desktop">
            <div className="portfolio-container">
              <div className="sticky-container">
                <div className="project-titles">
                  <h2 data-project="pm" className="liquid-hover">Product Management</h2>
                  <h2 data-project="career" className="liquid-hover">Career Development</h2>
                  <h2 data-project="hr" className="liquid-hover">HR & People Operations</h2>
                  <h2 data-project="speaking" className="liquid-hover">Public Speaking</h2>
                </div>
                <div className="project-details">
                  <div className="timeline">
                    <div className="timeline-progress" ref={timelineProgressRef}></div>
                    <div className="timeline-dot" ref={timelineDotRef}></div>
                  </div>
                  <div className="project-content-wrapper">
                    {/* Content is hardcoded here for desktop as per original */}
                    <div className="project-content" data-project="pm"><h3 className="liquid-hover">Building Intuitive Solutions</h3><p className="liquid-hover">Focused on building tech solutions that solve real-world problems for HR and remote teams.</p><ul><li className="liquid-hover"><strong>Rictan App (Ongoing):</strong> A solution connecting HR teams with a global remote workforce. Authored PRDs, developed the roadmap, and led user research.</li><li className="liquid-hover"><strong>Capstone Project:</strong> Designed and delivered a complete end-to-end product solution, demonstrating practical skills in market research and execution.</li></ul><div className="project-role-container"><div className="role-title liquid-hover">Skills & Tools</div><div className="role-tags"><span className="liquid-hover">Roadmapping</span><span className="liquid-hover">PRD Writing</span><span className="liquid-hover">User Research</span><span className="liquid-hover">Figma</span><span className="liquid-hover">Miro</span><span className="liquid-hover">Notion</span></div></div></div>
                    <div className="project-content" data-project="career"><h3 className="liquid-hover">Empowering Professionals</h3><p className="liquid-hover">Dedicated to helping professionals articulate their value and advance their careers, with a track record of success.</p><ul><li className="liquid-hover">Empowered over <strong>50 clients</strong> across diverse industries.</li><li className="liquid-hover">Clients have secured interviews at startups, multinational corporations, and public agencies.</li><li className="liquid-hover"><strong>Services:</strong> CV Writing (₦30k), CV Revamp (₦20k), LinkedIn Optimization (₦20k).</li></ul><div className="project-role-container"><div className="role-title liquid-hover">Services</div><div className="role-tags"><span className="liquid-hover">CV Writing</span><span className="liquid-hover">CV Revamp</span><span className="liquid-hover">LinkedIn Optimization</span><span className="liquid-hover">Career Coaching</span></div></div></div>
                    <div className="project-content" data-project="hr"><h3 className="liquid-hover">Building Thriving Teams</h3><p className="liquid-hover">Leveraging a strong foundation in HR to build efficient and engaged teams, with a specialty in remote work culture.</p><ul><li className="liquid-hover">End-to-end recruitment and onboarding for remote teams.</li><li className="liquid-hover">Employee engagement strategies to boost morale and retention.</li><li className="liquid-hover">Consulting for small businesses on building strong remote cultures.</li></ul><div className="project-role-container"><div className="role-title liquid-hover">Core Competencies</div><div className="role-tags"><span className="liquid-hover">Recruitment</span><span className="liquid-hover">Onboarding</span><span className="liquid-hover">Employee Engagement</span><span className="liquid-hover">Remote Culture</span><span className="liquid-hover">HR-Tech</span></div></div></div>
                    <div className="project-content" data-project="speaking"><h3 className="liquid-hover">Inspiring Action</h3><p className="liquid-hover">An engaging speaker and trainer passionate about empowering the next generation of leaders and professionals. Founder of the Abiola Patrick Public Speaking Competition.</p><ul><li className="liquid-hover">Available for physical and virtual keynotes, workshops, and panel discussions.</li></ul><div className="project-role-container"><div className="role-title liquid-hover">Key Topics</div><div className="role-tags"><span className="liquid-hover">Career Growth</span><span className="liquid-hover">Product Management</span><span className="liquid-hover">Leadership</span><span className="liquid-hover">Youth Empowerment</span><span className="liquid-hover">Communication</span></div></div></div>
                  </div>
                </div>
              </div>
              <div className="scroll-triggers">
                <div className="trigger" data-project="pm"></div><div className="trigger" data-project="career"></div><div className="trigger" data-project="hr"></div><div className="trigger" data-project="speaking"></div>
              </div>
            </div>
          </div>

          {/* ========================================================== */}
          {/* =========== NEW MOBILE VIEW ============================== */}
          {/* ========================================================== */}
          <div className="expertise-mobile">
              <h2 className="liquid-hover">Areas of Expertise</h2>
              <div className="mobile-nav">
                  {expertiseData.map((item, index) => (
                      <button
                          key={item.title}
                          className={`nav-button ${index === activeIndex ? 'active' : ''}`}
                          onClick={() => setActiveIndex(index)}
                      >
                          {item.title}
                      </button>
                  ))}
              </div>
              <div className="mobile-content-slider">
                  <div className="slider-track" style={{ transform: `translateX(-${activeIndex * 100}%)`}}>
                      {expertiseData.map(item => (
                          <div key={item.title} className="content-pane">
                              <h3 className="liquid-hover">{item.subtitle}</h3>
                              <p className="liquid-hover">{item.description}</p>
                              <ul className="liquid-hover">
                                  {item.list.map((listItem, i) => (
                                      <li key={i} dangerouslySetInnerHTML={{ __html: listItem }} />
                                  ))}
                              </ul>
                              <div className="project-role-container">
                                  <div className="role-title liquid-hover">{item.skillsTitle}</div>
                                  <div className="role-tags">
                                      {item.tags.map(tag => <span key={tag} className="liquid-hover">{tag}</span>)}
                                  </div>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
        </section>
      </main>
      <Footer />
      {/* ========================================================== */}
      {/* =========== STYLES (DESKTOP + NEW MOBILE) ================ */}
      {/* ========================================================== */}
      <style jsx>{`
        /* --- DESKTOP STYLES (UNCHANGED) --- */
        .expertise-desktop { display: block; }
        .expertise-mobile { display: none; }
        .portfolio-container { position: relative; }
        .sticky-container { position: sticky; top: 0; height: 100vh; width: 100%; display: grid; grid-template-columns: 1fr 1fr; gap: 50px; padding: 50px; align-items: center; overflow: hidden; }
        .scroll-triggers { position: relative; z-index: -1; }
        .scroll-triggers .trigger { height: 100vh; }
        .project-titles { display: flex; flex-direction: column; justify-content: center; align-items: flex-start; gap: 20px; }
        .project-titles h2 { font-size: 3.5vw; opacity: 0.5; transform: translateX(-20px); transition: opacity 0.4s ease, transform 0.4s ease, color 0.4s ease; cursor: default; }
        .project-titles h2.active { opacity: 1; color: var(--accent-color); transform: translateX(0); }
        .project-details { position: relative; height: 100%; display: flex; justify-content: flex-start; align-items: center; }
        .timeline { position: absolute; left: -25px; top: 0; height: 100%; width: 2px; background-color: rgba(255,255,255,0.1); }
        .timeline-progress { width: 100%; height: 0; background-color: var(--accent-color); position: relative; }
        .timeline-dot { position: absolute; top: 0; left: 50%; width: 12px; height: 12px; background-color: var(--accent-color); border-radius: 50%; transform: translate(-50%, -50%); transition: top 0.1s linear; }
        .project-content-wrapper { position: relative; width: 100%; max-width: 600px; height: 80vh; }
        .project-content { position: absolute; top: 0; left: 0; width: 100%; opacity: 0; transform: translateY(30px); transition: opacity 0.5s ease-out, transform 0.5s ease-out; pointer-events: none; }
        .project-content.active { opacity: 1; transform: translateY(0); pointer-events: auto; }
        .project-content p, .project-content ul { font-size: 1em; line-height: 1.6; margin-bottom: 20px; opacity: 0.9; }
        .project-content ul { list-style-position: inside; padding-left: 10px; }
        .project-content h3 { margin-bottom: 15px; font-size: 1.5em; }
        .project-role-container { margin-top: 25px; }
        .project-role-container .role-title { font-size: 0.8em; opacity: 0.6; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 0.5px; }
        .role-tags { display: flex; flex-wrap: wrap; gap: 10px; }
        .role-tags span { background-color: var(--card-bg-color); padding: 5px 15px; border-radius: 20px; font-size: 0.9em; border: 1px solid rgba(255,255,255,0.1); }

        /* --- NEW MOBILE STYLES (<= 768px) --- */
        @media (max-width: 768px) {
          #expertise { padding-top: 5rem;}
          .expertise-desktop { display: none; }
          .expertise-mobile {
            display: block;
            padding: 80px 20px;
          }
          .expertise-mobile h2 {
            text-align: center;
            font-size: 2.5em;
            margin-bottom: 30px;
          }
          .mobile-nav {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 10px;
            margin-bottom: 30px;
          }
          .nav-button {
            background: transparent;
            border: 1px solid rgba(255,255,255,0.2);
            color: rgba(255,255,255,0.7);
            padding: 8px 16px;
            border-radius: 20px;
            cursor: pointer;
            font-size: 0.9em;
            transition: all 0.3s ease;
          }

          /* --- THIS IS THE MODIFIED PART --- */
          .nav-button.active {
            background-color: var(--accent-color); /* Vibrant Teal */
            border-color: var(--accent-color); /* Matching border color */
            color: var(--bg-color); /* Black text */
            font-weight: 600;
          }
          /* --- END OF MODIFICATION --- */

          .mobile-content-slider {
            overflow: hidden;
          }
          .slider-track {
            display: flex;
            transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
          }
          .content-pane {
            flex: 0 0 100%;
            width: 100%;
            padding: 0 5px; /* Slight padding to avoid touching edges */
          }
        }
      `}</style>
    </>
  );
}
