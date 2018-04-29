
import React from 'react';
import Img from 'react-image';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import styles from './scss/project.scss';

const propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  open: PropTypes.func.isRequired,
};

const openToBehance = (url) => {
  const win = window.open(url, '_blank');
  win.focus();
};

const project = ({ data, open }) => (
  <div className={`${styles.imgcontainer}`}>
    <div className={`${styles.infocontainer}`}>
      <h3 className={`${styles.title}`}>{data.alt}</h3>
      <div className={`${styles.buttoncontainer}`}>
        <span className={`${styles.description}`}>Juan Sebastián</span>
        <button className={`${styles.btn}`} onClick={() => openToBehance(data.url)} >See on Behance</button>
      </div>
    </div>
    <LazyLoad height={200}>
      <Img
        onClick={() => open(data.id)}
        src={data.thumbnail}
        alt={data.alt}
        className={`${styles.img}`}
      />
    </LazyLoad>
  </div>
);

project.propTypes = propTypes;

export default project;