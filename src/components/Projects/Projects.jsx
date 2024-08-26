import React from "react";

import styles from "./Projects.module.css";

import projects from "../../data/en/projects.json";
import { ProjectCard } from "./ProjectCard";
import Slider from "../Slider/Slider";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Proyectos</h2>
      <div className={styles.projects}>
        <Slider />
      </div>
    </section>
  );
};
