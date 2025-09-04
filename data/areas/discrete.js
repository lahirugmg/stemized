const area = {
  slug: 'discrete',
  title: 'Discrete Mathematics',
  description: 'The math of finite structures for CS and data.',
  tags: ['Functions', 'Counting', 'Recurrence', 'Modular', 'Graphs'],
  color: '#06b6d4',
  theme: 'math',
  modules: [
    { slug: 'functions-relations', title: 'Module 1: Functions & Relations', description: 'Injective, surjective, bijective functions.', lessonIndexes: [0, 1] },
    { slug: 'counting-recurrence', title: 'Module 2: Counting & Recurrence', description: 'Combinatorics and recurrence relations.', lessonIndexes: [2, 3] },
    { slug: 'modular-graphs', title: 'Module 3: Modular Arithmetic & Graphs', description: 'Congruences and basic graph theory.', lessonIndexes: [4, 5] }
  ],
  lessons: [
    {
      title: 'Functions & Relations',
      summary: 'Domain, codomain, range; injective, surjective, bijective properties.',
      concept: 'A function f: A → B assigns each element of A to exactly one element of B. Injective = one-to-one, surjective = onto, bijective = both.',
      keywords: ['function', 'injective', 'surjective', 'bijective', 'domain', 'range'],
      categorize: {
        title: 'Function Properties',
        categories: ['Injective (One-to-one)', 'Surjective (Onto)', 'Neither'],
        items: ['f(x) = x²', 'f(x) = 2x', 'f(x) = sin(x)', 'f(x) = eˣ'],
        solution: {
          'Injective (One-to-one)': ['f(x) = 2x', 'f(x) = eˣ'],
          'Surjective (Onto)': ['f(x) = x² (if codomain is [0,∞))', 'f(x) = sin(x) (if codomain is [-1,1])'],
          'Neither': ['f(x) = x² (if codomain is ℝ)', 'f(x) = sin(x) (if codomain is ℝ)']
        }
      },
      quiz: {
        question: 'A bijective function has an inverse because it is:',
        options: ['Only injective', 'Only surjective', 'Both injective and surjective', 'Neither'],
        answerIndex: 2,
        hint: 'Bijective means both one-to-one and onto.'
      }
    },
    {
      title: 'Counting Principles',
      summary: 'Addition and multiplication principles; permutations and combinations.',
      concept: 'Addition principle: |A ∪ B| = |A| + |B| - |A ∩ B|. Multiplication principle: |A × B| = |A| × |B|. P(n,r) = n!/(n-r)!, C(n,r) = n!/(r!(n-r)!).',
      keywords: ['counting', 'permutation', 'combination', 'factorial'],
      flashcards: {
        title: 'Counting Formulas',
        cards: [
          { front: 'P(n,r)', back: 'n!/(n-r)! - permutations of r from n' },
          { front: 'C(n,r)', back: 'n!/(r!(n-r)!) - combinations of r from n' },
          { front: 'When use P(n,r)?', back: 'When order matters' },
          { front: 'When use C(n,r)?', back: 'When order doesn\'t matter' }
        ]
      },
      quiz: {
        question: 'How many ways to arrange 5 books on a shelf?',
        options: ['5', '25', '120', '3125'],
        answerIndex: 2,
        hint: 'This is 5! because order matters and all books are used.'
      }
    },
    {
      title: 'Recurrence Relations',
      summary: 'Define sequences recursively; solve linear recurrences.',
      concept: 'A recurrence relation defines each term using previous terms. For linear homogeneous: aₙ = c₁aₙ₋₁ + c₂aₙ₋₂. Solve using characteristic equation.',
      keywords: ['recurrence', 'recursive', 'characteristic equation', 'initial conditions'],
      order: {
        title: 'Solve aₙ = 3aₙ₋₁ - 2aₙ₋₂',
        items: ['Find characteristic roots', 'Write general solution', 'Set up characteristic equation r² - 3r + 2 = 0', 'Apply initial conditions'],
        solution: ['Set up characteristic equation r² - 3r + 2 = 0', 'Find characteristic roots', 'Write general solution', 'Apply initial conditions']
      },
      shortAnswer: {
        prompt: 'What is the Fibonacci recurrence relation?',
        expectedKeywords: ['Fₙ = Fₙ₋₁ + Fₙ₋₂'],
        sample: 'Fₙ = Fₙ₋₁ + Fₙ₋₂ with initial conditions F₀ = 0, F₁ = 1.'
      }
    },
    {
      title: 'Modular Arithmetic',
      summary: 'Congruences, modular operations, and applications.',
      concept: 'a ≡ b (mod n) means n divides (a - b). Operations: (a + b) mod n, (a × b) mod n. Useful for divisibility, remainders, and cryptography.',
      keywords: ['congruence', 'modulo', 'remainder', 'divisibility'],
      flashcards: {
        title: 'Modular Arithmetic',
        cards: [
          { front: '17 ≡ ? (mod 5)', back: '2' },
          { front: '-3 ≡ ? (mod 7)', back: '4' },
          { front: '(a + b) mod n', back: '((a mod n) + (b mod n)) mod n' },
          { front: 'When is a ≡ b (mod n)?', back: 'When n divides (a - b)' }
        ]
      },
      quiz: {
        question: 'What is 23 × 47 (mod 10)?',
        options: ['1', '21', '81', '1081'],
        answerIndex: 0,
        hint: 'Only the last digit matters for mod 10: 3 × 7 = 21 ≡ 1 (mod 10).'
      }
    },
    {
      title: 'Graph Basics',
      summary: 'Vertices, edges, paths, cycles; graph representations.',
      concept: 'A graph G = (V, E) has vertices V and edges E. Degree of vertex = number of edges. Path = sequence of connected vertices. Cycle = closed path.',
      keywords: ['graph', 'vertex', 'edge', 'degree', 'path', 'cycle'],
      terms: {
        title: 'Graph Terminology',
        items: [
          { term: 'Simple Graph', def: 'No loops or multiple edges between vertices' },
          { term: 'Connected Graph', def: 'Path exists between every pair of vertices' },
          { term: 'Complete Graph Kₙ', def: 'Every vertex connected to every other vertex' },
          { term: 'Bipartite Graph', def: 'Vertices can be colored with 2 colors, no adjacent same color' }
        ]
      },
      quiz: {
        question: 'In a complete graph K₅, what is the degree of each vertex?',
        options: ['3', '4', '5', '10'],
        answerIndex: 1,
        hint: 'Each vertex connects to all other vertices. K₅ has 5 vertices total.'
      }
    },
    {
      title: 'Trees',
      summary: 'Connected acyclic graphs; spanning trees and applications.',
      concept: 'A tree is a connected graph with no cycles. Properties: n vertices, n-1 edges, unique path between any two vertices. Spanning tree includes all vertices.',
      keywords: ['tree', 'acyclic', 'spanning tree', 'forest'],
      flow: {
        title: 'Tree Properties',
        steps: [
          'Connected (path between any two vertices)',
          'Acyclic (no cycles)',
          'n vertices ⟺ n-1 edges',
          'Unique path between any two vertices',
          'Removing any edge disconnects the graph'
        ]
      },
      quiz: {
        question: 'How many edges does a tree with 10 vertices have?',
        options: ['9', '10', '45', '90'],
        answerIndex: 0,
        hint: 'Trees always have n-1 edges for n vertices.'
      }
    }
  ]
}

export default area