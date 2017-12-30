
import React from 'react';
import Img from 'react-image';
import PropTypes from 'prop-types';
import styles from './css/Project.css';

const propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  open: PropTypes.func.isRequired,
};

const project = ({ data, open }) => (
  <div className={`${styles.imgContainer}`}>
    <div className={`${styles.infoContainer}`}>
      <h3 className={`${styles.title}`}>{data.alt}</h3>
      <div className={`${styles.buttonContainer}`}>
        <span className={`${styles.description}`}>Juan Sebastián</span>
        <button className={`${styles.btn}`}>See on Behance</button>
      </div>
    </div>
    <Img
      onClick={() => open(data.src)}
      src={data.thumbnail}
      alt={data.alt}
      className={`${styles.img}`}
    />
  </div>
);

project.propTypes = propTypes;

export default project;
