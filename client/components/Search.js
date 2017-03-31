import React from 'react'
import { connect } from 'react-redux'
import elasticSearchClient from '../services/ElasticSearch'
import Searchbar from './Searchbar'
import SearchResult from './SearchResult'
import Spinner from 'react-spinkit'
const numberOfResults = 12
import Pagination from '../components/Pagination'

class Search extends React.Component {

  constructor () {
    super()

    this.nextResults = this.nextResults.bind(this)
    this.lastResults = this.lastResults.bind(this)

    this.state = {
      activePage: 15,
      searchResult: [],
      searchState: 'none',
      oldSearch: '',
      totalResults: 0,
      from: 0
    }
  }

  handlePageChange (pageNumber) {
    this.setState({activePage: pageNumber})
  }


  componentDidMount () {
    this.queryDatabase(0)
  }

  queryDatabase (from) {
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
            <div>
              < Pagination
                activePage={this.state.activePage}
                itemsCountPerPage={10}
                totalItemsCount={450}
                pageRangeDisplayed={5}
                onChange={this.handlePageChange}
              />
            </div>

          </nav>
        )
        break
      default:
    }

    React.render(<Search />, document.getElementById("root"));

    return (
      <div className='container'>

        <div className={this.state.searchState === 'done' ? 'row margin-top-10-p' : 'row margin-top-20-p'}>
          <Searchbar initSearchTerm={this.props.searchTerm} />
        </div>
        <div className='margin-top-5-p'>
          <table className='table animated fadeIn'>
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
