import React, { useState } from 'react'
import { config } from '../data/config.js'

// Figura sin rostro: las fotografías futuras darán los rasgos reales de Ady.
function Placeholder() {
 const flowers = [
  {x:156,y:258,c:'#EFA6B5',r:-18},{x:195,y:210,c:'#C9B6E4',r:-8},
  {x:235,y:235,c:'#F4D98B',r:9},{x:276,y:202,c:'#EFA6B5',r:18},
  {x:318,y:250,c:'#F9F3E8',r:26},{x:212,y:274,c:'#F9F3E8',r:-3},
  {x:283,y:285,c:'#C9B6E4',r:14}
 ]
 return <svg className="ady-placeholder-svg" viewBox="0 95 470 465" role="img" aria-label="Ilustración provisional, sin rasgos faciales, con un ramo de tulipanes" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="235" cy="527" rx="196" ry="19" fill="#b6aa91" opacity=".2"/>
  <path d="M151 553c8-106 31-174 84-174s76 68 84 174" fill="#c9b6e4" stroke="#a994c8" strokeWidth="2"/>
  <path d="M195 384c-4-19-18-24-18-54v-65c0-58 28-90 58-90s58 32 58 90v65c0 30-14 35-18 54" fill="#d8d2c4" stroke="#bdb5a5" strokeWidth="2"/>
  <path d="M165 320c6-16 18-18 26-13m114 0c8-5 20-3 26 13" stroke="#a994c8" strokeWidth="19" strokeLinecap="round" fill="none"/>
  <path d="M193 389c-28 29-41 80-41 132m125-132c28 29 41 80 41 132" stroke="#b5a4cb" strokeWidth="12" strokeLinecap="round" fill="none"/>
  <g className="bouquet-art">
   {flowers.map((f,i)=><g key={i} transform={`rotate(${f.r} ${f.x} ${f.y})`} style={{'--spark-delay':`${i * .25}s`}}>
    <circle className="blossom-glow" cx={f.x} cy={f.y+4} r="32" fill="#fff2a8"/>
    <path d={`M${f.x} ${f.y+35} Q${f.x-4} ${f.y+96} 235 440`} fill="none" stroke="#6f956c" strokeWidth="4"/>
    <path d={`M${f.x} ${f.y+75} q-28-25-28-42 q26 3 28 42M${f.x+2} ${f.y+87} q28-25 29-44 q-27 5-29 44`} fill="#9aae91"/>
    <path d={`M${f.x} ${f.y+37} C${f.x-21} ${f.y+22} ${f.x-24} ${f.y+3} ${f.x-18} ${f.y-18} Q${f.x-3} ${f.y-12} ${f.x} ${f.y+7} Q${f.x+5} ${f.y-14} ${f.x+19} ${f.y-18} C${f.x+25} ${f.y+3} ${f.x+20} ${f.y+23} ${f.x} ${f.y+37}Z`} fill={f.c} stroke="#a78088" strokeOpacity=".35" strokeWidth="1.5"/>
    <path d={`M${f.x} ${f.y+37} Q${f.x-14} ${f.y+10} ${f.x-4} ${f.y-14} Q${f.x} ${f.y-4} ${f.x+4} ${f.y-14} Q${f.x+14} ${f.y+11} ${f.x} ${f.y+37}Z`} fill="#fff9f3" opacity=".35"/>
   </g>)}
   <path d="M155 350 Q235 403 317 350 L253 462 Q239 480 222 462Z" fill="#eee0c9" stroke="#d4c4aa" strokeWidth="2"/>
   <path d="M205 435 Q235 450 270 434" fill="none" stroke="#c698a5" strokeWidth="9" strokeLinecap="round"/>
  </g>
  <g className="final-sparkles">{[[130,162],[163,123],[236,147],[327,151],[353,208],[114,255],[301,111]].map(([x,y],i)=><path key={i} className="sparkle" style={{'--spark-delay':`${i*.35}s`}} d={`M${x} ${y-9} Q${x+2} ${y-2} ${x+9} ${y} Q${x+2} ${y+2} ${x} ${y+9} Q${x-2} ${y+2} ${x-9} ${y} Q${x-2} ${y-2} ${x} ${y-9}Z`} fill="#f4d98b"/>)}</g>
  <path d="M178 394q26 29 55 36m61-36q-28 29-54 36" fill="none" stroke="#b5a4cb" strokeWidth="16" strokeLinecap="round"/>
  <circle cx="233" cy="431" r="13" fill="#d8d2c4"/>
 </svg>
}
export default function AdyIllustration() {
 const [failed,setFailed]=useState(false)
 return <div className="ady-illustration">{!failed?<img src={config.illustration} onError={()=>setFailed(true)} alt="Ilustración de Ady con un ramo de tulipanes"/>:<Placeholder/>}</div>
}
