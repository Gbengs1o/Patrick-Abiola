'use client';

import { useEffect, useRef } from 'react';

export function CursorGlow() {
  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      if (dotRef.current) {
        dotRef.current.style.left = `${clientX}px`;
        dotRef.current.style.top = `${clientY}px`;
      }
      
      if (circleRef.current) {
        circleRef.current.animate({
            left: `${clientX}px`,
            top: `${clientY}px`,
        }, { duration: 500, fill: "forwards" });
      }

      const target = e.target as HTMLElement;
      if (target.closest('.liquid-hover')) {
        circleRef.current?.classList.add('hovered');
        const rect = target.closest('.liquid-hover')!.getBoundingClientRect();
        target.closest('.liquid-hover')!.style.setProperty('--x', `${e.clientX - rect.left}px`);
        target.closest('.liquid-hover')!.style.setProperty('--y', `${e.clientY - rect.top}px`);
      } else {
        circleRef.current?.classList.remove('hovered');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-glow dot"></div>
      <div ref={circleRef} className="cursor-glow circle"></div>
    </>
  );
}
