import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Logo.css';

const propTypes = {
  effect: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      load: 0,
      effect: [props.effect, 'hvr-bob'],
    };
    setTimeout(() => { this.setState({ load: 1 }); }, 2000);
  }
  render() {
    return (
      <div >
        <img className={`${this.state.effect[this.state.load]} ${styles.image}`} src={this.props.img} alt={this.props.description} />
      </div>
    );
  }
}

Section.propTypes = propTypes;

export default Section;
