import Link from 'next/link'
import { getAreaBySlug, getModule } from '../../../data'
import FocusAreaProgress from '../../../components/FocusAreaProgress'

export default function FocusIndex({ params }) {
  const area = getAreaBySlug(params.slug)
  if (!area) {
    return (
      <section>
        <h1>Not found</h1>
        <p>Unknown focus area.</p>
        <Link href="/">Go back</Link>
      </section>
    )
  }
  return (
    <section>
      <h1>{area.title}</h1>
      <p>{area.description}</p>
      <FocusAreaProgress areaSlug={area.slug} count={area.lessons.length} />
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

          {/* For Data Mining, show lesson cards by module below */}
          {area.slug === 'data-mining' && (
            <div style={{ marginTop: '1.5rem' }}>
              {area.modules.map((mod, i) => {
                const fullMod = getModule(area.slug, i)
                if (!fullMod || !fullMod.lessons || fullMod.lessons.length === 0) return null
                return (
                  <section key={`module-lessons-${i}`} style={{ marginTop: '1rem' }}>
                    <h3 style={{ marginTop: 0 }}>{fullMod.title}</h3>
                    <div className="grid">
                      {fullMod.lessons.map((l, j) => (
                        <article key={`${i}-${j}`} className="card hover">
                          <h4 style={{ marginTop: 0 }}>{l.title}</h4>
                          {l.summary && <p style={{ marginTop: 0 }}>{l.summary}</p>}
                          <div className="actions">
                            <Link className="btn" href={`/focus/${area.slug}/module/${i}/${j}`}>Open lesson</Link>
                          </div>
                        </article>
                      ))}
                    </div>
                  </section>
                )
              })}
            </div>
          )}
        </section>
      )}
      {/* Keep global lesson index list for continuity */}
      <ol className="list">
        {area.lessons.map((l, i) => (
          <li key={`${l.title}-${i}`} className="list-item">
            <Link href={`/focus/${area.slug}/${i}`}>{i + 1}. {l.title}</Link>
          </li>
        ))}
      </ol>
      <div className="actions">
        <Link className="btn primary" href={`/focus/${area.slug}/0`}>Start learning</Link>
      </div>
    </section>
  )
}
