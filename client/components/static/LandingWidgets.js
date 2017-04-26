import React from 'react'
import timelinePhoto from '../../../style/img/timeline.png'
import relationPhoto1 from '../../../style/img/relation-widget-1.png'
import relationPhoto2 from '../../../style/img/relation-widget-2.png'
import mapPhoto from '../../../style/img/map-widget.png'

const LandingWidgets = React.createClass({
  render () {
    return (
      <section id='widgets' className='padding-top-bottom' style={{marginTop: '100px'}}>
        <div className='container-fluid'>
          <header className='section-header text-center'>
            <h1 className='scrollimation scale-in'>Widgets</h1>
          </header>
          <div className='row'>
            <h2 className='text-center'>Map</h2>
          </div>
          <div className='row margin-top-5-p'>
            <div className='col-md-5'>
              <p className='text-center scrollimation fade-in'>This widget presents the base for visualizing geographical locations that left a mark in the world of classical music. The widget is a work in progress and many more locations are still to be added.</p>
            </div>
            <div className='col-md-7'>
              <img className='img-responsive img-center scrollimation fade-left' src={mapPhoto} alt='' />
            </div>
          </div>
          <div className='row'>
            <p className='text-center'><a className='btn btn-meflat' href='#'>Explore</a></p>
          </div>
          <div className='row'>
            <h2 className='text-center'>Relations</h2>
          </div>
          <div className='row margin-top-5-p'>
            <div className='col-md-7'>
              <img className='img-responsive img-center scrollimation fade-left' src={relationPhoto1} alt='' />
              <img className='img-responsive img-center scrollimation fade-left' src={relationPhoto2} alt='' />
            </div>
            <div className='col-md-5'>
              <p className='text-center scrollimation fade-in'>Seamlessly navigate through millions of connections between composers, musicians and music works.</p>
            </div>
          </div>
          <div className='row'>
            <p className='text-center'><a className='btn btn-meflat' href='#'>Explore</a></p>
          </div>
          <div className='row'>
            <h2 className='text-center'>Timeline</h2>
          </div>
          <div className='row margin-top-5-p'>
            <div className='col-md-5'>
              <p className='text-center scrollimation fade-in'>Scroll through the timeline and see what internet knows about the history of music.</p>
            </div>
            <div className='col-md-7'>
              <img className='img-responsive img-center scrollimation fade-left' src={timelinePhoto} alt='' />
            </div>
          </div>
          <div className='row'>
            <p className='text-center'><a className='btn btn-meflat' href='#'>Explore</a></p>
          </div>
        </div>
      </section>
    )
  }
})

export default LandingWidgets
