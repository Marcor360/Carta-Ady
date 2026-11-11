import React from 'react'
import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Tulip from './Tulip.jsx'
import { config } from '../data/config.js'
export default function TulipGarden({edge=false, onSecret, onFlower}) {
 const [selected,setSelected]=useState(null)
 return <div className={`garden ${edge?'garden-edge':''}`}>
   <div className="soil"/>
   <div className="garden-flowers">{config.tulips.map((f,i)=><div className="flower-slot" key={f.label} style={{'--height':`${f.height}px`}}><Tulip flower={f} index={i} onClick={f.interactive===false ? undefined : ()=>{onFlower?.();setSelected(i===selected?null:i)}}/></div>)}</div>
   <AnimatePresence>{selected!==null&&<motion.div className="flower-note" role="status" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:12}}><button className="close-note" onClick={()=>setSelected(null)} aria-label="Cerrar mensaje">×</button><span className="eyebrow">Una flor para ti</span><strong>{config.tulips[selected].label}</strong><p>{config.tulips[selected].message}</p></motion.div>}</AnimatePresence>
   {onSecret&&<button className="secret-flower" onClick={onSecret} aria-label="Descubrir una flor especial">✿</button>}
 </div>
}
