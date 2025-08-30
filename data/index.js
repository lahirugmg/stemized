import mathFoundations from './areas/math-foundations'
import dataMining from './areas/data-mining'
import llmEngineering from './areas/llm-engineering'
import physicsBasics from './areas/physics-basics'
import biologyBasics from './areas/biology-basics'
import codingBasics from './areas/coding-basics'

export const focusAreas = [
  mathFoundations,
  llmEngineering,
  dataMining,
  physicsBasics,
  biologyBasics,
  codingBasics
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

