import React, {
  PureComponent as Component,
} from 'react';
import MapGL, {
  Marker,
  Popup,
  NavigationControl,
} from 'react-map-gl';
import CityPin from './city-pin';
import CityInfo from './city-info';
import CITIES from './cities.json';
import styles from './Map.css';
import animate from '../../Common/animate.css';

const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px',
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 1000,
      viewport: {
        latitude: 3.434847,
        longitude: -76.505297,
        zoom: 9.36,
        bearing: 0,
        pitch: 0,
        width: 500,
        height: 500,
      },
      popupInfo: null,
      MAPBOX_TOKEN: 'pk.eyJ1IjoianVhbnNlMjI5NiIsImEiOiJjajlhbTdjNjEweWY4MndsZ2p2cHM0c3RtIn0.U8uD3-sKlhqmCRtJJ2hv2w',
    };
    this.updateViewport = this.updateViewport.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize.bind(this));
  }

  resize() {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: this.state.width || window.innerWidth,
        height: this.state.height || window.innerHeight,
      },
    });
  }

  updateViewport(viewport) {
    this.setState({
      viewport,
    });
  }

  renderCityMarker(city, index) {
    return (
      <Marker
        key={`marker-${index}`}
        longitude={city.longitude}
        latitude={city.latitude}
      >
        <CityPin
          size={20}
          onClick={() => this.setState({ popupInfo: city })}
        />
      </Marker>
    );
  }

  renderPopup() {
    const { popupInfo } = this.state;
    return popupInfo && (
      <Popup
        tipSize={5}
        anchor="top"
        longitude={popupInfo.longitude}
        latitude={popupInfo.latitude}
        onClose={() => this.setState({ popupInfo: null })}
      >
        <CityInfo info={popupInfo} />
      </Popup>
    );
  }

  render() {
    const { viewport } = this.state;
    return (
      <div className={`${styles.root} ${animate.animated} ${animate.fadeIn}`} >
        <MapGL
          {...viewport}
          mapStyle="mapbox://styles/juanse2296/cj9ayhql43tss2rn2z5mior2k"
          onViewportChange={v => this.updateViewport(v)}
          mapboxApiAccessToken={this.state.MAPBOX_TOKEN}
        >
          { CITIES.map(this.renderCityMarker.bind(this)) }
          { this.renderPopup()}
          <div style={navStyle} >
            <NavigationControl onViewportChange={() => this.updateViewport} />
          </div>
        </MapGL>
      </div>
    );
  }
}

export default App;
