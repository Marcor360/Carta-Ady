import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import TulipGarden from './components/TulipGarden.jsx'
import FloatingPetals from './components/FloatingPetals.jsx'
import Envelope from './components/Envelope.jsx'
import AdiIllustration from './components/AdiIllustration.jsx'
import { config } from './data/config.js'
import { setAudioEnabled, soundEffect } from './audio.js'

const fade = {initial:{opacity:0,y:18},animate:{opacity:1,y:0},exit:{opacity:0,y:-12},transition:{duration:.65}}
function RichText({text}) {return text.split(/(\*\*[^*]+\*\*)/g).map((part,i)=>{if(!part.startsWith('**'))return part.replace('[Tu nombre]',config.sender);const value=part.slice(2,-2).replace('[Tu nombre]',config.sender),verse=config.verses[value];return verse?<a className="verse-link" key={i} href={verse.url} target="_blank" rel="noopener noreferrer" aria-label={`Leer ${value} en jw.org (se abre en otra pestaña)`}>{value} <span aria-hidden="true">↗</span></a>:<strong key={i}>{value}</strong>})}
function SoundToggle(){const [on,setOn]=useState(false);useEffect(()=>()=>setAudioEnabled(false),[]); if(!config.audio.enabled)return null;return <button className="sound-toggle" onClick={()=>{setAudioEnabled(!on);setOn(!on)}} aria-pressed={on} aria-label={on?'Silenciar música y efectos':'Activar música y efectos'}>{on?'♫ Sonido activado':'♫ Escuchar el jardín'}</button>}
export default function App(){
 const [scene,setScene]=useState('intro'),[introStep,setIntroStep]=useState(0),[messageStep,setMessageStep]=useState(0),[page,setPage]=useState(0),[secret,setSecret]=useState(false),[opening,setOpening]=useState(false)
 const reduce=useReducedMotion();const contentRef=useRef(null)
 useEffect(()=>{if(scene!=='intro')return; const timers=[2000,3900,6000].map((ms,i)=>setTimeout(()=>setIntroStep(i+1),reduce?100+i*100:ms));return()=>timers.forEach(clearTimeout)},[scene,reduce])
 useEffect(()=>{if(scene!=='message')return;setMessageStep(0);const timers=[1800,3900,6100].map((ms,i)=>setTimeout(()=>setMessageStep(i+1),reduce?100+i*100:ms));return()=>timers.forEach(clearTimeout)},[scene,reduce])
 useEffect(()=>{contentRef.current?.focus();window.scrollTo({top:0,behavior:reduce?'instant':'smooth'})},[scene,page,reduce])
 function openLetter(){soundEffect('open');setOpening(true);setTimeout(()=>{setScene('letter');setPage(0);setOpening(false)},reduce?150:1450)}
 function turnPage(next){soundEffect('page');setPage(next)}
 function restart(){setScene('intro');setIntroStep(0);setPage(0)}
 return <div className={`app scene-${scene}`} style={{'--speed':`${config.animationSeconds}s`}}>
  <div className="grain" aria-hidden="true"/><SoundToggle/>
  {scene!=='intro'&&<button className="home-link" onClick={restart}>↶ Volver al jardín</button>}
  <FloatingPetals active={scene!=='letter'&&!reduce}/>
  <AnimatePresence mode="wait">
   {scene==='intro'&&<motion.main key="intro" className="scene intro-scene" {...fade} ref={contentRef} tabIndex={-1}>
    <div className="topline"><span>UNA CARTA QUE FLORECE</span><span>✳ &nbsp; PARA ADI</span></div>
    <div className="intro-copy"><p className="eyebrow">Un pequeño regalo para ti</p><h1>Hay flores que<br/><em>cuentan historias.</em><br/>Esta es la tuya.</h1></div>
    <TulipGarden onSecret={()=>{soundEffect('flower');setSecret(true)}} onFlower={()=>soundEffect('flower')}/>
    <div className="intro-bottom"><div className="story-lines" aria-live="polite">{introStep>0&&<motion.p {...fade}>{config.intro[Math.min(introStep-1,2)]}</motion.p>}</div>{introStep>=3&&<motion.button {...fade} className="primary-button" onClick={()=>setScene('message')}>Tengo algo para ti <span>→</span></motion.button>}</div>
    <span className="corner-mark">01 / 05</span>
   </motion.main>}
   {scene==='message'&&<motion.main key="message" className="scene message-scene" {...fade} ref={contentRef} tabIndex={-1}>
    <TulipGarden edge onSecret={()=>{soundEffect('flower');setSecret(true)}} onFlower={()=>soundEffect('flower')}/><div className="message-content"><p className="eyebrow">UNA HISTORIA PARA CELEBRARTE &nbsp; · &nbsp; 02 / 05</p><div className="message-lines" aria-live="polite">{config.messages.map((line,i)=>messageStep>=i+1&&<motion.p key={i} {...fade}>{line}</motion.p>)}</div>{messageStep>=3&&<motion.div {...fade} className="envelope-invite"><Envelope onClick={openLetter} open={opening}/><p>Una carta hecha especialmente para ti</p><span className="hint">Toca el sobre para abrirlo</span></motion.div>}</div>
   </motion.main>}
   {scene==='letter'&&<motion.main key="letter" className="scene letter-scene" {...fade} ref={contentRef} tabIndex={-1}>
    <div className="letter-side-flower">✿</div><div className="letter-paper"><div className="letter-ornament">✳ &nbsp; UNA CARTA PARA TI &nbsp; ✳</div><h2>{config.letterTitle}</h2><div className="letter-rule"/><AnimatePresence mode="wait"><motion.div key={page} className="letter-body" initial={{opacity:0,x:18}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-18}} transition={{duration:reduce?.1:.45}}>{config.letterPages[page].map((p,i)=><motion.div className="letter-paragraph" key={i} initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay:reduce?0:i*.18}}><p><RichText text={p}/></p>{Object.entries(config.verses).map(([name,verse])=>p.includes(`**${name}**`)&&<aside className="verse-note" key={name}><span>PARA LLEVAR EN EL CORAZÓN</span><p>{verse.explanation}</p><a href={verse.url} target="_blank" rel="noopener noreferrer">Leer {name} en jw.org →</a></aside>)}</motion.div>)}</motion.div></AnimatePresence><div className="letter-controls"><button disabled={page===0} onClick={()=>turnPage(page-1)}>← Página anterior</button><span>{String(page+1).padStart(2,'0')} / {String(config.letterPages.length).padStart(2,'0')}</span>{page<config.letterPages.length-1?<button onClick={()=>turnPage(page+1)}>Continuar leyendo →</button>:<button onClick={()=>setScene('final')}>Ver mi regalo →</button>}</div></div><div className="letter-side-flower right">✿</div>
   </motion.main>}
   {scene==='final'&&<motion.main key="final" className="scene final-scene" {...fade} ref={contentRef} tabIndex={-1}>
    <div className="final-visual"><div className="final-halo"/><AdiIllustration/><div className="final-ground"/></div><div className="final-copy"><p className="eyebrow">UNA FLOR QUE NUNCA SE MARCHITA &nbsp; · &nbsp; 05 / 05</p><h2>{config.finalTitle}</h2><p>{config.finalLines[0]}</p><p className="final-small">{config.finalLines[1]}</p><div className="final-actions"><button className="primary-button" onClick={()=>{setPage(0);setScene('letter')}}>Volver a leer mi carta →</button><button className="text-button" onClick={restart}>Ver de nuevo mis flores ↶</button></div></div>
   </motion.main>}
  </AnimatePresence>
  <AnimatePresence>{secret&&<motion.div className="secret-overlay" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setSecret(false)}><motion.div className="secret-card" initial={{scale:.9,y:20}} animate={{scale:1,y:0}} onClick={e=>e.stopPropagation()} role="dialog" aria-modal="true" aria-label="Mensaje secreto"><button onClick={()=>setSecret(false)} aria-label="Cerrar mensaje">×</button><span>✿</span><p>{config.secret}</p></motion.div></motion.div>}</AnimatePresence>
 </div>
}
