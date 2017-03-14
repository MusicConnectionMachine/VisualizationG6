import React from 'react'
import elasticSearchClient from '../services/ElasticSearch'
import Searchbar from './Searchbar'
import SearchResult from './SearchResult'
const { string } = React.PropTypes
const numberOfResults = 12

export default class Search extends React.Component {

  constructor () {
    super()

    this.nextResults = this.nextResults.bind(this)
    this.lastResults = this.lastResults.bind(this)

    this.state = {
      searchResult: [],
      searchState: 'none',
      oldSearch: '',
      totalResults: 0,
      from: 0
    }
  }

  static get propTypes () {
    return {
      searchTerm: string,
      from: React.PropTypes.number,
      to: React.PropTypes.number
    }
  }

  componentDidMount () {
    this.queryDatabse(0)
  }

  queryDatabse (from) {
    // console.log(this.props.searchTerm)
    // if (this.props.searchTerm === undefined || this.props.searchTerm === null || this.props.searchTerm === '') {
    //   this.context.router.transitionTo('/')
    // }
    this.setState({searchState: 'loading', oldSearch: this.props.searchTerm, from: from, totalResults: 0})

    elasticSearchClient.search({
      q: this.props.searchTerm,
      from: from,
      size: numberOfResults
    }).then((response) => {
      this.parseResult(response)
    }).catch((error) => {
      this.setState({searchState: 'error'})
      console.trace(error.message)
    })
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
    this.queryDatabse(this.state.from + numberOfResults)
  }

  lastResults (event) {
    this.queryDatabse(this.state.from - numberOfResults)
  }

  render () {
    var body, footer

    if (this.state.oldSearch !== this.props.searchTerm) {
      this.queryDatabse(0)
    }

    switch (this.state.searchState) {
      case 'loading':
        body = (
          <div className='searchMessage'>Loading...</div>
        )
        break
      case 'error':
        body = (
          <div className='searchMessage'>An error has occured, please try again</div>
        )
        break
      case 'nothing':
        body = (
          <div className='searchMessage'>Sorry, we could not find anything for: {this.props.searchTerm}</div>
        )
        break
      case 'done':
        var i = 0
        body = this.state.searchResult.map(data => (<SearchResult key={i++} myData={data} />))
        // body = (
        //   <div className='list-group'>
        //     {this.state.searchResult.map(data => (<SearchResult key={i++} myData={data} />))}
        //   </div>
        // )
        footer = (
          <nav aria-label='Page navigation'>
            <div className='btn-group btn-group-justified' role='group'>
              <div className='btn-group' role='group'>
                <button type='button' className='btn btn-default' aria-label='Last Results' onClick={this.lastResults} disabled={this.state.from <= 0}>
                  <span className='glyphicon glyphicon-chevron-left' aria-hidden='true' /> {Math.max(this.state.from - numberOfResults + 1, 0)} - {Math.max(this.state.from, 0)}
                </button>
              </div>
              <div className='btn-group' role='group'>
                <button type='button' className='btn btn-default' aria-label='Next Results' onClick={this.nextResults} disabled={this.state.from + numberOfResults >= this.state.totalResults}>
                  {Math.min(this.state.totalResults, this.state.from + numberOfResults + 1)} - {Math.min(this.state.totalResults, this.state.from + numberOfResults + numberOfResults)}
                  <span className='glyphicon glyphicon-chevron-right' aria-hidden='true' />
                </button>
              </div>
            </div>
          </nav>
        )
        break
      default:
    }

    return (
      <div className='container'>

        <div className={this.state.searchState === 'done' ? 'row margin-top-10-p' : 'row margin-top-20-p'}>
          <Searchbar initSearchTerm={this.props.searchTerm} />
        </div>

        <div className=' margin-top-5-p'>
          {body}
          <div className='text-right text-white'>
            <small>{this.state.totalResults} Results</small>
          </div>
          {footer}
          <div className='margin-bottom-5-p' />
        </div>

      </div>
    )
  }
}
