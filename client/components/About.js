import React from 'react'
import Header from './Header'
import groupPhoto from '../../style/img/groupPhoto.jpg'
import '../../style/about.scss'

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
            <div className='col-md-12'>
              <h3 className='text-center'>Contributors</h3>
              <div className='row text-center'>
                <div className='col-md-offset-1 col-md-10'>
                  <div className='contributors col-md-6'>
                    <h4>Mentors</h4>
                    <ul>
                      <li><a href='https://github.com/gyachdav'>Guy Yachdav</a></li>
                      <li><a href='https://github.com/sacdallago'>Christian Dallago</a></li>
                      <li><a href='https://bruck.me'>Kordan Bruck</a></li>
                      <li><a href='https://github.com/vviro'>Vladimir</a></li>
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
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row' style={{marginTop: '20px'}}>
            <div className='container-fluid animated fadeIn legalpage'>
              <h1 className='text-center'>Attributions</h1>
              <p>
                All third party data, images and text retrieved from third
                party sources and presented on this website were obtained in accordance with the publisher's license
                policies.
              </p>
              <table className='table table-responsive' >
                <tbody>
                  <tr>
                    <th>Source</th>
                    <th>Description</th>
                    <th>Reference</th>
                    <th>License</th>
                  </tr>
                  <tr>
                    <td>IMSLP</td>
                    <td>
                      IMSLP stands for the International Music Score Library Project and was started in 2006. The logo on the main page is a capital letter A. It was taken from the beginning of the very first printed book of music, the Harmonice Musices Odhecaton. It was published in Venice in 1501 by Ottaviano Petrucci, the library's namesake.
                    </td>
                    <td ><a href='http://imslp.org/' target='_blank'>http://imslp.org/</a>
                    </td>
                    <td><a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a></td>
                  </tr>
                  <tr>
                    <td>DBPedia</td>
                    <td>DBpedia is a crowd-sourced community effort to extract structured information from Wikipedia and make this information available on the Web. DBpedia allows you to ask sophisticated queries against Wikipedia, and to link the different data sets on the Web to Wikipedia data.
                    </td>
                    <td><a href='http://dbpedia.org/' target='_blank'>http://dbpedia.org/</a>
                    </td>
                    <td><a href='https://creativecommons.org/licenses/by-sa/2.0/' target='_blank'>CC-BY-SA</a>
                    </td>
                  </tr>
                  <tr>
                    <td >Worldcat</td>
                    <td>
                      WorldCat.org lets you search the collections of libraries in your community and thousands more around the world.
                    </td>
                    <td>
                      <a href='https://www.worldcat.org/' target='_blank'>https://www.worldcat.org/</a>
                    </td>
                    <td>
                      <a href='https://creativecommons.org/licenses/by-sa/2.0/' target='_blank' >CC-BY-SA</a>
                    </td>
                  </tr>
                  <tr>
                    <td>MusicBrainz</td>
                    <td>
                      MusicBrainz is a community-maintained open source encyclopedia of music information.
                    </td>
                    <td><a href='https://musicbrainz.org/' target='_blank'>https://musicbrainz.org/</a>
                    </td>
                    <td><a href='https://creativecommons.org/licenses/by-sa/2.0/' target='_blank' >CC-BY-SA</a>
                    </td>
                  </tr>
                  <tr>
                    <td>AllMusic</td>
                    <td>
                      AllMusic is a comprehensive and in-depth resource for finding out more about the albums, bands, musicians and songs you love.
                    </td>
                    <td><a href='http://www.allmusic.com/' target='_blank'>http://www.allmusic.com/</a>
                    </td>
                    <td><a href='https://creativecommons.org/licenses/by-sa/2.0/' target='_blank' >CC-BY-SA</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Tom Hohendorf</td>
                    <td>
                      Tom Hohendorf designed our Icons and Logo.
                    </td>
                    <td><a href='https://github.com/manekenT' target='_blank'>https://github.com/manekenT</a>
                    </td>
                    <td><a href='https://creativecommons.org/licenses/by-sa/2.0/' target='_blank' >CC-BY-SA</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
