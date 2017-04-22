import React from 'react'
import Header from './Header'

class About extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <div className='container-fluid animated fadeIn'>
          <strong>About Us, the Universe and Everything</strong>
          <p>There is something!</p>
        </div>
      </div>
    )
  }
}

export default About
