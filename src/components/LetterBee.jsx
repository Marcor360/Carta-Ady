import React from 'react'

export default function LetterBee() {
 return <div className="bee-flight" aria-hidden="true"><svg className="bee" viewBox="0 0 84 62" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="beeGold" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#ffe8a2"/><stop offset="1" stopColor="#e9b854"/></linearGradient></defs>
  <path d="M62 27q9-8 13-5M60 20q3-11 10-11" fill="none" stroke="#55473b" strokeWidth="2.2" strokeLinecap="round"/>
  <circle cx="75" cy="22" r="2.4" fill="#55473b"/><circle cx="70" cy="9" r="2.4" fill="#55473b"/>
  <ellipse className="bee-wing bee-wing-left" cx="34" cy="15" rx="17" ry="10" transform="rotate(-22 34 15)" fill="#e9f4f0" fillOpacity=".85" stroke="#97b6aa" strokeWidth="1.5"/>
  <ellipse className="bee-wing bee-wing-right" cx="48" cy="14" rx="17" ry="10" transform="rotate(22 48 14)" fill="#e9f4f0" fillOpacity=".75" stroke="#97b6aa" strokeWidth="1.5"/>
  <path d="M9 35l-8 4 8 3" fill="#806b53"/>
  <ellipse cx="38" cy="37" rx="30" ry="19" fill="url(#beeGold)" stroke="#806b53" strokeWidth="2"/>
  <path d="M26 20q8 17 0 33M40 18q9 19 1 37" fill="none" stroke="#655340" strokeWidth="7"/>
  <path d="M53 24q10 4 13 11-2 11-13 16" fill="#f5cf7b"/>
  <circle cx="59" cy="35" r="2.5" fill="#463d36"/><circle cx="65" cy="42" r="3.5" fill="#e89c91" opacity=".68"/>
  <path d="M59 43q4 4 8 0M31 54l-4 6M46 54l3 6" fill="none" stroke="#655340" strokeWidth="1.8" strokeLinecap="round"/>
 </svg></div>
}
