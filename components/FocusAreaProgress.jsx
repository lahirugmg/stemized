"use client"
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'

export default function FocusAreaProgress({ areaSlug, count }) {
  const key = `progress:${areaSlug}`
  const [map, setMap] = useState({})

  useEffect(() => {
    try { setMap(JSON.parse(localStorage.getItem(key) || '{}')) } catch {}
  }, [key])

  const completed = useMemo(() => Object.values(map).filter(Boolean).length, [map])
  const pct = Math.round((completed / Math.max(1, count)) * 100)
  const resumeIndex = useMemo(() => {
    for (let i = 0; i < count; i++) if (!map[i]) return i
    return 0
  }, [map, count])

  return (
    <div className="card" style={{ margin:'0.5rem 0 1rem' }}>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:'0.75rem' }}>
        <div>
          <div style={{ fontWeight:700 }}>Progress</div>
          <div style={{ color:'var(--muted)' }}>{completed}/{count} lessons • {pct}%</div>
        </div>
        <Link className="btn primary" href={`/focus/${areaSlug}/${resumeIndex}`}>Resume</Link>
      </div>
      <div style={{ marginTop:'0.5rem', background:'#0b1b3d', border:'1px solid #2a3769', borderRadius:8, overflow:'hidden' }}>
        <div style={{ width:`${pct}%`, height:10, background:'#123573' }} />
      </div>
    </div>
  )
}

