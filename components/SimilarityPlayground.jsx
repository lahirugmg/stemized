"use client"
import { useMemo, useState } from 'react'

function dot(a, b) { return a[0]*b[0] + a[1]*b[1] }
function norm(a) { return Math.sqrt(a[0]*a[0] + a[1]*a[1]) }
function cosine(a, b) { const d = dot(a,b); const n = norm(a)*norm(b); return n ? d/n : 0 }
function euclidean(a, b) { return Math.sqrt((a[0]-b[0])**2 + (a[1]-b[1])**2) }
function manhattan(a, b) { return Math.abs(a[0]-b[0]) + Math.abs(a[1]-b[1]) }

export default function SimilarityPlayground() {
  const [ax, setAx] = useState(1)
  const [ay, setAy] = useState(2)
  const [bx, setBx] = useState(2)
  const [by, setBy] = useState(1)

  const a = useMemo(() => [Number(ax), Number(ay)], [ax, ay])
  const b = useMemo(() => [Number(bx), Number(by)], [bx, by])

  const cos = cosine(a,b)
  const euc = euclidean(a,b)
  const man = manhattan(a,b)

  return (
    <div className="card">
      <h2>Similarity & Distance Playground</h2>
      <p>Adjust the two 2D vectors and compare cosine similarity vs Euclidean/Manhattan distance.</p>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem', margin:'0.75rem 0' }}>
        <VectorControls title="Vector A" x={ax} y={ay} setX={setAx} setY={setAy} />
        <VectorControls title="Vector B" x={bx} y={by} setX={setBx} setY={setBy} />
      </div>
      <Metrics cos={cos} euc={euc} man={man} />
      <small style={{ color:'var(--muted)' }}>
        Tip: Cosine focuses on angle (direction), Euclidean/Manhattan on magnitude and position.
      </small>
    </div>
  )
}

function VectorControls({ title, x, y, setX, setY }) {
  return (
    <div className="card" style={{ padding:'0.8rem' }}>
      <div style={{ fontWeight:700, marginBottom:'0.4rem' }}>{title}</div>
      <label> x: <input type="range" min="-5" max="5" step="1" value={x} onChange={(e)=>setX(e.target.value)} /> <span>{x}</span></label>
      <br />
      <label> y: <input type="range" min="-5" max="5" step="1" value={y} onChange={(e)=>setY(e.target.value)} /> <span>{y}</span></label>
    </div>
  )
}

function Metrics({ cos, euc, man }) {
  return (
    <div className="card" style={{ padding:'0.8rem' }}>
      <div style={{ fontWeight:700, marginBottom:'0.4rem' }}>Metrics</div>
      <div>Cosine similarity: <strong>{cos.toFixed(3)}</strong></div>
      <div>Euclidean distance: <strong>{euc.toFixed(3)}</strong></div>
      <div>Manhattan distance: <strong>{man.toFixed(3)}</strong></div>
    </div>
  )
}

