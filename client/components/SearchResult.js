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
      var composer = dbEntry.Composer || ' '
      var style = dbEntry['Piece Style'] || ' '
      var title = dbEntry['Work Title'] || ' '
      var date = dbEntry['Year/Date of Composition'] || ' '

      return (
        <div className='searchResult' role='button' onClick={this.clickHandler}>
          <table>
            <tr>
              <td>
                <span className='glyphicon glyphicon-cd searchResult-icon' />
              </td>
              <td>
                <div className='container'>
                  <div className='row align-items-center'>
                    <div className='col-sm-5'><strong>{title} </strong></div>
                    <div className='col-sm-7'>{composer} </div>
                    <div className='col-xs-6 col-sm-5 additional-info'>
                      <small>{date} </small>
                    </div>
                    <div className='col-xs-6 col-sm-7 additional-info'>
                      <small>{style} </small>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </table>
        </div>
      )
    }
    return (
      <div className='row searchMessage'>Could not display result for {type}</div>
    )
  }
}

SearchResult.propTypes = {
  myData: React.PropTypes.object
}

SearchResult.contextTypes = {
  router: React.PropTypes.object
}
