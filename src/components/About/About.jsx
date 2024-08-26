import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Acerca de mí</h2>
      <div className={styles.content}>
        <div className={styles.contentImg}>
        <img
          src={getImageUrl("hero/profile.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <a download="" href="src/documents/DianaEnriquezCV.pdf" className={styles.contactBtn}>
            Descargar CV
          </a>
        </div>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p>
              Soy diseñadora gráfica y de UX/UI con 4 años de experiencia en el ámbito digital e impreso. He participado en una amplia variedad de proyectos, incluyendo el diseño de identidades visuales, la creación de interfaces de usuario para aplicaciones web y móviles, y el desarrollo de campañas publicitarias.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p>
              Me caracterizo por ser responsable, proactiva y poseer excelentes habilidades de comunicación, lo que me permite trabajar de manera eficiente y organizada en equipo. A lo largo de mi carrera, he colaborado con equipos multidisciplinarios para desarrollar productos innovadores y centrados en el usuario.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p>
              Mi enfoque se basa en una investigación exhaustiva del usuario, asegurando que cada diseño sea no solo estéticamente atractivo, sino también funcional y accesible. Mi pasión por el diseño y la creatividad me impulsa a seguir aprendiendo y mejorando constantemente, buscando siempre nuevas formas de resolver problemas y crear experiencias memorables para los usuarios.              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
