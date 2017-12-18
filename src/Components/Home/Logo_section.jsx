import React, { Component } from 'react';
import styles from './Logo.css';

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

export default Section;
