
import React from 'react';
import ReactDOM from 'react-dom';

import { Element } from 'react-scroll';

const durationFn = deltaTop => deltaTop;

class Section extends React.Component {
  render() {
    return (
      <div>
        <Element
          name="test7"
          className="element"
          id="containerElement"
          style={{
          position: 'relative',
          height: '200px',
          overflow: 'scroll',
          marginBottom: '100px',
        }}
        >

          <Element
            name="firstInsideContainer"
            style={{
            marginBottom: '200px',
          }}
          >
            first element inside container
          </Element>

          <Element
            name="secondInsideContainer"
            style={{
            marginBottom: '200px',
          }}
          >
            second element inside container
          </Element>
        </Element>
      </div>
    );
  }
}

export default Section;
