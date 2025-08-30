export default function UseCaseGrid({ title = 'Applications', items = [] }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(220px, 1fr))', gap:'0.75rem' }}>
        {items.map((uc, i) => (
          <article key={i} className="card hover" style={{ padding: '0.8rem' }}>
            <div style={{ fontWeight: 600 }}>{uc.title}</div>
            <div style={{ color: 'var(--muted)' }}>{uc.desc}</div>
          </article>
        ))}
      </div>
    </div>
  )
}

