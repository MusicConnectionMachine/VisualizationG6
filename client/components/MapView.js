import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
const position = [51.505, -0.09]

export default class MapView extends React.Component {
  render () {
    return (
      <Map center={position} zoom={13}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
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
