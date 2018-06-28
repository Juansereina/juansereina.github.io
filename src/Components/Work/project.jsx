import React from "react";
import Img from "react-image";
import PropTypes from "prop-types";
import { withHandlers } from "recompose";
import styles from "./scss/project.scss";

const propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  open: PropTypes.func.isRequired
};


const Project = ({ data, openInGallery, openToBehance }) => (
  <div className={styles.imgcontainer}>
    <div className={styles.infocontainer}>
      <h3 className={styles.title}>{data.alt}</h3>
      <button className={styles.btn} onClick={openToBehance}>
        See on Behance
      </button>
    </div>
    <Img
      onClick={openInGallery}
      src={data.thumbnail}
      alt={data.alt}
      className={styles.img}
    />
  </div>
);

Project.propTypes = propTypes;

export default withHandlers({
  openToBehance: ({ url }) => () => {
    const win = window.open(url, "_blank");
    win.focus();
  },
  openInGallery: ({ open, data }) => () => open(data.id)
})(Project);
