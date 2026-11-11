import React from 'react'
import { motion, useReducedMotion } from 'motion/react'

export default function Tulip({ flower, index = 0, grown = true, onClick, small = false }) {
  const reduce = useReducedMotion()
  const d = reduce ? 0 : index * .22
  return <motion.button type="button" className={`tulip ${small ? 'tulip-small' : ''}`} style={{'--flower':flower.color,'--light':flower.light,'--tilt':`${flower.tilt}deg`}} onClick={onClick} disabled={!onClick} aria-label={onClick ? `Descubrir la flor de ${flower.label}` : undefined} initial={false} animate={{opacity: grown ? 1 : 0}} transition={{duration:reduce?0:.7,delay:d}}>
    <svg viewBox="0 0 120 320" role="img" aria-hidden="true" preserveAspectRatio="xMidYMax meet">
      <defs><linearGradient id={`stem${index}`} x1="0" x2="1"><stop stopColor="#789875"/><stop offset="1" stopColor="#496754"/></linearGradient></defs>
      <motion.path d="M61 319 C 52 255, 71 192, 60 113" fill="none" stroke={`url(#stem${index})`} strokeWidth="5" strokeLinecap="round" initial={{pathLength:0}} animate={{pathLength:grown ? 1 : 0}} transition={{duration:reduce?0:1.5,delay:d}}/>
      <motion.path className="leaf" d="M60 267 C26 261 12 232 14 206 C42 212 59 232 60 267Z" fill="#9AAE91" initial={{scale:0,rotate:-35}} animate={{scale:grown?1:0,rotate:0}} transition={{duration:.9,delay:d+.7}} style={{transformOrigin:'60px 267px'}}/>
      <motion.path className="leaf" d="M64 239 C91 225 105 198 102 178 C76 189 63 211 64 239Z" fill="#789875" initial={{scale:0,rotate:35}} animate={{scale:grown?1:0,rotate:0}} transition={{duration:.9,delay:d+.95}} style={{transformOrigin:'64px 239px'}}/>
      <g className="bloom" transform={`translate(0 ${[0,5,-4,2,-2][flower.shape]})`}>
        <motion.path d="M60 122 C42 108 34 88 36 55 C51 64 60 84 60 122Z" fill={flower.color} stroke="#56473E" strokeOpacity=".12" initial={{rotate:26,scaleY:.4}} animate={{rotate:grown?-9:26,scaleY:grown?1:.4}} transition={{duration:1.1,delay:d+1.3}} style={{transformOrigin:'60px 120px'}}/>
        <motion.path d="M60 122 C79 105 91 79 84 52 C67 65 61 88 60 122Z" fill={flower.color} stroke="#56473E" strokeOpacity=".12" initial={{rotate:-26,scaleY:.4}} animate={{rotate:grown?10:-26,scaleY:grown?1:.4}} transition={{duration:1.1,delay:d+1.3}} style={{transformOrigin:'60px 120px'}}/>
        <motion.path d={['M60 121 C40 101 43 78 52 64 C57 71 61 74 65 66 C84 82 77 106 60 121Z','M60 121 C45 103 41 84 48 56 Q59 69 67 54 C82 79 78 105 60 121Z','M60 121 C42 105 45 87 48 70 Q60 77 69 61 C79 82 78 105 60 121Z','M60 121 C42 102 40 82 50 62 C61 73 62 74 72 58 C83 84 79 104 60 121Z','M60 121 C43 101 45 79 51 64 C61 69 66 65 72 58 C82 85 78 105 60 121Z'][flower.shape]} fill={flower.light} stroke="#56473E" strokeOpacity=".14" initial={{scaleY:.25,opacity:0}} animate={{scaleY:grown?1:.25,opacity:grown?1:0}} transition={{duration:1,delay:d+1.4}} style={{transformOrigin:'60px 121px'}}/>
      </g>
    </svg>
  </motion.button>
}
