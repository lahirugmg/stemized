"use client"
import { useEffect, useState } from 'react'

export default function LessonProgress({ areaSlug, index }) {
  const key = `progress:${areaSlug}`
  const [done, setDone] = useState(false)

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(key) || '{}')
      setDone(!!saved[index])
    } catch {}
  }, [key, index])

  function toggle() {
    try {
      const saved = JSON.parse(localStorage.getItem(key) || '{}')
      const next = { ...saved, [index]: !done }
      localStorage.setItem(key, JSON.stringify(next))
      setDone(!done)
    } catch {}
  }

  return (
    <div style={{ display:'flex', alignItems:'center', gap:'0.5rem' }}>
      <button className={`btn ${done ? 'success':''}`} onClick={toggle}>
        {done ? '✓ Completed' : 'Mark Complete'}
      </button>
    </div>
  )
}

