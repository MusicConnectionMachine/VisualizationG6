import React from 'react'
import Searchbar from './Searchbar'
import headerImage from '../../style/img/logo-landing-white.svg'
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
            <img src={headerImage} alt='Music Connection Machine Logo' />
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
