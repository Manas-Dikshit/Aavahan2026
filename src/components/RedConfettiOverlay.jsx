import React, { useEffect, useRef } from "react";

// Avengers / Marvel-style red particle overlay
// Energetic shards with glowing trails and depth for a cinematic feel
export default function RedMarvelParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    // Red color palette (deep red to glowing orange)
    const redPalette = ["#ff0000", "#ff3b3b", "#ff6b00", "#d90000"];

    const area = window.innerWidth * window.innerHeight;
    const particleCount = Math.max(40, Math.min(130, Math.floor(area / 22000)));

    const createParticle = () => {
      const depth = Math.random(); // 0 (near) to 1 (far)
      const scale = 0.6 + (1 - depth) * 1.2;

      return {
        x: Math.random() * window.innerWidth,
        y: -Math.random() * window.innerHeight,
        width: (4 + Math.random() * 6) * scale,
        height: (18 + Math.random() * 24) * scale,
        speedY: (40 + Math.random() * 120) * scale,
        swayAmplitude: 10 + Math.random() * 25,
        swayFrequency: 0.4 + Math.random() * 1.3,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 4 * scale,
        color: redPalette[Math.floor(Math.random() * redPalette.length)],
        shape: Math.random() > 0.5 ? "shard" : "triangle",
        glowPhase: Math.random() * Math.PI * 2,
        glowSpeed: 1.2 + Math.random() * 0.8,
        depth,
      };
    };

    let particles = Array.from({ length: particleCount }, createParticle);

    let lastTime = performance.now();
    let animationFrameId;

    const render = (time) => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      // Faint dark overlay for trails
      ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y += p.speedY * delta;
        const sway = Math.sin(time * 0.001 * p.swayFrequency + p.y * 0.01) * p.swayAmplitude;
        p.x += sway * delta;
        p.rotation += p.rotationSpeed * delta;

        // Recycle particle below screen
        if (p.y - p.height > height) {
          Object.assign(p, createParticle(), { y: -Math.random() * height });
        }

        const glow = 0.4 + Math.sin(time * 0.002 * p.glowSpeed + p.glowPhase) * 0.6;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        ctx.globalAlpha = 0.8 + glow * 0.2;
        ctx.fillStyle = p.color;
        ctx.shadowColor = "rgba(255, 0, 0, 0.8)";
        ctx.shadowBlur = 12 + 18 * (1 - p.depth);

        if (p.shape === "triangle") {
          ctx.beginPath();
          ctx.moveTo(0, -p.height / 2);
          ctx.lineTo(p.width / 2, p.height / 2);
          ctx.lineTo(-p.width / 2, p.height / 2);
          ctx.closePath();
          ctx.fill();
        } else {
          const taper = p.height * 0.4;
          ctx.beginPath();
          ctx.moveTo(-p.width / 2, -p.height / 2);
          ctx.lineTo(p.width / 2, -p.height / 2 + taper * 0.3);
          ctx.lineTo(p.width / 2, p.height / 2);
          ctx.lineTo(-p.width / 2, p.height / 2 - taper * 0.7);
          ctx.closePath();
          ctx.fill();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame((t) => {
      lastTime = t;
      render(t);
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-10 pointer-events-none opacity-90 mix-blend-screen"
      aria-hidden="true"
    />
  );
}
