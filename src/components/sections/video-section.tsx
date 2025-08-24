export function VideoSection() {
  const videoId = "ZgfYhXCaPQc";

  return (
    <>
      <section id="video-feature" className="video-section">
        <div className="video-background">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&autohide=1&modestbranding=1&rel=0`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="video-iframe"
            title="Embedded YouTube Video"
          ></iframe>
           <div className="video-overlay"></div>
        </div>
        <div className="video-content container">
          <h2 className="liquid-hover">Featured Content</h2>
          <p className="liquid-hover">A showcase of dynamic speaking and presentation skills in action.</p>
        </div>
      </section>
      <style jsx>{`
        .video-section {
          position: relative;
          height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
          color: white;
        }

        .video-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .video-iframe {
          width: 100%;
          height: 100%;
          object-fit: cover;
          pointer-events: none; /* Allows clicks to pass through if needed */
        }
        
        .video-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(16, 37, 66, 0.7); /* Same as --bg-color with opacity */
        }

        .video-content {
          position: relative;
          z-index: 2;
        }

        .video-content h2 {
          font-size: clamp(2.5em, 6vw, 4em);
          font-weight: 700;
          color: #fff;
          text-shadow: 0 2px 10px rgba(0,0,0,0.5);
        }

        .video-content p {
          font-size: clamp(1em, 2vw, 1.2em);
          max-width: 600px;
          margin: 1rem auto 0;
          opacity: 0.9;
          text-shadow: 0 1px 5px rgba(0,0,0,0.5);
        }
      `}</style>
    </>
  );
}
