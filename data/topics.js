export const focusAreas = [
  {
    slug: 'math-foundations',
    title: 'Math Foundations',
    description: 'Key math building blocks, one small concept at a time.',
    tags: ['Algebra', 'Numbers', 'Logic'],
    lessons: [
      {
        title: 'Order of Operations (PEMDAS)',
        summary: 'A consistent rule for evaluating expressions.',
        concept:
          'Evaluate expressions by Parentheses → Exponents → Multiplication/Division → Addition/Subtraction, left to right within each step.',
        exercise:
          'Compute 7 + 3 × (10 − 6)^2. Hint: Parentheses first, then exponent, etc.'
      },
      {
        title: 'Distributive Property',
        summary: 'Multiply across addition: a(b + c) = ab + ac.',
        concept:
          'The distributive property lets you expand and simplify expressions by multiplying each term inside parentheses.',
        exercise:
          'Expand and simplify 3(x + 4) − 2(x − 1).' 
      },
      {
        title: 'Linear Equations',
        summary: 'Solve for the unknown with inverse operations.',
        concept:
          'To solve ax + b = c, isolate x by reversing operations in the correct order.',
        exercise:
          'Solve 2x − 5 = 11 and check your solution.'
      }
    ]
  },
  {
    slug: 'science-essentials',
    title: 'Science Essentials',
    description: 'Core ideas from physics and biology, made bite-sized.',
    tags: ['Physics', 'Biology'],
    lessons: [
      {
        title: 'Newton’s First Law',
        summary: 'Objects keep their motion unless acted on.',
        concept:
          'An object in motion stays in motion (and at rest stays at rest) unless acted on by a net external force.',
        exercise:
          'Describe a real-world example where friction acts as the external force.'
      },
      {
        title: 'Cell Theory Basics',
        summary: 'All living things are made of cells.',
        concept:
          'Cells are the basic unit of life; new cells arise from existing cells; organisms can be unicellular or multicellular.',
        exercise:
          'List three differences between prokaryotic and eukaryotic cells.'
      }
    ]
  },
  {
    slug: 'coding-basics',
    title: 'Coding Basics',
    description: 'Start programming by mastering a few core patterns.',
    tags: ['Logic', 'Algorithms'],
    lessons: [
      {
        title: 'Variables and Types',
        summary: 'Names for values that can change.',
        concept:
          'A variable stores a value. Types define what operations are valid on that value (e.g., number, string, boolean).',
        exercise:
          'In your favorite language, create a number variable and print its doubled value.'
      },
      {
        title: 'Loops',
        summary: 'Repeat work efficiently.',
        concept:
          'Loops like for/while repeat a block. Keep a clear exit condition to avoid infinite loops.',
        exercise:
          'Write a loop that sums numbers 1 through 100.'
      }
    ]
  }
]

export function getAreaBySlug(slug) {
  return focusAreas.find((a) => a.slug === slug)
}

