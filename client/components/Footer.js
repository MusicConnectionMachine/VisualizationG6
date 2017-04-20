import React from 'react'
import { Link } from 'react-router'
import '../../style/footer.scss'
import jQuery from 'jquery'

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
            <a className='parent-center' href='#'>Facebook</a>
            <a className='parent-center' href='#'>Twitter</a>
            <a className='parent-center' href='#'>G+</a>
        <div className='row copyright'>
          <div className='col-md-6'>{this.state.version}</div>
          <div className='col-md-6'>
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
