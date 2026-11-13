import React, { useEffect, useState } from 'react'

const frames = {
  walkOne: 'ady-camina-uno.png',
  walkTwo: 'ady-camina-dos.png',
  reach: 'ady-manos-libres.png',
  bend: 'ady-se-inclina.png',
  take: 'ady-toma-ramo.png',
  low: 'ady-ramo-bajo-izquierda.png',
  lift: 'ady-levanta-ramo.png',
  admire: 'ady-admira-ramo.png',
  turn: 'ady-gira-ramo.png',
  smile: 'ady-ramo-feliz.png',
  notice: 'ady-ve-abeja.png',
  follow: 'ady-mira-abeja.png'
}

const timeline = [
  [900, 'walkOne', 'Ady se acerca a las flores.'],
  [1600, 'walkTwo', 'Da un paso más hacia el ramo.'],
  [2400, 'reach', 'Extiende las manos.'],
  [3150, 'bend', 'Se inclina para recogerlo.'],
  [4200, 'take', 'Sus manos rodean el ramo.'],
  [5150, 'low', 'Lo levanta con cuidado.'],
  [6100, 'lift', 'Lo acerca a su corazón.'],
  [7150, 'admire', 'Mira las flores con cariño.'],
  [8300, 'turn', 'Gira el ramo entre sus manos.'],
  [9400, 'smile', 'Y le regala una sonrisa linda.'],
  [10600, 'smile', 'Una abejita sale de las flores.'],
  [11500, 'notice', 'Ady nota su vuelo.'],
  [12900, 'follow', 'La sigue con la mirada.'],
  [17000, 'follow', 'La abejita se aleja volando.']
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
    <div className={`surprise-stage phase-${phase} ${phase >= 10 ? 'celebrating' : ''}`} role="img" aria-label={caption}>
      <div className="surprise-stage-glow"/>
      <div className="surprise-floor"/>
      <img className="surprise-table-art" src="/assets/mueble-pixel.png" alt="" draggable="false"/>
      <img className={`table-bouquet ${phase >= 5 ? 'taken' : ''}`} src="/assets/ramo-sorpresa.png" alt="" draggable="false"/>
      <div className={`surprise-character ${phase > 0 ? 'visible' : ''}`}>
        {Object.entries(frames).map(([name, file]) => <img key={name} className={`surprise-person ${pose === name ? 'active' : ''}`} src={`/assets/${file}`} alt="" draggable="false"/>)}
      </div>
      {phase >= 11 && !reduceMotion && <Bee key={run}/>}
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
