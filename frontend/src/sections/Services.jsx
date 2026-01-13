import "./Services.css";

function Services() {
  return (
    <section className="services">
      <h2 className="services__title">Servicios</h2>

      <div className="services__list">
        <article className="services__item">
          <h3 className="services__item-title">Paquete 1</h3>
          <p className="services__item-text">
            Capturamos cada momento especial de tu boda con un enfoque natural y
            emotivo.
          </p>
        </article>

        <article className="services__item">
          <h3 className="services__item-title">Paquete 2</h3>
          <p className="services__item-text">
            Producción de video con edición profesional para revivir tu día una
            y otra vez.
          </p>
        </article>

        <article className="services__item">
          <h3 className="services__item-title">Paquete 3</h3>
          <p className="services__item-text">
            Sesiones fotográficas previas a la boda para contar tu historia
            desde el inicio.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Services;
