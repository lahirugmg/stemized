const area = {
  slug: 'differential-equations',
  title: 'Differential Equations',
  description: 'Model change—solve first-order, linear, and systems.',
  tags: ['ODE', 'First-order', 'Linear', 'Systems', 'Laplace'],
  color: '#8b5cf6',
  theme: 'math',
  modules: [
    { slug: 'first-order', title: 'Module 1: First-Order ODEs', description: 'Slope fields, separable, and linear equations.', lessonIndexes: [0, 1] },
    { slug: 'second-order', title: 'Module 2: Second-Order Linear', description: 'Homogeneous and non-homogeneous equations.', lessonIndexes: [2, 3] },
    { slug: 'systems-laplace', title: 'Module 3: Systems & Laplace', description: 'Systems of ODEs and Laplace transforms.', lessonIndexes: [4, 5] }
  ],
  lessons: [
    {
      title: 'Slope Fields & First-Order ODEs',
      summary: 'Visualize solutions using slope fields; classify first-order equations.',
      concept: 'dy/dx = f(x,y) gives slope at each point (x,y). Slope field shows these slopes. Solutions are curves tangent to field.',
      keywords: ['slope field', 'direction field', 'solution curve', 'initial condition'],
      terms: {
        title: 'ODE Classification',
        items: [
          { term: 'Order', def: 'Highest derivative present in equation' },
          { term: 'Linear', def: 'Equation linear in y and its derivatives' },
          { term: 'Homogeneous', def: 'Right-hand side is zero' },
          { term: 'Initial Value Problem', def: 'ODE + initial condition y(x₀) = y₀' }
        ]
      },
      quiz: {
        question: 'A slope field for dy/dx = y shows:',
        options: ['Horizontal lines everywhere', 'Vertical lines at y = 0', 'Steeper slopes as |y| increases', 'Random slopes'],
        answerIndex: 2,
        hint: 'When y is large (positive or negative), dy/dx = y is also large in magnitude.'
      }
    },
    {
      title: 'Separable & Linear First-Order',
      summary: 'Solve dy/dx = g(x)h(y) and dy/dx + P(x)y = Q(x).',
      concept: 'Separable: dy/h(y) = g(x)dx, then integrate both sides. Linear: use integrating factor μ(x) = e^(∫P(x)dx).',
      keywords: ['separable', 'linear first-order', 'integrating factor'],
      flashcards: {
        title: 'Solution Methods',
        cards: [
          { front: 'Separable form', back: 'dy/dx = g(x)h(y)' },
          { front: 'Linear first-order form', back: 'dy/dx + P(x)y = Q(x)' },
          { front: 'Integrating factor', back: 'μ(x) = e^(∫P(x)dx)' },
          { front: 'After multiplying by μ', back: 'd/dx[μ(x)y] = μ(x)Q(x)' }
        ]
      },
      shortAnswer: {
        prompt: 'Solve dy/dx = xy by separation.',
        expectedKeywords: ['dy/y = x dx', 'ln|y| = x²/2 + C', 'y = Ae^(x²/2)'],
        sample: 'Separate: dy/y = x dx. Integrate: ln|y| = x²/2 + C. So y = Ae^(x²/2).'
      }
    },
    {
      title: 'Exact & Integrating Factors',
      summary: 'Solve M(x,y)dx + N(x,y)dy = 0 when exact or make it exact.',
      concept: 'Exact if ∂M/∂y = ∂N/∂x. Then find F such that ∂F/∂x = M, ∂F/∂y = N. Solution: F(x,y) = C.',
      keywords: ['exact equation', 'integrating factor', 'exactness condition'],
      order: {
        title: 'Check and solve exact equation',
        items: ['Verify ∂M/∂y = ∂N/∂x', 'Find function F with ∂F/∂x = M', 'Check that ∂F/∂y = N', 'Write solution F(x,y) = C'],
        solution: ['Verify ∂M/∂y = ∂N/∂x', 'Find function F with ∂F/∂x = M', 'Check that ∂F/∂y = N', 'Write solution F(x,y) = C']
      },
      quiz: {
        question: 'An equation is exact if:',
        options: ['It\'s separable', '∂M/∂y = ∂N/∂x', 'It\'s linear', 'M = N'],
        answerIndex: 1,
        hint: 'The mixed partials must be equal for the equation to be exact.'
      }
    },
    {
      title: 'Second-Order Linear Homogeneous',
      summary: 'Solve ay\'\' + by\' + cy = 0 using characteristic equation.',
      concept: 'Try y = e^(rx). Get characteristic equation ar² + br + c = 0. Solutions depend on discriminant: real distinct, repeated, or complex roots.',
      keywords: ['characteristic equation', 'homogeneous', 'discriminant', 'fundamental solution'],
      categorize: {
        title: 'Solution Types by Discriminant',
        categories: ['b² - 4ac > 0', 'b² - 4ac = 0', 'b² - 4ac < 0'],
        items: ['y = c₁e^(r₁x) + c₂e^(r₂x)', 'y = (c₁ + c₂x)e^(rx)', 'y = e^(αx)(c₁cos(βx) + c₂sin(βx))'],
        solution: {
          'b² - 4ac > 0': ['y = c₁e^(r₁x) + c₂e^(r₂x)'],
          'b² - 4ac = 0': ['y = (c₁ + c₂x)e^(rx)'],
          'b² - 4ac < 0': ['y = e^(αx)(c₁cos(βx) + c₂sin(βx))']
        }
      },
      quiz: {
        question: 'For y\'\' - 4y\' + 4y = 0, the characteristic equation is:',
        options: ['r² - 4r + 4 = 0', 'r² + 4r + 4 = 0', 'r - 4 = 0', '4r² - r + 1 = 0'],
        answerIndex: 0,
        hint: 'Substitute y = e^(rx) into the differential equation.'
      }
    },
    {
      title: 'Systems & Phase Portraits',
      summary: 'Solve systems x\' = Ax; interpret eigenvalues geometrically.',
      concept: 'System x\' = Ax has solutions involving e^(λt) where λ are eigenvalues of A. Phase portrait shows solution trajectories in the phase plane.',
      keywords: ['system of ODEs', 'phase portrait', 'eigenvalue', 'equilibrium'],
      flow: {
        title: 'Analyzing Linear System x\' = Ax',
        steps: [
          'Find eigenvalues λ of matrix A',
          'Find corresponding eigenvectors v',
          'General solution: x = c₁e^(λ₁t)v₁ + c₂e^(λ₂t)v₂',
          'Classify equilibrium by eigenvalue signs',
          'Sketch phase portrait'
        ]
      },
      terms: {
        title: 'Equilibrium Types',
        items: [
          { term: 'Node (Stable)', def: 'Both eigenvalues negative (real)' },
          { term: 'Node (Unstable)', def: 'Both eigenvalues positive (real)' },
          { term: 'Saddle', def: 'One positive, one negative eigenvalue' },
          { term: 'Spiral/Focus', def: 'Complex eigenvalues (real part determines stability)' }
        ]
      }
    },
    {
      title: 'Laplace Transforms (Introduction)',
      summary: 'Transform differential equations to algebraic equations.',
      concept: 'Laplace transform: L{f(t)} = F(s) = ∫₀^∞ f(t)e^(-st)dt. Converts derivatives to multiplication: L{f\'(t)} = sF(s) - f(0).',
      keywords: ['Laplace transform', 'inverse transform', 's-domain', 'algebraic'],
      flashcards: {
        title: 'Basic Laplace Transforms',
        cards: [
          { front: 'L{1}', back: '1/s' },
          { front: 'L{t}', back: '1/s²' },
          { front: 'L{e^(at)}', back: '1/(s-a)' },
          { front: 'L{sin(ωt)}', back: 'ω/(s²+ω²)' },
          { front: 'L{cos(ωt)}', back: 's/(s²+ω²)' },
          { front: 'L{f\'(t)}', back: 'sF(s) - f(0)' }
        ]
      },
      shortAnswer: {
        prompt: 'Why is Laplace transform useful for solving ODEs?',
        expectedKeywords: ['algebraic', 'derivatives', 'initial conditions'],
        sample: 'It converts differential equations into algebraic equations in the s-domain, automatically incorporating initial conditions.'
      }
    }
  ]
}

export default area