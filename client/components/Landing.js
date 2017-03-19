import React from 'react'
import Searchbar from './Searchbar'
const { object } = React.PropTypes

const Landing = React.createClass({
  contextTypes: {
    router: object
  },
  render () {
    return (
      <div className='home-background--patterns full-height'>
        <div className='container'>
          <div className='center-block text-center text-white margin-top-10-p animated fadeIn'>
            <img src='/style/img/logo-landing-white.svg' alt='Kiwi standing on oval' />
          </div>
          <div className='row margin-top-20-p'>
            <Searchbar />
          </div>
        </div>
      </div>
    )
  }
})

export default Landing
