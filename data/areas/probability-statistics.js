const area = {
  slug: 'probability-statistics',
  title: 'Probability & Statistics',
  description: 'Describe data, reason about uncertainty, and draw conclusions from samples.',
  tags: ['Descriptive','Probability','Distributions','Inference'],
  color: '#f59e0b',
  theme: 'math',
  modules: [
    { slug: 'descriptive', title: 'Module 1: Descriptive Statistics', description: 'Center, spread, and visualization.', lessonIndexes: [0,1] },
    { slug: 'probability', title: 'Module 2: Probability Basics', description: 'Rules, independence, and random variables.', lessonIndexes: [2,3] },
    { slug: 'inference', title: 'Module 3: Statistical Inference', description: 'Confidence intervals and hypothesis tests.', lessonIndexes: [4,5] }
  ],
  lessons: [
    {
      title: 'Center & Spread',
      summary: 'Mean, median, mode, range, IQR, and standard deviation.',
      concept: 'Mean is average; median is middle; mode is most frequent. Spread measures variability: range, IQR, and standard deviation.',
      keywords: ['mean','median','IQR','std dev'],
      categorize: { title: 'Robust or Not?', categories: ['Robust','Not Robust'], items: ['Mean','Median','IQR','Range'], solution: { 'Robust':['Median','IQR'], 'Not Robust':['Mean','Range'] } },
      shortAnswer: { prompt: 'When prefer median over mean?', expectedKeywords: ['outliers','skewed'], sample: 'When data are skewed or have outliers.' }
    },
    {
      title: 'Visualizing Data',
      summary: 'Histograms, boxplots, and scatterplots.',
      concept: 'Choose visuals based on data type. Histograms show distribution; boxplots show quartiles; scatterplots show relationships.',
      keywords: ['histogram','boxplot','scatterplot'],
      quiz: { question: 'Best plot to show relation of height vs weight?', options: ['Histogram','Boxplot','Scatterplot','Bar chart'], answerIndex: 2, hint: 'Two quantitative variables.' }
    },
    {
      title: 'Probability Rules',
      summary: 'Addition, multiplication, complements, and independence.',
      concept: 'P(A∪B)=P(A)+P(B)−P(A∩B). If independent: P(A∩B)=P(A)P(B). Complements: P(A^c)=1−P(A).',
      keywords: ['independence','union','intersection'],
      flashcards: { title: 'Key Formulas', cards: [ { front: 'P(A∪B)', back: 'P(A)+P(B)−P(A∩B)' }, { front: 'P(A^c)', back: '1−P(A)' } ] }
    },
    {
      title: 'Random Variables & Distributions',
      summary: 'Discrete vs continuous; binomial and normal basics.',
      concept: 'Discrete variables take countable values; continuous take real intervals. Binomial: n, p; Normal: mean μ, std σ.',
      keywords: ['binomial','normal','pdf','cdf'],
      order: { title: 'Binomial Conditions', items: ['Fixed n','Independent trials','Two outcomes','Constant p'], solution: ['Fixed n','Independent trials','Two outcomes','Constant p'] }
    },
    {
      title: 'Confidence Intervals',
      summary: 'Estimate population parameters with uncertainty.',
      concept: 'CI: estimate ± margin of error. For mean with known σ: x̄ ± z*·σ/√n. Interpret as method long‑run coverage, not probability of parameter.',
      keywords: ['CI','margin of error','z*'],
      quiz: { question: 'As n increases, margin of error…', options: ['increases','decreases','unchanged','random'], answerIndex: 1, hint: 'Denominator √n.' }
    },
    {
      title: 'Hypothesis Testing',
      summary: 'Null vs alternative, p‑values, Type I/II errors.',
      concept: 'State H0 and Ha, choose test, compute statistic and p‑value, draw conclusion with α. Beware p‑hacking and practical vs statistical significance.',
      keywords: ['p‑value','alpha','power'],
      sorter: { prompt: 'Match term to definition', items: ['Type I error','Type II error','p‑value','Power'], solution: { 'Type I error':['Reject H0 when true'], 'Type II error':['Fail to reject H0 when false'], 'p‑value':['Probability of data or more extreme if H0 true'], 'Power':['1 − β'] } }
    }
  ]
}

export default area

