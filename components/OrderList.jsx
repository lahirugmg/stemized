"use client"
import { useState } from 'react'

export default function OrderList({ title = 'Reorder Steps', items = [], solution = [] }) {
  const [arr, setArr] = useState(items)
  const [checked, setChecked] = useState(false)

  function move(i, dir) {
    const j = i + dir
    if (j < 0 || j >= arr.length) return
    const next = arr.slice()
    const t = next[i]
    next[i] = next[j]
    next[j] = t
    setArr(next)
    setChecked(false)
  }

  const correct = checked && JSON.stringify(arr) === JSON.stringify(solution)

  return (
    <div className="card">
      <h2>{title}</h2>
      <div style={{ display:'grid', gap:'0.5rem' }}>
        {arr.map((s, i) => (
          <div key={s} className="card hover" style={{ padding:'0.5rem', display:'flex', alignItems:'center', gap:'0.5rem' }}>
            <span style={{ opacity:0.7 }}>{i+1}.</span>
            <span style={{ flex:1 }}>{s}</span>
            <div style={{ display:'flex', gap:'0.25rem' }}>
              <button className="btn" onClick={() => move(i, -1)} aria-label="Move up">↑</button>
              <button className="btn" onClick={() => move(i, 1)} aria-label="Move down">↓</button>
            </div>
          </div>
        ))}
      </div>
      <div className="actions">
        <button className="btn primary" onClick={() => setChecked(true)}>Check Order</button>
      </div>
      {checked && (
        <p style={{ marginTop:'0.5rem', color: correct ? 'var(--accent)' : 'var(--warning)' }}>
          {correct ? 'Perfect order!' : 'Not quite—adjust the sequence and try again.'}
        </p>
      )}
    </div>
  )
}

