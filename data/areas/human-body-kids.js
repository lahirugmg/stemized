const area = {
  slug: 'human-body-kids',
  title: 'Human Body & Anatomy (Kids)',
  description: 'Explore your amazing body with fun, simple, interactive lessons.',
  tags: ['Organs', 'Senses', 'Systems', 'Health'],
  color: '#ffb703',
  theme: 'science',
  modules: [
    { slug: 'basics-senses', title: 'Module 1: Body Basics & Senses', description: 'From tiny cells to the five senses.', lessonIndexes: [0, 1, 2] },
    { slug: 'skeleton-muscles', title: 'Module 2: Skeleton & Muscles', description: 'Bones, joints, and how we move.', lessonIndexes: [3, 4, 5] },
    { slug: 'heart-lungs', title: 'Module 3: Heart & Lungs', description: 'Blood, breathing, and pulse.', lessonIndexes: [6, 7, 8] },
    { slug: 'food-digestion', title: 'Module 4: Food & Digestion', description: 'Fueling and using energy.', lessonIndexes: [9, 10, 11] },
    { slug: 'brain-nerves', title: 'Module 5: Brain & Nerves', description: 'Thinking, messages, and rest.', lessonIndexes: [12, 13, 14] },
    { slug: 'healthy-safe', title: 'Module 6: Healthy & Safe', description: 'Daily habits for a strong body.', lessonIndexes: [15, 16, 17] }
  ],
  lessons: [
    {
      title: 'Body Building Blocks',
      summary: 'Your body is built from tiny cells that team up!',
      concept: 'Cells join to form tissues. Tissues build organs. Organs work together in systems to keep you alive and active.',
      keywords: ['cells', 'tissues', 'organs', 'systems'],
      flow: { title: 'From Small to Big', steps: ['Cells', 'Tissues', 'Organs', 'Systems'] },
      order: { title: 'Put the levels in order', items: ['Organs', 'Systems', 'Cells', 'Tissues'], solution: ['Cells', 'Tissues', 'Organs', 'Systems'] },
      flashcards: { title: 'Quick Terms', cards: [ { front: 'Cell', back: 'The smallest living building block' }, { front: 'Organ', back: 'A body part that does a job (heart)' }, { front: 'System', back: 'A team of organs working together' } ] },
      quiz: { question: 'Which is the smallest?', options: ['Organ', 'System', 'Cell', 'Tissue'], answerIndex: 2, hint: 'Start tiny!' }
    },
    {
      title: 'Five Senses',
      summary: 'See, hear, smell, taste, and touch the world.',
      concept: 'Your senses help your brain learn about the world: eyes (sight), ears (hearing), nose (smell), tongue (taste), and skin (touch).',
      keywords: ['sight', 'hearing', 'smell', 'taste', 'touch'],
      categorize: {
        title: 'Match Sense to Organ',
        categories: ['Sight', 'Hearing', 'Smell', 'Taste', 'Touch'],
        items: ['Eyes', 'Ears', 'Nose', 'Tongue', 'Skin'],
        solution: { Sight: ['Eyes'], Hearing: ['Ears'], Smell: ['Nose'], Taste: ['Tongue'], Touch: ['Skin'] }
      },
      quiz: { question: 'Which sense uses your ears?', options: ['Taste', 'Hearing', 'Smell', 'Touch'], answerIndex: 1, hint: 'Listen up!' }
    },
    {
      title: 'Body Map & Directions',
      summary: 'Left, right, front, back—know your body map.',
      concept: 'We use words like left/right and front/back to describe where things are. Your torso holds many organs; your limbs help you move.',
      keywords: ['left/right', 'front/back', 'torso', 'limbs'],
      terms: { title: 'Parts to Know', items: [ { term: 'Skull', def: 'Bone that protects your brain' }, { term: 'Ribs', def: 'Bones that guard your heart and lungs' }, { term: 'Spine', def: 'Backbone that supports you' }, { term: 'Torso', def: 'Chest and belly area' }, { term: 'Limbs', def: 'Arms and legs' } ] },
      flashcards: { title: 'Direction Words', cards: [ { front: 'Left ↔ Right', back: 'Two sides of your body' }, { front: 'Front', back: 'Your face side' }, { front: 'Back', back: 'Your spine side' } ] },
      shortAnswer: { prompt: 'Why is it helpful to know left from right?', expectedKeywords: ['directions', 'safety', 'sports', 'doctor'], sample: 'It helps follow directions, play sports, and tell a doctor where something hurts.' }
    },
    {
      title: 'Skeleton and Bones',
      summary: 'Bones give you shape and protect organs.',
      concept: 'Your skeleton is a sturdy frame. Bones like the skull, ribs, spine, and femur help you stand, move, and stay safe.',
      keywords: ['skeleton', 'bones', 'protect'],
      flashcards: { title: 'Name That Bone', cards: [ { front: 'Skull', back: 'Protects the brain' }, { front: 'Rib cage', back: 'Protects heart and lungs' }, { front: 'Spine', back: 'Holds you up and bends' }, { front: 'Femur', back: 'Thigh bone (long and strong)' } ] },
      quiz: { question: 'Which bone protects your brain?', options: ['Skull', 'Ribs', 'Femur', 'Spine'], answerIndex: 0, hint: 'It’s your head bone.' }
    },
    {
      title: 'Joints and Movement',
      summary: 'Joints let you bend, twist, and reach.',
      concept: 'Different joints move in different ways: hinges (elbow, knee) bend; ball-and-socket (shoulder, hip) swing; pivot (neck) turns.',
      keywords: ['joints', 'hinge', 'ball-and-socket', 'pivot'],
      categorize: { title: 'Sort the Joints', categories: ['Hinge', 'Ball-and-socket', 'Pivot'], items: ['Elbow', 'Knee', 'Shoulder', 'Hip', 'Neck'], solution: { Hinge: ['Elbow', 'Knee'], 'Ball-and-socket': ['Shoulder', 'Hip'], Pivot: ['Neck'] } },
      order: { title: 'How an arm bends (steps)', items: ['Muscle pulls', 'Joint bends', 'Brain sends signal', 'Hand moves'], solution: ['Brain sends signal', 'Muscle pulls', 'Joint bends', 'Hand moves'] }
    },
    {
      title: 'Muscles Work in Pairs',
      summary: 'When one muscle pulls, its partner relaxes.',
      concept: 'Muscles move bones by pulling. Pairs like biceps and triceps work together: one contracts while the other relaxes.',
      keywords: ['muscles', 'pairs', 'contract', 'relax'],
      shortAnswer: { prompt: 'Explain how biceps and triceps move your arm.', expectedKeywords: ['contract', 'relax', 'bend', 'straighten'], sample: 'To bend the arm, biceps contract and triceps relax. To straighten, triceps contract and biceps relax.' },
      quiz: { question: 'Muscles can…', options: ['Push bones', 'Pull bones', 'Melt bones', 'Float bones'], answerIndex: 1, hint: 'They tug like a rope.' }
    },
    {
      title: 'Heart and Blood',
      summary: 'Your heart pumps blood in a loop.',
      concept: 'Blood carries oxygen and nutrients. The heart sends blood to the lungs to pick up oxygen, then to the body to deliver it.',
      keywords: ['heart', 'blood', 'oxygen'],
      flow: { title: 'Blood Journey (simple)', steps: ['Body', 'Right Heart', 'Lungs', 'Left Heart', 'Body'] },
      quiz: { question: 'What do red blood cells carry to your body?', options: ['Oxygen', 'Sand', 'Sugar only', 'Sunlight'], answerIndex: 0, hint: 'We breathe it in.' }
    },
    {
      title: 'Lungs and Breathing',
      summary: 'Inhale oxygen, exhale carbon dioxide.',
      concept: 'Air travels from your nose/mouth down the windpipe into the lungs. Tiny air sacs swap gases: oxygen in, carbon dioxide out.',
      keywords: ['lungs', 'breathing', 'oxygen', 'carbon dioxide'],
      flow: { title: 'Air Path', steps: ['Nose/Mouth', 'Windpipe (Trachea)', 'Lungs', 'Oxygen in / CO₂ out'] },
      shortAnswer: { prompt: 'Why do you breathe faster after running?', expectedKeywords: ['oxygen', 'energy', 'muscles'], sample: 'Muscles need more oxygen for energy, so you breathe faster.' }
    },
    {
      title: 'Exercise and Pulse',
      summary: 'Moving your body makes your heart beat faster.',
      concept: 'Your pulse is your heartbeat. When you move more, your heart pumps faster to deliver oxygen.',
      keywords: ['pulse', 'heartbeat', 'exercise'],
      growth: { title: 'Pulse at Different Activities', bars: [ { label: 'Rest', value: 80, caption: 'bpm' }, { label: 'Walk', value: 100, caption: 'bpm' }, { label: 'Run', value: 130, caption: 'bpm' } ] },
      callouts: [ { type: 'tip', title: 'Find Your Pulse', body: 'Gently place two fingers on your wrist or neck—count beats for 15 seconds and multiply by 4.' } ]
    },
    {
      title: 'Food Groups & Nutrients',
      summary: 'Food is fuel. Different foods help in different ways.',
      concept: 'Eat a rainbow of foods: fruits/veggies for vitamins, grains for energy, protein to build, dairy for bones, and a little healthy fat.',
      keywords: ['nutrition', 'food groups'],
      categorize: {
        title: 'Sort Foods by Group',
        categories: ['Fruits & Veggies', 'Grains', 'Protein', 'Dairy', 'Fats & Oils'],
        items: ['Apple', 'Broccoli', 'Rice', 'Bread', 'Chicken', 'Beans', 'Milk', 'Yogurt', 'Olive oil', 'Nuts'],
        solution: {
          'Fruits & Veggies': ['Apple', 'Broccoli'],
          Grains: ['Rice', 'Bread'],
          Protein: ['Chicken', 'Beans', 'Nuts'],
          Dairy: ['Milk', 'Yogurt'],
          'Fats & Oils': ['Olive oil']
        }
      },
      quiz: { question: 'Which group helps build muscles?', options: ['Grains', 'Protein', 'Dairy', 'Fats & Oils'], answerIndex: 1, hint: 'Think beans, eggs, chicken.' }
    },
    {
      title: 'Digestive Journey',
      summary: 'Follow food from bite to bathroom.',
      concept: 'Digestion breaks food into tiny pieces your body can use. It travels through a long tube called the digestive tract.',
      keywords: ['digestion', 'stomach', 'intestines'],
      order: { title: 'Order the Digestive Path', items: ['Small intestine', 'Mouth', 'Large intestine', 'Esophagus', 'Stomach'], solution: ['Mouth', 'Esophagus', 'Stomach', 'Small intestine', 'Large intestine'] },
      flow: { title: 'Food’s Path', steps: ['Mouth', 'Esophagus', 'Stomach', 'Small intestine', 'Large intestine'] }
    },
    {
      title: 'Teeth & Healthy Eating',
      summary: 'Strong teeth and smart choices help your body.',
      concept: 'Brush twice a day, drink water, and choose crunchy fruits and veggies. Save sweets for sometimes.',
      keywords: ['teeth', 'healthy eating'],
      callouts: [
        { type: 'tip', title: 'Brush 2x', body: 'Brush morning and night for 2 minutes.' },
        { type: 'info', title: 'Water Winner', body: 'Water helps your body and protects teeth.' },
        { type: 'warning', title: 'Sugar Sneaks', body: 'Sticky sweets can cause cavities—rinse and brush!' }
      ],
      shortAnswer: { prompt: 'Describe a balanced plate for lunch.', expectedKeywords: ['fruit', 'vegetable', 'protein', 'grain', 'water'], sample: 'Half fruits/veggies, some grains (rice/bread), some protein (beans/chicken), and water.' }
    },
    {
      title: 'Brain Basics',
      summary: 'Your brain is the boss of your body.',
      concept: 'The cerebrum helps you think and feel, the cerebellum helps you balance and move smoothly, and the brainstem controls breathing and heartbeat.',
      keywords: ['brain', 'cerebrum', 'cerebellum', 'brainstem'],
      flashcards: { title: 'Brain Parts', cards: [ { front: 'Cerebrum', back: 'Thinking, memory, feelings' }, { front: 'Cerebellum', back: 'Balance and coordination' }, { front: 'Brainstem', back: 'Breathing and heartbeat' } ] },
      quiz: { question: 'Which part helps you balance?', options: ['Cerebrum', 'Cerebellum', 'Brainstem', 'Skull'], answerIndex: 1, hint: 'Little brain at the back.' }
    },
    {
      title: 'Nerves Carry Messages',
      summary: 'Fast messages travel between your body and brain.',
      concept: 'Nerves send signals to your brain (feel, see, hear) and back to your muscles (move). Spinal cord is the main highway.',
      keywords: ['nerves', 'signals', 'spinal cord'],
      flow: { title: 'Touch to Move', steps: ['Touch hand', 'Nerves to spinal cord', 'Brain figures it out', 'Nerves to muscles', 'Hand moves'] },
      quiz: { question: 'Nerves are like…', options: ['Roads for messages', 'Bones for strength', 'Food for energy', 'Air for breathing'], answerIndex: 0, hint: 'They carry signals.' }
    },
    {
      title: 'Sleep and Rest',
      summary: 'Sleep helps your brain and body recharge.',
      concept: 'Sleep strengthens memory, helps you grow, and keeps you in a good mood. Kids usually need 9–12 hours depending on age.',
      keywords: ['sleep', 'rest', 'memory'],
      callouts: [ { type: 'tip', title: 'Bedtime Routine', body: 'Same time, quiet reading, and dim lights help you fall asleep.' }, { type: 'info', title: 'Screens', body: 'Turn off screens 1 hour before bed.' } ],
      shortAnswer: { prompt: 'Name two things that help you sleep well.', expectedKeywords: ['routine', 'dark', 'quiet', 'no screens', 'cool room'], sample: 'A calm routine and turning off screens early.' }
    },
    {
      title: 'Hygiene Habits',
      summary: 'Simple habits keep you clean and healthy.',
      concept: 'Wash hands, brush teeth, bathe, and change clothes. Cover coughs and keep fingers out of your face.',
      keywords: ['hygiene', 'habits'],
      sorter: { prompt: 'Sort habits into Healthy or Risky', items: ['Wash hands', 'Brush teeth', 'Sleep enough', 'Share water bottles', 'Cover cough', 'Eat lots of candy'], solution: { Healthy: ['Wash hands', 'Brush teeth', 'Sleep enough', 'Cover cough'], Risky: ['Share water bottles', 'Eat lots of candy'] } },
      quiz: { question: 'When should you wash hands?', options: ['After playing with pets', 'Before eating', 'After bathroom', 'All of these'], answerIndex: 3, hint: 'Many times each day!' }
    },
    {
      title: 'Germs and Staying Well',
      summary: 'Tiny germs can make us sick, but we can fight back.',
      concept: 'Germs are tiny living things. Soap and water wash them away. Vaccines train your body to recognize bad germs.',
      keywords: ['germs', 'soap', 'vaccines'],
      terms: { title: 'Staying Well', items: [ { term: 'Germ', def: 'Tiny bug that can cause sickness' }, { term: 'Vaccine', def: 'A safe training for your immune system' }, { term: 'Soap', def: 'Helps remove germs when you wash' } ] },
      order: { title: 'Handwashing Steps', items: ['Rinse', 'Dry', 'Scrub 20 seconds', 'Wet hands', 'Add soap'], solution: ['Wet hands', 'Add soap', 'Scrub 20 seconds', 'Rinse', 'Dry'] },
      quiz: { question: 'Handwashing helps remove…', options: ['Homework', 'Germs', 'Oxygen', 'Sunshine'], answerIndex: 1, hint: 'Use soap and water.' }
    },
    {
      title: 'Safety & First Aid Basics',
      summary: 'Know when to help yourself and when to get an adult.',
      concept: 'Small hurts need cleaning and care; big problems need an adult right away. Stay calm and safe.',
      keywords: ['safety', 'first aid', 'help'],
      categorize: { title: 'Ask for Help or Self-care?', categories: ['Call an adult', 'Self-care'], items: ['Big cut with bleeding', 'Small scrape', 'Fire or smoke', 'Minor burn (cool water)', 'Lost in a store'], solution: { 'Call an adult': ['Big cut with bleeding', 'Fire or smoke', 'Lost in a store'], 'Self-care': ['Small scrape', 'Minor burn (cool water)'] } },
      shortAnswer: { prompt: 'What is one rule that keeps you safe at home?', expectedKeywords: ['ask an adult', 'don’t touch', 'hot', 'sharp', 'emergency'], sample: 'Ask an adult before using hot or sharp things.' }
    }
  ]
}

export default area

