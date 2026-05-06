import type { Feature } from '../types/landing'

type FeaturesSectionProps = {
  features: Feature[]
}

export function FeaturesSection({ features }: FeaturesSectionProps) {
  return (
    <section className="feature-grid" id="features">
      {features.map((feature, index) => (
        <article className="feature-card" key={feature.title}>
          <p className="feature-index">0{index + 1}</p>
          <h2>{feature.title}</h2>
          <p>{feature.description}</p>
        </article>
      ))}
    </section>
  )
}
