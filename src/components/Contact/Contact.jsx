import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contacto</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:denriquezbx@gmail.com">denriquezbx@gmail.com</a>
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/dianaenriquezb/">dianaenriquezb</a>
        </li>
        <li className={styles.link}>
          <a href="https://wa.me/5213121023117">+ 52 1 312 102 3117</a>     
        </li>
        <li className={styles.link}>
          <a target="_blank" href="https://www.behance.net/daeinez">Behance</a>
        </li>
      </ul>
    </footer>
  );
};
