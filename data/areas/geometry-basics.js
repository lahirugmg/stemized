const area = {
  slug: 'geometry-basics',
  title: 'Geometry & Measurement',
  description: 'Build intuition for shapes, measurement, area, perimeter, angles, volume, coordinate plane, and transformations.',
  tags: ['Geometry', 'Measurement', 'Angles'],
  color: '#3b82f6',
  theme: 'math',
  modules: [
    { slug: 'basic-geometry-measurement', title: 'Module 1: Basic Geometry & Measurement', description: 'Core measurement concepts and 2D figures.', lessonIndexes: [0,1,2,3,4,5,6,7,8,9,10,11] },
    { slug: 'relationships-transform', title: 'Module 2: Relationships & Transformations', description: 'Angles, scale, triangle constraints, and transformations.', lessonIndexes: [12,13,14] }
  ],
  lessons: [
    {
      title: 'Intro to Area and Perimeter',
      summary: 'Difference between distance around a shape and space it covers.',
      concept: 'Perimeter measures boundary length; area measures the 2D space inside. Units: perimeter in linear units, area in square units.',
      keywords: ['perimeter', 'area', 'units'],
      exercise: 'Find area and perimeter of a 5 by 3 rectangle.',
      solution: 'Perimeter = 2(5+3)=16 units; Area = 5×3=15 square units.',
      quiz: { question: 'Perimeter of 4x6 rectangle?', options:['24','20','10','12'], answerIndex:1, hint:'Add all sides.' }
    },
    {
      title: 'Intro to Mass and Volume',
      summary: 'Distinguish weight vs. space taken up.',
      concept: 'Mass measures amount of matter (grams, kilograms). Volume measures 3D space (cubic units, liters).',
      keywords: ['mass','volume','units'],
      exercise: 'Name units: (a) liquid in bottle (b) weight of apple.',
      solution: '(a) milliliters or liters (b) grams.',
      quiz: { question: 'Which measures volume?', options:['kg','mL','g','N'], answerIndex:1, hint:'Liquid measure.' }
    },
    {
      title: 'Measuring Angles',
      summary: 'Use degrees to quantify rotation.',
      concept: 'Angles measured with protractor in degrees; right = 90°, straight = 180°, full turn = 360°.',
      keywords: ['angle','degree','protractor'],
      exercise: 'Classify 35°, 95°, 180°.',
      solution: '35° acute, 95° obtuse, 180° straight.'
    },
    {
      title: 'Plane Figures',
      summary: 'Common 2D shapes and properties.',
      concept: 'Polygons have straight sides. Triangles classified by sides (equilateral, isosceles, scalene) and angles (acute, right, obtuse).',
      keywords: ['polygon','triangle','quadrilateral'],
      exercise: 'Name a quadrilateral with 1 pair of parallel sides.',
      solution: 'Trapezoid.'
    },
    {
      title: 'Units of Measurement',
      summary: 'Consistent units avoid confusion.',
      concept: 'Length: mm, cm, m, km. Area: square units. Volume: cubic units or liters. Convert using base-10 in metric.',
      keywords: ['metric','conversion','units'],
      exercise: 'Convert 250 cm to meters.',
      solution: '2.5 m.'
    },
    {
      title: 'Volume Basics',
      summary: 'Counting cubic units in prisms.',
      concept: 'Volume of rectangular prism = length × width × height.',
      keywords: ['volume','prism','cubic units'],
      exercise: 'Find volume of 4×3×2 box.',
      solution: '4×3×2=24 cubic units.'
    },
    {
      title: 'Coordinate Plane',
      summary: 'Locate points with ordered pairs.',
      concept: 'Point (x,y): x steps horizontal, y steps vertical from origin (0,0).',
      keywords: ['coordinate','axis','origin'],
      exercise: 'Which quadrant is (−3, 5)?',
      solution: 'Quadrant II.'
    },
    {
      title: 'Decomposing to Find Area',
      summary: 'Split complex shapes into simpler parts.',
      concept: 'Irregular rectilinear shapes can be partitioned into rectangles; sum their areas.',
      keywords: ['decompose','area','rectilinear'],
      exercise: 'L shape of 6×4 plus 2×4 missing corner: compute area.',
      solution: 'Whole 6×4=24 minus 2×2=4 => 20 square units.'
    },
    {
      title: '3D Figures',
      summary: 'Recognize prisms, pyramids, cylinders, cones, spheres.',
      concept: 'Faces, edges, vertices define many solids; curved surfaces differ (cylinder, cone, sphere).',
      keywords: ['prism','pyramid','cylinder','cone','sphere'],
      exercise: 'Name a solid with 1 circular base.',
      solution: 'Cone.'
    },
    {
      title: 'Circles, Cylinders, Cones, Spheres',
      summary: 'Key formulas and elements.',
      concept: 'Circle: C=2πr, A=πr². Cylinder: V=πr²h. Cone: V=⅓πr²h. Sphere: V=4/3 π r³.',
      keywords: ['circle','radius','volume','π'],
      exercise: 'Area of circle radius 3.',
      solution: 'A=π(3)²=9π.'
    },
    {
      title: 'Angle Relationships',
      summary: 'Adjacent, vertical, complementary, supplementary.',
      concept: 'Vertical angles equal; complementary sum 90°; supplementary sum 180°.',
      keywords: ['vertical','complementary','supplementary'],
      exercise: 'If one angle is 35° complement is?',
      solution: '55°.'
    },
    {
      title: 'Scale',
      summary: 'Using ratios to resize figures.',
      concept: 'Scale factor multiplies all lengths; shapes remain similar (angles preserved).',
      keywords: ['scale','similar','ratio'],
      exercise: 'Original side 5, scale 1.2 => new length?',
      solution: '6.'
    },
    {
      title: 'Triangle Side Lengths',
      summary: 'Triangle inequality constraint.',
      concept: 'Sum of any two sides > third side.',
      keywords: ['triangle inequality'],
      exercise: 'Can 2,4,7 form triangle?',
      solution: 'No (2+4=6 not > 7).'
    },
    {
      title: 'Geometric Transformations',
      summary: 'Moves that preserve shape (rigid) or change size.',
      concept: 'Translations, rotations, reflections preserve size; dilations change scale.',
      keywords: ['translation','rotation','reflection','dilation'],
      exercise: 'Name the transformation: flip over y-axis.',
      solution: 'Reflection.'
    }
  ]
}

export default area
