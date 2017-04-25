import jquery from 'jquery'
import React from 'react'
import { Link } from 'react-router'
import Searchbar from './Searchbar'
import TumLogo from '../../style/img/TUM_Web_Logo_neg.svg'
import McmLogo from '../../style/img/logo/logo-menu.svg'
import 'bootstrap/js/collapse'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.onMenuLinkClicked = this.onMenuLinkClicked.bind(this)
  }

  onMenuLinkClicked (e) {
    e.preventDefault()
    jquery('.navbar-collapse').collapse('hide')
    this.context.router.transitionTo(e.target.getAttribute('href'))
  }

  render () {
    let location = window.location.pathname
    const pages = [
      { path: 'search', name: 'Search' },
      { path: 'embed', name: 'Embed' },
      { path: 'statistics', name: 'Statistics' },
      { path: 'about', name: 'About' }
    ]

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
              <li className={(location === '/' ? 'selected' : '')}><Link onClick={this.onMenuLinkClicked} to='/'>Home</Link></li>
              {pages.map(({ path, name }) => (
                <li key={path} className={(location.indexOf(path) > 0 ? 'selected' : '')}>
                  <Link onClick={this.onMenuLinkClicked} to={`/${path}`}>{name}</Link>
                </li>
              ))}
            </ul>
            <div className='navbar-form navbar-right hidden-sm hidden-xs'>
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

Header.contextTypes = {
  router: React.PropTypes.object
}

export default Header
