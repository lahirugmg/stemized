// Group definitions to logically cluster related focus areas while keeping
// individual areas visible on the home page.
// Each group lists the ordered slugs of the areas it contains so we can show a recommended path.

export const groups = [
  {
    slug: 'math',
    title: 'Math Learning Path',
    shortTitle: 'Math',
    description: 'A structured path from foundations to calculus. Pick any course to start practicing interactively.',
    color: '#3b82f6',
  areas: [
      'math-foundations',
      'pre-algebra',
      'algebra-made-simple',
      'geometry-basics',
      'algebra-2',
      'trigonometry',
      'precalculus',
      'calculus-1',
      'calculus-2',
      'probability-statistics'
    ]
  },
  {
    slug: 'life-sciences',
    title: 'Life Sciences Path', 
    shortTitle: 'Bio',
    description: 'Explore living organisms from basic biology to human anatomy.',
    color: '#10b981',
    areas: ['biology-basics', 'human-body-kids']
  },
  {
    slug: 'technology',
    title: 'Technology & Data Path',
    shortTitle: 'Tech',
    description: 'Master programming, data analysis, and modern AI technologies.',
    color: '#8b5cf6',
    areas: ['coding-basics', 'data-mining', 'llm-engineering']
  },
  {
    slug: 'physical-sciences',
    title: 'Physical Sciences Path',
    shortTitle: 'Physics',
    description: 'Understand the fundamental laws governing our physical world.',
    color: '#06b6d4',
    areas: ['physics-basics']
  }
]

export function getGroupBySlug(slug) {
  return groups.find(g => g.slug === slug)
}

export function getGroupsForArea(areaSlug) {
  return groups.filter(g => g.areas.includes(areaSlug))
}
