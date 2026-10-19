import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  rotation: number;
  opacity: number;
}

interface ParticleBurstProps {
  active: boolean;
  colorType?: 'dissolve' | 'celebrate';
  onComplete?: () => void;
}

export const ParticleBurst: React.FC<ParticleBurstProps> = ({
  active,
  colorType = 'dissolve',
  onComplete,
}) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (!active) {
      setParticles([]);
      return;
    }

    const dissolveColors = ['#E11D48', '#BE123C', '#9F1239', '#F43F5E', '#FDA4AF', '#FFFFFF'];
    const celebrateColors = ['#059669', '#10B981', '#E11D48', '#F59E0B', '#3B82F6', '#FFFFFF'];
    const colors = colorType === 'celebrate' ? celebrateColors : dissolveColors;

    const count = colorType === 'celebrate' ? 45 : 24;
    const initialParticles: Particle[] = Array.from({ length: count }, (_, i) => {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
      const speed = (Math.random() * 5 + 3) * (colorType === 'celebrate' ? 1.4 : 1);
      return {
        id: i,
        x: 50 + (Math.random() - 0.5) * 20, // percentage within parent
        y: 50 + (Math.random() - 0.5) * 20,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - (colorType === 'celebrate' ? 2 : 0),
        size: Math.random() * 6 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        opacity: 1,
      };
    });

    setParticles(initialParticles);

    let animationFrame: number;
    let step = 0;
    const maxSteps = 32;

    const animate = () => {
      step++;
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + p.vx * 0.4,
            y: p.y + p.vy * 0.4 + (colorType === 'celebrate' ? 0.15 : 0.05), // slight gravity
            opacity: Math.max(0, 1 - step / maxSteps),
            rotation: p.rotation + p.vx * 2,
            size: Math.max(0, p.size * 0.96),
          }))
          .filter((p) => p.opacity > 0.05)
      );

      if (step < maxSteps) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        if (onComplete) onComplete();
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [active, colorType, onComplete]);

  if (!active || particles.length === 0) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible z-20">
      {particles.map((p) => (
        <span
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            borderRadius: colorType === 'celebrate' ? '2px' : '50%',
            opacity: p.opacity,
            transform: `translate(-50%, -50%) rotate(${p.rotation}deg)`,
            boxShadow: `0 0 6px ${p.color}`,
            transition: 'opacity 0.05s linear',
          }}
        />
      ))}
    </div>
  );
};
