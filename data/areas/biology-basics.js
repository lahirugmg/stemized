const area = {
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
}

export default area
