import React from 'react'
import { motion, useReducedMotion } from 'motion/react'

const centers = [
  'M60 121 C42 104 43 82 51 62 Q61 77 68 62 C79 83 78 105 60 121Z',
  'M60 121 C42 101 41 82 49 56 Q60 70 68 55 C82 82 79 106 60 121Z',
  'M60 121 C45 107 43 86 50 69 Q60 81 69 63 C80 86 77 107 60 121Z',
  'M60 121 C41 104 40 83 50 61 Q62 74 72 59 C83 84 79 105 60 121Z',
  'M60 121 C43 101 45 79 51 64 Q62 71 73 58 C83 85 78 105 60 121Z'
]
export default function Tulip({ flower, index = 0, grown = true, onClick, small = false }) {
  const reduce = useReducedMotion(), delay = reduce ? 0 : index * .19
  const timing = (duration, extra = 0) => ({duration:reduce ? 0 : duration,delay:reduce ? 0 : delay + extra,ease:[.22,1,.36,1]})
  return <motion.button type="button" className={`tulip ${small ? 'tulip-small' : ''}`} style={{'--flower':flower.color,'--light':flower.light,'--tilt':`${flower.tilt}deg`}} onClick={onClick} disabled={!onClick} aria-label={onClick ? `Descubrir la flor de ${flower.label}` : undefined} initial={false} animate={{opacity: grown ? 1 : 0}} transition={timing(.4)}>
    <svg viewBox="0 0 120 320" role="img" aria-hidden="true" preserveAspectRatio="xMidYMax meet">
      <defs><linearGradient id={`stem${index}`} x1="0" x2="1"><stop stopColor="#8baa82"/><stop offset="1" stopColor="#496754"/></linearGradient></defs>
      <motion.path d="M61 319 C55 270 55 234 65 186 S68 139 60 113" fill="none" stroke={`url(#stem${index})`} strokeWidth="5" strokeLinecap="round" initial={{pathLength:0}} animate={{pathLength:grown?1:0}} transition={timing(1.75)}/>
      <motion.path d="M60 268 C25 262 11 231 15 205 C42 215 57 235 60 268Z" fill="#9AAE91" initial={{scale:0,rotate:-48}} animate={{scale:grown?1:0,rotate:0}} transition={timing(1,.55)} style={{transformOrigin:'60px 268px'}}/>
      <motion.path d="M64 241 C91 226 106 200 102 177 C75 189 63 214 64 241Z" fill="#789875" initial={{scale:0,rotate:46}} animate={{scale:grown?1:0,rotate:0}} transition={timing(1,.9)} style={{transformOrigin:'64px 241px'}}/>
      <motion.path d="M60 268 C36 243 30 223 24 215 M64 240 C82 211 91 194 99 185" fill="none" stroke="#5f8062" strokeOpacity=".4" strokeWidth="1" initial={{opacity:0}} animate={{opacity:grown?.7:0}} transition={timing(.8,1.15)}/>
      <g transform={`translate(0 ${[0,5,-4,2,-2][flower.shape]})`}>
        <motion.path d="M60 121 C48 108 50 94 55 83 Q61 90 66 83 C71 97 70 109 60 121Z" fill={flower.color} initial={{opacity:0,scaleY:.2}} animate={{opacity:grown?[0,0,1,1,0,0]:0,scaleY:grown?1:.2}} transition={reduce?{duration:0}:{times:[0,.22,.32,.68,.85,1],duration:1.5,delay:delay+1.35}} style={{transformOrigin:'60px 121px'}}/>
        <motion.path d="M60 121 C42 108 34 88 36 55 C51 64 60 84 60 121Z" fill={flower.color} stroke="#56473E" strokeOpacity=".13" initial={{rotate:27,scaleY:.28,opacity:0}} animate={{rotate:grown?-11:27,scaleY:grown?1:.28,opacity:grown?1:0}} transition={timing(1.25,2)} style={{transformOrigin:'60px 121px'}}/>
        <motion.path d="M60 121 C79 105 91 79 84 52 C67 65 61 88 60 121Z" fill={flower.color} stroke="#56473E" strokeOpacity=".13" initial={{rotate:-27,scaleY:.28,opacity:0}} animate={{rotate:grown?11:-27,scaleY:grown?1:.28,opacity:grown?1:0}} transition={timing(1.25,2)} style={{transformOrigin:'60px 121px'}}/>
        <motion.path d={centers[flower.shape]} fill={flower.light} stroke="#56473E" strokeOpacity=".15" initial={{scaleY:.2,opacity:0}} animate={{scaleY:grown?1:.2,opacity:grown?1:0}} transition={timing(1,2.1)} style={{transformOrigin:'60px 121px'}}/>
        <motion.path d="M59 120 Q48 97 53 72" fill="none" stroke="#fff" strokeOpacity=".32" strokeWidth="2" initial={{opacity:0}} animate={{opacity:grown?1:0}} transition={timing(.6,2.8)}/>
      </g>
    </svg>
  </motion.button>
}
