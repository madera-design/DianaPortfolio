import React from "react";

import styles from "./Projects.module.css";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Proyectos</h2>
      <div className={styles.projects}>
        <p className={styles.sub_title}>Les dejo mi portafolio en Behance para que puedan ver todos mis proyectos: 
        <a href="https://www.behance.net/daeinez" target="_blank">Behance</a>. <br/> ¡Espero que les guste!</p>
      </div>
    </section>
  );
};
