import React from 'react'
import Search from './Search'

const App = React.createClass({
  render () {
    return (
      <div id='app'>
        <h1 className='center-block text-center text-white margin-top-10-p'>Music Connection Machine</h1>
        <Search />
      </div>
    )
  }
})

export default App
