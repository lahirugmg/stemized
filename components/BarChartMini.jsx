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
              <span style={{ color:'#a7bee8' }}>{b.caption}</span>
            </div>
            <div style={{ background:'#0b1b3d', border:'1px solid #2a3769', borderRadius:8, overflow:'hidden' }}>
              <div style={{ width: `${(b.value/max)*100}%`, background:'#123573', height:10 }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

