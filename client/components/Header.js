import React from 'react'
import { Link } from 'react-router'
import Searchbar from './Searchbar'
import TumLogo from '../../style/img/TUM_Web_Logo_neg.svg'

class Header extends React.Component {
  render () {
    let location = window.location.pathname
    let utilSpace, colClass
    if (location !== '/') {
      utilSpace = (
        <div className='col-md-4 parent-center'>
          <div className='navbar-form navbar-right'>
            <Searchbar />
          </div>
        </div>
      )
      colClass = ''
    } else {
      colClass = 'pull-right'
    }
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
        <div className='container-fluid navigation row parent-center' style={{ padding: '0px 20px' }}>
          <div className='navbar-header col-md-4'>
            <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar'>
              <span className='icon-bar' />
              <span className='icon-bar' />
              <span className='icon-bar' />
            </button>
            <Link className='navbar-brand parent-center' to='/'>
              <h2>MusicConnectionMachine</h2>
            </Link>
          </div>
          <div className={'col-md-4 parent-center ' + colClass} id='navbar'>
            <ul className='navbar-nav pull-right nav-menu'>
              <li className='parent-center'><a href='http://54.68.164.199:8083' target='_blank'>Plugins</a></li>
              <li className='parent-center'><a href='https://github.com/MusicConnectionMachine/api' target='_blank'>API</a></li>
              <li className={(location.indexOf('about') > 0 ? 'selected' : '') + ' parent-center'}><Link className='' to='/about'>About</Link></li>
            </ul>
          </div>
          {utilSpace}
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
