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

Edita `src/data/config.js` para cambiar nombre, remitente, mensajes, párrafos, referencias, colores, tiempos, partículas y audio. Los párrafos de la carta están agrupados en páginas. Sustituye `[Tu nombre]` mediante `sender`. Las referencias bíblicas y sus explicaciones están en `verses` y enlazan a jw.org.

Para mostrar la ilustración definitiva, coloca un PNG transparente en `public/assets/adi-2d.png` o cambia `illustration` a un archivo WebP. Si no existe, aparece una silueta provisional sin rasgos faciales. La música es una melodía original sintetizada por el navegador. También hay efectos breves al abrir la carta y pasar de página. Todo el sonido está apagado al cargar y solo se activa con el botón «Escuchar el jardín»; `audio.enabled` puede ocultar ese control.

## Publicación

En Vercel o Netlify, importa este repositorio. Usa `npm run build` como comando de construcción y `dist` como directorio de salida. No hacen falta variables de entorno ni reglas de redirección.
