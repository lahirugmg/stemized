import Link from 'next/link'
import { getAreaBySlug } from '../../../../data/topics'
import Timeline from '../../../../components/Timeline'
import ConceptCheck from '../../../../components/ConceptCheck'
import CardSorter from '../../../../components/CardSorter'
import DataGrowthChart from '../../../../components/DataGrowthChart'
import MarketBasketSimulator from '../../../../components/MarketBasketSimulator'
import UseCaseGrid from '../../../../components/UseCaseGrid'
import FlowSteps from '../../../../components/FlowSteps'
import Accordion from '../../../../components/Accordion'
import BarChartMini from '../../../../components/BarChartMini'

export function generateStaticParams() {
  // Optional pre-rendering; safe to leave empty in dev.
  return []
}

export default function LessonPage({ params }) {
  const { slug, index } = params
  const area = getAreaBySlug(slug)
  const idx = Number(index)

  if (!area) {
    return (
      <section>
        <h1>Not found</h1>
        <p>Unknown focus area.</p>
        <Link href="/">Go back</Link>
      </section>
    )
  }

  const lesson = area.lessons[idx]
  const hasPrev = idx > 0
  const hasNext = idx < area.lessons.length - 1

  return (
    <section>
      <div className="crumbs">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href={`/focus/${area.slug}/0`}>{area.title}</Link>
        <span>/</span>
        <span>Lesson {idx + 1}</span>
      </div>

      <article className="lesson">
        <h1>{lesson.title}</h1>
        <p className="lede">{lesson.summary}</p>
        {lesson.story && (
          <div className="card">
            <h2>Story</h2>
            <p>{lesson.story}</p>
          </div>
        )}
        <div className="card">
          <h2>Concept</h2>
          <p>{lesson.concept}</p>
        </div>

        <div className="card">
          <h2>Try it</h2>
          <p>{lesson.exercise}</p>
        </div>

        {/* Optional visual/interactive blocks */}
        {lesson.timeline && (
          <Timeline title={lesson.timeline.title} items={lesson.timeline.items} />
        )}

        {lesson.visualization && lesson.visualization === 'DataGrowthChart' && (
          <DataGrowthChart />
        )}

        {lesson.simulator && lesson.simulator === 'MarketBasketSimulator' && (
          <MarketBasketSimulator />
        )}

        {lesson.quiz && (
          <ConceptCheck
            question={lesson.quiz.question}
            options={lesson.quiz.options}
            answerIndex={lesson.quiz.answerIndex}
            hint={lesson.quiz.hint}
          />
        )}

        {lesson.quiz2 && (
          <ConceptCheck
            question={lesson.quiz2.question}
            options={lesson.quiz2.options}
            answerIndex={lesson.quiz2.answerIndex}
            hint={lesson.quiz2.hint}
          />
        )}

        {lesson.sorter && (
          <CardSorter
            prompt={lesson.sorter.prompt}
            items={lesson.sorter.items}
            solution={lesson.sorter.solution}
          />
        )}

        {lesson.useCases && (
          <UseCaseGrid title={lesson.useCases.title} items={lesson.useCases.items} />
        )}

        {lesson.flow && (
          <FlowSteps title={lesson.flow.title} steps={lesson.flow.steps} />
        )}

        {lesson.terms && (
          <Accordion title={lesson.terms.title} items={lesson.terms.items} />
        )}

        {lesson.growth && (
          <BarChartMini title={lesson.growth.title} bars={lesson.growth.bars} />
        )}

        {lesson.reflection && (
          <div className="card">
            <h2>Reflect</h2>
            <p>{lesson.reflection}</p>
          </div>
        )}

        <nav className="nav">
          <div>
            {hasPrev ? (
              <Link className="btn" href={`/focus/${area.slug}/${idx - 1}`}>← Previous</Link>
            ) : (
              <span className="btn disabled">← Previous</span>
            )}
          </div>
          <div className="spacer" />
          <div>
            {hasNext ? (
              <Link className="btn primary" href={`/focus/${area.slug}/${idx + 1}`}>Next →</Link>
            ) : (
              <Link className="btn success" href={`/focus/${area.slug}/0`}>Restart</Link>
            )}
          </div>
        </nav>
      </article>
    </section>
  )
}
