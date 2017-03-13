import React from 'react'
import elasticSearchClient from '../services/ElasticSearch'
import Searchbar from './Searchbar'
const { string } = React.PropTypes

export default class Search extends React.Component {

  constructor () {
    super()

    this.state = {
      searchResult: [
        1,
        2,
        43
      ],
      searchState: 'none',
      oldSearch: ''
    }
  }

  static get propTypes () {
    return {searchTerm: string}
  }

  componentDidMount () {
    this.queryDatabse()
  }
  //
  // componentWillReceiveProps (nextProps) {
  //   if (JSON.stringify(this.props.searchTerm) !== JSON.stringify(nextProps.searchTerm)) {
  //     this.updateUser()
  //   }
  // }

  queryDatabse () {
    this.setState({searchState: 'loading', oldSearch: this.props.searchTerm})
    elasticSearchClient.search({
      q: this.props.searchTerm
    }).then((response) => {
      this.parseResult(response.hits)
    }).catch((error) => {
      this.setState({searchState: 'error'})
      console.trace(error.message)
    })
  }

  parseResult (result) {
    if (result.hits) {
      // console.log(result)
      if (result.total > 0) {
        this.setState({searchResult: result.hits, searchState: 'done'})
      } else {
        this.setState({searchState: 'nothing'})
      }
    } else {
      this.setState({searchState: 'error'})
    }
  }

  render () {
    var body

    if (this.state.oldSearch !== this.props.searchTerm) {
      this.queryDatabse()
    }

    switch (this.state.searchState) {
      case 'loading':
        body = (
          <div>loading</div>
        )
        break
      case 'error':
        body = (
          <div>An error has occured, please try again</div>
        )
        break
      case 'nothing':
        body = (
          <div>Sorry nothing found</div>
        )
        break
      case 'done':
        var i = 0
        body = this.state.searchResult.map(data => (
          <SearchResult key={i++} myData={data} />
          )
        )
        break
      default:
    }

    return (
      <div className='container'>

        <div className={this.state.searchState === 'done' ? 'row margin-top-10-p' : 'row margin-top-20-p'}>
          <Searchbar initSearchTerm={this.props.searchTerm} />
        </div>

        <div className='margin-top-10-p'>
          {body}
        </div>
      </div>
    )
  }
}

function SearchResult (props) {
  var myData = props.myData
  var type = myData._type
  var dbEntry = myData._source

  if (type === 'composition') {
    var composer = dbEntry.Composer || ' '
    var style = dbEntry['Piece Style'] || ' '
    var title = dbEntry['Work Title'] || ' '
    var date = dbEntry['Year/Date of Composition'] || ' '

    return (
      <div className='row searchResult'>
        <div className='col-xs-12 col-md-6'><strong>{title} </strong></div>
        <div className='col-xs-12 col-md-6'>{composer} </div>
        <div className='col-xs-6 '><small>{date} </small></div>
        <div className='col-xs-6 additional-info'><small>{style} </small></div>
      </div>
    )
  }
  return (
    <div className='row'>Could not display result</div>
  )
}

SearchResult.propTypes = {
  myData: React.PropTypes.object
}
