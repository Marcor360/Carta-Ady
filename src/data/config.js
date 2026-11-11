// Edita aquí toda la historia. La ilustración final puede ponerse en public/assets/ady-2d.png.
export const config = {
  name: 'Ady', nickname: 'Pequeña Ady', sender: '[Tu nombre]',
  illustration: '/assets/ady-2d.png', audio: { enabled: true, src: '/audio/jardin-de-ady.wav' },
  verses: {
    'Hebreos 6:10': { url: 'https://www.jw.org/es/biblioteca/biblia/biblia-estudio/libros/hebreos/6/#v58006010', explanation: 'Jehová recuerda el amor que mostramos por él y el trabajo que hacemos para ayudar a otros. Hasta los esfuerzos discretos tienen valor para él.' },
    '1 Corintios 15:58': { url: 'https://www.jw.org/es/biblioteca/biblia/biblia-estudio/libros/1-corintios/15/#v46015058', explanation: 'Nos anima a mantenernos firmes y ocupados en la obra del Señor, con la seguridad de que ese esfuerzo no es en vano.' }
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
  letterPages: [
    [
      '¡Felicidades, Pequeña Ady!',
      'Hoy quiero dedicarte unas palabras porque acabas de terminar algo muy especial: tu primera Escuela del Servicio de Precursor.',
      'Quizás para algunas personas sean solo unos días de clases, pero sé que para ti representa mucho más. Es una oportunidad de aprender, fortalecer tu amistad con Jehová y seguir creciendo en algo que haces con mucho cariño.',
      'Y precisamente por eso quise regalarte estas flores.',
      'Una por cada cualidad bonita que se asoma cuando eres tú: tu fe, tu alegría, tu cariño, tu constancia y esa amistad que sabe acompañar.',
      'Quería que al verlas pudieras detenerte un momento y reconocer lo que has logrado. Este día merece celebrarse, y tú también.'
    ],
    [
      '¿Sabes? Los tulipanes no florecen de un día para otro. Necesitan tiempo, cuidados y paciencia. Y creo que eso tiene algo muy bonito en común con nosotros: también seguimos creciendo y aprendiendo poco a poco.',
      'Me alegra mucho que hayas tenido esta experiencia y espero que guardes con cariño cada consejo, cada enseñanza y cada recuerdo que te llevas.',
      'Sé que te esfuerzas mucho por seguir adelante. A veces un paso parece pequeño, pero también así se llega lejos: paso a paso, día a día, flor a flor.',
      'Y si alguna vez se te escapa una lagrimita, no pasa nada. Tener un corazón sensible también es una forma bonita de sentir la vida y de preocuparse por los demás.',
      'Que nunca sientas que debes esconder esa ternura. Hay fuerza en quien sigue adelante y todavía sabe conmoverse.'
    ],
    [
      'A veces puedes enojarte, como cualquiera. Pero también sabes perdonar, y eso dice mucho del corazón noble que tienes. No hace falta ser perfecta para ser una persona valiosa.',
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
      'Y bueno... aunque no puedo regalarte un jardín entero de tulipanes, por lo menos puedo regalarte uno que nunca se marchite. 🌷',
      'Me da mucho gusto verte alcanzar esta meta. Se nota tu esfuerzo, tu corazón y las ganas que pones en lo que haces.',
      'Que nunca te falte la fe para comenzar, la alegría para continuar y una amistad que te recuerde lo mucho que vales.',
      '**¡Muchas felicidades, Ady!**',
      'Con mucho cariño,',
      '**[Tu nombre]**'
    ]
  ],
  secret: 'P. D. Pequeña Ady, estas flores no necesitan agua... pero sí necesitaban llegar hasta ti. 🌷',
  finalTitle: 'Sigue floreciendo, Ady.',
  finalLines: ['Que Jehová siga bendiciendo cada paso que das', 'Felicidades por tu primera Escuela del Servicio de Precursor. 🌷']
}
