const area = {
  slug: 'algebra-made-simple',
  title: 'Algebra Made Simple',
  description: 'Gentle, interactive steps to master algebra basics: variables, equations, inequalities, and functions.',
  tags: ['Variables', 'Equations', 'Inequalities', 'Functions'],
  color: '#ff6b6b',
  theme: 'math',
  modules: [
    { slug: 'expressions-variables', title: 'Module 1: Expressions & Variables', description: 'Variables, like terms, distribute, and substitution.', lessonIndexes: [0, 1, 2, 3] },
    { slug: 'solving-equations', title: 'Module 2: Solving Equations', description: 'One-step, two-step, parentheses, and word problems.', lessonIndexes: [4, 5, 6, 7] },
    { slug: 'inequalities', title: 'Module 3: Inequalities', description: 'Symbols, solving rules, and compound statements.', lessonIndexes: [8, 9, 10] },
    { slug: 'ratios-percents', title: 'Module 4: Ratios & Percents', description: 'Ratios, proportions, and percent basics.', lessonIndexes: [11, 12] },
    { slug: 'functions-linear', title: 'Module 5: Functions & Linear', description: 'Function machines, slope-intercept, and real-world meaning.', lessonIndexes: [13, 14, 15] }
  ],
  lessons: [
    {
      title: 'Variables 101',
      summary: 'A letter can stand for a number—meet variables!',
      concept: 'A variable is a symbol (like x or y) that represents a number. A constant is a fixed value. Expressions combine variables and numbers with operations.',
      keywords: ['variable', 'constant', 'expression', 'operation'],
      flashcards: { title: 'Key Ideas', cards: [ { front: 'Variable', back: 'A letter that stands for a number' }, { front: 'Constant', back: 'A fixed number' }, { front: 'Expression', back: 'Numbers, variables, and operations' } ] },
      categorize: { title: 'Variable or Number?', categories: ['Variable', 'Number'], items: ['x', '7', 'y', '12', 'n', '0'], solution: { Variable: ['x', 'y', 'n'], Number: ['7', '12', '0'] } },
      quiz: { question: 'Which is a variable?', options: ['5', 'x', '10', '3.14'], answerIndex: 1, hint: 'Look for a letter.' }
    },
    {
      title: 'Like Terms',
      summary: 'Combine terms with the same variable and exponent.',
      concept: 'Like terms have the same variable parts (same letters with same exponents). Combine by adding/subtracting coefficients.',
      keywords: ['like terms', 'coefficients', 'exponent'],
      categorize: { title: 'Group the Terms', categories: ['x terms', 'y terms', 'x^2 terms', 'Numbers'], items: ['3x', '5x', '2y', 'y', 'x^2', '4', '7', '3x^2'], solution: { 'x terms': ['3x', '5x'], 'y terms': ['2y', 'y'], 'x^2 terms': ['x^2', '3x^2'], Numbers: ['4', '7'] } },
      shortAnswer: { prompt: 'Explain why 3x and 5x are like terms but 3x and 3x^2 are not.', expectedKeywords: ['same variable', 'same exponent', 'coefficient'], sample: '3x and 5x have the same variable and exponent; 3x and 3x^2 do not (exponents differ).' },
      quiz: { question: 'Combine: 3x + 4x = ?', options: ['7', '12x', '7x', 'x^7'], answerIndex: 2, hint: 'Add coefficients for like terms.' }
    },
    {
      title: 'Distributive Property',
      summary: 'Multiply across parentheses: a(b + c) = ab + ac.',
      concept: 'Distribution lets you expand expressions by multiplying every term inside parentheses by the outside factor. Also used to factor common terms back out.',
      keywords: ['distribute', 'expand', 'factor'],
      sorter: { prompt: 'Correct or Incorrect expansion?', items: ['3(x + 2) = 3x + 6', '2(5 + y) = 10 + y', '2(5 + y) = 10 + 2y', '−4(x − 3) = −4x + 12', '3(x + 2) = 3x + 2'], solution: { Correct: ['3(x + 2) = 3x + 6', '2(5 + y) = 10 + 2y', '−4(x − 3) = −4x + 12'], Incorrect: ['2(5 + y) = 10 + y', '3(x + 2) = 3x + 2'] } },
      exercise: 'Expand and simplify: 2(x + 4) + 3x',
      solution: '2(x + 4) + 3x = 2x + 8 + 3x = 5x + 8.'
    },
    {
      title: 'Substitution: Evaluate Expressions',
      summary: 'Plug in values for variables to compute results.',
      concept: 'Replace the variable with a given number and follow order of operations. Parentheses can help keep steps clear.',
      keywords: ['substitute', 'evaluate', 'order'],
      exercise: 'Evaluate 3x + 2 when x = 4.',
      solution: '3(4) + 2 = 12 + 2 = 14.',
      quiz: { question: 'If a = 5, what is 2a − 1?', options: ['9', '11', '7', '4'], answerIndex: 2, hint: 'Double then subtract one.' }
    },
    {
      title: 'One-step Equations',
      summary: 'Undo one operation to solve.',
      concept: 'Use inverse operations to isolate the variable. What you do to one side, do to the other to keep balance.',
      keywords: ['inverse operations', 'balance'],
      order: { title: 'Solve x − 5 = 12 (steps)', items: ['Subtract 5 from both sides', 'Add 5 to both sides', 'Check the answer'], solution: ['Add 5 to both sides', 'Check the answer'] },
      exercise: 'Solve x + 7 = 10 and check.',
      solution: 'x + 7 = 10 → x = 3. Check: 3 + 7 = 10.'
    },
    {
      title: 'Two-step Equations',
      summary: 'Undo addition/subtraction, then multiplication/division.',
      concept: 'For ax + b = c, first undo b (add/subtract), then undo a (divide/multiply). Always check your solution.',
      keywords: ['two-step', 'inverse'],
      order: { title: 'Solve 2x + 3 = 11 (steps)', items: ['Divide both sides by 2', 'Subtract 3 from both sides', 'Check solution'], solution: ['Subtract 3 from both sides', 'Divide both sides by 2', 'Check solution'] },
      quiz: { question: 'Solution of 2x + 3 = 11 is…', options: ['3', '4', '5', '6'], answerIndex: 1, hint: 'Undo +3 then ÷2.' }
    },
    {
      title: 'Equations with Parentheses',
      summary: 'Distribute first, then solve.',
      concept: 'If parentheses are present, distribute to remove them, then combine like terms and solve using inverse operations.',
      keywords: ['distribute', 'combine', 'solve'],
      exercise: 'Solve 2(x + 4) = 18.',
      solution: '2x + 8 = 18 → 2x = 10 → x = 5.',
      order: { title: 'Solve 3(x − 2) + x = 14 (steps)', items: ['Combine like terms', 'Distribute 3', 'Solve for x'], solution: ['Distribute 3', 'Combine like terms', 'Solve for x'] }
    },
    {
      title: 'From Words to Equations',
      summary: 'Translate a story into algebra, then solve.',
      concept: 'Identify the unknown, choose a variable, translate keywords to operations (“sum”, “difference”, “twice”), then solve and check.',
      keywords: ['translate', 'unknown', 'keywords'],
      categorize: { title: 'Match Words to Operation', categories: ['Addition', 'Subtraction', 'Multiplication', 'Division'], items: ['sum of', 'more than', 'difference', 'less than', 'twice', 'triple', 'half', 'quotient'], solution: { Addition: ['sum of', 'more than'], Subtraction: ['difference', 'less than'], Multiplication: ['twice', 'triple'], Division: ['half', 'quotient'] } },
      shortAnswer: { prompt: 'Write an equation for: “Twice a number plus 3 is 17.”', expectedKeywords: ['2x + 3 = 17', 'variable', 'solve'], sample: 'Let x be the number: 2x + 3 = 17. Solve: x = 7.' }
    },
    {
      title: 'Inequality Symbols',
      summary: 'Greater than, less than, and “or equal to”.',
      concept: 'Use >, <, ≥, ≤ to compare. “At least” means ≥; “at most” means ≤. Solutions are sets of numbers, often shown on a number line.',
      keywords: ['>', '<', '≥', '≤', 'at least', 'at most'],
      terms: { title: 'Inequality Words', items: [ { term: 'At least', def: '≥' }, { term: 'At most', def: '≤' }, { term: 'Greater than', def: '>' }, { term: 'Less than', def: '<' } ] },
      quiz: { question: '“x is at least 5” means…', options: ['x > 5', 'x ≥ 5', 'x < 5', 'x ≤ 5'], answerIndex: 1, hint: 'Include 5.' }
    },
    {
      title: 'Solve Inequalities',
      summary: 'Similar to equations, but flip when multiplying/dividing by a negative.',
      concept: 'Solve like equations. If you multiply or divide both sides by a negative number, reverse the inequality sign.',
      keywords: ['flip sign', 'negative', 'solution set'],
      order: { title: 'Solve −2x + 3 ≤ 11 (steps)', items: ['Subtract 3 from both sides', 'Divide both sides by −2 and flip ≤ to ≥', 'Check a value'], solution: ['Subtract 3 from both sides', 'Divide both sides by −2 and flip ≤ to ≥', 'Check a value'] },
      quiz: { question: 'When do you flip the inequality sign?', options: ['Adding a negative', 'Multiplying by a negative', 'Adding 3', 'Dividing by 2'], answerIndex: 1, hint: 'Multiplying or dividing by a negative only.' }
    },
    {
      title: 'Compound Inequalities',
      summary: 'Use AND for “between” and OR for “outside” ranges.',
      concept: '“a < x < b” uses AND. “x < a or x > b” uses OR. Solve each part and combine the solution sets appropriately.',
      keywords: ['AND', 'OR', 'between', 'outside'],
      categorize: { title: 'AND or OR?', categories: ['AND', 'OR'], items: ['2 < x ≤ 5', 'x < −1 or x ≥ 3', 'Between 0 and 10', 'Less than −2 or greater than 4'], solution: { AND: ['2 < x ≤ 5', 'Between 0 and 10'], OR: ['x < −1 or x ≥ 3', 'Less than −2 or greater than 4'] } }
    },
    {
      title: 'Ratios & Proportions',
      summary: 'Compare amounts and solve equal ratios.',
      concept: 'A ratio compares two quantities. A proportion sets two ratios equal. Cross-multiplication helps find a missing value.',
      keywords: ['ratio', 'proportion', 'cross-multiply'],
      order: { title: 'Solve a Proportion (steps)', items: ['Cross-multiply', 'Write equal ratios', 'Solve for the variable', 'Check solution'], solution: ['Write equal ratios', 'Cross-multiply', 'Solve for the variable', 'Check solution'] },
      quiz: { question: '3/5 = x/20. x = ?', options: ['9', '10', '12', '15'], answerIndex: 1, hint: '3×20 ÷ 5.' }
    },
    {
      title: 'Percent Basics',
      summary: 'Find part, whole, or percent.',
      concept: 'Percent means “per hundred.” Use part = percent × whole. Convert percent to decimal to compute.',
      keywords: ['percent', 'part', 'whole', 'decimal'],
      categorize: { title: 'Which type of problem?', categories: ['Find Part', 'Find Whole', 'Find Percent'], items: ['What is 20% of 50?', '24 is 30% of what?', '20 is what percent of 80?'], solution: { 'Find Part': ['What is 20% of 50?'], 'Find Whole': ['24 is 30% of what?'], 'Find Percent': ['20 is what percent of 80?'] } },
      shortAnswer: { prompt: 'Solve: What is 15% of 60?', expectedKeywords: ['0.15', '×', '9'], sample: '0.15 × 60 = 9.' }
    },
    {
      title: 'Function Machines',
      summary: 'Input → rule → output.',
      concept: 'A function takes an input and gives one output. Tables list x and f(x). Example: f(x) = 2x + 1 doubles then adds one.',
      keywords: ['function', 'input', 'output', 'table'],
      flow: { title: 'Function Flow', steps: ['Input x', 'Apply rule', 'Output f(x)'] },
      flashcards: { title: 'Function Terms', cards: [ { front: 'Domain', back: 'All allowed inputs (x)' }, { front: 'Range', back: 'All possible outputs (f(x))' }, { front: 'f(x)', back: 'Function of x (the output)' } ] },
      quiz: { question: 'If f(x)=2x+1, f(3)=?', options: ['5', '6', '7', '8'], answerIndex: 2, hint: 'Double 3, then add 1.' }
    },
    {
      title: 'Slope-Intercept Form',
      summary: 'y = mx + b: slope m, intercept b.',
      concept: 'In y = mx + b, m is the slope (change in y for each 1 step in x) and b is the y-intercept (where the line crosses the y-axis).',
      keywords: ['slope', 'intercept', 'y = mx + b'],
      flashcards: { title: 'Identify Parts', cards: [ { front: 'Slope (m)', back: 'How steep the line is' }, { front: 'Intercept (b)', back: 'Where line crosses y-axis' } ] },
      quiz: { question: 'For y = 2x + 3, what is m?', options: ['2', '3', '−2', '1/2'], answerIndex: 0, hint: 'Coefficient of x.' }
    },
    {
      title: 'Slope from Two Points',
      summary: 'Use rise over run: m = (y2 − y1)/(x2 − x1).',
      concept: 'Compute slope by the change in y divided by the change in x. Keep order consistent across numerator and denominator.',
      keywords: ['rise', 'run', 'slope formula'],
      order: { title: 'Find slope through (1,2) and (4,8)', items: ['Compute y2 − y1', 'Compute x2 − x1', 'Divide (y2 − y1)/(x2 − x1)'], solution: ['Compute y2 − y1', 'Compute x2 − x1', 'Divide (y2 − y1)/(x2 − x1)'] },
      shortAnswer: { prompt: 'Compute slope between (1,2) and (4,8).', expectedKeywords: ['(8−2)/(4−1)', '6/3', '2'], sample: 'm = (8−2)/(4−1) = 6/3 = 2.' }
    },
    {
      title: 'Meaning of m and b',
      summary: 'Connect slope and intercept to real stories.',
      concept: 'm is the “per unit” change; b is the starting amount. Translate real situations into y = mx + b and interpret parameters.',
      keywords: ['rate', 'starting value', 'interpret'],
      useCases: { title: 'Real-world Lines', items: [ { title: 'Taxi Fare', desc: 'Cost = 3 (start) + 2.5 per mile → m=2.5, b=3' }, { title: 'Streaming', desc: 'Bill = 5 base + 2 per movie → m=2, b=5' }, { title: 'Plant Growth', desc: 'Height = 10 cm start + 1 cm/day → m=1, b=10' } ] },
      shortAnswer: { prompt: 'A gym charges $20 to join plus $10 per class. Write the equation and name m and b.', expectedKeywords: ['y = 10x + 20', 'm=10', 'b=20'], sample: 'y = 10x + 20; slope m=10 (per class), intercept b=20 (start fee).' }
    }
  ]
}

export default area

