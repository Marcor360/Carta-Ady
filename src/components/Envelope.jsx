import React from 'react'
import { motion } from 'motion/react'
export default function Envelope({open=false,onClick}) {return <motion.button type="button" className={`envelope ${open?'envelope-open':''}`} onClick={onClick} disabled={!onClick} aria-label="Abrir la carta para Ady" whileHover={onClick?{y:-5}:undefined}>
 <span className="envelope-back"/><span className="envelope-letter"><span>Para Ady</span><small>✿</small></span><span className="envelope-front"/><span className="envelope-flap"/><span className="seal">✿</span>
 </motion.button>}
