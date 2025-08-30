import Link from 'next/link'
import { getAreaBySlug } from '../../../../data'
import LessonPageClient from './LessonPageClient'

export function generateStaticParams() {
  // Optional pre-rendering; safe to leave empty in dev.
  return []
}

export default function LessonPage({ params }) {
  const { slug, index } = params
  const area = getAreaBySlug(slug)
  const idx = Number(index)

  if (!area) {
    return (
      <section>
        <h1>Not found</h1>
        <p>Unknown focus area.</p>
        <Link href="/">Go back</Link>
      </section>
    )
  }

  const lesson = area.lessons[idx]

  return (
    <LessonPageClient 
      area={area} 
      lesson={lesson} 
      idx={idx} 
      totalLessons={area.lessons.length}
    />
  )
}
