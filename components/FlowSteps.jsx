export default function FlowSteps({ title = 'From Data to Value', steps = [] }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div style={{ display:'flex', flexWrap:'wrap', alignItems:'center', gap:'0.5rem' }}>
        {steps.map((s, i) => (
          <Step key={i} label={s} isLast={i === steps.length - 1} />
        ))}
      </div>
    </div>
  )
}

function Step({ label, isLast }) {
  return (
    <div style={{ display:'flex', alignItems:'center', gap:'0.5rem' }}>
      <div style={{ padding:'0.35rem 0.7rem', border:'1px solid var(--border)', borderRadius:999, background:'var(--surface)' }}>{label}</div>
      {!isLast && <span style={{ opacity:0.7 }}>→</span>}
    </div>
  )
}
