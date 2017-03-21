import React from 'react'

export default class DetailTable extends React.Component {

  constructor (props) {
    super(props)

    var entries = []

    for (var item in props.myData) {
      if (item !== 'tags') {
        entries.push({
          name: item,
          value: props.myData[item]
        })
      }
    }

    if (props.myData['tags']) {
      var i = 0
      entries.push({
        name: 'Tags',
        value: props.myData.tags.map(name => {
          var clickHandler = function () { this.context.router.transitionTo('/search/' + name) }.bind(this)
          return (
            <span key={i++} onClick={clickHandler}><div className='label label-default'>{name}</div> </span>
          )
        })
      })
    }

    this.state = {
      entries: entries
    }
  }

  render () {
    var i = 0
    return (
      <div className='detailbox'>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th colSpan='2'>
                Detailed Information
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.entries.map(entry => (
              <tr key={i++}>
                <td>
                  {entry.name}
                </td>
                <td>
                  {entry.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

DetailTable.propTypes = {
  type: React.PropTypes.string,
  id: React.PropTypes.string,
  myData: React.PropTypes.object
}

DetailTable.contextTypes = {
  router: React.PropTypes.object
}
