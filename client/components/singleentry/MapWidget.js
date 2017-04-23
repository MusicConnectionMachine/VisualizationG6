import React from 'react'

export default class MapWidget extends React.Component {

  render () {
    return (
      <div className='detailbox'>
        Placeholder Map
      </div>
    )
  }
}

MapWidget.propTypes = {
  type: React.PropTypes.string,
  id: React.PropTypes.string,
  myData: React.PropTypes.object
}

MapWidget.contextTypes = {
  router: React.PropTypes.object
}
