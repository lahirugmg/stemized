"use client"
import { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="card" style={{ borderColor: 'var(--warning)', borderLeftWidth: '4px' }}>
          <h2 style={{ color: 'var(--warning)' }}>Something went wrong</h2>
          <p style={{ color: 'var(--muted)' }}>
            This component encountered an error. Try refreshing the page or continue with other lessons.
          </p>
          <div className="actions">
            <button 
              className="btn primary" 
              onClick={() => this.setState({ hasError: false, error: null })}
            >
              Try Again
            </button>
            <button 
              className="btn" 
              onClick={() => window.location.reload()}
            >
              Refresh Page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary