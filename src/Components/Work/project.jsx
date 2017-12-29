
import React from 'react';
import Img from 'react-image';
import PropTypes from 'prop-types';
import styles from './css/Project.css';

const propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  open: PropTypes.func.isRequired,
};

const project = ({ data, open }) => (
  <Img
    onClick={() => open(data.src)}
    src={data.thumbnail}
    alt={data.alt}
    className={`${styles.img}`}
  />
);

project.propTypes = propTypes;

export default project;
