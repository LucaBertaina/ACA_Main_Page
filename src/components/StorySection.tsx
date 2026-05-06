export function StorySection() {
  return (
    <section className="split-section">
      <article className="story-card">
        <p className="section-label">Modelo editable</p>
        <h2>Empieza con esta base y adapta el contenido a tu propuesta en minutos.</h2>
        <p>
          Puedes reemplazar textos, imagenes y llamados a la accion sin rehacer la estructura
          principal del sitio.
        </p>
      </article>

      <article className="story-card story-card-dark" id="contact">
        <p className="section-label">CTA</p>
        <h2>Agrega tu canal de contacto y deja una landing lista para produccion.</h2>
        <p>
          Este bloque de cierre puede adaptarse a formulario, agenda de reuniones o enlace
          directo a ventas.
        </p>
        <a className="button button-light" href="mailto:hola@tudominio.com">
          hola@tudominio.com
        </a>
      </article>
    </section>
  )
}
