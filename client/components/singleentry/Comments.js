import React from 'react'

export default class Comments extends React.Component {

  render () {
    return (
      <div className='detailbox'>
        Placeholder for Commenting {this.props.type} {this.props.id}
      </div>
    )
  }
}

Comments.propTypes = {
  type: React.PropTypes.string,
  id: React.PropTypes.string,
  myData: React.PropTypes.object
}
