import React from 'react'
import { render } from 'react-dom'
import Landing from './components/Landing'
import Search from './components/Search'
import DetailPage from './components/singleentry/DetailPage'
import { BrowserRouter, Match } from 'react-router'
import 'bootstrap/dist/css/bootstrap.css'
import '../style/index.scss'

const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
        <div className='app'>
          <Match exactly pattern='/' component={Landing} />
          <Match pattern='/details/:type/:id'
            component={(props) => {
              return <DetailPage type={props.params.type} id={props.params.id} />
            }} />
          <Match
            pattern='/search/:query'
            component={(props) => {
              return <Search searchTerm={props.params.query} />
            }}
          />
        </div>
      </BrowserRouter>
    )
  }
})

render(<App />, document.getElementById('root'))
