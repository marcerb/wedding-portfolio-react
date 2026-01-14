import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <h2 className="contact__title">Contacto</h2>

        <p className="contact__subtitle">
          Cuéntanos sobre tu boda y nos pondremos en contacto contigo lo antes
          posible.
        </p>

        <form className="contact__form">
          <label className="contact__label">
            Nombre
            <input
              className="contact__input"
              type="text"
              name="name"
              placeholder="Tu nombre"
              required
            />
          </label>

          <label className="contact__label">
            Correo electrónico
            <input
              className="contact__input"
              type="email"
              name="email"
              placeholder="tucorreo@email.com"
              required
            />
          </label>

          <label className="contact__label">
            Mensaje
            <textarea
              className="contact__textarea"
              name="message"
              rows="5"
              placeholder="Cuéntanos la fecha, lugar y lo que tienes en mente…"
              required
            ></textarea>
          </label>

          <button className="contact__button" type="submit">
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
