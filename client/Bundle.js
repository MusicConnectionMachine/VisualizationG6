import React from 'react'
import Spinner from 'react-spinkit'

export default class Bundle extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      state: 'loading',
      // short for "module" but that's a keyword in js, so "mod"
      mod: null
    }
  }

  componentWillMount () {
    this.load(this.props)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps)
    }
  }

  load (props) {
    this.setState({
      mod: null,
      state: 'loading'
    })
    props.load().then(comp => {
      this.setState({
        mod: comp.default ? comp.default : comp,
        state: 'done'
      })
    }, err => {
      this.setState({state: 'error'})
      console.trace(err)
    })
  }

  render () {
    if (this.state.state === 'loading') {
      return (
        <div className='parent-center'>
          <Spinner spinnerName='double-bounce' />
        </div>
      )
    } else if (this.state.state === 'error') {
      return (
        <div className='parent-center'>
          An Error has occured, please try again later.
        </div>
      )
    }
    if (this.props.type && this.props.id && this.state.mod) {
      return (<this.state.mod type={this.props.type} id={this.props.id} />)
    }
    return this.state.mod ? (<this.state.mod />) : (<div />)
  }
}

Bundle.propTypes = {
  load: React.PropTypes.func,
  children: React.PropTypes.any,
  type: React.PropTypes.string,
  id: React.PropTypes.string
}
