import React from 'react'
import Searchbar from './Searchbar'
const { object } = React.PropTypes

const Landing = React.createClass({
  contextTypes: {
    router: object
  },
  render () {
    return (
      <div className='container'>
        <h1 className='center-block text-center text-white margin-top-10-p'>Music Connection Machine</h1>

        <div className='row margin-top-20-p'>
          <Searchbar />
        </div>
      </div>
    )
  }
})

export default Landing
