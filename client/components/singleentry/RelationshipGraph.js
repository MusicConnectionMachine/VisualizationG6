import React from 'react'

export default class RelationshipGraph extends React.Component {

  render () {
    return (
      <div className='jumbotron'>
        Placeholder for Graph {this.props.type} {this.props.id}
      </div>
    )
  }
}

RelationshipGraph.propTypes = {
  type: React.PropTypes.string,
  id: React.PropTypes.string,
  myData: React.PropTypes.object
}
