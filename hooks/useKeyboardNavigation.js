"use client"
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export function useKeyboardNavigation(prevHref, nextHref, onComplete) {
  const router = useRouter()

  useEffect(() => {
    function handleKeyDown(event) {
      // Only handle if no input element is focused
      if (document.activeElement?.tagName === 'INPUT' || 
          document.activeElement?.tagName === 'TEXTAREA' ||
          document.activeElement?.contentEditable === 'true') {
        return
      }

      switch (event.key) {
        case 'ArrowLeft':
        case 'h':
          if (prevHref) {
            event.preventDefault()
            router.push(prevHref)
          }
          break
        case 'ArrowRight':
        case 'l':
          if (nextHref) {
            event.preventDefault()
            router.push(nextHref)
          }
          break
        case 'c':
        case ' ':
          if (onComplete) {
            event.preventDefault()
            onComplete()
          }
          break
        case '?':
          event.preventDefault()
          showKeyboardHelp()
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [prevHref, nextHref, onComplete, router])
}

function showKeyboardHelp() {
  const helpText = `
Keyboard Shortcuts:
← or H - Previous lesson
→ or L - Next lesson  
C or Space - Mark complete
? - Show this help
Esc - Close dialogs
  `.trim()

  // Simple alert for now - could be enhanced with a modal
  alert(helpText)
}