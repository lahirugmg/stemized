'use client'
import { useState, useEffect, useRef } from 'react'
import { searchContent, getSuggestedSearches } from '../lib/search'

export default function SearchBox() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [suggestions] = useState(getSuggestedSearches())
  const searchRef = useRef(null)
  const resultsRef = useRef(null)

  // Handle search
  useEffect(() => {
    if (query.trim().length >= 2) {
      const searchResults = searchContent(query, 8)
      setResults(searchResults)
      setIsOpen(true)
    } else {
      setResults([])
      setIsOpen(false)
    }
  }, [query])

  // Handle click outside to close
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsOpen(false)
      setQuery('')
    }
  }

  const handleResultClick = (result) => {
    setIsOpen(false)
    setQuery('')
    // Navigate to the result URL
    window.location.href = result.url
  }

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion)
  }

  const getTypeIcon = (type) => {
    switch (type) {
      case 'area': return '📚'
      case 'module': return '📖'
      case 'lesson': return '📝'
      default: return '📄'
    }
  }

  const getTypeLabel = (type) => {
    switch (type) {
      case 'area': return 'Focus Area'
      case 'module': return 'Module'
      case 'lesson': return 'Lesson'
      default: return 'Content'
    }
  }

  return (
    <div ref={searchRef} className="search-container">
      <div className="search-input-wrapper">
        <input
          type="text"
          placeholder="Search courses, modules, lessons..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            if (query.trim().length >= 2) setIsOpen(true)
          }}
          className="search-input"
        />
        {query && (
          <button
            onClick={() => {
              setQuery('')
              setIsOpen(false)
            }}
            className="search-clear"
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </div>

      {isOpen && (
        <div ref={resultsRef} className="search-results">
          {results.length > 0 ? (
            <>
              {results.map((result) => (
                <div
                  key={result.id}
                  className="search-result-item"
                  onClick={() => handleResultClick(result)}
                >
                  <div className="search-result-icon">
                    {getTypeIcon(result.type)}
                  </div>
                  <div className="search-result-content">
                    <div className="search-result-title">
                      {result.title}
                    </div>
                    <div className="search-result-meta">
                      <span className="search-result-type">
                        {getTypeLabel(result.type)}
                      </span>
                      <span className="search-result-area">
                        {result.area}
                        {result.module && ` → ${result.module}`}
                      </span>
                    </div>
                    {result.description && (
                      <div className="search-result-description">
                        {result.description}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </>
          ) : query.trim().length >= 2 ? (
            <div className="search-no-results">
              <div className="search-no-results-text">No results found for "{query}"</div>
              <div className="search-suggestions">
                <div className="search-suggestions-title">Try searching for:</div>
                <div className="search-suggestions-list">
                  {suggestions.slice(0, 4).map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="search-suggestion-item"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      )}
    </div>
  )
}