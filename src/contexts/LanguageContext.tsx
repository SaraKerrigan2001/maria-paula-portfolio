'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'ES' | 'EN' | 'FR';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ES: {
    // Navbar
    'nav.home': 'HOME',
    'nav.about': 'ABOUT',
    'nav.portfolio': 'PORTFOLIO',
    'nav.contact': 'CONTACT',
    'nav.socials': 'SOCIALS',
    'nav.title': 'MARÍA PAULA',
    'nav.subtitle': 'CHEF & SOFTWARE DEVELOPER',
    
    // Hero
    'hero.designer': 'GRAPHIC DESIGNER',
    'hero.name': 'MARÍA PAULA',
    'hero.subtitle': 'SOFTWARE DEVELOPER & CHEF',
    'hero.description': 'Diseños que conectan, involucran y elevan tu marca con plantillas creativas para impulsar el éxito de tu negocio.',
    'hero.placeholder': 'Usuario o Email',
    'hero.login': 'LOGIN',
    'hero.forgot': '¿Olvidaste tu contraseña?',
    
    // About
    'about.greeting': '¡Hola!',
    'about.intro': 'Soy',
    'about.role': 'Una Influencer de Redes Sociales y Diseñadora Gráfica',
    'about.description': 'Con más de 5 años de experiencia en diseño visual, desarrollo de software y cocina, me especializo en crear contenido innovador que combina creatividad culinaria con tecnología. Al fusionar la pasión por la gastronomía con habilidades técnicas avanzadas, produzco contenido visual y soluciones digitales que mejoran la identidad de marca y generan crecimiento sostenible.',
    'about.readmore': 'LEER MÁS',
    'about.follow': 'SÍGUEME',
    'about.handle': '@MARIAPAULACH',
    
    // Portfolio
    'portfolio.title': 'COMMISSION | TOP ICON',
    'portfolio.yasmin': 'YASMIN BANDEJA',
    'portfolio.yasmin.subtitle': 'Chef Profesional',
    'portfolio.mikko': 'MIKKO MAGADIA',
    'portfolio.mikko.subtitle': 'Desarrolladora de Software',
    'portfolio.angelica': 'ANGELICA CALAYAN',
    'portfolio.angelica.subtitle': 'Diseñadora Gráfica',
    'portfolio.culinary': 'CULINARIO',
    'portfolio.tech': 'TECNOLOGÍA',
    'portfolio.design': 'DISEÑO',
    'portfolio.posters': 'POSTERS',
    'portfolio.invitations': 'INVITACIONES',
    'portfolio.banners': 'BANNERS',
    'portfolio.logo': 'LOGO',
    'portfolio.photography': 'FOTOGRAFÍA',
    
    // Contact
    'contact.title': 'Contacto',
    'contact.description': '¿Interesado en trabajar juntos? ¡Hablemos!',
    'contact.send': 'ENVIAR MENSAJE',
    
    // Footer
    'footer.rights': '© 2024 María Paula Capacho González. Todos los derechos reservados.',
    
    // Chatbot
    'chat.title': 'Asistente Virtual',
    'chat.subtitle': 'María Paula Bot',
    'chat.online': 'En línea',
    'chat.placeholder': 'Escribe tu mensaje...',
    'chat.quick': 'Preguntas rápidas:',
    'chat.experience': '¿Cuál es su experiencia?',
    'chat.skills': '¿Qué habilidades tiene?',
    'chat.contact': '¿Cómo contactarla?',
    'chat.portfolio': 'Ver portfolio',
    'chat.greeting': '¡Hola! 👋 Soy el asistente virtual de María Paula. ¿En qué puedo ayudarte hoy?'
  },
  
  EN: {
    // Navbar
    'nav.home': 'HOME',
    'nav.about': 'ABOUT',
    'nav.portfolio': 'PORTFOLIO',
    'nav.contact': 'CONTACT',
    'nav.socials': 'SOCIALS',
    'nav.title': 'MARÍA PAULA',
    'nav.subtitle': 'CHEF & SOFTWARE DEVELOPER',
    
    // Hero
    'hero.designer': 'GRAPHIC DESIGNER',
    'hero.name': 'MARÍA PAULA',
    'hero.subtitle': 'SOFTWARE DEVELOPER & CHEF',
    'hero.description': 'Designs that connect, engage, and elevate your brand with creative templates to boost your business success.',
    'hero.placeholder': 'Username or Email',
    'hero.login': 'LOGIN',
    'hero.forgot': 'Forgot password?',
    
    // About
    'about.greeting': 'Hi there!',
    'about.intro': "I'm",
    'about.role': 'A Social Media Influencer & Graphic Designer',
    'about.description': 'With over 5 years of experience in visual design, software development, and cooking, I specialize in creating innovative content that combines culinary creativity with technology. By merging passion for gastronomy with advanced technical skills, I produce visual content and digital solutions that enhance brand identity and generate sustainable growth.',
    'about.readmore': 'READ MORE',
    'about.follow': 'FOLLOW ME',
    'about.handle': '@MARIAPAULACH',
    
    // Portfolio
    'portfolio.title': 'COMMISSION | TOP ICON',
    'portfolio.yasmin': 'YASMIN BANDEJA',
    'portfolio.yasmin.subtitle': 'Professional Chef',
    'portfolio.mikko': 'MIKKO MAGADIA',
    'portfolio.mikko.subtitle': 'Software Developer',
    'portfolio.angelica': 'ANGELICA CALAYAN',
    'portfolio.angelica.subtitle': 'Graphic Designer',
    'portfolio.culinary': 'CULINARY',
    'portfolio.tech': 'TECH',
    'portfolio.design': 'DESIGN',
    'portfolio.posters': 'POSTERS',
    'portfolio.invitations': 'INVITATIONS',
    'portfolio.banners': 'BANNERS',
    'portfolio.logo': 'LOGO',
    'portfolio.photography': 'PHOTOGRAPHY',
    
    // Contact
    'contact.title': 'Contact',
    'contact.description': 'Interested in working together? Let\'s talk!',
    'contact.send': 'SEND MESSAGE',
    
    // Footer
    'footer.rights': '© 2024 María Paula Capacho González. All rights reserved.',
    
    // Chatbot
    'chat.title': 'Virtual Assistant',
    'chat.subtitle': 'María Paula Bot',
    'chat.online': 'Online',
    'chat.placeholder': 'Type your message...',
    'chat.quick': 'Quick questions:',
    'chat.experience': 'What is her experience?',
    'chat.skills': 'What skills does she have?',
    'chat.contact': 'How to contact her?',
    'chat.portfolio': 'View portfolio',
    'chat.greeting': 'Hello! 👋 I\'m María Paula\'s virtual assistant. How can I help you today?'
  },
  
  FR: {
    // Navbar
    'nav.home': 'ACCUEIL',
    'nav.about': 'À PROPOS',
    'nav.portfolio': 'PORTFOLIO',
    'nav.contact': 'CONTACT',
    'nav.socials': 'RÉSEAUX',
    'nav.title': 'MARÍA PAULA',
    'nav.subtitle': 'CHEF & DÉVELOPPEUSE LOGICIEL',
    
    // Hero
    'hero.designer': 'DESIGNER GRAPHIQUE',
    'hero.name': 'MARÍA PAULA',
    'hero.subtitle': 'DÉVELOPPEUSE LOGICIEL & CHEF',
    'hero.description': 'Des designs qui connectent, engagent et élèvent votre marque avec des modèles créatifs pour stimuler le succès de votre entreprise.',
    'hero.placeholder': 'Nom d\'utilisateur ou Email',
    'hero.login': 'CONNEXION',
    'hero.forgot': 'Mot de passe oublié?',
    
    // About
    'about.greeting': 'Salut!',
    'about.intro': 'Je suis',
    'about.role': 'Une Influenceuse des Réseaux Sociaux et Designer Graphique',
    'about.description': 'Avec plus de 5 ans d\'expérience en design visuel, développement logiciel et cuisine, je me spécialise dans la création de contenu innovant qui combine créativité culinaire et technologie. En fusionnant la passion pour la gastronomie avec des compétences techniques avancées, je produis du contenu visuel et des solutions numériques qui améliorent l\'identité de marque et génèrent une croissance durable.',
    'about.readmore': 'LIRE PLUS',
    'about.follow': 'SUIVEZ-MOI',
    'about.handle': '@MARIAPAULACH',
    
    // Portfolio
    'portfolio.title': 'COMMISSION | ICÔNE TOP',
    'portfolio.yasmin': 'YASMIN BANDEJA',
    'portfolio.yasmin.subtitle': 'Chef Professionnelle',
    'portfolio.mikko': 'MIKKO MAGADIA',
    'portfolio.mikko.subtitle': 'Développeuse Logiciel',
    'portfolio.angelica': 'ANGELICA CALAYAN',
    'portfolio.angelica.subtitle': 'Designer Graphique',
    'portfolio.culinary': 'CULINAIRE',
    'portfolio.tech': 'TECH',
    'portfolio.design': 'DESIGN',
    'portfolio.posters': 'AFFICHES',
    'portfolio.invitations': 'INVITATIONS',
    'portfolio.banners': 'BANNIÈRES',
    'portfolio.logo': 'LOGO',
    'portfolio.photography': 'PHOTOGRAPHIE',
    
    // Contact
    'contact.title': 'Contact',
    'contact.description': 'Intéressé à travailler ensemble? Parlons-en!',
    'contact.send': 'ENVOYER MESSAGE',
    
    // Footer
    'footer.rights': '© 2024 María Paula Capacho González. Tous droits réservés.',
    
    // Chatbot
    'chat.title': 'Assistant Virtuel',
    'chat.subtitle': 'María Paula Bot',
    'chat.online': 'En ligne',
    'chat.placeholder': 'Tapez votre message...',
    'chat.quick': 'Questions rapides:',
    'chat.experience': 'Quelle est son expérience?',
    'chat.skills': 'Quelles compétences a-t-elle?',
    'chat.contact': 'Comment la contacter?',
    'chat.portfolio': 'Voir portfolio',
    'chat.greeting': 'Bonjour! 👋 Je suis l\'assistant virtuel de María Paula. Comment puis-je vous aider aujourd\'hui?'
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('ES');

  const setLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
  };

  const t = (key: string): string => {
    return translations[currentLanguage][key as keyof typeof translations['ES']] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}