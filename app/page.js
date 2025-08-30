'use client'
import { Suspense, useState, useEffect } from 'react'
import FocusCard from '../components/FocusCard'
import { groups } from '../data/groups'
import { LoadingGrid } from '../components/LoadingCard'
import { focusAreas } from '../data'

function FocusAreaGrid() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <LoadingGrid count={8} />
  }

  return (
    <div className="grid">
      {focusAreas.map((area) => (
        <FocusCard key={area.slug} area={area} />
      ))}
    </div>
  )
}

export default function Page() {
  return (
    <section className="main-page">
      <div className="hero">
        <h1>Pick a focus area</h1>
        <p>Learn STEM by focusing on one area at a time. Start with a topic below and enjoy interactive learning with colors and animations.</p>
      </div>
      {/* Grouped learning paths (e.g., Math) */}
      <div style={{ marginBottom: '2.5rem', display: 'grid', gap: '1.25rem' }}>
        {groups.map(group => (
          <div key={group.slug} className="card hover" style={{ padding: '1.25rem 1.5rem', borderLeft: `4px solid ${group.color}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
              <div>
                <h2 style={{ margin: '0 0 0.35rem 0', fontSize: '1.15rem', color: 'var(--text)' }}>{group.title}</h2>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--muted)' }}>{group.description}</p>
              </div>
              <div style={{ display: 'flex', gap: '0.4rem' }}>
                {group.areas.map(slug => (
                  <span key={slug} style={{
                    background: group.color + '10',
                    color: group.color,
                    padding: '0.35rem 0.6rem',
                    borderRadius: '8px',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    letterSpacing: '0.5px'
                  }}>{slug.replace(/-/g,' ')}</span>
                ))}
              </div>
            </div>
            <div style={{ marginTop: '0.9rem', display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {group.areas.map(slug => {
                const a = focusAreas.find(f => f.slug === slug)
                if (!a) return null
                return (
                  <a key={slug} href={`#area-${slug}`} style={{
                    textDecoration: 'none',
                    fontSize: '0.75rem',
                    background: 'var(--surface)',
                    padding: '0.4rem 0.65rem',
                    borderRadius: '6px',
                    border: '1px solid var(--border)',
                    color: 'var(--text)'
                  }}>{a.title}</a>
                )
              })}
            </div>
          </div>
        ))}
      </div>
      <Suspense fallback={<LoadingGrid count={8} />}>
        <FocusAreaGrid />
      </Suspense>
    </section>
  )
}
