'use client';

export function DetailedAboutSection() {
  return (
    <>
      <section className="detailed-about-section">
        <div className="container">
          <div className="text-content">
            <p className="liquid-hover">
              I’m Patrick Abiola, a Lagos-based tech entrepreneur, product manager, and career development coach. My journey combines years of operational leadership—as a former Head of Operations and certified trainer—with a deep passion for technology and human development. Over the years, I’ve built a reputation for bringing people-centered thinking and a growth mindset to every product and career initiative I take on.
            </p>
            <p className="liquid-hover">
              In my product management work, I focus on building HR-tech solutions that solve real problems while connecting user needs to business goals. I’ve managed end-to-end product lifecycles, from research and ideation to design and launch, always using tools like roadmaps and user research to keep the process grounded and collaborative. One of my key projects, for example, involved developing Rictan, a remote team HR app, alongside other innovative tech solutions—all with the aim of simplifying processes and empowering people.
            </p>
            <p className="liquid-hover">
              Beyond product management, I’m also the founder of Abiola Writes, a Lagos-based CV writing and career consultancy that has grown into one of Nigeria’s leading firms in its field. At Abiola Writes, I’ve helped professionals across industries—whether they’re entering the job market, pivoting careers, or climbing the corporate ladder—create powerful resumes and LinkedIn profiles that truly tell their stories. I believe that personal branding and storytelling are critical in career growth, and my work reflects that belief, helping countless clients secure interviews and land their dream jobs.
            </p>
          </div>
        </div>
      </section>
      <style jsx>{`
        .detailed-about-section {
          padding: 60px 0 120px;
        }
        .container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .text-content {
          max-width: 750px;
          margin: 0 auto;
          text-align: left;
        }
        .text-content p {
          font-size: clamp(1em, 2vw, 1.1em);
          line-height: 1.8;
          opacity: 0.9;
          margin-bottom: 1.5rem;
        }
      `}</style>
    </>
  );
}
