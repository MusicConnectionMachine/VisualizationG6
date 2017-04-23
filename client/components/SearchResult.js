import React from 'react'

export default class SearchResult extends React.Component {

  constructor (props) {
    super(props)
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler (event) {
    event.preventDefault()
    let myData = this.props.myData
    this.context.router.transitionTo('/details/' + this.props.type + '/' + myData.id)
  }

  render () {
    let myData = this.props.myData
    let type = this.props.type

    if (type === 'artists') {
      let name = myData.name || 'Unknown'
      let date = myData.dateOfBirth || 'Unknown'

      return (
        <tr className='animated fadeIn' onClick={this.clickHandler}>
          <th className='hidden-xs searchResult-icon' scope='row'>
            <span className='glyphicon glyphicon-user' />
          </th>
          <td><strong>{name}</strong></td>
          <td>{date}</td>
        </tr>
      )
    }
    if (type === 'releases') {
      let title = myData.title || 'Unknown'
      let date = myData.date || 'Unknown'

      return (
        <tr className='animated fadeIn' onClick={this.clickHandler}>
          <th className='hidden-xs searchResult-icon' scope='row'>
            <span className='glyphicon glyphicon-cd' />
          </th>
          <td><strong>{title}</strong></td>
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
  myData: React.PropTypes.object,
  type: React.PropTypes.string
}

SearchResult.contextTypes = {
  router: React.PropTypes.object
}
