import React, { PureComponent as Component } from 'react';
import Img from 'react-image';
import Lightbox from 'react-image-lightbox';
import styles from './Work.css';
import helper from './helper';

const { createProjects, consultProjects } = helper;

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openGallery: false,
      img: null,
      projects: [],
    };
  }

  componentWillMount() {
    consultProjects().then(res => this.fillProjects(res));
  }

  async fillProjects(_projects) {
    const projects = await createProjects(_projects);
    this.setState({
      projects,
    });
  }

  renderGallery() {
    const { openGallery, img } = this.state;
    return (
      <div>
        {
          openGallery &&
            <Lightbox
              mainSrc={img}
              onCloseRequest={() => this.setState({ openGallery: false, img: null })}
            />
        }
      </div>
    );
  }

  render() {
    return (
      <div className={`${styles.root}`}>
        {this.renderGallery()}
        <div className={styles.grid}>
          {this.state.projects.map(img => (
            <Img
              key={img.id}
              onClick={() => this.setState({ openGallery: true, img: img.src })}
              src={img.thumbnail}
              alt={img.alt}
              className={`${styles.img} hvr-bob `}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Work;
