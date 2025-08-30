"use client"
import { useMemo, useState } from 'react'

export default function ConceptHighlighter({ text, keywords = [] }) {
  const [on, setOn] = useState(true)

  const parts = useMemo(() => highlightParts(text || '', keywords, on), [text, keywords, on])

  return (
    <div>
      <div className="actions" style={{ marginTop: 0 }}>
        <button className="btn" onClick={() => setOn(!on)}>
          {on ? 'Disable highlight' : 'Highlight key terms'}
        </button>
      </div>
      <p>{parts}</p>
    </div>
  )
}

function highlightParts(text, keywords, on) {
  if (!on || !keywords?.length) return text
  const uniq = Array.from(new Set(keywords.filter(Boolean)))
  if (!uniq.length) return text
  // Sort by length to prioritize longer phrases first
  const pattern = new RegExp(`(${uniq
    .map((k) => escapeRegExp(k))
    .sort((a, b) => b.length - a.length)
    .join('|')})`, 'gi')
  const segments = text.split(pattern)
  return segments.map((seg, i) =>
    uniq.some((k) => seg.toLowerCase() === k.toLowerCase()) ? <mark key={i}>{seg}</mark> : <span key={i}>{seg}</span>
  )
}

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

