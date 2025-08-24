'use client';

export function AboutSection() {
  return (
    <>
      <section id="about" className="about-section">
        <div className="container">
          <h2 className="liquid-hover">Professional Profile</h2>
          <p className="liquid-hover">
            A dynamic and multi-talented professional bridging the gap between product innovation, human resources, and career development. With a proven track record in designing user-centric tech solutions, coaching professionals to land their dream roles, and captivating audiences from the stage. Known for bringing energy, empathy, and a results-driven approach to every project, whether it's building a product roadmap, crafting a standout CV, or delivering an inspiring keynote.
          </p>
        </div>
      </section>
      <style jsx>{`
        .about-section {
          padding: 120px 0;
          text-align: center;
        }
        .about-section h2 {
          font-size: 3.5em;
          margin-bottom: 25px;
        }
        .about-section p {
          font-size: 1.1em;
          line-height: 1.8;
          max-width: 750px;
          margin: 0 auto;
          opacity: 0.9;
        }
      `}</style>
    </>
  );
}
