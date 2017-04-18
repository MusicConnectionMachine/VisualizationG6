import React from 'react'
import { render } from 'react-dom'
import Bundle from './Bundle'
import Header from './components/Header'
import { BrowserRouter, Match } from 'react-router'
import { Provider } from 'react-redux'
import store from './states/store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/js/collapse'
import 'mdbootstrap/css/mdb.min.css'
import '../style/index.scss'
import Footer from './components/Footer'
import Landing from './components/Landing'

const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className='container main-container'>
            <Header />
            <div className='main-page'>
              <Match exactly pattern='/' component={Landing} />
              <Match pattern='/details/:type/:id'
                component={(props) => {
                  return <Bundle type={props.params.type} id={props.params.id} load={() => import('./components/singleentry/DetailPage')} />
                }} />
              <Match exactly pattern='/search' component={() => {
                return <Bundle load={() => import('./components/Search')} />
              }} />
              <Match exactly pattern='/about' component={() => {
                return <Bundle load={() => import('./components/About')} />
              }} />
              <Match exactly pattern='/legal' component={() => {
                return <Bundle load={() => import('./components/Legal')} />
              }} />
            </div>
            <Footer />
          </div>
        </Provider>
      </BrowserRouter>
    )
  }
})

render(<App />, document.getElementById('root'))
