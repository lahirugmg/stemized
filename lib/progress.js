"use client"

const PROGRESS_KEY = 'stemized_progress'

export function getProgress() {
  if (typeof window === 'undefined') return {}
  try {
    const data = localStorage.getItem(PROGRESS_KEY)
    return data ? JSON.parse(data) : {}
  } catch (error) {
    console.warn('Failed to load progress:', error)
    return {}
  }
}

export function setProgress(areaSlug, lessonIndex, data = {}) {
  if (typeof window === 'undefined') return
  try {
    const progress = getProgress()
    if (!progress[areaSlug]) {
      progress[areaSlug] = {}
    }
    progress[areaSlug][lessonIndex] = {
      completed: true,
      completedAt: new Date().toISOString(),
      ...data
    }
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress))
  } catch (error) {
    console.warn('Failed to save progress:', error)
  }
}

export function isLessonCompleted(areaSlug, lessonIndex) {
  const progress = getProgress()
  return progress[areaSlug]?.[lessonIndex]?.completed || false
}

export function getAreaProgress(areaSlug, totalLessons) {
  const progress = getProgress()
  const areaProgress = progress[areaSlug] || {}
  const completed = Object.keys(areaProgress).filter(key => 
    areaProgress[key]?.completed
  ).length
  return {
    completed,
    total: totalLessons,
    percentage: totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0
  }
}

export function getLastVisitedLesson(areaSlug) {
  const progress = getProgress()
  const areaProgress = progress[areaSlug] || {}
  const lessons = Object.keys(areaProgress)
    .map(key => ({ index: parseInt(key), ...areaProgress[key] }))
    .sort((a, b) => new Date(b.completedAt) - new Date(a.completedAt))
  
  return lessons.length > 0 ? lessons[0].index : 0
}

export function clearProgress(areaSlug = null) {
  if (typeof window === 'undefined') return
  try {
    if (areaSlug) {
      const progress = getProgress()
      delete progress[areaSlug]
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress))
    } else {
      localStorage.removeItem(PROGRESS_KEY)
    }
  } catch (error) {
    console.warn('Failed to clear progress:', error)
  }
}