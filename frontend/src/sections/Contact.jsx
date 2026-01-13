import "./Contact.css";

function Contact() {
  return (
    <section className="contact">
      <h2 className="contact__title">Contacto</h2>

      <form className="contact__form">
        <label className="contact__label">
          Nombre
          <input className="contact__input" type="text" name="name" required />
        </label>

        <label className="contact__label">
          Correo electrónico
          <input
            className="contact__input"
            type="email"
            name="email"
            required
          />
        </label>

        <label className="contact__label">
          Mensaje
          <textarea
            className="contact__textarea"
            name="message"
            rows="5"
            required
          ></textarea>
        </label>

        <button className="contact__button" type="submit">
          Enviar mensaje
        </button>
      </form>
    </section>
  );
}

export default Contact;
