export default function BarChartMini({ title = 'Data Growth', bars = [] }) {
  const max = Math.max(1, ...bars.map(b => b.value))
  return (
    <div className="card">
      <h2>{title}</h2>
      <div style={{ display:'grid', gap:'0.5rem' }}>
        {bars.map((b, i) => (
          <div key={i}>
            <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'0.2rem' }}>
              <span style={{ color:'var(--muted)' }}>{b.label}</span>
              <span style={{ color:'var(--muted)' }}>{b.caption}</span>
            </div>
            <div style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:8, overflow:'hidden' }}>
              <div style={{ width: `${(b.value/max)*100}%`, background:'var(--brand)', height:10 }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
