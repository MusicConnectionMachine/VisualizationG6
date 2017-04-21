import React from 'react'
import Header from './Header'
import Searchbar from './Searchbar'
import headerImage from '../../style/img/logo-landing-white.svg'
import '../../style/landing.scss'

const Landing = React.createClass({
  render () {
    return (
      <div>
        <Header />
        <div className='container-fluid'>
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
