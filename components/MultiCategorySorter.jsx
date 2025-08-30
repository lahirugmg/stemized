"use client"
import { useState } from 'react'

export default function MultiCategorySorter({ title = 'Classify Items', categories = [], items = [], solution = {} }) {
  const [cols, setCols] = useState(() => {
    const init = { Unsorted: items }
    for (const c of categories) init[c] = []
    return init
  })
  const [checked, setChecked] = useState(false)

  const move = (item, fromKey, toKey) => {
    if (fromKey === toKey) return
    const next = { ...cols }
    next[fromKey] = next[fromKey].filter((x) => x !== item)
    next[toKey] = [...next[toKey], item]
    setCols(next)
    setChecked(false)
  }

  const score = () => {
    let correct = 0
    let total = items.length
    for (const c of categories) {
      const correctItems = new Set(solution[c] || [])
      for (const item of cols[c]) if (correctItems.has(item)) correct++
    }
    return { correct, total }
  }

  const { correct, total } = score()

  return (
    <div className="card">
      <h2>{title}</h2>
      <div style={{ display:'grid', gridTemplateColumns:`repeat(${categories.length + 1}, 1fr)`, gap:'0.75rem' }}>
        <Column title="Unsorted">
          {cols.Unsorted.map((i) => (
            <Item key={i} label={`Move`} onClick={(e) => {
              const to = prompt(`Move to which category?\n${categories.join(', ')}`)
              if (to && categories.includes(to)) move(i, 'Unsorted', to)
            }}>{i}</Item>
          ))}
        </Column>
        {categories.map((c) => (
          <Column key={c} title={c}>
            {cols[c].map((i) => (
              <Item key={i} label={`To Unsorted`} onClick={() => move(i, c, 'Unsorted')}>{i}</Item>
            ))}
          </Column>
        ))}
      </div>
      <div className="actions">
        <button className="btn primary" onClick={() => setChecked(true)} disabled={cols.Unsorted.length>0}>Check</button>
      </div>
      {checked && (
        <p style={{ color:'var(--accent)' }}>Score: {correct}/{total}</p>
      )}
    </div>
  )
}

function Column({ title, children }) {
  return (
    <div>
      <div style={{ fontWeight:700, marginBottom:'0.25rem' }}>{title}</div>
      <div style={{ display:'grid', gap:'0.5rem' }}>{children}</div>
    </div>
  )
}

function Item({ children, onClick, label }) {
  return (
    <div className="card hover" style={{ padding:'0.6rem' }}>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:'0.5rem' }}>
        <div>{children}</div>
        <button className="btn" onClick={onClick}>{label}</button>
      </div>
    </div>
  )
}

