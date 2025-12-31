# Guía de Despliegue

## 🚀 Opciones de Despliegue

### 1. Vercel (Recomendado)
Vercel es la plataforma oficial de Next.js y ofrece despliegue gratuito:

1. Crear cuenta en [vercel.com](https://vercel.com)
2. Conectar tu repositorio de GitHub
3. Vercel detectará automáticamente que es un proyecto Next.js
4. El despliegue será automático en cada push

### 2. Netlify
1. Crear cuenta en [netlify.com](https://netlify.com)
2. Conectar repositorio
3. Configurar build command: `npm run build`
4. Configurar publish directory: `.next`

### 3. GitHub Pages (Estático)
Para generar una versión estática:

```bash
npm run build
npm run export
```

Luego subir la carpeta `out` a GitHub Pages.

## 🔧 Variables de Entorno

Si necesitas variables de entorno, crear archivo `.env.local`:

```
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
```

## 📱 Optimizaciones para Producción

El proyecto ya incluye:
- ✅ Optimización de imágenes
- ✅ Minificación de CSS y JS
- ✅ Compresión automática
- ✅ SEO optimizado
- ✅ Responsive design

## 🌐 Dominio Personalizado

Para usar un dominio personalizado:
1. Comprar dominio
2. Configurar DNS apuntando a tu hosting
3. En Vercel/Netlify agregar el dominio personalizado

## 📊 Analytics (Opcional)

Para agregar Google Analytics, instalar:

```bash
npm install @next/third-parties
```

Y configurar en `layout.tsx`.

## 🔒 HTTPS

Vercel y Netlify proporcionan HTTPS automáticamente.
Para otros hostings, configurar certificado SSL.

---

¡Tu hoja de vida estará online en minutos! 🎉