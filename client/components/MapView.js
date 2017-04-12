import React from 'react'
import { Map, Marker, TileLayer, Popup, PropTypes as MapPropTypes } from 'react-leaflet'
import PropTypes from 'prop-types'
import 'leaflet/dist/leaflet.css'

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

const state = {
  lat: 51.505,
  lng: -0.09,
  zoom: 13
}
export default class MapView extends React.Component {
  render () {
    const center = [state.lat, state.lng]

    const markers = [
      { key: 'marker1', position: [51.5, -0.1], name: 'Marker 1' },
      { key: 'marker2', position: [51.51, -0.1], name: 'Marker 2' },
      { key: 'marker3', position: [51.49, -0.05], name: 'Marker 3' }
    ]
    return (
      <Map center={center} zoom={state.zoom}>
        <TileLayer
          url={'https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoieXNkZXZ5cyIsImEiOiJjajByMWljMncwMWp3MnFyeG5oNGdrNTltIn0.7bSRbrkT1zy3kYvXvWNgMw'}
        />
        <MarkersList markers={markers} />
      </Map>
    )
  }
}
