import Link from 'next/link'
import { getAreaBySlug } from '../../../../data/topics'

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
  const hasPrev = idx > 0
  const hasNext = idx < area.lessons.length - 1

  return (
    <section>
      <div className="crumbs">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href={`/focus/${area.slug}/0`}>{area.title}</Link>
        <span>/</span>
        <span>Lesson {idx + 1}</span>
      </div>

      <article className="lesson">
        <h1>{lesson.title}</h1>
        <p className="lede">{lesson.summary}</p>
        <div className="card">
          <h2>Concept</h2>
          <p>{lesson.concept}</p>
        </div>

        <div className="card">
          <h2>Try it</h2>
          <p>{lesson.exercise}</p>
        </div>

        <nav className="nav">
          <div>
            {hasPrev ? (
              <Link className="btn" href={`/focus/${area.slug}/${idx - 1}`}>← Previous</Link>
            ) : (
              <span className="btn disabled">← Previous</span>
            )}
          </div>
          <div className="spacer" />
          <div>
            {hasNext ? (
              <Link className="btn primary" href={`/focus/${area.slug}/${idx + 1}`}>Next →</Link>
            ) : (
              <Link className="btn success" href={`/focus/${area.slug}/0`}>Restart</Link>
            )}
          </div>
        </nav>
      </article>
    </section>
  )
}

