"use client"
import { useMemo, useState } from 'react'

export default function AreaPerimeterExplorer() {
  const [w, setW] = useState(5)
  const [h, setH] = useState(3)
  const [mode, setMode] = useState('area') // 'area' | 'perimeter'

  const area = useMemo(()=> w * h, [w,h])
  const perimeter = useMemo(()=> 2 * (w + h), [w,h])

  const cell = 22
  const pad = 12
  const svgW = w * cell + pad * 2
  const svgH = h * cell + pad * 2

  const clamp = (n, min, max) => Math.max(min, Math.min(max, n))

  return (
    <div className="card">
      <h2>🧮 Area & Perimeter Explorer</h2>
      <p style={{ color:'var(--muted)', marginBottom:'0.75rem' }}>Interact with the rectangle to see how area and perimeter change.</p>

      <div style={{ display:'flex', gap:'1rem', flexWrap:'wrap', alignItems:'center', marginBottom:'0.75rem' }}>
        <label style={{ fontSize:'0.85rem' }}>Width
          <input type="number" min={1} max={20} value={w} onChange={e=>setW(clamp(Number(e.target.value||1),1,20))} style={inp} />
        </label>
        <input type="range" min={1} max={20} value={w} onChange={e=>setW(Number(e.target.value))} style={{ width:'160px' }} />

        <label style={{ fontSize:'0.85rem' }}>Height
          <input type="number" min={1} max={20} value={h} onChange={e=>setH(clamp(Number(e.target.value||1),1,20))} style={inp} />
        </label>
        <input type="range" min={1} max={20} value={h} onChange={e=>setH(Number(e.target.value))} style={{ width:'160px' }} />

        <div style={{ display:'flex', gap:'0.5rem', marginLeft:'auto' }}>
          <button className={`btn ${mode==='area'?'primary':''}`} onClick={()=>setMode('area')}>Area</button>
          <button className={`btn ${mode==='perimeter'?'primary':''}`} onClick={()=>setMode('perimeter')}>Perimeter</button>
        </div>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'1fr', justifyItems:'center' }}>
        <svg viewBox={`0 0 ${svgW} ${svgH}`} style={{ width:'100%', maxWidth: 560, background:'var(--surface)', border:'1px solid var(--border)', borderRadius:'10px' }}>
          <g transform={`translate(${pad} ${pad})`}>
            {/* grid */}
            {Array.from({length:h+1}).map((_,i)=> (
              <line key={`h-${i}`} x1={0} y1={i*cell} x2={w*cell} y2={i*cell} stroke="var(--border)" />
            ))}
            {Array.from({length:w+1}).map((_,i)=> (
              <line key={`v-${i}`} y1={0} x1={i*cell} y2={h*cell} x2={i*cell} stroke="var(--border)" />
            ))}

            {/* area tiles */}
            {mode==='area' && (
              <g>
                {Array.from({length:h}).map((_,r)=> (
                  Array.from({length:w}).map((_,c)=> (
                    <rect
                      key={`t-${r}-${c}`}
                      x={c*cell+1}
                      y={r*cell+1}
                      width={cell-2}
                      height={cell-2}
                      rx={3}
                      ry={3}
                      className="ap-cell"
                      style={{ animationDelay: `${(r*w+c)*14}ms` }}
                      fill="var(--brand-soft)"
                      stroke="var(--brand)"
                    />
                  ))
                ))}
              </g>
            )}

            {/* perimeter path */}
            {mode==='perimeter' && (
              <g>
                <rect x={1} y={1} width={w*cell-2} height={h*cell-2} fill="none" stroke="var(--warning)" strokeWidth={3} strokeDasharray={8} className="ap-peri" />
              </g>
            )}
          </g>
        </svg>
      </div>

      <div style={{ marginTop:'0.75rem', display:'grid', gap:'0.5rem' }}>
        <div className="callout info">
          <div className="callout-title">Calculations</div>
          <div style={{ display:'flex', gap:'1rem', flexWrap:'wrap' }}>
            <span><strong>Area</strong>: {w} × {h} = <span style={{ color:'var(--brand)' }}>{area}</span></span>
            <span><strong>Perimeter</strong>: 2 × ({w} + {h}) = <span style={{ color:'var(--warning)' }}>{perimeter}</span></span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes ap-pop {
          0% { transform: scale(0.6); opacity: 0; }
          60% { transform: scale(1.08); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        .ap-cell { animation: ap-pop 260ms cubic-bezier(0.22,1,0.36,1) both; }
        @keyframes dash-march { to { stroke-dashoffset: -16; } }
        .ap-peri { animation: dash-march 900ms linear infinite; }
      `}</style>
    </div>
  )
}

const inp = { width:'72px', marginLeft:'0.5rem', padding:'0.4rem', border:'2px solid var(--border)', borderRadius:'6px' }

