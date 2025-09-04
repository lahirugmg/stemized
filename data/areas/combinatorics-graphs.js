const area = {
  slug: 'combinatorics-graphs',
  title: 'Combinatorics & Graph Theory',
  description: 'Count cleverly; connect with graphs and networks.',
  tags: ['Permutations', 'Combinations', 'Pigeonhole', 'Graphs', 'Networks'],
  color: '#10b981',
  theme: 'math',
  modules: [
    { slug: 'advanced-counting', title: 'Module 1: Advanced Counting', description: 'Permutations, combinations, and binomial theorem.', lessonIndexes: [0, 1] },
    { slug: 'principles-invariants', title: 'Module 2: Principles & Invariants', description: 'Pigeonhole principle and invariant arguments.', lessonIndexes: [2, 3] },
    { slug: 'graph-algorithms', title: 'Module 3: Graph Algorithms', description: 'Paths, cycles, and graph connectivity.', lessonIndexes: [4, 5] }
  ],
  lessons: [
    {
      title: 'Permutations & Combinations',
      summary: 'Advanced counting with restrictions and repetition.',
      concept: 'Handle restrictions using cases or complementary counting. Circular permutations: (n-1)!. With repetition: multinomial coefficients.',
      keywords: ['permutation', 'combination', 'restriction', 'repetition', 'circular'],
      flashcards: {
        title: 'Counting Scenarios',
        cards: [
          { front: 'Circular arrangements of n objects', back: '(n-1)!' },
          { front: 'Arrangements with repetition', back: 'n!/(n₁!n₂!...nₖ!)' },
          { front: 'Stars and bars', back: 'Distributing identical objects to distinct boxes' },
          { front: 'Inclusion-exclusion', back: '|A ∪ B| = |A| + |B| - |A ∩ B|' }
        ]
      },
      quiz: {
        question: 'How many ways to arrange LETTER?',
        options: ['720', '360', '180', '120'],
        answerIndex: 2,
        hint: 'Two T\'s and two E\'s make this 6!/(2!×2!) = 180.'
      }
    },
    {
      title: 'Binomial Theorem',
      summary: 'Expand (a + b)ⁿ using binomial coefficients.',
      concept: '(a + b)ⁿ = Σ C(n,k) aⁿ⁻ᵏ bᵏ where C(n,k) = n!/(k!(n-k)!). Pascal\'s triangle gives coefficients.',
      keywords: ['binomial theorem', 'Pascal triangle', 'expansion', 'coefficient'],
      order: {
        title: 'Expand (x + 2)³',
        items: ['Apply binomial theorem', 'C(3,0)x³ + C(3,1)x²(2) + C(3,2)x(2²) + C(3,3)(2³)', 'x³ + 6x² + 12x + 8', 'Calculate each binomial coefficient'],
        solution: ['Apply binomial theorem', 'Calculate each binomial coefficient', 'C(3,0)x³ + C(3,1)x²(2) + C(3,2)x(2²) + C(3,3)(2³)', 'x³ + 6x² + 12x + 8']
      },
      shortAnswer: {
        prompt: 'What is the coefficient of x⁵ in (x + 1)⁷?',
        expectedKeywords: ['C(7,5)', '21'],
        sample: 'The coefficient is C(7,5) = 7!/(5!2!) = 21.'
      }
    },
    {
      title: 'Pigeonhole Principle',
      summary: 'If n+1 objects go into n boxes, at least one box has 2+ objects.',
      concept: 'Pigeonhole: if you have more objects than containers, some container must have multiple objects. Generalized: ⌈n/k⌉ objects in some box.',
      keywords: ['pigeonhole', 'principle', 'boxes', 'objects'],
      terms: {
        title: 'Pigeonhole Applications',
        items: [
          { term: 'Birthday Paradox', def: 'Among 23 people, 2 likely share birthday' },
          { term: 'Handshake Lemma', def: 'In any group, even number have odd degree' },
          { term: 'Ramsey Theory', def: 'Complete disorder is impossible in large systems' },
          { term: 'Dirichlet Principle', def: 'Another name for pigeonhole principle' }
        ]
      },
      quiz: {
        question: 'Among 13 people, how many must have birthdays in the same month?',
        options: ['At least 2', 'At least 3', 'Exactly 2', 'Cannot determine'],
        answerIndex: 0,
        hint: '13 people, 12 months: by pigeonhole principle, at least one month has 2+ people.'
      }
    },
    {
      title: 'Invariants',
      summary: 'Quantities that don\'t change; use them to prove impossibility.',
      concept: 'An invariant is a quantity preserved by allowed operations. If start and end states have different invariant values, the transformation is impossible.',
      keywords: ['invariant', 'preserved', 'impossibility', 'parity'],
      flow: {
        title: 'Using Invariants',
        steps: [
          'Identify what operations are allowed',
          'Find a quantity that doesn\'t change under operations',
          'Calculate invariant for initial state',
          'Calculate invariant for desired final state',
          'If different, transformation is impossible'
        ]
      },
      shortAnswer: {
        prompt: 'What invariant shows a 3×3 grid with opposite corners removed can\'t be tiled by dominoes?',
        expectedKeywords: ['color', 'parity', 'checkerboard'],
        sample: 'Color the grid like a checkerboard. Removing opposite corners removes 2 squares of same color, but each domino covers 1 black + 1 white.'
      }
    },
    {
      title: 'Graph Connectivity & Paths',
      summary: 'Connected components, shortest paths, and graph traversal.',
      concept: 'Connected graph has path between any two vertices. Component = maximal connected subgraph. BFS finds shortest paths; DFS explores deeply.',
      keywords: ['connectivity', 'component', 'path', 'BFS', 'DFS'],
      categorize: {
        title: 'Graph Properties',
        categories: ['Always Connected', 'May Be Disconnected', 'Always Disconnected'],
        items: ['Complete graph Kₙ', 'Tree', 'Cycle', 'Random graph', 'Star graph'],
        solution: {
          'Always Connected': ['Complete graph Kₙ', 'Tree', 'Cycle', 'Star graph'],
          'May Be Disconnected': ['Random graph'],
          'Always Disconnected': []
        }
      },
      quiz: {
        question: 'What algorithm finds shortest path in unweighted graphs?',
        options: ['DFS', 'BFS', 'Dijkstra', 'Floyd-Warshall'],
        answerIndex: 1,
        hint: 'Breadth-first search explores nodes level by level, guaranteeing shortest path first.'
      }
    },
    {
      title: 'Euler & Hamilton Paths',
      summary: 'Paths that use every edge once vs. paths that visit every vertex once.',
      concept: 'Euler path uses each edge exactly once. Exists iff graph has ≤2 odd-degree vertices. Hamilton path visits each vertex exactly once - no simple test.',
      keywords: ['Euler path', 'Hamilton path', 'degree', 'NP-complete'],
      flashcards: {
        title: 'Path Types',
        cards: [
          { front: 'Euler Path', back: 'Uses every edge exactly once' },
          { front: 'Euler Circuit', back: 'Euler path that returns to start' },
          { front: 'Hamilton Path', back: 'Visits every vertex exactly once' },
          { front: 'Hamilton Circuit', back: 'Hamilton path that returns to start' }
        ]
      },
      quiz: {
        question: 'A graph has an Euler circuit iff:',
        options: ['All vertices have even degree', 'All vertices have odd degree', 'Exactly 2 vertices have odd degree', 'It\'s complete'],
        answerIndex: 0,
        hint: 'Euler circuit requires returning to start, so all vertices need even degree.'
      }
    }
  ]
}

export default area