import Link from 'next/link'

export default function FocusCard({ area }) {
  return (
    <article className="card hover">
      <h2>{area.title}</h2>
      <p>{area.description}</p>
      <div className="tags">
        {area.tags?.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>
      <div className="actions">
        <Link className="btn primary" href={`/focus/${area.slug}/0`}>
          Start
        </Link>
      </div>
    </article>
  )
}

