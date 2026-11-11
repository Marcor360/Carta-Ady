import React from 'react'
import { config } from '../data/config.js'
export default function FloatingPetals({active=true}) {return active&&<div className="petals" aria-hidden="true">{Array.from({length:config.particleCount},(_,i)=><i key={i} style={{'--i':i}}/>)}</div>}
