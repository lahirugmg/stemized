const area = {
  slug: 'trigonometry',
  title: 'Trigonometry',
  description: 'Angles, unit circle, trig functions and graphs, identities, and solving triangles.',
  tags: ['Unit Circle','Sine','Cosine','Identities','Triangles'],
  color: '#14b8a6',
  theme: 'math',
  modules: [
    { slug: 'angles-circle', title: 'Module 1: Angles & Unit Circle', description: 'Radians, degrees, and unit circle values.', lessonIndexes: [0,1] },
    { slug: 'functions-graphs', title: 'Module 2: Trig Functions & Graphs', description: 'Sine, cosine, tangent and transformations.', lessonIndexes: [2,3] },
    { slug: 'identities-triangles', title: 'Module 3: Identities & Triangles', description: 'Fundamental identities and Law of Sines/Cosines.', lessonIndexes: [4,5] }
  ],
  lessons: [
    {
      title: 'Radians and Degrees',
      summary: 'Convert between degrees and radians.',
      concept: 'π radians = 180°. Multiply by π/180 to go deg→rad, and 180/π for rad→deg.',
      keywords: ['radian','degree','π'],
      order: { title: 'Convert 150° to radians', items: ['Multiply by π','Divide by 180','Simplify fraction'], solution: ['Multiply by π','Divide by 180','Simplify fraction'] },
      quiz: { question: 'Convert π/3 to degrees', options: ['30°','45°','60°','90°'], answerIndex: 2, hint: 'Multiply by 180/π.' }
    },
    {
      title: 'Unit Circle Values',
      summary: 'Memorize key sine and cosine values.',
      concept: 'On the unit circle, cos θ is x and sin θ is y. Know special angles: 0, π/6, π/4, π/3, π/2, etc.',
      keywords: ['unit circle','sin','cos'],
      flashcards: { title: 'Special Angles', cards: [ { front: 'sin(π/6)', back: '1/2' }, { front: 'cos(π/3)', back: '1/2' }, { front: 'sin(π/4)', back: '√2/2' } ] },
      categorize: { title: 'Quadrant Signs', categories: ['sin > 0','cos > 0'], items: ['Q1','Q2','Q3','Q4'], solution: { 'sin > 0':['Q1','Q2'], 'cos > 0':['Q1','Q4'] } }
    },
    {
      title: 'Trig Functions & Graphs',
      summary: 'Amplitude, period, phase shift, vertical shift.',
      concept: 'y = A sin(Bx − C) + D has amplitude |A| and period 2π/|B|. Horizontal shift C/B and vertical shift D.',
      keywords: ['amplitude','period','phase shift'],
      shortAnswer: { prompt: 'What is the period of y = sin(2x)?', expectedKeywords: ['π'], sample: '2π/2 = π.' },
      flow: { title: 'Graphing Steps', steps: ['Find A, B, C, D','Compute period','Plot key points'] }
    },
    {
      title: 'Tangent and Asymptotes',
      summary: 'Understand tan graph and vertical asymptotes.',
      concept: 'tan x = sin x / cos x. Asymptotes at x = π/2 + kπ where cos x = 0.',
      keywords: ['tangent','asymptote'],
      quiz: { question: 'First positive asymptote for tan x?', options: ['π/3','π/2','π','3π/2'], answerIndex: 1, hint: 'cos x = 0.' }
    },
    {
      title: 'Fundamental Identities',
      summary: 'Use Pythagorean and co-function identities.',
      concept: 'sin²x + cos²x = 1; 1 + tan²x = sec²x; 1 + cot²x = csc²x. Co-function: sin(π/2 − x) = cos x.',
      keywords: ['identities','pythagorean','co-function'],
      sorter: { prompt: 'Match identity type', items: ['sin²x + cos²x = 1','1 + tan²x = sec²x','sin(π/2 − x) = cos x'], solution: { 'Pythagorean':['sin²x + cos²x = 1','1 + tan²x = sec²x'], 'Co‑function':['sin(π/2 − x) = cos x'] } }
    },
    {
      title: 'Law of Sines & Cosines',
      summary: 'Solve non‑right triangles.',
      concept: 'Law of Sines: a/sin A = b/sin B = c/sin C. Law of Cosines: c² = a² + b² − 2ab cos C.',
      keywords: ['law of sines','law of cosines'],
      order: { title: 'Solve an AAS triangle', items: ['Use Law of Sines','Find missing angle','Compute side using ratio'], solution: ['Find missing angle','Use Law of Sines','Compute side using ratio'] }
    }
  ]
}

export default area

