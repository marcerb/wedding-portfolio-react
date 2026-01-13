import { useEffect, useState } from "react";
import { getWeddingPhotos } from "../utils/unsplashApi";
import "./Gallery.css";

function Gallery() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getWeddingPhotos()
      .then((data) => {
        setPhotos(data.results);
      })
      .catch(() => {
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Cargando galería...</p>;
  }

  if (hasError) {
    return <p>Lo sentimos, ocurrió un error al cargar las imágenes.</p>;
  }

  return (
    <section className="gallery">
      <h2 className="gallery__title">Galería</h2>

      <div className="gallery__grid">
        {photos.map((photo) => (
          <img
            className="gallery__image"
            key={photo.id}
            src={photo.urls.small}
            alt={photo.alt_description || "Fotografía de boda"}
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;
