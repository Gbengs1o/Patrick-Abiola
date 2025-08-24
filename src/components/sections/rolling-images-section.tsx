'use client';

import Image from 'next/image';

const images = [
  { src: "https://seagreen-cobra-133672.hostingersite.com/wp-content/uploads/2025/08/guypic11.png", text: "Innovator" },
  { src: "https://seagreen-cobra-133672.hostingersite.com/wp-content/uploads/2025/08/guypic10.png", text: "Leader" },
  { src: "https://seagreen-cobra-133672.hostingersite.com/wp-content/uploads/2025/08/guypic9.png", text: "Public Speaker" },
  { src: "https://seagreen-cobra-133672.hostingersite.com/wp-content/uploads/2025/08/guypic8.avif", text: "Mentor" },
  { src: "https://seagreen-cobra-133672.hostingersite.com/wp-content/uploads/2025/08/guypic7.avif", text: "Problem Solver" },
  { src: "https://seagreen-cobra-133672.hostingersite.com/wp-content/uploads/2025/08/guypic6.avif", text: "Strategist" },
  { src: "https://seagreen-cobra-133672.hostingersite.com/wp-content/uploads/2025/08/guypic5.jpeg", text: "Visionary" },
  { src: "https://seagreen-cobra-133672.hostingersite.com/wp-content/uploads/2025/08/guypic4.jpeg", text: "Motivator" },
  { src: "https://seagreen-cobra-133672.hostingersite.com/wp-content/uploads/2025/08/guypic3.jpeg", text: "Team Builder" },
  { src: "https://seagreen-cobra-133672.hostingersite.com/wp-content/uploads/2025/08/guypic2.jpeg", text: "Communicator" },
  { src: "https://seagreen-cobra-133672.hostingersite.com/wp-content/uploads/2025/08/guypic1.jpeg", text: "Patrick Abiola" },
];

export function RollingImagesSection() {
  const extendedImages = [...images, ...images];

  return (
    <>
      <section className="rolling-images-section">
        <div className="scroller">
          <div className="scroller-inner">
            {extendedImages.map((image, index) => (
              <div className="image-container liquid-hover" key={index}>
                <Image
                  src={image.src}
                  alt={`Gallery image of Patrick Abiola ${index + 1}`}
                  width={400}
                  height={400}
                  className="gallery-image"
                />
                <div className="image-overlay">
                    <span className="overlay-text">{image.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style jsx>{`
        .rolling-images-section {
          padding: 60px 0;
          overflow: hidden;
        }

        .scroller {
          max-width: 100%;
        }

        .scroller-inner {
          display: flex;
          gap: 20px;
          width: fit-content;
          animation: scroll 60s linear infinite;
        }

        @keyframes scroll {
          to {
            transform: translateX(calc(-50% - 10px));
          }
        }

        .image-container {
          width: 300px;
          aspect-ratio: 1 / 1;
          flex-shrink: 0;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          border: 2px solid var(--border-color);
          position: relative; /* Needed for overlay positioning */
        }

        .gallery-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .image-container:hover .gallery-image {
          transform: scale(1.05);
        }

        .scroller:hover .scroller-inner {
          animation-play-state: paused;
        }

        /* --- NEW STYLES FOR LIQUID OVERLAY --- */
        .image-overlay {
            position: absolute;
            inset: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgba(0, 196, 154, 0); /* Start fully transparent */
            opacity: 0;
            transition: background-color 0.5s ease, opacity 0.5s ease;
            z-index: 2;
        }
        
        .overlay-text {
            color: var(--bg-color);
            font-size: 1.5rem;
            font-weight: 600;
            text-align: center;
            opacity: 0;
            transform: translateY(10px);
            transition: opacity 0.4s ease 0.1s, transform 0.4s ease 0.1s;
        }

        .image-container:hover .image-overlay {
            background-color: rgba(0, 196, 154, 0.8); /* Fade to teal */
            opacity: 1;
        }

        .image-container:hover .overlay-text {
            opacity: 1;
            transform: translateY(0);
        }

      `}</style>
    </>
  );
}
