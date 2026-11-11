import React from 'react'

export default function LetterBee() {
  return <div className="bee-flight" aria-hidden="true"><svg className="bee" viewBox="0 0 62 46" xmlns="http://www.w3.org/2000/svg">
    <ellipse className="bee-wing bee-wing-left" cx="25" cy="13" rx="11" ry="7" fill="#fff" stroke="#b9b6a6" strokeWidth="1.5"/>
    <ellipse className="bee-wing bee-wing-right" cx="39" cy="13" rx="11" ry="7" fill="#fff" stroke="#b9b6a6" strokeWidth="1.5"/>
    <ellipse cx="31" cy="27" rx="20" ry="12" fill="#f4d98b" stroke="#9b805a" strokeWidth="1.5"/>
    <path d="M22 16q5 11 0 21M34 15q6 12 1 23" fill="none" stroke="#79624c" strokeWidth="5"/>
    <circle cx="48" cy="25" r="2" fill="#56473e"/>
    <path d="M12 27l-7 3 7 3" fill="#9b805a"/>
    <path d="M49 29q4 4 7 0" fill="none" stroke="#56473e" strokeWidth="1.3" strokeLinecap="round"/>
  </svg></div>
}
