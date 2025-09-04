const area = {
  slug: 'optimization',
  title: 'Optimization & Linear Programming',
  description: 'Turn real problems into math and optimize them.',
  tags: ['Linear Programming', 'Feasible Region', 'Simplex', 'Duality', 'Integer Programming'],
  color: '#14b8a6',
  theme: 'math',
  modules: [
    { slug: 'modeling-geometry', title: 'Module 1: Modeling & Geometry', description: 'Formulate LPs and understand feasible regions.', lessonIndexes: [0, 1] },
    { slug: 'simplex-duality', title: 'Module 2: Simplex & Duality', description: 'Simplex algorithm basics and LP duality.', lessonIndexes: [2, 3] },
    { slug: 'applications', title: 'Module 3: Applications', description: 'Integer programming and real-world problems.', lessonIndexes: [4, 5] }
  ],
  lessons: [
    {
      title: 'Modeling Linear Programs',
      summary: 'Translate word problems into objective functions and constraints.',
      concept: 'Linear Program: Optimize linear objective subject to linear constraints. Standard form: max cᵀx subject to Ax ≤ b, x ≥ 0.',
      keywords: ['linear program', 'objective function', 'constraints', 'decision variables'],
      flow: {
        title: 'LP Modeling Steps',
        steps: [
          'Identify decision variables',
          'Write objective function to maximize/minimize',
          'Express all constraints as linear inequalities',
          'Add non-negativity constraints if needed',
          'Convert to standard form'
        ]
      },
      shortAnswer: {
        prompt: 'A factory makes chairs (profit $30) and tables (profit $50). Chairs need 2 hours, tables need 4 hours. 40 hours available. What\'s the objective function?',
        expectedKeywords: ['maximize', '30x + 50y'],
        sample: 'Maximize 30x + 50y where x = chairs, y = tables.'
      }
    },
    {
      title: 'Feasible Regions & Geometry',
      summary: 'Graph constraints; find vertices; understand LP geometry.',
      concept: 'Feasible region = intersection of constraint half-planes. Optimal solution occurs at vertex (corner point). Use corner point theorem.',
      keywords: ['feasible region', 'vertex', 'corner point', 'half-plane'],
      terms: {
        title: 'LP Geometry',
        items: [
          { term: 'Feasible Region', def: 'Set of all points satisfying all constraints' },
          { term: 'Vertex/Corner Point', def: 'Intersection of constraint boundaries' },
          { term: 'Optimal Solution', def: 'Point in feasible region maximizing/minimizing objective' },
          { term: 'Unbounded', def: 'Feasible region extends infinitely in some direction' }
        ]
      },
      quiz: {
        question: 'The optimal solution to an LP always occurs at:',
        options: ['Interior of feasible region', 'A vertex of feasible region', 'Midpoint of an edge', 'Origin'],
        answerIndex: 1,
        hint: 'Corner point theorem: optimum is at a vertex (if it exists).'
      }
    },
    {
      title: 'Simplex Method Basics',
      summary: 'Algorithm to move between vertices toward optimality.',
      concept: 'Start at vertex, check if optimal. If not, move to adjacent vertex with better objective value. Continue until optimal or unbounded.',
      keywords: ['simplex method', 'tableau', 'pivot', 'basic solution'],
      flashcards: {
        title: 'Simplex Terminology',
        cards: [
          { front: 'Basic Variables', back: 'Variables in current vertex solution (value > 0)' },
          { front: 'Non-basic Variables', back: 'Variables set to 0 in current solution' },
          { front: 'Pivot Operation', back: 'Move from one vertex to adjacent vertex' },
          { front: 'Optimality Test', back: 'Check if current solution can be improved' }
        ]
      },
      quiz: {
        question: 'Simplex method terminates when:',
        options: ['All variables are positive', 'Objective function is zero', 'No improving direction exists', 'Feasible region is bounded'],
        answerIndex: 2,
        hint: 'We stop when no adjacent vertex gives a better objective value.'
      }
    },
    {
      title: 'Duality & Sensitivity',
      summary: 'Every LP has a dual; shadow prices and sensitivity analysis.',
      concept: 'Primal LP has corresponding dual LP. Strong duality: optimal values are equal. Dual variables = shadow prices (marginal value of resources).',
      keywords: ['duality', 'shadow price', 'sensitivity analysis', 'complementary slackness'],
      categorize: {
        title: 'Primal vs Dual',
        categories: ['Primal Properties', 'Dual Properties'],
        items: ['Maximize objective', 'Minimize objective', 'n variables, m constraints', 'm variables, n constraints', '≤ constraints', '≥ constraints'],
        solution: {
          'Primal Properties': ['Maximize objective', 'n variables, m constraints', '≤ constraints'],
          'Dual Properties': ['Minimize objective', 'm variables, n constraints', '≥ constraints']
        }
      },
      shortAnswer: {
        prompt: 'What does a shadow price of $5 for a resource constraint mean?',
        expectedKeywords: ['increase', 'objective', '$5'],
        sample: 'Increasing that resource by 1 unit would increase the optimal objective value by $5.'
      }
    },
    {
      title: 'Integer Programming Intro',
      summary: 'When variables must be integers; branch-and-bound approach.',
      concept: 'Integer LP (ILP): some/all variables must be integers. Much harder than LP. Use LP relaxation + branch-and-bound for exact solutions.',
      keywords: ['integer programming', 'branch and bound', 'LP relaxation', 'binary variables'],
      order: {
        title: 'Branch-and-Bound Steps',
        items: ['Branch on fractional variable', 'Solve LP relaxation', 'Check if solution is integer', 'Bound: compare to best known integer solution', 'Repeat until all nodes processed'],
        solution: ['Solve LP relaxation', 'Check if solution is integer', 'Bound: compare to best known integer solution', 'Branch on fractional variable', 'Repeat until all nodes processed']
      },
      quiz: {
        question: 'LP relaxation of an ILP means:',
        options: ['Remove all constraints', 'Allow fractional variables', 'Add more constraints', 'Change objective function'],
        answerIndex: 1,
        hint: 'Relax the integer requirement - allow variables to be continuous.'
      }
    },
    {
      title: 'Applications: Scheduling, Diet, & Flows',
      summary: 'Real-world optimization problems and modeling techniques.',
      concept: 'Common applications: production scheduling, diet problems, transportation, assignment, network flows. Each has characteristic structure and interpretation.',
      keywords: ['scheduling', 'diet problem', 'transportation', 'assignment', 'network flow'],
      terms: {
        title: 'Classic LP Applications',
        items: [
          { term: 'Diet Problem', def: 'Minimize cost while meeting nutritional requirements' },
          { term: 'Transportation Problem', def: 'Ship goods from suppliers to customers at minimum cost' },
          { term: 'Assignment Problem', def: 'Assign workers to tasks for optimal total performance' },
          { term: 'Network Flow', def: 'Move flow through network respecting capacity constraints' }
        ]
      },
      categorize: {
        title: 'Problem Types',
        categories: ['Minimize Cost', 'Maximize Profit', 'Assignment/Matching'],
        items: ['Diet optimization', 'Production planning', 'Worker-task assignment', 'Transportation routing', 'Portfolio optimization'],
        solution: {
          'Minimize Cost': ['Diet optimization', 'Transportation routing'],
          'Maximize Profit': ['Production planning', 'Portfolio optimization'],
          'Assignment/Matching': ['Worker-task assignment']
        }
      }
    }
  ]
}

export default area