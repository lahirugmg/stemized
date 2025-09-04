const area = {
  slug: 'precalculus',
  title: 'Precalculus',
  description: 'Unify algebra and trig: functions, transformations, exponentials/logs, and an intro to limits.',
  tags: ['Functions','Transformations','Exponentials','Logs','Limits'],
  color: '#06b6d4',
  theme: 'math',
  modules: [
    { slug: 'functions-transform', title: 'Module 1: Functions & Transformations', description: 'Domain, range, shifts, stretches.', lessonIndexes: [0,1] },
    { slug: 'poly-rational', title: 'Module 2: Polynomial & Rational', description: 'End behavior, zeros, asymptotes.', lessonIndexes: [2,3] },
    { slug: 'exp-log-limits', title: 'Module 3: Exponentials, Logs & Limits', description: 'e^x, ln x, and limits intro.', lessonIndexes: [4,5] }
  ],
  lessons: [
    {
      title: 'Function Transformations',
      summary: 'Shifts, reflections, and stretches.',
      concept: 'y = a f(b(x − h)) + k: shift right h, up k; reflect with negative a or b; vertical stretch |a|; horizontal scale 1/|b|.',
      keywords: ['shift','stretch','reflect'],
      categorize: { title: 'Name the Transformation', categories: ['Shift','Reflect','Stretch/Shrink'], items: ['f(x)+3','−f(x)','f(2x)'], solution: { 'Shift':['f(x)+3'], 'Reflect':['−f(x)'], 'Stretch/Shrink':['f(2x)'] } },
      shortAnswer: { prompt: 'Describe transform from f to g(x)=f(x−2)−5.', expectedKeywords: ['right 2','down 5'], sample: 'Shift right 2, down 5.' }
    },
    {
      title: 'Domain & Range',
      summary: 'Find allowable inputs and outputs.',
      concept: 'Exclude values that make denominators zero or even roots negative. Use interval notation to express domain and range.',
      keywords: ['domain','range','interval'],
      quiz: { question: 'Domain of g(x)=1/(x−4)', options: ['x≠4','x>4','all real x','x<4'], answerIndex: 0, hint: 'Denominator cannot be 0.' }
    },
    {
      title: 'Polynomial Behavior',
      summary: 'Leading term controls end behavior; multiplicity shapes zeros.',
      concept: 'As x→±∞, sign and degree of leading term dominate. Odd multiplicity crosses, even touches/bounces.',
      keywords: ['end behavior','multiplicity'],
      flashcards: { title: 'End Behavior', cards: [ { front: 'Even degree, positive leading', back: 'Up/Up' }, { front: 'Odd degree, negative leading', back: 'Down/Up' } ] }
    },
    {
      title: 'Rational Asymptotes',
      summary: 'Vertical, horizontal, or slant asymptotes.',
      concept: 'Compare degrees: top < bottom → y=0; top = bottom → ratio of leads; top > bottom by 1 → slant via division.',
      keywords: ['asymptote','division'],
      order: { title: 'Find asymptotes of (2x^2+1)/(x^2−4)', items: ['Set denominator=0','Compare degrees','Compute lead ratio'], solution: ['Set denominator=0','Compare degrees','Compute lead ratio'] }
    },
    {
      title: 'Exponentials & Logs Review',
      summary: 'Graph shapes and inverse relationship.',
      concept: 'Exponentials grow by constant factor; logs grow slowly. They are inverses: y=b^x ↔ x=log_b y.',
      keywords: ['exponential','log','inverse'],
      quiz: { question: 'Which is inverse of y=2^x?', options: ['y=log_2 x','y=ln x','y=10^x','y=x^2'], answerIndex: 0, hint: 'Swap x and y, solve for y.' }
    },
    {
      title: 'Limits Intro',
      summary: 'Approach behavior, not just value at a point.',
      concept: 'lim_{x→a} f(x) is the value f approaches near a. One-sided limits consider approach from left/right.',
      keywords: ['limit','continuity'],
      flow: { title: 'Evaluate a Limit (algebraic)', steps: ['Substitute a','Factor/cancel if 0/0','Re-evaluate or use strategy'] }
    }
  ]
}

export default area

