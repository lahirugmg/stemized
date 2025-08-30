const area = {
  slug: 'coding-basics',
  title: 'Coding Basics',
  description: 'Start programming with practical, bite-size lessons and patterns you can apply anywhere.',
  tags: ['Variables', 'Control Flow', 'Functions', 'Data Structures', 'Algorithms', 'Testing'],
  color: '#96ceb4',
  theme: 'coding',
  modules: [
    {
      slug: 'foundations',
      title: 'Module 1: Foundations',
      description: 'Programs, variables, types, expressions, and I/O.',
      lessonIndexes: [0, 1, 2, 3]
    },
    {
      slug: 'control-flow',
      title: 'Module 2: Control Flow',
      description: 'Conditionals, loops, and iteration patterns.',
      lessonIndexes: [4, 5, 6, 7]
    },
    {
      slug: 'functions-scope',
      title: 'Module 3: Functions & Scope',
      description: 'Defining functions, parameters, scope, and recursion.',
      lessonIndexes: [8, 9, 10, 11]
    },
    {
      slug: 'data-structures',
      title: 'Module 4: Data Structures',
      description: 'Arrays/lists, objects/maps, sets, and strings.',
      lessonIndexes: [12, 13, 14, 15]
    },
    {
      slug: 'algorithms-testing',
      title: 'Module 5: Algorithms & Testing',
      description: 'Decomposition, complexity, classic algorithms, and tests.',
      lessonIndexes: [16, 17, 18, 19]
    }
  ],
  lessons: [
    {
      title: 'What Is a Program?',
      summary: 'A set of instructions that a computer executes.',
      concept:
        'Programs read input, transform it, and produce output. Think in steps: state, operations, and flow. Start with small tasks, test often, and iterate.',
      keywords: ['input', 'state', 'output'],
      exercise:
        'Describe a real-world process (making tea) as 5–7 steps a computer could follow.',
      callouts: [
        { type: 'info', title: 'Mental Model', body: 'Computers do exactly what you say, not what you mean.' }
      ],
      quiz: {
        question: 'Which best describes a program?',
        options: ['A diagram', 'A set of executable steps', 'A database', 'A website'],
        answerIndex: 1,
        hint: 'Focus on steps the machine can perform.'
      }
    },
    {
      title: 'Variables and Types',
      summary: 'Names bound to values with defined operations.',
      concept:
        'A variable stores a value. Types (number, string, boolean, etc.) determine valid operations and memory representation. Prefer clear names and minimal scope.',
      keywords: ['variable', 'type', 'assignment'],
      exercise:
        'Create a variable for item price and tax rate; compute total and print it.',
      flashcards: {
        title: 'Type Basics',
        cards: [
          { front: 'Number', back: 'Quantities for arithmetic operations' },
          { front: 'String', back: 'Text data, often immutable' },
          { front: 'Boolean', back: 'True/false values for branching' }
        ]
      }
    },
    {
      title: 'Expressions and Operators',
      summary: 'Build values from other values using operators.',
      concept:
        'Use arithmetic (+, -, *, /), comparison (==, <, >), and logical (&&, ||, !) operators to form expressions. Beware of integer vs floating division and operator precedence.',
      keywords: ['operators', 'precedence', 'boolean'],
      exercise:
        'Evaluate an expression like (5 + 2) * 3 > 10 && 4 % 2 === 0 and explain why.'
    },
    {
      title: 'Input and Output',
      summary: 'Read values and display results cleanly.',
      concept:
        'Most programs take input (user, file, args) and produce output (console, file). Sanitize inputs and format outputs for readability.',
      keywords: ['stdin', 'stdout', 'CLI args'],
      shortAnswer: {
        prompt: 'Outline how your language reads a line of input and prints a formatted message.',
        expectedKeywords: ['read', 'parse', 'format/print'],
        sample: 'Read line, parse number with error handling, print using formatted string.'
      }
    },
    {
      title: 'Conditionals',
      summary: 'Branch execution based on conditions.',
      concept:
        'Use if/else to decide between paths. Keep conditions simple; extract complex logic into helper functions. Beware of truthiness/falsiness differences across languages.',
      keywords: ['if/else', 'branch'],
      quiz: {
        question: 'Which condition checks both must be true?',
        options: ['A || B', 'A && B', '!A', 'A == B == C'],
        answerIndex: 1,
        hint: 'Logical AND.'
      }
    },
    {
      title: 'Loops',
      summary: 'Repeat work with clear exit conditions.',
      concept:
        'Loops (for/while) repeat a block until a condition changes. Avoid infinite loops by updating state or breaking out. Prefer for-each for collections when available.',
      keywords: ['for', 'while', 'break'],
      exercise:
        'Write a loop that sums numbers 1 through 100 and prints the total.'
    },
    {
      title: 'Iteration Patterns',
      summary: 'Map, filter, reduce as common loop shapes.',
      concept:
        'Many tasks fit patterns: map transforms each item; filter keeps some items; reduce folds many values into one. Prefer built-ins where idiomatic.',
      keywords: ['map', 'filter', 'reduce'],
      order: {
        title: 'Order the steps to filter even numbers',
        items: ['Iterate items', 'Check if divisible by 2', 'Keep passing items', 'Return result list'],
        solution: ['Iterate items', 'Check if divisible by 2', 'Keep passing items', 'Return result list']
      }
    },
    {
      title: 'Loop Debugging',
      summary: 'Find and fix off-by-one and exit bugs.',
      concept:
        'Common issues: wrong start/end indices, not updating loop variable, mutating while iterating. Use prints or a debugger to inspect state each iteration.',
      keywords: ['off-by-one', 'debugger'],
      callouts: [
        { type: 'tip', title: 'Binary Search Bug Fix', body: 'Re-check mid update and inclusive/exclusive bounds.' }
      ]
    },
    {
      title: 'Defining Functions',
      summary: 'Bundle steps into reusable units.',
      concept:
        'Functions take inputs (parameters), do work, and return outputs. Keep them small and single-purpose. Name clearly to reveal intent.',
      keywords: ['function', 'parameters', 'return'],
      exercise:
        'Write a function that takes a list of numbers and returns the average.'
    },
    {
      title: 'Parameters and Return Values',
      summary: 'Pass data in and get results out.',
      concept:
        'Use positional or named parameters; set sensible defaults. Return a single value or a small object/tuple for multiple values.',
      keywords: ['defaults', 'tuple/object'],
      quiz: {
        question: 'What is a good reason to use named parameters?',
        options: ['Shorter names', 'Order doesn’t matter and clarity improves', 'Faster execution', 'Avoid functions'],
        answerIndex: 1,
        hint: 'Readability and flexibility.'
      }
    },
    {
      title: 'Scope and Mutability',
      summary: 'Where names live and how values change.',
      concept:
        'Local vs global scope affects visibility and side effects. Prefer limited scope and immutability where practical to reduce bugs.',
      keywords: ['scope', 'immutable'],
      shortAnswer: {
        prompt: 'Explain a bug caused by unintended mutation and how to avoid it.',
        expectedKeywords: ['scope', 'mutation', 'copy/clone'],
        sample: 'Mutated shared list in helper; fix by copying input or returning new value.'
      }
    },
    {
      title: 'Recursion Basics',
      summary: 'Define a solution in terms of itself with a base case.',
      concept:
        'A recursive function calls itself on smaller inputs until a base case. Ensure progress toward base and consider stack depth limits.',
      keywords: ['base case', 'stack'],
      flow: {
        title: 'Recursive Thinking',
        steps: ['Identify base case', 'Reduce problem', 'Call recursively', 'Combine results']
      }
    },
    {
      title: 'Arrays/Lists',
      summary: 'Ordered collections for indexed access.',
      concept:
        'Use lists for ordered data and iteration. Watch out for out-of-bounds and mutation while iterating. Prefer constant-time push/pop at the end when available.',
      keywords: ['index', 'push/pop'],
      quiz: {
        question: 'Accessing an index beyond length typically results in…',
        options: ['Wrap-around', 'Silent success', 'Error or undefined', 'Automatic resize'],
        answerIndex: 2,
        hint: 'Depends on language, but not success.'
      }
    },
    {
      title: 'Objects/Maps/Dictionaries',
      summary: 'Key-value storage for fast lookups.',
      concept:
        'Dictionaries store values by key. Great for counting, grouping, and caches. Beware of missing keys and default values.',
      keywords: ['hash map', 'key', 'value'],
      sorter: {
        prompt: 'Match tasks to best structure',
        items: [
          'Counting word frequencies',
          'Maintaining unique IDs',
          'Preserving insertion order list',
          'Fast membership check'
        ],
        solution: {
          'Dictionary/Map': ['Counting word frequencies'],
          'Set': ['Maintaining unique IDs', 'Fast membership check'],
          'Array/List': ['Preserving insertion order list']
        }
      }
    },
    {
      title: 'Sets and Uniqueness',
      summary: 'Store unique elements and test membership quickly.',
      concept:
        'Sets ensure uniqueness and offer fast membership tests. Useful for de-duplication and intersections/differences.',
      keywords: ['set', 'membership'],
      exercise:
        'Given a list with duplicates, produce a list of unique items and count of removed duplicates.'
    },
    {
      title: 'Strings as Sequences',
      summary: 'Work with text safely and efficiently.',
      concept:
        'Strings behave like sequences of characters. Prefer immutable operations or builders; be mindful of Unicode and casing.',
      keywords: ['string', 'unicode'],
      callouts: [
        { type: 'tip', title: 'Immutability Warning', body: 'Repeated concatenation in tight loops can be slow; use join/builders.' }
      ]
    },
    {
      title: 'Decomposition & Pseudocode',
      summary: 'Break problems into steps and sketch solutions.',
      concept:
        'Describe inputs/outputs, outline steps in plain language, then implement. Start with small examples and expand.',
      keywords: ['pseudocode', 'decomposition'],
      flashcards: {
        title: 'Decomposition Moves',
        cards: [
          { front: 'Extract Function', back: 'Move a coherent block into a function.' },
          { front: 'Define Interface', back: 'Be explicit about inputs/outputs.' },
          { front: 'Progressive Enhancement', back: 'Start simple, then add features.' }
        ]
      }
    },
    {
      title: 'Big-O Intuition',
      summary: 'Reason about how work grows with input size.',
      concept:
        'Constant, linear, log, and quadratic patterns cover most beginner code. Favor linear passes; beware nested loops over large data.',
      keywords: ['O(1)', 'O(n)', 'O(n^2)'],
      order: {
        title: 'Order from fastest to slowest (as n grows)',
        items: ['O(n log n)', 'O(1)', 'O(n^2)', 'O(n)'],
        solution: ['O(1)', 'O(n)', 'O(n log n)', 'O(n^2)']
      }
    },
    {
      title: 'Search & Sort Overview',
      summary: 'Common strategies and when to use them.',
      concept:
        'Linear vs binary search; selection vs insertion vs merge/quick sort. Use library sorts; understand trade-offs to pick the right approach.',
      keywords: ['binary search', 'sorting'],
      quiz: {
        question: 'Binary search requires…',
        options: ['Random access', 'Sorted input', 'Hash tables', 'Linked lists'],
        answerIndex: 1,
        hint: 'It halves the search range each step.'
      }
    },
    {
      title: 'Testing Basics',
      summary: 'Write small checks to prevent regressions.',
      concept:
        'Start with simple unit-style tests for pure functions. Arrange-Act-Assert: set inputs, call the code, check outputs. Automate and run often.',
      keywords: ['unit test', 'assert'],
      shortAnswer: {
        prompt: 'Sketch a test for your average(list) function.',
        expectedKeywords: ['arrange', 'act', 'assert'],
        sample: 'Arrange sample list, act by calling function, assert expected number, include edge case (empty).' 
      }
    }
  ]
}

export default area
