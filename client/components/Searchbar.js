import React from 'react'
const { object, string } = React.PropTypes

const Searchbar = React.createClass({
  propTypes: {
    initSearchTerm: string
  },
  contextTypes: {
    router: object
  },
  getInitialState () {
    return {
      searchTerm: this.props.initSearchTerm
    }
  },
  handleSearchTermChange (event) {
    this.setState({searchTerm: event.target.value})
  },
  handleSearchSubmit (event) {
    event.preventDefault()
    this.context.router.transitionTo(`/search/${this.state.searchTerm}`)
  },
  render () {
    return (
      <div className='parent-center searchbar'>
        <form onSubmit={this.handleSearchSubmit}>
          <input onChange={this.handleSearchTermChange} type='search' className='form-control'
            placeholder='Type your favorite musician.' value={this.state.searchTerm} />
        </form>
      </div>
    )
  }
})

export default Searchbar
