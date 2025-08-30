const area = {
  slug: 'math-foundations',
  title: 'Math Foundations',
  description: 'Key math building blocks, one small concept at a time.',
  tags: ['Algebra', 'Numbers', 'Geometry'],
  color: '#ff6b6b',
  theme: 'math',
  lessons: [
    {
      title: 'Order of Operations (PEMDAS)',
      summary: 'A consistent rule for evaluating expressions.',
      concept:
        'Evaluate expressions by Parentheses → Exponents → Multiplication/Division → Addition/Subtraction, left to right within each step.',
      keywords: ['PEMDAS', 'Parentheses', 'Exponents', 'Multiplication', 'Division', 'Addition', 'Subtraction', 'left to right'],
      exercise:
        'Compute 7 + 3 × (10 − 6)^2. Hint: Parentheses first, then exponent, etc.',
      solution:
        '7 + 3 × (10 − 6)^2 = 7 + 3 × 4^2 = 7 + 3 × 16 = 7 + 48 = 55.',
      order: {
        title: 'Put PEMDAS steps in order',
        items: ['Addition/Subtraction', 'Multiplication/Division', 'Exponents', 'Parentheses'],
        solution: ['Parentheses', 'Exponents', 'Multiplication/Division', 'Addition/Subtraction']
      },
      quiz: {
        question: 'Which operation do you perform first in 8 − 3 × 2?',
        options: ['Subtract', 'Multiply', 'Add', 'Divide'],
        answerIndex: 1,
        hint: 'Multiplication/Division come before Addition/Subtraction.'
      },
      quiz2: {
        question: 'In 4 + (6 ÷ 3)^2, what is evaluated second?',
        options: ['6 ÷ 3', 'Square the result', '4 + …', 'Multiply 4 and the result'],
        answerIndex: 1,
        hint: 'Parentheses first, then the exponent.'
      },
      flashcards: {
        title: 'PEMDAS Reminders',
        cards: [
          { front: 'P', back: 'Parentheses' },
          { front: 'E', back: 'Exponents' },
          { front: 'M/D', back: 'Multiplication and Division (left → right)' },
          { front: 'A/S', back: 'Addition and Subtraction (left → right)' }
        ]
      },
      shortAnswer: {
        prompt: 'Why are multiplication and division evaluated left to right?',
        expectedKeywords: ['left to right', 'same precedence', 'consistency'],
        sample: 'Because multiplication and division have the same precedence; evaluate them in the order they appear (left to right) to keep results consistent.'
      },
      callouts: [
        { type: 'tip', title: 'Check As You Go', body: 'Rewrite the expression after each step to avoid mistakes.' }
      ],
      interactiveCalculator: true
    },
    {
      title: 'Area and Perimeter of Rectangles',
      summary: 'Compute area (w × h) and perimeter (2(w + h)).',
      concept:
        'Area measures how much space is inside a shape (in square units), while perimeter measures the distance around it (in linear units). For rectangles: area = width × height; perimeter = 2 × (width + height).',
      keywords: ['area', 'perimeter', 'rectangle', 'width', 'height', 'square units', 'linear units'],
      exercise: 'Find area and perimeter of a 5 by 3 rectangle.',
      solution: 'Area = 5 × 3 = 15 square units. Perimeter = 2 × (5 + 3) = 16 units.',
      callouts: [
        { type: 'tip', title: 'Units Matter', body: 'Area uses square units (e.g., cm²), perimeter uses linear units (e.g., cm).' }
      ],
      areaPerimeter: true
    },
    {
      title: 'Distributive Property',
      summary: 'Multiply across addition: a(b + c) = ab + ac.',
      concept:
        'The distributive property lets you expand and simplify expressions by multiplying each term inside parentheses.',
      keywords: ['distribute', 'expand', 'simplify', 'like terms'],
      exercise:
        'Expand and simplify 3(x + 4) − 2(x − 1).',
      solution:
        '3(x + 4) − 2(x − 1) = 3x + 12 − 2x + 2 = x + 14.',
      sorter: {
        prompt: 'Drag each expansion into Correct or Incorrect.',
        items: [
          '3(x + 4) = 3x + 12',
          '2(5 + y) = 10 + y',
          '2(5 + y) = 10 + 2y',
          '−4(x − 3) = −4x − 12',
          '−4(x − 3) = −4x + 12',
          '3(x + 2) = 3x + 2',
          '7(a − 2) = 7a − 14',
          '5(2x) = 10x'
        ],
        solution: {
          Correct: ['3(x + 4) = 3x + 12', '2(5 + y) = 10 + 2y', '−4(x − 3) = −4x + 12', '7(a − 2) = 7a − 14', '5(2x) = 10x'],
          Incorrect: ['2(5 + y) = 10 + y', '−4(x − 3) = −4x − 12', '3(x + 2) = 3x + 2']
        }
      },
      quiz: {
        question: 'Which is equivalent to 5(a + 2)?',
        options: ['5a + 2', '5a + 10', 'a + 10', '10a + 2'],
        answerIndex: 1,
        hint: 'Multiply 5 by each term inside the parentheses.'
      },
      flashcards: {
        title: 'Distribution Facts',
        cards: [
          { front: 'a(b + c)', back: 'ab + ac' },
          { front: 'a(b − c)', back: 'ab − ac' },
          { front: '−k(x − m)', back: '−kx + km' },
          { front: 'Reverse of distribute', back: 'Factor common term (e.g., ab + ac = a(b + c))' }
        ]
      },
      shortAnswer: {
        prompt: 'When is distributing helpful before simplifying an expression?',
        expectedKeywords: ['eliminate parentheses', 'expand', 'combine like terms', 'area model', 'mental math'],
        sample: 'Distribution eliminates parentheses so you can combine like terms or compute quickly (e.g., mental math and area/box models).'
      },
      distributiveVisualizer: true
    },
    {
      title: 'Linear Equations',
      summary: 'Solve for the unknown with inverse operations.',
      concept:
        'To solve ax + b = c, isolate x by reversing operations in the correct order.',
      keywords: ['isolate x', 'inverse operations', 'balance', 'both sides'],
      exercise:
        'Solve 2x − 5 = 11 and check your solution.',
      solution:
        '2x − 5 = 11 → 2x = 16 → x = 8. Check: 2(8) − 5 = 11.',
      order: {
        title: 'Put the solving steps in order',
        items: ['Divide both sides by 2', 'Add 5 to both sides', 'Check by substituting x back'],
        solution: ['Add 5 to both sides', 'Divide both sides by 2', 'Check by substituting x back']
      },
      quiz: {
        question: 'What is x in 2x − 5 = 11?',
        options: ['6', '7', '8', '9'],
        answerIndex: 2,
        hint: 'Undo subtraction with addition, then divide.'
      },
      flashcards: {
        title: 'Equation Solving Tips',
        cards: [
          { front: 'Balance', back: 'Do the same operation to both sides.' },
          { front: 'Inverse Operations', back: 'Undo addition with subtraction; undo multiplication with division.' },
          { front: 'Check', back: 'Verify by substituting the solution back into the original equation.' }
        ]
      },
      shortAnswer: {
        prompt: 'Why is the “check your solution” step important?',
        expectedKeywords: ['substitute', 'verify', 'original equation', 'true', 'both sides'],
        sample: 'Substituting x back confirms both sides are equal, catching algebra or arithmetic mistakes before moving on.'
      },
      callouts: [
        { type: 'info', title: 'Keep Balance', body: 'Whatever you do to one side, do to the other.' }
      ],
      equationSolver: true
    },
    {
      title: 'Practice & Review',
      summary: 'Test your skills with unlimited practice problems.',
      concept: 'Now that you\'ve learned the foundations, it\'s time to practice! Use the interactive practice generator to reinforce your understanding of PEMDAS, distributive property, and linear equations.',
      keywords: ['practice', 'review', 'problems', 'mastery'],
      exercise: 'Use the practice generator below to solve problems from all three topics. Try to get at least 80% accuracy!',
      practiceGenerator: true,
      callouts: [
        { type: 'tip', title: 'Practice Makes Perfect', body: 'The more problems you solve, the more automatic these skills become!' }
      ]
    }
  ]
}

export default area
