'use client'
import { Suspense, useState, useEffect } from 'react'
import FocusCard from '../components/FocusCard'
import ProgressDashboard from '../components/ProgressDashboard'
import { groups } from '../data/groups'
import { LoadingGrid } from '../components/LoadingCard'
import { focusAreas } from '../data'
import { getOverallProgress } from '../lib/progress'

function GroupedFocusAreas() {
  const [mounted, setMounted] = useState(false)
  const [showDashboard, setShowDashboard] = useState(false)
  
  useEffect(() => {
    setMounted(true)
    // Check if user has any progress to decide whether to show dashboard
    const stats = getOverallProgress(focusAreas)
    setShowDashboard(stats.areasStarted > 0)
  }, [])

  if (!mounted) {
    return (
      <div style={{ display: 'grid', gap: '1.25rem' }}>
        {groups.map(group => (
          <div key={group.slug} className="card" style={{ padding: '1.25rem 1.5rem', borderLeft: `4px solid ${group.color}` }}>
            <div style={{ marginBottom: '1rem' }}>
              <h2 style={{ margin: '0 0 0.35rem 0', fontSize: '1.15rem', color: 'var(--text)' }}>{group.title}</h2>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--muted)' }}>{group.description}</p>
            </div>
            <LoadingGrid count={group.areas.length} />
          </div>
        ))}
      </div>
    )
  }

  // Get ungrouped areas (areas not in any group)
  const groupedAreaSlugs = new Set(groups.flatMap(g => g.areas))
  const ungroupedAreas = focusAreas.filter(area => !groupedAreaSlugs.has(area.slug))

  return (
    <div style={{ display: 'grid', gap: '1.5rem' }}>
      {/* Progress Dashboard - shown only if user has started learning */}
      {showDashboard && (
        <div style={{ marginBottom: '1rem' }}>
          <ProgressDashboard focusAreas={focusAreas} />
        </div>
      )}

      {/* Grouped areas */}
      {groups.map(group => {
        const groupAreas = group.areas.map(slug => focusAreas.find(area => area.slug === slug)).filter(Boolean)
        
        return (
          <div key={group.slug} className="card hover" style={{ 
            padding: '1.25rem 1.5rem', 
            borderLeft: `4px solid ${group.color}`,
            background: 'var(--card)'
          }}>
            <div style={{ marginBottom: '1.25rem' }}>
              <h2 style={{ 
                margin: '0 0 0.5rem 0', 
                fontSize: '1.25rem', 
                color: group.color,
                fontWeight: 600
              }}>
                {group.title}
              </h2>
              <p style={{ 
                margin: 0, 
                fontSize: '0.95rem', 
                color: 'var(--muted)',
                lineHeight: 1.5
              }}>
                {group.description}
              </p>
            </div>
            
            <div className="grid" style={{ 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1rem'
            }}>
              {groupAreas.map(area => (
                <FocusCard key={area.slug} area={area} />
              ))}
            </div>
          </div>
        )
      })}
      
      {/* Ungrouped areas */}
      {ungroupedAreas.length > 0 && (
        <div>
          <h2 style={{ 
            margin: '0 0 1rem 0', 
            fontSize: '1.25rem', 
            color: 'var(--text)',
            fontWeight: 600
          }}>
            Other Areas
          </h2>
          <div className="grid">
            {ungroupedAreas.map(area => (
              <FocusCard key={area.slug} area={area} />
            ))}
          </div>
        </div>
      )}
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
      
      <Suspense fallback={
        <div style={{ display: 'grid', gap: '1.25rem' }}>
          {groups.map(group => (
            <div key={group.slug} className="card" style={{ padding: '1.25rem 1.5rem', borderLeft: `4px solid ${group.color}` }}>
              <div style={{ marginBottom: '1rem' }}>
                <h2 style={{ margin: '0 0 0.35rem 0', fontSize: '1.15rem', color: 'var(--text)' }}>{group.title}</h2>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--muted)' }}>{group.description}</p>
              </div>
              <LoadingGrid count={group.areas.length} />
            </div>
          ))}
        </div>
      }>
        <GroupedFocusAreas />
      </Suspense>
    </section>
  )
}
