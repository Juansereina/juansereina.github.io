import React, { PureComponent as Component } from 'react';
import Lightbox from 'react-image-lightbox';
import { Element } from 'react-scroll';
import styles from './css/Work.css';
import spinnerCss from './css/spinner.css';
import Project from './project';
import helper from './helper';

const {
  createProjects,
  extractImages,
  consultProjects,
  consultOneProject,
} = helper;

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      openGallery: false,
      photoIndex: 0,
      images: null,
      projects: [],
    };
    this.openOneProject = this.openOneProject.bind(this);
  }

  componentWillMount() {
    consultProjects().then(res => this.fillProjects(res));
  }

  async fillProjects(_projects) {
    const projects = await createProjects(_projects);
    this.setState({
      projects,
      loading: false,
    });
  }

  async openOneProject(id) {
    const result = await consultOneProject(id);
    const images = await extractImages(result);
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

  renderElements() {
    return (
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
    );
  }
  render() {
    const { loading } = this.state;
    return (
      <div className={`${styles.root}`}>
        {loading && <div className={`${spinnerCss.spinner}`}> <div className={`${spinnerCss.loader}`}>Loading...</div></div>}
        {this.renderGallery()}
        {!loading && this.renderElements()}
      </div>
    );
  }
}

export default Work;
