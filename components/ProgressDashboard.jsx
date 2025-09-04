"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getOverallProgress, getRecommendations, getAchievements, getWeeklySummary } from '../lib/progress'

export default function ProgressDashboard({ focusAreas }) {
  const [stats, setStats] = useState(null)
  const [recommendations, setRecommendations] = useState([])
  const [achievements, setAchievements] = useState([])
  const [weeklySummary, setWeeklySummary] = useState(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const overallStats = getOverallProgress(focusAreas)
    const recs = getRecommendations(focusAreas)
    const achs = getAchievements(focusAreas)
    const weekly = getWeeklySummary()
    
    setStats(overallStats)
    setRecommendations(recs)
    setAchievements(achs)
    setWeeklySummary(weekly)
  }, [focusAreas])

  if (!mounted || !stats) {
    return (
      <div className="card" style={{ padding: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <div style={{ width: '20px', height: '20px', background: 'var(--muted)', borderRadius: '50%' }} />
          <div style={{ width: '120px', height: '20px', background: 'var(--muted)', borderRadius: '4px' }} />
        </div>
        <div style={{ width: '100%', height: '8px', background: 'var(--muted)', borderRadius: '4px' }} />
      </div>
    )
  }

  const hasProgress = stats.areasStarted > 0

  return (
    <div className="progress-dashboard">
      {/* Overall Progress Header */}
      <div className="card" style={{ padding: '1.5rem', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <div>
            <h2 style={{ margin: '0 0 0.25rem 0', fontSize: '1.25rem', color: 'var(--text)' }}>
              Your Learning Progress
            </h2>
            <p style={{ margin: 0, color: 'var(--muted)' }}>
              {hasProgress 
                ? `${stats.completedLessons} lessons completed across ${stats.areasStarted} areas`
                : 'Start your STEM learning journey today!'
              }
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)' }}>
              {stats.overallPercentage}%
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>Complete</div>
          </div>
        </div>
        
        {/* Overall Progress Bar */}
        <div className="progress-container" style={{ height: '12px', marginBottom: '0.5rem' }}>
          <div 
            className="progress-bar" 
            style={{ 
              width: `${stats.overallPercentage}%`,
              background: 'linear-gradient(90deg, #3b82f6, #4ecdc4)',
              transition: 'width 0.6s ease'
            }}
          />
        </div>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          fontSize: '0.75rem', 
          color: 'var(--muted)' 
        }}>
          <span>{stats.completedLessons} completed</span>
          <span>{stats.totalLessons} total lessons</span>
        </div>
      </div>

      {/* Weekly Summary */}
      {weeklySummary && weeklySummary.lessonsCompleted > 0 && (
        <div className="card" style={{ padding: '1rem', marginBottom: '1rem', background: 'linear-gradient(135deg, #f6f8ff, #e8f2ff)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontSize: '1.5rem' }}>📊</span>
            <div>
              <div style={{ fontWeight: 600, color: 'var(--text)' }}>This Week</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>{weeklySummary.message}</div>
            </div>
          </div>
        </div>
      )}

      <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        {/* Resume Learning Section */}
        {hasProgress && (
          <div className="card" style={{ padding: '1.25rem' }}>
            <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.1rem', color: 'var(--text)' }}>
              🎯 Resume Learning
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {stats.areaStats
                .filter(area => area.progress.completed > 0 && area.progress.percentage < 100)
                .slice(0, 3)
                .map(area => (
                  <Link 
                    key={area.slug}
                    href={`/focus/${area.slug}/${area.lastVisited}`}
                    className="btn"
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'space-between',
                      padding: '0.75rem 1rem',
                      textDecoration: 'none',
                      borderLeft: `3px solid ${area.color}`
                    }}
                  >
                    <div style={{ textAlign: 'left' }}>
                      <div style={{ fontWeight: 600, color: 'var(--text)' }}>{area.title}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>
                        {area.progress.completed} of {area.progress.total} lessons
                      </div>
                    </div>
                    <div style={{ fontSize: '0.9rem', color: area.color, fontWeight: 600 }}>
                      {area.progress.percentage}%
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        )}

        {/* Recommendations Section */}
        <div className="card" style={{ padding: '1.25rem' }}>
          <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.1rem', color: 'var(--text)' }}>
            💡 Recommended for You
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {recommendations.map((area, index) => {
              const isInProgress = area.progress.completed > 0
              const href = isInProgress ? `/focus/${area.slug}/${area.lastVisited}` : `/focus/${area.slug}/0`
              
              return (
                <Link 
                  key={area.slug}
                  href={href}
                  className="btn"
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    padding: '0.75rem 1rem',
                    textDecoration: 'none',
                    borderLeft: `3px solid ${area.color}`,
                    opacity: index === 0 ? 1 : 0.8
                  }}
                >
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontWeight: 600, color: 'var(--text)' }}>{area.title}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>
                      {isInProgress ? 'Continue learning' : 'Start exploring'}
                    </div>
                  </div>
                  <div style={{ fontSize: '1.2rem' }}>
                    {index === 0 ? '⭐' : isInProgress ? '▶️' : '🚀'}
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Achievements Section */}
        {achievements.length > 0 && (
          <div className="card" style={{ padding: '1.25rem' }}>
            <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.1rem', color: 'var(--text)' }}>
              🏆 Achievements
            </h3>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
              gap: '0.75rem' 
            }}>
              {achievements.slice(0, 6).map(achievement => (
                <div 
                  key={achievement.id}
                  style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    padding: '0.75rem 0.5rem',
                    background: 'var(--surface)',
                    borderRadius: '8px',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>
                    {achievement.icon}
                  </div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text)' }}>
                    {achievement.title}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--muted)', marginTop: '0.25rem' }}>
                    {achievement.description}
                  </div>
                </div>
              ))}
            </div>
            {achievements.length > 6 && (
              <div style={{ textAlign: 'center', marginTop: '0.75rem' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>
                  +{achievements.length - 6} more achievements
                </span>
              </div>
            )}
          </div>
        )}

        {/* Progress Summary */}
        <div className="card" style={{ padding: '1.25rem' }}>
          <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.1rem', color: 'var(--text)' }}>
            📈 Progress Summary
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>
                {stats.areasStarted}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>Areas Started</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--success)' }}>
                {stats.areasCompleted}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>Areas Completed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}