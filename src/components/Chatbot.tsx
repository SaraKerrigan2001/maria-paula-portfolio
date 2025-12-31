'use client';
import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export default function Chatbot() {
  const { t, currentLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: t('chat.greeting'),
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Update greeting message when language changes
  useEffect(() => {
    setMessages([{
      id: 1,
      text: t('chat.greeting'),
      isBot: true,
      timestamp: new Date()
    }]);
  }, [currentLanguage, t]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponses = () => {
    const responses = {
      ES: {
        greeting: [
          "¡Hola! 😊 ¿Cómo estás? ¿En qué puedo ayudarte?",
          "¡Bienvenido! 👋 Estoy aquí para ayudarte con cualquier pregunta sobre María Paula.",
          "¡Hola! Me alegra verte por aquí. ¿Qué te gustaría saber?"
        ],
        experience: [
          "María Paula tiene más de 5 años de experiencia combinando cocina profesional y desarrollo de software. 👩‍🍳💻",
          "Su experiencia incluye trabajo en restaurantes de alta cocina y desarrollo de aplicaciones web modernas.",
          "Ha trabajado tanto en cocinas profesionales como en equipos de desarrollo ágil."
        ],
        skills: [
          "Sus habilidades incluyen: Cocina profesional, JavaScript, React, Next.js, Python, y gestión de equipos. 🚀",
          "Domina tanto técnicas culinarias avanzadas como tecnologías web modernas.",
          "Especializada en crear experiencias digitales y gastronómicas excepcionales."
        ],
        contact: [
          "Puedes contactar a María Paula a través del formulario de contacto en esta página. 📧",
          "También puedes encontrarla en sus redes sociales que están en la sección About.",
          "¿Te gustaría que te ayude con algo específico sobre su trabajo?"
        ],
        portfolio: [
          "Su portfolio incluye proyectos de desarrollo web, diseño gráfico y experiencias culinarias únicas. 🎨",
          "Puedes ver algunos de sus trabajos en la sección Portfolio de esta página.",
          "Combina creatividad técnica con innovación gastronómica."
        ],
        default: [
          "Esa es una pregunta interesante. ¿Podrías ser más específico? 🤔",
          "No estoy seguro de entender completamente. ¿Puedes reformular tu pregunta?",
          "¡Interesante! Cuéntame más sobre lo que necesitas saber."
        ]
      },
      EN: {
        greeting: [
          "Hello! 😊 How are you? How can I help you?",
          "Welcome! 👋 I'm here to help you with any questions about María Paula.",
          "Hi! Nice to see you here. What would you like to know?"
        ],
        experience: [
          "María Paula has over 5 years of experience combining professional cooking and software development. 👩‍🍳💻",
          "Her experience includes work in high-end restaurants and modern web application development.",
          "She has worked in both professional kitchens and agile development teams."
        ],
        skills: [
          "Her skills include: Professional cooking, JavaScript, React, Next.js, Python, and team management. 🚀",
          "She masters both advanced culinary techniques and modern web technologies.",
          "Specialized in creating exceptional digital and gastronomic experiences."
        ],
        contact: [
          "You can contact María Paula through the contact form on this page. 📧",
          "You can also find her on social media in the About section.",
          "Would you like me to help you with something specific about her work?"
        ],
        portfolio: [
          "Her portfolio includes web development projects, graphic design, and unique culinary experiences. 🎨",
          "You can see some of her work in the Portfolio section of this page.",
          "She combines technical creativity with gastronomic innovation."
        ],
        default: [
          "That's an interesting question. Could you be more specific? 🤔",
          "I'm not sure I understand completely. Can you rephrase your question?",
          "Interesting! Tell me more about what you need to know."
        ]
      },
      FR: {
        greeting: [
          "Bonjour! 😊 Comment allez-vous? Comment puis-je vous aider?",
          "Bienvenue! 👋 Je suis là pour vous aider avec toute question sur María Paula.",
          "Salut! Ravi de vous voir ici. Que souhaiteriez-vous savoir?"
        ],
        experience: [
          "María Paula a plus de 5 ans d'expérience combinant cuisine professionnelle et développement logiciel. 👩‍🍳💻",
          "Son expérience inclut le travail dans des restaurants haut de gamme et le développement d'applications web modernes.",
          "Elle a travaillé dans des cuisines professionnelles et des équipes de développement agile."
        ],
        skills: [
          "Ses compétences incluent: Cuisine professionnelle, JavaScript, React, Next.js, Python, et gestion d'équipe. 🚀",
          "Elle maîtrise les techniques culinaires avancées et les technologies web modernes.",
          "Spécialisée dans la création d'expériences digitales et gastronomiques exceptionnelles."
        ],
        contact: [
          "Vous pouvez contacter María Paula via le formulaire de contact sur cette page. 📧",
          "Vous pouvez aussi la trouver sur les réseaux sociaux dans la section À propos.",
          "Souhaiteriez-vous que je vous aide avec quelque chose de spécifique sur son travail?"
        ],
        portfolio: [
          "Son portfolio inclut des projets de développement web, design graphique et expériences culinaires uniques. 🎨",
          "Vous pouvez voir certains de ses travaux dans la section Portfolio de cette page.",
          "Elle combine créativité technique avec innovation gastronomique."
        ],
        default: [
          "C'est une question intéressante. Pourriez-vous être plus spécifique? 🤔",
          "Je ne suis pas sûr de comprendre complètement. Pouvez-vous reformuler votre question?",
          "Intéressant! Dites-moi en plus sur ce que vous voulez savoir."
        ]
      }
    };
    return responses[currentLanguage];
  };

  const getRandomResponse = (category: string) => {
    const responses = getBotResponses();
    const categoryResponses = responses[category as keyof typeof responses];
    return categoryResponses[Math.floor(Math.random() * categoryResponses.length)];
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('hola') || message.includes('hi') || message.includes('hello') || message.includes('bonjour') || message.includes('salut')) {
      return getRandomResponse('greeting');
    }
    if (message.includes('experiencia') || message.includes('trabajo') || message.includes('experience') || message.includes('work') || message.includes('expérience') || message.includes('travail')) {
      return getRandomResponse('experience');
    }
    if (message.includes('habilidades') || message.includes('skills') || message.includes('tecnologías') || message.includes('compétences') || message.includes('technologies')) {
      return getRandomResponse('skills');
    }
    if (message.includes('contacto') || message.includes('contact') || message.includes('email')) {
      return getRandomResponse('contact');
    }
    if (message.includes('portfolio') || message.includes('proyectos') || message.includes('trabajos') || message.includes('projets') || message.includes('travaux')) {
      return getRandomResponse('portfolio');
    }
    
    return getRandomResponse('default');
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputText),
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    t('chat.experience'),
    t('chat.skills'),
    t('chat.contact'),
    t('chat.portfolio')
  ];

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full neon-button flex items-center justify-center shadow-2xl transition-all duration-300 ${
          isOpen ? 'rotate-45' : 'pulse-glow'
        }`}
      >
        {isOpen ? (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed z-40 modern-container rounded-2xl flex flex-col overflow-hidden chatbot-container ${
          typeof window !== 'undefined' && window.innerWidth < 768 
            ? 'chatbot-mobile' 
            : 'bottom-24 right-6 w-96 h-[500px]'
        }`}>
          {/* Header */}
          <div className="glass-effect p-4 border-b border-cyan-400/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
                <span className="text-black font-bold">MP</span>
              </div>
              <div>
                <h3 className="font-bold text-white">{t('chat.title')}</h3>
                <p className="text-xs text-cyan-400">{t('chat.subtitle')}</p>
              </div>
              <div className="ml-auto flex items-center gap-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-400">{t('chat.online')}</span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 chat-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex message-animation ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.isBot
                      ? 'glass-effect text-white'
                      : 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className={`text-xs mt-1 ${message.isBot ? 'text-gray-400' : 'text-black/70'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start message-animation">
                <div className="glass-effect p-3 rounded-2xl">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="p-4 border-t border-cyan-400/20">
              <p className="text-xs text-gray-400 mb-2">{t('chat.quick')}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => setInputText(question)}
                    className="text-xs glass-effect p-2 rounded-lg hover:bg-cyan-400/10 transition-colors text-left"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-cyan-400/20">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={t('chat.placeholder')}
                className="flex-1 glass-effect px-4 py-2 rounded-lg text-white placeholder-gray-400 outline-none focus:border-cyan-400 transition-all text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="w-10 h-10 neon-button rounded-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}