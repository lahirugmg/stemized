'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Timeline from '../../../../components/Timeline'
import ConceptCheck from '../../../../components/ConceptCheck'
import CardSorter from '../../../../components/CardSorter'
import DataGrowthChart from '../../../../components/DataGrowthChart'
import MarketBasketSimulator from '../../../../components/MarketBasketSimulator'
import UseCaseGrid from '../../../../components/UseCaseGrid'
import FlowSteps from '../../../../components/FlowSteps'
import Accordion from '../../../../components/Accordion'
import BarChartMini from '../../../../components/BarChartMini'
import MultiCategorySorter from '../../../../components/MultiCategorySorter'
import SimilarityPlayground from '../../../../components/SimilarityPlayground'
import LessonProgress from '../../../../components/LessonProgress'
import OrderList from '../../../../components/OrderList'
import Flashcards from '../../../../components/Flashcards'
import ShortAnswer from '../../../../components/ShortAnswer'
import ConceptHighlighter from '../../../../components/ConceptHighlighter'
import Callout from '../../../../components/Callout'
import Reveal from '../../../../components/Reveal'
import PEMDASCalculator from '../../../../components/PEMDASCalculator'
import DistributiveVisualizer from '../../../../components/DistributiveVisualizer'
import EquationSolver from '../../../../components/EquationSolver'
import MathPracticeGenerator from '../../../../components/MathPracticeGenerator'
import ExpressionTree from '../../../../components/ExpressionTree'
import AreaModelVisualizer from '../../../../components/AreaModelVisualizer'
import NumberLineEquation from '../../../../components/NumberLineEquation'
import AreaPerimeterExplorer from '../../../../components/AreaPerimeterExplorer'
import ErrorBoundary from '../../../../components/ErrorBoundary'
import FunctionGrapher from '../../../../components/FunctionGrapher'
import { useKeyboardNavigation } from '../../../../hooks/useKeyboardNavigation'
import { setProgress } from '../../../../lib/progress'

