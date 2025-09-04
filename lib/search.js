import { focusAreas } from '../data'

/**
 * Creates a searchable index of all courses, modules, and lessons
 */
function createSearchIndex() {
  const searchItems = []

  focusAreas.forEach(area => {
    if (!area) return

    // Add area itself as searchable
    searchItems.push({
      type: 'area',
      id: area.slug,
      title: area.title,
      description: area.description,
      keywords: area.tags || [],
      url: `/focus/${area.slug}`,
      area: area.title,
      searchText: [area.title, area.description, ...(area.tags || [])].join(' ').toLowerCase()
    })

    // Add modules if they exist
    if (area.modules) {
      area.modules.forEach((module, moduleIndex) => {
        searchItems.push({
          type: 'module',
          id: `${area.slug}-${module.slug}`,
          title: module.title,
          description: module.description,
          keywords: [],
          url: `/focus/${area.slug}/module/${moduleIndex}`,
          area: area.title,
          searchText: [module.title, module.description, area.title].join(' ').toLowerCase()
        })
      })
    }

    // Add lessons
    if (area.lessons) {
      area.lessons.forEach((lesson, lessonIndex) => {
        if (!lesson) return

        let lessonUrl
        let moduleInfo = null

        // Check if this lesson belongs to a module
        if (area.modules) {
          for (let i = 0; i < area.modules.length; i++) {
            const module = area.modules[i]
            if (module.lessonIndexes && module.lessonIndexes.includes(lessonIndex)) {
              const moduleIndex = i
              const indexInModule = module.lessonIndexes.indexOf(lessonIndex)
              lessonUrl = `/focus/${area.slug}/module/${moduleIndex}/${indexInModule}`
              moduleInfo = module.title
              break
            }
          }
        }

        // If not in a module, use the direct lesson URL
        if (!lessonUrl) {
          lessonUrl = `/focus/${area.slug}/${lessonIndex}`
        }

        const keywords = lesson.keywords || []
        const searchText = [
          lesson.title,
          lesson.summary || '',
          lesson.concept || '',
          area.title,
          moduleInfo || '',
          ...keywords
        ].filter(Boolean).join(' ').toLowerCase()

        searchItems.push({
          type: 'lesson',
          id: `${area.slug}-lesson-${lessonIndex}`,
          title: lesson.title,
          description: lesson.summary || lesson.concept || '',
          keywords,
          url: lessonUrl,
          area: area.title,
          module: moduleInfo,
          searchText
        })
      })
    }
  })

  return searchItems
}

let searchIndex = null

/**
 * Get the search index (creates it if not exists)
 */
export function getSearchIndex() {
  if (!searchIndex) {
    searchIndex = createSearchIndex()
  }
  return searchIndex
}

/**
 * Search for courses, modules, and lessons
 * @param {string} query - Search query
 * @param {number} maxResults - Maximum number of results to return
 * @returns {Array} Array of search results
 */
export function searchContent(query, maxResults = 10) {
  if (!query || query.trim().length < 2) {
    return []
  }

  const index = getSearchIndex()
  const searchTerm = query.toLowerCase().trim()
  const words = searchTerm.split(/\s+/)

  const results = index
    .map(item => {
      let score = 0

      // Exact title match gets highest score
      if (item.title.toLowerCase().includes(searchTerm)) {
        score += 100
      }

      // Title word matches
      words.forEach(word => {
        if (item.title.toLowerCase().includes(word)) {
          score += 50
        }
      })

      // Description matches
      if (item.description && item.description.toLowerCase().includes(searchTerm)) {
        score += 30
      }

      // Keyword matches
      item.keywords.forEach(keyword => {
        if (keyword.toLowerCase().includes(searchTerm)) {
          score += 40
        }
        words.forEach(word => {
          if (keyword.toLowerCase().includes(word)) {
            score += 20
          }
        })
      })

      // General text match
      if (item.searchText.includes(searchTerm)) {
        score += 10
      }

      words.forEach(word => {
        if (item.searchText.includes(word)) {
          score += 5
        }
      })

      return { ...item, score }
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxResults)

  return results
}

/**
 * Get popular/suggested searches based on available content
 */
export function getSuggestedSearches() {
  const suggestions = [
    'calculus',
    'algebra',
    'biology',
    'data mining',
    'coding',
    'physics',
    'geometry',
    'statistics'
  ]
  
  return suggestions
}