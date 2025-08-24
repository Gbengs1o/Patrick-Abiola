
'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const storyData = [
  {
    title: 'Product Management & HR-Tech',
    text: 'I transitioned into product management by leveraging my leadership and coaching background. I design end-to-end product solutions, using roadmaps and user research to connect user needs with business goals while fostering collaboration and continuous improvement.',
    images: [
      { src: 'https://seagreen-cobra-133672.hostingersite.com/wp-content/uploads/2025/08/guyposter1.png', alt: 'Patrick Abiola presenting a product concept.' },
      { src: 'https://seagreen-cobra-133672.hostingersite.com/wp-content/uploads/2025/08/guyposter2.png', alt: 'Close-up of Patrick Abiola during a workshop.' },
    ],
  },
  {
    title: 'Professional CV & Career Services',
    text: 'I run Abiola Writes, one of Nigeria’s top CV writing firms. From resumes to LinkedIn optimization, I help clients secure interviews and take the next step in their careers with quick, personalized support.',
    images: [
      { src: 'https://seagreen-cobra-133672.hostingersite.com/wp-content/uploads/2025/08/guyposter3.png', alt: 'Promotional graphic for Abiola Writes services.' },
    ],
  },
  {
    title: 'Public Speaking & Training',
    text: 'As a certified public speaker and trainer, I share insights on career growth, leadership, and product management. In March 2025, I hosted APPSC 4.0 in Osogbo, giving secondary school students a platform to speak on global peace—a cause close to my heart.',
    images: [
      { src: 'https://seagreen-cobra-133672.hostingersite.com/wp-content/uploads/2025/08/certificate.jpg', alt: 'Certificate of recognition for public speaking.' },
    ],
  },
  {
    title: 'Youth Leadership & Community Engagement',
    text: 'Through JCI Osogbo Elite, where I served as Charter President, I mentor young people and coordinate events that drive social impact. From youth empowerment to gender equality campaigns, my goal is to inspire and equip the next generation to lead with purpose.',
    images: [
       { src: 'https://seagreen-cobra-133672.hostingersite.com/wp-content/uploads/2025/08/certificateanotherone.jpg', alt: 'Patrick Abiola with youth at a community event.' },
    ],
  },
];

export function StorySection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [visibleItems, setVisibleItems] = useState<Record<number, boolean>>({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.getAttribute('data-index') || '0', 10);
                        setVisibleItems(prev => ({ ...prev, [index]: true }));
                    }
                });
            },
            { rootMargin: '0px', threshold: 0.3 }
        );

        const items = containerRef.current?.querySelectorAll('.story-item');
        items?.forEach(item => observer.observe(item));

        return () => {
            items?.forEach(item => observer.unobserve(item));
        };
    }, []);

    return (
        <>
            <section className="story-section" ref={containerRef}>
                <div className="story-container">
                    <div className="story-header">
                        <h2 className="liquid-hover">My Journey & Impact</h2>
                        <p className="liquid-hover">Bringing ideas to life and empowering others to succeed.</p>
                    </div>

                    <div className="story-timeline">
                        {storyData.map((item, index) => (
                            <div key={index} data-index={index} className={`story-item ${visibleItems[index] ? 'is-visible' : ''}`}>
                                <div className="story-content">
                                    <h3 className="liquid-hover">{item.title}</h3>
                                    <p className="liquid-hover">{item.text}</p>
                                </div>
                                <div className="story-visuals">
                                    {item.images.map((img, imgIndex) => (
                                        <div className="image-wrapper" key={imgIndex}>
                                            <Image
                                                src={img.src}
                                                alt={img.alt}
                                                width={500}
                                                height={500}
                                                className="story-image"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <style jsx>{`
                .story-section {
                    padding: 120px 20px;
                    overflow-x: hidden;
                }
                .story-container {
                    max-width: 1100px;
                    margin: 0 auto;
                }
                .story-header {
                    text-align: center;
                    margin-bottom: 80px;
                }
                .story-header h2 {
                    font-size: clamp(2.5rem, 6vw, 4rem);
                    margin-bottom: 1rem;
                }
                .story-header p {
                    font-size: clamp(1rem, 2.5vw, 1.2rem);
                    opacity: 0.8;
                    max-width: 600px;
                    margin: 0 auto;
                }
                .story-timeline {
                    display: flex;
                    flex-direction: column;
                    gap: 120px;
                }
                .story-item {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 40px;
                    align-items: center;
                    opacity: 0;
                    transform: translateY(50px);
                    transition: opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1), transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
                }
                .story-item.is-visible {
                    opacity: 1;
                    transform: translateY(0);
                }
                .story-item:nth-child(even) .story-content {
                    order: 2;
                }
                .story-content h3 {
                    font-size: 1.8rem;
                    color: var(--accent-color);
                    margin-bottom: 1rem;
                }
                .story-content p {
                    font-size: 1.1rem;
                    line-height: 1.8;
                    opacity: 0.9;
                }
                .story-visuals {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 20px;
                    transition-delay: 0.2s; /* Stagger animation */
                }
                .image-wrapper {
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                    border: 2px solid var(--border-color);
                    transform: scale(0.95);
                    transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
                }
                .story-item.is-visible .image-wrapper {
                    transform: scale(1);
                }
                .story-image {
                    width: 100%;
                    height: auto;
                    object-fit: cover;
                }

                @media (min-width: 768px) {
                    .story-item {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 80px;
                    }
                }
            `}</style>
        </>
    );
}

