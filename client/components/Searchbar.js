import React from 'react'
import { connect } from 'react-redux'
import { setSearchTerm } from '../states/actionCreators'
const { object, string, func } = React.PropTypes

const Searchbar = React.createClass({
  propTypes: {
    searchTerm: string,
    dispatch: func
  },
  contextTypes: {
    router: object
  },
  handleSearchTermChange (event) {
    this.props.dispatch(setSearchTerm(event.target.value))
  },
  handleSearchSubmit (event) {
    event.preventDefault()
    this.context.router.transitionTo('/search')
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
