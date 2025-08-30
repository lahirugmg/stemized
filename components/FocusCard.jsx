import Link from 'next/link'

export default function FocusCard({ area }) {
  const themeStyles = {
    math: { borderColor: '#ff6b6b' },
    data: { borderColor: '#4ecdc4' },
    science: { borderColor: '#45b7d1' },
    coding: { borderColor: '#96ceb4' }
  }

  return (
    <article
      className="card hover interactive focus-card"
      style={themeStyles[area.theme] || {}}
    >
      <h2 style={{ color: area.color }}>{area.title}</h2>
      <p>{area.description}</p>
      <div className="tags">
        {area.tags?.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>
      <div className="actions">
        <Link className="btn primary" href={`/focus/${area.slug}/0`} style={{ backgroundColor: area.color }}>
          Start Learning
        </Link>
      </div>
    </article>
  )
}

