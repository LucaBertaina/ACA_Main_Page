import './App.css'
import { FeaturesSection } from './components/FeaturesSection'
import { HeroSection } from './components/HeroSection'
import { StorySection } from './components/StorySection'
import { TopBar } from './components/TopBar'
import { checkpoints, features } from './data/landingContent'

function App() {
  return (
    <main className="page-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <TopBar />
      <HeroSection checkpoints={checkpoints} />
      <FeaturesSection features={features} />
      <StorySection />
    </main>
  )
}

export default App
