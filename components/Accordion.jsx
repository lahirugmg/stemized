"use client"
import { useState } from 'react'

export default function Accordion({ title = 'Key Terms', items = [] }) {
  const [open, setOpen] = useState({})
  return (
    <div className="card">
      <h2>{title}</h2>
      <div style={{ display:'grid', gap:'0.5rem' }}>
        {items.map((it, i) => (
          <div key={i} className="card hover" style={{ padding:'0.6rem' }}>
            <button
              className="btn"
              onClick={() => setOpen({ ...open, [i]: !open[i] })}
              aria-expanded={!!open[i]}
              style={{ marginBottom:'0.4rem' }}
            >
              {open[i] ? '−' : '+'} {it.term}
            </button>
            {open[i] && <p style={{ margin:'0.25rem 0 0' }}>{it.def}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

