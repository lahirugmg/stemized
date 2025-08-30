"use client"
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { getAreaProgress, getLastVisitedLesson } from '../lib/progress'

export default function FocusCard({ area }) {
  const [progress, setProgress] = useState({ completed: 0, total: 0, percentage: 0 })
  const [lastLesson, setLastLesson] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const totalLessons = area.lessons?.length || 0
    setProgress(getAreaProgress(area.slug, totalLessons))
    setLastLesson(getLastVisitedLesson(area.slug))
  }, [area.slug, area.lessons])

  const themeStyles = {
    math: { borderColor: '#3b82f6' },
    data: { borderColor: '#4ecdc4' },
    science: { borderColor: '#45b7d1' },
    coding: { borderColor: '#96ceb4' }
  }

  const isStarted = mounted && progress.completed > 0
  const isCompleted = mounted && progress.percentage === 100
  const continueHref = isStarted ? `/focus/${area.slug}/${lastLesson}` : `/focus/${area.slug}/0`

  return (
    <article
      id={`area-${area.slug}`}
      className="card hover interactive focus-card"
      style={themeStyles[area.theme] || {}}
    >
      {mounted && isCompleted && (
        <div style={{
          position: 'absolute',
          top: '0.75rem',
          right: '0.75rem',
          background: 'var(--success)',
          color: 'white',
          borderRadius: '50%',
          width: '24px',
          height: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '0.75rem',
          fontWeight: 'bold',
          zIndex: 2
        }}>
          ✓
        </div>
      )}

      <h2 style={{ color: area.color, margin: 0 }}>{area.title}</h2>
      
      <p style={{ marginTop: '0.5rem' }}>{area.description}</p>
      
      {mounted && isStarted && (
        <div style={{ margin: '0.75rem 0' }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            fontSize: '0.8rem',
            color: 'var(--muted)',
            marginBottom: '0.25rem'
          }}>
            <span>Progress</span>
            <span>{progress.completed} of {progress.total} lessons</span>
          </div>
          <div className="progress-container" style={{ height: '6px', margin: 0 }}>
            <div 
              className="progress-bar" 
              style={{ 
                width: `${progress.percentage}%`,
                background: area.color,
                transition: 'width 0.3s ease'
              }}
            />
          </div>
        </div>
      )}

      <div className="tags" style={{ marginTop: '0.75rem' }}>
        {area.tags?.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>
      
      <div className="actions" style={{ marginTop: '0.75rem' }}>
        <Link 
          className="btn primary" 
          href={continueHref}
          style={{ backgroundColor: area.color }}
        >
          {mounted && isStarted ? (isCompleted ? 'Review' : 'Continue') : 'Start Learning'}
        </Link>
        {mounted && isStarted && !isCompleted && (
          <Link 
            className="btn" 
            href={`/focus/${area.slug}/0`}
            style={{ marginLeft: '0.5rem' }}
          >
            Restart
          </Link>
        )}
      </div>
    </article>
  )
}

