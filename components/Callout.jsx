export default function Callout({ type = 'info', title, children }) {
  const cls = `callout ${type}`
  return (
    <div className={cls} role="note">
      {title && <div className="callout-title">{title}</div>}
      <div className="callout-body">{children}</div>
    </div>
  )
}

