"use client"
import { useEffect, useMemo, useState } from 'react'

export default function NumberLineEquation() {
  const [a,setA] = useState(2)
  const [b,setB] = useState(-5)
  const [c,setC] = useState(11)
  const [step,setStep] = useState(0)
  const solution = useMemo(() => (c - b)/a, [a,b,c])
  const adjusted = useMemo(() => c - b, [b,c])

  const width = 400
  const min = -10
  const max = 30
  const scale = x => ( (x - min) / (max - min) ) * width

  // Trigger a subtle bounce on step/parameter changes
  const [pulseKey, setPulseKey] = useState(0)
  useEffect(()=>{ setPulseKey(k=>k+1) }, [step, a, b, c])

  function StepInfo(){
    switch(step){
      case 0: return <>Original: {a}x {b>=0?'+':''}{b} = {c}</>
      case 1: return <>Move constant: {a}x = {c - b}</>
      case 2: return <>Divide: x = {solution}</>
      default: return <>Check: {a}({solution}) {b>=0?'+':''}{b} = {a*solution + b}</>
    }
  }

  return (
    <div className="card">
      <h2>📏 Number Line Solver</h2>
      <p style={{ color:'var(--muted)', marginBottom:'0.75rem' }}>See each solving step on a number line.</p>
      <div style={{ display:'flex', gap:'0.5rem', flexWrap:'wrap', marginBottom:'0.75rem' }}>
        <label style={{ fontSize:'0.75rem' }}>a<input type="number" value={a} onChange={e=>{setA(Number(e.target.value));setStep(0)}} style={inp}/></label>
        <label style={{ fontSize:'0.75rem' }}>b<input type="number" value={b} onChange={e=>{setB(Number(e.target.value));setStep(0)}} style={inp}/></label>
        <label style={{ fontSize:'0.75rem' }}>c<input type="number" value={c} onChange={e=>{setC(Number(e.target.value));setStep(0)}} style={inp}/></label>
      </div>
      <div style={{ background:'var(--surface)', padding:'0.5rem 0.75rem', borderRadius:'8px', marginBottom:'0.75rem', fontSize:'0.85rem' }}>
        <strong>Step {step+1}:</strong> <StepInfo />
      </div>
      <svg viewBox={`0 0 ${width} 80`} style={{ width:'100%', background:'var(--card)', border:'1px solid var(--border)', borderRadius:'8px' }}>
        <line x1={0} x2={width} y1={40} y2={40} stroke="var(--text)" strokeWidth={2} />
        {Array.from({length: (max-min)+1}).map((_,i)=>{
          const x = min + i
          const X = scale(x)
          if (i % 2) return null
          return <g key={x}>
            <line x1={X} x2={X} y1={35} y2={45} stroke="var(--text)" />
            <text x={X} y={60} fontSize={10} textAnchor="middle" fill="var(--muted)">{x}</text>
          </g>
        })}
        {step>=1 && (
          <g style={{ transform:`translate(${scale(adjusted)}px, 0)`, transition:'transform 420ms cubic-bezier(0.22,1,0.36,1)' }}>
            <circle key={`adj-${pulseKey}`} r={6} cy={40} fill="var(--brand)" className="nl-dot" />
          </g>
        )}
        {step>=2 && (
          <g style={{ transform:`translate(${scale(solution)}px, 0)`, transition:'transform 420ms cubic-bezier(0.22,1,0.36,1)' }}>
            <circle key={`sol-${pulseKey}`} r={8} cy={40} fill="var(--success)" className="nl-dot" />
          </g>
        )}
      </svg>
      <div style={{ display:'flex', gap:'0.5rem', marginTop:'0.75rem' }}>
        <button className="btn" disabled={step===0} onClick={()=>setStep(s=>Math.max(0,s-1))}>← Back</button>
        <button className="btn primary" disabled={step===3} onClick={()=>setStep(s=>Math.min(3,s+1))}>Next →</button>
        {step===3 && <div style={{ alignSelf:'center', fontSize:'0.85rem', color:'var(--success)' }}>Solved: x = {solution}</div>}
      </div>
      <style jsx>{`
        @keyframes nl-bounce { 
          0% { transform: translateY(0) scale(1); }
          35% { transform: translateY(-3px) scale(1.05); }
          100% { transform: translateY(0) scale(1); }
        }
        .nl-dot { animation: nl-bounce 420ms ease-out both; }
      `}</style>
    </div>
  )
}

const inp = { marginLeft:'0.3rem', padding:'0.3rem', width:'70px', border:'2px solid var(--border)', borderRadius:'6px' }
