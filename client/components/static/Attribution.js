import React from 'react'

class Attribution extends React.Component {
  render () {
    return (
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
    )
  }
}

export default Attribution
