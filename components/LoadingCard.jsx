export default function LoadingCard({ title = "Loading..." }) {
  return (
    <div className="card loading-card">
      <div className="loading-content">
        {title && <div className="loading-title">{title}</div>}
        <div className="loading-skeleton">
          <div className="loading-line long"></div>
          <div className="loading-line medium"></div>
          <div className="loading-line short"></div>
        </div>
      </div>
      <style jsx>{`
        .loading-card {
          position: relative;
          overflow: hidden;
        }
        
        .loading-content {
          opacity: 0.7;
        }
        
        .loading-title {
          font-weight: 600;
          margin-bottom: 0.75rem;
          color: var(--muted);
        }
        
        .loading-skeleton {
          display: grid;
          gap: 0.5rem;
        }
        
        .loading-line {
          height: 1rem;
          background: linear-gradient(
            90deg,
            var(--surface) 25%,
            var(--border-light) 50%,
            var(--surface) 75%
          );
          background-size: 200% 100%;
          border-radius: 4px;
          animation: shimmer 1.5s ease-in-out infinite;
        }
        
        .loading-line.long { width: 100%; }
        .loading-line.medium { width: 75%; }
        .loading-line.short { width: 50%; }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  )
}

export function LoadingGrid({ count = 6 }) {
  return (
    <div className="grid">
      {Array.from({ length: count }, (_, i) => (
        <LoadingCard key={i} />
      ))}
    </div>
  )
}