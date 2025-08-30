import FocusCard from '../components/FocusCard'
import { focusAreas } from '../data'

export default function Page() {
  return (
    <section className="main-page">
      <div className="hero">
        <h1>Pick a focus area</h1>
        <p>Learn STEM by focusing on one area at a time. Start with a topic below and enjoy interactive learning with colors and animations.</p>
      </div>
      <div className="grid">
        {focusAreas.map((area) => (
          <FocusCard key={area.slug} area={area} />
        ))}
      </div>
    </section>
  )
}
