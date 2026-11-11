# Un jardín de tulipanes para Adi 🌷

Carta digital interactiva construida con React, Vite, Motion y SVG. No requiere servidor ni base de datos.

## Desarrollo

Requiere Node.js 20.19+ o 22.12+.

```bash
npm install
npm run dev
```

Abre la dirección que muestre Vite. Para comprobar la versión de producción:

```bash
npm run build
npm run preview
```

## Personalización

Edita `src/data/config.js` para cambiar nombre, remitente, mensajes, párrafos, referencias, colores, tiempos, partículas y audio. Los párrafos de la carta están agrupados en páginas. Sustituye `[Tu nombre]` mediante `sender`.

Para mostrar la ilustración definitiva, coloca un PNG transparente en `public/assets/adi-2d.png` o cambia `illustration` a un archivo WebP. Si no existe, aparece una silueta provisional. El audio está apagado por defecto; para habilitarlo, añade un archivo con derechos de uso en `public/assets/musica.mp3` y cambia `audio.enabled` a `true`. Nunca comienza automáticamente.

## Publicación

En Vercel o Netlify, importa este repositorio. Usa `npm run build` como comando de construcción y `dist` como directorio de salida. No hacen falta variables de entorno ni reglas de redirección.
