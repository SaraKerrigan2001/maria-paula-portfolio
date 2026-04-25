'use client';
import { useState } from 'react';

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  const contactItems = [
    { icon: '✉️', label: 'Email', value: 'paitocapacho5@gmail.com' },
    { icon: '📱', label: 'Teléfono', value: '300 641 0764' },
    { icon: '📍', label: 'Ubicación', value: 'Cúcuta, Colombia' },
  ];

  const socialItems = [
    { icon: '📷', label: 'Instagram', handle: '@mariapaulacapacho' },
    { icon: '🐦', label: 'Twitter / X', handle: '@mariapaulach' },
    { icon: '💼', label: 'LinkedIn', handle: 'maria-paula-capacho' },
    { icon: '🐙', label: 'GitHub', handle: 'SaraKerrigan2001' },
  ];

  const iconStyle = {
    background: 'rgba(0,212,255,0.12)',
    border: '1px solid rgba(0,212,255,0.25)',
  };

  const labelStyle: React.CSSProperties = {
    color: 'rgba(0,212,255,0.65)',
    fontSize: '0.58rem',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    marginBottom: 1,
  };

  const valueStyle = {
    color: 'rgba(255,255,255,0.85)',
    fontSize: '0.75rem',
    fontWeight: 500,
  };

  const inputStyle: React.CSSProperties = {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(0,212,255,0.15)',
    borderRadius: 8,
    padding: '8px 12px',
    color: 'rgba(255,255,255,0.8)',
    fontSize: '0.75rem',
    width: '100%',
    outline: 'none',
  };

  return (
    <>
      <section
        id="contact"
        className="overflow-hidden relative"
        style={{ padding: '80px 110px 60px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <div className="bg-grid" />

        <div className="w-full relative z-10" style={{ maxWidth: 900 }}>

          {/* Title */}
          <div className="text-center mb-6">
            <p className="glow-cyan text-xs font-semibold uppercase tracking-widest mb-1">¿Hablamos?</p>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'white' }}>Contáctame</h2>
          </div>

          {/* Card */}
          <div
            className="grid md:grid-cols-2 overflow-hidden"
            style={{
              background: 'rgba(13,17,28,0.95)',
              border: '1px solid rgba(0,212,255,0.2)',
              borderRadius: 16,
              boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
            }}
          >
            {/* LEFT */}
            <div
              className="flex flex-col gap-5 items-center"
              style={{ borderRight: '1px solid rgba(0,212,255,0.1)', padding: '40px 32px' }}
            >
              {/* Contact Info */}
              <div className="w-full max-w-xs">
                <h3 style={{ color: '#00d4ff', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.8rem', textAlign: 'center' }}>
                  Información de Contacto
                </h3>
                <div className="flex flex-col gap-2.5">
                  {contactItems.map((item) => (
                    <div key={item.value} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0" style={iconStyle}>
                        {item.icon}
                      </div>
                      <div>
                        <p style={labelStyle}>{item.label}</p>
                        <p style={valueStyle}>{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ height: 1, background: 'rgba(0,212,255,0.12)', width: '100%', maxWidth: 240 }} />

              {/* Social Handles */}
              <div className="w-full max-w-xs">
                <h3 style={{ color: '#00d4ff', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.8rem', textAlign: 'center' }}>
                  Redes Sociales
                </h3>
                <div className="flex flex-col gap-2.5">
                  {socialItems.map((s) => (
                    <div key={s.handle} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0" style={iconStyle}>
                        {s.icon}
                      </div>
                      <div>
                        <p style={labelStyle}>{s.label}</p>
                        <p style={valueStyle}>{s.handle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: Form */}
            <div className="flex flex-col justify-center items-center" style={{ padding: '40px 32px' }}>
              {sent ? (
                <div className="text-center">
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎉</div>
                  <h4 style={{ color: 'white', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.3rem' }}>¡Enviado!</h4>
                  <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.72rem' }}>Te responderé pronto.</p>
                  <button
                    onClick={() => setSent(false)}
                    style={{ marginTop: '0.8rem', color: '#00d4ff', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.72rem' }}
                  >
                    Enviar otro →
                  </button>
                </div>
              ) : (
                <div className="w-full max-w-sm flex flex-col gap-4">
                  <div>
                    <label style={labelStyle}>Nombre completo</label>
                    <input
                      type="text"
                      placeholder="Tu nombre"
                      style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = '#00d4ff')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(0,212,255,0.15)')}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Correo electrónico</label>
                    <input
                      type="email"
                      placeholder="tu@email.com"
                      style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = '#00d4ff')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(0,212,255,0.15)')}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Mensaje</label>
                    <textarea
                      rows={4}
                      placeholder="Cuéntame sobre tu proyecto..."
                      style={{ ...inputStyle, resize: 'none' }}
                      onFocus={e => (e.target.style.borderColor = '#00d4ff')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(0,212,255,0.15)')}
                    />
                  </div>
                  <button
                    onClick={() => setSent(true)}
                    style={{
                      background: 'linear-gradient(135deg, #0080ff, #00d4ff)',
                      color: 'white',
                      border: 'none',
                      borderRadius: 20,
                      padding: '9px 0',
                      fontWeight: 700,
                      fontSize: '0.75rem',
                      cursor: 'pointer',
                      letterSpacing: '0.05em',
                      boxShadow: '0 4px 14px rgba(0,212,255,0.3)',
                      width: '100%',
                    }}
                  >
                    Enviar mensaje
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: 'rgba(5,8,15,0.98)', borderTop: '1px solid rgba(0,212,255,0.08)', marginTop: 80, padding: '32px 110px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs"
              style={{ background: 'linear-gradient(135deg, #0080ff, #00d4ff)', color: 'white' }}>
              MP
            </div>
            <span style={{ color: 'white', fontWeight: 700, fontSize: '0.9rem' }}>María Paula Capacho González</span>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem' }}>Chef · Desarrolladora · Diseñadora · Artista</p>
          <div style={{ width: 40, height: 1, background: 'rgba(0,212,255,0.25)' }} />
          <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.7rem' }}>© 2025 María Paula Capacho González. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
}
