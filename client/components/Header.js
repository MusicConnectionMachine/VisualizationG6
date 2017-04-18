import React from 'react'
import { Link } from 'react-router'
import Searchbar from './Searchbar'

class Header extends React.Component {
  render () {
    let location = window.location.pathname
    return (
      <nav className='navbar navbar-default navbar-fixed-top'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar'>
              <span className='icon-bar' />
              <span className='icon-bar' />
              <span className='icon-bar' />
            </button>
            <Link className='navbar-brand parent-center' to='/'>
              <h2>MusicConnectionMachine</h2>
            </Link>
          </div>
          <div className='collapse navbar-collapse' id='navbar'>
            <ul className='navbar-nav'>
              <li className={(location.indexOf('about') > 0 ? 'selected' : '') + ' parent-center'}><Link className='' to='/about'>About</Link></li>
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

export default Header
