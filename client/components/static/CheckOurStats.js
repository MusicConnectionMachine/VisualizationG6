import React from 'react'

const CheckOurStats = React.createClass({
  render () {
    return (
      <section id='checkstats' className='container-fluid padding-top-bottom' style={{marginTop: '100px'}}>
        <div className='container'>
          <header className='section-header text-center'>
            <h1 className='scrollimation scale-in'>Check Our Stats</h1>
          </header>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='row parent-center'>
                <div className='col-sm-6'>
                  <h3 className='scrollimation fade-in'>MCM collects facts, opinions, critique reviews, and much more from altogether <strong>250 TB (250,000 Gigabytes)</strong> of data that corresponds to <strong>XX millions</strong> of entries about over hundred thousand composers, <strong>XX musicians</strong> and <strong>XX music works.</strong></h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
})

export default CheckOurStats
