import React from 'react'

export default class Comments extends React.Component {
  static get propTypes () {
    return {
      type: React.PropTypes.string,
      id: React.PropTypes.string,
      myData: React.PropTypes.object
    }
  }

  render () {
    return (
      <div className='jumbotron'>
        Placeholder for {this.props.type} {this.props.id}
      </div>
    )
  }
}
