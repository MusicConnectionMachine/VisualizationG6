import React from 'react'

class Imprint extends React.Component {
  render () {
    return (
      <div className='container-fluid animated fadeIn'>
        <h2>Imprint & Disclaimer</h2>
        <h3>Imprint</h3>
        <h4>Address</h4>
        <address>
          <strong>Technische Universität München</strong><br />
          Arcisstraße 21<br />
          80333 München<br />
          <abbr title='Phone'>Telefon:</abbr> +49 89 289-01
        </address>

        <h3>Authorised representativey</h3>
        <p>The Technische Universität München is a public body. It is legally represented by the President, Prof. Dr. Dr. H. C. mult. Wolfgang A. Herrmann.</p>

        <h4>Supervisory authority</h4>
        <p>Bavarian Ministry of Education and Culture, Science and Art</p>

        <h4>Content responsibility</h4>
        <address>
          <strong>Dr. Guy Yachdav</strong><br />
          Arcisstr. 19<br />
          80333 München<br />
          E-Mail: gyachdav@rostlab.org
        </address>

        <h3>Liability notice</h3>
        <p>Despite careful content control we assume no liability for the content of external links. For the corresponding content of linked pages, their administrators are responsible. Especially marked contributions in the discussion areas represent the opinion of the author. For the contents of the articles, the authors are solely responsible.</p>
      </div>
    )
  }
}

export default Imprint
