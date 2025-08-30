const area = {
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
}

export default area
