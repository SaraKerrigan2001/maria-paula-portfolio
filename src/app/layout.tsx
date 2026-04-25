import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "../contexts/LanguageContext";

export const metadata: Metadata = {
  title: "María Paula Capacho González - Hoja de Vida",
  description: "Chef y Desarrolladora de Software - Portafolio profesional",
  keywords: "chef, desarrolladora, software, cocina, María Paula Capacho",
  authors: [{ name: "María Paula Capacho González" }],
  openGraph: {
    title: "María Paula Capacho González - Hoja de Vida",
    description: "Chef y Desarrolladora de Software - Portafolio profesional",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body style={{ background: '#0a0e1a', margin: 0, padding: 0 }}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
