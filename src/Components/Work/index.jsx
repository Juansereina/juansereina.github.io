import React, { PureComponent as Component } from 'react';
import $ from 'jquery';
import Img from 'react-image';
import Lightbox from 'react-image-lightbox';
import styles from './Work.css';

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
    this.queryBehance();
  }

  queryBehance() {
    const url = 'https://www.behance.net/v2/users/Juanse2296/projects?client_id=pULi7ivaPknVuBz4MV6lFO3Kh8f4xO7u';
    $.ajax({
      url,
      type: 'GET',
      data: { projects: {} },
      dataType: 'jsonp',
    }).done(response => this.fillProjects(response.projects)).fail((err) => {
      console.log('Ajax request fails: ', err.message);
    });
  }

  fillProjects(_projects) {
    const projects = _projects.map((project) => {
      const newProject = {
        id: project.id,
        thumbnail: project.covers['404'],
        src: project.covers.original,
        alt: project.name,
      };
      return newProject;
    });
    return this.setState({
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
