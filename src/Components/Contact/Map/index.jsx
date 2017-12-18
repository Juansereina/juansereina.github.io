import React, {
    Component
} from 'react';
import MapGL, {
    Marker,
    Popup,
    NavigationControl
} from 'react-map-gl';
import CityPin from './city-pin';
import CityInfo from './city-info';
import CITIES from './cities.json';
import styles from './Map.css'

const MAPBOX_TOKEN = 'pk.eyJ1IjoianVhbnNlMjI5NiIsImEiOiJjajlhbTdjNjEweWY4MndsZ2p2cHM0c3RtIn0.U8uD3-sKlhqmCRtJJ2hv2w';
const navStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '10px'
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
            popupInfo: null
        };
    }

    componentDidMount() {
        window.addEventListener('resize', this._resize);
        this._resize();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this._resize);
    }

    _resize = () => {
        this.setState({
            viewport: {
                ...this.state.viewport,
                width: this.state.width || window.innerWidth,
                height: this.state.height || window.innerHeight
            }
        });
    };

    _updateViewport = (viewport) => {
        this.setState({
            viewport
        });
    }

    _renderCityMarker = (city, index) => {
        return ( <
            Marker key = {
                `marker-${index}`
            }
            longitude = {
                city.longitude
            }
            latitude = {
                city.latitude
            } >
            <
            CityPin size = {
                20
            }
            onClick = {
                () => this.setState({
                    popupInfo: city
                })
            }
            /></Marker >
        );
    }

    _renderPopup() {
        const {
            popupInfo
        } = this.state;
        return popupInfo && ( <
            Popup tipSize = {
                5
            }
            anchor = "top"
            longitude = {
                popupInfo.longitude
            }
            latitude = {
                popupInfo.latitude
            }
            onClose = {
                () => this.setState({
                    popupInfo: null
                })
            } >
            <
            CityInfo info = {
                popupInfo
            }
            /></Popup >
        );
    }

    render() {
        const {
            viewport
        } = this.state;
        return ( <div className = {
                styles.root
            } >
            <MapGL { ...viewport
            }
            mapStyle = "mapbox://styles/juanse2296/cj9ayhql43tss2rn2z5mior2k"
            onViewportChange = {
                this._updateViewport
            }
            mapboxApiAccessToken = {
                MAPBOX_TOKEN
            } > {
                CITIES.map(this._renderCityMarker)
            } {
                this._renderPopup()
            } <
            div style = {
                navStyle
            } >
            <
            NavigationControl onViewportChange = {
                this._updateViewport
            }
            />
            </div>
           </MapGL>  
        </div>);
    }
}

export default App