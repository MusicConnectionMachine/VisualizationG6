import React from 'react'
import { render } from 'react-dom'
import Bundle from './Bundle'
import Header from './components/Header'
import { BrowserRouter, Match } from 'react-router'
import 'mdbootstrap/css/mdb.min.css'
import { Provider } from 'react-redux'
import store from './states/store'
import 'bootstrap/dist/css/bootstrap.css'
import '../style/index.scss'

const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className='container main-container'>
            <Header />
            <Match exactly pattern='/' component={() => {
              return <Bundle load={() => import('./components/Landing')} />
            }} />
            <Match pattern='/details/:type/:id'
              component={(props) => {
                return <Bundle type={props.params.type} id={props.params.id} load={() => import('./components/singleentry/DetailPage')} />
              }} />
            <Match pattern='/search' component={() => {
              return <Bundle load={() => import('./components/Search')} />
            }} />
          </div>
        </Provider>
      </BrowserRouter>
    )
  }
})

render(<App />, document.getElementById('root'))
