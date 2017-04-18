import React from 'react'
import { Link } from 'react-router'
import Searchbar from './Searchbar'

class Header extends React.Component {
  render () {
    return (
      <nav className='navbar navbar-default navbar-fixed-top'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <Link className='navbar-brand parent-center' to='/'>
              <h2 className=''>Music Connection Machine</h2>
            </Link>
          </div>
          <div className='navbar-form navbar-right'>
            <Searchbar />
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
