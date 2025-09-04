const area = {
  slug: 'numerical-methods',
  title: 'Numerical Methods',
  description: 'When exact answers fail—stable, efficient approximations.',
  tags: ['Root Finding', 'Integration', 'Linear Systems', 'Interpolation', 'Error Analysis'],
  color: '#dc2626',
  theme: 'math',
  modules: [
    { slug: 'root-integration', title: 'Module 1: Root Finding & Integration', description: 'Newton\'s method, bisection, numerical integration.', lessonIndexes: [0, 1] },
    { slug: 'linear-interpolation', title: 'Module 2: Linear Systems & Interpolation', description: 'LU decomposition, QR, polynomial interpolation.', lessonIndexes: [2, 3] },
    { slug: 'error-stability', title: 'Module 3: Error Analysis & Stability', description: 'Understanding and controlling numerical errors.', lessonIndexes: [4, 5] }
  ],
  lessons: [
    {
      title: 'Root Finding: Bisection & Newton',
      summary: 'Find zeros of f(x) = 0 using bisection method and Newton\'s method.',
      concept: 'Bisection: bracket root in [a,b], repeatedly halve interval. Newton: x_{n+1} = x_n - f(x_n)/f\'(x_n). Quadratic convergence when it works.',
      keywords: ['root finding', 'bisection method', 'Newton method', 'convergence'],
      flashcards: {
        title: 'Root Finding Methods',
        cards: [
          { front: 'Bisection convergence', back: 'Linear (halves error each iteration)' },
          { front: 'Newton convergence', back: 'Quadratic (doubles significant digits)' },
          { front: 'Bisection requirement', back: 'f(a) and f(b) have opposite signs' },
          { front: 'Newton requirement', back: 'f\'(x) exists and f\'(x) ≠ 0' }
        ]
      },
      quiz: {
        question: 'Newton\'s method can fail when:',
        options: ['f\'(x) = 0 at some point', 'f(x) is continuous', 'Initial guess is good', 'Root is simple'],
        answerIndex: 0,
        hint: 'Division by zero occurs when f\'(x) = 0, making the method undefined.'
      }
    },
    {
      title: 'Numerical Integration',
      summary: 'Approximate ∫f(x)dx using trapezoid rule, Simpson\'s rule.',
      concept: 'Trapezoid: approximate by trapezoids, error O(h³). Simpson\'s: use parabolas, error O(h⁵). Higher order methods give better accuracy.',
      keywords: ['numerical integration', 'trapezoid rule', 'Simpson rule', 'quadrature'],
      order: {
        title: 'Apply Simpson\'s Rule to ∫₀² f(x)dx with n=4',
        items: ['Divide [0,2] into 4 equal subintervals', 'Calculate h = (b-a)/n = 0.5', 'Evaluate f at x₀, x₁, x₂, x₃, x₄', 'Apply formula: (h/3)[f₀ + 4f₁ + 2f₂ + 4f₃ + f₄]'],
        solution: ['Calculate h = (b-a)/n = 0.5', 'Divide [0,2] into 4 equal subintervals', 'Evaluate f at x₀, x₁, x₂, x₃, x₄', 'Apply formula: (h/3)[f₀ + 4f₁ + 2f₂ + 4f₃ + f₄]']
      },
      shortAnswer: {
        prompt: 'Why is Simpson\'s rule more accurate than trapezoid rule?',
        expectedKeywords: ['parabolas', 'higher order', 'error O(h⁵)'],
        sample: 'Simpson\'s uses parabolic approximations instead of linear, giving error O(h⁵) vs O(h³).'
      }
    },
    {
      title: 'Linear Systems: LU Decomposition',
      summary: 'Solve Ax = b by factoring A = LU where L is lower, U is upper triangular.',
      concept: 'Factor A = LU using Gaussian elimination. Solve Ly = b (forward substitution), then Ux = y (backward substitution).',
      keywords: ['LU decomposition', 'forward substitution', 'backward substitution', 'factorization'],
      flow: {
        title: 'Solving Ax = b with LU',
        steps: [
          'Factor A = LU (once for multiple right-hand sides)',
          'Forward substitution: solve Ly = b for y',
          'Backward substitution: solve Ux = y for x',
          'x is the solution to original system',
          'Complexity: O(n³) for factorization, O(n²) for each solve'
        ]
      },
      quiz: {
        question: 'Main advantage of LU decomposition:',
        options: ['Works for any matrix', 'Exact solution always', 'Efficient for multiple right-hand sides', 'No roundoff error'],
        answerIndex: 2,
        hint: 'Factor once, then quickly solve for different b vectors.'
      }
    },
    {
      title: 'Interpolation & Splines',
      summary: 'Fit polynomials through data points; piecewise cubic splines.',
      concept: 'Lagrange interpolation: unique polynomial of degree n-1 through n points. Splines: piecewise polynomials with continuity conditions.',
      keywords: ['interpolation', 'Lagrange', 'splines', 'piecewise polynomial'],
      terms: {
        title: 'Interpolation Methods',
        items: [
          { term: 'Lagrange Interpolation', def: 'Global polynomial through all data points' },
          { term: 'Newton Divided Differences', def: 'Efficient form for adding new points' },
          { term: 'Cubic Splines', def: 'Piecewise cubics with C² continuity' },
          { term: 'Runge Phenomenon', def: 'High-degree polynomials can oscillate wildly' }
        ]
      },
      categorize: {
        title: 'Interpolation Trade-offs',
        categories: ['Advantages', 'Disadvantages'],
        items: ['High-degree polynomials oscillate', 'Exact at data points', 'Smooth derivatives', 'Computationally expensive'],
        solution: {
          'Advantages': ['Exact at data points', 'Smooth derivatives'],
          'Disadvantages': ['High-degree polynomials oscillate', 'Computationally expensive']
        }
      }
    },
    {
      title: 'Error Analysis',
      summary: 'Understand sources of error: truncation, roundoff, condition number.',
      concept: 'Truncation error: from approximating infinite process. Roundoff error: from finite precision arithmetic. Condition number measures sensitivity.',
      keywords: ['truncation error', 'roundoff error', 'condition number', 'machine precision'],
      flashcards: {
        title: 'Types of Error',
        cards: [
          { front: 'Truncation Error', back: 'Error from stopping infinite process (e.g., Taylor series)' },
          { front: 'Roundoff Error', back: 'Error from finite precision arithmetic' },
          { front: 'Condition Number', back: 'Measures sensitivity of solution to input changes' },
          { front: 'Well-conditioned', back: 'Small changes in input → small changes in output' },
          { front: 'Ill-conditioned', back: 'Small changes in input → large changes in output' }
        ]
      },
      quiz: {
        question: 'A problem with high condition number is:',
        options: ['Easy to solve', 'Ill-conditioned', 'Has no solution', 'Always stable'],
        answerIndex: 1,
        hint: 'High condition number means the problem is sensitive to small perturbations.'
      }
    },
    {
      title: 'Stability & Convergence',
      summary: 'When do numerical methods behave well? Stability analysis.',
      concept: 'Stable method: small errors don\'t grow. Convergent: solution approaches true answer as h → 0. Lax equivalence theorem connects stability + consistency → convergence.',
      keywords: ['stability', 'convergence', 'consistency', 'Lax equivalence'],
      terms: {
        title: 'Stability Concepts',
        items: [
          { term: 'Absolute Stability', def: 'Errors don\'t grow in magnitude over time' },
          { term: 'Relative Stability', def: 'Errors don\'t grow relative to solution' },
          { term: 'Consistency', def: 'Method approximates the differential equation' },
          { term: 'Lax Equivalence', def: 'For linear problems: consistency + stability ⟺ convergence' }
        ]
      },
      shortAnswer: {
        prompt: 'Why might a mathematically correct method fail numerically?',
        expectedKeywords: ['unstable', 'roundoff', 'amplify'],
        sample: 'The method might be unstable, amplifying small roundoff errors until they dominate the solution.'
      }
    }
  ]
}

export default area