import "./Services.css";

function Services() {
  return (
    <section className="services" id="services">
      <h2 className="services__title">Servicios</h2>

      <div className="services__list">
        {/* PAQUETE 1 */}
        <article className="services__item services__item--one">
          <h3 className="services__item-title">Paquete 1</h3>

          <ul className="services__details">
            <li>1 fotógrafo</li>
            <li>1 videógrafo</li>
            <li>120 fotografías editadas en alta calidad</li>
            <li>Entrega digital</li>
            <li>Video “tráiler de boda” (máx. 12 minutos)</li>
            <li>Entrega de todo el material sin editar</li>
          </ul>

          <p className="services__price">$ 1.800.000</p>
        </article>

        {/* PAQUETE 2 */}
        <article className="services__item services__item--two">
          <h3 className="services__item-title">Paquete 2</h3>

          <ul className="services__details">
            <li>1 fotógrafo</li>
            <li>1 videógrafo</li>
            <li>120 fotografías editadas en alta calidad</li>
            <li>Entrega digital</li>
            <li>Video “tráiler de boda” (máx. 12 minutos)</li>
            <li>Incluye tomas con drone</li>
            <li>Entrega de todo el material sin editar</li>
          </ul>

          <p className="services__price">$ 2.000.000</p>
        </article>

        {/* PAQUETE 3 */}
        <article className="services__item services__item--three">
          <h3 className="services__item-title">Paquete 3</h3>

          <ul className="services__details">
            <li>1 fotógrafo</li>
            <li>1 videógrafo</li>
            <li>Sesión pre boda (15 fotos digitales)</li>
            <li>Video de invitación (máx. 3 minutos)</li>
            <li>120 fotografías editadas en alta calidad</li>
            <li>Video “tráiler de boda” (máx. 12 minutos)</li>
            <li>Incluye tomas con drone</li>
            <li>Entrega de todo el material sin editar</li>
          </ul>

          <p className="services__price">$ 2.300.000</p>
        </article>
      </div>
    </section>
  );
}

export default Services;
