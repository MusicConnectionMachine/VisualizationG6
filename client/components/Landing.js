import React from 'react'
import Searchbar from './Searchbar'
import Header from './Header'
import headerImage from '../../style/img/logo-landing.svg'
import '../../style/landing.scss'

const Landing = React.createClass({
  render () {
    return (
      <div>
        <Header />
        <div className='container-fluid' style={{ width: '70%' }}>
          <div className='center-block text-center text-white margin-top-10-p animated fadeIn'>
            <img src={headerImage} alt='Music Connection Machine Logo' style={{maxWidth: '600px', paddingTop: '30px'}} />
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
