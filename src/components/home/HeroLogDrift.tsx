'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

// Wraps the hero's drifting build log and pauses the loop while it is off-screen,
// so an animation nobody can see is not running for the rest of the visit.
export default function HeroLogDrift({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setPaused(!entry.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="log-drift pt-24" data-paused={paused}>
      {children}
    </div>
  );
}
