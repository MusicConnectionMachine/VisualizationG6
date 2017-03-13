import React from 'react'
import elasticSearchClient from '../services/ElasticSearch'

const Search = React.createClass({
  getInitialState () {
    return {
      searchData: {}
    }
  },
  componentDidMount () {
    elasticSearchClient.search({
      q: 'mozart'
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
        <pre><code>{JSON.stringify(this.state.searchData, null, 4)}</code></pre>
      </div>
    )
  }
})

export default Search
