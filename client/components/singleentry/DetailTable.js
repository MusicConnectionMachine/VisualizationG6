import React from 'react'

export default class DetailTable extends React.Component {

  constructor (props) {
    super(props)

    var entries = []
    let defaultEntries = []

    if (props.type === 'artists') {
      defaultEntries = [
        { id: 'name', name: 'Name' },
        { id: 'dateOfBirth', name: 'Date of Birth' },
        { id: 'dateOfDeath', name: 'Date of Death' },
        { id: 'placeOfBirth', name: 'Place of Birth' },
        { id: 'placeOfDeath', name: 'Place of Death' },
        { id: 'nationality', name: 'Nationality' }
      ]
    } else if (props.type === 'releases') {
      defaultEntries = [
        { id: 'title', name: 'Title' }
      ]
    }
    for (var i = 0; i < defaultEntries.length; i++) {
      let value = props.myData[defaultEntries[i].id]
      if (value) {
        entries.push({
          name: defaultEntries[i].name,
          value: value
        })
      }
    }

    if (props.myData.wiki_link || props.myData.source_link) {
      entries.push({
        name: 'Further Information',
        value: (<a href={props.myData.wiki_link} target='_blank'>Wikipedia</a>)
      })
    }

    if (props.myData['tags']) {
      let mappingKey = 0
      entries.push({
        name: 'Tags',
        value: props.myData.tags.map(name => {
          var clickHandler = function () { this.context.router.transitionTo('/search/' + name) }.bind(this)
          return (
            <span key={mappingKey++} onClick={clickHandler}><div className='label label-default'>{name}</div> </span>
          )
        })
      })
    }

    this.state = {
      entries: entries
    }
  }

  render () {
    let mappingKey = 0
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
              <tr key={mappingKey++}>
                <td style={{ whiteSpace: 'nowrap' }}>
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
