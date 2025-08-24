'use client';

export function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="liquid-hover">Let's Connect</h2>
        <p className="liquid-hover">
          I'm always open to discussing new projects, speaking opportunities, or collaborations. Let's build something great together.
        </p>
        <div className="contact-links">
          <a href="mailto:checkonpat@gmail.com" className="liquid-hover">checkonpat@gmail.com</a>
          <a href="tel:+2348066073909" className="liquid-hover">+234 806 607 3909</a>
          <a href="https://www.linkedin.com/in/patrick-abiola-061020176" target="_blank" rel="noopener noreferrer" className="liquid-hover">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
