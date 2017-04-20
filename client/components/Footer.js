import React from 'react'
import { Link } from 'react-router'
import '../../style/footer.scss'
import jQuery from 'jquery'
import facebookLogo from '../../style/img/facebook.svg'
import twitterLogo from '../../style/img/twitter.svg'
import googleLogo from '../../style/img/google-plus.svg'

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
          <div className='col-md-4'>
            <p className='parent-center'>The MusicConnectionMachine</p>
            <Link className='parent-center' to='/about'>
              About
            </Link>
            <Link className='parent-center' to='/legal'>
              Legal
            </Link>
            <a className='parent-center' href='https://github.com/MusicConnectionMachine'>GitHub</a>
          </div>
          <div className='col-md-4'>
            <p className='parent-center'>Partners</p>
            <a className='parent-center' href='https://www.rostlab.org'>Rostlab</a>
            <a className='parent-center' href='http://www.peachnote.com'>Peachnote</a>
            <a className='parent-center' href='http://imslp.org'>IMSLP</a>
          </div>
          <div className='col-md-4'>
            <p className='parent-center'>Social</p>
            <div className='parent-center'>
              <a href='#'><img src={facebookLogo} /></a>
              <a href='#'><img src={twitterLogo} /></a>
              <a href='#'><img src={googleLogo} /></a>
            </div>

            <p className='parent-center'>Follow TUM on:</p>
            <div className='parent-center'>
              <a className='' href='#'>Facebook</a>
              <a className='' href='#'>Twitter</a>
              <a className='' href='#'>Youtube</a>
            </div>
          </div>
        </div>
        <div className='row copyright'>
          <div className='col-sm-6'>{this.state.version}</div>
          <div className='col-sm-6'>
            <div className='pull-right'>
              <span className='glyphicon glyphicon-copyright-mark' /> 2017 MusicConnectionMaschine
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
