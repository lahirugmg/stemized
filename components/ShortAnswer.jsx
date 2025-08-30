"use client"
import { useState } from 'react'

export default function ShortAnswer({ prompt, expectedKeywords = [], sample }) {
  const [txt, setTxt] = useState('')
  const [checked, setChecked] = useState(false)

  const matches = expectedKeywords.filter(k => new RegExp(`\\b${escapeRegExp(k)}\\b`, 'i').test(txt))
  const score = `${matches.length}/${expectedKeywords.length}`

  return (
    <div className="card">
      <h2>Short Answer</h2>
      <p style={{ marginBottom:'0.5rem' }}>{prompt}</p>
      <textarea
        value={txt}
        onChange={(e)=>{ setTxt(e.target.value); setChecked(false) }}
        rows={4}
        style={{ width:'100%', background:'#0b1b3d', border:'1px solid #2a3769', color:'var(--text)', borderRadius:8, padding:'0.6rem' }}
        placeholder="Write your answer here..."
      />
      <div className="actions">
        <button className="btn primary" onClick={()=>setChecked(true)} disabled={!txt.trim()}>Check</button>
      </div>
      {checked && (
        <div>
          <p style={{ color:'var(--accent)' }}>Keyword score: {score}</p>
          {sample && (
            <div className="card" style={{ marginTop:'0.5rem' }}>
              <strong>Sample answer</strong>
              <p>{sample}</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

