import Link from 'next/link'
import { getAreaBySlug, getModule } from '../../../../../../data/topics'
import Timeline from '../../../../../../components/Timeline'
import ConceptCheck from '../../../../../../components/ConceptCheck'
import CardSorter from '../../../../../../components/CardSorter'
import DataGrowthChart from '../../../../../../components/DataGrowthChart'
import MarketBasketSimulator from '../../../../../../components/MarketBasketSimulator'
import UseCaseGrid from '../../../../../../components/UseCaseGrid'
import FlowSteps from '../../../../../../components/FlowSteps'
import Accordion from '../../../../../../components/Accordion'
import BarChartMini from '../../../../../../components/BarChartMini'
import MultiCategorySorter from '../../../../../../components/MultiCategorySorter'
import SimilarityPlayground from '../../../../../../components/SimilarityPlayground'
import LessonProgress from '../../../../../../components/LessonProgress'
import OrderList from '../../../../../../components/OrderList'
import Flashcards from '../../../../../../components/Flashcards'
import ShortAnswer from '../../../../../../components/ShortAnswer'

export default function ModuleLessonPage({ params }) {
  const { slug, m, index } = params
  const area = getAreaBySlug(slug)
  const mod = getModule(slug, Number(m))
  const idx = Number(index)

  if (!area || !mod) {
    return (
      <section>
        <h1>Not found</h1>
        <p>Unknown focus area or module.</p>
        <Link href="/">Go back</Link>
      </section>
    )
  }

  const lesson = mod.lessons[idx]
  const hasPrev = idx > 0
  const hasNext = idx < mod.lessons.length - 1

  return (
    <section>
      <div className="crumbs">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href={`/focus/${area.slug}`}>{area.title}</Link>
        <span>/</span>
        <Link href={`/focus/${area.slug}/module/${m}`}>{mod.title}</Link>
        <span>/</span>
        <span>Lesson {idx + 1}</span>
      </div>

      <article className="lesson">
        <h1>{lesson.title}</h1>
        <p className="lede">{lesson.summary}</p>
        <LessonProgress areaSlug={area.slug} index={idx} />
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

        {lesson.timeline && (
          <Timeline title={lesson.timeline.title} items={lesson.timeline.items} />
        )}
        {lesson.visualization === 'DataGrowthChart' && (
          <DataGrowthChart />
        )}
        {lesson.simulator === 'MarketBasketSimulator' && (
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

        {lesson.sorter && (() => {
          const keys = Object.keys(lesson.sorter.solution || {})
          const isBinary = keys.length === 2 && keys.map(k => k.toLowerCase()).sort().join(',') === 'benefits,challenges'
          return isBinary ? (
            <CardSorter prompt={lesson.sorter.prompt} items={lesson.sorter.items} solution={lesson.sorter.solution} />
          ) : (
            <MultiCategorySorter title={lesson.sorter.prompt} categories={keys} items={lesson.sorter.items} solution={lesson.sorter.solution} />
          )
        })()}

        {lesson.categorize && (
          <MultiCategorySorter title={lesson.categorize.title} categories={lesson.categorize.categories} items={lesson.categorize.items} solution={lesson.categorize.solution} />
        )}

        {lesson.order && (
          <OrderList title={lesson.order.title} items={lesson.order.items} solution={lesson.order.solution} />
        )}

        {lesson.flashcards && (
          <Flashcards title={lesson.flashcards.title} cards={lesson.flashcards.cards} />
        )}

        {lesson.shortAnswer && (
          <ShortAnswer prompt={lesson.shortAnswer.prompt} expectedKeywords={lesson.shortAnswer.expectedKeywords} sample={lesson.shortAnswer.sample} />
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
        {lesson.similarityPlayground && (
          <SimilarityPlayground />
        )}

        <nav className="nav">
          <div>
            {hasPrev ? (
              <Link className="btn" href={`/focus/${area.slug}/module/${m}/${idx - 1}`}>← Previous</Link>
            ) : (
              <span className="btn disabled">← Previous</span>
            )}
          </div>
          <div className="spacer" />
          <div>
            {hasNext ? (
              <Link className="btn primary" href={`/focus/${area.slug}/module/${m}/${idx + 1}`}>Next →</Link>
            ) : (
              <Link className="btn success" href={`/focus/${area.slug}/module/${m}`}>Module Index</Link>
            )}
          </div>
        </nav>
      </article>
    </section>
  )
}

