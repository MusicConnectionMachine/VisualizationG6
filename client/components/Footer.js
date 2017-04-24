import React from 'react'
import { Link } from 'react-router'
import '../../style/footer.scss'
import jQuery from 'jquery'
import 'font-awesome/scss/font-awesome.scss'

class Footer extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      version: ''
    }
  }

  componentDidMount () {
    let component = this
    jQuery.get('/VERSION', function (data) {
      component.setState({version: data})
    })
  }

  render () {
    return (
      <div className='container-fluid footer'>
        <div className='row'>
          <div className='col-md-3'>
            <ul className='partners'>
              <li className='parent-center'><a href='https://www.rostlab.org'>Rostlab</a></li>
              <li className='parent-center'><a href='http://www.peachnote.com'>Peachnote</a></li>
              <li className='parent-center'><a href='http://imslp.org'>IMSLP</a></li>
            </ul>
          </div>
          <div className='col-md-6'>
            <ul className='foot-nav'>
              <li><Link className='parent-center' to='/about'>About</Link></li>
              <li><Link className='parent-center' to='/imprint'>Imprint & Disclaimer</Link></li>
              <li><Link className='parent-center' to='/attribution'>Attributions</Link></li>
              <li><Link className='parent-center' to='/privacy'>Privacy Policy</Link></li>
            </ul>
          </div>
          <div className='col-md-3 parent-center' style={{ height: '95px' }}>
            <ul className='social-links'>
              <li><a href='#'><i className='fa fa-twitter' aria-hidden='true' /></a></li>
              <li><a href='#'><i className='fa fa-facebook' aria-hidden='true' /></a></li>
              <li><a href='https://github.com/MusicConnectionMachine'><i className='fa fa-github' aria-hidden='true' /></a></li>
              <li><a href='https://github.com/MusicConnectionMachine'><i className='fa fa-google-plus' aria-hidden='true' /></a></li>
            </ul>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-2'>
            Version: {this.state.version}
          </div>
          <div className='col-sm-8 pull-right'>
            <Link className='pull-right' to='/'><i className='fa fa-copyright' aria-hidden='true' />&nbsp;2017 Javascript Technology Seminar</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
