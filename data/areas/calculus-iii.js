const area = {
  slug: 'calculus-iii',
  title: 'Calculus III (Multivariable & Vector)',
  description: 'Functions of many variables, gradients, and integrals in space.',
  tags: ['Multivariable', 'Partial', 'Gradient', 'Multiple Integrals', 'Vector Fields'],
  color: '#f59e0b',
  theme: 'math',
  modules: [
    { slug: '3d-partial', title: 'Module 1: 3D & Partial Derivatives', description: 'Surfaces, limits, and partial derivatives.', lessonIndexes: [0, 1] },
    { slug: 'optimization-integrals', title: 'Module 2: Optimization & Multiple Integrals', description: 'Chain rule, optimization, double/triple integrals.', lessonIndexes: [2, 3] },
    { slug: 'vector-fields', title: 'Module 3: Vector Fields & Line Integrals', description: 'Vector fields, line integrals, and fundamental theorem.', lessonIndexes: [4, 5] }
  ],
  lessons: [
    {
      title: '3D Coordinate Systems & Surfaces',
      summary: 'Rectangular, cylindrical, spherical coordinates; quadric surfaces.',
      concept: 'Points in 3D: (x,y,z). Cylindrical: (r,θ,z) where x=r cos θ, y=r sin θ. Spherical: (ρ,θ,φ) where x=ρ sin φ cos θ, etc.',
      keywords: ['3D coordinates', 'cylindrical', 'spherical', 'quadric surfaces'],
      terms: {
        title: 'Quadric Surfaces',
        items: [
          { term: 'Ellipsoid', def: 'x²/a² + y²/b² + z²/c² = 1' },
          { term: 'Paraboloid', def: 'z = x²/a² + y²/b² (bowl shape)' },
          { term: 'Hyperboloid', def: 'x²/a² + y²/b² - z²/c² = 1 (saddle-like)' },
          { term: 'Cylinder', def: 'One variable missing (e.g., x² + y² = 1)' }
        ]
      },
      quiz: {
        question: 'In spherical coordinates, what does φ represent?',
        options: ['Angle from x-axis', 'Angle from z-axis', 'Distance from origin', 'Angle in xy-plane'],
        answerIndex: 1,
        hint: 'φ (phi) is the angle measured down from the positive z-axis.'
      }
    },
    {
      title: 'Partial Derivatives & Gradient',
      summary: 'Functions of several variables; partial derivatives and the gradient vector.',
      concept: 'For f(x,y): ∂f/∂x treats y as constant. Gradient ∇f = (∂f/∂x, ∂f/∂y) points in direction of steepest increase.',
      keywords: ['partial derivative', 'gradient', 'directional derivative', 'steepest increase'],
      flashcards: {
        title: 'Gradient Properties',
        cards: [
          { front: '∇f points in direction of', back: 'Steepest increase of f' },
          { front: '||∇f|| gives', back: 'Maximum rate of change of f' },
          { front: 'If ∇f = 0 at point', back: 'Critical point (potential max/min)' },
          { front: '∇f ⊥ level curve', back: 'Gradient is perpendicular to level sets' }
        ]
      },
      shortAnswer: {
        prompt: 'If f(x,y) = x² + y², find ∇f at (1,2).',
        expectedKeywords: ['(2x, 2y)', '(2, 4)'],
        sample: '∇f = (2x, 2y), so ∇f(1,2) = (2, 4).'
      }
    },
    {
      title: 'Chain Rule & Linearization',
      summary: 'Chain rule for multivariable functions; linear approximation.',
      concept: 'If z = f(x,y), x = x(t), y = y(t), then dz/dt = ∂z/∂x dx/dt + ∂z/∂y dy/dt. Linear approximation: L(x,y) = f(a,b) + ∇f(a,b)·(x-a, y-b).',
      keywords: ['multivariable chain rule', 'total derivative', 'linearization'],
      order: {
        title: 'Apply chain rule to z = x²y, x = cos t, y = sin t',
        items: ['Find ∂z/∂x and ∂z/∂y', 'Find dx/dt and dy/dt', 'Apply formula dz/dt = ∂z/∂x dx/dt + ∂z/∂y dy/dt', 'Simplify result'],
        solution: ['Find ∂z/∂x and ∂z/∂y', 'Find dx/dt and dy/dt', 'Apply formula dz/dt = ∂z/∂x dx/dt + ∂z/∂y dy/dt', 'Simplify result']
      },
      quiz: {
        question: 'The total derivative formula is used when:',
        options: ['f depends on one variable', 'Variables are independent', 'Variables depend on other variables', 'Finding critical points'],
        answerIndex: 2,
        hint: 'Chain rule applies when the independent variables are functions of other variables.'
      }
    },
    {
      title: 'Multiple Integrals',
      summary: 'Double and triple integrals; changing order of integration.',
      concept: '∫∫ f(x,y) dA gives volume under surface. Fubini\'s theorem: ∫∫ f dx dy = ∫ (∫ f dx) dy. Change order by sketching region.',
      keywords: ['double integral', 'triple integral', 'Fubini theorem', 'order of integration'],
      flow: {
        title: 'Evaluating Double Integrals',
        steps: [
          'Sketch the region of integration',
          'Determine limits for inner integral',
          'Determine limits for outer integral',
          'Integrate with respect to inner variable first',
          'Integrate the result with respect to outer variable'
        ]
      },
      quiz: {
        question: 'To change order of integration, you need to:',
        options: ['Use substitution', 'Sketch the region', 'Take partial derivatives', 'Use Green\'s theorem'],
        answerIndex: 1,
        hint: 'Understanding the geometric region helps determine new limits.'
      }
    },
    {
      title: 'Vector Fields & Line Integrals',
      summary: 'Vector fields F(x,y); work integrals along curves.',
      concept: 'Vector field F assigns vector to each point. Line integral ∫C F·dr measures work done by field along curve C. Parametrize curve: r(t).',
      keywords: ['vector field', 'line integral', 'work', 'parametrization'],
      categorize: {
        title: 'Types of Line Integrals',
        categories: ['Scalar Line Integral', 'Vector Line Integral'],
        items: ['∫C f ds (arc length)', '∫C F·dr (work)', '∫C f(x,y) ds', '∫C P dx + Q dy'],
        solution: {
          'Scalar Line Integral': ['∫C f ds (arc length)', '∫C f(x,y) ds'],
          'Vector Line Integral': ['∫C F·dr (work)', '∫C P dx + Q dy']
        }
      },
      shortAnswer: {
        prompt: 'What does ∫C F·dr represent physically?',
        expectedKeywords: ['work', 'force', 'displacement'],
        sample: 'The work done by force field F as an object moves along curve C.'
      }
    },
    {
      title: 'Green\'s Theorem (Intuitive)',
      summary: 'Relate line integrals around closed curves to double integrals over regions.',
      concept: 'Green\'s theorem: ∮C P dx + Q dy = ∬D (∂Q/∂x - ∂P/∂y) dA. Circulation around boundary equals "curl" inside region.',
      keywords: ['Green theorem', 'circulation', 'curl', 'closed curve'],
      flashcards: {
        title: 'Green\'s Theorem',
        cards: [
          { front: 'Green\'s Theorem Formula', back: '∮C P dx + Q dy = ∬D (∂Q/∂x - ∂P/∂y) dA' },
          { front: 'When can you apply Green\'s?', back: 'Simple closed curve, counterclockwise orientation' },
          { front: 'Physical meaning', back: 'Circulation = total curl (rotation) inside' },
          { front: '∂Q/∂x - ∂P/∂y is called', back: 'Scalar curl (2D curl)' }
        ]
      },
      quiz: {
        question: 'Green\'s theorem is useful because:',
        options: ['It eliminates parametrization', 'Line integral → double integral', 'It works in 3D', 'It finds critical points'],
        answerIndex: 1,
        hint: 'It converts potentially difficult line integrals to (often easier) double integrals.'
      }
    }
  ]
}

export default area