export default function LessonPageClient({ area, lesson, idx, totalLessons }) {
  const [showKeyboardHint, setShowKeyboardHint] = useState(false)

  useEffect(() => {
    const hasSeenHint = localStorage.getItem('keyboardHintSeen')
    if (!hasSeenHint) {
      const timer = setTimeout(() => {
        setShowKeyboardHint(true)
        localStorage.setItem('keyboardHintSeen', 'true')
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [])

  const hasPrev = idx > 0
  const hasNext = idx < area.lessons.length - 1
  
  const prevHref = hasPrev ? `/focus/${area.slug}/${idx - 1}` : null
  const nextHref = hasNext ? `/focus/${area.slug}/${idx + 1}` : null
  
  const handleComplete = () => {
    setProgress(area.slug, idx, { completed: true })
    window.dispatchEvent(new CustomEvent('progressUpdate'))
  }

  useKeyboardNavigation(prevHref, nextHref, handleComplete)

  return (
    <section data-theme={area.theme}>
      <div className="crumbs">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href={`/focus/${area.slug}/0`}>{area.title}</Link>
        <span>/</span>
        <span>Lesson {idx + 1}</span>
      </div>

      {showKeyboardHint && (
        <div className="callout info" style={{ marginBottom: '1rem' }}>
          <div className="callout-title">💡 Keyboard Navigation</div>
          Use ← → arrow keys or H/L to navigate lessons. Press C or Space to mark complete. Press ? for help.
          <button 
            style={{ 
              float: 'right', 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer',
              fontSize: '1.2rem',
              color: 'var(--muted)'
            }}
            onClick={() => setShowKeyboardHint(false)}
          >
            ×
          </button>
        </div>
      )}

      <article className="lesson">
        <h1>{lesson.title}</h1>
        <p className="lede">{lesson.summary}</p>
        <LessonProgress areaSlug={area.slug} index={idx} totalLessons={totalLessons} />
        
        {lesson.story && (
          <div className="card interactive">
            <h2>Story</h2>
            <p>{lesson.story}</p>
          </div>
        )}
        
        <div className="card interactive">
          <h2>Concept</h2>
          {lesson.keywords ? (
            <ConceptHighlighter text={lesson.concept} keywords={lesson.keywords} />
          ) : (
            <p>{lesson.concept}</p>
          )}
        </div>

        <div className="card interactive">
          <h2>Try it</h2>
          <p>{lesson.exercise}</p>
        </div>

        {/* Math foundation specific visual aids */}
        {lesson.interactiveCalculator && (
          <ErrorBoundary>
            <PEMDASCalculator />
          </ErrorBoundary>
        )}
        {lesson.expressionTree && (
          <ErrorBoundary>
            <ExpressionTree />
          </ErrorBoundary>
        )}
        {lesson.distributiveVisualizer && (
          <ErrorBoundary>
            <DistributiveVisualizer />
          </ErrorBoundary>
        )}
        {lesson.areaModel && (
          <ErrorBoundary>
            <AreaModelVisualizer />
          </ErrorBoundary>
        )}
        {lesson.areaPerimeter && (
          <ErrorBoundary>
            <AreaPerimeterExplorer />
          </ErrorBoundary>
        )}
        {lesson.equationSolver && (
          <ErrorBoundary>
            <EquationSolver />
          </ErrorBoundary>
        )}
        {lesson.functionGrapher && (
          <ErrorBoundary>
            <FunctionGrapher />
          </ErrorBoundary>
        )}
        {lesson.numberLine && (
          <ErrorBoundary>
            <NumberLineEquation />
          </ErrorBoundary>
        )}
        {lesson.practiceGenerator && (
          <ErrorBoundary>
            <MathPracticeGenerator />
          </ErrorBoundary>
        )}

        {lesson.solution && (
          <Reveal label="Show sample solution">
            {lesson.solution}
          </Reveal>
        )}

        {/* Optional visual/interactive blocks */}
        {lesson.timeline && (
          <ErrorBoundary>
            <Timeline title={lesson.timeline.title} items={lesson.timeline.items} />
          </ErrorBoundary>
        )}

        {lesson.visualization && lesson.visualization === 'DataGrowthChart' && (
          <ErrorBoundary>
            <DataGrowthChart />
          </ErrorBoundary>
        )}

        {lesson.simulator && lesson.simulator === 'MarketBasketSimulator' && (
          <ErrorBoundary>
            <MarketBasketSimulator />
          </ErrorBoundary>
        )}

        {lesson.quiz && (
          <ErrorBoundary>
            <ConceptCheck
              question={lesson.quiz.question}
              options={lesson.quiz.options}
              answerIndex={lesson.quiz.answerIndex}
              hint={lesson.quiz.hint}
            />
          </ErrorBoundary>
        )}

        {lesson.quiz2 && (
          <ErrorBoundary>
            <ConceptCheck
              question={lesson.quiz2.question}
              options={lesson.quiz2.options}
              answerIndex={lesson.quiz2.answerIndex}
              hint={lesson.quiz2.hint}
            />
          </ErrorBoundary>
        )}

        {lesson.sorter && (() => {
          const keys = Object.keys(lesson.sorter.solution || {})
          const isBinary = keys.length === 2 && keys.map(k => k.toLowerCase()).sort().join(',') === 'benefits,challenges'
          return (
            <ErrorBoundary>
              {isBinary ? (
                <CardSorter
                  prompt={lesson.sorter.prompt}
                  items={lesson.sorter.items}
                  solution={lesson.sorter.solution}
                />
              ) : (
                <MultiCategorySorter
                  title={lesson.sorter.prompt}
                  categories={keys}
                  items={lesson.sorter.items}
                  solution={lesson.sorter.solution}
                />
              )}
            </ErrorBoundary>
          )
        })()}

        {lesson.categorize && (
          <ErrorBoundary>
            <MultiCategorySorter
              title={lesson.categorize.title}
              categories={lesson.categorize.categories}
              items={lesson.categorize.items}
              solution={lesson.categorize.solution}
            />
          </ErrorBoundary>
        )}

        {lesson.callouts && lesson.callouts.length > 0 && (
          <div style={{ display:'grid', gap:'0.5rem' }}>
            {lesson.callouts.map((c, i) => (
              <Callout key={i} type={c.type} title={c.title}>{c.body}</Callout>
            ))}
          </div>
        )}

        {lesson.order && (
          <ErrorBoundary>
            <OrderList title={lesson.order.title} items={lesson.order.items} solution={lesson.order.solution} />
          </ErrorBoundary>
        )}

        {lesson.flashcards && (
          <ErrorBoundary>
            <Flashcards title={lesson.flashcards.title} cards={lesson.flashcards.cards} />
          </ErrorBoundary>
        )}

        {lesson.shortAnswer && (
          <ErrorBoundary>
            <ShortAnswer prompt={lesson.shortAnswer.prompt} expectedKeywords={lesson.shortAnswer.expectedKeywords} sample={lesson.shortAnswer.sample} />
          </ErrorBoundary>
        )}

        {lesson.useCases && (
          <ErrorBoundary>
            <UseCaseGrid title={lesson.useCases.title} items={lesson.useCases.items} />
          </ErrorBoundary>
        )}

        {lesson.flow && (
          <ErrorBoundary>
            <FlowSteps title={lesson.flow.title} steps={lesson.flow.steps} />
          </ErrorBoundary>
        )}

        {lesson.terms && (
          <ErrorBoundary>
            <Accordion title={lesson.terms.title} items={lesson.terms.items} />
          </ErrorBoundary>
        )}

        {lesson.growth && (
          <ErrorBoundary>
            <BarChartMini title={lesson.growth.title} bars={lesson.growth.bars} />
          </ErrorBoundary>
        )}

        {lesson.reflection && (
          <div className="card interactive">
            <h2>Reflect</h2>
            <p>{lesson.reflection}</p>
          </div>
        )}

        {lesson.similarityPlayground && (
          <ErrorBoundary>
            <SimilarityPlayground />
          </ErrorBoundary>
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
