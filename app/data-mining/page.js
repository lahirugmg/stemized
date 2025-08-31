import Link from 'next/link'
import { getAreaBySlug, getModule } from '../../data'

export const metadata = {
  title: 'Data Mining Modules',
  description: 'Pick a Data Mining module to study.',
}

export default function DataMiningModulesPage() {
  const area = getAreaBySlug('data-mining')
  if (!area) {
    return (
      <section>
        <h1>Data Mining</h1>
        <p>Area not found.</p>
        <Link href="/">Go home</Link>
      </section>
    )
  }

  return (
    <section>
      <div className="crumbs">
        <Link href="/">Home</Link>
        <span>/</span>
        <span>Data Mining</span>
      </div>
      <h1>{area.title}</h1>
      <p>{area.description}</p>

      {area.modules && (
        <section>
          <h2>Modules</h2>
          <div className="grid">
            {area.modules.map((mod, i) => (
              <article key={mod.title} className="card hover">
                <h3 style={{ marginTop: 0 }}>{mod.title}</h3>
                <p style={{ marginTop: 0 }}>{mod.description}</p>
                <div style={{ color:'var(--muted)', fontSize:'0.9rem' }}>{mod.lessonIndexes.length} lessons</div>
                <div className="actions">
                  <Link className="btn primary" href={`/focus/${area.slug}/module/${i}`}>Open module</Link>
                  <Link className="btn" href={`/focus/${area.slug}/module/${i}/0`}>Start</Link>
                </div>
              </article>
            ))}
          </div>

          {/* Modules-only view: students pick a module to study */}
        </section>
      )}
    </section>
  )
}
