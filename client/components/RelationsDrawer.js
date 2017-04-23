import React from 'react'

const numberOfResults = 5

export default class RelationsDrawer extends React.Component {

  constructor (props) {
    super(props)

    this.nextResults = this.nextResults.bind(this)
    this.lastResults = this.lastResults.bind(this)

    this.state = {
      searchResult: [],
      searchState: 'none',
      totalResults: 0,
      oldSearch: '',
      from: 0
    }
  }

  componentDidMount () {
    this.queryDatabase(0)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.searchTerm !== this.state.oldSearch) {
      this.queryDatabase(0)
    }
  }

  queryDatabase (from) {
    this.setState({oldSearch: this.props.searchTerm, from: from, totalResults: 0})
  }

  parseResult (result) {
    if (result.hits && result.hits.hits) {
      if (result.hits.total > 0) {
        this.setState({searchResult: result.hits.hits, searchState: 'done', totalResults: result.hits.total})
      } else {
        this.setState({searchState: 'nothing'})
      }
    } else {
      this.setState({searchState: 'error'})
    }
  }

  nextResults (event) {
    this.queryDatabase(this.state.from + numberOfResults)
  }

  lastResults (event) {
    this.queryDatabase(this.state.from - numberOfResults)
  }

  render () {
    switch (this.state.searchState) {
      case 'error':
        return (
          <div className='search-error'>Could not fetch any Relations for your search, please try again</div>
        )
      case 'done':
        let key = 0
        return (
          <div>
            <h2>Did you know?</h2>
            <div className='card-group'>
              {this.state.from > 0 ? (<button className='btn card' onClick={this.lastResults}><span className='glyphicon glyphicon-triangle-left' /></button>) : null}
              {this.state.searchResult.map(result => (
                <div className='card' key={key++}>
                  <div className='card-block'>
                    <h4 className='card-text'><i className='fa fa-quote-left' /> {result._source.subject} <strong>{result._source.relation}</strong> {result._source.object} <i className='fa fa-quote-right' /></h4>
                  </div>
                </div>
              ))}
              {this.state.from + numberOfResults < this.state.totalResults ? (<button className='btn card' onClick={this.nextResults}><span className='glyphicon glyphicon-triangle-right' /></button>) : null}
            </div>
          </div>
        )
      default:
        return (
          <div className='margin-top-5-p' />
        )
    }
  }
}

RelationsDrawer.propTypes = {
  searchTerm: React.PropTypes.string
}

RelationsDrawer.contextTypes = {
  router: React.PropTypes.object
}
