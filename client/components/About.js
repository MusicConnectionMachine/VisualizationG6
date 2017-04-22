import React from 'react'
import Header from './Header'
import groupPhoto from '../../style/img/groupPhoto.jpg'
class About extends React.Component {
  render () {
    return (
      <div className='about'>
        <Header />
        <div className='container-fluid animated fadeIn'>
          <img className='group-photo' src={groupPhoto} />
          <div className='row' style={{marginTop: '20px'}}>
            <div className='col-md-12 text-center'>
              <h3>About the Project</h3>
              <p className='text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus,
                itaque, est expedita error aliquid deleniti
                voluptatem ducimus inventore labore autem beatae molestiae. Deserunt nesciunt dolorum maiores illum cum,
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, obcaecati! Quibusdam, voluptate, nulla. Vitae aspernatur amet, modi neque, quis tempore. Labore sunt consectetur odio nemo sint adipisci quam nihil eaque.
                doloribus laboriosam.
              </p>
            </div>
          </div>
          <div className='row' style={{marginTop: '20px'}}>
            <div className='col-md-12 text-center'>
              <h3>Members</h3>
              <ul className='students'>
                <div className='row'>
                  <div className='col-md-6 text-right'>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                  </div>
                  <div className='col-md-6 text-left'>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
