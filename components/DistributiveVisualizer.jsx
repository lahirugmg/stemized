"use client"
import { useState } from 'react'

export default function DistributiveVisualizer() {
  const [coefficient, setCoefficient] = useState(3)
  const [term1, setTerm1] = useState(4)
  const [term2, setTerm2] = useState(2)
  const [operation, setOperation] = useState('+')
  const [showSteps, setShowSteps] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    { title: 'Original Expression', description: 'Start with the expression in factored form' },
    { title: 'Apply Distribution', description: 'Multiply the coefficient by each term inside parentheses' },
    { title: 'Calculate Each Product', description: 'Perform the multiplication for each term' },
    { title: 'Final Result', description: 'Write the expanded form' }
  ]

  const getExpression = () => {
    return `${coefficient}(${term1} ${operation} ${term2})`
  }

  const getDistributedForm = () => {
    return `${coefficient} × ${term1} ${operation} ${coefficient} × ${term2}`
  }

  const getCalculatedForm = () => {
    const product1 = coefficient * term1
    const product2 = coefficient * term2
    return `${product1} ${operation} ${product2}`
  }

  const getFinalResult = () => {
    const product1 = coefficient * term1
    const product2 = coefficient * term2
    return operation === '+' ? product1 + product2 : product1 - product2
  }

  const renderVisualRectangles = () => {
    const rectWidth = 60
    const rectHeight = 40
    const spacing = 5

    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        padding: '1.5rem',
        background: 'var(--surface)',
        borderRadius: '12px',
        margin: '1rem 0'
      }}>
        <div style={{ marginBottom: '1rem', fontWeight: 600, color: 'var(--brand)' }}>
          Visual Representation: {getExpression()}
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {/* Coefficient visualization */}
          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: '0.5rem', fontWeight: 600 }}>
              Coefficient: {coefficient}
            </div>
            <div style={{
              width: `${coefficient * 20}px`,
              height: '30px',
              background: 'var(--brand)',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold'
            }}>
              {coefficient}
            </div>
          </div>

          <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>×</div>

          {/* Parentheses content visualization */}
          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: '0.5rem', fontWeight: 600 }}>
              ({term1} {operation} {term2})
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{
                width: `${term1 * 15}px`,
                height: '30px',
                background: 'var(--success)',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                minWidth: '30px'
              }}>
                {term1}
              </div>
              <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{operation}</span>
              <div style={{
                width: `${term2 * 15}px`,
                height: '30px',
                background: operation === '+' ? 'var(--success)' : 'var(--warning)',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                minWidth: '30px'
              }}>
                {term2}
              </div>
            </div>
          </div>
        </div>

        {currentStep >= 1 && (
          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <div style={{ marginBottom: '0.5rem', fontWeight: 600, color: 'var(--brand)' }}>
              After Distribution: {getDistributedForm()}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <div style={{
                padding: '0.5rem 1rem',
                background: 'var(--brand-soft)',
                border: '2px solid var(--brand)',
                borderRadius: '8px',
                fontFamily: 'monospace',
                fontWeight: 'bold'
              }}>
                {coefficient} × {term1} = {coefficient * term1}
              </div>
              <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{operation}</span>
              <div style={{
                padding: '0.5rem 1rem',
                background: operation === '+' ? 'var(--success-soft)' : 'var(--warning-soft)',
                border: `2px solid ${operation === '+' ? 'var(--success)' : 'var(--warning)'}`,
                borderRadius: '8px',
                fontFamily: 'monospace',
                fontWeight: 'bold'
              }}>
                {coefficient} × {term2} = {coefficient * term2}
              </div>
            </div>
          </div>
        )}

        {currentStep >= 3 && (
          <div style={{
            marginTop: '1rem',
            padding: '1rem',
            background: 'var(--accent-soft)',
            border: '2px solid var(--accent)',
            borderRadius: '12px',
            textAlign: 'center'
          }}>
            <div style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Final Result:</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent)' }}>
              {getCalculatedForm()} = {getFinalResult()}
            </div>
          </div>
        )}
      </div>
    )
  }

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleReset = () => {
    setCurrentStep(0)
    setShowSteps(false)
  }

  return (
    <div className="card">
      <h2>📐 Interactive Distributive Property</h2>
      <p style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
        Explore how multiplication distributes over addition and subtraction with visual representations!
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
            Coefficient:
          </label>
          <input
            type="number"
            value={coefficient}
            onChange={(e) => setCoefficient(Number(e.target.value))}
            min="1"
            max="10"
            style={{
              width: '100%',
              padding: '0.5rem',
              border: '2px solid var(--border)',
              borderRadius: '6px'
            }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
            First Term:
          </label>
          <input
            type="number"
            value={term1}
            onChange={(e) => setTerm1(Number(e.target.value))}
            min="1"
            max="20"
            style={{
              width: '100%',
              padding: '0.5rem',
              border: '2px solid var(--border)',
              borderRadius: '6px'
            }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
            Operation:
          </label>
          <select
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
            style={{
              width: '100%',
              padding: '0.5rem',
              border: '2px solid var(--border)',
              borderRadius: '6px'
            }}
          >
            <option value="+">Addition (+)</option>
            <option value="-">Subtraction (-)</option>
          </select>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
            Second Term:
          </label>
          <input
            type="number"
            value={term2}
            onChange={(e) => setTerm2(Number(e.target.value))}
            min="1"
            max="20"
            style={{
              width: '100%',
              padding: '0.5rem',
              border: '2px solid var(--border)',
              borderRadius: '6px'
            }}
          />
        </div>
      </div>

      <div className="actions" style={{ marginBottom: '1rem' }}>
        <button 
          className="btn primary" 
          onClick={() => {
            setShowSteps(true)
            setCurrentStep(0)
          }}
        >
          Start Visualization
        </button>
      </div>

      {showSteps && (
        <>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginBottom: '1rem',
            padding: '1rem',
            background: 'var(--brand-soft)',
            borderRadius: '8px'
          }}>
            <h3 style={{ margin: 0, color: 'var(--brand)' }}>
              Step {currentStep + 1}: {steps[currentStep].title}
            </h3>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button 
                className="btn" 
                onClick={handlePrevStep} 
                disabled={currentStep === 0}
              >
                ← Previous
              </button>
              <button 
                className="btn" 
                onClick={handleNextStep} 
                disabled={currentStep === steps.length - 1}
              >
                Next →
              </button>
              <button className="btn" onClick={handleReset}>
                Reset
              </button>
            </div>
          </div>

          <div style={{ 
            padding: '1rem',
            background: 'var(--surface-alt)',
            borderRadius: '8px',
            marginBottom: '1rem'
          }}>
            <p style={{ margin: 0, color: 'var(--muted)' }}>
              {steps[currentStep].description}
            </p>
          </div>

          {renderVisualRectangles()}
        </>
      )}
    </div>
  )
}