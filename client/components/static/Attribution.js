/**
 * Created by Yeti on 19-Apr-17.
 */
import React from 'react'

class Imprint extends React.Component {
  render () {
    return (
      <div className='container-fluid animated fadeIn'>
        <div>
          <h1>Attributions</h1>
          <p>All third party data, images and text retrieved from third party sources and presented on this website were obtained in accordance with the publisher's license policies.</p>
          <table className='table table-responsive' border='1'>
            <tbody>
            <tr>
              <th><h4><strong>Source</strong></h4></th>
              <th><h4><strong>Description</strong></h4></th>
              <th><h4><strong>Reference</strong></h4></th>
              <th><h4><strong>License</strong></h4></th>
            </tr>
            <tr>
              <td>A Wiki of Ice and Fire</td>
              <td>A Wiki of Ice and Fire is a fan-based wiki, dedicated to George R. R. Martin's created universe, covering the Novels, HBO's Game of Thrones TV series and other sources. Our goal is to build this wiki into as complete and comprehensive a guide of that universe as possible. The Wiki is part of the Westeros.org community of fans of the series, that exist since 1999.</td>
              <td><a href='http://awoiaf.westeros.org/'>awoiaf.westeros.org/</a></td>
              <td><a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a></td>
            </tr>
            <tr>
              <td>Game of Thrones wiki</td>
              <td>Launched in 2006 by founder Jimmy Wales, Wikia Inc. is the home of Fandom and the largest entertainment fan site in the world.</td>
              <td><a href='http://gameofthrones.wikia.com/'>gameofthrones.wikia.com/</a></td>
              <td><a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a></td>
            </tr>
            <tr>
              <td>404 image</td>
              <td></td>
              <td><a href='http://vignette4.wikia.nocookie.net'>vignette4.wikia.nocookie.net</a></td>
              <td><a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a></td>
            </tr>
            <tr>
              <td>MediaWiki</td>
              <td></td>
              <td><a href='http://www.wikia.com/explore'>www.wikia.com/explore</a></td>
              <td><a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a></td>
            </tr>
            <tr>
              <td>Wikipedia</td>
              <td>Wikipedia is a multilingual, web-based, free-content encyclopedia project supported by the Wikimedia Foundation and based on a model of openly editable content.</td>
              <td><a href='https://en.wikipedia.org/wiki/Main_Page'>en.wikipedia.org/wiki/Main_Page</a></td>
              <td><a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a></td>
            </tr>
            <tr>
              <td>Twitter</td>
              <td>Twitter is an online-social network for short-messages.</td>
              <td><a href='https://twitter.com'>twitter.com</a></td>
              <td><a href='https://twitter.com/tos?lang=en#content'>Twitter Terms of Service</a></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Imprint