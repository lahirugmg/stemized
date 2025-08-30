import FocusCard from '../components/FocusCard'
import { focusAreas } from '../data/topics'

export default function Page() {
  return (
    <section>
      <h1>Pick a focus area</h1>
      <p>Learn STEM by focusing on one area at a time. Start with a topic below.</p>
      <div className="grid">
        {focusAreas.map((area) => (
          <FocusCard key={area.slug} area={area} />
        ))}
      </div>
    </section>
  )
}

