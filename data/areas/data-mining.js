const area = {
  slug: 'data-mining',
  title: 'Data Mining',
  description: 'Master core concepts through interactive visualizations and hands-on practice.',
  tags: ['Data Mining', 'Data Types', 'Attributes', 'Preprocessing', 'Similarity', 'Distance', 'Dimensionality', 'Correlation', 'Classification', 'Decision Trees', 'Evaluation', 'Agentic AI', 'MLOps', 'AutoML', 'LLMs', 'Modern AI'],
  color: '#4ecdc4',
  theme: 'data',
  modules: [
    // === FOUNDATIONS ===
    {
      slug: 'core-concepts',
      title: 'Core Concepts & Motivation',
      description: 'Why mine data, where it fits, and foundational data/attribute types.',
      lessonIndexes: [0, 1, 2]
    },
    {
      slug: 'cse572-m1-slides',
      title: 'Core Concepts — Slides',
      description: 'Official lecture slides: intro, attributes, preprocessing, similarity, distance, correlation, dimensionality.',
      lessonIndexes: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
    },

    // === DATA PREPARATION ===
    {
      slug: 'data-prep',
      title: 'Data Preparation',
      description: 'Cleaning, transforming, and preparing data before mining.',
      lessonIndexes: [3]
    },
    {
      slug: 'similarity-distance',
      title: 'Similarity & Distance',
      description: 'Compare vectors and measure (dis)similarity for mining tasks.',
      lessonIndexes: [4, 5]
    },
    {
      slug: 'dimensionality-correlation',
      title: 'Dimensionality & Correlation',
      description: 'Reduce dimensions and understand relationships among variables.',
      lessonIndexes: [6, 7]
    },

    // === CLASSIFICATION ===
    {
      slug: 'classification-basics',
      title: 'Classification',
      description: 'Decision trees, split criteria, impurity, evaluation, and generalization.',
      lessonIndexes: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
    },
    {
      slug: 'cse572-m2-slides',
      title: 'Classification — Slides',
      description: 'Decision trees, impurity, tests, evaluation, bias–variance, generalization.',
      lessonIndexes: [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42]
    },
    {
      slug: 'cse572-m3-slides',
      title: 'Alternative Classification — Slides',
      description: 'KNN, Bayes/Naive Bayes, Perceptron, ANN, SVM.',
      lessonIndexes: [43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54]
    },

    // === CLUSTERING ===
    {
      slug: 'cse572-m4-slides',
      title: 'Clustering — Slides',
      description: 'K-means, hierarchical, DBSCAN, cluster validity.',
      lessonIndexes: [55, 56, 57, 58, 59, 60, 61, 62, 63, 64]
    },

    // === ASSOCIATION RULES ===
    {
      slug: 'cse572-m5-slides',
      title: 'Association Rules — Slides',
      description: 'Apriori, support, confidence, complexity factors, quiz.',
      lessonIndexes: [65, 66, 67, 68, 69, 70]
    },

    // === CAPSTONE ===
    {
      slug: 'case-study',
      title: 'Capstone: Case Study',
      description: 'Apply the pipeline end-to-end for churn.',
      lessonIndexes: [9]
    },

    // === NEW AI & DATA SCIENCE TECHNIQUES (2024-2025) ===
    {
      slug: 'modern-ai-techniques',
      title: 'Modern AI & Data Science Techniques',
      description: 'Latest breakthroughs in AI and data science for 2024-2025.',
      lessonIndexes: [71, 72, 73, 74]
    }
  ],
  lessons: [
    {
      title: 'Introduction to Data Mining',
      summary: 'What is data mining and why does it matter in our data-driven world?',
      story:
        'In 1995, a supermarket chain discovered that beer and diapers were frequently purchased together. This insight wasn\'t obvious—it required analyzing millions of transactions. Data mining turns raw data into actionable knowledge, helping businesses make smarter decisions and scientists discover new patterns.',
      concept:
        'Data mining is the process of discovering meaningful patterns, associations, and insights from large datasets. It combines statistics, machine learning, and database systems to extract knowledge that would be difficult or impossible to find manually. Key goals include prediction, description, and prescription.',
      keywords: ['data mining', 'patterns', 'associations', 'prediction', 'description', 'prescription'],
      exercise:
        'Think of three everyday activities that generate data (e.g., online shopping, social media, fitness tracking). For each, identify one potential insight that data mining could uncover.',
      solution:
        'Examples: Online shopping → association rules for cross-sell; Social media → community detection for topic targeting; Fitness tracking → anomaly detection for sudden health changes.',
      reflection:
        'How might data mining change your daily life? What ethical considerations should guide its use?',
      visualization: 'DataGrowthChart',
      timeline: {
        title: 'Evolution of Data Mining',
        items: [
          { year: '1960s', label: 'Foundation of databases and statistics' },
          { year: '1980s', label: 'Machine learning algorithms emerge' },
          { year: '1990s', label: 'Data warehousing and OLAP' },
          { year: '2000s', label: 'Big data and scalable algorithms' },
          { year: '2010s', label: 'Deep learning and AI integration' },
          { year: '2020s', label: 'Automated machine learning and ethics focus' }
        ]
      },
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
      terms: {
        title: 'Key Data Mining Terms',
        items: [
          { term: 'Pattern Discovery', def: 'Finding regularities and trends in data' },
          { term: 'Knowledge Discovery', def: 'Extracting useful knowledge from data' },
          { term: 'Predictive Modeling', def: 'Building models to forecast future outcomes' },
          { term: 'Descriptive Modeling', def: 'Summarizing data characteristics and relationships' },
          { term: 'Big Data', def: 'Large, complex datasets that traditional methods can\'t handle' },
          { term: 'Data Mining vs ML', def: 'Data mining discovers patterns; ML applies them to predictions' }
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
      summary: 'Understanding the difference between structured, semi-structured, and unstructured data, and the measurement scales used to represent them.',
      concept:
        'Data can be structured (organized with schema), semi-structured (partial schema), or unstructured (no fixed schema). Measurement scales include nominal (categories), ordinal (order), interval (meaningful differences, no true zero), and ratio (meaningful differences, true zero). Recognizing data type and scale guides preprocessing, similarity measures, and appropriate algorithms.',
      keywords: ['structured', 'unstructured', 'nominal', 'ordinal', 'interval', 'ratio'],
      exercise:
        'Classify these examples: bank transaction logs (structured), movie reviews (unstructured), JSON API responses (semi-structured), customer age (ratio), movie ratings (ordinal), product categories (nominal), temperature readings (interval), social media posts (unstructured).',
      reflection:
        'Why is it important to understand data types before mining? How might misclassifying data types affect analysis results?',
      callouts: [
        { type: 'info', title: 'Interval vs Ratio', body: 'Interval has no true zero (Celsius); Ratio has a true zero (Kelvin, age).' },
        { type: 'tip', title: 'Choose Measures', body: 'Use appropriate similarity/distance based on scale (e.g., Hamming for nominal).' }
      ],
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
      terms: {
        title: 'Data Type Categories',
        items: [
          { term: 'Structured Data', def: 'Organized data with clear schema (databases, spreadsheets)' },
          { term: 'Semi-structured', def: 'Partial organization with some structure (XML, JSON)' },
          { term: 'Unstructured', def: 'No predefined structure (text, images, videos)' },
          { term: 'Quantitative', def: 'Numeric data that can be measured and counted' },
          { term: 'Qualitative', def: 'Categorical data describing qualities or characteristics' },
          { term: 'Nominal Scale', def: 'Categories without inherent order (colors, names)' },
          { term: 'Ordinal Scale', def: 'Ordered categories without fixed intervals (ratings)' },
          { term: 'Interval Scale', def: 'Ordered with meaningful differences but no true zero' },
          { term: 'Ratio Scale', def: 'Ordered with meaningful differences and true zero point' }
        ]
      },
      useCases: {
        title: 'Data Types in Practice',
        items: [
          { title: 'E-commerce', desc: 'Product catalogs (structured) + customer reviews (unstructured)' },
          { title: 'Healthcare', desc: 'Patient records (structured) + medical images (unstructured)' },
          { title: 'Social Media', desc: 'User profiles (semi-structured) + posts (unstructured)' },
          { title: 'Finance', desc: 'Transaction logs (structured) + market news (unstructured)' }
        ]
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
      keywords: ['binary', 'nominal', 'ordinal', 'numeric', 'discrete', 'continuous'],
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
      keywords: ['imputation', 'normalization', 'discretization', 'feature selection', 'outliers', 'scaling'],
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
      terms: {
        title: 'Preprocessing Techniques',
        items: [
          { term: 'Data Cleaning', def: 'Removing noise, handling missing values, correcting inconsistencies' },
          { term: 'Data Integration', def: 'Combining data from multiple sources into coherent store' },
          { term: 'Data Transformation', def: 'Normalizing, aggregating, generalizing data' },
          { term: 'Data Reduction', def: 'Reducing data size while preserving information' },
          { term: 'Feature Engineering', def: 'Creating new features from existing data' },
          { term: 'Imputation', def: 'Filling missing values using statistical methods' },
          { term: 'Normalization', def: 'Scaling features to comparable ranges' },
          { term: 'Discretization', def: 'Converting continuous features into bins or categories' },
          { term: 'Feature Selection', def: 'Choosing a subset of relevant features for model' }
        ]
      }
    },
    {
      title: 'Similarity vs Distance',
      summary: 'Understand measures that define how alike or different items are.',
      concept:
        'Similarity measures (e.g., cosine) increase with likeness; distance measures (e.g., Euclidean) increase with difference. Choice depends on data scale and sparsity. Normalize features when needed to avoid dominance by larger-scale features.',
      keywords: ['similarity', 'distance', 'normalization'],
      exercise:
        'Given two vectors A and B, compute both Euclidean distance and cosine similarity. Which changes if you scale both vectors by 10×?',
      callouts: [
        { type: 'info', title: 'Scale Matters', body: 'Cosine is scale-invariant; Euclidean is not.' }
      ],
      order: {
        title: 'Order a KNN Workflow',
        items: ['Normalize features', 'Compute distance to neighbors', 'Take majority label', 'Pick k'],
        solution: ['Pick k', 'Normalize features', 'Compute distance to neighbors', 'Take majority label']
      }
    },
    {
      title: 'Common Metrics',
      summary: 'Euclidean, Manhattan, Hamming, and cosine—when to use which.',
      concept:
        'Euclidean: continuous, similar scale; Manhattan: grid/robust to outliers; Hamming: binary/nominal attributes; Cosine: high-dimensional sparse vectors (direction matters).',
      keywords: ['Euclidean', 'Manhattan', 'Hamming', 'Cosine'],
      categorize: {
        title: 'Match Metric to Data',
        categories: ['Continuous', 'Binary/Nominal', 'High-dimensional Sparse'],
        items: ['Cosine', 'Hamming', 'Manhattan', 'Euclidean'],
        solution: {
          'Continuous': ['Euclidean', 'Manhattan'],
          'Binary/Nominal': ['Hamming'],
          'High-dimensional Sparse': ['Cosine']
        }
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
      useCases: {
        title: 'Correlation in Practice',
        items: [
          { title: 'Finance', desc: 'Stock price correlations, risk factor analysis' },
          { title: 'Marketing', desc: 'Customer behavior correlations, campaign effectiveness' },
          { title: 'Healthcare', desc: 'Disease-symptom correlations, treatment outcomes' },
          { title: 'Climate Science', desc: 'Weather pattern correlations, environmental studies' }
        ]
      },
      sorter: {
        prompt: 'Classify correlation strengths and directions.',
        items: [
          'r = 0.9 (strong positive)',
          'r = -0.7 (moderate negative)',
          'r = 0.2 (weak positive)',
          'r = -0.95 (very strong negative)',
          'r = 0.0 (no correlation)',
          'r = 0.5 (moderate positive)'
        ],
        solution: {
          'Strong Positive': [
            'r = 0.9 (strong positive)'
          ],
          'Moderate Positive': [
            'r = 0.5 (moderate positive)'
          ],
          'Weak Positive': [
            'r = 0.2 (weak positive)'
          ],
          'Strong Negative': [
            'r = -0.95 (very strong negative)'
          ],
          'Moderate Negative': [
            'r = -0.7 (moderate negative)'
          ],
          'No Correlation': [
            'r = 0.0 (no correlation)'
          ]
        }
      },
      quiz: {
        question: 'Which correlation measure is most appropriate for ordinal data?',
        options: ['Pearson correlation', 'Spearman correlation', 'Kendall correlation', 'Covariance'],
        answerIndex: 1,
        hint: 'This measure works with ranked data and monotonic relationships.'
      }
    },
    {
      title: 'Data Mining Ethics and Privacy',
      summary: 'Understanding the ethical implications and privacy concerns in data mining.',
      concept:
        'Data mining raises important ethical questions: privacy invasion, algorithmic bias, consent, transparency, and societal impact. Key principles include: respect for persons, beneficence, justice, and respect for law. Privacy-preserving techniques like differential privacy and federated learning help balance utility with protection.',
      exercise:
        'Analyze a data mining project scenario: 1) Identify potential privacy risks, 2) Propose mitigation strategies, 3) Consider stakeholder impacts.',
      reflection:
        'How can data mining be conducted responsibly? What are the consequences of unethical data practices?',
      terms: {
        title: 'Ethics and Privacy Concepts',
        items: [
          { term: 'Differential Privacy', def: 'Adding noise to protect individual privacy while preserving statistical accuracy' },
          { term: 'Algorithmic Bias', def: 'Systematic errors in algorithmic decisions affecting certain groups' },
          { term: 'Right to Explanation', def: 'User right to understand automated decision-making processes' },
          { term: 'Data Minimization', def: 'Collecting only necessary data for the intended purpose' },
          { term: 'Federated Learning', def: 'Training models across decentralized devices without sharing raw data' },
          { term: 'Informed Consent', def: 'Clear understanding and agreement to data collection and use' }
        ]
      },
      useCases: {
        title: 'Ethical Data Mining Applications',
        items: [
          { title: 'Healthcare', desc: 'Patient data analysis with strict privacy controls' },
          { title: 'Criminal Justice', desc: 'Risk assessment tools with bias mitigation' },
          { title: 'Social Services', desc: 'Fraud detection while protecting vulnerable populations' },
          { title: 'Education', desc: 'Learning analytics respecting student privacy rights' }
        ]
      },
      sorter: {
        prompt: 'Categorize these scenarios by ethical concern level.',
        items: [
          'Personalized advertising using browsing history',
          'Medical diagnosis using patient records without consent',
          'Traffic prediction using anonymized location data',
          'Credit scoring using protected characteristics',
          'Fraud detection in financial transactions',
          'Social media sentiment analysis for public opinion'
        ],
        solution: {
          'High Ethical Concern': [
            'Medical diagnosis using patient records without consent',
            'Credit scoring using protected characteristics'
          ],
          'Moderate Ethical Concern': [
            'Personalized advertising using browsing history'
          ],
          'Low Ethical Concern': [
            'Traffic prediction using anonymized location data',
            'Fraud detection in financial transactions',
            'Social media sentiment analysis for public opinion'
          ]
        }
      },
      quiz: {
        question: 'Which technique helps protect individual privacy while allowing data analysis?',
        options: ['Data encryption', 'Differential privacy', 'Data deletion', 'User authentication'],
        answerIndex: 1,
        hint: 'This technique adds controlled noise to prevent identification.'
      }
    },
    {
      title: 'Mini Case Study: Churn',
      summary: 'From raw data to an actionable churn playbook.',
      concept:
        'Frame the objective, explore features, try baseline models, evaluate pragmatically, and connect insights to actions (e.g., retention offers).',
      exercise:
        'Write a three-bullet "Next best action" based on a hypothetical churn model.'
    },
    // Module 2: Existing Techniques — Classification (from content/module2 slides)
    {
      title: 'Introduction to Classification',
      summary: 'What classification is and where it applies in data mining.',
      concept:
        'Classification assigns items to predefined categories based on input features. It underpins tasks like spam detection, diagnosis, and credit approval. Core ideas include model training on labeled data, decision boundaries, and evaluating performance on unseen data.',
      exercise:
        'List three real-world classification tasks and their possible classes (labels).'
    },
    {
      title: 'Decision Trees Basics',
      summary: 'Intuition and structure of decision tree classifiers.',
      concept:
        'A decision tree splits data by asking feature-based questions, forming a tree of decisions that leads to class predictions at leaves. Advantages: interpretability and fast inference; drawbacks: overfitting without proper control and instability to small data changes.',
      exercise:
        'Sketch a tiny decision tree for loan approval using features: income (high/low), credit score (good/bad).'
    },
    {
      title: 'Split Tests and Conditions',
      summary: 'How trees choose questions to partition the data.',
      concept:
        'Test conditions define how a node splits: for numeric features, thresholds like x ≤ t; for categorical, membership tests. Good splits create purer child nodes, guided by impurity-based criteria like Gini or information gain.',
      exercise:
        'Given a binary feature and a numeric feature, propose one test for each that could split a dataset.'
    },
    {
      title: 'Node Impurity: Gini Index',
      summary: 'Measuring class mixture to guide better splits.',
      concept:
        'Gini index quantifies impurity as 1 − Σ p(c)² over classes. The split score is the weighted sum of child impurities; we prefer the split with the lowest weighted impurity. Gini is simple and works well with CART-style trees.',
      exercise:
        'Compute Gini for a node with class counts [8 positive, 2 negative]. Then for [5,5]. Which is purer and why?'
    },
    {
      title: 'Node Impurity: Entropy & Information Gain',
      summary: 'Information-theoretic impurity and choosing informative splits.',
      concept:
        'Entropy H = −Σ p(c) log₂ p(c) captures uncertainty. Information gain compares parent entropy to the weighted child entropy; higher gain means a more informative split. Use gain ratio to mitigate bias toward many-valued features.',
      exercise:
        'For a binary node with p=0.7 positive, compute entropy. Intuitively compare to p=0.5.'
    },
    {
      title: 'Stopping Criteria for Trees',
      summary: 'When to stop splitting to avoid overfitting.',
      concept:
        'Typical criteria: minimum samples per node, maximum depth, or negligible impurity decrease. Early stopping prevents overly specific trees; alternatively, fully grow and then prune based on validation performance.',
      exercise:
        'Suggest two stopping rules you would set for a small dataset (~1k rows) and why.'
    },
    {
      title: 'Bias–Variance Tradeoff',
      summary: 'Balancing underfitting and overfitting in classifiers.',
      concept:
        'Simple models have high bias (underfit); complex models have high variance (overfit). Trees with deep depth can overfit; pruning or ensembles (bagging, random forests) reduce variance. The sweet spot minimizes expected generalization error.',
      exercise:
        'Describe a model change that reduces variance for trees without greatly increasing bias.'
    },
    {
      title: 'Estimating Generalization Error',
      summary: 'Validation strategies to estimate out-of-sample performance.',
      concept:
        'Use hold-out validation, k-fold cross-validation, or bootstrap to estimate generalization. Keep a separate test set for final evaluation. Ensure splits are stratified for class balance and avoid data leakage.',
      exercise:
        'Outline a 5-fold cross-validation plan for a credit-risk classifier, noting how you would stratify.'
    },
    {
      title: 'Evaluation Metrics for Classification',
      summary: 'From accuracy to precision/recall, F1, ROC-AUC.',
      concept:
        'Confusion matrix summarizes TP/FP/FN/TN. Accuracy can mislead under imbalance; prefer precision/recall and F1. ROC-AUC and PR-AUC compare thresholds; calibration checks probability quality. Always report metrics aligned with business cost.',
      exercise:
        'Given TP=40, FP=10, FN=20, TN=30, compute accuracy, precision, recall, and F1.'
    },
    {
      title: 'Practical Issues in Classification',
      summary: 'Handling imbalance, missing data, cost sensitivity, and leakage.',
      concept:
        'Key pitfalls: class imbalance (use resampling or class weights), missing data handling, inconsistent preprocessing between train/test, and target leakage. Document data lineage and use robust validation to detect issues early.',
      exercise:
        'List two techniques to address class imbalance and one strategy to detect leakage.'
    },
    // Slides: Module 1 — Core Concepts
    {
      title: 'Why Mine Data — Slide Deck',
      summary: 'Motivation and value of data mining in practice.',
      concept: 'Official course slide deck. Open to view the full slides.',
      resources: [
        { label: 'Open PDF', href: '/content/module1/CSE572_Module 1_Core Concepts of Data Mining_Lecture Slides/Why Mine Data_Slide Deck.pdf' }
      ]
    },
    {
      title: 'Introduction to Data Mining — Slide Deck',
      summary: 'Overview and foundations of data mining.',
      concept: 'Official course slide deck. Open to view the full slides.',
      resources: [
        { label: 'Open PDF', href: '/content/module1/CSE572_Module 1_Core Concepts of Data Mining_Lecture Slides/Introduction to Data Mining_Slide Deck.pdf' }
      ]
    },
    {
      title: 'Types of Attributes — Slide Deck',
      summary: 'Attribute types and measurement scales.',
      concept: 'Official course slide deck. Open to view the full slides.',
      resources: [
        { label: 'Open PDF', href: '/content/module1/CSE572_Module 1_Core Concepts of Data Mining_Lecture Slides/Types of Attributes_Slide Deck.pdf' }
      ]
    },
    {
      title: 'Types of Data — Slide Deck',
      summary: 'Structured, semi-structured, and unstructured; scales.',
      concept: 'Official course slide deck. Open to view the full slides.',
      resources: [
        { label: 'Open PDF', href: '/content/module1/CSE572_Module 1_Core Concepts of Data Mining_Lecture Slides/Types of Data_Slide Deck.pdf' }
      ]
    },
    {
      title: 'Similarity Measures — Slide Deck',
      summary: 'How to measure similarity across data types.',
      concept: 'Official course slide deck. Open to view the full slides.',
      resources: [
        { label: 'Open PDF', href: '/content/module1/CSE572_Module 1_Core Concepts of Data Mining_Lecture Slides/Similarity Measures_Slide Deck.pdf' }
      ]
    },
    {
      title: 'Distance Measures — Slide Deck',
      summary: 'Common distance metrics and when to use them.',
      concept: 'Official course slide deck. Open to view the full slides.',
      resources: [
        { label: 'Open PDF', href: '/content/module1/CSE572_Module 1_Core Concepts of Data Mining_Lecture Slides/Distance Measures_Slide Deck.pdf' }
      ]
    },
    {
      title: 'Correlation — Slide Deck',
      summary: 'Understanding correlations and relationships in data.',
      concept: 'Official course slide deck. Open to view the full slides.',
      resources: [
        { label: 'Open PDF', href: '/content/module1/CSE572_Module 1_Core Concepts of Data Mining_Lecture Slides/Correlation_Slide Deck.pdf' }
      ]
    },
    {
      title: 'Data Preprocessing — Slide Deck',
      summary: 'Cleaning, transforming, and preparing data for mining.',
      concept: 'Official course slide deck. Open to view the full slides.',
      resources: [
        { label: 'Open PDF', href: '/content/module1/CSE572_Module 1_Core Concepts of Data Mining_Lecture Slides/Data Preprocessing_Slide Deck.pdf' }
      ]
    },
    {
      title: 'Data Preprocessing (FA19) — Slide Deck',
      summary: 'Alternate deck version (FA19).',
      concept: 'Official course slide deck. Open to view the full slides.',
      resources: [
        { label: 'Open PDF', href: '/content/module1/CSE572_Module 1_Core Concepts of Data Mining_Lecture Slides/Data Preprocessing_FA19_Slide Deck.pdf' }
      ]
    },
    {
      title: 'Dimensionality Reduction Example (SB23) — Slide Deck',
      summary: 'Example-driven dimensionality reduction (SB23).',
      concept: 'Official course slide deck. Open to view the full slides.',
      resources: [
        { label: 'Open PDF', href: '/content/module1/CSE572_Module 1_Core Concepts of Data Mining_Lecture Slides/CSE 572_Dimensionality Reduction Example_SB23_Slide Deck.pdf' }
      ]
    },
    {
      title: 'Introduction to Data Attributes (Compat) — Slide Deck',
      summary: 'Compatibility-mode deck for attributes.',
      concept: 'Official course slide deck. Open to view the full slides.',
      resources: [
        { label: 'Open PDF', href: '/content/module1/CSE572_Module 1_Core Concepts of Data Mining_Lecture Slides/Introduction to Data Attributes - Compatibility Mode_Slide Deck.pdf' }
      ]
    },

    // Slides: Module 2 — Classification
    {
      title: 'Introduction to Classification — Slide Deck',
      summary: 'Overview of classification tasks and concepts.',
      concept: 'Official course slide deck. Open to view the full slides.',
      resources: [
        { label: 'Open PDF', href: '/content/module2/CSE572_Module 2_Existing Techniques - Classification _Lecture Slides/Introduction to Classification_SlideDeck.pdf' }
      ]
    },
    {
      title: 'Decision Trees — Slide Deck',
      summary: 'Tree-based classification fundamentals.',
      concept: 'Official course slide deck. Open to view the full slides.',
      resources: [
        { label: 'Open PDF', href: '/content/module2/CSE572_Module 2_Existing Techniques - Classification _Lecture Slides/Decision Trees_SlideDeck.pdf' }
      ]
    },
    {
      title: 'Test Conditions — Slide Deck',
      summary: 'Selecting split tests for nodes.',
      concept: 'Official course slide deck. Open to view the full slides.',
      resources: [
        { label: 'Open PDF', href: '/content/module2/CSE572_Module 2_Existing Techniques - Classification _Lecture Slides/Test Conditions_Slide Deck.pdf' }
      ]
    },
    {
      title: 'Impurity Intro — Slide Deck',
      summary: 'Introduction to node impurity measures.',
      concept: 'Official course slide deck. Open to view the full slides.',
      resources: [
        { label: 'Open PDF', href: '/content/module2/CSE572_Module 2_Existing Techniques - Classification _Lecture Slides/Measures of Node Impurity_Intro_to_Impurity_Slide Deck.pdf' }
      ]
    },
    {
      title: 'Gini Impurity — Slide Deck',
      summary: 'Using Gini for split selection.',
      concept: 'Official course slide deck. Open to view the full slides.',
      resources: [
        { label: 'Open PDF', href: '/content/module2/CSE572_Module 2_Existing Techniques - Classification _Lecture Slides/Measures of Node Impurity_GINI_Slide Deck.pdf' }
      ]
    },
    {
      title: 'Entropy & Information Gain — Slide Deck',
      summary: 'Information-theoretic splitting criteria.',
      concept: 'Official course slide deck. Open to view the full slides.',
      resources: [
        { label: 'Open PDF', href: '/content/module2/CSE572_Module 2_Existing Techniques - Classification _Lecture Slides/Measures of Node Impurity_Entropy_Slide Deck.pdf' }
      ]
    },
    {
      title: 'Stopping Criteria — Slide Deck',
      summary: 'When to stop growing trees.',
      concept: 'Official course slide deck. Open to view the full slides.',
      resources: [
        { label: 'Open PDF', href: '/content/module2/CSE572_Module 2_Existing Techniques - Classification _Lecture Slides/Stopping Criteria for Tree Induction_Slide Deck.pdf' }
      ]
    },
    {
      title: 'Evaluation — Slide Deck',
      summary: 'Evaluating classification performance.',
      concept: 'Official course slide deck. Open to view the full slides.',
      resources: [
        { label: 'Open PDF', href: '/content/module2/CSE572_Module 2_Existing Techniques - Classification _Lecture Slides/Evaluation_Slide Deck.pdf' }
      ]
    },
    {
      title: 'Practical Issues — Slide Deck',
      summary: 'Pitfalls and best practices in classification.',
      concept: 'Official course slide deck. Open to view the full slides.',
      resources: [
        { label: 'Open PDF', href: '/content/module2/CSE572_Module 2_Existing Techniques - Classification _Lecture Slides/Practical Issues of Classification_Slide Deck.pdf' }
      ]
    },
    {
      title: 'Estimating Generalization Errors — Slide Deck',
      summary: 'Validation strategies and error estimation.',
      concept: 'Official course slide deck. Open to view the full slides.',
      resources: [
        { label: 'Open PDF', href: '/content/module2/CSE572_Module 2_Existing Techniques - Classification _Lecture Slides/Estimating Generalization Errors_Slide Deck.pdf' }
      ]
    },
    {
      title: 'Bias–Variance Tradeoff (FA19) — Slide Deck',
      summary: 'FA19 deck variant on bias–variance.',
      concept: 'Official course slide deck. Open to view the full slides.',
      resources: [
        { label: 'Open PDF', href: '/content/module2/CSE572_Module 2_Existing Techniques - Classification _Lecture Slides/The Bias Variance Tradeoff_FA19_Slide Deck.pdf' }
      ]
    },
    {
      title: 'Bias–Variance Tradeoff (Generalization) — Slide Deck',
      summary: 'Generalization view of bias–variance.',
      concept: 'Official course slide deck. Open to view the full slides.',
      resources: [
        { label: 'Open PDF', href: '/content/module2/CSE572_Module 2_Existing Techniques - Classification _Lecture Slides/The Bias Variance Tradeoff_Generalization_Slide Deck.pdf' }
      ]
    },

    // Slides: Module 3 — Alternative Classification Techniques
    {
      title: 'Instance-based Classifiers — Slide Deck',
      summary: 'KNN and instance-based learning.',
      concept: 'Official course slide deck. Open to view the full slides.',
      resources: [
        { label: 'Open PDF', href: '/content/module3/CSE572_Module 3_Alternative Classification Techniques _LectureSlides/done/1.Instance-based Classifiers_Slide Deck.pdf' }
      ]
    },
    {
      title: 'Bayes Classifier (FA19) — Slide Deck',
      summary: 'Bayesian classifiers and assumptions.',
      concept: 'Official course slide deck. Open to view the full slides.',
      resources: [
        { label: 'Open PDF', href: '/content/module3/CSE572_Module 3_Alternative Classification Techniques _LectureSlides/done/2.Bayes Classifier_FA19_Slide Deck.pdf' }
      ]
    },
    {
      title: 'Bayes Classifier Example (SB23) — Slide Deck',
      summary: 'Worked example of Bayesian classification.',
      concept: 'Official course slide deck. Open to view the full slides.',
      resources: [
        { label: 'Open PDF', href: '/content/module3/CSE572_Module 3_Alternative Classification Techniques _LectureSlides/done/3.CSE572_Bayes Classifier Example_Bayesian_SB23_Slide Deck.pdf' }
      ]
    },
    {
      title: 'Naive Bayes Classifier — Slide Deck',
      summary: 'Naive Bayes fundamentals.',
      concept: 'Official course slide deck. Open to view the full slides.',
      resources: [
        { label: 'Open PDF', href: '/content/module3/CSE572_Module 3_Alternative Classification Techniques _LectureSlides/done/4.Naive Bayes Classifier_Slide Deck.pdf' }
      ]
    },
    {
      title: 'ANN Basics — Slide Deck',
      summary: 'Artificial Neural Networks basics.',
      concept: 'Official course slide deck. Open to view the full slides.',
      resources: [
        { label: 'Open PDF', href: '/content/module3/CSE572_Module 3_Alternative Classification Techniques _LectureSlides/done/5.Artificial Neural Networks Basics_Slide Deck.pdf' }
      ]
    },
    {
      title: 'Perceptron Learning — Slide Deck',
      summary: 'Perceptron algorithm and learning rule.',
      concept: 'Official course slide deck. Open to view the full slides.',
      resources: [
        { label: 'Open PDF', href: '/content/module3/CSE572_Module 3_Alternative Classification Techniques _LectureSlides/done/6.Perceptron Learning Algorithm_Slide Deck.pdf' }
      ]
    },
    {
      title: 'ANN Learning with Backprop — Slide Deck',
      summary: 'Training ANNs via backpropagation.',
      concept: 'Official course slide deck. Open to view the full slides.',
      resources: [
        { label: 'Open PDF', href: '/content/module3/CSE572_Module 3_Alternative Classification Techniques _LectureSlides/done/7.Artificial Neural Networks Learning with Backpropogation.pdf' }
      ]
    },
    {
      title: 'Linear SVM — Problem Formation',
      summary: 'Formulating the linear SVM optimization problem.',
      concept: 'Official course slide deck. Open to view the full slides.',
      resources: [
        { label: 'Open PDF', href: '/content/module3/CSE572_Module 3_Alternative Classification Techniques _LectureSlides/done/Linear SVM Problem Formation.pdf' }
      ]
    },
    {
      title: 'Example: Linear Separable SVM — Slide Deck',
      summary: 'Illustrative example of separable SVM.',
      concept: 'Official course slide deck. Open to view the full slides.',
      resources: [
        { label: 'Open PDF', href: '/content/module3/CSE572_Module 3_Alternative Classification Techniques _LectureSlides/done/Example of linear separable SVM_Slide Deck.pdf' }
      ]
    },
    {
      title: 'Nonlinear SVM — Slide Deck',
      summary: 'Kernels and nonlinear decision boundaries.',
      concept: 'Official course slide deck. Open to view the full slides.',
      resources: [
        { label: 'Open PDF', href: '/content/module3/CSE572_Module 3_Alternative Classification Techniques _LectureSlides/done/Nonlinear SVM_Slide Deck.pdf' }
      ]
    },
    {
      title: 'Nonseparable SVM — Slide Deck',
      summary: 'Soft margins and slack variables.',
      concept: 'Official course slide deck. Open to view the full slides.',
      resources: [
        { label: 'Open PDF', href: '/content/module3/CSE572_Module 3_Alternative Classification Techniques _LectureSlides/done/Nonseparable SVM_Slide Deck.pdf' }
      ]
    },
    {
      title: 'Lagrangian Multipliers — Slide Deck',
      summary: 'Using Lagrangian multipliers in SVM derivations.',
      concept: 'Official course slide deck. Open to view the full slides.',
      resources: [
        { label: 'Open PDF', href: '/content/module3/CSE572_Module 3_Alternative Classification Techniques _LectureSlides/Usage of Langrangian Multipliers_Slide Deck.pdf' }
      ]
    },

    // Slides: Module 4 — Clustering
    {
      title: 'Introduction to Cluster Validity — Slide Deck',
      summary: 'What makes clusters meaningful and how to assess them.',
      concept: 'Official course slide deck. Open to view the full slides.',
      resources: [
        { label: 'Open PDF', href: '/content/module4/CSE572_Module 4_Clustering_Lecture Slides/Introduction to Cluster Validity_Slide Deck.pdf' }
      ]
    },
    {
      title: 'K-Means Algorithm — Slide Deck',
      summary: 'K-means clustering algorithm and properties.',
      concept: 'Official course slide deck. Open to view the full slides.',
      resources: [
        { label: 'Open PDF', href: '/content/module4/CSE572_Module 4_Clustering_Lecture Slides/KMeansAlgorithm_Slide Deck.pdf' }
      ]
    },
    {
      title: 'Bisecting K-Means — Slide Deck',
      summary: 'Bisecting variant of K-means for clustering.',
      concept: 'Official course slide deck. Open to view the full slides.',
      resources: [
        { label: 'Open PDF', href: '/content/module4/CSE572_Module 4_Clustering_Lecture Slides/BisectingKMeans_Slide Deck.pdf' }
      ]
    },
    {
      title: 'Hierarchical Clustering — Slide Deck',
      summary: 'Agglomerative/divisive clustering frameworks.',
      concept: 'Official course slide deck. Open to view the full slides.',
      resources: [
        { label: 'Open PDF', href: '/content/module4/CSE572_Module 4_Clustering_Lecture Slides/HierarchicalClustering_Slide Deck.pdf' }
      ]
    },
    {
      title: 'Hierarchical Clustering — Examples',
      summary: 'Worked examples for hierarchical clustering.',
      concept: 'Official course slide deck. Open to view the full slides.',
      resources: [
        { label: 'Open PDF', href: '/content/module4/CSE572_Module 4_Clustering_Lecture Slides/HierarchicalClusteringExample_Slide Deck.pdf' }
      ]
    },
    {
      title: 'Hierarchical Clustering — Performance',
      summary: 'Runtime and performance considerations.',
      concept: 'Official course slide deck. Open to view the full slides.',
      resources: [
        { label: 'Open PDF', href: '/content/module4/CSE572_Module 4_Clustering_Lecture Slides/HierarchicalClusteringPerformance_Slide Deck.pdf' }
      ]
    },
    {
      title: 'DBSCAN — Slide Deck',
      summary: 'Density-based clustering with DBSCAN.',
      concept: 'Official course slide deck. Open to view the full slides.',
      resources: [
        { label: 'Open PDF', href: '/content/module4/CSE572_Module 4_Clustering_Lecture Slides/DBSCAN_Slide Deck.pdf' }
      ]
    },
    {
      title: 'Unsupervised Cluster Validity — Slide Deck',
      summary: 'Evaluating clusters without labels.',
      concept: 'Official course slide deck. Open to view the full slides.',
      resources: [
        { label: 'Open PDF', href: '/content/module4/CSE572_Module 4_Clustering_Lecture Slides/Unsupervised Cluster Validity_Slide Deck.pdf' }
      ]
    },
    {
      title: 'Supervised Cluster Validity — Slide Deck',
      summary: 'External validation with labels.',
      concept: 'Official course slide deck. Open to view the full slides.',
      resources: [
        { label: 'Open PDF', href: '/content/module4/CSE572_Module 4_Clustering_Lecture Slides/Supervised Cluster Validity_Slide Deck.pdf' }
      ]
    },
    {
      title: 'Introduction to Cluster Validity (Alt) — Slide Deck',
      summary: 'Alternate deck version for cluster validity.',
      concept: 'Official course slide deck. Open to view the full slides.',
      resources: [
        { label: 'Open PDF', href: '/content/module4/CSE572_Module 4_Clustering_Lecture Slides/Introduction to Cluster Validity_Sliide Deck.pdf' }
      ]
    },

    // Slides: Module 5 — Association Rule Mining
    {
      title: 'Basic Concepts of Association Rule Mining — Slide Deck',
      summary: 'Foundations of association rules and itemsets.',
      concept: 'Official course slide deck. Open to view the full slides.',
      resources: [
        { label: 'Open PDF', href: '/content/module 5/CSE572_Module 5_Association Rule Mining _LectureSlides/Basic Concepts of Association Rule Mining_Slide Deck.pdf' }
      ]
    },
    {
      title: 'Apriori Algorithm — Slide Deck',
      summary: 'Apriori algorithm for frequent itemset mining.',
      concept: 'Official course slide deck. Open to view the full slides.',
      resources: [
        { label: 'Open PDF', href: '/content/module 5/CSE572_Module 5_Association Rule Mining _LectureSlides/Apriori Algorithm_Slide Deck.pdf' }
      ]
    },
    {
      title: 'Apriori Principle — Slide Deck',
      summary: 'The Apriori principle and pruning.',
      concept: 'Official course slide deck. Open to view the full slides.',
      resources: [
        { label: 'Open PDF', href: '/content/module 5/CSE572_Module 5_Association Rule Mining _LectureSlides/Introduction to Apriori Principle_Slide Deck.pdf' }
      ]
    },
    {
      title: 'Support and Confidence — Slide Deck',
      summary: 'Key measures for association rules.',
      concept: 'Official course slide deck. Open to view the full slides.',
      resources: [
        { label: 'Open PDF', href: '/content/module 5/CSE572_Module 5_Association Rule Mining _LectureSlides/Confidence and Support_Slide Deck.pdf' }
      ]
    },
    {
      title: 'Factors Affecting Complexity — Slide Deck',
      summary: 'Complexity considerations in ARM.',
      concept: 'Official course slide deck. Open to view the full slides.',
      resources: [
        { label: 'Open PDF', href: '/content/module 5/CSE572_Module 5_Association Rule Mining _LectureSlides/Factors Affecting Complexity_Slide Deck.pdf' }
      ]
    },
    {
      title: 'Graded Quiz & Notes — Module 5',
      summary: 'Practice quiz and additional notes for Apriori.',
      concept: 'Open the PDF quiz and notes to review concepts.',
      resources: [
        { label: 'Open Quiz PDF', href: '/content/module 5/Module_5__Graded_quiz_Sp23__CSE_572__Data_Mining__2023_Spring_.pdf.pdf' },
        { label: 'Apriori Q&A Notes', href: '/content/module 5/quiz/Apriori_QA_Notes.pdf' }
      ]
    },

    // === NEW AI & DATA SCIENCE TECHNIQUES (2024-2025) ===
    {
      title: 'Agentic AI Systems',
      summary: 'Understanding autonomous AI agents that perform tasks independently.',
      story: 'Imagine an AI that doesn\'t just answer questions but actively manages your entire data pipeline—from collecting data to generating insights to scheduling follow-up analyses. This is the promise of Agentic AI, the biggest breakthrough in 2024-2025.',
      concept: 'Agentic AI systems are autonomous agents that can perceive their environment, make decisions, and take actions to achieve specific goals without constant human oversight. Unlike traditional AI that responds to prompts, agentic AI proactively manages workflows, schedules tasks, and adapts to changing conditions. Key components include goal-oriented reasoning, action planning, environment monitoring, and learning from feedback.',
      keywords: ['agentic AI', 'autonomous agents', 'workflow automation', 'decision making', 'goal-oriented reasoning'],
      exercise: 'Design an agentic AI system for e-commerce: 1) Define its goals (customer satisfaction, sales optimization), 2) List actions it can take (inventory management, personalized recommendations, customer service), 3) Describe how it would adapt to seasonal changes.',
      solution: 'Goals: Maximize customer satisfaction and sales. Actions: Real-time inventory adjustments, dynamic pricing, personalized product recommendations, automated customer support, predictive restocking. Adaptation: Monitor seasonal patterns, adjust recommendation algorithms, modify pricing strategies based on demand forecasting.',
      reflection: 'What are the ethical implications of fully autonomous AI agents making business decisions? How do we maintain human oversight while preserving agent autonomy?',
      visualization: 'AgentWorkflowDiagram',
      flow: {
        title: 'Agentic AI Workflow',
        steps: ['Goal Setting', 'Environment Perception', 'Decision Planning', 'Action Execution', 'Feedback Learning']
      },
      terms: {
        title: 'Agentic AI Components',
        items: [
          { term: 'Autonomous Agent', def: 'AI system that operates independently to achieve goals' },
          { term: 'Goal-Oriented Reasoning', def: 'Planning actions to achieve specific objectives' },
          { term: 'Environment Monitoring', def: 'Continuous awareness of system state and changes' },
          { term: 'Action Planning', def: 'Strategic sequencing of tasks to reach goals' },
          { term: 'Adaptive Learning', def: 'Improving performance based on outcomes and feedback' },
          { term: 'Multi-Agent Systems', def: 'Multiple agents working together on complex tasks' }
        ]
      },
      useCases: {
        title: 'Agentic AI Applications',
        items: [
          { title: 'Business Process Automation', desc: 'End-to-end workflow management without human intervention' },
          { title: 'Data Pipeline Management', desc: 'Autonomous data collection, processing, and quality monitoring' },
          { title: 'Customer Service', desc: 'Intelligent agents handling complex customer inquiries independently' },
          { title: 'Financial Trading', desc: 'Algorithmic trading agents adapting to market conditions' },
          { title: 'Supply Chain Optimization', desc: 'Agents managing inventory, logistics, and supplier relationships' },
          { title: 'Content Creation', desc: 'Automated content generation and optimization for different audiences' }
        ]
      },
      callouts: [
        { type: 'info', title: 'Current Limitations', body: 'Early implementations focus on structured, low-risk tasks due to trust and reliability concerns.' },
        { type: 'warning', title: 'Ethical Considerations', body: 'Autonomous agents raise questions about accountability, bias, and human control.' },
        { type: 'tip', title: 'Implementation Strategy', body: 'Start with small, contained tasks and gradually expand agent autonomy as trust is established.' }
      ],
      quiz: {
        question: 'What distinguishes Agentic AI from traditional AI systems?',
        options: ['Higher accuracy', 'Autonomous goal-oriented behavior', 'Faster processing speed', 'Better user interface'],
        answerIndex: 1,
        hint: 'Think about the key characteristic that makes these systems independent.'
      }
    },
    {
      title: 'MLOps and Model Industrialization',
      summary: 'Scaling machine learning from artisanal craft to industrial production.',
      story: 'Netflix deploys thousands of ML models daily, from recommendation engines to content optimization. This isn\'t possible with traditional data science approaches—it requires MLOps, the practice of industrializing machine learning at scale.',
      concept: 'MLOps (Machine Learning Operations) is the practice of applying DevOps principles to machine learning workflows. It encompasses model development, deployment, monitoring, and maintenance at scale. Key components include automated pipelines, version control for models and data, continuous integration/deployment (CI/CD), model monitoring, and infrastructure as code. The goal is to move from one-off model creation to systematic, repeatable ML production systems.',
      keywords: ['MLOps', 'model deployment', 'CI/CD', 'model monitoring', 'feature stores', 'model versioning'],
      exercise: 'Design an MLOps pipeline for a recommendation system: 1) Data ingestion and processing, 2) Model training and validation, 3) Deployment strategy, 4) Monitoring and alerting, 5) Retraining triggers.',
      solution: 'Pipeline: Automated data ingestion → Feature engineering → Model training with hyperparameter tuning → A/B testing → Gradual deployment → Performance monitoring → Automated retraining when drift detected. Include version control for code, data, and models, plus alerting for performance degradation.',
      reflection: 'How does MLOps change the role of data scientists? What new skills are needed in an industrialized ML environment?',
      flow: {
        title: 'MLOps Lifecycle',
        steps: ['Data Ingestion', 'Feature Engineering', 'Model Training', 'Validation & Testing', 'Deployment', 'Monitoring', 'Retraining']
      },
      terms: {
        title: 'MLOps Components',
        items: [
          { term: 'Feature Store', def: 'Centralized repository for machine learning features' },
          { term: 'Model Registry', def: 'Version control system for ML models and metadata' },
          { term: 'CI/CD Pipeline', def: 'Automated testing and deployment of ML models' },
          { term: 'Model Monitoring', def: 'Tracking model performance and data drift in production' },
          { term: 'Infrastructure as Code', def: 'Managing ML infrastructure through code and automation' },
          { term: 'A/B Testing', def: 'Comparing model variants to validate improvements' },
          { term: 'Model Drift', def: 'Degradation in model performance over time' },
          { term: 'Shadow Deployment', def: 'Running new models alongside existing ones for comparison' }
        ]
      },
      useCases: {
        title: 'MLOps in Practice',
        items: [
          { title: 'Netflix', desc: 'Thousands of recommendation models deployed and managed automatically' },
          { title: 'Uber', desc: 'Dynamic pricing models updated in real-time based on demand patterns' },
          { title: 'Spotify', desc: 'Music recommendation system with continuous learning and deployment' },
          { title: 'Amazon', desc: 'Product recommendation and demand forecasting at massive scale' },
          { title: 'Tesla', desc: 'Autonomous driving models deployed to vehicles over-the-air' },
          { title: 'Financial Services', desc: 'Fraud detection models with real-time monitoring and updates' }
        ]
      },
      categorize: {
        title: 'Classify MLOps Tools by Function',
        categories: ['Development', 'Deployment', 'Monitoring', 'Infrastructure'],
        items: [
          'Kubeflow',
          'MLflow',
          'Prometheus',
          'TensorFlow Serving',
          'Weights & Biases',
          'Docker',
          'Grafana',
          'Apache Airflow'
        ],
        solution: {
          'Development': ['MLflow', 'Weights & Biases'],
          'Deployment': ['Kubeflow', 'TensorFlow Serving'],
          'Monitoring': ['Prometheus', 'Grafana'],
          'Infrastructure': ['Docker', 'Apache Airflow']
        }
      },
      quiz: {
        question: 'What is the primary benefit of implementing MLOps practices?',
        options: ['Faster model training', 'Better model accuracy', 'Scalable model deployment and management', 'Reduced data requirements'],
        answerIndex: 2,
        hint: 'Consider what changes when moving from individual models to industrial-scale ML.'
      }
    },
    {
      title: 'AutoML and Democratized Machine Learning',
      summary: 'Automating machine learning to make AI accessible to non-experts.',
      story: 'A marketing manager at a retail company needs to predict customer churn but has no programming skills. With AutoML platforms like H2O.ai or Google AutoML, she can upload her data, specify the goal, and get a production-ready model in hours, not months.',
      concept: 'AutoML (Automated Machine Learning) automates the entire machine learning pipeline, from data preprocessing to model selection and hyperparameter tuning. It democratizes AI by enabling non-technical domain experts to build and deploy ML models. Key capabilities include automated feature engineering, algorithm selection, hyperparameter optimization, model ensembling, and deployment. Advanced AutoML systems also handle data quality issues, missing values, and provide interpretability insights.',
      keywords: ['AutoML', 'automated feature engineering', 'hyperparameter tuning', 'model selection', 'democratization', 'citizen data science'],
      exercise: 'Compare manual vs AutoML approach for a sales forecasting project: 1) List steps in manual ML pipeline, 2) Show how AutoML automates each step, 3) Identify trade-offs between approaches.',
      solution: 'Manual: Data cleaning → Feature engineering → Algorithm testing → Hyperparameter tuning → Model validation → Deployment (weeks/months). AutoML: Upload data → Define target → Automated pipeline execution → Model ranking → One-click deployment (hours/days). Trade-offs: AutoML saves time but may miss domain-specific insights that manual approach would capture.',
      reflection: 'How does AutoML change the data science landscape? What role will traditional data scientists play in an AutoML world?',
      flow: {
        title: 'AutoML Pipeline',
        steps: ['Data Upload', 'Automated EDA', 'Feature Engineering', 'Model Selection', 'Hyperparameter Tuning', 'Validation', 'Deployment']
      },
      terms: {
        title: 'AutoML Concepts',
        items: [
          { term: 'Automated Feature Engineering', def: 'Automatically creating and selecting relevant features from raw data' },
          { term: 'Neural Architecture Search', def: 'Automated design of neural network architectures' },
          { term: 'Hyperparameter Optimization', def: 'Automated tuning of model parameters for optimal performance' },
          { term: 'Model Ensembling', def: 'Automatically combining multiple models for better predictions' },
          { term: 'Citizen Data Science', def: 'Non-technical users creating ML solutions with AutoML tools' },
          { term: 'TPOT', def: 'Tree-based Pipeline Optimization Tool for automated ML pipelines' },
          { term: 'Auto-sklearn', def: 'Automated machine learning toolkit built on scikit-learn' },
          { term: 'Multi-objective Optimization', def: 'Optimizing multiple metrics simultaneously (accuracy, speed, interpretability)' }
        ]
      },
      useCases: {
        title: 'AutoML Applications',
        items: [
          { title: 'Business Analytics', desc: 'Non-technical analysts building predictive models for business insights' },
          { title: 'Healthcare', desc: 'Medical professionals creating diagnostic models without programming' },
          { title: 'Marketing', desc: 'Campaign optimization and customer segmentation by marketing teams' },
          { title: 'Finance', desc: 'Risk assessment and fraud detection with minimal technical expertise' },
          { title: 'Manufacturing', desc: 'Quality control and predictive maintenance models' },
          { title: 'Education', desc: 'Student performance prediction and personalized learning systems' }
        ]
      },
      sorter: {
        prompt: 'Categorize AutoML benefits by stakeholder type.',
        items: [
          'Faster time to market',
          'Reduced hiring costs for data scientists',
          'Domain expertise focus over technical skills',
          'Standardized model development process',
          'Lower barrier to AI adoption',
          'Consistent model performance',
          'Democratized innovation',
          'Reduced technical debt'
        ],
        solution: {
          'Business Leaders': [
            'Faster time to market',
            'Reduced hiring costs for data scientists',
            'Lower barrier to AI adoption',
            'Reduced technical debt'
          ],
          'Domain Experts': [
            'Domain expertise focus over technical skills',
            'Democratized innovation'
          ],
          'Organizations': [
            'Standardized model development process',
            'Consistent model performance'
          ]
        }
      },
      quiz: {
        question: 'Which aspect of machine learning does AutoML NOT typically automate?',
        options: ['Feature engineering', 'Model selection', 'Business problem definition', 'Hyperparameter tuning'],
        answerIndex: 2,
        hint: 'Think about what requires human judgment and domain knowledge.'
      }
    },
    {
      title: 'Large Language Models for Data Science',
      summary: 'Leveraging LLMs to transform how we interact with and analyze data.',
      story: 'Instead of writing complex SQL queries or Python scripts, imagine asking your data: "Show me customers most likely to churn next month and explain the key factors." LLMs are making this natural language data interaction a reality.',
      concept: 'Large Language Models (LLMs) are revolutionizing data science by enabling natural language interfaces to data, automated code generation, and intelligent data interpretation. Key applications include text-to-SQL generation, automated exploratory data analysis, code completion and debugging, data storytelling, and multimodal data analysis. LLMs can understand context, generate insights, and communicate findings in human-readable formats, bridging the gap between technical analysis and business understanding.',
      keywords: ['LLMs', 'natural language processing', 'text-to-SQL', 'code generation', 'data storytelling', 'multimodal analysis'],
      exercise: 'Design an LLM-powered data analysis system: 1) User asks business questions in natural language, 2) LLM translates to appropriate queries/code, 3) System executes analysis, 4) LLM interprets results and provides insights. Outline the architecture and key components.',
      solution: 'Architecture: Natural language interface → Intent recognition → Query/code generation → Execution engine → Result interpretation → Insight generation → Narrative explanation. Components: LLM API, database connectors, code execution environment, visualization tools, context management, and feedback loop for improvement.',
      reflection: 'How will LLMs change the accessibility of data science? What are the risks of automated interpretation and decision-making?',
      flow: {
        title: 'LLM Data Science Workflow',
        steps: ['Natural Language Query', 'Intent Understanding', 'Code Generation', 'Data Analysis', 'Result Interpretation', 'Insight Communication']
      },
      terms: {
        title: 'LLM Data Science Concepts',
        items: [
          { term: 'Text-to-SQL', def: 'Converting natural language questions into SQL queries' },
          { term: 'Code Generation', def: 'LLMs automatically writing data analysis code' },
          { term: 'Data Storytelling', def: 'LLMs creating narratives to explain data insights' },
          { term: 'Retrieval-Augmented Generation', def: 'Combining LLMs with external data sources for context' },
          { term: 'Few-shot Learning', def: 'LLMs learning tasks from just a few examples' },
          { term: 'Prompt Engineering', def: 'Crafting inputs to get optimal LLM responses' },
          { term: 'Multimodal Models', def: 'LLMs that process text, images, and other data types' },
          { term: 'Chain of Thought', def: 'LLMs showing step-by-step reasoning processes' }
        ]
      },
      useCases: {
        title: 'LLMs in Data Science',
        items: [
          { title: 'Business Intelligence', desc: 'Natural language queries for dashboards and reports' },
          { title: 'Automated EDA', desc: 'LLMs generating exploratory data analysis insights' },
          { title: 'Code Assistance', desc: 'AI-powered code completion and debugging for data scientists' },
          { title: 'Data Documentation', desc: 'Automatically generating data dictionary and analysis documentation' },
          { title: 'Research Analysis', desc: 'Processing and summarizing large volumes of research data' },
          { title: 'Customer Insights', desc: 'Analyzing customer feedback and survey data at scale' }
        ]
      },
      categorize: {
        title: 'Classify LLM Data Science Applications',
        categories: ['Data Access', 'Code Assistance', 'Insight Generation', 'Communication'],
        items: [
          'Text-to-SQL generation',
          'Automated code completion',
          'Pattern recognition in data',
          'Executive summary creation',
          'Natural language database queries',
          'Bug detection and fixing',
          'Trend analysis explanation',
          'Technical documentation generation'
        ],
        solution: {
          'Data Access': [
            'Text-to-SQL generation',
            'Natural language database queries'
          ],
          'Code Assistance': [
            'Automated code completion',
            'Bug detection and fixing'
          ],
          'Insight Generation': [
            'Pattern recognition in data',
            'Trend analysis explanation'
          ],
          'Communication': [
            'Executive summary creation',
            'Technical documentation generation'
          ]
        }
      },
      callouts: [
        { type: 'info', title: 'Current Capabilities', body: 'LLMs excel at text analysis, code generation, and natural language interfaces but may struggle with complex mathematical reasoning.' },
        { type: 'warning', title: 'Accuracy Concerns', body: 'LLM-generated code and interpretations should always be validated by experts.' },
        { type: 'tip', title: 'Best Practices', body: 'Use LLMs as assistants, not replacements. Always verify results and maintain human oversight.' }
      ],
      quiz: {
        question: 'What is the primary advantage of using LLMs in data science?',
        options: ['Faster computation', 'More accurate models', 'Natural language interface to data', 'Better visualization'],
        answerIndex: 2,
        hint: 'Think about how LLMs change the way humans interact with data systems.'
      }
    }
  ]
}

export default area
