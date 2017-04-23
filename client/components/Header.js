import React from 'react'
import { Link } from 'react-router'
import Searchbar from './Searchbar'
import TumLogo from '../../style/img/TUM_Web_Logo_neg.svg'
import McmLogo from '../../style/img/logo/logo-menu.svg'
import 'bootstrap/js/collapse'

class Header extends React.Component {
  render () {
    let location = window.location.pathname

    return (
      <nav className='navbar navbar-default navbar-fixed-top'>
        <div className='tum-header row'>
          <div className='col-md-4 pull-left' style={{margin: '10px'}}>Technical University of Munich</div>
          <div className='col-md-4 pull-right' style={{paddingRight: '50px', marginTop: '8px'}}>
            <a href='http://www.tum.de' target='_blank'>
              <img className='tum-logo pull-right' src={TumLogo} />
            </a>
          </div>
        </div>
        <div className='container-fluid navigation'>
          <div className='navbar-header'>
            <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar'>
              <span className='icon-bar' />
              <span className='icon-bar' />
              <span className='icon-bar' />
            </button>
            <Link className='navbar-brand parent-center' to='/'>
              <img src={McmLogo} style={{maxHeight: '40px', paddingTop: '5px'}} />
            </Link>
          </div>
          <div className={'collapse navbar-collapse '} id='navbar'>
            <ul className='nav navbar-nav nav-menu'>
              <li className={(location === '/' ? 'selected' : '')}><Link className='' to='/'>Home</Link></li>
              <li className={(location.indexOf('search') > 0 ? 'selected' : '')}><Link to='/search'>Search</Link></li>
              <li className={(location.indexOf('about') > 0 ? 'selected' : '')}><Link className='' to='/about'>About</Link></li>
              <li className={(location.indexOf('statistics') > 0 ? 'selected' : '')}><Link className='' to='/statistics'>Statistics</Link></li>
              <li className={(location.indexOf('embed') > 0 ? 'selected' : '')}><Link className='' to='/embed'>Embed</Link></li>
            </ul>
            <div className='navbar-form navbar-right'>
              <Searchbar />
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

const { bool } = React.PropTypes
Header.propTypes = {
  showSearch: bool
}

export default Header
