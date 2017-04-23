import React from 'react'
import { connect } from 'react-redux'
import MCMSearch from '../services/MCMSearch'
import SearchResult from './SearchResult'
import Spinner from 'react-spinkit'
import RelationsDrawer from './RelationsDrawer'
import '../../style/search.scss'
const numberOfResults = 12

class Search extends React.Component {

  constructor () {
    super()

    this.nextResults = this.nextResults.bind(this)
    this.lastResults = this.lastResults.bind(this)
    this.mcmapi = new MCMSearch()

    this.state = {
      artists: [],
      instruments: [],
      releases: [],
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
    if (this.props.searchTerm.length <= 0) {
      this.setState({searchState: 'typesomething', oldSearch: '', from: 0, totalResults: 0})
    } else {
      this.setState({searchState: 'loading', oldSearch: this.props.searchTerm, from: from, totalResults: 0})

      let me = this
      this.mcmapi.searchEntities(this.props.searchTerm, from, numberOfResults).then(function (response) {
        me.parseResult(response)
      }, function (error) {
        me.setState({searchState: 'error'})
        console.trace(error.message)
      })
    }
  }

  parseResult (result) {
    if (result instanceof Array && result.length > 0) {
      let artists, instruments, releases, total
      for (let i = 0; i < result.length; i++) {
        if (result[i].artists) {
          artists = result[i].artists
        }
        if (result[i].instruments) {
          instruments = result[i].instruments
        }
        if (result[i].releases) {
          releases = result[i].releases
        }
      }

      total = artists.length + instruments.length + releases.length

      if (total > 0) {
        this.setState({artists: artists, instruments: instruments, releases: releases, searchState: 'done', totalResults: total})
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
    let body
    let key = 0

    if (this.state.oldSearch !== this.props.searchTerm) {
      this.queryDatabase(0)
    }

    switch (this.state.searchState) {
      case 'loading':
        body = (
          <div className='parent-center'>
            <Spinner spinnerName='double-bounce' />
          </div>
        )
        break
      case 'error':
        body = (
          <div className='search-error'>An error has occured, please try again</div>
        )
        break
      case 'nothing':
        body = (
          <div className='searchMessage'>Sorry, we could not find anything for: {this.props.searchTerm}</div>
        )
        break
      case 'typesomething':
        body = (
          <div className='searchMessage'>Just start searching with typing your favourite composer, music work or musician on top right corner!</div>
        )
        break
      case 'done':
        body = (
          <div>
            { this.state.artists.length > 0 ? (
              <div>
                <h2>Artists</h2>
                <table className='table table-hover'>
                  <thead>
                    <tr>
                      <th className='hidden-xs'>Type</th>
                      <th>Name</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.artists.map(data => (<SearchResult type='artists' key={key++} myData={data} />))}
                  </tbody>
                </table>
              </div>) : null
            }

            { this.state.releases.length > 0 ? (
              <div>
                <h2>Releases</h2>
                <table className='table table-hover'>
                  <thead>
                    <tr>
                      <th className='hidden-xs'>Type</th>
                      <th>Work Title</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.releases.map(data => (<SearchResult type='releases' key={key++} myData={data} />))}
                  </tbody>
                </table>
              </div>) : null
            }

            <div className='text-right margin-bottom-10-px'>
              <small>{this.state.totalResults} Results</small>
            </div>

            { this.state.total > 0 ? (
              <nav aria-label='Page navigation'>
                <div className='btn-group btn-group-justified' role='group'>
                  <div className='btn-group' role='group'>
                    <button type='button' className='btn btn-default' aria-label='Last Results' onClick={this.lastResults} disabled={this.state.from <= 0}>
                      <span className='glyphicon glyphicon-chevron-left' aria-hidden='true' /> {Math.max(this.state.from - numberOfResults + 1, 0)} - {Math.max(this.state.from, 0)}
                    </button>
                  </div>
                  <div className='btn-group' role='group'>
                    <button type='button' className='btn btn-default' aria-label='Next Results' onClick={this.nextResults} disabled={this.state.from + numberOfResults >= this.state.totalResults}>{Math.min(this.state.totalResults, this.state.from + numberOfResults + 1)} - {Math.min(this.state.totalResults, this.state.from + numberOfResults + numberOfResults)}
                      <span className='glyphicon glyphicon-chevron-right' aria-hidden='true' />
                    </button>
                  </div>
                </div>
              </nav>
              ) : null }
          </div>
        )
        break
      default:
    }

    return (
      <div>
        <div className='container-fluid animated fadeIn search'>
          <RelationsDrawer searchTerm={this.props.searchTerm} />
          {body}
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
