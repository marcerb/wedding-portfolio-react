import { useEffect, useState } from "react";

import hero1 from "../assets/hero/hero-1.jpg";
import hero2 from "../assets/hero/hero-2.jpg";
import hero3 from "../assets/hero/hero-3.jpg";
import hero4 from "../assets/hero/hero-4.jpg";
import hero5 from "../assets/hero/hero-5.jpg";
import hero6 from "../assets/hero/hero-6.jpg";

import "./Hero.css";

function Hero() {
  const images = [hero1, hero2, hero3, hero4, hero5, hero6];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="hero"
      className="hero"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div className="hero__overlay">
        <h1 className="hero__title">Fotografía y Video para Bodas</h1>
      </div>
    </section>
  );
}

export default Hero;
