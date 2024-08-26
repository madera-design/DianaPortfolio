import React, { useEffect, useRef } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import Typed from 'typed.js';

export const Hero = () => {
  const el = useRef(null);
  useEffect(() => {
    const options = {
      strings: ["Diseño gráfico","Diseño UX/UI", "Diseño digital"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    };

    // Iniciar Typed.js en el elemento referenciado
    const typed = new Typed(el.current, options);

    // Destruir la instancia de Typed.js cuando el componente se desmonte
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hola, soy Diana Enriquez</h1>
        <p className={styles.description}>
          Soy Lic. en Comunicación con +4 años de experiencia en el <span className={styles.typed} ref={el} > </span>
        </p>
        <div className={styles.containerBtn}>
          <a download="" href="src/documents/DianaEnriquezCV.pdf" className={styles.contactBtn}>
            Descargar CV
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/profile.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      {/* <div className={styles.topBlur} />
      <div className={styles.bottomBlur} /> */}
    </section>
  );
};
