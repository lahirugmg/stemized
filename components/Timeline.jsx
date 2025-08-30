export default function Timeline({ title = 'Timeline', items = [] }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
        {items.map((it, idx) => (
          <li key={idx} style={{ display: 'grid', gridTemplateColumns:'auto 1fr', gap: '0.75rem', alignItems: 'start', margin: '0.5rem 0' }}>
            <span style={{ background:'var(--brand-soft)', border:'1px solid var(--brand)', color:'var(--brand)', padding:'0.15rem 0.5rem', borderRadius: 999 }}>{it.year}</span>
            <div>
              <div style={{ fontWeight: 600 }}>{it.label}</div>
              {it.note && <div style={{ color: 'var(--muted)' }}>{it.note}</div>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
