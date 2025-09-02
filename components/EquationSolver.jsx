"use client"
import { useState } from 'react'

export default function EquationSolver() {
  const [a, setA] = useState(2) // coefficient of x
  const [b, setB] = useState(-5) // constant term on left side
  const [c, setC] = useState(11) // right side constant
  const [currentStep, setCurrentStep] = useState(0)
  const [showSolution, setShowSolution] = useState(false)
  const [userAnswer, setUserAnswer] = useState('')
  const [showCheck, setShowCheck] = useState(false)

  const presetProblems = [
    { a: 2, b: -5, c: 11, description: '2x - 5 = 11' },
    { a: 3, b: 7, c: 22, description: '3x + 7 = 22' },
    { a: -4, b: 12, c: 4, description: '-4x + 12 = 4' },
    { a: 5, b: -3, c: 17, description: '5x - 3 = 17' },
    { a: -2, b: 8, c: 2, description: '-2x + 8 = 2' }
  ]

  const getOriginalEquation = () => {
    const leftSide = b >= 0 ? `${a}x + ${b}` : `${a}x - ${Math.abs(b)}`
    return `${leftSide} = ${c}`
  }

  const getStep1 = () => {
    // Move constant term to right side
    const newRight = c - b
    return {
      equation: `${a}x = ${newRight}`,
      operation: b >= 0 ? `Subtract ${b} from both sides` : `Add ${Math.abs(b)} to both sides`,
      work: b >= 0 ? `${c} - ${b} = ${newRight}` : `${c} + ${Math.abs(b)} = ${newRight}`
    }
  }

  const getStep2 = () => {
    const step1Result = c - b
    const solution = step1Result / a
    return {
      equation: `x = ${solution}`,
      operation: `Divide both sides by ${a}`,
      work: `${step1Result} ÷ ${a} = ${solution}`
    }
  }

  const getCheck = () => {
    const x = (c - b) / a
    const leftSubstituted = a * x + b
    return {
      substitution: `${a}(${x}) + ${b}`,
      calculation: `${a * x} + ${b} = ${leftSubstituted}`,
      isCorrect: Math.abs(leftSubstituted - c) < 0.0001
    }
  }

  const steps = [
    {
      title: 'Original Equation',
      description: 'Start with the equation in the form ax + b = c',
      content: getOriginalEquation()
    },
    {
      title: 'Isolate the Variable Term',
      description: 'Move the constant term to the right side',
      content: getStep1().equation,
      operation: getStep1().operation,
      work: getStep1().work
    },
    {
      title: 'Solve for x',
      description: 'Divide both sides by the coefficient of x',
      content: getStep2().equation,
      operation: getStep2().operation,
      work: getStep2().work
    }
  ]

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
    setShowSolution(false)
    setUserAnswer('')
    setShowCheck(false)
  }

  const handleCheckAnswer = () => {
    setShowCheck(true)
  }

  const solution = (c - b) / a
  const isUserCorrect = Math.abs(Number(userAnswer) - solution) < 0.0001

  const renderBalance = (left, right, isBalanced = true) => {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem',
        margin: '1rem 0',
        padding: '1.5rem',
        background: isBalanced ? 'var(--success-soft)' : 'var(--warning-soft)',
        borderRadius: '12px',
        border: `2px solid ${isBalanced ? 'var(--success)' : 'var(--warning)'}`
      }}>
        <div style={{
          padding: '1rem 2rem',
          background: 'var(--card)',
          borderRadius: '8px',
          border: '2px solid var(--border)',
          fontFamily: 'monospace',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          minWidth: '120px',
          textAlign: 'center'
        }}>
          {left}
        </div>
        
        <div style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          color: isBalanced ? 'var(--success)' : 'var(--warning)'
        }}>
          =
        </div>
        
        <div style={{
          padding: '1rem 2rem',
          background: 'var(--card)',
          borderRadius: '8px',
          border: '2px solid var(--border)',
          fontFamily: 'monospace',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          minWidth: '120px',
          textAlign: 'center'
        }}>
          {right}
        </div>
      </div>
    )
  }

  return (
    <div className="card">
      <h2>⚖️ Interactive Equation Solver</h2>
      <p style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
        Learn to solve linear equations step by step with visual balance representations!
      </p>

      {/* Problem Setup */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
          {presetProblems.map((problem, index) => (
            <button
              key={index}
              className="btn"
              onClick={() => {
                setA(problem.a)
                setB(problem.b)
                setC(problem.c)
                handleReset()
              }}
              style={{ fontSize: '0.9rem', fontFamily: 'monospace' }}
            >
              {problem.description}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
              Coefficient of x:
            </label>
            <input
              type="number"
              value={a}
              onChange={(e) => setA(Number(e.target.value))}
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
              Constant term:
            </label>
            <input
              type="number"
              value={b}
              onChange={(e) => setB(Number(e.target.value))}
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
              Right side:
            </label>
            <input
              type="number"
              value={c}
              onChange={(e) => setC(Number(e.target.value))}
              style={{
                width: '100%',
                padding: '0.5rem',
                border: '2px solid var(--border)',
                borderRadius: '6px'
              }}
            />
          </div>
        </div>
      </div>

      <div className="actions" style={{ marginBottom: '1.5rem' }}>
        <button className="btn primary" onClick={() => setShowSolution(true)}>
          Start Solving
        </button>
      </div>

      {showSolution && (
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

          {/* Visual Balance */}
          {currentStep === 0 && renderBalance(
            getOriginalEquation().split(' = ')[0],
            getOriginalEquation().split(' = ')[1]
          )}

          {currentStep === 1 && (
            <>
              {renderBalance(
                getOriginalEquation().split(' = ')[0],
                getOriginalEquation().split(' = ')[1]
              )}
              <div style={{ textAlign: 'center', margin: '1rem 0' }}>
                <div style={{ 
                  padding: '0.5rem 1rem', 
                  background: 'var(--accent-soft)', 
                  borderRadius: '6px', 
                  display: 'inline-block',
                  fontWeight: 600,
                  color: 'var(--accent)'
                }}>
                  {getStep1().operation}
                </div>
                <div style={{ marginTop: '0.5rem', fontFamily: 'monospace' }}>
                  Work: {getStep1().work}
                </div>
              </div>
              {renderBalance(`${a}x`, getStep1().equation.split(' = ')[1])}
            </>
          )}

          {currentStep === 2 && (
            <>
              {renderBalance(`${a}x`, getStep1().equation.split(' = ')[1])}
              <div style={{ textAlign: 'center', margin: '1rem 0' }}>
                <div style={{ 
                  padding: '0.5rem 1rem', 
                  background: 'var(--accent-soft)', 
                  borderRadius: '6px', 
                  display: 'inline-block',
                  fontWeight: 600,
                  color: 'var(--accent)'
                }}>
                  {getStep2().operation}
                </div>
                <div style={{ marginTop: '0.5rem', fontFamily: 'monospace' }}>
                  Work: {getStep2().work}
                </div>
              </div>
              {renderBalance('x', solution.toString())}
              
              <div style={{
                marginTop: '1.5rem',
                padding: '1.5rem',
                background: 'var(--success-soft)',
                borderRadius: '12px',
                textAlign: 'center'
              }}>
                <h3 style={{ margin: '0 0 1rem 0', color: 'var(--success)' }}>
                  🎉 Solution Found!
                </h3>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                  x = {solution}
                </div>

                <div style={{ marginTop: '1rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                    Try it yourself! What is x?
                  </label>
                  <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                    <input
                      type="number"
                      value={userAnswer}
                      onChange={(e) => setUserAnswer(e.target.value)}
                      placeholder="Your answer"
                      style={{
                        padding: '0.5rem',
                        border: '2px solid var(--border)',
                        borderRadius: '6px',
                        width: '120px'
                      }}
                    />
                    <button className="btn primary" onClick={handleCheckAnswer}>
                      Check
                    </button>
                  </div>
                  
                  {showCheck && (
                    <div style={{
                      marginTop: '1rem',
                      padding: '1rem',
                      background: isUserCorrect ? 'var(--success-soft)' : 'var(--warning-soft)',
                      borderRadius: '8px',
                      border: `2px solid ${isUserCorrect ? 'var(--success)' : 'var(--warning)'}`
                    }}>
                      {isUserCorrect ? (
                        <div style={{ color: 'var(--success)' }}>
                          ✅ <strong>Correct!</strong> Great job!
                        </div>
                      ) : (
                        <div style={{ color: 'var(--warning)' }}>
                          ❌ <strong>Try again.</strong> The correct answer is {solution}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </>
          )}

          {/* Verification Section */}
          {currentStep === 2 && (
            <div style={{ marginTop: '1.5rem' }}>
              <h4 style={{ color: 'var(--brand)', marginBottom: '1rem' }}>🔍 Let's verify our answer:</h4>
              <div style={{
                padding: '1rem',
                background: 'var(--surface)',
                borderRadius: '8px',
                fontFamily: 'monospace'
              }}>
                <div>Substitute x = {solution} back into the original equation:</div>
                <div style={{ margin: '0.5rem 0', color: 'var(--brand)' }}>
                  {getCheck().substitution} = {c}
                </div>
                <div style={{ color: 'var(--success)' }}>
                  {getCheck().calculation} ✓
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}