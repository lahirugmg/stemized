import Link from 'next/link'
import { getAreaBySlug, getModule } from '../../../../../data/topics'

export default function ModuleIndex({ params }) {
  const { slug, m } = params
  const area = getAreaBySlug(slug)
  const mod = getModule(slug, Number(m))
  if (!area || !mod) {
    return (
      <section>
        <h1>Not found</h1>
        <p>Unknown focus area or module.</p>
        <Link href="/">Go back</Link>
      </section>
    )
  }
  return (
    <section>
      <div className="crumbs">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href={`/focus/${area.slug}`}>{area.title}</Link>
        <span>/</span>
        <span>{mod.title}</span>
      </div>
      <h1>{mod.title}</h1>
      <p>{mod.description}</p>
      <ol className="list">
        {mod.lessons.map((l, i) => (
          <li key={l.title} className="list-item">
            <Link href={`/focus/${area.slug}/module/${m}/${i}`}>{i + 1}. {l.title}</Link>
          </li>
        ))}
      </ol>
      <div className="actions">
        <Link className="btn primary" href={`/focus/${area.slug}/module/${m}/0`}>Start module</Link>
      </div>
    </section>
  )
}

