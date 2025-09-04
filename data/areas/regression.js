const area = {
  slug: 'regression',
  title: 'Regression & Data Analysis',
  description: 'From scatterplots to models you can trust.',
  tags: ['EDA', 'Linear Regression', 'Multiple Regression', 'Regularization', 'Residuals'],
  color: '#f59e0b',
  theme: 'math',
  modules: [
    { slug: 'eda-simple', title: 'Module 1: EDA & Simple Regression', description: 'Exploratory analysis and simple linear regression.', lessonIndexes: [0, 1] },
    { slug: 'multiple-regularization', title: 'Module 2: Multiple Regression & Regularization', description: 'Multiple predictors and regularization methods.', lessonIndexes: [2, 3] },
    { slug: 'diagnostics-validation', title: 'Module 3: Diagnostics & Validation', description: 'Model checking and avoiding common pitfalls.', lessonIndexes: [4, 5] }
  ],
  lessons: [
    {
      title: 'EDA & Visualization',
      summary: 'Explore data before modeling: distributions, relationships, outliers.',
      concept: 'Always plot your data first. Look for patterns, outliers, non-linearity. Use histograms, boxplots, scatterplots. Summary statistics complement but don\'t replace visualization.',
      keywords: ['exploratory data analysis', 'visualization', 'outliers', 'patterns'],
      terms: {
        title: 'EDA Techniques',
        items: [
          { term: 'Histogram', def: 'Shows distribution of single variable' },
          { term: 'Boxplot', def: 'Shows quartiles, median, and outliers' },
          { term: 'Scatterplot', def: 'Shows relationship between two variables' },
          { term: 'Correlation Matrix', def: 'Pairwise correlations between all variables' }
        ]
      },
      categorize: {
        title: 'When to Use Each Plot',
        categories: ['Single Variable', 'Two Variables', 'Multiple Variables'],
        items: ['Histogram', 'Scatterplot', 'Correlation heatmap', 'Boxplot', 'Pairs plot'],
        solution: {
          'Single Variable': ['Histogram', 'Boxplot'],
          'Two Variables': ['Scatterplot'],
          'Multiple Variables': ['Correlation heatmap', 'Pairs plot']
        }
      },
      quiz: {
        question: 'Anscombe\'s quartet teaches us:',
        options: ['Correlation implies causation', 'Always visualize your data', 'Linear regression always works', 'Outliers don\'t matter'],
        answerIndex: 1,
        hint: 'Four datasets with same correlation but very different patterns.'
      }
    },
    {
      title: 'Correlation vs Causation',
      summary: 'Correlation doesn\'t imply causation; confounding variables and Simpson\'s paradox.',
      concept: 'Strong correlation ≠ causation. Confounding variables can create spurious correlations. Simpson\'s paradox: trend reverses when data is grouped.',
      keywords: ['correlation', 'causation', 'confounding', 'Simpson paradox'],
      flashcards: {
        title: 'Correlation Pitfalls',
        cards: [
          { front: 'Correlation coefficient range', back: '-1 to +1' },
          { front: 'r = 0 means', back: 'No linear relationship (may have nonlinear)' },
          { front: 'Confounding variable', back: 'Hidden variable that affects both X and Y' },
          { front: 'Simpson\'s paradox', back: 'Correlation reverses when data is grouped' }
        ]
      },
      shortAnswer: {
        prompt: 'Ice cream sales correlate with drowning deaths. Does ice cream cause drowning?',
        expectedKeywords: ['temperature', 'summer', 'confounding'],
        sample: 'No. Temperature (summer weather) is a confounding variable that increases both ice cream sales and swimming activity.'
      }
    },
    {
      title: 'Simple Linear Regression',
      summary: 'Fit y = β₀ + β₁x + ε using least squares; interpret coefficients.',
      concept: 'Minimize Σ(yᵢ - β₀ - β₁xᵢ)². Slope β₁ = Σ(xᵢ - x̄)(yᵢ - ȳ) / Σ(xᵢ - x̄)². R² measures proportion of variance explained.',
      keywords: ['least squares', 'slope', 'intercept', 'R-squared'],
      order: {
        title: 'Fitting Simple Linear Regression',
        items: ['Calculate means x̄, ȳ', 'Calculate slope β₁', 'Calculate intercept β₀ = ȳ - β₁x̄', 'Compute fitted values ŷᵢ', 'Calculate R²'],
        solution: ['Calculate means x̄, ȳ', 'Calculate slope β₁', 'Calculate intercept β₀ = ȳ - β₁x̄', 'Compute fitted values ŷᵢ', 'Calculate R²']
      },
      quiz: {
        question: 'R² = 0.64 means:',
        options: ['64% correlation', 'Model explains 64% of variance', 'Model is 64% accurate', '64% of predictions are correct'],
        answerIndex: 1,
        hint: 'R² is the proportion of variance in Y explained by the model.'
      }
    },
    {
      title: 'Multiple Regression',
      summary: 'Model with multiple predictors: y = β₀ + β₁x₁ + β₂x₂ + ... + ε.',
      concept: 'Each coefficient βⱼ represents change in y per unit change in xⱼ, holding other variables constant. Use matrix notation: β = (X\'X)⁻¹X\'y.',
      keywords: ['multiple regression', 'partial coefficient', 'multicollinearity', 'adjusted R-squared'],
      flow: {
        title: 'Multiple Regression Process',
        steps: [
          'Specify model with relevant predictors',
          'Check for multicollinearity (VIF)',
          'Fit model using least squares',
          'Interpret coefficients (partial effects)',
          'Assess overall model fit (R², F-test)'
        ]
      },
      terms: {
        title: 'Multiple Regression Concepts',
        items: [
          { term: 'Partial Coefficient', def: 'Effect of one variable holding others constant' },
          { term: 'Multicollinearity', def: 'High correlation among predictor variables' },
          { term: 'VIF', def: 'Variance Inflation Factor - measures multicollinearity' },
          { term: 'Adjusted R²', def: 'R² adjusted for number of predictors' }
        ]
      }
    },
    {
      title: 'Regularization: Ridge & Lasso',
      summary: 'Prevent overfitting by penalizing large coefficients.',
      concept: 'Ridge: minimize RSS + λΣβⱼ² (L2 penalty). Lasso: minimize RSS + λΣ|βⱼ| (L1 penalty). Lasso can set coefficients to zero (variable selection).',
      keywords: ['regularization', 'Ridge', 'Lasso', 'overfitting', 'cross-validation'],
      categorize: {
        title: 'Ridge vs Lasso',
        categories: ['Ridge (L2)', 'Lasso (L1)', 'Both'],
        items: ['Shrinks coefficients toward zero', 'Can set coefficients exactly to zero', 'Handles multicollinearity', 'Requires tuning λ'],
        solution: {
          'Ridge (L2)': ['Handles multicollinearity'],
          'Lasso (L1)': ['Can set coefficients exactly to zero'],
          'Both': ['Shrinks coefficients toward zero', 'Requires tuning λ']
        }
      },
      quiz: {
        question: 'Lasso regression is useful for:',
        options: ['Handling missing data', 'Variable selection', 'Increasing R²', 'Removing outliers'],
        answerIndex: 1,
        hint: 'Lasso can drive some coefficients to exactly zero.'
      }
    },
    {
      title: 'Residuals & Model Diagnostics',
      summary: 'Check assumptions: linearity, independence, homoscedasticity, normality.',
      concept: 'Residuals eᵢ = yᵢ - ŷᵢ reveal model problems. Plot residuals vs fitted values, check for patterns. Q-Q plot tests normality. Cook\'s distance finds influential points.',
      keywords: ['residuals', 'assumptions', 'homoscedasticity', 'normality', 'influential points'],
      flashcards: {
        title: 'Regression Assumptions',
        cards: [
          { front: 'Linearity', back: 'Relationship between X and Y is linear' },
          { front: 'Independence', back: 'Observations are independent' },
          { front: 'Homoscedasticity', back: 'Constant variance of residuals' },
          { front: 'Normality', back: 'Residuals are normally distributed' }
        ]
      },
      flow: {
        title: 'Residual Analysis',
        steps: [
          'Plot residuals vs fitted values',
          'Look for patterns (non-linearity, heteroscedasticity)',
          'Check Q-Q plot for normality',
          'Identify outliers and influential points',
          'Consider transformations or model modifications'
        ]
      },
      shortAnswer: {
        prompt: 'What does a funnel pattern in residual plot suggest?',
        expectedKeywords: ['heteroscedasticity', 'non-constant variance'],
        sample: 'Heteroscedasticity - the variance of residuals is not constant across fitted values.'
      }
    }
  ]
}

export default area