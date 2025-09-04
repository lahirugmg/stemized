"use client"
import { useState } from 'react'

// Lightweight expression parser for + - × ÷ ^ and parentheses.
function tokenize(expr) {
  const tokens = []
  let num = ''
  for (let ch of expr.replace(/\s+/g,'')) {
    if (/[0-9.]/.test(ch)) { num += ch; continue }
    if (num) { tokens.push({ type:'num', value:num }); num='' }
    if (/[-+×÷^()]/.test(ch)) tokens.push({ type:'op', value:ch })
  }
  if (num) tokens.push({ type:'num', value:num })
  return tokens
}

// Shunting-yard to AST
const PRECEDENCE = { '^':4, '×':3, '÷':3, '+':2, '-':2 }

function toAST(tokens) {
  const out = []
  const ops = []
  function pop() {
    const op = ops.pop()
    const r = out.pop()
    const l = out.pop()
    out.push({ type:'op', op:op.value, left:l, right:r })
  }
  for (let t of tokens) {
    if (t.type === 'num') out.push({ type:'num', value: t.value })
    else if (t.value === '(') ops.push(t)
    else if (t.value === ')') {
      while (ops.length && ops[ops.length-1].value !== '(') pop()
      ops.pop()
    } else { // operator
      while (ops.length) {
        const top = ops[ops.length-1].value
        if (top === '(') break
        if ((PRECEDENCE[top] > PRECEDENCE[t.value]) || (PRECEDENCE[top] === PRECEDENCE[t.value] && t.value !== '^')) pop()
        else break
      }
      ops.push(t)
    }
  }
  while (ops.length) pop()
  return out[0]
}

function evalAST(node) {
  if (!node) return NaN
  if (node.type === 'num') return Number(node.value)
  const a = evalAST(node.left)
  const b = evalAST(node.right)
  switch(node.op){
    case '+': return a + b
    case '-': return a - b
    case '×': return a * b
    case '÷': return a / b
    case '^': return Math.pow(a,b)
    default: return NaN
  }
}

function NodeView({ node, onSelect, selected, pulseId }) {
  if (!node) return null
  const isNum = node.type === 'num'
  const value = isNum ? node.value : node.op
  const result = !isNum ? evalAST(node) : node.value
  const sel = selected === node
  return (
    <div
      className={`et-node${sel ? ' selected' : ''}`}
      onClick={(e)=>{e.stopPropagation(); onSelect(node)}}
    >
      <div className="pulseable" key={sel ? `p-${pulseId}` : 'p-0'}>
        <div style={{ fontWeight:600 }}>{value}</div>
        {!isNum && (
          <div style={{ display:'flex', gap:'0.5rem' }}>
            <NodeView node={node.left} onSelect={onSelect} selected={selected} pulseId={pulseId} />
            <NodeView node={node.right} onSelect={onSelect} selected={selected} pulseId={pulseId} />
          </div>
        )}
        {sel && !isNum && (
          <div style={{ fontSize:'0.7rem', color:'var(--success)' }}>= {result}</div>
        )}
      </div>
    </div>
  )
}

export default function ExpressionTree() {
  const [expr, setExpr] = useState('7 + 3 × (10 - 6)^2')
  const [ast, setAst] = useState(()=> toAST(tokenize(expr)))
  const [selected, setSelected] = useState(null)
  const [pulseId, setPulseId] = useState(0)

  const rebuild = (e) => {
    const v = e.target.value
    setExpr(v)
    try {
      setAst(toAST(tokenize(v)))
      setSelected(null)
    } catch { /* ignore parse errors */ }
  }

  return (
    <div className="card">
      <h2>🧩 Expression Tree Visualizer</h2>
      <p style={{ color:'var(--muted)', marginBottom:'1rem' }}>See how your expression breaks into a tree the order of operations will evaluate.</p>
      <input value={expr} onChange={rebuild} style={{ width:'100%', padding:'0.6rem', border:'2px solid var(--border)', borderRadius:'8px', fontFamily:'monospace' }} />
      <div style={{ marginTop:'1rem', overflowX:'auto', padding:'1rem', background:'var(--surface)', borderRadius:'12px' }}>
        {ast ? <NodeView node={ast} onSelect={(n)=>{ setSelected(n); setPulseId(id=>id+1) }} selected={selected} pulseId={pulseId} /> : <em>Invalid expression</em>}
      </div>
      {selected && selected.type==='op' && (
        <div style={{ marginTop:'0.75rem', background:'var(--success-soft)', border:'1px solid var(--success)', padding:'0.75rem', borderRadius:'8px', fontSize:'0.9rem' }}>
          <strong>Sub-expression:</strong> Evaluating <code style={{ fontFamily:'monospace' }}>{selected.left.type==='num'?selected.left.value:evalAST(selected.left)} {selected.op} {selected.right.type==='num'?selected.right.value:evalAST(selected.right)}</code> = <strong>{evalAST(selected)}</strong>
        </div>
      )}
      <style jsx>{`
        .et-node {
          border: 2px solid var(--border);
          border-radius: 10px;
          padding: 0.5rem;
          background: var(--card);
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
          min-width: 60px;
          transition: transform 220ms ease, background-color 220ms ease, border-color 220ms ease, box-shadow 220ms ease;
          cursor: pointer;
        }
        .et-node:hover { transform: translateY(-2px); box-shadow: 0 2px 0 var(--border); }
        .et-node.selected { border-color: var(--brand); background: var(--brand-soft); box-shadow: 0 0 0 2px color-mix(in oklab, var(--brand) 20%, transparent); }
        @keyframes et-pulse {
          0% { transform: scale(1); }
          40% { transform: scale(1.04); }
          100% { transform: scale(1); }
        }
        .pulseable { animation: et-pulse 360ms ease-out; }
      `}</style>
    </div>
  )
}
