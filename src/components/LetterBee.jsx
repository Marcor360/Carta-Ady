import React, { useEffect, useState } from 'react'
import { config } from '../data/config.js'

export default function LetterBee({ onDiscover }) {
 const [paused,setPaused]=useState(false)
 useEffect(()=>{if(!paused)return;const timer=window.setTimeout(()=>setPaused(false),5500);return()=>window.clearTimeout(timer)},[paused])
 return <div className="bee-flight">
  <button type="button" className={`bee ${paused?'bee-paused':''}`} onClick={()=>{setPaused(!paused);onDiscover?.()}} aria-label={paused?'Dejar que la abejita siga volando':'Tocar la abejita para descubrir un mensaje'} aria-pressed={paused}>
   <svg className="bee-drawing" viewBox="0 0 92 70" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="beeGold" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#fff1b5"/><stop offset="1" stopColor="#e9b854"/></linearGradient><linearGradient id="beeWing" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#fff"/><stop offset="1" stopColor="#d9e9e5"/></linearGradient></defs>
    <path d="M68 29q9-10 15-7M66 22q4-12 12-13" fill="none" stroke="#56473e" strokeWidth="2" strokeLinecap="round"/><circle cx="83" cy="22" r="2.5" fill="#56473e"/><circle cx="78" cy="9" r="2.5" fill="#56473e"/>
    <g className="bee-wing bee-wing-left"><ellipse cx="34" cy="19" rx="17" ry="10" transform="rotate(-25 34 19)" fill="url(#beeWing)" stroke="#9cb9ad" strokeWidth="1.5"/><path d="M20 21q15-8 28-6" stroke="#b9d3c9" strokeWidth="1" fill="none"/></g>
    <g className="bee-wing bee-wing-right"><ellipse cx="52" cy="18" rx="17" ry="10" transform="rotate(25 52 18)" fill="url(#beeWing)" stroke="#9cb9ad" strokeWidth="1.5"/><path d="M39 14q15 1 27 9" stroke="#b9d3c9" strokeWidth="1" fill="none"/></g>
    <path d="M12 39l-9 4 9 4" fill="#8d7659"/><ellipse cx="44" cy="42" rx="32" ry="21" fill="url(#beeGold)" stroke="#806b53" strokeWidth="2"/>
    <path d="M31 23q7 20 0 37M46 21q7 22 1 41" fill="none" stroke="#67543d" strokeWidth="8"/><path d="M25 29q11-7 22-7" stroke="#fff9de" strokeWidth="2" opacity=".8" fill="none"/>
    <path d="M59 27q13 4 17 15-3 12-16 17" fill="#f6d681" stroke="#806b53" strokeWidth="1.3"/>
    <circle cx="68" cy="39" r="2.8" fill="#3f3935"/><circle cx="74" cy="48" r="4" fill="#e99790" opacity=".7"/><path d="M66 49q5 4 9-1" fill="none" stroke="#5b4b3f" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M32 61l-4 6M49 62l4 6" stroke="#655340" strokeWidth="2" strokeLinecap="round"/><circle cx="18" cy="29" r="2" fill="#fff5c4"/><circle cx="21" cy="22" r="1.3" fill="#fff5c4"/>
   </svg>
  </button>
  {paused&&<div className="bee-message" role="status">{config.beeMessage}<span>Tócame otra vez para seguir volando.</span></div>}
 </div>
}
