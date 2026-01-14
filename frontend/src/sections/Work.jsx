import "./Work.css";

function Work() {
  return (
    <section className="work" id="work">
      <h2 className="work__title">Nuestro Trabajo</h2>

      <p className="work__subtitle">
        Un vistazo a una boda real, capturada con sensibilidad, emoción y
        atención a cada detalle.
      </p>

      <div className="work__video-container">
        <video
          className="work__video"
          src="/videos/boda.mp4"
          controls
          preload="metadata"
        />
      </div>
    </section>
  );
}

export default Work;
