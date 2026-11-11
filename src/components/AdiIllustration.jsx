import React from 'react'
import { useState } from 'react'
import { config } from '../data/config.js'
export default function AdiIllustration() {
 const [failed,setFailed]=useState(false)
 return <div className="adi-illustration">{!failed?<img src={config.illustration} onError={()=>setFailed(true)} alt="Ilustración de Adi con un ramo de tulipanes"/>:<div className="placeholder-person" role="img" aria-label="Silueta ilustrada provisional con un ramo de tulipanes"><div className="person-head"/><div className="person-body"/><div className="bouquet"><span>🌷</span><span>🌷</span><span>🌷</span><span>🌷</span><span>🌷</span></div><div className="bouquet-wrap"/></div>}</div>
}
