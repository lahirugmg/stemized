const area = {
  slug: 'calculus-1',
  title: 'Calculus I (Differential)',
  description: 'Limits, continuity, derivatives, rules, and applications to rates and optimization.',
  tags: ['Limits','Continuity','Derivatives','Optimization'],
  color: '#22c55e',
  theme: 'math',
  modules: [
    { slug: 'limits-continuity', title: 'Module 1: Limits & Continuity', description: 'Compute and interpret limits and continuity.', lessonIndexes: [0,1] },
    { slug: 'derivative-rules', title: 'Module 2: Derivatives & Rules', description: 'Definition and computation rules.', lessonIndexes: [2,3] },
    { slug: 'applications', title: 'Module 3: Applications', description: 'Rates, tangents, extrema, optimization.', lessonIndexes: [4,5] }
  ],
  lessons: [
    {
      title: 'Limit Intuition',
      summary: 'What limits measure and how they behave.',
      concept: 'A limit describes the value a function approaches as x nears a point. Notation: lim_{x→a} f(x).',
      keywords: ['limit','approach'],
      flashcards: { title: 'Limit Language', cards: [ { front: 'lim_{x→a} f(x)=L', back: 'f gets arbitrarily close to L as x→a' }, { front: 'One-sided limits', back: 'lim_{x→a^-}, lim_{x→a^+}' } ] },
      quiz: { question: 'If left and right limits differ at x=a, the limit…', options: ['exists','does not exist','=0','=∞'], answerIndex: 1, hint: 'Two-sided limit requires agreement.' }
    },
    {
      title: 'Continuity',
      summary: 'When is a function continuous at a point?',
      concept: 'Continuous at a if lim_{x→a} f(x) = f(a) and f(a) is defined. Watch for holes/jumps/vertical asymptotes.',
      keywords: ['continuous','discontinuity'],
      categorize: { title: 'Type of Discontinuity', categories: ['Removable','Jump','Infinite'], items: ['Hole at x=2','Step jump at x=1','Vertical asymptote at 0'], solution: { 'Removable':['Hole at x=2'], 'Jump':['Step jump at x=1'], 'Infinite':['Vertical asymptote at 0'] } }
    },
    {
      title: 'Derivative Definition',
      summary: 'Slope of tangent as a limit.',
      concept: 'f\'(x) = lim_{h→0} [f(x+h) − f(x)]/h. Instantaneous rate of change.',
      keywords: ['derivative','slope','rate'],
      order: { title: 'Differentiate from definition (x^2)', items: ['Form difference quotient','Expand numerator','Cancel h','Take h→0'], solution: ['Form difference quotient','Expand numerator','Cancel h','Take h→0'] }
    },
    {
      title: 'Rules: Product, Chain',
      summary: 'Differentiate using common rules.',
      concept: '(fg)\' = f\'g + fg\'; (f∘g)\' = f\'(g)·g\'. Use linearity and power rule for efficiency.',
      keywords: ['product rule','chain rule'],
      quiz: { question: 'd/dx [sin(x^2)] = ?', options: ['cos(x^2)','2x cos(x^2)','2x sin(x)','cos x'], answerIndex: 1, hint: 'Apply chain rule.' }
    },
    {
      title: 'Extrema & First Derivative',
      summary: 'Critical points and increasing/decreasing tests.',
      concept: 'Critical points where f\'=0 or undefined. Use sign chart of f\' to find maxima/minima and monotonicity.',
      keywords: ['critical point','increasing'],
      flow: { title: 'Optimization Steps', steps: ['Define variable/target','Model function','Differentiate & find critical points','Test and interpret'] }
    },
    {
      title: 'Linear Approximation & Rates',
      summary: 'Use derivatives for local linear models and related rates.',
      concept: 'L(x)=f(a)+f\'(a)(x−a). Related rates: differentiate relation w.r.t. time and solve for desired rate.',
      keywords: ['linearization','related rates'],
      shortAnswer: { prompt: 'Linearize f(x)=√x near a=4.', expectedKeywords: ['L(x)=2 + (1/4)(x−4)'], sample: 'f\'(x)=1/(2√x) so L(x)=2 + (1/4)(x−4).' }
    }
  ]
}

export default area

