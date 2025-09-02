import mathFoundations from './areas/math-foundations'
import geometryBasics from './areas/geometry-basics'
import preAlgebra from './areas/pre-algebra'
import algebra2 from './areas/algebra-2'
import trigonometry from './areas/trigonometry'
import precalculus from './areas/precalculus'
import calculus1 from './areas/calculus-1'
import calculus2 from './areas/calculus-2'
import probabilityStatistics from './areas/probability-statistics'
import dataMining from './areas/data-mining'
import llmEngineering from './areas/llm-engineering'
import physicsBasics from './areas/physics-basics'
import biologyBasics from './areas/biology-basics'
import codingBasics from './areas/coding-basics'
import humanBodyKids from './areas/human-body-kids'
import algebraMadeSimple from './areas/algebra-made-simple'

export const focusAreas = [
  mathFoundations,
  algebraMadeSimple,
  geometryBasics,
  preAlgebra,
  algebra2,
  trigonometry,
  precalculus,
  calculus1,
  calculus2,
  probabilityStatistics,
  llmEngineering,
  dataMining,
  physicsBasics,
  biologyBasics,
  codingBasics,
  humanBodyKids
].filter(Boolean)

export function getAreaBySlug(slug) {
  const area = focusAreas.find((a) => a && a.slug === slug)
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
