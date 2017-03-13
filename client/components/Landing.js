import React from 'react'
const { object } = React.PropTypes

const Landing = React.createClass({
  contextTypes: {
    router: object
  },
  getInitialState () {
    return {
      searchTerm: ''
    }
  },
  handleSearchTermChange (event) {
    this.setState({ searchTerm: event.target.value })
  },
  handleSearchSubmit (event) {
    event.preventDefault()
    this.context.router.transitionTo(`/search/${this.state.searchTerm}`)
  },
  render () {
    return (
      <div id='landing'>
        <h1 className='center-block text-center text-white margin-top-10-p'>Music Connection Machine</h1>
        <div className='parent-center landing'>
          <div className='container'>
            <div className='row margin-top-20-p'>
              <div className='col-md-12'>
                <form onSubmit={this.handleSearchSubmit}>
                  <input onChange={this.handleSearchTermChange} type='search' className='form-control' placeholder='Type your favorite musician.' />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

export default Landing
