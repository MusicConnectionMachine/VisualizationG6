import React from 'react'
import { Link } from 'react-router'
import '../../style/footer.scss'

class Footer extends React.Component {
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
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
