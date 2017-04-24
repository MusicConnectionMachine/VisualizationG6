import React from 'react'
import Searchbar from './Searchbar'
import LandingWidgets from './static/LandingWidgets'
import CheckOurStats from './static/CheckOurStats'
import headerImage from '../../style/img/logo/logo-landing.svg'
import '../../style/landing.scss'

const Landing = React.createClass({
  render () {
    return (
      <div>
        <div className='container-fluid' style={{ width: '70%', height: '60vh' }}>
          <div className='center-block text-center text-white margin-top-10-p animated fadeIn'>
            <img src={headerImage} alt='Music Connection Machine Logo' style={{maxWidth: '600px', paddingTop: '30px'}} />
            <h3 className='margin-top-5-p' style={{color: 'rgb(51, 51, 51)'}}>Discover connections between composers, musicians and music works.</h3>
          </div>
          <div className='row margin-top-10-p'>
            <Searchbar displayHelpText />
          </div>
        </div>
        <LandingWidgets />
        <CheckOurStats />
      </div>
    )
  }
})

export default Landing
