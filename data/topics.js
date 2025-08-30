export const focusAreas = [
  {
    slug: 'math-foundations',
    title: 'Math Foundations',
    description: 'Key math building blocks, one small concept at a time.',
    tags: ['Algebra', 'Numbers', 'Geometry'],
    color: '#ff6b6b',
    theme: 'math',
    lessons: [
      {
        title: 'Order of Operations (PEMDAS)',
        summary: 'A consistent rule for evaluating expressions.',
        concept:
          'Evaluate expressions by Parentheses → Exponents → Multiplication/Division → Addition/Subtraction, left to right within each step.',
        keywords: ['PEMDAS', 'Parentheses', 'Exponents', 'Multiplication', 'Division', 'Addition', 'Subtraction', 'left to right'],
        exercise:
          'Compute 7 + 3 × (10 − 6)^2. Hint: Parentheses first, then exponent, etc.',
        solution:
          '7 + 3 × (10 − 6)^2 = 7 + 3 × 4^2 = 7 + 3 × 16 = 7 + 48 = 55.',
        order: {
          title: 'Put PEMDAS steps in order',
          items: ['Addition/Subtraction', 'Multiplication/Division', 'Exponents', 'Parentheses'],
          solution: ['Parentheses', 'Exponents', 'Multiplication/Division', 'Addition/Subtraction']
        },
        quiz: {
          question: 'Which operation do you perform first in 8 − 3 × 2?',
          options: ['Subtract', 'Multiply', 'Add', 'Divide'],
          answerIndex: 1,
          hint: 'Multiplication/Division come before Addition/Subtraction.'
        },
        quiz2: {
          question: 'In 4 + (6 ÷ 3)^2, what is evaluated second?',
          options: ['6 ÷ 3', 'Square the result', '4 + …', 'Multiply 4 and the result'],
          answerIndex: 1,
          hint: 'Parentheses first, then the exponent.'
        },
        flashcards: {
          title: 'PEMDAS Reminders',
          cards: [
            { front: 'P', back: 'Parentheses' },
            { front: 'E', back: 'Exponents' },
            { front: 'M/D', back: 'Multiplication and Division (left → right)' },
            { front: 'A/S', back: 'Addition and Subtraction (left → right)' }
          ]
        },
        shortAnswer: {
          prompt: 'Why are multiplication and division evaluated left to right?',
          expectedKeywords: ['left to right', 'same precedence', 'consistency'],
          sample: 'Because multiplication and division have the same precedence; evaluate them in the order they appear (left to right) to keep results consistent.'
        },
        callouts: [
          { type: 'tip', title: 'Check As You Go', body: 'Rewrite the expression after each step to avoid mistakes.' }
        ]
      },
      {
        title: 'Distributive Property',
        summary: 'Multiply across addition: a(b + c) = ab + ac.',
        concept:
          'The distributive property lets you expand and simplify expressions by multiplying each term inside parentheses.',
        keywords: ['distribute', 'expand', 'simplify', 'like terms'],
        exercise:
          'Expand and simplify 3(x + 4) − 2(x − 1).',
        solution:
          '3(x + 4) − 2(x − 1) = 3x + 12 − 2x + 2 = x + 14.',
        sorter: {
          prompt: 'Drag each expansion into Correct or Incorrect.',
          items: [
            '3(x + 4) = 3x + 12',
            '2(5 + y) = 10 + y',
            '2(5 + y) = 10 + 2y',
            '−4(x − 3) = −4x − 12',
            '−4(x − 3) = −4x + 12',
            '3(x + 2) = 3x + 2',
            '7(a − 2) = 7a − 14',
            '5(2x) = 10x'
          ],
          solution: {
            Correct: ['3(x + 4) = 3x + 12', '2(5 + y) = 10 + 2y', '−4(x − 3) = −4x + 12', '7(a − 2) = 7a − 14', '5(2x) = 10x'],
            Incorrect: ['2(5 + y) = 10 + y', '−4(x − 3) = −4x − 12', '3(x + 2) = 3x + 2']
          }
        },
        quiz: {
          question: 'Which is equivalent to 5(a + 2)?',
          options: ['5a + 2', '5a + 10', 'a + 10', '10a + 2'],
          answerIndex: 1,
          hint: 'Multiply 5 by each term inside the parentheses.'
        },
        flashcards: {
          title: 'Distribution Facts',
          cards: [
            { front: 'a(b + c)', back: 'ab + ac' },
            { front: 'a(b − c)', back: 'ab − ac' },
            { front: '−k(x − m)', back: '−kx + km' },
            { front: 'Reverse of distribute', back: 'Factor common term (e.g., ab + ac = a(b + c))' }
          ]
        },
        shortAnswer: {
          prompt: 'When is distributing helpful before simplifying an expression?',
          expectedKeywords: ['eliminate parentheses', 'expand', 'combine like terms', 'area model', 'mental math'],
          sample: 'Distribution eliminates parentheses so you can combine like terms or compute quickly (e.g., mental math and area/box models).'
        }
      },
      {
        title: 'Linear Equations',
        summary: 'Solve for the unknown with inverse operations.',
        concept:
          'To solve ax + b = c, isolate x by reversing operations in the correct order.',
        keywords: ['isolate x', 'inverse operations', 'balance', 'both sides'],
        exercise:
          'Solve 2x − 5 = 11 and check your solution.',
        solution:
          '2x − 5 = 11 → 2x = 16 → x = 8. Check: 2(8) − 5 = 11.',
        order: {
          title: 'Put the solving steps in order',
          items: ['Divide both sides by 2', 'Add 5 to both sides', 'Check by substituting x back'],
          solution: ['Add 5 to both sides', 'Divide both sides by 2', 'Check by substituting x back']
        },
        quiz: {
          question: 'What is x in 2x − 5 = 11?',
          options: ['6', '7', '8', '9'],
          answerIndex: 2,
          hint: 'Undo subtraction with addition, then divide.'
        },
        flashcards: {
          title: 'Equation Solving Tips',
          cards: [
            { front: 'Balance', back: 'Do the same operation to both sides.' },
            { front: 'Inverse Operations', back: 'Undo addition with subtraction; undo multiplication with division.' },
            { front: 'Check', back: 'Verify by substituting the solution back into the original equation.' }
          ]
        },
        shortAnswer: {
          prompt: 'Why is the “check your solution” step important?',
          expectedKeywords: ['substitute', 'verify', 'original equation', 'true', 'both sides'],
          sample: 'Substituting x back confirms both sides are equal, catching algebra or arithmetic mistakes before moving on.'
        },
        callouts: [
          { type: 'info', title: 'Keep Balance', body: 'Whatever you do to one side, do to the other.' }
        ]
      }
    ]
  },
  {
    slug: 'llm-engineering',
    title: 'LLM Engineering',
    description: 'Build with Large Language Models: foundations, prompting, RAG, tuning, eval, and production — in bite-size lessons.',
    tags: ['LLM', 'Prompting', 'RAG', 'Embeddings', 'Fine-tuning', 'Evaluation', 'Safety', 'Ops'],
    color: '#a66cff',
    theme: 'coding',
    modules: [
      {
        slug: 'foundations',
        title: 'Module 1: LLM Foundations',
        description: 'What LLMs are, how they work, and their limits.',
        lessonIndexes: [0, 1, 2, 3]
      },
      {
        slug: 'prompting',
        title: 'Module 2: Prompting Patterns',
        description: 'Prompt design, few-shot, structure, and tool use.',
        lessonIndexes: [4, 5, 6, 7]
      },
      {
        slug: 'embeddings-rag',
        title: 'Module 3: Embeddings & RAG',
        description: 'Search with embeddings, chunking, retrieval, and grounding.',
        lessonIndexes: [8, 9, 10, 11]
      },
      {
        slug: 'tuning',
        title: 'Module 4: Fine-tuning & Adapters',
        description: 'When and how to adapt models safely and economically.',
        lessonIndexes: [12, 13, 14]
      },
      {
        slug: 'evaluation-safety',
        title: 'Module 5: Evaluation & Safety',
        description: 'Measure quality, robustness, and policy alignment.',
        lessonIndexes: [15, 16, 17]
      },
      {
        slug: 'production-ops',
        title: 'Module 6: Production & Ops',
        description: 'Ship, monitor, and optimize LLM apps in production.',
        lessonIndexes: [18, 19, 20]
      }
    ],
    lessons: [
      {
        title: 'What Is an LLM?',
        summary: 'A quick tour of LLM capabilities and where they excel.',
        story:
          'A support team cut response times by 60% by pairing an LLM with a knowledge base: the model drafted answers, while retrieval grounded facts. The key wasn’t just “AI”—it was the system design around it.',
        concept:
          'Large Language Models predict the next token given context. They are powerful pattern matchers that can follow instructions, translate, write, summarize, and reason within limits. They are not databases or oracles; they hallucinate when ungrounded.',
        keywords: ['predict next token', 'context', 'hallucination', 'grounding'],
        exercise:
          'List three tasks LLMs are good at and three tasks they are bad at in your domain.',
        callouts: [
          { type: 'info', title: 'Mental Model', body: 'Think “autocomplete on steroids” — incredible linguistic prior, limited factual memory.' },
          { type: 'tip', title: 'Ground Truth', body: 'Use retrieval or tools to anchor answers to sources.' }
        ],
        quiz: {
          question: 'What core operation do LLMs perform?',
          options: ['Database lookup', 'Next-token prediction', 'Exact fact recall', 'Image classification'],
          answerIndex: 1,
          hint: 'It’s a probabilistic prediction conditioned on context.'
        },
        flashcards: {
          title: 'Key Terms',
          cards: [
            { front: 'Context Window', back: 'The maximum number of tokens an LLM can attend to.' },
            { front: 'Hallucination', back: 'A plausible but incorrect output lacking grounding.' },
            { front: 'Grounding', back: 'Anchoring model outputs in retrieved or tool-provided facts.' }
          ]
        }
      },
      {
        title: 'Tokens and Tokenization',
        summary: 'How text becomes tokens and why counts matter for cost and context.',
        concept:
          'Tokenizers split text into sub-word units. Costs, latency, and context limits are token-based. Prompt+response must fit the context window; long documents require chunking or retrieval.',
        keywords: ['tokenization', 'context window', 'cost'],
        exercise:
          'Estimate tokens for a 1,000-word article. How would you chunk it?',
        terms: {
          title: 'Tokenization Basics',
          items: [
            { term: 'BPE', def: 'Byte Pair Encoding; merges common character sequences.' },
            { term: 'Vocabulary', def: 'Finite set of tokens the model understands.' },
            { term: 'Truncation', def: 'Dropping tokens when exceeding context limits.' }
          ]
        },
        quiz: {
          question: 'Why does token count affect cost?',
          options: ['Models bill per request', 'Billing scales with tokens processed', 'Fixed monthly fee', 'Number of users'],
          answerIndex: 1,
          hint: 'Both prompt and completion tokens are billed.'
        }
      },
      {
        title: 'Transformer Intuition',
        summary: 'Attention lets models focus on relevant context efficiently.',
        concept:
          'Transformers use self-attention to relate tokens to each other in parallel, enabling long-range dependencies and efficient training. Key pieces: embeddings, attention, feed-forward layers, and positional information.',
        keywords: ['self-attention', 'embeddings', 'positional encoding'],
        flow: {
          title: 'Data Flow (High-level)',
          steps: ['Text → Tokens', 'Token Embeddings', 'Self-Attention Blocks', 'Logits', 'Next Token']
        },
        callouts: [
          { type: 'info', title: 'No heavy math here', body: 'We focus on concepts useful for builders, not derivations.' }
        ],
        quiz: {
          question: 'What does self-attention compute?',
          options: ['Convolutions over images', 'Relations between tokens', 'Gradient updates', 'Disk I/O'],
          answerIndex: 1,
          hint: 'It weighs pairwise token interactions.'
        }
      },
      {
        title: 'Capabilities and Limits',
        summary: 'Strengths, failure modes, and how to mitigate them.',
        concept:
          'LLMs excel at language tasks, pattern completion, and following structure. They fail with exact arithmetic, precise long-term memory, and ungrounded claims. Use tools, retrieval, or constraints to mitigate.',
        keywords: ['failure modes', 'mitigation'],
        sorter: {
          prompt: 'Drag items into Benefits vs Challenges for LLMs.',
          items: [
            'Instruction following', 'Generalization', 'Style adaptation', 'Hallucination', 'Context limits', 'Stochasticity'
          ],
          solution: {
            benefits: ['Instruction following', 'Generalization', 'Style adaptation'],
            challenges: ['Hallucination', 'Context limits', 'Stochasticity']
          }
        },
        reflection:
          'Which failure mode most affects your product, and how will you mitigate it?'
      },
      {
        title: 'Prompting Fundamentals',
        summary: 'Clear instructions, structure, and constraints improve reliability.',
        concept:
          'Good prompts specify role, task, constraints, and output format. Provide examples when needed. Keep inputs concise and unambiguous; validate outputs.',
        keywords: ['role', 'constraints', 'format'],
        exercise:
          'Rewrite a vague prompt into a precise one with an explicit JSON schema for output.',
        flashcards: {
          title: 'Prompt Patterns',
          cards: [
            { front: 'Role Prompt', back: 'Set system persona to guide style and policy.' },
            { front: 'Output Schema', back: 'Ask for a specific, machine-checked structure.' },
            { front: 'Few-shot', back: 'Provide input/output pairs to shape behavior.' }
          ]
        },
        quiz: {
          question: 'Which element most reduces ambiguity?',
          options: ['Creative tone', 'Few adjectives', 'Explicit output schema', 'Longer prompt'],
          answerIndex: 2,
          hint: 'Machine-validated formats are less ambiguous.'
        }
      },
      {
        title: 'Reasoning Aids',
        summary: 'Teach step-by-step thinking with structured prompting.',
        concept:
          'Chain-of-thought, self-consistency, and decomposition improve reasoning. Externalize steps (e.g., “think then act”), or generate plans first and execute next.',
        keywords: ['chain-of-thought', 'decomposition', 'self-consistency'],
        order: {
          title: 'Order the Reasoning Loop',
          items: ['Generate plan', 'Validate plan', 'Execute steps', 'Check results'],
          solution: ['Generate plan', 'Validate plan', 'Execute steps', 'Check results']
        }
      },
      {
        title: 'Guarded Generation',
        summary: 'Constrain outputs with validation and repair loops.',
        concept:
          'Use schemas, regex, and validators. If invalid, ask the model to fix or regenerate. Combine with function calls for structured results.',
        keywords: ['schema', 'validation', 'repair'],
        shortAnswer: {
          prompt: 'Describe a retry-and-repair strategy for JSON outputs in your stack.',
          expectedKeywords: ['schema', 'retry', 'validation', 'repair', 'logging'],
          sample: 'Validate against JSON Schema, on failure ask the model to repair with the error message; cap retries and log failures for manual triage.'
        }
      },
      {
        title: 'Tools and Function Calling',
        summary: 'Let LLMs call functions/APIs to fetch facts or take actions.',
        concept:
          'Provide tool specs (names, args) and let the model choose when to call. Validate and execute, then feed results back. This grounds answers and enables actions.',
        keywords: ['function calling', 'tool use', 'grounding'],
        useCases: {
          title: 'Common Tools',
          items: [
            { title: 'Search/Retrieval', desc: 'Answer questions using a knowledge base.' },
            { title: 'Calculators', desc: 'Handle math and units precisely.' },
            { title: 'Internal APIs', desc: 'Create tickets, update CRM, query services.' }
          ]
        },
        quiz: {
          question: 'What is the main benefit of function calling?',
          options: ['Shorter prompts', 'Lower latency', 'External grounding and actions', 'Fewer tokens in context'],
          answerIndex: 2,
          hint: 'Think facts and actions beyond the model weights.'
        }
      },
      {
        title: 'Embeddings 101',
        summary: 'Represent text as vectors to compare meaning.',
        concept:
          'Embeddings map text to vectors so similar meanings are close in vector space. Use them for search, clustering, deduplication, and recommendations.',
        keywords: ['vectors', 'semantic similarity', 'cosine'],
        terms: {
          title: 'Embedding Concepts',
          items: [
            { term: 'Cosine Similarity', def: 'Angle-based similarity; scale-invariant.' },
            { term: 'Dimensionality', def: 'Length of vectors; affects cost and performance.' },
            { term: 'Drift', def: 'Meaning shifts over time; re-embed when needed.' }
          ]
        },
        quiz: {
          question: 'Why are embeddings useful for search?',
          options: ['Exact string match', 'Semantic matching beyond keywords', 'Lower storage cost', 'They remove bias entirely'],
          answerIndex: 1,
          hint: 'Think meaning, not just matching words.'
        }
      },
      {
        title: 'Chunking and Indexing',
        summary: 'Split content into retrievable pieces with metadata.',
        concept:
          'Good chunks preserve coherence and fit the context window. Store text, embeddings, and metadata (source, section, permissions) in a vector index.',
        keywords: ['chunking', 'indexing', 'metadata'],
        callouts: [
          { type: 'tip', title: 'Chunk Heuristics', body: 'Split by headings/sections with overlap; avoid arbitrary fixed sizes only.' },
          { type: 'info', title: 'Metadata Matters', body: 'Keep source URL, title, and section to cite evidence.' }
        ]
      },
      {
        title: 'Retrieval-Augmented Generation (RAG)',
        summary: 'Ground answers by retrieving relevant context for the prompt.',
        concept:
          'RAG retrieves top-k relevant chunks, then prompts the model with both the user query and retrieved evidence. Cite sources and avoid answering beyond the evidence.',
        keywords: ['RAG', 'retrieval', 'grounding'],
        order: {
          title: 'Order the RAG Pipeline',
          items: ['Embed docs', 'Index vectors', 'Retrieve top-k', 'Construct prompt', 'Generate answer', 'Cite sources'],
          solution: ['Embed docs', 'Index vectors', 'Retrieve top-k', 'Construct prompt', 'Generate answer', 'Cite sources']
        }
      },
      {
        title: 'RAG Evaluation',
        summary: 'Measure retrieval quality and grounded answers.',
        concept:
          'Evaluate recall@k, precision@k, and answer faithfulness. Use gold labels or LLM-as-judge carefully. Track coverage and hallucination rate.',
        keywords: ['recall@k', 'faithfulness', 'LLM-as-judge'],
        shortAnswer: {
          prompt: 'Design a minimal eval suite for your RAG system.',
          expectedKeywords: ['gold set', 'retrieval metrics', 'faithfulness', 'automation'],
          sample: 'Create a small gold set of Q/A with citations; compute recall@k for retrieval; ask an independent model to rate faithfulness with strict instructions; spot-check edge cases.'
        }
      },
      {
        title: 'When to Fine-tune',
        summary: 'Decide between prompting, RAG, and fine-tuning.',
        concept:
          'Prefer prompting or RAG first. Fine-tune when style/format is stable and not easily taught with examples, or when you need domain-specific reasoning with limited context.',
        keywords: ['trade-offs', 'cost'],
        sorter: {
          prompt: 'Drag use cases into Best for RAG vs Best for Fine-tune.',
          items: ['Q&A over docs', 'Strict style rewriting', 'Private jargon expansion', 'Long-form summarization', 'Form filling from short notes'],
          solution: {
            'Best for RAG': ['Q&A over docs'],
            'Best for Fine-tune': ['Strict style rewriting', 'Private jargon expansion', 'Form filling from short notes', 'Long-form summarization']
          }
        }
      },
      {
        title: 'Adapters: LoRA/PEFT',
        summary: 'Adapt models efficiently with low-rank updates.',
        concept:
          'Parameter-efficient fine-tuning (PEFT) injects small trainable layers (e.g., LoRA) while freezing most weights, enabling fast, cheap adaptation.',
        keywords: ['LoRA', 'PEFT', 'adapters'],
        terms: {
          title: 'Adapter Concepts',
          items: [
            { term: 'LoRA Rank', def: 'Capacity of low-rank update; too high risks overfit.' },
            { term: 'Base vs Adapter', def: 'Base is frozen; adapter layers are trained.' },
            { term: 'Merge', def: 'Optionally fold adapters into base for inference.' }
          ]
        }
      },
      {
        title: 'Data Prep for Tuning',
        summary: 'Curate, clean, and structure high-signal examples.',
        concept:
          'High-quality datasets beat more data. Remove leakage, deduplicate, enforce formatting, and align to your exact outputs. Consider synthetic data with careful validation.',
        keywords: ['data quality', 'leakage', 'synthetic data'],
        callouts: [
          { type: 'warning', title: 'Privacy', body: 'Never include secrets or personal data in training sets.' }
        ],
        quiz: {
          question: 'Which matters most for fine-tuning quality?',
          options: ['Dataset size', 'Dataset quality and alignment', 'Number of GPUs', 'Longest context windows'],
          answerIndex: 1,
          hint: 'Garbage in, garbage out.'
        }
      },
      {
        title: 'Evaluation Basics',
        summary: 'Test for correctness, safety, and regressions.',
        concept:
          'Combine unit-style tests (deterministic checks), sample-based reviews, and automated rubric grading. Add adversarial prompts and jailbreak tests to catch regressions.',
        keywords: ['rubric', 'regression', 'adversarial'],
        flashcards: {
          title: 'Eval Types',
          cards: [
            { front: 'Golden Tests', back: 'Exact-match or strict rubric on curated cases.' },
            { front: 'Adversarial', back: 'Stress tests for safety and robustness.' },
            { front: 'Canary', back: 'Small set run on each deploy to catch drift.' }
          ]
        }
      },
      {
        title: 'Safety & Policy',
        summary: 'Prevent harmful, biased, or disallowed outputs.',
        concept:
          'Layer safety: input filters, system policies, content classifiers, refusal patterns, and escalation paths. Continuously monitor and re-test.',
        keywords: ['content filtering', 'policy', 'escalation'],
        sorter: {
          prompt: 'Separate Controls vs Risks.',
          items: ['Prompt injection', 'Refusal policy', 'PHI redaction', 'Jailbreaks', 'Rate limits', 'Toxic language'],
          solution: {
            Controls: ['Refusal policy', 'PHI redaction', 'Rate limits'],
            Risks: ['Prompt injection', 'Jailbreaks', 'Toxic language']
          }
        }
      },
      {
        title: 'Telemetry for LLMs',
        summary: 'Log prompts, outputs, and feedback securely.',
        concept:
          'Capture traces with redaction, tag experiments, and record user feedback. Use this to prioritize fixes, improve prompts, and retrain adapters.',
        keywords: ['observability', 'traces', 'feedback'],
        shortAnswer: {
          prompt: 'Outline a minimal telemetry schema for your app.',
          expectedKeywords: ['trace id', 'prompt', 'response', 'latency', 'cost', 'user feedback'],
          sample: 'Store trace_id, model, prompt hash, input/outputs (redacted), tool calls, latency, token counts, cost, user rating, and version tags.'
        }
      },
      {
        title: 'Cost and Latency',
        summary: 'Optimize token usage and response times.',
        concept:
          'Reduce costs with smaller models, tighter prompts, response streaming, caching, and retrieval filtering. Batch where possible and parallelize tools.',
        keywords: ['caching', 'streaming', 'prompt budget'],
        callouts: [
          { type: 'tip', title: 'Prompt Budgeting', body: 'Set a max token budget per request and enforce it.' }
        ],
        quiz: {
          question: 'Which strategy most directly cuts token cost?',
          options: ['Higher rate limits', 'Shorter prompts and smaller models', 'GPU autoscaling', 'More retries'],
          answerIndex: 1,
          hint: 'You pay per token and model class.'
        }
      },
      {
        title: 'Caching and Memory',
        summary: 'Reuse results and build session memory safely.',
        concept:
          'Cache deterministic steps (rerankers, retrieval) and use semantic caches for similar prompts. For user sessions, store structured facts with consent and retrieval, not raw transcripts.',
        keywords: ['cache', 'semantic cache', 'session memory']
      },
      {
        title: 'Multi-model Orchestration',
        summary: 'Route tasks to the best model and fallback safely.',
        concept:
          'Use a router over capability, cost, and latency. Add fallbacks on failure and guard invalid outputs. Evaluate routing decisions continuously.',
        keywords: ['routing', 'fallbacks', 'guardrails'],
        flow: {
          title: 'Routing Steps',
          steps: ['Classify task', 'Choose model', 'Validate output', 'Fallback if needed']
        }
      }
    ]
  },
  {
    slug: 'data-mining',
    title: 'Data Mining',
    description: 'Master core concepts through interactive visualizations and hands-on practice.',
    tags: ['Data Mining', 'Data Types', 'Attributes', 'Preprocessing', 'Similarity', 'Distance', 'Dimensionality', 'Correlation'],
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
        slug: 'data-prep',
        title: 'Module 2: Data Preparation',
        description: 'Cleaning, transforming, and preparing data before mining.',
        lessonIndexes: [3]
      },
      {
        slug: 'similarity-distance',
        title: 'Module 3: Similarity & Distance',
        description: 'Compare vectors and measure (dis)similarity for mining tasks.',
        lessonIndexes: [4, 5]
      },
      {
        slug: 'dimensionality-correlation',
        title: 'Module 4: Dimensionality & Correlation',
        description: 'Reduce dimensions and understand relationships among variables.',
        lessonIndexes: [6, 7]
      },
      {
        slug: 'case-study',
        title: 'Module 5: Case Study',
        description: 'Apply the pipeline end-to-end for churn.',
        lessonIndexes: [8]
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
        },
        order: {
          title: 'Order the CRISP-DM Phases',
          items: [
            'Data Preparation',
            'Business Understanding',
            'Modeling',
            'Deployment',
            'Evaluation',
            'Data Understanding'
          ],
          solution: [
            'Business Understanding',
            'Data Understanding',
            'Data Preparation',
            'Modeling',
            'Evaluation',
            'Deployment'
          ]
        },
        flashcards: {
          title: 'Core Terms Flashcards',
          cards: [
            { front: 'Data Mining', back: 'Discovering useful, non-trivial patterns from data' },
            { front: 'KDD', back: 'Knowledge Discovery in Databases (end-to-end process)' },
            { front: 'CRISP-DM', back: 'Cross-Industry Standard Process for Data Mining lifecycle' },
            { front: 'Predictive', back: 'Tasks that predict labels/values (classification/regression)' },
            { front: 'Descriptive', back: 'Tasks that summarize structure (association/clustering)' }
          ]
        }
      },
      {
        title: 'Types of Data',
        summary: 'Understanding the different forms data can take and their characteristics.',
        concept:
          'Data comes in various types: structured (databases, spreadsheets), semi-structured (XML, JSON), and unstructured (text, images, videos). By format: quantitative (numeric measurements) vs qualitative (categorical descriptions). By scale: nominal (categories), ordinal (ranked), interval (differences matter), ratio (true zero point). Understanding data types is crucial for choosing appropriate mining techniques.',
        keywords: ['structured', 'semi-structured', 'unstructured', 'quantitative', 'qualitative', 'nominal', 'ordinal', 'interval', 'ratio'],
        exercise:
          'Classify these data examples: customer age (ratio), movie ratings (ordinal), product categories (nominal), temperature readings (interval), social media posts (unstructured).',
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
            { term: 'Discretization', def: 'Converting continuous features to discrete categories' }
          ]
        },
        useCases: {
          title: 'Preprocessing in Different Domains',
          items: [
            { title: 'Finance', desc: 'Handling missing transaction data, normalizing amounts' },
            { title: 'Healthcare', desc: 'Cleaning patient records, handling outliers in measurements' },
            { title: 'E-commerce', desc: 'Merging customer data, encoding product categories' },
            { title: 'Social Media', desc: 'Filtering spam, normalizing text features' }
          ]
        },
        shortAnswer: {
          prompt: 'You have a customer dataset with missing age, skewed income, and categorical city fields. Outline a safe preprocessing plan.',
          expectedKeywords: ['imputation', 'median', 'scaling', 'standardization', 'one-hot', 'outliers', 'train/validation split'],
          sample: 'Impute age (median), standardize or log-transform skewed income, one-hot encode city, treat outliers (winsorize/clip), avoid leakage by fitting scalers on train only; finalize with a train/validation split.'
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
        useCases: {
          title: 'Similarity in Applications',
          items: [
            { title: 'Recommendation Systems', desc: 'Finding similar users/items using cosine similarity' },
            { title: 'Document Analysis', desc: 'Comparing text documents with Jaccard coefficient' },
            { title: 'Customer Segmentation', desc: 'Grouping similar customers using distance measures' },
            { title: 'Image Recognition', desc: 'Finding similar images using feature vector comparison' }
          ]
        },
        sorter: {
          prompt: 'Match similarity measures to their best use cases.',
          items: [
            'Cosine similarity',
            'Jaccard coefficient',
            'Pearson correlation',
            'Euclidean distance',
            'Manhattan distance'
          ],
          solution: {
            'Text/Document Analysis': [
              'Cosine similarity',
              'Jaccard coefficient'
            ],
            'Linear Relationships': [
              'Pearson correlation'
            ],
            'Geometric Distance': [
              'Euclidean distance',
              'Manhattan distance'
            ]
          }
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
      }
    ]
  },
  {
    slug: 'physics-basics',
    title: 'Physics Basics',
    description: 'Core physics concepts made bite-size with quick checks.',
    tags: ['Kinematics', 'Forces', 'Energy', 'Momentum', 'Waves', 'Electricity'],
    color: '#f4a261',
    theme: 'science',
    modules: [
      { slug: 'motion-forces', title: 'Module 1: Motion & Forces', description: 'Kinematics, Newton’s laws, and FBDs.', lessonIndexes: [0, 1, 2, 3] },
      { slug: 'energy-work', title: 'Module 2: Energy & Work', description: 'Work, energy, power, conservation.', lessonIndexes: [4, 5, 6] },
      { slug: 'momentum-collisions', title: 'Module 3: Momentum & Collisions', description: 'Momentum, impulse, elastic vs inelastic.', lessonIndexes: [7, 8, 9] },
      { slug: 'waves-sound', title: 'Module 4: Waves & Sound', description: 'Wave properties, sound, interference.', lessonIndexes: [10, 11, 12] },
      { slug: 'electricity-basics', title: 'Module 5: Electricity & Circuits', description: 'Charge, fields, circuits, Ohm’s law.', lessonIndexes: [13, 14, 15] }
    ],
    lessons: [
      {
        title: 'Kinematics: Speed, Velocity, Acceleration',
        summary: 'Describe motion with rates of change and direction.',
        concept:
          'Speed is distance per time; velocity adds direction; acceleration is change in velocity per time. Constant acceleration equations connect displacement, velocity, acceleration, and time.',
        keywords: ['speed', 'velocity', 'acceleration'],
        exercise:
          'A car goes from 10 m/s to 20 m/s in 5 s. What is its average acceleration?'
      },
      {
        title: 'Graphs of Motion',
        summary: 'Interpret position–time and velocity–time graphs.',
        concept:
          'The slope of a position–time graph gives velocity; the slope of a velocity–time graph gives acceleration; area under velocity–time gives displacement.',
        keywords: ['slope', 'area', 'displacement'],
        quiz: {
          question: 'What does the area under a velocity–time graph represent?',
          options: ['Velocity', 'Acceleration', 'Displacement', 'Jerk'],
          answerIndex: 2,
          hint: 'Integrate velocity over time.'
        }
      },
      {
        title: 'Newton’s Laws (I & II)',
        summary: 'Inertia and F = ma relate forces to motion.',
        concept:
          'Objects maintain their state of motion unless net force acts (1st law). Net force equals mass times acceleration (2nd law). Identify forces, sum vectors, and relate to acceleration.',
        keywords: ['inertia', 'net force', 'F = ma'],
        shortAnswer: {
          prompt: 'A 2 kg box accelerates at 3 m/s². What net force acts? Explain briefly.',
          expectedKeywords: ['F=ma', '6 N', 'direction'],
          sample: 'F = ma = 6 N in the direction of acceleration.'
        }
      },
      {
        title: 'Free-Body Diagrams (FBDs)',
        summary: 'Draw forces to reason about motion.',
        concept:
          'Represent objects as points with force arrows (weight, normal, tension, friction). Sum components on each axis to apply Newton’s 2nd law.',
        keywords: ['weight', 'normal', 'friction'],
        exercise:
          'Sketch FBDs for a block on a rough horizontal surface and on an incline, labeling forces.'
      },
      {
        title: 'Work and Energy',
        summary: 'Relate force and displacement to energy changes.',
        concept:
          'Work W = F d cosθ. Kinetic energy KE = ½mv²; gravitational potential PE = mgh. Work–Energy Theorem: Net work changes kinetic energy.',
        keywords: ['work', 'kinetic', 'potential'],
        quiz: {
          question: 'Doubling speed changes KE by…',
          options: ['2×', '3×', '4×', '½×'],
          answerIndex: 2,
          hint: 'KE ∝ v².'
        }
      },
      {
        title: 'Energy Conservation',
        summary: 'Track energy forms in closed systems.',
        concept:
          'Total mechanical energy stays constant without non-conservative forces. Convert between KE and PE; account for losses (heat, sound) if present.',
        keywords: ['conservation', 'mechanical energy'],
        flow: { title: 'Solve Energy Problems', steps: ['Identify energy forms', 'Write conservation equation', 'Solve for unknowns', 'Check units'] }
      },
      {
        title: 'Power',
        summary: 'Rate of doing work or energy transfer.',
        concept:
          'Power P = W/t = Fv for constant speed. Units: watt (J/s). Higher power means faster energy transfer.',
        keywords: ['power', 'Watt'],
        quiz: {
          question: 'A motor does 600 J in 3 s. Power?',
          options: ['100 W', '200 W', '300 W', '600 W'],
          answerIndex: 1,
          hint: 'Divide work by time.'
        }
      },
      {
        title: 'Momentum',
        summary: 'Mass in motion with conservation in isolated systems.',
        concept:
          'Momentum p = mv is conserved when net external impulse is zero. Impulse J = FΔt changes momentum: J = Δp.',
        keywords: ['momentum', 'impulse', 'conservation'],
        quiz: {
          question: 'Which quantity is always conserved in all collisions (isolated system)?',
          options: ['Kinetic energy', 'Momentum', 'Speed', 'Potential energy'],
          answerIndex: 1,
          hint: 'Energy conservation depends on collision type.'
        }
      },
      {
        title: 'Elastic vs Inelastic Collisions',
        summary: 'Compare energy behavior while momentum stays conserved.',
        concept:
          'Elastic collisions conserve kinetic energy; inelastic do not (objects may stick). Momentum is conserved in both for isolated systems.',
        keywords: ['elastic', 'inelastic'],
        categorize: {
          title: 'Classify Collision Traits',
          categories: ['Elastic', 'Inelastic'],
          items: ['Kinetic energy conserved', 'Objects stick', 'Momentum conserved', 'Some KE becomes heat/sound', 'Perfect bounce'],
          solution: { Elastic: ['Kinetic energy conserved', 'Momentum conserved', 'Perfect bounce'], Inelastic: ['Objects stick', 'Some KE becomes heat/sound'] }
        }
      },
      {
        title: 'Impulse–Momentum Theorem',
        summary: 'Force over time changes momentum.',
        concept:
          'A larger contact time reduces peak force for the same Δp. Safety features (airbags) increase Δt to lower forces.',
        keywords: ['impulse', 'Δp', 'force–time'],
        shortAnswer: { prompt: 'Explain how crumple zones reduce injury using impulse.', expectedKeywords: ['increase time', 'reduce force', 'same Δp'], sample: 'Crumple zones increase stop time, reducing force for the same momentum change.' }
      },
      {
        title: 'Wave Basics',
        summary: 'Amplitude, wavelength, frequency, and speed.',
        concept:
          'Wave speed v = fλ. Amplitude affects energy, not speed in a given medium. Period T = 1/f. Distinguish transverse vs longitudinal.',
        keywords: ['v=fλ', 'amplitude', 'period'],
        quiz: {
          question: 'If wavelength doubles in same medium, speed constant, frequency…',
          options: ['Doubles', 'Halves', 'Unchanged', 'Zero'],
          answerIndex: 1,
          hint: 'v = fλ.'
        }
      },
      {
        title: 'Sound',
        summary: 'Longitudinal waves, pitch, loudness, Doppler.',
        concept:
          'Sound travels faster in solids than gases. Pitch relates to frequency; loudness to amplitude. Moving sources shift frequency (Doppler effect).',
        keywords: ['longitudinal', 'Doppler'],
        callouts: [ { type: 'info', title: 'No sound in vacuum', body: 'Sound needs a medium to propagate.' } ]
      },
      {
        title: 'Interference',
        summary: 'Constructive vs destructive superposition.',
        concept:
          'When waves overlap, amplitudes add. In phase → constructive; out of phase → destructive. Patterns appear in sound, light, and water waves.',
        keywords: ['superposition', 'phase'],
        categorize: { title: 'Classify Interference', categories: ['Constructive', 'Destructive'], items: ['In phase', 'Out of phase', 'Louder/brighter', 'Quieter/darker'], solution: { Constructive: ['In phase', 'Louder/brighter'], Destructive: ['Out of phase', 'Quieter/darker'] } }
      },
      {
        title: 'Electric Charge and Field',
        summary: 'Like charges repel; fields describe forces.',
        concept:
          'Charge is conserved and quantized. Electric fields point from + to −. Field lines visualize direction and relative strength.',
        keywords: ['charge', 'field'],
        terms: { title: 'Electrostatics Terms', items: [ { term: 'Coulomb', def: 'SI unit of electric charge' }, { term: 'Field Line', def: 'Tangent gives force direction on + test charge' }, { term: 'Conductor', def: 'Material with free charges' } ] }
      },
      {
        title: 'Current, Voltage, Resistance',
        summary: 'Ohm’s law relates the trio: V = IR.',
        concept:
          'Voltage is potential difference, current is charge flow, resistance opposes current. Ohm’s law connects them for ohmic materials.',
        keywords: ['V=IR', 'current', 'resistance'],
        quiz: { question: 'If V doubles and R fixed, I…', options: ['Halves', 'Doubles', 'Unchanged', 'Zero'], answerIndex: 1, hint: 'V = IR.' }
      },
      {
        title: 'Series vs Parallel Circuits',
        summary: 'Compare current, voltage, and equivalent resistance.',
        concept:
          'In series: same current, voltages add, equivalent resistance increases. In parallel: same voltage, currents add, equivalent resistance decreases.',
        keywords: ['series', 'parallel'],
        categorize: { title: 'Classify Circuit Traits', categories: ['Series', 'Parallel'], items: ['Same current', 'Same voltage', 'Resistances add', 'Currents add', 'Req decreases'], solution: { Series: ['Same current', 'Resistances add'], Parallel: ['Same voltage', 'Currents add', 'Req decreases'] } }
      }
    ]
  },
  {
    slug: 'biology-basics',
    title: 'Biology Basics',
    description: 'Cells to ecosystems in short, interactive lessons.',
    tags: ['Cells', 'Genetics', 'Metabolism', 'Systems', 'Ecology', 'Evolution'],
    color: '#2a9d8f',
    theme: 'science',
    modules: [
      { slug: 'cells-organelles', title: 'Module 1: Cells & Organelles', description: 'Cell theory, types, organelles, membranes.', lessonIndexes: [0, 1, 2, 3] },
      { slug: 'genetics', title: 'Module 2: Genetics & Inheritance', description: 'DNA, gene expression, Mendelian patterns.', lessonIndexes: [4, 5, 6, 7] },
      { slug: 'energy-metabolism', title: 'Module 3: Energy & Metabolism', description: 'Photosynthesis, respiration, enzymes, pathways.', lessonIndexes: [8, 9, 10, 11] },
      { slug: 'homeostasis-systems', title: 'Module 4: Homeostasis & Systems', description: 'Feedback, systems, immune basics.', lessonIndexes: [12, 13, 14] },
      { slug: 'ecology-evolution', title: 'Module 5: Ecology & Evolution', description: 'Populations, selection, and change over time.', lessonIndexes: [15] }
    ],
    lessons: [
      {
        title: 'Cell Theory',
        summary: 'Cells are the basic unit of life.',
        concept:
          'All living things are made of cells; cells come from pre-existing cells; cells are the basic unit of structure and function.',
        keywords: ['cell', 'life'],
        quiz: { question: 'Which is NOT part of cell theory?', options: ['All organisms are made of cells', 'Cells arise from non-living matter', 'Cells are the basic unit of life', 'New cells come from existing cells'], answerIndex: 1, hint: 'Think about spontaneous generation.' }
      },
      {
        title: 'Prokaryotic vs Eukaryotic',
        summary: 'Compare cell types and features.',
        concept:
          'Prokaryotes lack a nucleus and membrane-bound organelles; eukaryotes have them. Size, complexity, and reproduction differ.',
        keywords: ['nucleus', 'organelles'],
        categorize: { title: 'Classify Cell Traits', categories: ['Prokaryotic', 'Eukaryotic'], items: ['Nucleus present', 'Smaller size', 'Membrane-bound organelles', 'Often unicellular', 'Compartmentalized'], solution: { Prokaryotic: ['Smaller size', 'Often unicellular'], Eukaryotic: ['Nucleus present', 'Membrane-bound organelles', 'Compartmentalized'] } }
      },
      {
        title: 'Organelles and Functions',
        summary: 'Key cellular structures and roles.',
        concept:
          'Nucleus stores DNA; mitochondria make ATP; ribosomes build proteins; ER/Golgi process and ship; lysosomes recycle; chloroplasts photosynthesize in plants.',
        keywords: ['mitochondria', 'ribosome', 'chloroplast'],
        flashcards: { title: 'Organelle → Function', cards: [ { front: 'Mitochondrion', back: 'ATP production' }, { front: 'Ribosome', back: 'Protein synthesis' }, { front: 'Chloroplast', back: 'Photosynthesis (plants)' } ] }
      },
      {
        title: 'Membranes and Transport',
        summary: 'Diffusion, osmosis, and active transport.',
        concept:
          'Membranes are selectively permeable. Diffusion moves down gradients; osmosis is water diffusion; active transport uses energy to move against gradients.',
        keywords: ['diffusion', 'osmosis', 'active transport'],
        flow: { title: 'Crossing the Membrane', steps: ['Identify gradient', 'Passive or active?', 'Transport mechanism', 'Energy needed?'] }
      },
      {
        title: 'DNA Structure & Replication',
        summary: 'Double helix copying with base pairing.',
        concept:
          'DNA is a double helix with complementary base pairing (A-T, C-G). Replication is semi-conservative using DNA polymerase and primers.',
        keywords: ['double helix', 'base pairing'],
        terms: { title: 'DNA Terms', items: [ { term: 'Nucleotide', def: 'Sugar + phosphate + base' }, { term: 'Polymerase', def: 'Enzyme that synthesizes DNA' }, { term: 'Semi-conservative', def: 'Each new DNA has one old strand' } ] }
      },
      {
        title: 'Gene Expression',
        summary: 'Transcription then translation make proteins.',
        concept:
          'DNA → mRNA (transcription) in the nucleus; mRNA → protein (translation) in ribosomes. The genetic code maps codons to amino acids.',
        keywords: ['transcription', 'translation'],
        order: { title: 'Order the Central Dogma', items: ['DNA', 'Protein', 'mRNA'], solution: ['DNA', 'mRNA', 'Protein'] }
      },
      {
        title: 'Mendelian Inheritance',
        summary: 'Dominant/recessive alleles and segregation.',
        concept:
          'Traits are controlled by alleles; segregation separates allele pairs; independent assortment mixes different genes. Use Punnett squares to predict ratios.',
        keywords: ['allele', 'dominant', 'recessive'],
        quiz: { question: 'Aa × aa: probability of recessive phenotype?', options: ['0%', '25%', '50%', '75%'], answerIndex: 2, hint: 'Punnett square with one dominant and one recessive parent.' }
      },
      {
        title: 'Beyond Mendel',
        summary: 'Incomplete dominance, codominance, polygenic traits.',
        concept:
          'Not all traits are simple dominant/recessive. Incomplete dominance blends; codominance expresses both; polygenic traits involve many genes.',
        keywords: ['incomplete', 'codominance', 'polygenic'],
        callouts: [ { type: 'info', title: 'Environment Matters', body: 'Phenotypes can be influenced by environment as well as genes.' } ]
      },
      {
        title: 'Photosynthesis Overview',
        summary: 'Capture light to make sugars.',
        concept:
          'Chloroplasts use light energy to convert CO₂ and H₂O to glucose and O₂. Light reactions make ATP/NADPH; Calvin cycle fixes carbon.',
        keywords: ['chloroplast', 'Calvin cycle'],
        quiz: { question: 'Photosynthesis occurs in which organelle?', options: ['Mitochondrion', 'Ribosome', 'Chloroplast', 'Golgi'], answerIndex: 2, hint: 'Green pigment chlorophyll.' }
      },
      {
        title: 'Cellular Respiration',
        summary: 'Release energy from glucose to make ATP.',
        concept:
          'Glycolysis → Krebs cycle → Electron transport chain convert glucose to ATP. Oxygen is the final electron acceptor in aerobic respiration.',
        keywords: ['ATP', 'mitochondria'],
        quiz: { question: 'Which stage yields most ATP?', options: ['Glycolysis', 'Krebs', 'ETC', 'Fermentation'], answerIndex: 2, hint: 'Proton gradient drives ATP synthase.' }
      },
      {
        title: 'Enzymes and Rate',
        summary: 'Catalysts lower activation energy.',
        concept:
          'Enzymes bind substrates at active sites and speed reactions without being consumed. Temperature and pH affect activity.',
        keywords: ['activation energy', 'active site'],
        callouts: [ { type: 'tip', title: 'Denaturation', body: 'Extreme temperature or pH can unfold proteins and reduce activity.' } ]
      },
      {
        title: 'Metabolic Pathways',
        summary: 'Catabolic vs anabolic processes.',
        concept:
          'Catabolism breaks molecules to release energy; anabolism builds complex molecules using energy. Pathways are regulated to balance needs.',
        keywords: ['catabolism', 'anabolism'],
        categorize: { title: 'Classify Pathways', categories: ['Catabolism', 'Anabolism'], items: ['Builds proteins', 'Breaks glycogen', 'Energy release', 'Energy input'], solution: { Catabolism: ['Breaks glycogen', 'Energy release'], Anabolism: ['Builds proteins', 'Energy input'] } }
      },
      {
        title: 'Homeostasis',
        summary: 'Maintain internal balance via feedback.',
        concept:
          'Negative feedback reduces deviations (e.g., temperature control); positive feedback amplifies signals (e.g., blood clotting).',
        keywords: ['feedback', 'set point'],
        order: { title: 'Order a Negative Feedback Loop', items: ['Response', 'Sensor detects change', 'Stimulus disturbs', 'Control center acts'], solution: ['Stimulus disturbs', 'Sensor detects change', 'Control center acts', 'Response'] }
      },
      {
        title: 'Body Systems Overview',
        summary: 'Major systems and their roles.',
        concept:
          'Digestive, respiratory, circulatory, nervous, endocrine, immune, and excretory systems coordinate to sustain life. Structure supports function.',
        keywords: ['system', 'function'],
        terms: { title: 'Systems Quick Terms', items: [ { term: 'Homeostasis', def: 'Stable internal conditions' }, { term: 'Hormone', def: 'Chemical messenger' }, { term: 'Neuron', def: 'Nerve cell for signaling' } ] }
      },
      {
        title: 'Immune Basics',
        summary: 'Innate vs adaptive defenses.',
        concept:
          'Innate immunity provides quick, non-specific defense (barriers, inflammation). Adaptive immunity learns and targets specific antigens with memory.',
        keywords: ['innate', 'adaptive'],
        categorize: { title: 'Classify Immune Traits', categories: ['Innate', 'Adaptive'], items: ['Memory', 'Fast response', 'Specific', 'Physical barriers'], solution: { Innate: ['Fast response', 'Physical barriers'], Adaptive: ['Memory', 'Specific'] } }
      },
      {
        title: 'Ecology & Evolution Basics',
        summary: 'Populations change via selection and interactions.',
        concept:
          'Natural selection favors traits that improve fitness in a given environment. Populations interact via predation, competition, and symbiosis.',
        keywords: ['selection', 'population'],
        quiz: { question: 'Which best defines natural selection?', options: ['Random change', 'Inheritance of acquired traits', 'Differential survival and reproduction', 'Goal-driven improvement'], answerIndex: 2, hint: 'Think fitness in an environment.' }
      }
    ]
  },
  {
    slug: 'coding-basics',
    title: 'Coding Basics',
    description: 'Start programming with practical, bite-size lessons and patterns you can apply anywhere.',
    tags: ['Variables', 'Control Flow', 'Functions', 'Data Structures', 'Algorithms', 'Testing'],
    color: '#96ceb4',
    theme: 'coding',
    modules: [
      {
        slug: 'foundations',
        title: 'Module 1: Foundations',
        description: 'Programs, variables, types, expressions, and I/O.',
        lessonIndexes: [0, 1, 2, 3]
      },
      {
        slug: 'control-flow',
        title: 'Module 2: Control Flow',
        description: 'Conditionals, loops, and iteration patterns.',
        lessonIndexes: [4, 5, 6, 7]
      },
      {
        slug: 'functions-scope',
        title: 'Module 3: Functions & Scope',
        description: 'Defining functions, parameters, scope, and recursion.',
        lessonIndexes: [8, 9, 10, 11]
      },
      {
        slug: 'data-structures',
        title: 'Module 4: Data Structures',
        description: 'Arrays/lists, objects/maps, sets, and strings.',
        lessonIndexes: [12, 13, 14, 15]
      },
      {
        slug: 'algorithms-testing',
        title: 'Module 5: Algorithms & Testing',
        description: 'Decomposition, complexity, classic algorithms, and tests.',
        lessonIndexes: [16, 17, 18, 19]
      }
    ],
    lessons: [
      {
        title: 'What Is a Program?',
        summary: 'A set of instructions that a computer executes.',
        concept:
          'Programs read input, transform it, and produce output. Think in steps: state, operations, and flow. Start with small tasks, test often, and iterate.',
        keywords: ['input', 'state', 'output'],
        exercise:
          'Describe a real-world process (making tea) as 5–7 steps a computer could follow.',
        callouts: [
          { type: 'info', title: 'Mental Model', body: 'Computers do exactly what you say, not what you mean.' }
        ],
        quiz: {
          question: 'Which best describes a program?',
          options: ['A diagram', 'A set of executable steps', 'A database', 'A website'],
          answerIndex: 1,
          hint: 'Focus on steps the machine can perform.'
        }
      },
      {
        title: 'Variables and Types',
        summary: 'Names bound to values with defined operations.',
        concept:
          'A variable stores a value. Types (number, string, boolean, etc.) determine valid operations and memory representation. Prefer clear names and minimal scope.',
        keywords: ['variable', 'type', 'assignment'],
        exercise:
          'Create a variable for item price and tax rate; compute total and print it.',
        flashcards: {
          title: 'Type Basics',
          cards: [
            { front: 'Number', back: 'Quantities for arithmetic operations' },
            { front: 'String', back: 'Text data, often immutable' },
            { front: 'Boolean', back: 'True/false values for branching' }
          ]
        }
      },
      {
        title: 'Expressions and Operators',
        summary: 'Build values from other values using operators.',
        concept:
          'Use arithmetic (+, -, *, /), comparison (==, <, >), and logical (&&, ||, !) operators to form expressions. Beware of integer vs floating division and operator precedence.',
        keywords: ['operators', 'precedence', 'boolean'],
        exercise:
          'Evaluate an expression like (5 + 2) * 3 > 10 && 4 % 2 === 0 and explain why.'
      },
      {
        title: 'Input and Output',
        summary: 'Read values and display results cleanly.',
        concept:
          'Most programs take input (user, file, args) and produce output (console, file). Sanitize inputs and format outputs for readability.',
        keywords: ['stdin', 'stdout', 'CLI args'],
        shortAnswer: {
          prompt: 'Outline how your language reads a line of input and prints a formatted message.',
          expectedKeywords: ['read', 'parse', 'format/print'],
          sample: 'Read line, parse number with error handling, print using formatted string.'
        }
      },
      {
        title: 'Conditionals',
        summary: 'Branch execution based on conditions.',
        concept:
          'Use if/else to decide between paths. Keep conditions simple; extract complex logic into helper functions. Beware of truthiness/falsiness differences across languages.',
        keywords: ['if/else', 'branch'],
        quiz: {
          question: 'Which condition checks both must be true?',
          options: ['A || B', 'A && B', '!A', 'A == B == C'],
          answerIndex: 1,
          hint: 'Logical AND.'
        }
      },
      {
        title: 'Loops',
        summary: 'Repeat work with clear exit conditions.',
        concept:
          'Loops (for/while) repeat a block until a condition changes. Avoid infinite loops by updating state or breaking out. Prefer for-each for collections when available.',
        keywords: ['for', 'while', 'break'],
        exercise:
          'Write a loop that sums numbers 1 through 100 and prints the total.'
      },
      {
        title: 'Iteration Patterns',
        summary: 'Map, filter, reduce as common loop shapes.',
        concept:
          'Many tasks fit patterns: map transforms each item; filter keeps some items; reduce folds many values into one. Prefer built-ins where idiomatic.',
        keywords: ['map', 'filter', 'reduce'],
        order: {
          title: 'Order the steps to filter even numbers',
          items: ['Iterate items', 'Check if divisible by 2', 'Keep passing items', 'Return result list'],
          solution: ['Iterate items', 'Check if divisible by 2', 'Keep passing items', 'Return result list']
        }
      },
      {
        title: 'Loop Debugging',
        summary: 'Find and fix off-by-one and exit bugs.',
        concept:
          'Common issues: wrong start/end indices, not updating loop variable, mutating while iterating. Use prints or a debugger to inspect state each iteration.',
        keywords: ['off-by-one', 'debugger'],
        callouts: [
          { type: 'tip', title: 'Binary Search Bug Fix', body: 'Re-check mid update and inclusive/exclusive bounds.' }
        ]
      },
      {
        title: 'Defining Functions',
        summary: 'Bundle steps into reusable units.',
        concept:
          'Functions take inputs (parameters), do work, and return outputs. Keep them small and single-purpose. Name clearly to reveal intent.',
        keywords: ['function', 'parameters', 'return'],
        exercise:
          'Write a function that takes a list of numbers and returns the average.'
      },
      {
        title: 'Parameters and Return Values',
        summary: 'Pass data in and get results out.',
        concept:
          'Use positional or named parameters; set sensible defaults. Return a single value or a small object/tuple for multiple values.',
        keywords: ['defaults', 'tuple/object'],
        quiz: {
          question: 'What is a good reason to use named parameters?',
          options: ['Shorter names', 'Order doesn’t matter and clarity improves', 'Faster execution', 'Avoid functions'],
          answerIndex: 1,
          hint: 'Readability and flexibility.'
        }
      },
      {
        title: 'Scope and Mutability',
        summary: 'Where names live and how values change.',
        concept:
          'Local vs global scope affects visibility and side effects. Prefer limited scope and immutability where practical to reduce bugs.',
        keywords: ['scope', 'immutable'],
        shortAnswer: {
          prompt: 'Explain a bug caused by unintended mutation and how to avoid it.',
          expectedKeywords: ['scope', 'mutation', 'copy/clone'],
          sample: 'Mutated shared list in helper; fix by copying input or returning new value.'
        }
      },
      {
        title: 'Recursion Basics',
        summary: 'Define a solution in terms of itself with a base case.',
        concept:
          'A recursive function calls itself on smaller inputs until a base case. Ensure progress toward base and consider stack depth limits.',
        keywords: ['base case', 'stack'],
        flow: {
          title: 'Recursive Thinking',
          steps: ['Identify base case', 'Reduce problem', 'Call recursively', 'Combine results']
        }
      },
      {
        title: 'Arrays/Lists',
        summary: 'Ordered collections for indexed access.',
        concept:
          'Use lists for ordered data and iteration. Watch out for out-of-bounds and mutation while iterating. Prefer constant-time push/pop at the end when available.',
        keywords: ['index', 'push/pop'],
        quiz: {
          question: 'Accessing an index beyond length typically results in…',
          options: ['Wrap-around', 'Silent success', 'Error or undefined', 'Automatic resize'],
          answerIndex: 2,
          hint: 'Depends on language, but not success.'
        }
      },
      {
        title: 'Objects/Maps/Dictionaries',
        summary: 'Key-value storage for fast lookups.',
        concept:
          'Dictionaries store values by key. Great for counting, grouping, and caches. Beware of missing keys and default values.',
        keywords: ['hash map', 'key', 'value'],
        sorter: {
          prompt: 'Match tasks to best structure',
          items: [
            'Counting word frequencies',
            'Maintaining unique IDs',
            'Preserving insertion order list',
            'Fast membership check'
          ],
          solution: {
            'Dictionary/Map': ['Counting word frequencies'],
            'Set': ['Maintaining unique IDs', 'Fast membership check'],
            'Array/List': ['Preserving insertion order list']
          }
        }
      },
      {
        title: 'Sets and Uniqueness',
        summary: 'Store unique elements and test membership quickly.',
        concept:
          'Sets ensure uniqueness and offer fast membership tests. Useful for de-duplication and intersections/differences.',
        keywords: ['set', 'membership'],
        exercise:
          'Given a list with duplicates, produce a list of unique items and count of removed duplicates.'
      },
      {
        title: 'Strings as Sequences',
        summary: 'Work with text safely and efficiently.',
        concept:
          'Strings behave like sequences of characters. Prefer immutable operations or builders; be mindful of Unicode and casing.',
        keywords: ['string', 'unicode'],
        callouts: [
          { type: 'tip', title: 'Immutability Warning', body: 'Repeated concatenation in tight loops can be slow; use join/builders.' }
        ]
      },
      {
        title: 'Decomposition & Pseudocode',
        summary: 'Break problems into steps and sketch solutions.',
        concept:
          'Describe inputs/outputs, outline steps in plain language, then implement. Start with small examples and expand.',
        keywords: ['pseudocode', 'decomposition'],
        flashcards: {
          title: 'Decomposition Moves',
          cards: [
            { front: 'Extract Function', back: 'Move a coherent block into a function.' },
            { front: 'Define Interface', back: 'Be explicit about inputs/outputs.' },
            { front: 'Progressive Enhancement', back: 'Start simple, then add features.' }
          ]
        }
      },
      {
        title: 'Big-O Intuition',
        summary: 'Reason about how work grows with input size.',
        concept:
          'Constant, linear, log, and quadratic patterns cover most beginner code. Favor linear passes; beware nested loops over large data.',
        keywords: ['O(1)', 'O(n)', 'O(n^2)'],
        order: {
          title: 'Order from fastest to slowest (as n grows)',
          items: ['O(n log n)', 'O(1)', 'O(n^2)', 'O(n)'],
          solution: ['O(1)', 'O(n)', 'O(n log n)', 'O(n^2)']
        }
      },
      {
        title: 'Search & Sort Overview',
        summary: 'Common strategies and when to use them.',
        concept:
          'Linear vs binary search; selection vs insertion vs merge/quick sort. Use library sorts; understand trade-offs to pick the right approach.',
        keywords: ['binary search', 'sorting'],
        quiz: {
          question: 'Binary search requires…',
          options: ['Random access', 'Sorted input', 'Hash tables', 'Linked lists'],
          answerIndex: 1,
          hint: 'It halves the search range each step.'
        }
      },
      {
        title: 'Testing Basics',
        summary: 'Write small checks to prevent regressions.',
        concept:
          'Start with simple unit-style tests for pure functions. Arrange-Act-Assert: set inputs, call the code, check outputs. Automate and run often.',
        keywords: ['unit test', 'assert'],
        shortAnswer: {
          prompt: 'Sketch a test for your average(list) function.',
          expectedKeywords: ['arrange', 'act', 'assert'],
          sample: 'Arrange sample list, act by calling function, assert expected number, include edge case (empty).' 
        }
      }
    ]
  }
]

export function getAreaBySlug(slug) {
  const area = focusAreas.find((a) => a.slug === slug)
  if (!area) return undefined
  return area
}

export function getModule(areaSlug, moduleIndex) {
  const area = getAreaBySlug(areaSlug)
  if (!area || !area.modules) return undefined
  const mod = area.modules[moduleIndex]
  if (!mod) return undefined
  const lessons = (mod.lessonIndexes || []).map((i) => area.lessons[i]).filter(Boolean)
  return { ...mod, lessons }
}
