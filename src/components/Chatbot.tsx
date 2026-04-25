'use client';
import { useState, useRef, useEffect } from 'react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const quickQuestions = [
  { label: '👩‍🍳 Experiencia', text: '¿Cuál es tu experiencia?' },
  { label: '💻 Proyectos', text: '¿Qué proyectos has hecho?' },
  { label: '🎓 Estudios', text: '¿Cuál es tu formación?' },
  { label: '📍 Contacto', text: '¿Cómo te contacto?' },
  { label: '⚡ Habilidades', text: '¿Qué habilidades tienes?' },
  { label: '🌐 Idiomas', text: '¿Qué idiomas hablas?' },
];

const getBotResponse = (userMessage: string): string => {
  const msg = userMessage.toLowerCase();

  if (msg.includes('hola') || msg.includes('hi') || msg.includes('buenas') || msg.includes('saludos')) {
    return '¡Hola! 👋 Soy el asistente virtual de María Paula. Puedo contarte sobre su experiencia, proyectos, estudios y más. ¿Qué te gustaría saber?';
  }

  if (msg.includes('experiencia') || msg.includes('trabajo') || msg.includes('laboral')) {
    return '💼 María Paula tiene experiencia en:\n\n🍳 Cocinera en Restaurante El Sabor (2023–2024) — cocina tradicional y moderna, emplatado y trabajo en equipo.\n\n💻 Desarrolladora de Software Freelance (2025–Actualidad) — aplicaciones web con HTML, CSS, JavaScript, Bootstrap y Git/GitHub.';
  }

  if (msg.includes('proyecto') || msg.includes('software') || msg.includes('sena') || msg.includes('progsena') || msg.includes('digiturno')) {
    return '🚀 Sus proyectos de software incluyen:\n\n🏆 Sistema ProgSena — Gestión académica para el SENA con PHP, MySQL y arquitectura MVC. Maneja instructores, coordinadores, asignaciones y fichas.\n\n🚦 DigiTurno APE-SENA — Sistema de turnos digitales con Laravel, Tailwind y MySQL. Pantalla pública en tiempo real.\n\n⭐ Este portafolio — Desarrollado con Next.js 16, TypeScript y Tailwind CSS.';
  }

  if (msg.includes('estudio') || msg.includes('formación') || msg.includes('educación') || msg.includes('universidad') || msg.includes('colegio')) {
    return '🎓 Formación académica de María Paula:\n\n🏫 Bachillerato — Colegio Privado Seminario Menor San José de Cúcuta (2013–2019)\n\n🎨 Diseño Gráfico — Universidad UDES (1 año)\n\n🎵 Música y Arte — Escuela de Música y Arte (1 año)\n\n👨‍🍳 Gastronomía — Instituto Bolivariano IBES (1.5 años)';
  }

  if (msg.includes('habilidad') || msg.includes('skill') || msg.includes('sabe') || msg.includes('puede')) {
    return '⚡ Habilidades de María Paula:\n\n🍳 Cocina Profesional — 85%\n🌐 HTML & CSS — 80%\n⚡ JavaScript — 65%\n🎨 Diseño Gráfico — 75%\n✏️ Dibujo & Pintura — 90%\n💅 Bootstrap / Tailwind — 70%\n\nTambién tiene habilidades blandas: creatividad, trabajo en equipo, liderazgo y resolución de problemas.';
  }

  if (msg.includes('contacto') || msg.includes('email') || msg.includes('teléfono') || msg.includes('correo') || msg.includes('whatsapp')) {
    return '📬 Puedes contactar a María Paula:\n\n📧 Email: paitocapacho5@gmail.com\n📱 Teléfono: 300 641 0764\n📍 Ubicación: Cúcuta, Norte de Santander, Colombia\n🌐 Disponible para proyectos remotos\n\n¡No dudes en escribirle!';
  }

  if (msg.includes('idioma') || msg.includes('habla') || msg.includes('lengua') || msg.includes('language')) {
    return '🌐 María Paula habla 3 idiomas:\n\n🇪🇸 Español — Nativo\n🇺🇸 Inglés — Intermedio\n🇫🇷 Francés — Básico\n\nIncluso este portafolio tiene soporte multiidioma en los 3 idiomas.';
  }

  if (msg.includes('cocina') || msg.includes('chef') || msg.includes('gastronomía') || msg.includes('comida')) {
    return '🍳 En cocina, María Paula tiene experiencia en:\n\n• Cocina tradicional y moderna colombiana\n• Técnicas de emplatado profesional\n• Seminario de Parrilla VS Barril\n• Coctelería y mixología\n• Trabajo en equipo bajo presión\n\nEstudió gastronomía en el Instituto Bolivariano IBES.';
  }

  if (msg.includes('arte') || msg.includes('dibujo') || msg.includes('pintura') || msg.includes('diseño')) {
    return '🎨 María Paula es también artista:\n\n✏️ Dibujo artístico — heredado de su familia, 90% de dominio\n🖌️ Pintura — diferentes técnicas y estilos\n🎨 Diseño Gráfico — estudió en la Universidad UDES\n\nCombina su creatividad artística con el desarrollo de software para crear experiencias únicas.';
  }

  if (msg.includes('disponible') || msg.includes('contratar') || msg.includes('freelance') || msg.includes('trabajo')) {
    return '✅ María Paula está disponible para:\n\n• Proyectos de desarrollo web freelance\n• Consultoría gastronómica\n• Diseño gráfico y visual\n• Trabajo remoto o presencial en Cúcuta\n\n📧 Contáctala en: paitocapacho5@gmail.com';
  }

  if (msg.includes('quién') || msg.includes('quien') || msg.includes('sobre') || msg.includes('about') || msg.includes('presentación')) {
    return '👩 María Paula Capacho González:\n\n• 23 años, nacida el 7 de diciembre de 2001\n• Chef y Desarrolladora de Software\n• Cúcuta, Norte de Santander, Colombia\n• Apasionada por combinar tecnología y gastronomía\n• Artista, creativa y multidisciplinar\n\n¡Una persona única con múltiples talentos! 🌟';
  }

  return '🤔 Interesante pregunta. Puedo contarte sobre la experiencia, proyectos, estudios, habilidades o contacto de María Paula. ¿Sobre qué te gustaría saber más?';
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: '¡Hola! 👋 Soy el asistente virtual de María Paula — Chef, Desarrolladora y Artista. ¿En qué puedo ayudarte hoy?',
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [pulse, setPulse] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Pulse the button every few seconds when closed
  useEffect(() => {
    if (isOpen) return;
    const t = setInterval(() => {
      setPulse(false);
      setTimeout(() => setPulse(true), 300);
    }, 5000);
    return () => clearInterval(t);
  }, [isOpen]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = { id: Date.now(), text, isBot: false, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const botMsg: Message = {
        id: Date.now() + 1,
        text: getBotResponse(text),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 800 + Math.random() * 700);
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(inputText); }
  };

  return (
    <>
      {/* Floating button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        {!isOpen && (
          <div
            className="text-xs px-3 py-1.5 rounded-full font-medium animate-bounce"
            style={{ background: 'rgba(0,212,255,0.15)', color: '#00d4ff', border: '1px solid rgba(0,212,255,0.3)' }}
          >
            ¡Hola! ¿Puedo ayudarte?
          </div>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${pulse && !isOpen ? 'scale-110' : 'scale-100'}`}
          style={{
            background: 'linear-gradient(135deg, #0080ff, #00d4ff)',
            boxShadow: '0 0 20px rgba(0,212,255,0.4)',
          }}
        >
          {isOpen ? (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          )}
        </button>
      </div>

      {/* Chat window */}
      {isOpen && (
        <div
          className="fixed z-40 flex flex-col rounded-2xl overflow-hidden"
          style={{
            bottom: '5.5rem',
            right: '1.5rem',
            width: 'min(380px, calc(100vw - 2rem))',
            height: 'min(560px, 75vh)',
            background: 'rgba(10, 14, 26, 0.97)',
            border: '1px solid rgba(0,212,255,0.2)',
            boxShadow: '0 25px 60px rgba(0,0,0,0.5), 0 0 40px rgba(0,212,255,0.1)',
            backdropFilter: 'blur(20px)',
          }}
        >
          {/* Header */}
          <div
            className="flex items-center gap-3 px-4 py-3 flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, rgba(0,128,255,0.3), rgba(0,212,255,0.2))', borderBottom: '1px solid rgba(0,212,255,0.15)' }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #0080ff, #00d4ff)', color: 'white' }}
            >
              MP
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-bold text-sm">Asistente Virtual</p>
              <p className="text-xs" style={{ color: '#00d4ff' }}>María Paula Bot</p>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-green-400">En línea</span>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(0,212,255,0.3) transparent' }}>
            {messages.map((msg) => (
              <div key={msg.id} className={`flex message-animation ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                {msg.isBot && (
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold mr-2 flex-shrink-0 mt-1"
                    style={{ background: 'linear-gradient(135deg, #0080ff, #00d4ff)', color: 'white' }}
                  >
                    MP
                  </div>
                )}
                <div
                  className="max-w-[78%] px-3 py-2.5 rounded-2xl"
                  style={msg.isBot ? {
                    background: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(0,212,255,0.15)',
                    color: '#e2e8f0',
                  } : {
                    background: 'linear-gradient(135deg, #0080ff, #00d4ff)',
                    color: 'white',
                  }}
                >
                  <p className="text-xs leading-relaxed whitespace-pre-line">{msg.text}</p>
                  <p className="text-right mt-1" style={{ fontSize: '0.6rem', opacity: 0.5 }}>
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start message-animation">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold mr-2 flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #0080ff, #00d4ff)', color: 'white' }}
                >
                  MP
                </div>
                <div
                  className="px-4 py-3 rounded-2xl flex items-center gap-1"
                  style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(0,212,255,0.15)' }}
                >
                  {[0, 0.15, 0.3].map((delay, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 rounded-full animate-bounce"
                      style={{ background: '#00d4ff', animationDelay: `${delay}s` }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick questions */}
          <div className="px-3 py-2 flex-shrink-0" style={{ borderTop: '1px solid rgba(0,212,255,0.1)' }}>
            <p className="text-xs mb-2" style={{ color: 'rgba(0,212,255,0.6)' }}>Preguntas rápidas:</p>
            <div className="flex flex-wrap gap-1.5">
              {quickQuestions.map((q) => (
                <button
                  key={q.label}
                  onClick={() => sendMessage(q.text)}
                  className="text-xs px-2.5 py-1 rounded-full transition-all hover:scale-105"
                  style={{
                    background: 'rgba(0,212,255,0.08)',
                    border: '1px solid rgba(0,212,255,0.2)',
                    color: '#94a3b8',
                  }}
                  onMouseEnter={e => {
                    (e.target as HTMLElement).style.background = 'rgba(0,212,255,0.2)';
                    (e.target as HTMLElement).style.color = '#00d4ff';
                  }}
                  onMouseLeave={e => {
                    (e.target as HTMLElement).style.background = 'rgba(0,212,255,0.08)';
                    (e.target as HTMLElement).style.color = '#94a3b8';
                  }}
                >
                  {q.label}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="px-3 py-3 flex gap-2 flex-shrink-0" style={{ borderTop: '1px solid rgba(0,212,255,0.1)' }}>
            <input
              type="text"
              value={inputText}
              onChange={e => setInputText(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Escribe tu mensaje..."
              className="flex-1 text-xs px-3 py-2.5 rounded-xl outline-none"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(0,212,255,0.2)',
                color: '#e2e8f0',
              }}
              onFocus={e => (e.target.style.borderColor = 'rgba(0,212,255,0.5)')}
              onBlur={e => (e.target.style.borderColor = 'rgba(0,212,255,0.2)')}
            />
            <button
              onClick={() => sendMessage(inputText)}
              disabled={!inputText.trim()}
              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all disabled:opacity-30"
              style={{ background: 'linear-gradient(135deg, #0080ff, #00d4ff)' }}
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
