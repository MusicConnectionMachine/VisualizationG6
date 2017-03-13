import React from 'react'

const Landing = React.createClass({
  render () {
    return (
      <div id='landing'>
        <h1 className='center-block text-center text-white margin-top-10-p'>Music Connection Machine</h1>
        <div className='parent-center landing'>
          <div className='container'>
            <div className='row margin-top-20-p'>
              <div className='col-md-12'>
                <input type='search' className='form-control' placeholder='Type your favorite musician.' />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

export default Landing
