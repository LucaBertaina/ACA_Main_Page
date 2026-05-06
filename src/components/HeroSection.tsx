type HeroSectionProps = {
  checkpoints: string[]
}

export function HeroSection({ checkpoints }: HeroSectionProps) {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Accion Catolica</p>
        <h1>Maqueta generica azul y blanco lista para usar.</h1>
        <p className="lead">
          Estructura inicial para mostrar un producto, servicio o marca con una estetica
          limpia, profesional y facil de personalizar.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#features">
            Ver secciones
          </a>
          <a className="button button-secondary" href="#contact">
            Solicitar info
          </a>
        </div>

        <ul className="checklist" aria-label="Beneficios principales">
          {checkpoints.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <aside className="preview-card" aria-label="Vista previa de la maqueta">
        <div className="preview-badge">Preview</div>
        <div className="preview-window">
          <div className="preview-line preview-line-large" />
          <div className="preview-line" />
          <div className="preview-line" />
          <div className="preview-stats">
            <article>
              <strong>01</strong>
              <span>Landing</span>
            </article>
            <article>
              <strong>02</strong>
              <span>CTA</span>
            </article>
            <article>
              <strong>03</strong>
              <span>Deploy</span>
            </article>
          </div>
        </div>
      </aside>
    </section>
  )
}
