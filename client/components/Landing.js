import React from 'react'
import Searchbar from './Searchbar'
import LandingWidgets from './static/LandingWidgets'
import headerImage from '../../style/img/logo/logo-landing.svg'
import '../../style/landing.scss'

const Landing = React.createClass({
  render () {
    return (
      <div>
        <div className='container-fluid' style={{ width: '70%', height: '60vh' }}>
          <div className='center-block text-center text-white margin-top-10-p animated fadeIn'>
            <img src={headerImage} alt='Music Connection Machine Logo' style={{maxWidth: '600px', paddingTop: '30px'}} />
          </div>
          <div className='row margin-top-10-p'>
            <Searchbar displayHelpText />
          </div>
        </div>
        <LandingWidgets />
      </div>
    )
  }
})

export default Landing
