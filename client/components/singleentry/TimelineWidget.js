import React from 'react'

export default class TimelineWidget extends React.Component {

  render () {
    return (
      <div className='detailbox'>
        Placeholder Timeline
      </div>
    )
  }
}

TimelineWidget.propTypes = {
  type: React.PropTypes.string,
  id: React.PropTypes.string,
  myData: React.PropTypes.object
}

TimelineWidget.contextTypes = {
  router: React.PropTypes.object
}
