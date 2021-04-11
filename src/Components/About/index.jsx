import React from "react";
import styles from "./styles.scss";

export default ({ id }) => (
  <div id={id} className={styles.root}>
    <div className={styles.backgroundTop}></div>
    <div className={styles.content}>
      <p className={styles.text}>
        Hola soy Juanse, graduado como diseñador y desarrollador web de
        profesión,vivo en Sabaneta, Colombia. Creo que mis habilidades en
        desarrollo y conocimientos en diseño me hacen alguien capaz de trabajar
        muy bien con personas diseñadores y dar interactividad a las ideas mas
        creativas. Me gusta utilizar mis habilidades de desarrollo y
        conocimientos de diseño para crear paginas visualmente divertidas :D. Me
        gusta muchos trabajar en proyectos con mucho contenido multimedia donde
        escribir código de una forma elegante y eficiente.
      </p>
    </div>
    <div className={styles.backgroundBottom}></div>
  </div>
);
