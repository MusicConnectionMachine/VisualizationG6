import React from 'react'
import { render } from 'react-dom'
import Landing from './components/Landing'
import Search from './components/Search'
import DetailPage from './components/singleentry/DetailPage'
import Timeline from './components/timeline/Timeline'
import { BrowserRouter, Match } from 'react-router'
import 'mdbootstrap/css/mdb.min.css'
import { Provider } from 'react-redux'
import store from './states/store'
import '../style/index.scss'

const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className='app'>
            <Match exactly pattern='/' component={Landing} />
            <Match pattern='/details/:type/:id'
              component={(props) => {
                return <DetailPage type={props.params.type} id={props.params.id} />
              }} />
            <Match pattern='/search' component={Search} />
            <Match pattern='/timeline' component={Timeline} />
          </div>
        </Provider>
      </BrowserRouter>
    )
  }
})

render(<App />, document.getElementById('root'))
