/**
 * Created by Yeti on 19-Apr-17.
 */
import React from 'react'

class Imprint extends React.Component {
  render () {
    return (
      <div className='container-fluid animated fadeIn'>
        <div>
          <h1>Imprint</h1>
          <h3>Address</h3>
          <p>Technische Universität München</p>
          <p>Arcisstraße 21, 80333 München</p>
          <p>Telefon: +49 89 289-01</p>
        </div>
        <div>
          <h3>Authorised representative:</h3>
          <p>The Technische Universität München is a public body. It is legally represented by the President, Prof. Dr. Dr. H. C. mult. Wolfgang A. Herrmann.</p>
        </div>
        <div>
          <h3>Supervisory authority:</h3>
          <p>Bavarian Ministry of Education and Culture, Science and Art</p>
        </div>
        <div>
          <h3>Address</h3>
          <p>Dr. Guy Yachdav</p>
          <p>Arcisstr. 19</p>
          <p>80333 München</p>
          <p>E-Mail:<a href='mailto:gyachdav@rostlab.org'>gyachdav@rostlab.org</a></p>
        </div>
        <div>
          <h3>Liability notice</h3>
          <p>Despite careful content control we assume no liability for the content of external links. For the corresponding content of linked pages, their administrators are responsible. </p>
          <p>Especially marked contributions in the discussion areas represent the opinion of the author. For the contents of the articles, the authors are solely responsible.</p>
        </div>
      </div>
    )
  }
}

export default Imprint
