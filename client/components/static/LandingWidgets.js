import React from 'react'
import timelinePhoto from '../../../style/img/timeline.png'
const LandingWidgets = React.createClass({
  render () {
    return (
      <section id='widgets' className='dark-bg container-fluid light-typo padding-top-bottom'>
        <div className='container'>
          <header className='section-header text-center'>
            <h1 className='scrollimation scale-in'>Widgets</h1>
          </header>
          <div className='row'>
            <div className='col-sm-8 col-sm-offset-2'>
              <img className='img-responsive img-center scrollimation fade-left' src={timelinePhoto} alt='' />
              <p className='text-center scrollimation fade-in'>Test</p>
            </div>
          </div>
          <p className='text-center'><a className='btn btn-meflat scrollto white icon-left' href='#contact'><i className='fa fa-arrow-down' />Hire Me</a></p>
        </div>
      </section>
    )
  }
})

export default LandingWidgets
