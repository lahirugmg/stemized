const area = {
  slug: 'financial-math',
  title: 'Financial Mathematics',
  description: 'Interest, annuities, loans, and risk basics.',
  tags: ['Time Value', 'Interest', 'Annuities', 'Loans', 'Bonds', 'Risk'],
  color: '#059669',
  theme: 'math',
  modules: [
    { slug: 'time-value', title: 'Module 1: Time Value of Money', description: 'Present value, future value, compound interest.', lessonIndexes: [0, 1] },
    { slug: 'annuities-loans', title: 'Module 2: Annuities & Loans', description: 'Payment streams and amortization schedules.', lessonIndexes: [2, 3] },
    { slug: 'bonds-risk', title: 'Module 3: Bonds & Risk', description: 'Bond pricing and basic risk concepts.', lessonIndexes: [4, 5] }
  ],
  lessons: [
    {
      title: 'Time Value of Money',
      summary: 'Money today is worth more than money tomorrow; present and future value.',
      concept: 'Time value principle: $1 today > $1 tomorrow due to earning potential. Future Value: FV = PV(1+r)ⁿ. Present Value: PV = FV/(1+r)ⁿ.',
      keywords: ['time value', 'present value', 'future value', 'opportunity cost'],
      flashcards: {
        title: 'Time Value Formulas',
        cards: [
          { front: 'Future Value formula', back: 'FV = PV(1 + r)ⁿ' },
          { front: 'Present Value formula', back: 'PV = FV/(1 + r)ⁿ' },
          { front: 'Why is money worth more today?', back: 'Opportunity cost - can invest and earn return' },
          { front: 'Discount rate', back: 'Interest rate used to find present value' }
        ]
      },
      shortAnswer: {
        prompt: 'Would you rather have $1000 today or $1100 in one year if interest rate is 8%?',
        expectedKeywords: ['present value', '$1100/1.08', '$1018.52'],
        sample: 'Compare $1000 today vs PV of $1100 = $1100/1.08 = $1018.52. Take the $1100 in one year.'
      }
    },
    {
      title: 'Simple vs Compound Interest',
      summary: 'Simple interest is linear; compound interest grows exponentially.',
      concept: 'Simple: I = Prt, A = P(1 + rt). Compound: A = P(1 + r/n)ⁿᵗ. More frequent compounding → higher effective rate.',
      keywords: ['simple interest', 'compound interest', 'compounding frequency', 'effective rate'],
      categorize: {
        title: 'Interest Characteristics',
        categories: ['Simple Interest', 'Compound Interest'],
        items: ['Linear growth', 'Exponential growth', 'Interest on principal only', 'Interest on interest', 'I = Prt', 'A = P(1+r)ⁿ'],
        solution: {
          'Simple Interest': ['Linear growth', 'Interest on principal only', 'I = Prt'],
          'Compound Interest': ['Exponential growth', 'Interest on interest', 'A = P(1+r)ⁿ']
        }
      },
      quiz: {
        question: '$1000 at 6% for 5 years. Compound interest exceeds simple by:',
        options: ['$0', '$38.82', '$76.31', '$150.00'],
        answerIndex: 2,
        hint: 'Compound: $1000(1.06)⁵ = $1338.23. Simple: $1000(1 + 0.06×5) = $1300.'
      }
    },
    {
      title: 'Annuities & Payment Streams',
      summary: 'Series of equal payments; ordinary vs annuity due; present and future value.',
      concept: 'Annuity = series of equal payments. PV = PMT × [(1-(1+r)⁻ⁿ)/r]. FV = PMT × [((1+r)ⁿ-1)/r]. Annuity due pays at beginning of period.',
      keywords: ['annuity', 'ordinary annuity', 'annuity due', 'payment stream'],
      terms: {
        title: 'Annuity Types',
        items: [
          { term: 'Ordinary Annuity', def: 'Payments at end of each period' },
          { term: 'Annuity Due', def: 'Payments at beginning of each period' },
          { term: 'Perpetuity', def: 'Infinite series of payments (PV = PMT/r)' },
          { term: 'Growing Annuity', def: 'Payments grow at constant rate each period' }
        ]
      },
      quiz: {
        question: 'PV of $100/month for 3 years at 6% APR (monthly):',
        options: ['$3200.00', '$3244.06', '$3600.00', '$2943.94'],
        answerIndex: 1,
        hint: 'Use monthly rate 0.06/12 = 0.005, n = 36 periods.'
      }
    },
    {
      title: 'Loan Amortization',
      summary: 'Fixed payment loans; principal and interest breakdown over time.',
      concept: 'Amortizing loan: fixed payment splits between interest and principal. Early payments mostly interest; later payments mostly principal.',
      keywords: ['amortization', 'loan payment', 'principal', 'interest breakdown'],
      flow: {
        title: 'Amortization Schedule Steps',
        steps: [
          'Calculate fixed payment: PMT = PV × [r(1+r)ⁿ]/[(1+r)ⁿ-1]',
          'For each period: Interest = Balance × Rate',
          'Principal Payment = Total Payment - Interest',
          'New Balance = Old Balance - Principal Payment',
          'Repeat until balance reaches zero'
        ]
      },
      order: {
        title: 'Month 1 of $10,000 loan at 6% APR, 3-year term',
        items: ['Calculate fixed monthly payment', 'Interest = $10,000 × 0.005 = $50', 'Principal = Payment - Interest', 'New balance = $10,000 - Principal'],
        solution: ['Calculate fixed monthly payment', 'Interest = $10,000 × 0.005 = $50', 'Principal = Payment - Interest', 'New balance = $10,000 - Principal']
      }
    },
    {
      title: 'Bond Pricing & Yield to Maturity',
      summary: 'Bonds pay coupons plus principal; price using present value.',
      concept: 'Bond price = PV of coupon payments + PV of face value. YTM is the discount rate that makes price = present value of cash flows.',
      keywords: ['bond', 'coupon', 'face value', 'yield to maturity', 'YTM'],
      flashcards: {
        title: 'Bond Concepts',
        cards: [
          { front: 'Coupon Rate', back: 'Annual coupon payment ÷ face value' },
          { front: 'Current Yield', back: 'Annual coupon ÷ current price' },
          { front: 'YTM', back: 'Total return if held to maturity' },
          { front: 'Bond trades at premium when', back: 'Coupon rate > YTM' },
          { front: 'Bond trades at discount when', back: 'Coupon rate < YTM' }
        ]
      },
      shortAnswer: {
        prompt: 'A bond trades below face value. What does this suggest about market interest rates?',
        expectedKeywords: ['risen', 'higher', 'discount'],
        sample: 'Market rates have risen above the bond\'s coupon rate, so it trades at a discount.'
      }
    },
    {
      title: 'Risk & Return Basics',
      summary: 'Higher expected return requires higher risk; diversification reduces risk.',
      concept: 'Risk-return tradeoff: investors demand higher expected return for higher risk. Diversification can reduce portfolio risk without reducing expected return.',
      keywords: ['risk', 'return', 'diversification', 'portfolio', 'correlation'],
      categorize: {
        title: 'Types of Risk',
        categories: ['Systematic Risk', 'Unsystematic Risk'],
        items: ['Company bankruptcy', 'Market crash', 'Industry regulation', 'Interest rate changes', 'Inflation'],
        solution: {
          'Systematic Risk': ['Market crash', 'Interest rate changes', 'Inflation'],
          'Unsystematic Risk': ['Company bankruptcy', 'Industry regulation']
        }
      },
      terms: {
        title: 'Risk Concepts',
        items: [
          { term: 'Systematic Risk', def: 'Market-wide risk that affects all securities' },
          { term: 'Unsystematic Risk', def: 'Company/industry specific risk' },
          { term: 'Diversification', def: 'Holding variety of investments to reduce risk' },
          { term: 'Correlation', def: 'How investments move together (−1 to +1)' }
        ]
      },
      quiz: {
        question: 'Diversification is most effective when assets have:',
        options: ['Perfect positive correlation', 'Perfect negative correlation', 'Zero correlation', 'High volatility'],
        answerIndex: 1,
        hint: 'Negative correlation means when one goes up, the other goes down.'
      }
    }
  ]
}

export default area