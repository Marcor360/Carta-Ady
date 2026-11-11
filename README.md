# Un jardín de tulipanes para Ady 🌷

Carta digital interactiva construida con React, Vite, Motion y SVG. Incluye nueve tulipanes que crecen por etapas, cinco mensajes florales, una abejita que rodea la carta, un ramo con destellos, una melodía instrumental original y efectos de papel. No requiere servidor ni base de datos.

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

Para mostrar la ilustración definitiva, coloca un PNG transparente en `public/assets/ady-2d.png` o cambia `illustration` a un archivo WebP. Si no existe, aparece una silueta provisional sin rasgos faciales. La música instrumental original está incluida en `public/audio/jardin-de-ady.wav` y se reproduce en bucle. Al abrir la carta y pasar de página suenan efectos de papel y se anima el giro de página. Todo el sonido está apagado al cargar; «Reproducir música» permite iniciarla, pausarla y ajustar el volumen. El control indica si el navegador pudo reproducirla. `audio.enabled` puede ocultarlo.

## Publicación

En Vercel o Netlify, importa este repositorio. Usa `npm run build` como comando de construcción y `dist` como directorio de salida. No hacen falta variables de entorno ni reglas de redirección.
