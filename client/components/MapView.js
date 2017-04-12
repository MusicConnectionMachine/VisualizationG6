import React from 'react'
import { Map, Marker, TileLayer, Popup, PropTypes as MapPropTypes } from 'react-leaflet'
import PropTypes from 'prop-types'

const CustomMarker = ({ position, name }) => (
  <Marker position={position}>
    <Popup>
      <span>{name}</span>
    </Popup>
  </Marker>
)

CustomMarker.propTypes = {
  name: MapPropTypes.children,
  position: MapPropTypes.latlng
}

const MarkersList = ({ markers }) => {
  const items = markers.map(({ key, position, name }) => (
    <CustomMarker key={key} position={position} name={name} />
  ))
  return <div>{items}</div>
}

MarkersList.propTypes = {
  markers: PropTypes.array.isRequired
}

const mapInitialState = {
  lat: 51.505,
  lng: -0.09,
  zoom: 13
}

const demoMarkers = [
  { key: 'marker1', position: [51.5, -0.1], name: 'Marker 1' },
  { key: 'marker2', position: [51.51, -0.1], name: 'Marker 2' },
  { key: 'marker3', position: [51.49, -0.05], name: 'Marker 3' }
]
export default class MapView extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      mapInitialState: {
        center: this.props.center,
        zoom: 13
      }
    }
  }

  render () {
    return (
      <Map center={this.props.center ? this.props.center : mapInitialState.center} zoom={mapInitialState.zoom}>
        <TileLayer
          url={'https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoieXNkZXZ5cyIsImEiOiJjajByMWljMncwMWp3MnFyeG5oNGdrNTltIn0.7bSRbrkT1zy3kYvXvWNgMw'}
        />
        <MarkersList markers={demoMarkers} />
      </Map>
    )
  }
}

MapView.propTypes = {
  items: PropTypes.array.isRequired,
  center: MapPropTypes.latlng
}
