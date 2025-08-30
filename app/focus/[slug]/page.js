import Link from 'next/link'
import { getAreaBySlug } from '../../../data/topics'

export default function FocusIndex({ params }) {
  const area = getAreaBySlug(params.slug)
  if (!area) {
    return (
      <section>
        <h1>Not found</h1>
        <p>Unknown focus area.</p>
        <Link href="/">Go back</Link>
      </section>
    )
  }
  return (
    <section>
      <h1>{area.title}</h1>
      <p>{area.description}</p>
      <ol className="list">
        {area.lessons.map((l, i) => (
          <li key={l.title} className="list-item">
            <Link href={`/focus/${area.slug}/${i}`}>{i + 1}. {l.title}</Link>
          </li>
        ))}
      </ol>
      <div className="actions">
        <Link className="btn primary" href={`/focus/${area.slug}/0`}>Start learning</Link>
      </div>
    </section>
  )
}

