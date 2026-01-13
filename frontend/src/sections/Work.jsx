import "./Work.css";

function Work() {
  return (
    <section className="work">
      <h2 className="work__title">Nuestro Trabajo</h2>

      <p className="work__description">
        Estos son algunos momentos reales de bodas en las que hemos participado.
      </p>

      <div className="work__grid">
        <img
          className="work__image"
          src="https://via.placeholder.com/400x300"
          alt="Trabajo de boda"
        />

        <img
          className="work__image"
          src="https://via.placeholder.com/400x300"
          alt="Trabajo de boda"
        />

        <video
          className="work__video"
          controls
          src="https://www.w3schools.com/html/mov_bbb.mp4"
        />
      </div>
    </section>
  );
}

export default Work;
