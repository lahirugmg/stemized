export const focusAreas = [
  {
    slug: 'math-foundations',
    title: 'Math Foundations',
    description: 'Key math building blocks, one small concept at a time.',
    tags: ['Algebra', 'Numbers', 'Geometry'],
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
    slug: 'data-mining',
    title: 'Data Mining',
    description: 'Master core concepts through interactive visualizations and hands-on practice.',
    tags: ['Data Mining', 'Data Types', 'Attributes', 'Preprocessing', 'Similarity', 'Distance', 'Dimensionality', 'Correlation'],
    lessons: [
      {
        title: 'Introduction to Data Mining',
        summary: 'What is data mining and why does it matter in our data-driven world?',
        story:
          'In 1995, a supermarket chain discovered that beer and diapers were frequently purchased together. This insight wasn\'t obvious—it required analyzing millions of transactions. Data mining turns raw data into actionable knowledge, helping businesses make smarter decisions and scientists discover new patterns.',
        concept:
          'Data mining is the process of discovering meaningful patterns, associations, and insights from large datasets. It combines statistics, machine learning, and database systems to extract knowledge that would be difficult or impossible to find manually. Key goals include prediction, description, and prescription.',
        exercise:
          'Think of three everyday activities that generate data (e.g., online shopping, social media, fitness tracking). For each, identify one potential insight that data mining could uncover.',
        reflection:
          'How might data mining change your daily life? What ethical considerations should guide its use?',
        visualization: 'DataGrowthChart',
        useCases: {
          title: 'Data Mining Applications',
          items: [
            { title: 'Retail Analytics', desc: 'Customer behavior analysis and personalized recommendations' },
            { title: 'Financial Services', desc: 'Fraud detection and credit risk assessment' },
            { title: 'Healthcare', desc: 'Disease prediction and treatment optimization' },
            { title: 'Marketing', desc: 'Customer segmentation and targeted campaigns' },
            { title: 'Manufacturing', desc: 'Quality control and predictive maintenance' },
            { title: 'Social Networks', desc: 'Community detection and trend analysis' }
          ]
        },
        quiz: {
          question: 'Which of these is NOT a primary goal of data mining?',
          options: ['Prediction', 'Description', 'Data Storage', 'Prescription'],
          answerIndex: 2,
          hint: 'Data mining focuses on extracting insights, not just storing data.'
        }
      },
      {
        title: 'Types of Data',
        summary: 'Understanding the different forms data can take and their characteristics.',
        concept:
          'Data comes in various types: structured (databases, spreadsheets), semi-structured (XML, JSON), and unstructured (text, images, videos). By format: quantitative (numeric measurements) vs qualitative (categorical descriptions). By scale: nominal (categories), ordinal (ranked), interval (differences matter), ratio (true zero point). Understanding data types is crucial for choosing appropriate mining techniques.',
        exercise:
          'Classify these data examples: customer age (ratio), movie ratings (ordinal), product categories (nominal), temperature readings (interval), social media posts (unstructured).',
        reflection:
          'Why is it important to understand data types before mining? How might misclassifying data types affect analysis results?',
        flow: {
          title: 'Data Type Hierarchy',
          steps: ['Data', 'Structured', 'Semi-structured', 'Unstructured']
        },
        sorter: {
          prompt: 'Classify these data types into Quantitative or Qualitative.',
          items: [
            'Age in years',
            'Customer satisfaction rating',
            'Product color',
            'Temperature in Celsius',
            'Income level',
            'Geographic location',
            'Purchase amount',
            'Education level'
          ],
          solution: {
            'Quantitative': [
              'Age in years',
              'Temperature in Celsius',
              'Purchase amount'
            ],
            'Qualitative': [
              'Customer satisfaction rating',
              'Product color',
              'Income level',
              'Geographic location',
              'Education level'
            ]
          }
        },
        quiz: {
          question: 'Which data type has a true zero point and allows for meaningful ratios?',
          options: ['Nominal', 'Ordinal', 'Interval', 'Ratio'],
          answerIndex: 3,
          hint: 'Think about measurements like weight, height, or age.'
        }
      },
      {
        title: 'Types of Attributes',
        summary: 'Exploring how attributes (features) are measured and represented.',
        concept:
          'Attributes describe data objects and can be: discrete (finite values) or continuous (infinite range). By measurement: binary (yes/no), nominal (categories), ordinal (ranked), numeric (quantitative). Special types include asymmetric binary (presence-only) and ratio-scaled. Attribute types determine which distance/similarity measures and mining algorithms can be applied.',
        exercise:
          'For a customer dataset, identify attribute types: customer_id (nominal), age (ratio), income (ratio), education_level (ordinal), has_credit_card (binary), purchase_frequency (ratio).',
        reflection:
          'How do attribute types influence the choice of data mining algorithms? What happens if we treat ordinal data as nominal?',
        categorize: {
          title: 'Sort Attributes by Scale (NOIR)',
          categories: ['Nominal', 'Ordinal', 'Interval', 'Ratio'],
          items: [
            'ZIP code',
            'Customer ID',
            'Satisfaction (1–5 Likert)',
            'Race placement (1st/2nd/3rd)',
            'Temperature (°C)',
            'Calendar year',
            'Age (years)',
            'Income ($)'
          ],
          solution: {
            Nominal: ['ZIP code', 'Customer ID'],
            Ordinal: ['Satisfaction (1–5 Likert)', 'Race placement (1st/2nd/3rd)'],
            Interval: ['Temperature (°C)', 'Calendar year'],
            Ratio: ['Age (years)', 'Income ($)']
          }
        },
        terms: {
          title: 'Attribute Types',
          items: [
            { term: 'Binary', def: 'Two possible values (0/1, yes/no)' },
            { term: 'Nominal', def: 'Unordered categories (colors, countries)' },
            { term: 'Ordinal', def: 'Ordered categories with no fixed intervals (small/medium/large)' },
            { term: 'Numeric', def: 'Quantitative measurements with mathematical properties' },
            { term: 'Discrete', def: 'Finite or countably infinite values' },
            { term: 'Continuous', def: 'Infinite range of real numbers' }
          ]
        },
        quiz: {
          question: 'Which attribute type represents ordered categories without meaningful intervals?',
          options: ['Binary', 'Nominal', 'Ordinal', 'Numeric'],
          answerIndex: 2,
          hint: 'Think of ratings like poor/fair/good/excellent.'
        }
      },
      {
        title: 'Data Preprocessing',
        summary: 'Preparing raw data for mining through cleaning and transformation.',
        concept:
          'Data preprocessing is crucial for mining success: aggregation (combining data), sampling (representative subsets), dimensionality reduction (removing irrelevant features), feature creation (engineering new attributes). Common issues: missing values, noise, outliers, inconsistent formats. Techniques include imputation, normalization, discretization, and feature selection.',
        exercise:
          'Given a dataset with missing ages, design a preprocessing pipeline: 1) Handle missing values, 2) Normalize numeric features, 3) Encode categorical variables, 4) Remove outliers.',
        reflection:
          'Why is preprocessing often 80% of the data mining effort? How can poor preprocessing lead to misleading results?',
        flow: {
          title: 'Preprocessing Pipeline',
          steps: ['Raw Data', 'Cleaning', 'Integration', 'Transformation', 'Reduction']
        },
        sorter: {
          prompt: 'Categorize these preprocessing techniques by their primary purpose.',
          items: [
            'Mean imputation',
            'Min-max normalization',
            'One-hot encoding',
            'Principal component analysis',
            'Z-score standardization',
            'Feature selection',
            'Outlier removal',
            'Data integration'
          ],
          solution: {
            'Handle Missing Values': [
              'Mean imputation'
            ],
            'Scale/Normalize': [
              'Min-max normalization',
              'Z-score standardization'
            ],
            'Encode Categories': [
              'One-hot encoding'
            ],
            'Reduce Dimensions': [
              'Principal component analysis',
              'Feature selection'
            ],
            'Clean Data': [
              'Outlier removal',
              'Data integration'
            ]
          }
        },
        quiz: {
          question: 'Which preprocessing technique reduces the number of features while preserving important information?',
          options: ['Normalization', 'Imputation', 'Dimensionality reduction', 'Discretization'],
          answerIndex: 2,
          hint: 'This helps combat the "curse of dimensionality".'
        }
      },
      {
        title: 'Similarity Measures',
        summary: 'Quantifying how alike or different data objects are.',
        concept:
          'Similarity measures quantify object likeness: higher values mean more similar. Key measures: cosine similarity (angle between vectors), Jaccard coefficient (set overlap), Pearson correlation (linear relationship). Properties: symmetry, bounded range [0,1], identity (object equals itself). Choice depends on data type and application context.',
        exercise:
          'Calculate similarity between users A [5,3,4,4] and B [3,1,2,3] using: 1) Cosine similarity, 2) Pearson correlation, 3) Euclidean distance (convert to dissimilarity).',
        reflection:
          'When would you choose cosine similarity over Euclidean distance? How do similarity measures affect clustering results?',
        similarityPlayground: true,
        terms: {
          title: 'Similarity Measures',
          items: [
            { term: 'Cosine Similarity', def: 'Angle between vectors, ignores magnitude, good for text/high dimensions' },
            { term: 'Jaccard Coefficient', def: 'Set intersection over union, good for binary/categorical data' },
            { term: 'Pearson Correlation', def: 'Linear relationship strength, measures trend similarity' },
            { term: 'Euclidean Distance', def: 'Straight-line distance, sensitive to scale differences' },
            { term: 'Manhattan Distance', def: 'Sum of absolute differences, good for grid-like data' }
          ]
        },
        quiz: {
          question: 'Which similarity measure is most appropriate for comparing text documents?',
          options: ['Euclidean distance', 'Cosine similarity', 'Jaccard coefficient', 'Manhattan distance'],
          answerIndex: 1,
          hint: 'This measure focuses on direction rather than magnitude.'
        }
      },
      {
        title: 'Distance Measures',
        summary: 'Measuring dissimilarity between data points in feature space.',
        concept:
          'Distance measures quantify dissimilarity: smaller values mean more similar objects. Euclidean distance (straight-line) is most common but sensitive to scale. Manhattan distance (grid-path) is robust to outliers. Minkowski distance generalizes both. Distance metrics must satisfy triangle inequality and symmetry. Choice depends on data distribution and application needs.',
        exercise:
          'Calculate distances between points A(1,2) and B(4,6): 1) Euclidean, 2) Manhattan, 3) Minkowski (p=3). Which changes most when scaling coordinates by 10?',
        reflection:
          'Why might Manhattan distance be preferred in urban planning or grid-based data? How do distance measures affect clustering algorithms?',
        terms: {
          title: 'Distance Measures',
          items: [
            { term: 'Euclidean Distance', def: 'Straight-line distance, most intuitive, sensitive to scale' },
            { term: 'Manhattan Distance', def: 'Sum of absolute differences, good for grid-like data' },
            { term: 'Minkowski Distance', def: 'Generalized distance with parameter p (p=1 Manhattan, p=2 Euclidean)' },
            { term: 'Hamming Distance', def: 'Number of positions that differ, good for categorical/binary data' },
            { term: 'Mahalanobis Distance', def: 'Scale-invariant distance accounting for correlations' }
          ]
        },
        quiz: {
          question: 'Which distance measure is most appropriate for high-dimensional sparse data?',
          options: ['Euclidean distance', 'Manhattan distance', 'Cosine similarity', 'Hamming distance'],
          answerIndex: 2,
          hint: 'This measure focuses on direction rather than magnitude.'
        }
      },
      {
        title: 'Dimensionality Reduction',
        summary: 'Reducing feature space while preserving essential information.',
        concept:
          'High-dimensional data suffers from curse of dimensionality: distance measures become meaningless, algorithms become computationally expensive. Dimensionality reduction techniques: PCA (linear projection preserving variance), t-SNE (non-linear for visualization), feature selection (choosing subset), feature extraction (creating new features). Goal is to reduce dimensions while maintaining data structure and separability.',
        exercise:
          'Given a 1000-feature dataset, explain your dimensionality reduction approach: 1) Initial analysis, 2) Technique selection, 3) Validation of preserved information.',
        reflection:
          'Why is dimensionality reduction crucial for high-dimensional data mining? What trade-offs exist between different reduction techniques?',
        flow: {
          title: 'Dimensionality Reduction Process',
          steps: ['High-dimensional Data', 'Feature Analysis', 'Technique Selection', 'Transformation', 'Validation']
        },
        terms: {
          title: 'Dimensionality Reduction Techniques',
          items: [
            { term: 'Principal Component Analysis (PCA)', def: 'Linear projection maximizing variance preservation' },
            { term: 't-SNE', def: 'Non-linear technique for visualization and clustering' },
            { term: 'Feature Selection', def: 'Choosing most relevant subset of original features' },
            { term: 'Feature Extraction', def: 'Creating new features from original ones' },
            { term: 'Curse of Dimensionality', def: 'Problems arising from high-dimensional spaces' }
          ]
        },
        quiz: {
          question: 'Which technique is most appropriate for visualizing high-dimensional data in 2D?',
          options: ['PCA', 'Feature Selection', 't-SNE', 'Feature Extraction'],
          answerIndex: 2,
          hint: 'This technique preserves local structure in the low-dimensional representation.'
        }
      },
      {
        title: 'Correlation',
        summary: 'Understanding relationships between variables in datasets.',
        concept:
          'Correlation measures linear relationship strength between variables: Pearson (linear), Spearman (monotonic), Kendall (ordinal). Range [-1,1]: positive (both increase), negative (one increases as other decreases), zero (no linear relationship). Correlation ≠ causation. Important for feature selection, multicollinearity detection, and understanding data structure. Visualized through scatter plots and correlation matrices.',
        exercise:
          'Analyze correlations in a retail dataset: 1) Calculate Pearson correlation between age and spending, 2) Check for multicollinearity between related features, 3) Identify features most correlated with target variable.',
        reflection:
          'Why is correlation analysis important before building predictive models? How can spurious correlations mislead analysis?',
        terms: {
          title: 'Correlation Concepts',
          items: [
            { term: 'Pearson Correlation', def: 'Measures linear relationship strength between continuous variables' },
            { term: 'Spearman Correlation', def: 'Monotonic relationship measure, works with ordinal data' },
            { term: 'Kendall Correlation', def: 'Ordinal association measure based on concordant/discordant pairs' },
            { term: 'Multicollinearity', def: 'High correlation between predictor variables' },
            { term: 'Correlation Matrix', def: 'Table showing correlations between all variable pairs' }
          ]
        },
        quiz: {
          question: 'Which correlation measure is most appropriate for ordinal data?',
          options: ['Pearson correlation', 'Spearman correlation', 'Kendall correlation', 'Covariance'],
          answerIndex: 1,
          hint: 'This measure works with ranked data and monotonic relationships.'
        }
      },
      {
        title: 'Mini Case Study: Churn',
        summary: 'From raw data to an actionable churn playbook.',
        concept:
          'Frame the objective, explore features, try baseline models, evaluate pragmatically, and connect insights to actions (e.g., retention offers).',
        exercise:
          'Write a three-bullet “Next best action” based on a hypothetical churn model.'
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
