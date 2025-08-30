"use client"
import { useEffect, useState } from 'react'
import { getProgress, setProgress, isLessonCompleted } from '../lib/progress'

export default function LessonProgress({ areaSlug, index, totalLessons }) {
  const [done, setDone] = useState(false)
  const [showAnimation, setShowAnimation] = useState(false)

  useEffect(() => {
    setDone(isLessonCompleted(areaSlug, index))
  }, [areaSlug, index])

  function toggle() {
    const newDone = !done
    if (newDone) {
      setProgress(areaSlug, index, { 
        completed: true,
        completedAt: new Date().toISOString() 
      })
      setShowAnimation(true)
      setTimeout(() => setShowAnimation(false), 1000)
    }
    setDone(newDone)
  }

  const progressPercentage = totalLessons ? 
    Math.round(((index + (done ? 1 : 0)) / totalLessons) * 100) : 0

  return (
    <div style={{ margin: '1rem 0' }}>
      <div style={{ display:'flex', alignItems:'center', gap:'0.75rem', marginBottom: '0.5rem' }}>
        <button 
          className={`btn ${done ? 'success' : 'primary'} ${showAnimation ? 'pulse' : ''}`} 
          onClick={toggle}
          style={{ position: 'relative' }}
        >
          {done ? '✓ Completed' : 'Mark Complete'}
          {showAnimation && (
            <span style={{ 
              position: 'absolute', 
              right: '-10px', 
              top: '-10px',
              animation: 'fadeInOut 1s ease-out'
            }}>
              🎉
            </span>
          )}
        </button>
        <span style={{ 
          fontSize: '0.9rem', 
          color: 'var(--muted)',
          fontWeight: '500'
        }}>
          Lesson {index + 1}{totalLessons ? ` of ${totalLessons}` : ''}
        </span>
      </div>
      
      {totalLessons && (
        <div className="progress-container">
          <div 
            className="progress-bar" 
            style={{ 
              width: `${progressPercentage}%`,
              transition: 'width 0.3s ease'
            }}
          />
          <span style={{ 
            position: 'absolute', 
            right: '0.5rem', 
            top: '0.25rem',
            fontSize: '0.75rem',
            color: 'var(--text)',
            fontWeight: '500'
          }}>
            {progressPercentage}%
          </span>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInOut {
          0% { opacity: 0; transform: translateY(10px) scale(0.8); }
          50% { opacity: 1; transform: translateY(-5px) scale(1.2); }
          100% { opacity: 0; transform: translateY(-15px) scale(0.8); }
        }
      `}</style>
    </div>
  )
}

