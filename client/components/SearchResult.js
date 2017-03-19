import React from 'react'

export default class SearchResult extends React.Component {

  constructor (props) {
    super(props)
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler (event) {
    event.preventDefault()
    console.log(this)
    var myData = this.props.myData
    this.context.router.transitionTo('/details/' + myData._type + '/' + myData._id)
  }

  render () {
    var myData = this.props.myData
    var type = myData._type
    var dbEntry = myData._source

    if (type === 'composition') {
      var composer = dbEntry.Composer || 'Unknown'
      var style = dbEntry['Piece Style'] || 'Unknown'
      var title = dbEntry['Work Title'] || 'Unknown'
      var date = dbEntry['Year/Date of Composition'] || 'Unknown'

      return (
        <tr className='animated fadeIn' onClick={this.clickHandler}>
          <th scope='row'>
            <span className='glyphicon glyphicon-cd searchResult-icon' />
          </th>
          <td><strong>{title}</strong></td>
          <td>{composer}</td>
          <td>{style}</td>
          <td>{date}</td>
        </tr>
      )
    }
    return (
      <div className='row no-results'>Could not display result for {type}</div>
    )
  }
}

SearchResult.propTypes = {
  myData: React.PropTypes.object
}

SearchResult.contextTypes = {
  router: React.PropTypes.object
}
