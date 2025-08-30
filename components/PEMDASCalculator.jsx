"use client"
import { useState } from 'react'

export default function PEMDASCalculator() {
  const [expression, setExpression] = useState('7 + 3 × (10 - 6)^2')
  const [steps, setSteps] = useState([])
  const [currentStep, setCurrentStep] = useState(0)
  const [showSteps, setShowSteps] = useState(false)

  const examples = [
    '7 + 3 × (10 - 6)^2',
    '2 + 3 × 4 - 1',
    '(5 + 3) × 2^2',
    '20 ÷ 4 + 3 × 2',
    '6^2 - 4 × (3 + 2)'
  ]

  const evaluateWithSteps = (expr) => {
    const steps = []
    let current = expr.replace(/\s+/g, '')
    
    // Step 1: Parentheses
    while (current.includes('(')) {
      const parenMatch = current.match(/\([^()]+\)/)
      if (parenMatch) {
        const inside = parenMatch[0].slice(1, -1)
        const result = evalSimple(inside)
        steps.push({
          step: 'Parentheses',
          expression: current,
          operation: `${parenMatch[0]} = ${result}`,
          result: current.replace(parenMatch[0], result)
        })
        current = current.replace(parenMatch[0], result)
      } else break
    }

    // Step 2: Exponents
    while (current.includes('^')) {
      const expMatch = current.match(/\d+\^\d+/)
      if (expMatch) {
        const [base, exp] = expMatch[0].split('^').map(Number)
        const result = Math.pow(base, exp)
        steps.push({
          step: 'Exponents',
          expression: current,
          operation: `${expMatch[0]} = ${result}`,
          result: current.replace(expMatch[0], result)
        })
        current = current.replace(expMatch[0], result)
      } else break
    }

    // Step 3: Multiplication and Division (left to right)
    while (current.match(/\d+[×÷]\d+/) || current.match(/\d+[*/]\d+/)) {
      const mulDivMatch = current.match(/\d+[×÷*/]\d+/)
      if (mulDivMatch) {
        const result = evalOperation(mulDivMatch[0])
        steps.push({
          step: 'Multiplication/Division',
          expression: current,
          operation: `${mulDivMatch[0]} = ${result}`,
          result: current.replace(mulDivMatch[0], result)
        })
        current = current.replace(mulDivMatch[0], result)
      } else break
    }

    // Step 4: Addition and Subtraction (left to right)
    while (current.match(/\d+[+\-]\d+/)) {
      const addSubMatch = current.match(/\d+[+\-]\d+/)
      if (addSubMatch) {
        const result = evalOperation(addSubMatch[0])
        steps.push({
          step: 'Addition/Subtraction',
          expression: current,
          operation: `${addSubMatch[0]} = ${result}`,
          result: current.replace(addSubMatch[0], result)
        })
        current = current.replace(addSubMatch[0], result)
      } else break
    }

    return { steps, final: current }
  }

  const evalSimple = (expr) => {
    try {
      // Replace math symbols and evaluate safely
      const safe = expr.replace(/×/g, '*').replace(/÷/g, '/').replace(/\^/g, '**')
      return Function('"use strict"; return (' + safe + ')')()
    } catch {
      return 'Error'
    }
  }

  const evalOperation = (expr) => {
    if (expr.includes('×') || expr.includes('*')) {
      const [a, b] = expr.split(/[×*]/).map(Number)
      return a * b
    }
    if (expr.includes('÷') || expr.includes('/')) {
      const [a, b] = expr.split(/[÷/]/).map(Number)
      return a / b
    }
    if (expr.includes('+')) {
      const [a, b] = expr.split('+').map(Number)
      return a + b
    }
    if (expr.includes('-')) {
      const [a, b] = expr.split('-').map(Number)
      return a - b
    }
    return expr
  }

  const handleCalculate = () => {
    const result = evaluateWithSteps(expression)
    setSteps(result.steps)
    setCurrentStep(0)
    setShowSteps(true)
  }

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="card">
      <h2>🧮 Interactive PEMDAS Calculator</h2>
      <p style={{ color: 'var(--muted)', marginBottom: '1rem' }}>
        Enter an expression and see PEMDAS in action, step by step!
      </p>

      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
          Math Expression:
        </label>
        <input
          type="text"
          value={expression}
          onChange={(e) => setExpression(e.target.value)}
          placeholder="Enter expression like 7 + 3 × (10 - 6)^2"
          style={{
            width: '100%',
            padding: '0.75rem',
            border: '2px solid var(--border)',
            borderRadius: '8px',
            fontSize: '1rem',
            fontFamily: 'monospace'
          }}
        />
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
        {examples.map((example, i) => (
          <button
            key={i}
            className="btn"
            onClick={() => setExpression(example)}
            style={{ fontSize: '0.8rem', fontFamily: 'monospace' }}
          >
            {example}
          </button>
        ))}
      </div>

      <div className="actions" style={{ marginBottom: '1.5rem' }}>
        <button className="btn primary" onClick={handleCalculate}>
          Calculate Step by Step
        </button>
      </div>

      {showSteps && steps.length > 0 && (
        <div style={{
          background: 'var(--surface)',
          padding: '1.5rem',
          borderRadius: '12px',
          border: '1px solid var(--border)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h3 style={{ margin: 0, color: 'var(--brand)' }}>
              Step {currentStep + 1}: {steps[currentStep]?.step}
            </h3>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button 
                className="btn" 
                onClick={prevStep} 
                disabled={currentStep === 0}
              >
                ← Previous
              </button>
              <button 
                className="btn" 
                onClick={nextStep} 
                disabled={currentStep === steps.length - 1}
              >
                Next →
              </button>
            </div>
          </div>

          <div style={{
            background: 'var(--card)',
            padding: '1rem',
            borderRadius: '8px',
            fontFamily: 'monospace',
            fontSize: '1.1rem'
          }}>
            <div style={{ marginBottom: '0.5rem' }}>
              <strong>Expression:</strong> {steps[currentStep]?.expression}
            </div>
            <div style={{ marginBottom: '0.5rem', color: 'var(--brand)' }}>
              <strong>Calculate:</strong> {steps[currentStep]?.operation}
            </div>
            <div style={{ color: 'var(--success)' }}>
              <strong>Result:</strong> {steps[currentStep]?.result}
            </div>
          </div>

          <div style={{ 
            marginTop: '1rem', 
            padding: '0.75rem', 
            background: 'var(--success-soft)', 
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <strong>Progress:</strong> {currentStep + 1} of {steps.length} steps
            {currentStep === steps.length - 1 && (
              <div style={{ marginTop: '0.5rem', color: 'var(--success)' }}>
                ✅ Final Answer: <strong>{steps[currentStep]?.result}</strong>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}