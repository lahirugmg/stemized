const area = {
  slug: 'proofs',
  title: 'Mathematical Reasoning & Proofs',
  description: 'Build rigorous thinking: logic, sets, proof styles.',
  tags: ['Logic', 'Sets', 'Proofs', 'Reasoning'],
  color: '#8b5cf6',
  theme: 'math',
  modules: [
    { slug: 'logic-sets', title: 'Module 1: Logic & Sets', description: 'Propositions, quantifiers, set operations.', lessonIndexes: [0, 1] },
    { slug: 'proof-methods', title: 'Module 2: Proof Methods', description: 'Direct, contrapositive, contradiction.', lessonIndexes: [2, 3] },
    { slug: 'induction-writing', title: 'Module 3: Induction & Writing', description: 'Mathematical induction and clear proofs.', lessonIndexes: [4, 5] }
  ],
  lessons: [
    {
      title: 'Propositions & Truth Tables',
      summary: 'Statements that are true or false; logical connectives.',
      concept: 'A proposition has a definite truth value. Use AND, OR, NOT, and IF-THEN to build compound statements. Truth tables show all possible truth values.',
      keywords: ['proposition', 'conjunction', 'disjunction', 'negation', 'implication'],
      flashcards: {
        title: 'Logic Symbols',
        cards: [
          { front: 'p ∧ q', back: 'p AND q (conjunction)' },
          { front: 'p ∨ q', back: 'p OR q (disjunction)' },
          { front: '¬p', back: 'NOT p (negation)' },
          { front: 'p → q', back: 'If p then q (implication)' }
        ]
      },
      quiz: {
        question: 'When is "p → q" false?',
        options: ['When p is true and q is false', 'When p is false and q is true', 'When both are false', 'When both are true'],
        answerIndex: 0,
        hint: 'An implication is false only when the hypothesis is true but conclusion is false.'
      }
    },
    {
      title: 'Sets & Quantifiers',
      summary: 'Set notation, operations, and universal/existential quantifiers.',
      concept: 'Sets contain elements. Use ∪ (union), ∩ (intersection), and \' (complement). Quantifiers: ∀ (for all), ∃ (there exists).',
      keywords: ['set', 'union', 'intersection', 'universal', 'existential'],
      categorize: {
        title: 'Set Operations',
        categories: ['Union A ∪ B', 'Intersection A ∩ B', 'Complement A\''],
        items: ['Elements in A or B or both', 'Elements in both A and B', 'Elements not in A'],
        solution: {
          'Union A ∪ B': ['Elements in A or B or both'],
          'Intersection A ∩ B': ['Elements in both A and B'],
          'Complement A\'': ['Elements not in A']
        }
      },
      quiz: {
        question: 'What does ∃x such that P(x) mean?',
        options: ['All x satisfy P(x)', 'Some x satisfies P(x)', 'No x satisfies P(x)', 'Most x satisfy P(x)'],
        answerIndex: 1,
        hint: 'Existential quantifier means at least one.'
      }
    },
    {
      title: 'Direct & Contrapositive Proofs',
      summary: 'Prove "If P then Q" directly or via contrapositive.',
      concept: 'Direct: Assume P, use definitions and known facts to show Q. Contrapositive: Prove "If not Q then not P" which is equivalent.',
      keywords: ['direct proof', 'contrapositive', 'assume', 'conclude'],
      order: {
        title: 'Steps for Direct Proof of "If n is even then n² is even"',
        items: ['Conclude n² is even', 'Assume n is even', 'Write n = 2k for integer k', 'Show n² = 2(2k²)'],
        solution: ['Assume n is even', 'Write n = 2k for integer k', 'Show n² = 2(2k²)', 'Conclude n² is even']
      },
      shortAnswer: {
        prompt: 'State the contrapositive of "If n is prime, then n is odd".',
        expectedKeywords: ['If n is even, then n is not prime'],
        sample: 'If n is even, then n is not prime (or n is composite).'
      }
    },
    {
      title: 'Proof by Contradiction',
      summary: 'Assume the negation and derive a contradiction.',
      concept: 'To prove P, assume ¬P and show this leads to a contradiction. Then P must be true. Useful for proving "impossibility" statements.',
      keywords: ['contradiction', 'assume negation', 'derive impossible'],
      flashcards: {
        title: 'Contradiction Proof Steps',
        cards: [
          { front: 'Step 1', back: 'Assume the negation of what you want to prove' },
          { front: 'Step 2', back: 'Use logic and known facts to derive consequences' },
          { front: 'Step 3', back: 'Find a contradiction (A and ¬A)' },
          { front: 'Step 4', back: 'Conclude the original statement is true' }
        ]
      },
      quiz: {
        question: 'In proving √2 is irrational by contradiction, what do you assume?',
        options: ['√2 is irrational', '√2 is rational', '√2 > 1', '√2 < 2'],
        answerIndex: 1,
        hint: 'Assume the opposite of what you want to prove.'
      }
    },
    {
      title: 'Mathematical Induction',
      summary: 'Prove statements about all positive integers using base case and inductive step.',
      concept: 'Base case: Prove P(1). Inductive step: Assume P(k), prove P(k+1). Then P(n) is true for all n ≥ 1.',
      keywords: ['induction', 'base case', 'inductive step', 'inductive hypothesis'],
      flow: {
        title: 'Induction Proof Structure',
        steps: [
          'State what you want to prove: P(n) for all n ≥ 1',
          'Base case: Verify P(1) is true',
          'Inductive step: Assume P(k) is true',
          'Use P(k) to prove P(k+1) is true',
          'Conclude P(n) is true for all n ≥ 1'
        ]
      },
      quiz: {
        question: 'In the inductive step, what can you assume?',
        options: ['P(n) for all n', 'P(k) for some specific k', 'P(k+1)', 'Nothing'],
        answerIndex: 1,
        hint: 'You assume the statement holds for k, then prove it for k+1.'
      }
    },
    {
      title: 'Writing Clean Proofs',
      summary: 'Structure, clarity, and mathematical writing conventions.',
      concept: 'Use clear definitions, state assumptions explicitly, show logical flow, and write for your audience. Avoid vague language.',
      keywords: ['clarity', 'structure', 'definitions', 'audience'],
      terms: {
        title: 'Proof Writing Tips',
        items: [
          { term: 'QED', def: 'Quod Erat Demonstrandum - marks end of proof' },
          { term: 'WLOG', def: 'Without Loss of Generality - handles symmetric cases' },
          { term: 'Therefore', def: 'Indicates a conclusion follows from previous statements' },
          { term: 'Since', def: 'Indicates the reason for the following statement' }
        ]
      },
      shortAnswer: {
        prompt: 'What should you do before starting any proof?',
        expectedKeywords: ['understand', 'definitions', 'assume', 'prove'],
        sample: 'Clearly understand what you need to assume and what you need to prove. Know all relevant definitions.'
      }
    }
  ]
}

export default area