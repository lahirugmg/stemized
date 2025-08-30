"use client"
import { useState } from 'react'

export default function ConceptCheck({ question, options, answerIndex, hint }) {
  const [selected, setSelected] = useState(null)
  const [checked, setChecked] = useState(false)
  const correct = selected === answerIndex

  return (
    <div className="card">
      <h2>Concept Check</h2>
      <p style={{ marginBottom: '0.5rem' }}>{question}</p>
      <div style={{ display: 'grid', gap: '0.5rem' }}>
        {options.map((opt, i) => (
          <label key={i} className={`option ${selected===i? 'selected':''}`} style={{ display:'flex', alignItems:'center', gap:'0.5rem', cursor:'pointer' }}>
            <input
              type="radio"
              name="concept-check"
              checked={selected === i}
              onChange={() => { setSelected(i); setChecked(false) }}
            />
            <span>{opt}</span>
          </label>
        ))}
      </div>
      <div className="actions">
        <button className="btn primary" onClick={() => setChecked(true)} disabled={selected===null}>Check</button>
      </div>
      {checked && (
        <p style={{ marginTop: '0.5rem', color: correct ? 'var(--accent)' : 'var(--warning)' }}>
          {correct ? 'Correct! Nice job.' : (hint || 'Not quite—try again.')}
        </p>
      )}
    </div>
  )
}

