import React, { PureComponent as Component } from 'react';
import Lightbox from 'react-image-lightbox';
import { Element } from 'react-scroll';
import styles from './css/Work.css';
import Project from './project';
import helper from './helper';
import data from './data';

const { createProjects } = helper;

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openGallery: false,
      img: null,
      projects: [],
    };
    this.openImage = this.openImage.bind(this);
  }

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

  openImage(img) {
    this.setState({ openGallery: true, img });
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
        <Element
          className={styles.grid}
          style={{ overflow: 'auto' }}
        >
          {this.state.projects.map(img => (
            <Element key={img.id} name={String(img.id)}>
              <Project data={img} open={this.openImage} />
            </Element>
        ))}
        </Element>
      </div>
    );
  }
}

export default Work;
