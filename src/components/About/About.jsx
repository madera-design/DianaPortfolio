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
         <a href="https://wa.me/5213121023117" className={styles.contactBtnWapp}>
            WhatsApp
          </a>
          {/* <a target="_blank" href="https://www.behance.net/daeinez" className={styles.contactBtn_text}>
            Behance
          </a> */}
        </div>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p>
              Soy una diseñadora gráfica y UX/UI con más de 3 años de experiencia en la creación de prototipos, diseño web y gestión de proyectos. Licenciada en Comunicación, cuento con más de 4 años de experiencia en el ámbito digital e impreso, lo que me ha permitido desarrollar una visión integral y versátil en el campo del diseño
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p>
              Mi enfoque se centra en el diseño centrado en el usuario, especializándome en branding, diseño responsivo y la creación de interfaces de usuario para aplicaciones web y móviles. He participado en una amplia variedad de proyectos, desde el diseño de identidades visuales hasta el desarrollo de campañas publicitarias, siempre buscando ofrecer soluciones creativas y efectivas.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p>
              Mi objetivo es contribuir en entornos dinámicos donde pueda aplicar mis habilidades para crear experiencias de usuario intuitivas y atractivas, al mismo tiempo que gestiono proyectos con eficiencia y atención al detalle. Busco oportunidades que me permitan seguir creciendo profesionalmente y aportar valor a través de un diseño innovador y funcional.         </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
