import React, { PureComponent as Component } from 'react';
import Lightbox from 'react-image-lightbox';
import { Element } from 'react-scroll';
import styles from './css/Work.css';
import Project from './project';
import helper from './helper';
import data from './data';
import dataProject from './data_oneProject';

const { createProjects, extractImages } = helper;

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openGallery: false,
      photoIndex: 0,
      images: null,
      projects: [],
    };
    this.openOneProject = this.openOneProject.bind(this);
  }

  /* <Lightbox
              mainSrc={img}
              onCloseRequest={() => this.setState({ openGallery: false, img: null })}
            /> */

  componentWillMount() {
    // consultProjects().then(res => this.fillProjects(res));
    this.fillProjects(data.projects);
  }

  async fillProjects(_projects) {
    const projects = await createProjects(_projects);
    this.setState({
      projects,
    });
  }

  async openOneProject(id) {
    const images = await extractImages(dataProject);
    this.setState({ openGallery: true, images });
  }
  renderGallery() {
    const { openGallery, images, photoIndex } = this.state;
    return (
      <div>
        {
          openGallery &&
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ openGallery: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        }
      </div>
    );
  }

  render() {
    return (
      <div className={`${styles.root}`}>
        {this.renderGallery()}
        <Element
          className={styles.grid}
          style={{ overflow: 'auto' }}
        >
          {this.state.projects.map(img => (
            <Element key={img.id} name={String(img.id)}>
              <Project data={img} open={this.openOneProject} />
            </Element>
        ))}
        </Element>
      </div>
    );
  }
}

export default Work;
