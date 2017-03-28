import React from 'react'
import { connect } from 'react-redux'
const { object, string } = React.PropTypes

const Searchbar = React.createClass({
  propTypes: {
    searchTerm: string
  },
  contextTypes: {
    router: object
  },
  handleSearchTermChange (event) {
    this.setState({searchTerm: event.target.value})
  },
  handleSearchSubmit (event) {
    event.preventDefault()
    this.context.router.transitionTo(`/search/${this.props.searchTerm}`)
  },
  render () {
    return (
      <div className='parent-center searchbar animated fadeIn'>
        <form onSubmit={this.handleSearchSubmit}>
          <input onChange={this.handleSearchTermChange} type='search' className='form-control'
            placeholder='Type your favorite musician.' value={this.props.searchTerm} />
        </form>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Searchbar)
