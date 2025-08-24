'use client';

import Image from 'next/image';

const images = [
  "https://seagreen-cobra-133672.hostingersite.com/wp-content/uploads/2025/08/guypic11.png",
  "https://seagreen-cobra-133672.hostingersite.com/wp-content/uploads/2025/08/guypic10.png",
  "https://seagreen-cobra-133672.hostingersite.com/wp-content/uploads/2025/08/guypic9.png",
  "https://seagreen-cobra-133672.hostingersite.com/wp-content/uploads/2025/08/guypic8.avif",
  "https://seagreen-cobra-133672.hostingersite.com/wp-content/uploads/2025/08/guypic7.avif",
  "https://seagreen-cobra-133672.hostingersite.com/wp-content/uploads/2025/08/guypic6.avif",
  "https://seagreen-cobra-133672.hostingersite.com/wp-content/uploads/2025/08/guypic5.jpeg",
  "https://seagreen-cobra-133672.hostingersite.com/wp-content/uploads/2025/08/guypic4.jpeg",
  "https://seagreen-cobra-133672.hostingersite.com/wp-content/uploads/2025/08/guypic3.jpeg",
  "https://seagreen-cobra-133672.hostingersite.com/wp-content/uploads/2025/08/guypic2.jpeg",
  "https://seagreen-cobra-133672.hostingersite.com/wp-content/uploads/2025/08/guypic1.jpeg",
];

export function RollingImagesSection() {
  // We duplicate the images to create a seamless loop
  const extendedImages = [...images, ...images];

  return (
    <>
      <section className="rolling-images-section">
        <div className="scroller">
          <div className="scroller-inner">
            {extendedImages.map((src, index) => (
              <div className="image-container" key={index}>
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  width={400}
                  height={400}
                  className="gallery-image"
                />
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
            transform: translateX(calc(-50% - 10px)); /* 50% for half the track, 10px for half the gap */
          }
        }

        .image-container {
          width: 300px; /* Or your desired width */
          aspect-ratio: 1 / 1;
          flex-shrink: 0;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          border: 2px solid var(--border-color);
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

        /* Pause animation on hover */
        .scroller:hover .scroller-inner {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
}
