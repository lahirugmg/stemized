"use client"
import { useState } from 'react'

// Simple click-to-move sorter: start in "Unsorted", move items into Benefits or Challenges.
export default function CardSorter({ prompt, items, solution }) {
  const [unsorted, setUnsorted] = useState(items)
  const [benefits, setBenefits] = useState([])
  const [challenges, setChallenges] = useState([])
  const [checked, setChecked] = useState(false)

  function move(item, from, to, setFrom, setTo) {
    setFrom(from.filter((x) => x !== item))
    setTo([...to, item])
    setChecked(false)
  }

  function check() {
    setChecked(true)
  }

  function score() {
    const bCorrect = benefits.filter((i) => solution.benefits.includes(i)).length
    const cCorrect = challenges.filter((i) => solution.challenges.includes(i)).length
    const total = items.length
    const correct = bCorrect + cCorrect
    return { correct, total }
  }

  const { correct, total } = score()

  return (
    <div className="card">
      <h2>Classify: Benefits vs Challenges</h2>
      <p style={{ marginBottom: '0.75rem' }}>{prompt}</p>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'0.75rem' }}>
        <Column title="Unsorted">
          {unsorted.map((i) => (
            <Item key={i} onClick={() => move(i, unsorted, benefits, setUnsorted, setBenefits)} label={`→ Benefit`}>{i}</Item>
          ))}
        </Column>
        <Column title="Benefits">
          {benefits.map((i) => (
            <Item key={i} onClick={() => move(i, benefits, challenges, setBenefits, setChallenges)} label={`→ Challenge`}>{i}</Item>
          ))}
        </Column>
        <Column title="Challenges">
          {challenges.map((i) => (
            <Item key={i} onClick={() => move(i, challenges, unsorted, setChallenges, setUnsorted)} label={`→ Unsorted`}>{i}</Item>
          ))}
        </Column>
      </div>
      <div className="actions">
        <button className="btn primary" onClick={check} disabled={unsorted.length>0}>Check</button>
      </div>
      {checked && (
        <p style={{ color: 'var(--accent)' }}>Score: {correct}/{total}</p>
      )}
    </div>
  )
}

function Column({ title, children }) {
  return (
    <div>
      <div style={{ fontWeight: 700, marginBottom: '0.25rem' }}>{title}</div>
      <div style={{ display:'grid', gap:'0.5rem' }}>{children}</div>
    </div>
  )
}

function Item({ children, onClick, label }) {
  return (
    <div className="card hover" style={{ padding:'0.6rem' }}>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:'0.5rem' }}>
        <div>{children}</div>
        <button className="btn" onClick={onClick} aria-label={label}>{label}</button>
      </div>
    </div>
  )
}

