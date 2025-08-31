const area = {
  slug: 'data-mining',
  title: 'Data Mining',
  description: 'Master core concepts through interactive visualizations and hands-on practice.',
  tags: ['Data Mining', 'Data Types', 'Attributes', 'Preprocessing', 'Similarity', 'Distance', 'Dimensionality', 'Correlation', 'Classification', 'Decision Trees', 'Evaluation'],
  color: '#4ecdc4',
  theme: 'data',
  modules: [
    {
      slug: 'core-concepts',
      title: 'Module 1: Core Concepts & Motivation',
      description: 'Why mine data, where it fits, and foundational data/attribute types.',
      lessonIndexes: [0, 1, 2]
    },
    {
      slug: 'classification-basics',
      title: 'Module 2: Existing Techniques — Classification',
      description: 'Decision trees, split criteria, impurity, evaluation, and generalization.',
      lessonIndexes: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
    },
    {
      slug: 'data-prep',
      title: 'Module 3: Data Preparation',
      description: 'Cleaning, transforming, and preparing data before mining.',
      lessonIndexes: [3]
    },
    {
      slug: 'similarity-distance',
      title: 'Module 4: Similarity & Distance',
      description: 'Compare vectors and measure (dis)similarity for mining tasks.',
      lessonIndexes: [4, 5]
    },
    {
      slug: 'dimensionality-correlation',
      title: 'Module 5: Dimensionality & Correlation',
      description: 'Reduce dimensions and understand relationships among variables.',
      lessonIndexes: [6, 7]
    },
    {
      slug: 'case-study',
      title: 'Module 6: Case Study',
      description: 'Apply the pipeline end-to-end for churn.',
      lessonIndexes: [9]
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
    }
  ]
}

export default area
