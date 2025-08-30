"use client"
import { useMemo, useState } from 'react'

export default function FunctionGrapher() {
  const [type, setType] = useState('linear') // linear | quadratic | polynomial | exponential | trig
  const [ineq, setIneq] = useState('none') // none | > | >= | < | <=

  // Linear y = m x + b
  const [m, setM] = useState(1)
  const [b, setB] = useState(0)

  // Quadratic y = a x^2 + b x + c
  const [qa, setQa] = useState(1)
  const [qb, setQb] = useState(0)
  const [qc, setQc] = useState(0)

  // Polynomial y = p3 x^3 + p2 x^2 + p1 x + p0
  const [p3, setP3] = useState(0)
  const [p2, setP2] = useState(1)
  const [p1, setP1] = useState(0)
  const [p0, setP0] = useState(0)

  // Exponential y = a * b^x + c
  const [ea, setEa] = useState(1)
  const [eb, setEb] = useState(2)
  const [ec, setEc] = useState(0)

  // Trig y = A * trig(Bx + C) + D
  const [trigKind, setTrigKind] = useState('sin') // sin | cos | tan
  const [A, setA] = useState(1)
  const [B, setBcoef] = useState(1)
  const [C, setC] = useState(0)
  const [D, setD] = useState(0)

  // View settings
  const W = 520
  const H = 360
  const [zoom, setZoom] = useState(1) // 1..4 (larger → closer)
  const rangeBase = 10
  const xRange = rangeBase / zoom
  const yRange = rangeBase / zoom
  const xmin = -xRange
  const xmax = xRange
  const ymin = -yRange
  const ymax = yRange

  const toX = (x) => ( (x - xmin) / (xmax - xmin) ) * W
  const toY = (y) => H - ( (y - ymin) / (ymax - ymin) ) * H

  const fx = useMemo(() => {
    if (type === 'linear') return (x) => m * x + b
    if (type === 'quadratic') return (x) => qa * x * x + qb * x + qc
    if (type === 'polynomial') return (x) => ((p3 * x + p2) * x + p1) * x + p0
    if (type === 'exponential') return (x) => ea * Math.pow(eb, x) + ec
    if (type === 'trig') {
      const base = (x) => {
        const arg = B * x + C
        if (trigKind === 'sin') return Math.sin(arg)
        if (trigKind === 'cos') return Math.cos(arg)
        return Math.tan(arg)
      }
      return (x) => A * base(x) + D
    }
    return (x) => x
  }, [type, m, b, qa, qb, qc, p3, p2, p1, p0, ea, eb, ec, trigKind, A, B, C, D])

  // Build path segments to handle discontinuities (e.g., tan)
  const { segments, samples } = useMemo(() => {
    const pts = []
    const segs = []
    const N = 700
    const EPS = 1e-3
    let curr = []
    for (let i = 0; i < N; i++) {
      const x = xmin + (i / (N - 1)) * (xmax - xmin)
      let y = fx(x)
      if (!isFinite(y) || Math.abs(y) > 1e6) {
        if (curr.length > 1) segs.push(curr)
        curr = []
        continue
      }
      const X = toX(x)
      const Y = toY(y)
      if (curr.length) {
        const [prevX, prevY] = curr[curr.length - 1]
        // Break if vertical jump is huge (likely asymptote)
        if (Math.abs(prevY - Y) > H * 0.8) {
          if (curr.length > 1) segs.push(curr)
          curr = []
        }
      }
      curr.push([X, Y])
      pts.push([X, Y])
    }
    if (curr.length > 1) segs.push(curr)
    return { segments: segs, samples: pts }
  }, [fx, xmin, xmax, H])

  const dashed = ineq === '>' || ineq === '<'
  const shadeAbove = ineq === '>' || ineq === '>='
  const showShade = ineq !== 'none'

  const expression = useMemo(() => {
    switch (type) {
      case 'linear': return `y = ${fmt(m)}x ${fmtb(b)}`
      case 'quadratic': return `y = ${fmt(qa)}x² ${fmtb(qb)}x ${fmtb(qc)}`
      case 'polynomial': return `y = ${fmt(p3)}x³ ${fmtb(p2)}x² ${fmtb(p1)}x ${fmtb(p0)}`
      case 'exponential': return `y = ${fmt(ea)}·${fmt(eb)}^x ${fmtb(ec)}`
      case 'trig': return `y = ${fmt(A)}·${trigKind}(${fmt(B)}x ${fmtb(C)}) ${fmtb(D)}`
      default: return 'y = f(x)'
    }
  }, [type, m, b, qa, qb, qc, p3, p2, p1, p0, ea, eb, ec, trigKind, A, B, C, D])

  function reset() {
    setType('linear'); setIneq('none');
    setM(1); setB(0);
    setQa(1); setQb(0); setQc(0);
    setP3(0); setP2(1); setP1(0); setP0(0);
    setEa(1); setEb(2); setEc(0);
    setTrigKind('sin'); setA(1); setBcoef(1); setC(0); setD(0);
    setZoom(1)
  }

  return (
    <div className="card">
      <h2>📈 Coordinate Grapher</h2>
      <p style={{ color:'var(--muted)', margin:'-0.25rem 0 0.75rem' }}>
        Plot linear, quadratic, polynomial, exponential, and trig functions. Shade inequalities.
      </p>

      <div style={{ display:'flex', flexWrap:'wrap', gap:'0.5rem', marginBottom:'0.75rem' }}>
        <label style={lab}>Type
          <select value={type} onChange={e=>setType(e.target.value)} style={sel}>
            <option value="linear">Linear</option>
            <option value="quadratic">Quadratic</option>
            <option value="polynomial">Polynomial (cubic)</option>
            <option value="exponential">Exponential</option>
            <option value="trig">Trigonometric</option>
          </select>
        </label>
        {type === 'trig' && (
          <label style={lab}>Trig
            <select value={trigKind} onChange={e=>setTrigKind(e.target.value)} style={sel}>
              <option value="sin">sin</option>
              <option value="cos">cos</option>
              <option value="tan">tan</option>
            </select>
          </label>
        )}
        <label style={lab}>Inequality
          <select value={ineq} onChange={e=>setIneq(e.target.value)} style={sel}>
            <option value="none">None</option>
            <option value=">">y &gt; f(x)</option>
            <option value=">=">y ≥ f(x)</option>
            <option value="<">y &lt; f(x)</option>
            <option value="<=">y ≤ f(x)</option>
          </select>
        </label>
        <label style={lab}>Zoom
          <input type="range" min={0.5} max={4} step={0.5} value={zoom} onChange={e=>setZoom(Number(e.target.value))} />
        </label>
        <button className="btn" onClick={reset}>Reset</button>
      </div>

      {/* Parameter controls */}
      <div style={{ display:'flex', flexWrap:'wrap', gap:'0.5rem', marginBottom:'0.75rem' }}>
        {type === 'linear' && (
          <>
            <label style={lab}>m<input type="number" value={m} onChange={e=>setM(num(e))} style={inp}/></label>
            <label style={lab}>b<input type="number" value={b} onChange={e=>setB(num(e))} style={inp}/></label>
          </>
        )}
        {type === 'quadratic' && (
          <>
            <label style={lab}>a<input type="number" value={qa} onChange={e=>setQa(num(e))} style={inp}/></label>
            <label style={lab}>b<input type="number" value={qb} onChange={e=>setQb(num(e))} style={inp}/></label>
            <label style={lab}>c<input type="number" value={qc} onChange={e=>setQc(num(e))} style={inp}/></label>
          </>
        )}
        {type === 'polynomial' && (
          <>
            <label style={lab}>x³<input type="number" value={p3} onChange={e=>setP3(num(e))} style={inp}/></label>
            <label style={lab}>x²<input type="number" value={p2} onChange={e=>setP2(num(e))} style={inp}/></label>
            <label style={lab}>x<input type="number" value={p1} onChange={e=>setP1(num(e))} style={inp}/></label>
            <label style={lab}>const<input type="number" value={p0} onChange={e=>setP0(num(e))} style={inp}/></label>
          </>
        )}
        {type === 'exponential' && (
          <>
            <label style={lab}>a<input type="number" value={ea} onChange={e=>setEa(num(e))} style={inp}/></label>
            <label style={lab}>base<input type="number" value={eb} onChange={e=>setEb(num(e))} style={inp}/></label>
            <label style={lab}>+c<input type="number" value={ec} onChange={e=>setEc(num(e))} style={inp}/></label>
          </>
        )}
        {type === 'trig' && (
          <>
            <label style={lab}>A<input type="number" value={A} onChange={e=>setA(num(e))} style={inp}/></label>
            <label style={lab}>B<input type="number" value={B} onChange={e=>setBcoef(num(e))} style={inp}/></label>
            <label style={lab}>C<input type="number" value={C} onChange={e=>setC(num(e))} style={inp}/></label>
            <label style={lab}>D<input type="number" value={D} onChange={e=>setD(num(e))} style={inp}/></label>
          </>
        )}
      </div>

      <div style={{ background:'var(--surface)', padding:'0.5rem 0.75rem', borderRadius:'8px', marginBottom:'0.6rem', fontSize:'0.9rem' }}>
        <strong>{ineqLabel(ineq)}</strong> {expression}
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} style={{ width:'100%', background:'var(--card)', border:'1px solid var(--border)', borderRadius:'8px' }}>
        {/* Grid */}
        {gridLines(xmin, xmax, toX).map((X,i)=> (
          <line key={`vg-${i}`} x1={X} x2={X} y1={0} y2={H} stroke="var(--border)" strokeWidth={1} />
        ))}
        {gridLines(ymin, ymax, toY).map((Y,i)=> (
          <line key={`hg-${i}`} x1={0} x2={W} y1={Y} y2={Y} stroke="var(--border)" strokeWidth={1} />
        ))}

        {/* Axes */}
        <line x1={toX(0)} x2={toX(0)} y1={0} y2={H} stroke="var(--text)" strokeWidth={1.5} />
        <line x1={0} x2={W} y1={toY(0)} y2={toY(0)} stroke="var(--text)" strokeWidth={1.5} />

        {/* Tick labels */}
        {ticks(xmin, xmax).map((x)=> (
          <text key={`xt-${x}`} x={toX(x)} y={toY(0)+12} fontSize={10} textAnchor="middle" fill="var(--muted)">{x}</text>
        ))}
        {ticks(ymin, ymax).map((y)=> (
          <text key={`yt-${y}`} x={toX(0)+12} y={toY(y)+3} fontSize={10} fill="var(--muted)">{y}</text>
        ))}

        {/* Shaded inequality region (approximate) */}
        {showShade && samples.length > 1 && (
          <polygon
            points={shadePolygon(samples, W, H, shadeAbove)}
            fill="var(--brand)"
            opacity={0.12}
          />
        )}

        {/* Function path (handle discontinuities) */}
        {segments.map((seg, si) => (
          <path key={`seg-${si}`} d={toPath(seg)} fill="none" stroke="var(--brand)" strokeWidth={2} strokeDasharray={dashed ? '6 6' : 'none'} />
        ))}
      </svg>
    </div>
  )
}

