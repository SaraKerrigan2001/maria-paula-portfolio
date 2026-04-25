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
    
    // Hero Cards
    'hero.name': 'María Paula',
    'hero.system.title': 'SISTEMA DE PORTAFOLIO PROFESIONAL',
    'hero.profile.title': 'CHEF & DESARROLLADORA DE SOFTWARE',
    
    // Left Card Features
    'hero.experience.title': 'Experiencia Avanzada',
    'hero.experience.desc': 'Desarrollo y cocina profesional',
    'hero.management.title': 'Gestión Completa',
    'hero.management.desc': 'Proyectos y experiencias',
    'hero.realtime.title': 'Tiempo Real',
    'hero.realtime.desc': 'Información actualizada al instante',
    
    // Right Card Contact
    'hero.email.title': 'Email Profesional',
    'hero.email.value': 'maria.paula@portfolio.com',
    'hero.phone.title': 'Teléfono de Contacto',
    'hero.phone.value': '+57 300 123 4567',
    'hero.location.title': 'Ubicación',
    'hero.location.value': 'Colombia, Disponible Remoto',
    
    // Stats
    'hero.years': 'Años',
    'hero.projects': 'Proyectos',
    'hero.languages': 'Idiomas',
    'hero.satisfaction': 'Satisfacción',
    
    // Buttons
    'hero.access.portfolio': 'ACCEDER AL PORTAFOLIO',
    'hero.view.complete': 'VER PORTAFOLIO COMPLETO',
    
    // About
    'about.greeting': '¡Hola!',
    'about.intro': 'Soy',
    'about.role': 'Una Influencer de Redes Sociales y Diseñadora Gráfica',
    'about.description': 'Con más de 5 años de experiencia en diseño visual, desarrollo de software y cocina, me especializo en crear contenido innovador que combina creatividad culinaria con tecnología. Al fusionar la pasión por la gastronomía con habilidades técnicas avanzadas, produzco contenido visual y soluciones digitales que mejoran la identidad de marca y generan crecimiento sostenible.',
    'about.readmore': 'LEER MÁS',
    'about.follow': 'SÍGUEME',
    'about.handle': '@MARIAPAULACH',
    
    // Contact
    'contact.title': 'Contacto',
    'contact.description': '¿Interesado en trabajar juntos? ¡Hablemos!',
    'contact.send': 'ENVIAR MENSAJE',
    
    // Footer
    'footer.rights': '© 2026 María Paula Capacho González. Todos los derechos reservados.',
    
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
    'chat.projects': '¿Qué proyectos ha hecho?',
    'chat.education': '¿Cuál es su formación?',
    'chat.services': '¿Qué servicios ofrece?',
    'chat.availability': '¿Está disponible?',
    'chat.rates': '¿Cuáles son sus tarifas?',
    'chat.location': '¿Dónde está ubicada?',
    'chat.greeting': '¡Hola! 👋 Soy el asistente virtual de María Paula. ¿En qué puedo ayudarte hoy?',
    'chat.welcome': '¡Bienvenido/a! 🌟 Estoy aquí para responder tus preguntas sobre María Paula, Chef y Desarrolladora con +5 años de experiencia. ¿Qué te gustaría saber?',
    'chat.tooltip': '¡Hola! ¿Puedo ayudarte?'
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
    
    // Hero Cards
    'hero.name': 'María Paula',
    'hero.system.title': 'PROFESSIONAL PORTFOLIO SYSTEM',
    'hero.profile.title': 'CHEF & SOFTWARE DEVELOPER',
    
    // Left Card Features
    'hero.experience.title': 'Advanced Experience',
    'hero.experience.desc': 'Professional development and cooking',
    'hero.management.title': 'Complete Management',
    'hero.management.desc': 'Projects and experiences',
    'hero.realtime.title': 'Real Time',
    'hero.realtime.desc': 'Information updated instantly',
    
    // Right Card Contact
    'hero.email.title': 'Professional Email',
    'hero.email.value': 'maria.paula@portfolio.com',
    'hero.phone.title': 'Contact Phone',
    'hero.phone.value': '+57 300 123 4567',
    'hero.location.title': 'Location',
    'hero.location.value': 'Colombia, Remote Available',
    
    // Stats
    'hero.years': 'Years',
    'hero.projects': 'Projects',
    'hero.languages': 'Languages',
    'hero.satisfaction': 'Satisfaction',
    
    // Buttons
    'hero.access.portfolio': 'ACCESS PORTFOLIO',
    'hero.view.complete': 'VIEW COMPLETE PORTFOLIO',
    
    // About
    'about.greeting': 'Hi there!',
    'about.intro': "I'm",
    'about.role': 'A Social Media Influencer & Graphic Designer',
    'about.description': 'With over 5 years of experience in visual design, software development, and cooking, I specialize in creating innovative content that combines culinary creativity with technology. By merging passion for gastronomy with advanced technical skills, I produce visual content and digital solutions that enhance brand identity and generate sustainable growth.',
    'about.readmore': 'READ MORE',
    'about.follow': 'FOLLOW ME',
    'about.handle': '@MARIAPAULACH',
    
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
    'chat.projects': 'What projects has she done?',
    'chat.education': 'What is her education?',
    'chat.services': 'What services does she offer?',
    'chat.availability': 'Is she available?',
    'chat.rates': 'What are her rates?',
    'chat.location': 'Where is she located?',
    'chat.greeting': 'Hello! 👋 I\'m María Paula\'s virtual assistant. How can I help you today?',
    'chat.welcome': 'Welcome! 🌟 I\'m here to answer your questions about María Paula, Chef and Developer with +5 years of experience. What would you like to know?',
    'chat.tooltip': 'Hello! Can I help you?'
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
    
    // Hero Cards
    'hero.name': 'María Paula',
    'hero.system.title': 'SYSTÈME DE PORTFOLIO PROFESSIONNEL',
    'hero.profile.title': 'CHEF & DÉVELOPPEUSE LOGICIEL',
    
    // Left Card Features
    'hero.experience.title': 'Expérience Avancée',
    'hero.experience.desc': 'Développement et cuisine professionnels',
    'hero.management.title': 'Gestion Complète',
    'hero.management.desc': 'Projets et expériences',
    'hero.realtime.title': 'Temps Réel',
    'hero.realtime.desc': 'Informations mises à jour instantanément',
    
    // Right Card Contact
    'hero.email.title': 'Email Professionnel',
    'hero.email.value': 'maria.paula@portfolio.com',
    'hero.phone.title': 'Téléphone de Contact',
    'hero.phone.value': '+57 300 123 4567',
    'hero.location.title': 'Localisation',
    'hero.location.value': 'Colombie, Disponible à Distance',
    
    // Stats
    'hero.years': 'Années',
    'hero.projects': 'Projets',
    'hero.languages': 'Langues',
    'hero.satisfaction': 'Satisfaction',
    
    // Buttons
    'hero.access.portfolio': 'ACCÉDER AU PORTFOLIO',
    'hero.view.complete': 'VOIR PORTFOLIO COMPLET',
    
    // About
    'about.greeting': 'Salut!',
    'about.intro': 'Je suis',
    'about.role': 'Une Influenceuse des Réseaux Sociaux et Designer Graphique',
    'about.description': 'Avec plus de 5 ans d\'expérience en design visuel, développement logiciel et cuisine, je me spécialise dans la création de contenu innovant qui combine créativité culinaire et technologie. En fusionnant la passion pour la gastronomie avec des compétences techniques avancées, je produis du contenu visuel et des solutions numériques qui améliorent l\'identité de marque et génèrent une croissance durable.',
    'about.readmore': 'LIRE PLUS',
    'about.follow': 'SUIVEZ-MOI',
    'about.handle': '@MARIAPAULACH',
    
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
    'chat.projects': 'Quels projets a-t-elle réalisés?',
    'chat.education': 'Quelle est sa formation?',
    'chat.services': 'Quels services offre-t-elle?',
    'chat.availability': 'Est-elle disponible?',
    'chat.rates': 'Quels sont ses tarifs?',
    'chat.location': 'Où est-elle située?',
    'chat.greeting': 'Bonjour! 👋 Je suis l\'assistant virtuel de María Paula. Comment puis-je vous aider aujourd\'hui?',
    'chat.welcome': 'Bienvenue! 🌟 Je suis là pour répondre à vos questions sur María Paula, Chef et Développeuse avec +5 ans d\'expérience. Que souhaitez-vous savoir?',
    'chat.tooltip': 'Bonjour! Puis-je vous aider?'
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