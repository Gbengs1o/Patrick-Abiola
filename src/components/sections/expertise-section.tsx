'use client';

import { useEffect, useRef } from 'react';

export function ExpertiseSection() {
  const portfolioContainerRef = useRef<HTMLElement>(null);
  const timelineProgressRef = useRef<HTMLDivElement>(null);
  const timelineDotRef = useRef<HTMLDivElement>(null);
  const projectTitlesRef = useRef<Array<HTMLHeadingElement | null>>([]);
  const projectContentsRef = useRef<Array<HTMLDivElement | null>>([]);
  const triggersRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const portfolioContainer = portfolioContainerRef.current;
    if (!portfolioContainer) return;

    projectTitlesRef.current = Array.from(portfolioContainer.querySelectorAll('.project-titles h2'));
    projectContentsRef.current = Array.from(portfolioContainer.querySelectorAll('.project-content'));
    triggersRef.current = Array.from(portfolioContainer.querySelectorAll('.scroll-triggers .trigger'));

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
    <section id="expertise" ref={portfolioContainerRef}>
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
              {/* 1. Product Management Content */}
              <div className="project-content" data-project="pm">
                <h3 className="liquid-hover">Building Intuitive Solutions</h3>
                <p className="liquid-hover">Focused on building tech solutions that solve real-world problems for HR and remote teams.</p>
                <ul>
                  <li className="liquid-hover"><strong>Rictan App (Ongoing):</strong> A solution connecting HR teams with a global remote workforce. Authored PRDs, developed the roadmap, and led user research.</li>
                  <li className="liquid-hover"><strong>Capstone Project:</strong> Designed and delivered a complete end-to-end product solution, demonstrating practical skills in market research and execution.</li>
                </ul>
                <div className="project-role-container">
                  <div className="role-title liquid-hover">Skills & Tools</div>
                  <div className="role-tags"><span className="liquid-hover">Roadmapping</span><span className="liquid-hover">PRD Writing</span><span className="liquid-hover">User Research</span><span className="liquid-hover">Figma</span><span className="liquid-hover">Miro</span><span className="liquid-hover">Notion</span></div>
                </div>
              </div>

              {/* 2. Career Development Content */}
              <div className="project-content" data-project="career">
                <h3 className="liquid-hover">Empowering Professionals</h3>
                <p className="liquid-hover">Dedicated to helping professionals articulate their value and advance their careers, with a track record of success.</p>
                <ul>
                  <li className="liquid-hover">Empowered over <strong>50 clients</strong> across diverse industries.</li>
                  <li className="liquid-hover">Clients have secured interviews at startups, multinational corporations, and public agencies.</li>
                  <li className="liquid-hover"><strong>Services:</strong> CV Writing (₦30k), CV Revamp (₦20k), LinkedIn Optimization (₦20k).</li>
                </ul>
                <div className="project-role-container">
                  <div className="role-title liquid-hover">Services</div>
                  <div className="role-tags"><span className="liquid-hover">CV Writing</span><span className="liquid-hover">CV Revamp</span><span className="liquid-hover">LinkedIn Optimization</span><span className="liquid-hover">Career Coaching</span></div>
                </div>
              </div>

              {/* 3. HR & People Operations Content */}
              <div className="project-content" data-project="hr">
               <h3 className="liquid-hover">Building Thriving Teams</h3>
               <p className="liquid-hover">Leveraging a strong foundation in HR to build efficient and engaged teams, with a specialty in remote work culture.</p>
               <ul>
                   <li className="liquid-hover">End-to-end recruitment and onboarding for remote teams.</li>
                   <li className="liquid-hover">Employee engagement strategies to boost morale and retention.</li>
                   <li className="liquid-hover">Consulting for small businesses on building strong remote cultures.</li>
               </ul>
                <div className="project-role-container">
                     <div className="role-title liquid-hover">Core Competencies</div>
                     <div className="role-tags"><span className="liquid-hover">Recruitment</span><span className="liquid-hover">Onboarding</span><span className="liquid-hover">Employee Engagement</span><span className="liquid-hover">Remote Culture</span><span className="liquid-hover">HR-Tech</span></div>
                </div>
              </div>

              {/* 4. Public Speaking Content */}
              <div className="project-content" data-project="speaking">
                <h3 className="liquid-hover">Inspiring Action</h3>
                <p className="liquid-hover">An engaging speaker and trainer passionate about empowering the next generation of leaders and professionals. Founder of the Abiola Patrick Public Speaking Competition.</p>
                <ul>
                  <li className="liquid-hover">Available for physical and virtual keynotes, workshops, and panel discussions.</li>
                </ul>
                <div className="project-role-container">
                     <div className="role-title liquid-hover">Key Topics</div>
                     <div className="role-tags"><span className="liquid-hover">Career Growth</span><span className="liquid-hover">Product Management</span><span className="liquid-hover">Leadership</span><span className="liquid-hover">Youth Empowerment</span><span className="liquid-hover">Communication</span></div>
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
  );
}
