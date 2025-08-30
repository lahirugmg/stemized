"use client"
import { useState } from 'react'

export default function MarketBasketSimulator() {
  const transactions = [
    ['Bread', 'Milk', 'Butter'],
    ['Bread', 'Diapers', 'Beer'],
    ['Milk', 'Diapers', 'Cookies'],
    ['Bread', 'Milk', 'Diapers', 'Beer'],
    ['Bread', 'Butter']
  ]

  const [selectedItems, setSelectedItems] = useState([])
  const [rules, setRules] = useState([])

  const allItems = ['Bread', 'Milk', 'Butter', 'Diapers', 'Beer', 'Cookies']

  function toggleItem(item) {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter(i => i !== item))
    } else {
      setSelectedItems([...selectedItems, item])
    }
  }

  function generateRules() {
    // Simple simulation: if Bread and Milk, suggest Butter
    if (selectedItems.includes('Bread') && selectedItems.includes('Milk')) {
      setRules(['If Bread and Milk → Butter (confidence: 75%)'])
    } else if (selectedItems.includes('Bread') && selectedItems.includes('Diapers')) {
      setRules(['If Bread and Diapers → Beer (confidence: 100%)'])
    } else {
      setRules(['No strong associations found with current selection.'])
    }
  }

  return (
    <div className="card">
      <h2>Market Basket Analysis Simulator</h2>
      <p>Select items from a shopping basket to see potential associations discovered through data mining.</p>
      <div style={{ margin: '1rem 0' }}>
        <h3>Sample Transactions:</h3>
        <ul>
          {transactions.map((t, i) => (
            <li key={i}>{t.join(', ')}</li>
          ))}
        </ul>
      </div>
      <div style={{ margin: '1rem 0' }}>
        <h3>Select Items:</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {allItems.map(item => (
            <button
              key={item}
              className={`btn ${selectedItems.includes(item) ? 'primary' : ''}`}
              onClick={() => toggleItem(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="actions">
        <button className="btn primary" onClick={generateRules}>Discover Associations</button>
      </div>
      {rules.length > 0 && (
        <div style={{ marginTop: '1rem' }}>
          <h3>Discovered Rules:</h3>
          <ul>
            {rules.map((rule, i) => (
              <li key={i}>{rule}</li>
            ))}
          </ul>
        </div>
      )}
      <p><strong>Concept:</strong> Association rule mining finds patterns like "customers who buy X often buy Y". This is the basis for product recommendations.</p>
    </div>
  )
}
