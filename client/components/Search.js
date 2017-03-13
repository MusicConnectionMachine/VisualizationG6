import React from 'react'
import elasticSearchClient from '../services/ElasticSearch'
const { string } = React.PropTypes

const Search = React.createClass({
  propTypes: {
    searchTerm: string
  },
  getInitialState () {
    return {
      searchData: {}
    }
  },
  componentDidMount () {
    elasticSearchClient.search({
      q: this.props.searchTerm
    }).then((response) => {
      this.setState({searchData: response.hits})
    }).catch((error) => {
      console.trace(error.message)
    })
  },
  render () {
    return (
      <div>
        {/* TODO: Header comes here */}
        <pre><code>You searched for "{this.props.searchTerm}" <br />
          {JSON.stringify(this.state.searchData, null, 4)}
        </code></pre>
      </div>
    )
  }
})

export default Search
