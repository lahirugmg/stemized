"use client"
import { useState } from 'react'

export default function AreaModelVisualizer() {
  const [a, setA] = useState(3)
  const [b, setB] = useState(4)
  const [c, setC] = useState(2)
  const [op, setOp] = useState('+')
  const product1 = a * b
  const product2 = a * c
  const total = op === '+' ? product1 + product2 : product1 - product2

  const cells = (count, color) => (
    <div style={{ display:'grid', gridTemplateColumns:`repeat(${Math.min(count,10)}, 14px)`, gap:'2px' }}>
      {Array.from({length:count}).map((_,i)=>(
        <div
          key={i}
          className="amv-cell"
          style={{ width:'14px', height:'14px', background:color, borderRadius:'3px', animationDelay: `${i*18}ms` }}
        />
      ))}
    </div>
  )

  return (
    <div className="card">
      <h2>🟩 Area Model for Distribution</h2>
      <p style={{ color:'var(--muted)', marginBottom:'1rem' }}>Visualize a({b} {op} {c}) as separate rectangular areas.</p>
      <div style={{ display:'flex', gap:'1rem', flexWrap:'wrap', marginBottom:'1rem' }}>
        <label style={{ fontSize:'0.85rem' }}>a
          <input type="number" min={1} max={10} value={a} onChange={e=>setA(Number(e.target.value))} style={inputStyle} />
        </label>
        <label style={{ fontSize:'0.85rem' }}>b
          <input type="number" min={1} max={15} value={b} onChange={e=>setB(Number(e.target.value))} style={inputStyle} />
        </label>
        <label style={{ fontSize:'0.85rem' }}>op
          <select value={op} onChange={e=>setOp(e.target.value)} style={inputStyle}>
            <option value="+">+</option>
            <option value="-">-</option>
          </select>
        </label>
        <label style={{ fontSize:'0.85rem' }}>c
          <input type="number" min={1} max={15} value={c} onChange={e=>setC(Number(e.target.value))} style={inputStyle} />
        </label>
      </div>
      <div style={{ display:'flex', gap:'1.5rem', flexWrap:'wrap', justifyContent:'center' }}>
        <div style={blockStyle}>
          <strong>{a} × {b}</strong>
          {cells(product1,'var(--brand)')}
          <div style={{ fontSize:'0.75rem', marginTop:'0.25rem' }}>{product1}</div>
        </div>
        <div style={{ fontSize:'2rem', alignSelf:'center' }}>{op}</div>
        <div style={blockStyle}>
          <strong>{a} × {c}</strong>
          {cells(product2, op==='+'?'var(--success)':'var(--warning)')}
          <div style={{ fontSize:'0.75rem', marginTop:'0.25rem' }}>{product2}</div>
        </div>
        <div style={{ fontSize:'2rem', alignSelf:'center' }}>=</div>
        <div style={blockStyle}>
          <strong>Result</strong>
          <div style={{ display:'flex', gap:'0.5rem' }}>
            {cells(product1,'var(--brand)')}
            <div style={{ fontSize:'2rem', lineHeight:1 }}>&nbsp;{op}&nbsp;</div>
            {cells(product2, op==='+'?'var(--success)':'var(--warning)')}
          </div>
          <div style={{ fontSize:'0.75rem', marginTop:'0.25rem' }}>{product1} {op} {product2} = {total}</div>
        </div>
    </div>
    <div style={{ marginTop:'1rem', background:'var(--surface)', padding:'0.75rem', borderRadius:'8px', fontSize:'0.85rem' }}>
      a(b {op} c) = ab {op} ac → {a}({b} {op} {c}) = {product1} {op} {product2} = {total}
    </div>
    <style jsx>{`
      @keyframes amv-pop {
        0% { transform: scale(0.6); opacity: 0; }
        60% { transform: scale(1.08); opacity: 1; }
        100% { transform: scale(1); opacity: 1; }
      }
      .amv-cell { animation: amv-pop 320ms cubic-bezier(0.22,1,0.36,1) both; }
    `}</style>
  </div>
  )
}

const inputStyle = { width:'70px', marginLeft:'0.5rem', padding:'0.4rem', border:'2px solid var(--border)', borderRadius:'6px' }
const blockStyle = { background:'var(--surface)', padding:'0.75rem', borderRadius:'10px', border:'1px solid var(--border)', minWidth:'110px', textAlign:'center' }
