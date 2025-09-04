const area = {
  slug: 'algebra-2',
  title: 'Algebra II',
  description: 'Deepen algebra: complex numbers, polynomials, rational expressions, exponentials, and logs.',
  tags: ['Polynomials','Complex','Rational','Exponential','Logarithm'],
  color: '#0ea5e9',
  theme: 'math',
  modules: [
    { slug: 'polynomials-complex', title: 'Module 1: Polynomials & Complex', description: 'Operations, factoring, complex numbers.', lessonIndexes: [0,1] },
    { slug: 'rational-functions', title: 'Module 2: Rational Functions', description: 'Simplify, asymptotes, holes, graphs.', lessonIndexes: [2,3] },
    { slug: 'exp-log', title: 'Module 3: Exponential & Logarithmic', description: 'Laws, solving equations, applications.', lessonIndexes: [4,5] }
  ],
  lessons: [
    {
      title: 'Complex Numbers Basics',
      summary: 'i^2 = −1; add, subtract, and multiply complex numbers.',
      concept: 'Write complex numbers as a + bi. Use (a + bi)(c + di) = (ac − bd) + (ad + bc)i; i^2 = −1.',
      keywords: ['complex','imaginary','i^2 = −1'],
      flashcards: { title: 'Complex Facts', cards: [ { front: 'i^2', back: '−1' }, { front: '(2+3i)+(1−5i)', back: '3 − 2i' } ] },
      quiz: { question: '(2 + i)(2 − i) = ?', options: ['3','5','4','1'], answerIndex: 1, hint: 'Use conjugates: a^2 − b^2 with b=i.' }
    },
    {
      title: 'Polynomial Operations & Factoring',
      summary: 'Add, multiply, and factor common patterns.',
      concept: 'Use distributive property and special products (a ± b)^2, a^2 − b^2. Factor by GCF, grouping, and trinomials ax^2 + bx + c.',
      keywords: ['factor','trinomial','difference of squares'],
      sorter: { prompt: 'Match to method', items: ['x^2 − 9','ax^2+bx+c','3x^2+6x','x^3+3x^2+3x+1'], solution: { 'Difference of Squares':['x^2 − 9'], 'Trinomial':['ax^2+bx+c'], 'GCF':['3x^2+6x'], 'Grouping/Cube Expansion':['x^3+3x^2+3x+1'] } }
    },
    {
      title: 'Rational Expressions: Simplify',
      summary: 'Reduce expressions and find restrictions.',
      concept: 'Factor numerator/denominator and cancel common factors. Domain excludes zeros of denominator.',
      keywords: ['rational','domain','cancel'],
      quiz: { question: 'Simplify (x^2−9)/(x−3), x ≠ 3', options: ['x−3','x+3','x^2+3','x'], answerIndex: 1, hint: 'Factor numerator.' },
      shortAnswer: { prompt: 'State the domain restriction.', expectedKeywords: ['x ≠ 3'], sample: 'x ≠ 3 because it makes the denominator 0.' }
    },
    {
      title: 'Rational Functions: Graph Features',
      summary: 'Identify vertical/horizontal asymptotes and holes.',
      concept: 'Vertical asymptotes at remaining denominator zeros; holes at canceled factors; horizontal/oblique asymptotes via degrees or division.',
      keywords: ['asymptote','holes','end behavior'],
      order: { title: 'Analyze y = (x^2−1)/(x−1)', items: ['Factor and cancel','Find hole x-value','Check horizontal behavior'], solution: ['Factor and cancel','Find hole x-value','Check horizontal behavior'] }
    },
    {
      title: 'Exponential & Log Laws',
      summary: 'Properties and conversions between forms.',
      concept: 'b^{x+y} = b^x b^y; log_b(xy)=log_b x + log_b y; log_b b^x = x; b^x = a ↔ x=log_b a.',
      keywords: ['exponential','logarithm','laws'],
      flashcards: { title: 'Laws', cards: [ { front: 'log_b(xy)', back: 'log_b x + log_b y' }, { front: 'b^x=a', back: 'x=log_b a' } ] },
      quiz: { question: 'Solve 2^x = 8', options: ['2','3','4','log2 8'], answerIndex: 1, hint: '2^3 = 8.' }
    },
    {
      title: 'Solve Exponential & Log Equations',
      summary: 'Isolate, take logs, or rewrite bases.',
      concept: 'Use same-base comparison or apply logs both sides. For logs, combine using properties before solving.',
      keywords: ['solve','log','exponent'],
      shortAnswer: { prompt: 'Solve 3^x = 20 (approx).', expectedKeywords: ['log','ln','x=ln 20/ln 3 ≈ 2.73'], sample: 'x = ln 20 / ln 3 ≈ 2.73.' },
      flow: { title: 'Solve Steps', steps: ['Isolate base/log','Same base or take log','Simplify and solve'] }
    }
  ]
}

export default area

