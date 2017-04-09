import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
const position = [51.505, -0.09]

export default class MapView extends React.Component {
  render () {
    return (
      <Map center={position} zoom={13}>
        <TileLayer
          url='https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoieXNkZXZ5cyIsImEiOiJjajByMWljMncwMWp3MnFyeG5oNGdrNTltIn0.7bSRbrkT1zy3kYvXvWNgMw'
        />
        <Marker position={position}>
          <Popup>
            <span>I'm a test popup.</span>
          </Popup>
        </Marker>
      </Map>
    )
  }
}
