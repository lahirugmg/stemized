const area = {
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
        expectedKeywords: ['recall@k', 'precision@k', 'faithfulness', 'gold labels', 'LLM-as-judge']
      }
    },
    {
      title: 'Adapters and Fine-tuning',
      summary: 'When to tune vs prompt vs retrieve.',
      concept:
        'Tune for style or structured outputs when prompts hit limits. Prefer adapters (LoRA) for cost/latency/ops. Keep evals to avoid regressions and drift.',
      keywords: ['LoRA', 'fine-tuning', 'drift']
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
}

export default area
