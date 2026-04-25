'use client';
import { useEffect, useRef, useState } from 'react';

export default function IntroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [phase, setPhase] = useState<'visible' | 'fadeout' | 'done'>('visible');
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  /* ── Particle canvas background ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const W = canvas.width, H = canvas.height;

    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.5, a: Math.random(),
      tw: Math.random() * Math.PI * 2,
    }));

    type P = { x: number; y: number; vx: number; vy: number; life: number; max: number; size: number };
    const particles: P[] = [];
    const spawn = () => particles.push({
      x: Math.random() * W, y: H + 10,
      vx: (Math.random() - 0.5) * 0.6,
      vy: -(Math.random() * 0.8 + 0.3),
      life: 0, max: 120 + Math.random() * 80,
      size: Math.random() * 2 + 0.5,
    });

    let t = 0, animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, W, H);
      t++;

      // Stars
      stars.forEach(s => {
        s.tw += 0.012;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.a * (0.5 + 0.5 * Math.sin(s.tw))})`;
        ctx.fill();
      });

      // Spawn particles
      if (t % 4 === 0) spawn();
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx; p.y += p.vy; p.life++;
        const a = (1 - p.life / p.max) * 0.7;
        if (a <= 0) { particles.splice(i, 1); continue; }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,212,255,${a})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animId);
  }, []);

  /* ── Timing ── */
  useEffect(() => {
    const prog = setInterval(() => setProgress(p => Math.min(p + 0.25, 100)), 50);
    const show = setTimeout(() => setVisible(true), 400);
    const fade = setTimeout(() => setPhase('fadeout'), 20000);
    const done = setTimeout(() => setPhase('done'), 20800);
    return () => { clearInterval(prog); clearTimeout(show); clearTimeout(fade); clearTimeout(done); };
  }, []);

  if (phase === 'done') return null;

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: 'radial-gradient(ellipse at 50% 50%, #0a1628 0%, #050810 100%)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      transition: 'opacity 0.8s ease',
      opacity: phase === 'fadeout' ? 0 : 1,
      overflow: 'hidden',
    }}>
      {/* Particle canvas */}
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />

      {/* Center content */}
      <div style={{
        position: 'relative', zIndex: 2,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        width: 'min(700px, 90vw)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 1s ease, transform 1s ease',
        textAlign: 'center',
        padding: '0 20px',
      }}>
        {/* Opening quote mark */}
        <div style={{
          fontSize: '5rem', lineHeight: 1,
          color: '#00d4ff',
          fontFamily: 'Georgia, serif',
          alignSelf: 'flex-start',
          marginBottom: -20,
          textShadow: '0 0 30px rgba(0,212,255,0.6)',
          opacity: 0.8,
        }}>
          "
        </div>

        {/* The phrase */}
        <p style={{
          fontSize: 'clamp(1rem, 2.2vw, 1.25rem)',
          color: 'rgba(255,255,255,0.9)',
          fontStyle: 'italic',
          fontFamily: 'Georgia, "Times New Roman", serif',
          lineHeight: 1.9,
          margin: '0',
          textShadow: '0 0 30px rgba(0,212,255,0.15)',
          letterSpacing: '0.01em',
        }}>
          Se centran en aceptar lo que no puedes controlar,
          gestionar tus reacciones, vivir el presente y cultivar
          la virtud para alcanzar la paz mental{' '}
          <span style={{
            color: '#00d4ff',
            fontStyle: 'normal',
            fontWeight: 700,
            textShadow: '0 0 20px rgba(0,212,255,0.8)',
          }}>
            (ataraxia)
          </span>.
        </p>

        {/* Closing quote mark */}
        <div style={{
          fontSize: '5rem', lineHeight: 1,
          color: '#00d4ff',
          fontFamily: 'Georgia, serif',
          alignSelf: 'flex-end',
          marginTop: -20,
          textShadow: '0 0 30px rgba(0,212,255,0.6)',
          opacity: 0.8,
        }}>
          "
        </div>

        {/* Divider */}
        <div style={{
          width: 160, height: 1, margin: '20px auto 14px',
          background: 'linear-gradient(90deg, transparent, #00d4ff, transparent)',
          boxShadow: '0 0 8px rgba(0,212,255,0.4)',
        }} />

        {/* Attribution */}
        <p style={{
          fontSize: '0.65rem',
          color: 'rgba(0,212,255,0.6)',
          letterSpacing: '0.25em',
          fontFamily: 'monospace',
          textTransform: 'uppercase',
          margin: 0,
        }}>
          Filosofía Estoica · Ataraxia
        </p>
      </div>

      {/* Progress bar */}
      <div style={{
        position: 'absolute', bottom: 36,
        left: '50%', transform: 'translateX(-50%)',
        width: 'min(260px, 80vw)', zIndex: 2,
      }}>
        <div style={{ height: 2, background: 'rgba(0,212,255,0.1)', borderRadius: 2, overflow: 'hidden' }}>
          <div style={{
            height: '100%', width: `${progress}%`,
            background: 'linear-gradient(90deg, #0080ff, #00d4ff)',
            boxShadow: '0 0 8px #00d4ff',
            transition: 'width 0.04s linear',
          }} />
        </div>
        <p style={{
          fontSize: '0.45rem', color: 'rgba(0,212,255,0.3)',
          fontFamily: 'monospace', letterSpacing: '0.15em',
          textAlign: 'center', marginTop: 6,
        }}>
          CARGANDO PORTAFOLIO... {Math.floor(progress)}%
        </p>
      </div>

      {/* HUD corners */}
      {[{ top: 14, left: 14 }, { top: 14, right: 14 }, { bottom: 14, left: 14 }, { bottom: 14, right: 14 }].map((pos, i) => (
        <div key={i} style={{
          position: 'absolute', ...pos, width: 22, height: 22,
          borderTop: i < 2 ? '1px solid rgba(0,212,255,0.25)' : 'none',
          borderBottom: i >= 2 ? '1px solid rgba(0,212,255,0.25)' : 'none',
          borderLeft: i % 2 === 0 ? '1px solid rgba(0,212,255,0.25)' : 'none',
          borderRight: i % 2 === 1 ? '1px solid rgba(0,212,255,0.25)' : 'none',
        }} />
      ))}
    </div>
  );
}
