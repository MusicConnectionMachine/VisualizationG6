import React from 'react'
import {Link} from 'react-router'
import Header from './Header'
import groupPhoto from '../../style/img/groupPhoto.jpg'
import '../../style/about.scss'

class About extends React.Component {
  render () {
    return (
      <div className='about'>
        <Header />
        <div className='container-fluid animated fadeIn'>
          <div className='row text-center'>
            <h3>About the Project</h3>
          </div>
          <img className='group-photo' src={groupPhoto} />
          <div className='row' style={{marginTop: '20px'}}>
            <div className='col-md-offset-0 col-md-12 text-center'>
              <p className='text-left'>
                The Music Connection Machine has been developed within the JavaScript Course at the Technical University of Munich.<br /><br />
                Information about classical music is scattered all over the internet in the form of scholarly articles, news stories, blogs, wikis, forums and many other venues.
                Our goal is to bring this knowledge into one place and make it easily accessible.
                We summarize the information about composers, musicians and music works as a set of connections -
                what were the musicians saying about each other and the music works, and what anybody else has written about them online.
                Moreover, whenever we find temporal  or location-based  information, we can present this  information in geographic and historic context.
                The result is a tapestry of information that sums up the knowledge available on the internet about the enchanting world of classical music presented in a fun and interactive way.
              </p>
            </div>
          </div>
          <div className='row' style={{marginTop: '20px'}}>
            <div className='col-md-12'>
              <h3 className='text-center'>Contributors</h3>
              <div className='row text-center'>
                <div className='col-md-offset-1 col-md-10'>
                  <div className='contributors col-md-6'>
                    <h4>Mentors</h4>
                    <ul>
                      <li><a href='https://www.linkedin.com/in/gyachdav'>Guy Yachdav</a></li>
                      <li><a href='https://github.com/sacdallago'>Christian Dallago</a></li>
                      <li><a href='https://bruck.me'>Kordian Bruck</a></li>
                      <li><a href='https://github.com/vviro'>Vladimir Viro</a></li>
                      <li><a href='https://github.com/pfent'>Philipp Fent</a></li>
                      <li><a href='https://github.com/goldbergtatyana'>Tatyana Goldberg</a></li>
                    </ul>
                  </div>
                  <div className='contributors col-md-6'>
                    <h4>Data Aggregation</h4>
                    <ul>
                      <li><a href='https://github.com/LukasNavickas'>Lukas Navickas</a></li>
                      <li><a href='https://github.com/ShilpaGhanashyamGore'>Shilpa Ghanashyam Gore</a></li>
                      <li><a href='https://github.com/angelinrashmi2000'>Angelin Rashmi</a></li>
                      <li><a href='https://github.com/TimHenkelmann'>Tim Henkelmann</a></li>
                      <li><a href='https://github.com/lgfrbcsgo'>Felix Schorer</a></li>
                      <li><a href='https://github.com/anshul0708'>Anshul Sharma</a></li>
                      <li><a href='https://github.com/nyxathid'>Nikita Basargin</a></li>
                      <li><a href='https://github.com/lukasstreit'>Lukas Streit</a></li>
                    </ul>
                  </div>
                  <div className='contributors col-md-6'>
                    <h4>Defining Relationships</h4>
                    <ul>
                      <li><a href='https://github.com/krishenk'>Krishen Kant Kandwal</a></li>
                      <li><a href='https://github.com/ansjin'>Anshul Jindal</a></li>
                      <li><a href='https://github.com/Henni'>Hendrik Leppelsack</a></li>
                      <li><a href='https://github.com/RBirkeland'>René Birkeland</a></li>
                      <li><a href='https://github.com/FelsyWaschbaer'>Daniel Schubert</a></li>
                      <li><a href='https://github.com/Sandr00'>Sandro Bauer</a></li>
                      <li><a href='https://github.com/simonzachau'>Simon Zachau</a></li>
                      <li><a href='https://github.com/Gillian0023'>Lin Ji</a></li>
                    </ul>
                  </div>
                  <div className='contributors col-md-6'>
                    <h4>Visualization</h4>
                    <ul>
                      <li><a href='https://github.com/chaoran-chen'>Chaoran Chen</a></li>
                      <li><a href='https://github.com/lustoykov'>Lyubomir Stoykov</a></li>
                      <li><a href='https://github.com/martomi'>Martin Mihaylov</a></li>
                      <li><a href='https://github.com/demirdagemir'>Emir Demirdag</a></li>
                      <li><a href='https://github.com/syncall'>Markus Sosnowski</a></li>
                      <li><a href='https://github.com/yetolas'>Panagiota Revithi</a></li>
                      <li><a href='https://github.com/ysdevys'>Yanko Sabev</a></li>
                      <li><a href='https://github.com/Binabiko'>Jörn von Henning</a></li>
                      <li><a href='https://github.com/ManekenT'>Tom Hohendorf</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row text-center' style={{marginTop: '20px'}}>
            <h3 className=''>Attributions</h3>
            <p>Sources and Licenses we used are linked on <Link to={'/attribution'}>this page</Link>.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default About
