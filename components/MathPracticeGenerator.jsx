"use client"
import { useState } from 'react'

export default function MathPracticeGenerator() {
  const [currentTopic, setCurrentTopic] = useState('pemdas')
  const [currentProblem, setCurrentProblem] = useState(null)
  const [userAnswer, setUserAnswer] = useState('')
  const [showAnswer, setShowAnswer] = useState(false)
  const [score, setScore] = useState({ correct: 0, total: 0 })
  const [feedback, setFeedback] = useState('')

  const topics = {
    pemdas: {
      title: 'Order of Operations (PEMDAS)',
      description: 'Practice solving expressions using the correct order of operations',
      icon: '🧮'
    },
    distributive: {
      title: 'Distributive Property',
      description: 'Practice expanding expressions using the distributive property',
      icon: '📐'
    },
    equations: {
      title: 'Linear Equations',
      description: 'Practice solving simple linear equations',
      icon: '⚖️'
    }
  }

  const generatePEMDASProblem = () => {
    const operations = ['+', '-', '×', '÷']
    const problems = [
      // Simple PEMDAS problems
      () => {
        const a = Math.floor(Math.random() * 8) + 2
        const b = Math.floor(Math.random() * 8) + 2  
        const c = Math.floor(Math.random() * 8) + 2
        const d = Math.floor(Math.random() * 8) + 2
        const expression = `${a} + ${b} × ${c} - ${d}`
        const answer = a + (b * c) - d
        return { expression, answer, steps: [`${b} × ${c} = ${b * c}`, `${a} + ${b * c} - ${d} = ${answer}`] }
      },
      () => {
        const a = Math.floor(Math.random() * 6) + 2
        const b = Math.floor(Math.random() * 4) + 2
        const c = Math.floor(Math.random() * 3) + 2
        const expression = `(${a} + ${b}) × ${c}`
        const answer = (a + b) * c
        return { expression, answer, steps: [`${a} + ${b} = ${a + b}`, `${a + b} × ${c} = ${answer}`] }
      },
      () => {
        const a = Math.floor(Math.random() * 5) + 2
        const b = Math.floor(Math.random() * 3) + 2
        const c = Math.floor(Math.random() * 8) + 2
        const expression = `${a}² + ${b} × ${c}`
        const answer = (a * a) + (b * c)
        return { expression, answer, steps: [`${a}² = ${a * a}`, `${b} × ${c} = ${b * c}`, `${a * a} + ${b * c} = ${answer}`] }
      }
    ]
    
    const problemGenerator = problems[Math.floor(Math.random() * problems.length)]
    return problemGenerator()
  }

  const generateDistributiveProblem = () => {
    const problems = [
      () => {
        const a = Math.floor(Math.random() * 6) + 2
        const b = Math.floor(Math.random() * 8) + 1
        const c = Math.floor(Math.random() * 8) + 1
        const expression = `${a}(${b} + ${c})`
        const answer = `${a * b} + ${a * c}`
        const simplified = a * b + a * c
        return { expression, answer, simplified, steps: [`${a} × ${b} = ${a * b}`, `${a} × ${c} = ${a * c}`, `Result: ${a * b} + ${a * c} = ${simplified}`] }
      },
      () => {
        const a = Math.floor(Math.random() * 5) + 2
        const b = Math.floor(Math.random() * 8) + 3
        const c = Math.floor(Math.random() * 5) + 1
        const expression = `${a}(${b} - ${c})`
        const answer = `${a * b} - ${a * c}`
        const simplified = a * b - a * c
        return { expression, answer, simplified, steps: [`${a} × ${b} = ${a * b}`, `${a} × ${c} = ${a * c}`, `Result: ${a * b} - ${a * c} = ${simplified}`] }
      },
      () => {
        const a = Math.floor(Math.random() * 4) + 2
        const b = Math.floor(Math.random() * 6) + 1
        const c = Math.floor(Math.random() * 6) + 1
        const variable = 'x'
        const expression = `${a}(${variable} + ${b})`
        const answer = `${a}${variable} + ${a * b}`
        return { expression, answer, isAlgebraic: true, steps: [`${a} × ${variable} = ${a}${variable}`, `${a} × ${b} = ${a * b}`, `Result: ${a}${variable} + ${a * b}`] }
      }
    ]
    
    const problemGenerator = problems[Math.floor(Math.random() * problems.length)]
    return problemGenerator()
  }

  const generateEquationProblem = () => {
    const a = Math.floor(Math.random() * 6) + 2
    const b = (Math.random() > 0.5 ? 1 : -1) * (Math.floor(Math.random() * 10) + 1)
    const x_solution = Math.floor(Math.random() * 10) + 1
    const c = a * x_solution + b
    
    const expression = b >= 0 ? `${a}x + ${b} = ${c}` : `${a}x - ${Math.abs(b)} = ${c}`
    const answer = x_solution
    const steps = [
      b >= 0 ? `Subtract ${b}: ${a}x = ${c - b}` : `Add ${Math.abs(b)}: ${a}x = ${c - b}`,
      `Divide by ${a}: x = ${(c - b) / a}`
    ]
    
    return { expression, answer, steps }
  }

  const generateNewProblem = () => {
    let problem
    switch (currentTopic) {
      case 'pemdas':
        problem = generatePEMDASProblem()
        break
      case 'distributive':
        problem = generateDistributiveProblem()
        break
      case 'equations':
        problem = generateEquationProblem()
        break
      default:
        problem = generatePEMDASProblem()
    }
    
    setCurrentProblem(problem)
    setUserAnswer('')
    setShowAnswer(false)
    setFeedback('')
  }

  const checkAnswer = () => {
    if (!currentProblem) return
    
    let isCorrect = false
    const cleanUserAnswer = userAnswer.trim().toLowerCase().replace(/\s+/g, '')
    
    if (currentTopic === 'distributive' && currentProblem.isAlgebraic) {
      const cleanCorrectAnswer = currentProblem.answer.toLowerCase().replace(/\s+/g, '')
      isCorrect = cleanUserAnswer === cleanCorrectAnswer
    } else if (currentTopic === 'distributive') {
      const cleanCorrectAnswer = currentProblem.answer.toLowerCase().replace(/\s+/g, '')
      const simplifiedAnswer = currentProblem.simplified?.toString()
      isCorrect = cleanUserAnswer === cleanCorrectAnswer || userAnswer.trim() === simplifiedAnswer
    } else {
      isCorrect = Math.abs(Number(userAnswer) - Number(currentProblem.answer)) < 0.0001
    }
    
    const newScore = {
      correct: score.correct + (isCorrect ? 1 : 0),
      total: score.total + 1
    }
    setScore(newScore)
    
    if (isCorrect) {
      setFeedback('🎉 Correct! Great job!')
    } else {
      setFeedback(`❌ Not quite. The correct answer is: ${currentProblem.answer}`)
    }
    
    setShowAnswer(true)
  }

  const resetScore = () => {
    setScore({ correct: 0, total: 0 })
  }

  return (
    <div className="card">
      <h2>🎯 Math Practice Generator</h2>
      <p style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
        Generate unlimited practice problems to master math foundations!
      </p>

      {/* Topic Selection */}
      <div style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ marginBottom: '1rem', color: 'var(--brand)' }}>Choose a topic:</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          {Object.entries(topics).map(([key, topic]) => (
            <button
              key={key}
              className={`card hover interactive ${currentTopic === key ? 'selected' : ''}`}
              onClick={() => {
                setCurrentTopic(key)
                setCurrentProblem(null)
                setUserAnswer('')
                setShowAnswer(false)
                setFeedback('')
              }}
              style={{
                padding: '1rem',
                border: currentTopic === key ? '3px solid var(--brand)' : '2px solid var(--border)',
                background: currentTopic === key ? 'var(--brand-soft)' : 'var(--card)',
                textAlign: 'left',
                cursor: 'pointer'
              }}
            >
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{topic.icon}</div>
              <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--text)' }}>{topic.title}</h4>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--muted)' }}>{topic.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Score Display */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1.5rem',
        padding: '1rem',
        background: 'var(--surface)',
        borderRadius: '8px'
      }}>
        <div>
          <strong>Score: {score.correct}/{score.total}</strong>
          {score.total > 0 && (
            <span style={{ marginLeft: '1rem', color: 'var(--muted)' }}>
              ({Math.round((score.correct / score.total) * 100)}% accuracy)
            </span>
          )}
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button className="btn primary" onClick={generateNewProblem}>
            New Problem
          </button>
          <button className="btn" onClick={resetScore}>
            Reset Score
          </button>
        </div>
      </div>

      {/* Current Problem */}
      {currentProblem && (
        <div style={{
          padding: '2rem',
          background: 'var(--card)',
          border: '3px solid var(--brand)',
          borderRadius: '12px',
          marginBottom: '1rem'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <h3 style={{ color: 'var(--brand)', marginBottom: '1rem' }}>
              {topics[currentTopic].icon} {topics[currentTopic].title}
            </h3>
            <div style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              fontFamily: 'monospace',
              padding: '1rem',
              background: 'var(--surface)',
              borderRadius: '8px',
              border: '2px solid var(--border)'
            }}>
              {currentProblem.expression}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '1rem' }}>
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder={currentTopic === 'distributive' && currentProblem.isAlgebraic ? 'e.g., 3x + 6' : 'Your answer'}
              style={{
                padding: '0.75rem',
                fontSize: '1.1rem',
                border: '2px solid var(--border)',
                borderRadius: '8px',
                width: '200px',
                textAlign: 'center',
                fontFamily: currentTopic === 'distributive' ? 'monospace' : 'inherit'
              }}
              onKeyPress={(e) => e.key === 'Enter' && !showAnswer && checkAnswer()}
            />
            {!showAnswer && (
              <button className="btn primary" onClick={checkAnswer} disabled={!userAnswer.trim()}>
                Check Answer
              </button>
            )}
          </div>

          {/* Feedback */}
          {feedback && (
            <div style={{
              padding: '1rem',
              marginBottom: '1rem',
              borderRadius: '8px',
              textAlign: 'center',
              fontWeight: 'bold',
              background: feedback.includes('Correct') ? 'var(--success-soft)' : 'var(--warning-soft)',
              color: feedback.includes('Correct') ? 'var(--success)' : 'var(--warning)',
              border: `2px solid ${feedback.includes('Correct') ? 'var(--success)' : 'var(--warning)'}`
            }}>
              {feedback}
            </div>
          )}

          {/* Solution Steps */}
          {showAnswer && currentProblem.steps && (
            <div style={{
              padding: '1rem',
              background: 'var(--surface)',
              borderRadius: '8px',
              border: '2px solid var(--border)'
            }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--brand)' }}>Solution Steps:</h4>
              <ol style={{ margin: 0, paddingLeft: '1.5rem' }}>
                {currentProblem.steps.map((step, index) => (
                  <li key={index} style={{ marginBottom: '0.5rem', fontFamily: 'monospace' }}>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          )}

          {showAnswer && (
            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
              <button className="btn primary" onClick={generateNewProblem}>
                Next Problem →
              </button>
            </div>
          )}
        </div>
      )}

      {/* Instructions */}
      {!currentProblem && (
        <div style={{
          padding: '1.5rem',
          background: 'var(--brand-soft)',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{topics[currentTopic].icon}</div>
          <h3 style={{ color: 'var(--brand)', marginBottom: '1rem' }}>{topics[currentTopic].title}</h3>
          <p style={{ marginBottom: '1.5rem', color: 'var(--muted)' }}>{topics[currentTopic].description}</p>
          <button className="btn primary" onClick={generateNewProblem}>
            Generate First Problem
          </button>
        </div>
      )}
    </div>
  )
}