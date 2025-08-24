'use client';

import { useEffect, useRef } from 'react';

export function CursorGlow() {
  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  // NEW: Store the last known mouse position for smoother animations
  const lastMousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      // NEW: Update last mouse position
      lastMousePos.current = { x: clientX, y: clientY };
      
      if (dotRef.current) {
        dotRef.current.style.left = `${clientX}px`;
        dotRef.current.style.top = `${clientY}px`;
      }
      
      if (circleRef.current) {
        // MODIFIED: Use the stored position for animation
        circleRef.current.animate({
            left: `${lastMousePos.current.x}px`,
            top: `${lastMousePos.current.y}px`,
        }, { duration: 500, fill: "forwards" });
      }

      // MODIFIED: More advanced, context-aware hover logic
      const target = e.target as HTMLElement;
      const isHoveringLinkOrButton = target.closest('a, button');
      const isHoveringLiquid = target.closest('.liquid-hover');
      
      // Default state
      circleRef.current?.classList.remove('hovered-link', 'hovered-liquid');

      if (isHoveringLiquid) {
        circleRef.current?.classList.add('hovered-liquid');
        const rect = isHoveringLiquid.getBoundingClientRect();
        // Use setProperty on the element itself, not its closest parent again
        (isHoveringLiquid as HTMLElement).style.setProperty('--x', `${e.clientX - rect.left}px`);
        (isHoveringLiquid as HTMLElement).style.setProperty('--y', `${e.clientY - rect.top}px`);
      } else if (isHoveringLinkOrButton) {
        circleRef.current?.classList.add('hovered-link');
      }
    };

    // NEW: Handlers for mouse down and up events for the click effect
    const handleMouseDown = () => {
      if (circleRef.current) {
        circleRef.current.classList.add('clicked');
      }
    };

    const handleMouseUp = () => {
      if (circleRef.current) {
        circleRef.current.classList.remove('clicked');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown); // NEW
    window.addEventListener('mouseup', handleMouseUp);     // NEW

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown); // NEW
      window.removeEventListener('mouseup', handleMouseUp);     // NEW
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-glow dot"></div>
      <div ref={circleRef} className="cursor-glow circle"></div>
    </>
  );
}