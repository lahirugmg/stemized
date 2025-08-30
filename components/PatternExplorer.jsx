"use client"
import { useState } from 'react'

export default function PatternExplorer() {
  const [selectedPattern, setSelectedPattern] = useState(null)
  const [userInput, setUserInput] = useState('')
  const [results, setResults] = useState([])

  const patterns = [
    {
      id: 'association',
      name: 'Association Rules',
      icon: '🔗',
      description: 'Find items that frequently appear together',
      example: 'Customers who buy bread often buy milk',
      algorithm: 'Apriori / FP-Growth',
      useCase: 'Product recommendations, market basket analysis',
      demoData: [
        { input: 'bread, milk', output: '→ butter (confidence: 75%)' },
        { input: 'diapers, beer', output: '→ chips (confidence: 65%)' },
        { input: 'laptop, mouse', output: '→ keyboard (confidence: 80%)' }
      ]
    },
    {
      id: 'classification',
      name: 'Classification',
      icon: '📊',
      description: 'Predict categorical labels for new data',
      example: 'Will this customer churn? (Yes/No)',
      algorithm: 'Decision Trees, SVM, Neural Networks',
      useCase: 'Credit scoring, spam detection, medical diagnosis',
      demoData: [
        { input: 'Age: 25, Income: $40K, Credit Score: 650', output: 'Loan: Approved' },
        { input: 'Age: 45, Income: $80K, Credit Score: 750', output: 'Loan: Approved' },
        { input: 'Age: 30, Income: $25K, Credit Score: 580', output: 'Loan: Denied' }
      ]
    },
    {
      id: 'clustering',
      name: 'Clustering',
      icon: '🎯',
      description: 'Group similar items together',
      example: 'Segment customers into groups based on behavior',
      algorithm: 'K-Means, Hierarchical, DBSCAN',
      useCase: 'Customer segmentation, anomaly detection',
      demoData: [
        { input: 'Customer A: High spending, frequent visits', output: 'Cluster: Premium' },
        { input: 'Customer B: Medium spending, occasional visits', output: 'Cluster: Regular' },
        { input: 'Customer C: Low spending, rare visits', output: 'Cluster: Basic' }
      ]
    },
    {
      id: 'anomaly',
      name: 'Anomaly Detection',
      icon: '🚨',
      description: 'Find unusual patterns or outliers',
      example: 'Detect fraudulent credit card transactions',
      algorithm: 'Isolation Forest, One-Class SVM',
      useCase: 'Fraud detection, network security, quality control',
      demoData: [
        { input: 'Transaction: $50 at grocery store', output: 'Normal' },
        { input: 'Transaction: $5000 at jewelry store', output: 'Suspicious' },
        { input: 'Transaction: $10 at gas station', output: 'Normal' }
      ]
    }
  ]

  const handlePatternSelect = (pattern) => {
    setSelectedPattern(pattern)
    setResults([])
    setUserInput('')
  }

  const handleDemo = () => {
    if (!selectedPattern) return

    const pattern = patterns.find(p => p.id === selectedPattern)
    setResults(pattern.demoData)
  }

  const handleCustomInput = () => {
    if (!userInput.trim() || !selectedPattern) return

    // Simple simulation of pattern discovery
    const pattern = patterns.find(p => p.id === selectedPattern)
    const mockResult = {
      input: userInput,
      output: generateMockResult(selectedPattern, userInput)
    }

    setResults([mockResult, ...results])
    setUserInput('')
  }

  const generateMockResult = (patternType, input) => {
    switch (patternType) {
      case 'association':
        return `→ ${['coffee', 'cookies', 'chips', 'soda'][Math.floor(Math.random() * 4)]} (confidence: ${Math.floor(Math.random() * 40) + 60}%)`
      case 'classification':
        return ['Approved', 'Denied', 'Pending'][Math.floor(Math.random() * 3)]
      case 'clustering':
        return ['Premium', 'Regular', 'Basic', 'New'][Math.floor(Math.random() * 4)]
      case 'anomaly':
        return Math.random() > 0.7 ? 'Anomaly Detected!' : 'Normal'
      default:
        return 'Analysis complete'
    }
  }

  return (
    <div className="card">
      <h2>🔍 Interactive Pattern Discovery Explorer</h2>
      <p>Explore different data mining techniques by selecting a pattern type and seeing how it analyzes data.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
        {patterns.map((pattern) => (
          <div
            key={pattern.id}
            onClick={() => handlePatternSelect(pattern.id)}
            style={{
              padding: '1rem',
              border: `2px solid ${selectedPattern === pattern.id ? '#2196f3' : '#ddd'}`,
              borderRadius: '8px',
              background: selectedPattern === pattern.id ? '#e3f2fd' : '#fff',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{pattern.icon}</div>
            <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>{pattern.name}</h3>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>{pattern.description}</p>
          </div>
        ))}
      </div>

      {selectedPattern && (
        <div style={{ marginBottom: '1.5rem', padding: '1rem', background: '#f8f9fa', borderRadius: '8px' }}>
          {(() => {
            const pattern = patterns.find(p => p.id === selectedPattern)
            return (
              <div>
                <h3>{pattern.icon} {pattern.name} Details</h3>
                <p><strong>Example:</strong> {pattern.example}</p>
                <p><strong>Common Algorithms:</strong> {pattern.algorithm}</p>
                <p><strong>Use Cases:</strong> {pattern.useCase}</p>
              </div>
            )
          })()}
        </div>
      )}

      {selectedPattern && (
        <div style={{ marginBottom: '1.5rem' }}>
          <h3>🧪 Try It Out</h3>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
            <input
              type="text"
              placeholder="Enter sample data to analyze..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              style={{
                flex: 1,
                padding: '0.5rem',
                border: '1px solid #ddd',
                borderRadius: '4px'
              }}
            />
            <button
              className="btn primary"
              onClick={handleCustomInput}
              disabled={!userInput.trim()}
            >
              Analyze
            </button>
          </div>

          <button className="btn" onClick={handleDemo}>
            📋 Load Demo Examples
          </button>
        </div>
      )}

      {results.length > 0 && (
        <div>
          <h3>📊 Analysis Results</h3>
          <div style={{ display: 'grid', gap: '0.5rem' }}>
            {results.map((result, i) => (
              <div
                key={i}
                style={{
                  padding: '0.75rem',
                  background: '#fff',
                  border: '1px solid #dee2e6',
                  borderRadius: '4px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <span style={{ fontWeight: 'bold' }}>{result.input}</span>
                <span style={{
                  color: result.output.includes('Anomaly') ? '#dc3545' :
                         result.output.includes('Approved') || result.output.includes('Premium') ? '#28a745' :
                         '#007bff'
                }}>
                  {result.output}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#fff3cd', borderRadius: '8px', border: '1px solid #ffeaa7' }}>
        <h4 style={{ margin: '0 0 0.5rem 0', color: '#856404' }}>💡 Learning Tips:</h4>
        <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#856404', fontSize: '0.9rem' }}>
          <li>Each pattern type serves different business needs</li>
          <li>Association rules help with "what goes with what" questions</li>
          <li>Classification answers "what category does this belong to?"</li>
          <li>Clustering helps discover natural groupings in data</li>
          <li>Anomaly detection finds the "needle in the haystack" problems</li>
        </ul>
      </div>
    </div>
  )
}
