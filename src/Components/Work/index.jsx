import React from "react";
import styles from "./styles.scss";
import imageOne from '../../Assets/image-1.jpg';
import imageTwo from '../../Assets/image-2.jpg';
import imageThree from '../../Assets/image-3.jpg';

export default () => {
  return (
    <div className={styles.root}>
      <div className={styles.imageContainer}>
        <img src={imageOne} className={styles.image} />
      </div>
      <section className={styles.content}>
        <h3 className={styles.title}>
          Huge - <span>Current job</span>
        </h3>
        <p className={styles.text}>
          Soy desarrollador web en proyectos para Google. Estoy encargado de
          mantener e implementar nuevos diseños para mejorar la experiencia de
          usuario en páginas y aplicaciones que reciben una gran cantidad de
          visitas diarias, conservando un mínimo de accesibilidad (AA) y alto
          nivel performance para poder llegar a usuarios en todo el mundo.
        </p>
        <ul className={styles.list}>
          <li className={styles.item}>
            Desarrollo componentes para visualizar todo tipo de contenido
            multimedia.
          </li>
          <li className={styles.item}>
            Realizo pruebas de concepto para presentar propuestas al cliente.
          </li>
          <li className={styles.item}>
            He liderado estrategias de pruebas en las aplicaciones.
          </li>
          <li className={styles.item}>
            He reestructurado proyectos para mejorar la escalabilidad y
            mantenibilidad del proyecto
          </li>
        </ul>
        <p className={styles.text}>
          Mis herramientas mas utilizadas son HTML, CSS y JavaScript. En algunos
          proyectos también he hecho uso de Preact, una versión mas ligera y
          libre de Reactjs, TweenLite y Sass. También, participe en un proyecto
          que utilizaba Svelte un framework de JavaScript.
        </p>
      </section>
      <section className={styles.content}>
        <h3 className={styles.title}>PSL</h3>
        <p className={styles.text}>
          Trabaje como desarrollador web utilizando tecnologías como React,
          Redux, PostCss, Sass y Webpack. Mis herramientas principales son HTML,
          CSS y JavaScript con las que desarrolle soluciones para los clientes.
        </p>
        <ul className={styles.list}>
          <li className={styles.item}>
            Desarrolle componentes reutilizares en React y PostCss.
          </li>
          <li className={styles.item}>
            Realice mejoras en la estructura de los proyectos para mejorar
            escalabilidad.
          </li>
          <li className={styles.item}>
            Aplique técnicas avanzadas de pruebas y automatización de análisis
            estático de código.
          </li>
          <li className={styles.item}>
            Contribuí a la definición del manejo y estructura de datos en una
            app.
          </li>
          <li className={styles.item}>
            Optimicé el uso de CSS y aplique las mejoras visuales del resultado
            de una investigación de experiencia de usuario hecho por el equipo
            de diseño.
          </li>
        </ul>
        <p className={styles.text}>
          En los proyectos aplique conceptos como Box Model, CSS Module,
          WebComponents, Global State, Responsive Design y las ulitmas
          especificaciones de JavaScript. Adicionalmente, trabaje con
          metodologías ágiles como Scrum.
        </p>
      </section>
      <div className={styles.imageContainer}>
        <img src={imageTwo} className={styles.image} />
      </div>      <div className={styles.imageContainer}>
        <img src={imageThree} className={styles.image} />
      </div>
      <section className={styles.content}>
        <h3 className={styles.title}>Freelance</h3>
        <p className={styles.text}>
          Trabaje en proyectos de start ups como TuPeludo.
        </p>
        <ul className={styles.list}>
          <li className={styles.item}>
            Desarrollé una web donde los usuario podían solicitar un servicio de paseador de mascotas.
          </li>
          <li className={styles.item}>
            Atomatice el proceso de registro de los paseadores de moscotas.
          </li>
          <li className={styles.item}>
            Contrui componentes reutilizables usando Reactjs.
          </li>
        </ul>
        <p className={styles.text}>
          Las herramientas principales de desarrollo eran Reactjs, Sass, Redux y Firebase.
        </p>
      </section>
    </div>
  );
};
