import React from 'react'
import { connect } from 'react-redux'
import elasticSearchClient from '../services/ElasticSearch'
import Header from './Header'
import SearchResult from './SearchResult'
import Spinner from 'react-spinkit'
import RelationsDrawer from './RelationsDrawer'
const numberOfResults = 12

class Search extends React.Component {

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

  componentDidMount () {
    this.queryDatabase(0)
  }

  queryDatabase (from) {
    this.setState({searchState: 'loading', oldSearch: this.props.searchTerm, from: from, totalResults: 0})

    elasticSearchClient.search({
      q: this.props.searchTerm,
      index: 'music',
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
    this.queryDatabase(this.state.from + numberOfResults)
  }

  lastResults (event) {
    this.queryDatabase(this.state.from - numberOfResults)
  }

  render () {
    let tableBody, tableFooter

    if (this.state.oldSearch !== this.props.searchTerm) {
      this.queryDatabase(0)
    }

    switch (this.state.searchState) {
      case 'loading':
        tableBody = (
          <div className='parent-center'>
            <Spinner spinnerName='double-bounce' />
          </div>
        )
        break
      case 'error':
        tableBody = (
          <div className='search-error'>An error has occured, please try again</div>
        )
        break
      case 'nothing':
        tableBody = (
          <div className='search-error'>Sorry, we could not find anything for: {this.props.searchTerm}</div>
        )
        break
      case 'done':
        var i = 0
        tableBody = this.state.searchResult.map(data => (<SearchResult key={i++} myData={data} />))
        tableFooter = (
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
      <div>
        <Header />
        <div className='container animated fadeIn'>
          <RelationsDrawer searchTerm={this.props.searchTerm} />
          <div>
            <table className='table table-hover'>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Work Title</th>
                  <th>Composer</th>
                  <th>Style</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {tableBody}
              </tbody>
            </table>
            <div className='text-right margin-bottom-10-px'>
              <small>{this.state.totalResults} Results</small>
            </div>
            {tableFooter}
            <div className='margin-bottom-5-p' />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

Search.propTypes = {
  searchTerm: React.PropTypes.string,
  from: React.PropTypes.number,
  to: React.PropTypes.number
}

export default connect(mapStateToProps)(Search)
