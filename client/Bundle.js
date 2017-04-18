import React from 'react'

export default class Bundle extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
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
      mod: null
    })
    props.load().then(comp => {
      this.setState({
        mod: comp.default ? comp.default : comp
      })
    })
  }

  render () {
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
