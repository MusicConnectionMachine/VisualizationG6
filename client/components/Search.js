import React from 'react'

const Search = React.createClass({
  render () {
    return (
      <div className='parent-center landing'>
        <div className='container'>
          <div className='row margin-top-20-p'>
            <div className='col-md-12'>
              <input type='search' className='form-control' placeholder='Type your favorite musician.' />
            </div>
          </div>
        </div>
      </div>
    )
  }
})

export default Search
