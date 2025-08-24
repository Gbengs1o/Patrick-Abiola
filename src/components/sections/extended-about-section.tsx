
'use client';

export function ExtendedAboutSection() {
  return (
    <>
      <section className="extended-about-section">
        <div className="container">
          <div className="content-wrapper">
            <h2 className="main-title liquid-hover">Key Areas of Expertise</h2>

            <div className="expertise-item">
              <h3 className="liquid-hover">Product Management & HRTech</h3>
              <p className="liquid-hover">
                My transition into product management was a natural one, built on my leadership experience and my love for solving complex problems. I’ve designed and delivered complete product solutions, always prioritizing collaboration, iteration, and aligning every feature to both user needs and business goals.
              </p>
            </div>

            <div className="expertise-item">
              <h3 className="liquid-hover">Professional CV & Career Services</h3>
              <p className="liquid-hover">
                Running Abiola Writes has been one of my most rewarding ventures. Our services—from resume creation and revamping to LinkedIn optimization—are designed to deliver quick, personalized results that help people stand out. I’ve seen firsthand how the right story, told well, can transform a career, and it’s something I take pride in providing for my clients.
              </p>
            </div>

            <div className="expertise-item">
              <h3 className="liquid-hover">Public Speaking & Training</h3>
              <p className="liquid-hover">
                Public speaking has always been close to my heart. As a certified public speaker, coach, and compere, I regularly train and speak on topics like career development, leadership, and product management. One of my proudest moments was in March 2025 when I organized the Abiola Patrick Public Speaking Competition (APPSC 4.0) in Osogbo. The event gave secondary school students a platform to speak on global peace, and seeing their confidence and passion reaffirmed my belief in the power of communication to change lives.
              </p>
            </div>

            <div className="expertise-item">
              <h3 className="liquid-hover">Youth Leadership & Community Engagement</h3>
              <p className="liquid-hover">
                Community leadership is another area where I’ve invested a lot of energy, especially through JCI Osogbo Elite (Junior Chamber International), where I served as the Charter President. Working with JCI leaders and NGOs, I’ve helped coordinate mentorship programs, speaking events, and initiatives aimed at youth empowerment and social change. From gender equality campaigns to International Women’s Day events, I’ve always believed in using my platform to inspire and equip young people to lead with purpose.
              </p>
            </div>

            <div className="approach-section">
              <h3 className="liquid-hover">My Approach</h3>
              <p className="liquid-hover">
                What sets me apart is my ability to combine strategy, creativity, and empathy in everything I do. Whether I’m mapping out a product strategy, designing a new service, or coaching a client, I draw on my communication skills, leadership experience, and technical know-how. Tools like Figma and Notion help me bring ideas to life, but it’s my belief that “creativity isn’t just a talent—it’s a way of seeing” that drives my success.
              </p>
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
          margin-bottom: 3rem;
        }
        .expertise-item, .approach-section {
          margin-bottom: 2.5rem;
        }
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
        .approach-section p {
          margin-bottom: 1.5rem;
        }
      `}</style>
    </>
  );
}
