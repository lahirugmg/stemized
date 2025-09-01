const area = {
  slug: 'pre-algebra',
  title: 'Pre‑Algebra',
  description: 'Bridge arithmetic to algebra: integers, expressions, exponents, proportions.',
  tags: ['Integers', 'Expressions', 'Exponents', 'Ratios'],
  color: '#2563eb',
  theme: 'math',
  modules: [
    { slug: 'integers-order', title: 'Module 1: Integers & Order', description: 'Add/subtract integers, absolute value, number line.', lessonIndexes: [0,1] },
    { slug: 'expressions-exponents', title: 'Module 2: Expressions & Exponents', description: 'Evaluate, simplify, properties of exponents.', lessonIndexes: [2,3] },
    { slug: 'ratios-proportions', title: 'Module 3: Ratios & Proportions', description: 'Ratios, rates, proportions, percent.', lessonIndexes: [4,5] }
  ],
  lessons: [
    {
      title: 'Integer Operations',
      summary: 'Add and subtract integers on the number line.',
      concept: 'Use direction and magnitude: positive moves right, negative moves left. Opposite numbers sum to zero.',
      keywords: ['integers','number line','opposites'],
      order: { title: 'Put moves in order to compute −3 + 7 − 5', items: ['Start at 0','Move right 7','Move left 5','Move left 3'], solution: ['Start at 0','Move left 3','Move right 7','Move left 5'] },
      quiz: { question: 'What is −8 + 12?', options: ['−20','4','−4','20'], answerIndex: 1, hint: 'Opposite direction magnitudes 12 − 8.' }
    },
    {
      title: 'Absolute Value & Order',
      summary: 'Distance from zero and comparing integers.',
      concept: 'Absolute value |x| is distance from 0. For order: on the number line, left is smaller, right is larger.',
      keywords: ['absolute value','distance','order'],
      flashcards: { title: 'Absolute Value', cards: [ { front: '|−6|', back: '6' }, { front: '|3|', back: '3' }, { front: '|0|', back: '0' } ] },
      categorize: { title: 'True or False', categories: ['True','False'], items: ['−5 < −2','|−7| = 7','3 < −1'], solution: { True:['|−7| = 7'], False:['−5 < −2','3 < −1'] } }
    },
    {
      title: 'Evaluate Expressions',
      summary: 'Substitute values and follow order (PEMDAS).',
      concept: 'Replace variables, then apply PEMDAS: parentheses, exponents, multiply/divide, add/subtract.',
      keywords: ['substitution','PEMDAS'],
      exercise: 'Evaluate 2a^2 − 3 when a = −2.',
      solution: '2(−2)^2 − 3 = 2·4 − 3 = 8 − 3 = 5.',
      quiz: { question: 'If x = 3, what is 4x − 5?', options: ['7','12','11','−1'], answerIndex: 2, hint: '4·3 − 5.' }
    },
    {
      title: 'Exponent Properties',
      summary: 'Product, power, and quotient rules.',
      concept: 'a^m · a^n = a^{m+n}; (a^m)^n = a^{mn}; a^m / a^n = a^{m−n}, a ≠ 0.',
      keywords: ['exponents','properties'],
      sorter: { prompt: 'Sort identities by type', items: ['a^m · a^n = a^{m+n}','(a^m)^n = a^{mn}','a^m/a^n = a^{m−n}','(ab)^n = a^n b^n'], solution: { 'Product Rule':['a^m · a^n = a^{m+n}'], 'Power Rule':['(a^m)^n = a^{mn}','(ab)^n = a^n b^n'], 'Quotient Rule':['a^m/a^n = a^{m−n}'] } }
    },
    {
      title: 'Ratios & Unit Rates',
      summary: 'Compare quantities and compute per‑unit values.',
      concept: 'A ratio compares two amounts; a unit rate has denominator 1. Use dimensional reasoning to keep units consistent.',
      keywords: ['ratio','rate','units'],
      shortAnswer: { prompt: 'A bike travels 90 km in 3 hours. What is the unit rate?', expectedKeywords: ['30 km/h','divide by 3'], sample: '90 ÷ 3 = 30 km/h.' },
      order: { title: 'Compute unit price', items: ['Price ÷ Quantity','Express per 1 unit','Compare items'], solution: ['Price ÷ Quantity','Express per 1 unit','Compare items'] }
    },
    {
      title: 'Proportions & Percent',
      summary: 'Solve proportions and percent problems.',
      concept: 'Two ratios are proportional if cross products match. Percent means “per hundred”: part = percent × whole.',
      keywords: ['proportion','percent','cross multiply'],
      quiz: { question: '30% of 50 is…', options: ['10','15','20','25'], answerIndex: 1, hint: '0.30 × 50.' },
      flow: { title: 'Solve Percent Problems', steps: ['Write percent as decimal','Multiply by whole','Interpret units'] }
    }
  ]
}

export default area

