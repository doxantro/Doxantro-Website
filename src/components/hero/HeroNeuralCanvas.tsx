'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  pulseSpeed: number;
  pulsePhase: number;
  isAccent: boolean;
}

interface PulsePacket {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
}

export default function HeroNeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Mouse coordinates relative to canvas
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      active: false,
    };

    let particles: Particle[] = [];
    let pulsePackets: PulsePacket[] = [];
    const maxConnectionDistance = 140;
    const mouseInfluenceRadius = 180;

    const resize = () => {
      if (!container || !canvas) return;
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
      initParticles();
    };

    const initParticles = () => {
      // Calculate responsive particle count: ~45-55 on desktop, ~22-30 on mobile
      const area = width * height;
      const targetCount = Math.floor(Math.min(Math.max(area / 16000, 22), 55));

      particles = [];
      pulsePackets = [];

      for (let i = 0; i < targetCount; i++) {
        const isAccent = Math.random() < 0.22; // ~22% are brand orange accent nodes
        const baseRadius = isAccent ? 2.4 : 1.7;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          radius: baseRadius,
          baseRadius,
          pulseSpeed: 0.02 + Math.random() * 0.03,
          pulsePhase: Math.random() * Math.PI * 2,
          isAccent,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    // Periodically spawn data packets traveling between connected nodes
    let lastPacketSpawn = 0;
    const maybeSpawnPacket = (timestamp: number) => {
      if (particles.length < 2 || prefersReducedMotion) return;
      if (timestamp - lastPacketSpawn > 900 && pulsePackets.length < 5) {
        lastPacketSpawn = timestamp;
        // Find random pair of connected nodes
        const i = Math.floor(Math.random() * particles.length);
        const p1 = particles[i];
        const candidates: number[] = [];

        for (let j = 0; j < particles.length; j++) {
          if (i === j) continue;
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < maxConnectionDistance) {
            candidates.push(j);
          }
        }

        if (candidates.length > 0) {
          const target = candidates[Math.floor(Math.random() * candidates.length)];
          pulsePackets.push({
            fromNode: i,
            toNode: target,
            progress: 0,
            speed: 0.016 + Math.random() * 0.012,
          });
        }
      }
    };

    const render = (timestamp: number) => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse lerp
      if (mouse.active) {
        mouse.x += (mouse.targetX - mouse.x) * 0.12;
        mouse.y += (mouse.targetY - mouse.y) * 0.12;
      } else {
        mouse.x += (-1000 - mouse.x) * 0.08;
        mouse.y += (-1000 - mouse.y) * 0.08;
      }

      maybeSpawnPacket(timestamp);

      // 1. Update and draw connections
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Update positions if not reduced motion
        if (!prefersReducedMotion) {
          p1.x += p1.vx;
          p1.y += p1.vy;

          // Bounce off container boundaries
          if (p1.x < 0 || p1.x > width) p1.vx *= -1;
          if (p1.y < 0 || p1.y > height) p1.vy *= -1;

          // Gentle breathing pulse
          p1.pulsePhase += p1.pulseSpeed;
          p1.radius = p1.baseRadius + Math.sin(p1.pulsePhase) * 0.5;
        }

        // Proximity to mouse
        const distToMouse = Math.hypot(p1.x - mouse.x, p1.y - mouse.y);
        const isNearMouse = distToMouse < mouseInfluenceRadius;

        // Draw links to subsequent particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxConnectionDistance) {
            const baseAlpha = (1 - dist / maxConnectionDistance) * 0.16;

            // Check if link is close to cursor for glowing highlight
            const midX = (p1.x + p2.x) / 2;
            const midY = (p1.y + p2.y) / 2;
            const midDistToMouse = Math.hypot(midX - mouse.x, midY - mouse.y);
            const isCursorHover = midDistToMouse < mouseInfluenceRadius;

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);

            if (isCursorHover) {
              const hoverFactor = 1 - midDistToMouse / mouseInfluenceRadius;
              ctx.strokeStyle = `rgba(245, 184, 0, ${Math.min(baseAlpha + hoverFactor * 0.45, 0.65)})`;
              ctx.lineWidth = 1.25;
            } else if (p1.isAccent || p2.isAccent) {
              ctx.strokeStyle = `rgba(245, 184, 0, ${baseAlpha * 0.95})`;
              ctx.lineWidth = 0.9;
            } else {
              ctx.strokeStyle = `rgba(113, 113, 122, ${baseAlpha * 0.85})`;
              ctx.lineWidth = 0.75;
            }
            ctx.stroke();
          }
        }

        // Draw mouse connection web if nearby
        if (isNearMouse) {
          const mouseAlpha = (1 - distToMouse / mouseInfluenceRadius) * 0.35;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(245, 184, 0, ${mouseAlpha})`;
          ctx.lineWidth = 0.85;
          ctx.stroke();
        }
      }

      // 2. Draw animated pulse packets
      for (let k = pulsePackets.length - 1; k >= 0; k--) {
        const packet = pulsePackets[k];
        packet.progress += packet.speed;

        if (packet.progress >= 1) {
          pulsePackets.splice(k, 1);
          continue;
        }

        const p1 = particles[packet.fromNode];
        const p2 = particles[packet.toNode];
        if (!p1 || !p2) continue;

        const currentX = p1.x + (p2.x - p1.x) * packet.progress;
        const currentY = p1.y + (p2.y - p1.y) * packet.progress;

        ctx.beginPath();
        ctx.arc(currentX, currentY, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(245, 184, 0, 0.85)';
        ctx.shadowColor = 'rgba(245, 184, 0, 0.6)';
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      // 3. Draw nodes / particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const distToMouse = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        const isHovered = distToMouse < mouseInfluenceRadius;

        ctx.beginPath();
        const drawRadius = isHovered ? p.radius * 1.4 : p.radius;
        ctx.arc(p.x, p.y, drawRadius, 0, Math.PI * 2);

        if (p.isAccent || isHovered) {
          ctx.fillStyle = isHovered ? '#f5b800' : 'rgba(245, 184, 0, 0.85)';
          ctx.shadowColor = 'rgba(245, 184, 0, 0.45)';
          ctx.shadowBlur = isHovered ? 8 : 4;
        } else {
          ctx.fillStyle = 'rgba(39, 39, 42, 0.65)';
          ctx.shadowColor = 'transparent';
          ctx.shadowBlur = 0;
        }

        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    const resizeObserver = new ResizeObserver(() => resize());
    resizeObserver.observe(container);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    resize();
    render(performance.now());

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none"
      style={{
        maskImage: 'radial-gradient(ellipse 75% 65% at 50% 45%, black 25%, transparent 85%)',
        WebkitMaskImage: 'radial-gradient(ellipse 75% 65% at 50% 45%, black 25%, transparent 85%)',
      }}
    >
      <canvas ref={canvasRef} className="w-full h-full block opacity-75" />
    </div>
  );
}
