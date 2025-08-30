"use client"
import { useState, useEffect } from 'react'

export default function Notification({ message, type = 'info', duration = 3000, onClose }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
      setTimeout(() => onClose?.(), 300) // Allow fade out animation
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  const typeStyles = {
    success: { 
      background: 'var(--success-soft)', 
      color: 'var(--success)', 
      borderColor: 'var(--success)' 
    },
    info: { 
      background: 'var(--brand-soft)', 
      color: 'var(--brand)', 
      borderColor: 'var(--brand)' 
    },
    warning: { 
      background: 'var(--warning-soft)', 
      color: 'var(--warning)', 
      borderColor: 'var(--warning)' 
    }
  }

  if (!visible) return null

  return (
    <div 
      className={`notification ${visible ? 'notification-enter' : 'notification-exit'}`}
      style={{
        position: 'fixed',
        top: '2rem',
        right: '2rem',
        padding: '1rem',
        borderRadius: '8px',
        border: '1px solid',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        zIndex: 1000,
        maxWidth: '400px',
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
        opacity: visible ? 1 : 0,
        transition: 'all 0.3s ease',
        ...typeStyles[type]
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span>{message}</span>
        <button
          onClick={() => {
            setVisible(false)
            setTimeout(() => onClose?.(), 300)
          }}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            marginLeft: '1rem',
            fontSize: '1.2rem',
            color: 'inherit',
            opacity: 0.7
          }}
        >
          ×
        </button>
      </div>
    </div>
  )
}

export function useNotification() {
  const [notification, setNotification] = useState(null)

  const showNotification = (message, type = 'info', duration = 3000) => {
    setNotification({ message, type, duration, id: Date.now() })
  }

  const hideNotification = () => {
    setNotification(null)
  }

  return {
    notification,
    showNotification,
    hideNotification,
    NotificationComponent: notification ? (
      <Notification
        key={notification.id}
        message={notification.message}
        type={notification.type}
        duration={notification.duration}
        onClose={hideNotification}
      />
    ) : null
  }
}