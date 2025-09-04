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

// New functions for dashboard and recommendations
export function getOverallProgress(focusAreas) {
  const progress = getProgress()
  let totalLessons = 0
  let completedLessons = 0
  let areasStarted = 0
  let areasCompleted = 0
  
  const areaStats = focusAreas.map(area => {
    const areaLessons = area.lessons?.length || 0
    totalLessons += areaLessons
    
    const areaProgress = getAreaProgress(area.slug, areaLessons)
    completedLessons += areaProgress.completed
    
    if (areaProgress.completed > 0) {
      areasStarted++
    }
    if (areaProgress.percentage === 100) {
      areasCompleted++
    }
    
    return {
      ...area,
      progress: areaProgress,
      lastVisited: getLastVisitedLesson(area.slug)
    }
  })
  
  return {
    totalLessons,
    completedLessons,
    areasStarted,
    areasCompleted,
    overallPercentage: totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0,
    areaStats
  }
}

export function getRecommendations(focusAreas, limit = 3) {
  const overallProgress = getOverallProgress(focusAreas)
  const recommendations = []
  
  // Priority 1: Continue areas that are started but not finished
  const inProgress = overallProgress.areaStats
    .filter(area => area.progress.completed > 0 && area.progress.percentage < 100)
    .sort((a, b) => b.progress.percentage - a.progress.percentage)
  
  // Priority 2: Related areas based on theme/category
  const notStarted = overallProgress.areaStats
    .filter(area => area.progress.completed === 0)
  
  // Add in-progress areas first
  recommendations.push(...inProgress.slice(0, limit))
  
  // Fill remaining slots with new areas, prioritizing by theme similarity
  if (recommendations.length < limit) {
    const startedThemes = inProgress.map(area => area.theme)
    const relatedAreas = notStarted
      .filter(area => startedThemes.includes(area.theme))
      .slice(0, limit - recommendations.length)
    
    recommendations.push(...relatedAreas)
  }
  
  // Fill any remaining slots with popular/foundational areas
  if (recommendations.length < limit) {
    const foundationalSlugs = ['math-foundations', 'algebra-made-simple', 'coding-basics', 'biology-basics']
    const foundational = notStarted
      .filter(area => foundationalSlugs.includes(area.slug))
      .slice(0, limit - recommendations.length)
    
    recommendations.push(...foundational)
  }
  
  // Fill final slots with any remaining areas
  if (recommendations.length < limit) {
    const remaining = notStarted
      .filter(area => !recommendations.some(r => r.slug === area.slug))
      .slice(0, limit - recommendations.length)
    
    recommendations.push(...remaining)
  }
  
  return recommendations.slice(0, limit)
}

export function getAchievements(focusAreas) {
  const overallProgress = getOverallProgress(focusAreas)
  const achievements = []
  
  // First lesson achievement
  if (overallProgress.completedLessons >= 1) {
    achievements.push({
      id: 'first_lesson',
      title: 'First Steps',
      description: 'Completed your first lesson',
      icon: '🎯',
      unlocked: true
    })
  }
  
  // Area completion achievements
  if (overallProgress.areasCompleted >= 1) {
    achievements.push({
      id: 'first_area',
      title: 'Area Master',
      description: 'Completed your first learning area',
      icon: '🏆',
      unlocked: true
    })
  }
  
  // Lesson milestones
  const milestones = [5, 10, 25, 50, 100]
  milestones.forEach(milestone => {
    if (overallProgress.completedLessons >= milestone) {
      achievements.push({
        id: `lessons_${milestone}`,
        title: `${milestone} Lessons`,
        description: `Completed ${milestone} lessons`,
        icon: milestone >= 50 ? '🌟' : milestone >= 25 ? '⭐' : '✨',
        unlocked: true
      })
    }
  })
  
  // Completion percentage achievements
  if (overallProgress.overallPercentage >= 25) {
    achievements.push({
      id: 'quarter_complete',
      title: 'Quarter Way There',
      description: '25% of all lessons completed',
      icon: '🔥',
      unlocked: true
    })
  }
  
  if (overallProgress.overallPercentage >= 50) {
    achievements.push({
      id: 'halfway_hero',
      title: 'Halfway Hero',
      description: '50% of all lessons completed',
      icon: '💪',
      unlocked: true
    })
  }
  
  if (overallProgress.overallPercentage >= 75) {
    achievements.push({
      id: 'almost_there',
      title: 'Almost There',
      description: '75% of all lessons completed',
      icon: '🚀',
      unlocked: true
    })
  }
  
  if (overallProgress.overallPercentage === 100) {
    achievements.push({
      id: 'completionist',
      title: 'Completionist',
      description: 'Completed all available lessons!',
      icon: '👑',
      unlocked: true
    })
  }
  
  return achievements
}

export function getWeeklySummary() {
  const progress = getProgress()
  const oneWeekAgo = new Date()
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)
  
  let weeklyCompleted = 0
  
  Object.values(progress).forEach(areaProgress => {
    Object.values(areaProgress).forEach(lesson => {
      if (lesson.completed && lesson.completedAt) {
        const completedDate = new Date(lesson.completedAt)
        if (completedDate >= oneWeekAgo) {
          weeklyCompleted++
        }
      }
    })
  })
  
  return {
    lessonsCompleted: weeklyCompleted,
    message: weeklyCompleted > 0 
      ? `You completed ${weeklyCompleted} lesson${weeklyCompleted > 1 ? 's' : ''} last week—ready for the next challenge?`
      : "Start your learning journey this week!"
  }
}