'use client';

import { useEffect, useRef } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function Home() {
  const portfolioContainerRef = useRef<HTMLDivElement>(null);
  const timelineProgressRef = useRef<HTMLDivElement>(null);
  const timelineDotRef = useRef<HTMLDivElement>(null);
  const projectTitlesRef = useRef<Array<HTMLHeadingElement | null>>([]);
  const projectContentsRef = useRef<Array<HTMLDivElement | null>>([]);
  const triggersRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    projectTitlesRef.current = Array.from(document.querySelectorAll('.project-titles h2'));
    projectContentsRef.current = Array.from(document.querySelectorAll('.project-content'));
    triggersRef.current = Array.from(document.querySelectorAll('.scroll-triggers .trigger'));

    const setActiveProject = (index: number) => {
      projectTitlesRef.current.forEach(title => title?.classList.remove('active'));
      projectContentsRef.current.forEach(content => content?.classList.remove('active'));

      if (projectTitlesRef.current[index]) {
        projectTitlesRef.current[index]?.classList.add('active');
      }
      if (projectContentsRef.current[index]) {
        projectContentsRef.current[index]?.classList.add('active');
      }
    };

    const handleScroll = () => {
      const portfolioContainer = portfolioContainerRef.current;
      if (!portfolioContainer) return;

      let activeIndex = -1;
      const viewportHeight = window.innerHeight;
      triggersRef.current.forEach((trigger, index) => {
        if (trigger) {
          const triggerTop = trigger.getBoundingClientRect().top;
          if (triggerTop <= viewportHeight / 2) {
            activeIndex = index;
          }
        }
      });

      if (activeIndex > -1) {
        setActiveProject(activeIndex);
      } else {
        setActiveProject(0);
      }

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
      
      if (timelineProgressRef.current) {
        timelineProgressRef.current.style.height = `${progress * 100}%`;
      }
      if (timelineDotRef.current) {
        timelineDotRef.current.style.top = `${progress * 100}%`;
      }
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
        {/* ========= HERO SECTION ========= */}
        <section id="home" className="hero">
          <h1>Patrick Abiola</h1>
          <p className="subtitle">Product Manager | Career Coach | HR Consultant | Public Speaker</p>
          <div className="scroll-prompt">[ Scroll down ]</div>
        </section>

        {/* ========= ABOUT SECTION ========= */}
        <section id="about" className="about-section">
          <div className="container">
            <h2>Professional Profile</h2>
            <p>
              A dynamic and multi-talented professional bridging the gap between product innovation, human resources, and career development. With a proven track record in designing user-centric tech solutions, coaching professionals to land their dream roles, and captivating audiences from the stage. Known for bringing energy, empathy, and a results-driven approach to every project, whether it's building a product roadmap, crafting a standout CV, or delivering an inspiring keynote.
            </p>
          </div>
        </section>

        {/* ========= EXPERTISE SECTION ========= */}
        <section id="expertise" ref={portfolioContainerRef}>
          <div className="portfolio-container">
            <div className="sticky-container">
              <div className="project-titles">
                <h2 data-project="pm">Product Management</h2>
                <h2 data-project="career">Career Development</h2>
                <h2 data-project="hr">HR & People Operations</h2>
                <h2 data-project="speaking">Public Speaking</h2>
              </div>
              <div className="project-details">
                <div className="timeline">
                  <div className="timeline-progress" ref={timelineProgressRef}></div>
                  <div className="timeline-dot" ref={timelineDotRef}></div>
                </div>
                <div className="project-content-wrapper">
                  {/* 1. Product Management Content */}
                  <div className="project-content" data-project="pm">
                    <h3>Building Intuitive Solutions</h3>
                    <p>Focused on building tech solutions that solve real-world problems for HR and remote teams.</p>
                    <ul>
                      <li><strong>Rictan App (Ongoing):</strong> A solution connecting HR teams with a global remote workforce. Authored PRDs, developed the roadmap, and led user research.</li>
                      <li><strong>Capstone Project:</strong> Designed and delivered a complete end-to-end product solution, demonstrating practical skills in market research and execution.</li>
                    </ul>
                    <div className="project-role-container">
                      <div className="role-title">Skills & Tools</div>
                      <div className="role-tags"><span>Roadmapping</span><span>PRD Writing</span><span>User Research</span><span>Figma</span><span>Miro</span><span>Notion</span></div>
                    </div>
                  </div>

                  {/* 2. Career Development Content */}
                  <div className="project-content" data-project="career">
                    <h3>Empowering Professionals</h3>
                    <p>Dedicated to helping professionals articulate their value and advance their careers, with a track record of success.</p>
                    <ul>
                      <li>Empowered over <strong>50 clients</strong> across diverse industries.</li>
                      <li>Clients have secured interviews at startups, multinational corporations, and public agencies.</li>
                      <li><strong>Services:</strong> CV Writing (₦30k), CV Revamp (₦20k), LinkedIn Optimization (₦20k).</li>
                    </ul>
                    <div className="project-role-container">
                      <div className="role-title">Services</div>
                      <div className="role-tags"><span>CV Writing</span><span>CV Revamp</span><span>LinkedIn Optimization</span><span>Career Coaching</span></div>
                    </div>
                  </div>

                  {/* 3. HR & People Operations Content */}
                  <div className="project-content" data-project="hr">
                    <h3>Building Thriving Teams</h3>
                    <p>Leveraging a strong foundation in HR to build efficient and engaged teams, with a specialty in remote work culture.</p>
                    <ul>
                      <li>End-to-end recruitment and onboarding for remote teams.</li>
                      <li>Employee engagement strategies to boost morale and retention.</li>
                      <li>Consulting for small businesses on building strong remote cultures.</li>
                    </ul>
                    <div className="project-role-container">
                      <div className="role-title">Core Competencies</div>
                      <div className="role-tags"><span>Recruitment</span><span>Onboarding</span><span>Employee Engagement</span><span>Remote Culture</span><span>HR-Tech</span></div>
                    </div>
                  </div>

                  {/* 4. Public Speaking Content */}
                  <div className="project-content" data-project="speaking">
                    <h3>Inspiring Action</h3>
                    <p>An engaging speaker and trainer passionate about empowering the next generation of leaders and professionals. Founder of the Abiola Patrick Public Speaking Competition.</p>
                    <ul>
                      <li>Available for physical and virtual keynotes, workshops, and panel discussions.</li>
                    </ul>
                    <div className="project-role-container">
                      <div className="role-title">Key Topics</div>
                      <div className="role-tags"><span>Career Growth</span><span>Product Management</span><span>Leadership</span><span>Youth Empowerment</span><span>Communication</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="scroll-triggers">
              <div className="trigger" data-project="pm"></div>
              <div className="trigger" data-project="career"></div>
              <div className="trigger" data-project="hr"></div>
              <div className="trigger" data-project="speaking"></div>
            </div>
          </div>
        </section>

        {/* ========= CONTACT SECTION ========= */}
        <section id="contact" className="contact-section">
          <div className="container">
            <h2>Let's Connect</h2>
            <p>
              I'm always open to discussing new projects, speaking opportunities, or collaborations. Let's build something great together.
            </p>
            <div className="contact-links">
              <a href="mailto:checkonpat@gmail.com">checkonpat@gmail.com</a>
              <a href="tel:+2348066073909">+234 806 607 3909</a>
              <a href="https://www.linkedin.com/in/patrick-abiola-061020176" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
