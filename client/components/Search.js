import React from 'react'
import { connect } from 'react-redux'
import MCMSearch from '../services/MCMSearch'
import SearchResult from './SearchResult'
import Spinner from 'react-spinkit'
import RelationsDrawer from './RelationsDrawer'
import Searchbar from './Searchbar'
import '../../style/search.scss'
import Pagination from './Pagination'
const numberOfResults = 12

function Loading () {
  return (
    <div className='parent-center'>
      <Spinner spinnerName='double-bounce' />
    </div>
  )
}

function Error () {
  return (
    <div className='search-error'>An error has occured, please try again</div>
  )
}

class Search extends React.Component {

  constructor () {
    super()

    this.nextArtists = this.nextArtists.bind(this)
    this.lastArtists = this.lastArtists.bind(this)
    this.nextWorks = this.nextWorks.bind(this)
    this.lastWorks = this.lastWorks.bind(this)
    this.mcmapi = new MCMSearch()

    this.state = {
      artists: [],
      works: [],
      errorArtists: false,
      errorWorks: false,
      oldSearch: '',
      totalArtists: 0,
      totalWorks: 0,
      fromArtists: 0,
      fromWorks: 0
    }
  }

  componentDidMount () {
    this.queryArtists(0)
    this.queryWorks(0)
  }

  queryArtists (from) {
    if (this.props.searchTerm.length > 0) {
      this.state.oldSearch = this.props.searchTerm

      let me = this
      this.mcmapi.searchEntities('artists', this.props.searchTerm, from, numberOfResults).then(function (response) {
        me.setState({artists: response.items, totalArtists: response.total, fromArtists: from, errorArtists: false})
      }, function (error) {
        me.setState({errorArtists: true})
        console.trace(error.message)
      })
    }
  }

  queryWorks (from) {
    if (this.props.searchTerm.length > 0) {
      this.state.oldSearch = this.props.searchTerm

      let me = this
      this.mcmapi.searchEntities('works', this.props.searchTerm, from, numberOfResults).then(function (response) {
        me.setState({works: response.items, totalWorks: response.total, errorWorks: false, fromWorks: from})
      }, function (error) {
        me.setState({errorWorks: true})
        console.trace(error.message)
      })
    }
  }

  nextArtists (event) {
    this.queryArtists(this.state.fromArtists + numberOfResults)
  }

  lastArtists (event) {
    this.queryArtists(this.state.fromArtists - numberOfResults)
  }

  nextWorks (event) {
    this.queryWorks(this.state.fromWorks + numberOfResults)
  }

  lastWorks (event) {
    this.queryWorks(this.state.fromWorks - numberOfResults)
  }

  render () {
    let body
    let key = 0

    if (this.props.searchTerm.length <= 0) {
      body = (
        <div>
          <div className='searchMessage visible-xs visible-sm help-block'>Just start searching with typing your
            favourite composer, music work or musician here!
          </div>
          <div className='searchMessage hidden-xs hidden-sm'>Just start searching with typing your favourite composer,
            music work or musician on top right corner!
          </div>
        </div>
      )
    } else if (this.state.oldSearch !== this.props.searchTerm) {
      this.queryArtists(0)
      this.queryWorks(0)
    } else if (this.state.totalArtists + this.state.totalReleases + this.state.totalWorks <= 0) {
      body = (<div className='searchMessage'>Sorry, we could not find anything for: {this.props.searchTerm}</div>)
    } else {
      body = (
        <div>
          { this.state.artists.length > 0 || this.state.errorArtists ? (<h2>Artists</h2>) : null }
          { this.state.errorArtists ? (<Error />) : null}
          { this.state.artists.length > 0 ? (
            <div>
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
              <Pagination current={this.state.fromArtists} total={this.state.totalArtists} step={numberOfResults} next={this.nextArtists} last={this.lastArtists} />
            </div>) : !this.state.errorArtists ? <Loading /> : null
          }

          { this.state.works.length > 0 || this.state.errorWorks ? (<h2>Works</h2>) : null }
          { this.state.errorWorks ? (<Error />) : null}
          { this.state.works.length > 0 ? (
            <div>
              <table className='table table-hover'>
                <thead>
                  <tr>
                    <th className='hidden-xs'>Type</th>
                    <th>Title</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.works.map(data => (<SearchResult type='works' key={key++} myData={data} />))}
                </tbody>
              </table>
              <Pagination current={this.state.fromWorks} total={this.state.totalWorks} step={numberOfResults} next={this.nextWorks} last={this.lastWorks} />
            </div>) : !this.state.errorWorks ? <Loading /> : null
          }

          <div className='text-right margin-bottom-10-px'>
            <small>{this.state.totalWorks + this.state.totalArtists} Results</small>
          </div>
        </div>
      )
    }

    return (
      <div>
        <div className='container-fluid animated fadeIn search'>
          <div className='visible-xs visible-sm'>
            <Searchbar />
          </div>
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
