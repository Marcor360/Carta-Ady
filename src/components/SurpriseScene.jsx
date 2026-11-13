import React, { useEffect, useState } from 'react'

const frames = {
  walkOne: 'ady-camina-uno.png',
  walkBetweenOne: 'ady-paso-intermedio-uno.png',
  walkTwo: 'ady-camina-dos.png',
  walkBetweenTwo: 'ady-paso-intermedio-dos.png',
  stop: 'ady-se-detiene.png',
  firstReach: 'ady-primer-alcance.png',
  reach: 'ady-manos-libres.png',
  halfBend: 'ady-medio-inclina.png',
  bend: 'ady-se-inclina.png',
  take: 'ady-toma-ramo.png',
  firstLift: 'ady-primer-levante.png',
  low: 'ady-ramo-bajo-izquierda.png',
  liftMiddle: 'ady-ramo-entre-manos.png',
  lift: 'ady-levanta-ramo.png',
  admire: 'ady-admira-ramo.png',
  smell: 'ady-huele-flores.png',
  turnMiddle: 'ady-giro-intermedio.png',
  turn: 'ady-gira-ramo.png',
  closedSmile: 'ady-sonrisa-cerrada.png',
  smile: 'ady-ramo-feliz.png',
  notice: 'ady-ve-abeja.png',
  followNear: 'ady-sigue-abeja-cerca.png',
  follow: 'ady-mira-abeja.png',
  blink: 'ady-parpadea-abeja.png',
  followFar: 'ady-sigue-abeja-lejos.png'
}

const timeline = [
  [800, 'walkOne', 'Ady se acerca a las flores.'],
  [1250, 'walkBetweenOne', 'Ady se acerca a las flores.'],
  [1700, 'walkTwo', 'Ady se acerca a las flores.'],
  [2150, 'walkBetweenTwo', 'Ady se acerca a las flores.'],
  [2650, 'stop', 'Se detiene al ver el ramo.'],
  [3100, 'firstReach', 'Acerca una mano a las flores.'],
  [3550, 'reach', 'Extiende las dos manos.'],
  [4100, 'halfBend', 'Se inclina con cuidado.'],
  [4700, 'bend', 'Se inclina con cuidado.'],
  [5200, 'take', 'Sus manos rodean el ramo.'],
  [5750, 'firstLift', 'Empieza a levantarlo.'],
  [6350, 'low', 'Lo levanta con cuidado.'],
  [7000, 'liftMiddle', 'Las flores se acercan a ella.'],
  [7650, 'lift', 'Lo acerca a su corazón.'],
  [8350, 'admire', 'Mira las flores con cariño.'],
  [9000, 'smell', 'Disfruta un instante entre los tulipanes.'],
  [9900, 'turnMiddle', 'Gira el ramo entre sus manos.'],
  [10600, 'turn', 'Gira el ramo entre sus manos.'],
  [11400, 'closedSmile', 'Les regala una sonrisa linda.'],
  [12100, 'smile', 'Les regala una sonrisa linda.'],
  [13300, 'smile', 'Una abejita sale de las flores.'],
  [13900, 'notice', 'Ady nota su vuelo.'],
  [14500, 'followNear', 'La sigue con la mirada.'],
  [15300, 'follow', 'La sigue con la mirada.'],
  [15900, 'blink', 'Parpadea sin perderla de vista.'],
  [16200, 'followFar', 'La sigue hasta lo alto.'],
  [20500, 'followFar', 'La abejita se aleja volando.']
]

const sources = [
  ...Object.values(frames), 'ramo-sorpresa.png', 'mueble-pixel.png',
  'abejita-alas-arriba.png', 'abejita-alas-abajo.png'
]

function Bee() {
  return <div className="surprise-bee" aria-hidden="true">
    <img className="bee-up" src="/assets/abejita-alas-arriba.png" alt=""/>
    <img className="bee-down" src="/assets/abejita-alas-abajo.png" alt=""/>
  </div>
}

export default function SurpriseScene({ reduceMotion, onBack }) {
  const [ready, setReady] = useState(false)
  const [phase, setPhase] = useState(0)
  const [run, setRun] = useState(0)

  useEffect(() => {
    let active = true
    Promise.all(sources.map(file => new Promise(resolve => {
      const image = new Image()
      image.onload = resolve
      image.onerror = resolve
      image.src = `/assets/${file}`
    }))).then(() => { if (active) setReady(true) })
    return () => { active = false }
  }, [])

  useEffect(() => {
    if (!ready) return
    if (reduceMotion) { setPhase(timeline.length); return }
    setPhase(0)
    const timers = timeline.map(([delay], index) => window.setTimeout(() => setPhase(index + 1), delay))
    return () => timers.forEach(clearTimeout)
  }, [ready, run, reduceMotion])

  const pose = phase > 0 ? timeline[phase - 1][1] : null
  const caption = !ready ? 'Preparando esta pequeña sorpresa…' : phase ? timeline[phase - 1][2] : 'Un ramo espera sobre el mueble…'

  return <>
    <div className={`surprise-stage phase-${phase} ${phase >= 19 ? 'celebrating' : ''}`} role="img" aria-label={caption}>
      <div className="surprise-stage-glow"/>
      <div className="surprise-floor"/>
      <img className="surprise-table-art" src="/assets/mueble-pixel.png" alt="" draggable="false"/>
      <img className={`table-bouquet ${phase >= 10 ? 'taken' : ''}`} src="/assets/ramo-sorpresa.png" alt="" draggable="false"/>
      <div className={`surprise-character ${phase > 0 ? 'visible' : ''}`}>
        {Object.entries(frames).map(([name, file]) => <img key={name} className={`surprise-person ${pose === name ? 'active' : ''}`} src={`/assets/${file}`} alt="" draggable="false"/>)}
      </div>
      {phase >= 21 && !reduceMotion && <Bee key={run}/>}
      <div className="surprise-stage-sparkle sparkle-one">✦</div><div className="surprise-stage-sparkle sparkle-two">✧</div>
    </div>
    <div className="surprise-copy">
      <p className="eyebrow">UNA SORPRESA PARA TI</p>
      <h2>Estas flores<br/><em>son tuyas, Ady.</em></h2>
      <p className="surprise-caption" aria-live="polite">{caption}</p>
      <p className="surprise-message">Que cada una te recuerde lo bonito que es verte sonreír.</p>
      <div className="surprise-actions"><button className="primary-button" onClick={() => { setPhase(0); setRun(value => value + 1) }}>Ver de nuevo ↻</button><button className="text-button" onClick={onBack}>Volver al ramo ↶</button></div>
    </div>
  </>
}
