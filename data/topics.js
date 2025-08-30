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
    slug: 'data-mining',
    title: 'Data Mining',
    description: 'Discover patterns in data through stories, hands-on practice, and reflection.',
    tags: ['History', 'Purpose', 'CRISP-DM'],
    lessons: [
      {
        title: 'History and Purpose of Data Mining',
        summary: 'How we got here and why data mining matters.',
        story:
          'Imagine a small retailer in the 1990s analyzing checkout receipts. By grouping items bought together across thousands of transactions, they uncover surprising product pairings. This “market basket analysis” wasn’t about fancy models—it was about letting patterns in the data speak. Around the same time, the Knowledge Discovery in Databases (KDD) community and the CRISP-DM methodology emerged to turn raw data into useful knowledge, step by step.',
        concept:
          'Data mining is the process of discovering useful, non-trivial patterns from data to support decisions. It overlaps with statistics (inference) and machine learning (prediction), but focuses on pattern discovery, actionable insights, and decision support. Why mine data? Data is exploding: from 1TB in 2000 to 30TB+ in 2025. We need automated methods to handle volume, velocity, and variety. Applications: personalized recommendations, fraud detection, medical diagnosis, customer segmentation. Milestones: 1960s–80s databases and OLAP; late 1980s KDD workshops; late 1990s CRISP-DM; 2000s “big data” and distributed systems; 2010s deep learning influences. Common goals: association discovery (what co-occurs), classification (predict labels), clustering (group similar items), anomaly detection (find outliers).',
        exercise:
          'Do-now: List three data sources around you (apps, sensors, logs). For each, state one possible pattern (association, classification, clustering, anomaly) that could create value. Example: streaming app logs → anomaly detection to flag login fraud.',
        reflection:
          'Where could data-derived patterns meaningfully change decisions in your school/work? What are two risks (e.g., bias, privacy) and one mitigation you would apply?',
        visualization: 'DataGrowthChart',
        simulator: 'MarketBasketSimulator',
        timeline: {
          title: 'Data Mining: A Brief Timeline',
          items: [
            { year: '1960s–80s', label: 'Databases and OLAP', note: 'Structured storage and analytics foundations.' },
            { year: '1989', label: 'KDD workshops', note: 'Formalizes knowledge discovery from data.' },
            { year: '1996–2000', label: 'CRISP-DM', note: 'A practical, iterative project lifecycle.' },
            { year: '2000s', label: 'Big Data era', note: 'Distributed systems for volume, velocity, variety.' },
            { year: '2010s', label: 'Deep learning impact', note: 'Representation learning influences pattern discovery.' }
          ]
        },
        quiz: {
          question: 'Which goal best matches “What co-occurs together in data?”',
          options: ['Classification', 'Association discovery', 'Clustering', 'Anomaly detection'],
          answerIndex: 1,
          hint: 'Think market baskets and co-purchased items.'
        },
        quiz2: {
          question: 'What is the primary driver for the rise of data mining?',
          options: ['Decreasing data volumes', 'Exponential data growth', 'Manual analysis becoming cheaper', 'Elimination of computers'],
          answerIndex: 1,
          hint: 'Consider the data explosion from 1TB to 30TB+ in 25 years.'
        },
        sorter: {
          prompt: 'Place each item into Benefits or Challenges of Data Mining.',
          items: [
            'Personalization and recommendations',
            'Fraud/anomaly detection',
            'Data quality issues',
            'Privacy and compliance risks',
            'Operational efficiency',
            'Model/insight drift over time'
          ],
          solution: {
            benefits: [
              'Personalization and recommendations',
              'Fraud/anomaly detection',
              'Operational efficiency'
            ],
            challenges: [
              'Data quality issues',
              'Privacy and compliance risks',
              'Model/insight drift over time'
            ]
          }
        },
        useCases: {
          title: 'Why Mine Data? Applications',
          items: [
            { title: 'Market Basket & Cross‑Sell', desc: 'Find co‑purchases to optimize layout/bundles.' },
            { title: 'Churn & Retention', desc: 'Predict attrition and trigger targeted saves.' },
            { title: 'Fraud & Anomalies', desc: 'Detect unusual behavior in real‑time streams.' },
            { title: 'Recommenders', desc: 'Personalize content/products from implicit signals.' },
            { title: 'Web & Clickstream', desc: 'Mine navigation paths to reduce drop‑off.' },
            { title: 'Healthcare & Bio', desc: 'Assist diagnosis and triage (with guardrails).' }
          ]
        },
        flow: {
          title: 'From Data to Decisions',
          steps: ['Data', 'Prep', 'Patterns', 'Knowledge', 'Decisions', 'Value']
        },
        terms: {
          title: 'Key Terms (Tap to Expand)',
          items: [
            { term: 'Data Mining', def: 'Discovering useful, non‑trivial patterns from data to support decisions.' },
            { term: 'KDD', def: 'End‑to‑end knowledge discovery process around data mining.' },
            { term: 'CRISP‑DM', def: 'Lifecycle: business → data → prep → modeling → eval → deploy.' },
            { term: 'Predictive vs Descriptive', def: 'Predictive forecasts labels; descriptive explains structure/associations.' },
            { term: 'Supervised vs Unsupervised', def: 'Supervised uses labels; unsupervised finds structure without labels.' }
          ]
        },
        growth: {
          title: 'Why Now? Data Growth',
          bars: [
            { label: '1990s', caption: 'MB → GB', value: 1 },
            { label: '2000s', caption: 'GB → TB', value: 3 },
            { label: '2010s', caption: 'TB → PB', value: 6 },
            { label: '2020s', caption: 'PB → EB/ZB', value: 10 }
          ]
        }
      },
      {
        title: 'KDD vs Data Mining',
        summary: 'KDD is the broader process; data mining is the core step.',
        concept:
          'KDD = selection → preprocessing → transformation → data mining → interpretation/evaluation. Data mining is the model/pattern discovery step within KDD.',
        exercise:
          'Map a simple dataset (e.g., course grades) to each KDD step.'
      },
      {
        title: 'CRISP-DM Phases',
        summary: 'A practical lifecycle to structure projects.',
        concept:
          'Business understanding, data understanding, data preparation, modeling, evaluation, deployment. Iterative and cyclical.',
        exercise:
          'Draft a one-page CRISP-DM plan for a churn problem.'
      },
      {
        title: 'Pattern Types and Examples',
        summary: 'Association, classification, clustering, anomaly detection.',
        concept:
          'Examples: Market basket rules; decision trees for approval; k-means for customer segments; isolation forest for anomaly detection.',
        exercise:
          'Classify 6 mini-scenarios into one of the four pattern types.'
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