// Helpers
function num(e) { return Number(e.target.value) }
const lab = { fontSize:'0.8rem', display:'flex', alignItems:'center', gap:'0.35rem', padding:'0.25rem 0.5rem', background:'var(--card)', border:'1px solid var(--border)', borderRadius:'8px' }
const inp = { marginLeft:'0.25rem', padding:'0.35rem', width:'80px', border:'2px solid var(--border)', borderRadius:'6px' }
const sel = { padding:'0.35rem', border:'2px solid var(--border)', borderRadius:'6px' }

function gridLines(min, max, toCoord) {
  const out = []
  const start = Math.ceil(min)
  const end = Math.floor(max)
  for (let v = start; v <= end; v++) out.push(toCoord(v))
  return out
}

function ticks(min, max) {
  const out = []
  const start = Math.ceil(min)
  const end = Math.floor(max)
  for (let v = start; v <= end; v++) if (v !== 0) out.push(v)
  return out
}

function toPath(seg) {
  if (!seg.length) return ''
  const [x0, y0] = seg[0]
  let d = `M ${x0} ${y0}`
  for (let i = 1; i < seg.length; i++) { d += ` L ${seg[i][0]} ${seg[i][1]}` }
  return d
}

function shadePolygon(samples, W, H, above) {
  // Build a simple band between function and top/bottom edge using full samples list
  // Start at left edge boundary, trace along samples, then close to boundary
  if (!samples.length) return ''
  const leftX = samples[0][0]
  const rightX = samples[samples.length - 1][0]
  const edgeY = above ? 0 : H
  const head = `${leftX},${edgeY} `
  const body = samples.map(([x,y])=> `${x},${y}`).join(' ')
  const tail = ` ${rightX},${edgeY}`
  return head + body + tail
}

function fmt(n) {
  if (n === 1) return '1'
  if (n === -1) return '−1'
  if (Number.isInteger(n)) return String(n)
  return (Math.round(n * 1000) / 1000).toString()
}
function fmtb(n) {
  if (n === 0) return ''
  const s = n > 0 ? ' + ' : ' − '
  const v = Math.abs(n)
  return s + fmt(v)
}

function ineqLabel(ineq) {
  switch (ineq) {
    case '>': return 'y >'
    case '>=': return 'y ≥'
    case '<': return 'y <'
    case '<=': return 'y ≤'
    default: return 'y ='
  }
}
