"use client"
import { useState } from 'react'

export default function Reveal({ label = 'Show solution', children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="card" style={{ marginTop: '0.5rem' }}>
      <button className={`btn ${open ? 'success' : 'primary'}`} onClick={() => setOpen(!open)}>
        {open ? 'Hide' : label}
      </button>
      {open && (
        <div style={{ marginTop: '0.5rem' }}>
          {typeof children === 'string' ? <p>{children}</p> : children}
        </div>
      )}
    </div>
  )
}

