import React from 'react'
import ElasticSearch from 'elasticsearch'

const client = new ElasticSearch.Client({
  host: 'localhost:9200',
  log: 'trace'
})

const Search = React.createClass({
  getInitialState () {
    return {
      searchData: {}
    }
  },
  componentDidMount () {
    client.search({
      q: 'mozart'
    }).then((response) => {
      this.setState({searchData: response.hits})
    }).catch((error) => {
      console.trace(error.message)
    })
  },
  render () {
    return (
      <pre><code>{JSON.stringify(this.state.searchData, null, 4)}</code></pre>
    )
  }
})

export default Search
