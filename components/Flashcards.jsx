"use client"
import { useState } from 'react'

export default function Flashcards({ title = 'Flashcards', cards = [] }) {
  const [i, setI] = useState(0)
  const [front, setFront] = useState(true)
  const has = cards.length > 0

  function next() { setI((i+1) % cards.length); setFront(true) }
  function prev() { setI((i-1+cards.length) % cards.length); setFront(true) }
  function flip() { setFront(!front) }

  if (!has) return null

  const card = cards[i]

  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="card hover" style={{ padding:'1rem', textAlign:'center' }} onClick={flip} role="button" tabIndex={0}>
        <div style={{ fontWeight:700, marginBottom:'0.25rem' }}>{front ? card.front : card.back}</div>
        <small style={{ color:'var(--muted)' }}>(Click to flip)</small>
      </div>
      <div className="actions">
        <button className="btn" onClick={prev}>Prev</button>
        <button className="btn primary" onClick={next}>Next</button>
      </div>
    </div>
  )
}

