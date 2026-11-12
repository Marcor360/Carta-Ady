// Edita aquí toda la historia. La ilustración final puede ponerse en public/assets/ady-2d.png.
export const config = {
  name: 'Ady', nickname: 'Pequeña Ady', sender: 'Marco Rulfo, alias Chaparro',
  beeMessage: 'Una pausa para decirte algo: tu esfuerzo merece celebrarse. Sigue floreciendo, Pequeña Ady. 🌷',
  illustration: '/assets/ady-2d.png', audio: { enabled: true, src: '/audio/jardin-de-ady.wav' },
  verses: {
    'Hebreos 6:10': { url: 'https://www.jw.org/es/biblioteca/biblia/biblia-estudio/libros/hebreos/6/#v58006010', explanation: 'Jehová recuerda el amor que mostramos por él y el trabajo que hacemos para ayudar a otros. Hasta los esfuerzos discretos tienen valor para él.' },
    '1 Corintios 15:58': { url: 'https://www.jw.org/es/biblioteca/biblia/biblia-estudio/libros/1-corintios/15/#v46015058', explanation: 'Nos anima a mantenernos firmes y ocupados en la obra del Señor, con la seguridad de que ese esfuerzo no es en vano.' },
    'Gálatas 6:9': { url: 'https://www.jw.org/es/biblioteca/biblia/biblia-estudio/libros/galatas/6/#v48006009', explanation: 'Nos anima a no cansarnos de hacer lo que está bien. La constancia tiene su tiempo de cosecha.' }
  },
  particleCount: 8, animationSeconds: 1,
  tulips: [
    { color: '#EFA6B5', light: '#F8BBD0', shape: 0, height: 235, tilt: -9, label: 'Fe', message: 'Que tu confianza en Jehová siga creciendo' },
    { color: '#C9B6E4', light: '#E5D7F1', shape: 1, height: 278, tilt: 7, label: 'Alegría', message: 'Que nunca falten motivos para sonreír' },
    { color: '#F4D98B', light: '#FBE9B4', shape: 2, height: 245, tilt: -4, label: 'Amor', message: 'Que el amor por Jehová siga guiando tus pasos' },
    { color: '#F3C7BB', light: '#FFE6D7', shape: 3, height: 294, tilt: 9, label: 'Perseverancia', message: 'Que cada nuevo reto te ayude a fortalecerte' },
    { color: '#F9F3E8', light: '#FFFFFF', shape: 4, height: 260, tilt: -7, label: 'Amistad', message: 'Que siempre tengas personas que te animen a seguir' },
    { color: '#D7A5B3', light: '#EAC6D0', shape: 1, height: 192, tilt: 8, label: 'Esperanza', interactive: false },
    { color: '#EDD18C', light: '#FFF0BF', shape: 2, height: 205, tilt: -5, label: 'Luz', interactive: false },
    { color: '#B9A5D0', light: '#DDD1EA', shape: 3, height: 214, tilt: 6, label: 'Calma', interactive: false },
    { color: '#EAB5A5', light: '#F7D8C9', shape: 0, height: 185, tilt: -8, label: 'Cariño', interactive: false },
  ],
  intro: ['Hay flores que tardan en florecer...', 'Pero cuando lo hacen, nos recuerdan lo hermoso que es crecer.', 'Hoy quiero regalarte unas flores, Ady. 🌷'],
  messages: ['Pequeña Ady, hoy es un día muy especial.', 'Terminaste tu primera Escuela del Servicio de Precursor.', 'Sé cuánto te esfuerzas por seguir adelante. Y aunque unas flores no bastan para celebrarlo, quise prepararte algo diferente.'],
  letterTitle: 'Para ti, Ady 🌷',
  pageTitles: [
    'Este día es tuyo',
    'Crecer a tu ritmo',
    'Un corazón que sabe perdonar',
    'Lo que Jehová sí ve',
    'Un paso a la vez',
    'El valor de seguir',
    'Todas tus formas de florecer',
    'Hasta la próxima flor'
  ],
  letterPages: [
    [
      '¡Felicidades, Pequeña Ady!',
      'Quise escribirte con calma para celebrar algo muy especial: terminaste tu primera Escuela del Servicio de Precursor. ¡Qué bonito poder decirlo!',
      'Sé que para ti significa más que haber asistido a unas clases. Es una oportunidad de aprender, fortalecer tu amistad con Jehová y seguir cuidando algo que haces con mucho cariño.',
      'Y precisamente por eso quise regalarte estas flores.',
      'Una por cada cualidad bonita que se asoma cuando eres tú: tu fe, tu alegría, tu cariño, tu constancia y esa amistad que sabe acompañar.',
      'Quería que al verlas pudieras detenerte un momento y reconocer lo que has logrado. Este día merece celebrarse, y tú también.'
    ],
    [
      '¿Sabes? Los tulipanes guardan su color mientras crecen. Necesitan tiempo, cuidados y paciencia antes de abrirse. Me gusta pensar que nosotros también vamos descubriendo, poco a poco, todo lo bueno que podemos llegar a ser.',
      'Me alegra mucho que hayas tenido esta experiencia y espero que guardes con cariño cada consejo, cada enseñanza y cada recuerdo que te llevas.',
      'Sé que te esfuerzas mucho por seguir adelante. A veces un paso parece pequeño, pero también así se llega lejos: paso a paso, día a día, flor a flor.',
      'Y si alguna vez se te escapa una lagrimita, no pasa nada. Tener un corazón sensible también es una forma bonita de sentir la vida y de preocuparse por los demás.',
      'Que nunca sientas que debes esconder esa ternura. Hay fuerza en quien sigue adelante y todavía sabe conmoverse.'
    ],
    [
      'También sé que a veces te gana el enojo, como a cualquiera. Lo bonito es que sabes hacer espacio para el perdón. Eso habla del corazón noble que tienes; no hace falta ser perfecta para ser una persona valiosa.',
      'Hay un texto que me gusta especialmente para esta ocasión: **Hebreos 6:10**.',
      'Y eso es algo que deseo que siempre tengas presente, Ady. Cada esfuerzo que haces para servirle tiene valor, incluso esos pequeños esfuerzos que quizá nadie más llega a ver.',
      'Ojalá ese recordatorio te acompañe cuando tengas un día cansado: tu dedicación no pasa inadvertida para Jehová.'
    ],
    [
      'También quiero recordarte las palabras de **1 Corintios 15:58**.',
      'Deseo de corazón que esta primera escuela sea uno de muchos recuerdos bonitos en tu camino, que sigas aprendiendo y que nunca pierdas esa alegría de hacer cosas por Jehová.',
      'Sigue creciendo a tu ritmo, Pequeña Ady. No necesitas tener todas las respuestas ni saberlo todo. Lo bonito es seguir avanzando, un día a la vez.',
      'Si un día llueve en tu jardín, recuerda que hasta la lluvia ayuda a florecer. Y cuando vuelva el sol, que te encuentre con ganas de crecer.',
      'No tienes que correr para llegar a ninguna parte. Seguir con fe y con alegría, aun despacito, también es avanzar.'
    ],
    [
      'Hay algo más que quería decirte, Pequeña Ady: me gusta que te tomes en serio las cosas que son importantes para ti. Esa dedicación habla de tus ganas de aprender y de dar lo mejor de ti.',
      'Al mismo tiempo, espero que te concedas momentos para respirar y disfrutar lo que ya has alcanzado. Terminaste tu primera escuela; puedes mirar este logro con una sonrisa y guardarlo entre tus recuerdos bonitos.',
      'Tu sensibilidad y tu fuerza pueden ir juntas. Puedes emocionarte, tener un día difícil, pedir perdón o perdonar, y seguir siendo tú: alguien que se esfuerza por hacer lo correcto.',
      'Ojalá este jardín te lo recuerde cuando vuelvas a verlo: cada flor abre a su tiempo, y cada paso que das con amor tiene su propio valor.'
    ],
    [
      'Una felicitación puede caber en una línea. Pero como amigo quería detenerme un poco más y decirte por qué me alegra tanto este logro tuyo.',
      'Pienso en los tulipanes de este jardín: ninguno se abre exactamente igual. Unos se inclinan un poco, otros tardan más en mostrar su color. Todos siguen siendo flores bonitas. Tú también puedes crecer a tu manera, sin compararte con nadie.',
      'Cuando el ánimo esté alto, disfruta la alegría. Y cuando cueste un poco más, recuerda **Gálatas 6:9**.',
      'Ese texto me hace pensar en tu constancia. Seguir haciendo el bien no siempre se ve espectacular desde fuera, pero cada paso suma. Jehová conoce el cariño con el que das esos pasos.',
      'Ojalá tengas muchos días para aprender, reír, emocionarte y volver a intentarlo. Y si alguna vez una lágrima se adelanta a la sonrisa, que nunca te haga olvidar la persona fuerte y noble que eres.'
    ],
    [
      'Si pudiera escoger una flor por cada cosa que admiro de ti, este jardín se quedaría corto. La amarilla me recordaría esa alegría que aparece cuando algo te ilusiona; la lila, la calma que vuelve después de un momento difícil.',
      'La rosa hablaría de tu corazón sensible. La blanca, de esos esfuerzos que no hacen ruido, pero que siguen ahí, día tras día. Y a todas les pondría un tallo firme, como las ganas que tienes de continuar.',
      'No necesitas ser siempre la más fuerte ni tener una sonrisa lista para todos. Puedes ser tú: reír mucho, llorar a veces, enojarte un momento, perdonar y seguir aprendiendo. Todo eso cabe en una persona de corazón noble.',
      'Que estas flores te recuerden que la paciencia también florece. Paso pequeño, paso sincero; poco a poco se hace camino. Y en cada paso que das por amor a Jehová hay algo valioso.',
      'De parte de tu amigo, Chaparro: me alegra verte llegar a esta meta. Ojalá al mirar atrás recuerdes con cariño tu primera escuela y al mirar adelante encuentres nuevas razones para sonreír.'
    ],
    [
      'Y bueno... aunque no puedo llevarte un jardín entero de tulipanes, sí puedo regalarte este pequeño rincón que siempre volverá a florecer cuando lo visites. 🌷',
      'Me da mucho gusto verte alcanzar esta meta. Se nota tu esfuerzo, tu corazón y las ganas que pones en lo que haces.',
      'Que nunca te falte la fe para comenzar, la alegría para continuar y una amistad que te recuerde lo mucho que vales.',
      '**¡Muchas felicidades, Ady!**',
      'Con mucho cariño,',
      '**[Tu nombre]**'
    ]
  ],
  secret: 'P. D. Pequeña Ady, estas flores no necesitan agua... pero sí necesitaban llegar hasta ti. 🌷',
  finalTitle: 'Sigue floreciendo, Ady.',
  finalLines: ['Que Jehová siga bendiciendo cada paso que das', 'Felicidades por tu primera Escuela del Servicio de Precursor. 🌷'],
  finalSignature: 'Con cariño, Marco Rulfo, alias Chaparro'
}
