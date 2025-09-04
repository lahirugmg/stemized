const area = {
  slug: 'linear-algebra',
  title: 'Linear Algebra',
  description: 'Vectors, matrices, transformations—the language of modern math.',
  tags: ['Vectors', 'Matrices', 'Transformations', 'Eigenvalues', 'Spaces'],
  color: '#ef4444',
  theme: 'math',
  modules: [
    { slug: 'vectors-matrices', title: 'Module 1: Vectors & Matrices', description: 'Vector operations and matrix arithmetic.', lessonIndexes: [0, 1] },
    { slug: 'systems-spaces', title: 'Module 2: Systems & Vector Spaces', description: 'Solving systems and understanding span, basis.', lessonIndexes: [2, 3] },
    { slug: 'eigen-transform', title: 'Module 3: Eigenvalues & Transformations', description: 'Eigenvalues, eigenvectors, and diagonalization.', lessonIndexes: [4, 5] }
  ],
  lessons: [
    {
      title: 'Vectors & Vector Operations',
      summary: 'Vector addition, scalar multiplication, dot product, and geometric interpretation.',
      concept: 'Vectors represent magnitude and direction. Operations: u + v (parallelogram), ku (scaling), u·v (projection). In ℝⁿ, vectors are n-tuples.',
      keywords: ['vector', 'dot product', 'magnitude', 'direction', 'parallelogram'],
      flashcards: {
        title: 'Vector Operations',
        cards: [
          { front: 'u·v formula', back: 'u₁v₁ + u₂v₂ + ... + uₙvₙ' },
          { front: '||u|| formula', back: '√(u₁² + u₂² + ... + uₙ²)' },
          { front: 'u·v = 0 means', back: 'Vectors are orthogonal (perpendicular)' },
          { front: 'Geometric meaning of u·v', back: '||u|| ||v|| cos θ where θ is angle between' }
        ]
      },
      quiz: {
        question: 'If u·v = 0, what can you conclude?',
        options: ['u = 0 or v = 0', 'u and v are parallel', 'u and v are perpendicular', 'u = v'],
        answerIndex: 2,
        hint: 'Zero dot product means orthogonal vectors.'
      }
    },
    {
      title: 'Matrix Operations & Properties',
      summary: 'Matrix addition, multiplication, transpose, and inverse.',
      concept: 'Matrices represent linear transformations. (AB)ᵢⱼ = Σ AᵢₖBₖⱼ. Properties: (AB)ᵀ = BᵀAᵀ, (AB)⁻¹ = B⁻¹A⁻¹.',
      keywords: ['matrix', 'multiplication', 'transpose', 'inverse', 'identity'],
      order: {
        title: 'Matrix Multiplication [2×3] × [3×2]',
        items: ['Result is 2×2 matrix', 'Check dimensions: (2×3)(3×2) ✓', 'Compute each entry using row×column', 'Verify inner dimensions match (3)'],
        solution: ['Check dimensions: (2×3)(3×2) ✓', 'Verify inner dimensions match (3)', 'Result is 2×2 matrix', 'Compute each entry using row×column']
      },
      quiz: {
        question: 'What is the size of AB if A is 4×5 and B is 5×3?',
        options: ['4×3', '5×5', '4×5', 'Undefined'],
        answerIndex: 0,
        hint: 'Result has outer dimensions: (4×5)(5×3) = 4×3.'
      }
    },
    {
      title: 'Gaussian Elimination & Determinants',
      summary: 'Row operations to solve systems; determinant properties and computation.',
      concept: 'Row operations transform to row echelon form. Determinant measures "volume scaling" of transformation. det(AB) = det(A)det(B).',
      keywords: ['Gaussian elimination', 'row echelon', 'determinant', 'pivot'],
      terms: {
        title: 'Gaussian Elimination',
        items: [
          { term: 'Elementary Row Operations', def: 'Swap rows, multiply row by nonzero, add multiple of one row to another' },
          { term: 'Leading Entry (Pivot)', def: 'First nonzero entry in a row' },
          { term: 'Row Echelon Form', def: 'Pivots form staircase pattern' },
          { term: 'Reduced Row Echelon Form', def: 'Pivots are 1, only nonzero in their column' }
        ]
      },
      shortAnswer: {
        prompt: 'When does a 3×3 matrix have determinant 0?',
        expectedKeywords: ['singular', 'dependent', 'no inverse'],
        sample: 'When the matrix is singular (not invertible), meaning its rows/columns are linearly dependent.'
      }
    },
    {
      title: 'Vector Spaces & Linear Independence',
      summary: 'Span, linear independence, basis, and dimension.',
      concept: 'Vector space: closed under addition and scalar multiplication. Basis: linearly independent set that spans the space. Dimension = size of basis.',
      keywords: ['span', 'linear independence', 'basis', 'dimension'],
      categorize: {
        title: 'Linear Independence',
        categories: ['Linearly Independent', 'Linearly Dependent'],
        items: ['Standard basis vectors in ℝ³', 'Three vectors in ℝ²', 'Two parallel vectors', 'Columns of invertible matrix'],
        solution: {
          'Linearly Independent': ['Standard basis vectors in ℝ³', 'Columns of invertible matrix'],
          'Linearly Dependent': ['Three vectors in ℝ²', 'Two parallel vectors']
        }
      },
      quiz: {
        question: 'What is the dimension of the span of {(1,2,3), (2,4,6)}?',
        options: ['0', '1', '2', '3'],
        answerIndex: 1,
        hint: 'The second vector is 2 times the first, so they span a line.'
      }
    },
    {
      title: 'Eigenvalues & Eigenvectors',
      summary: 'Find scalars λ and vectors v such that Av = λv.',
      concept: 'Eigenvector v: direction unchanged by transformation A. Eigenvalue λ: scaling factor. Find by solving det(A - λI) = 0.',
      keywords: ['eigenvalue', 'eigenvector', 'characteristic polynomial', 'invariant direction'],
      flow: {
        title: 'Finding Eigenvalues & Eigenvectors',
        steps: [
          'Set up characteristic equation det(A - λI) = 0',
          'Solve polynomial equation for eigenvalues λ',
          'For each λ, solve (A - λI)v = 0 for eigenvectors v',
          'Eigenvectors are in the null space of (A - λI)',
          'Normalize or choose convenient representatives'
        ]
      },
      quiz: {
        question: 'If Av = 3v for some nonzero v, what is 3?',
        options: ['An eigenvector', 'An eigenvalue', 'A determinant', 'A trace'],
        answerIndex: 1,
        hint: 'The scalar that scales the eigenvector is the eigenvalue.'
      }
    },
    {
      title: 'Diagonalization & Applications',
      summary: 'When A = PDP⁻¹; applications to powers and differential equations.',
      concept: 'If A has n linearly independent eigenvectors, then A = PDP⁻¹ where P has eigenvectors as columns, D is diagonal with eigenvalues.',
      keywords: ['diagonalization', 'similar matrices', 'powers', 'applications'],
      flashcards: {
        title: 'Diagonalization',
        cards: [
          { front: 'A = PDP⁻¹', back: 'P = eigenvectors, D = diagonal eigenvalues' },
          { front: 'Aⁿ = ?', back: 'PDⁿP⁻¹ (when A is diagonalizable)' },
          { front: 'When is A diagonalizable?', back: 'When A has n linearly independent eigenvectors' },
          { front: 'Geometric multiplicity', back: 'Dimension of eigenspace for each eigenvalue' }
        ]
      },
      shortAnswer: {
        prompt: 'Why is diagonalization useful for computing A¹⁰⁰?',
        expectedKeywords: ['D¹⁰⁰', 'diagonal', 'easy'],
        sample: 'Because A¹⁰⁰ = PD¹⁰⁰P⁻¹, and raising a diagonal matrix to a power just raises each diagonal entry to that power.'
      }
    }
  ]
}

export default area