import React from 'react'
import Header from './Header'
import '../../style/about.scss'

class About extends React.Component {
  render () {
    return (
      <div className='about'>
        <Header />
        <div className='container-fluid animated fadeIn'>
         <div className='row' style={{marginTop: '20px'}}>
            <div className='col-md-12 text-center'>
              <h1>About</h1>
            </div>
           <div className='col-md-5 col-sm-10 col-sm-offset-1'>
             <img src={'http://img.wennermedia.com/social/rs-game-of-thrones-8e3695f2-f54d-40e0-9cf6-bddbe5340c11.jpg'} height='500' width='450'/>
           </div>
           <div className='col-md-5 col-md-offset-0 col-sm-10 col-sm-offset-1'>
             <p className='text-left'>Our main focus is to:
                 <li>Provide a summary of the Internet’s knowledge about classical music.</li>
                 <li>Provide an engine that will index and allow everyone to find both facts and opinion about people and works of classical music.</li>
                 <li>Provide a mapping between composers, artists and classical music works.</li>
                 <li>Provide visual tools to navigate these mappings, letting end users explore the data universe by defining their own search terms and context.</li>
                 <li>Create a map of the places on the Internet that contain information about classical music.</li>
                 <li>Provide users to contribute more knowledge → crowd source a la wikipedia. (optional)</li>

               Use cases:
               <li>If one person is claimed to have said something about another person or work, we want to have this quote accessible through our system.</li>
               <li>If people or works have been ascribed certain attributes, we want to collect and aggregate them and present the sources of these claims to our users.</li>
               <li>The map of places on the internet that contain information about classical music will be useful to any follow-up project that wants to pursue similar research without having to scan the CommonCrawl dataset again and create the filtering procedure from scratch.</li>             </p>
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
