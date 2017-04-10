import React from 'react'
import { connect } from 'react-redux'
import { setSearchTerm } from '../states/actionCreators'
import Autocomplete from 'react-autocomplete'
const { object, string, func } = React.PropTypes

class Searchbar extends React.Component {

  constructor (props) {
    super(props)

    this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)

    this.state = {
      suggestions: [ 'Mozart', 'Beethoven', 'Leopold Mozart', 'father of Mozart' ],
      searchTerm: props.searchTerm
    }
  }

  handleSearchTermChange (event) {
    let value = event.target.value
    this.setState({searchTerm: value})
    this.props.dispatch(setSearchTerm(value))
    // TODO query Database for suggestions
  }

  handleSearchSubmit (event) {
    event.preventDefault()

    this.context.router.transitionTo('/search')
  }

  getItemValue (item) {
    return item
  }

  render () {
    return (
      <div className='parent-center searchbar animated fadeIn'>
        <form onSubmit={this.handleSearchSubmit}>
          <Autocomplete
            getItemValue={this.getItemValue}
            inputProps={{
              type: 'search',
              className: 'form-control',
              placeholder: 'Type your favorite musician.'
            }}
            items={this.state.suggestions}
            onChange={this.handleSearchTermChange}
            onSelect={(value) => {
              this.setState({searchTerm: value})
              this.props.dispatch(setSearchTerm(value))
            }}
            renderItem={(item, isHighlighted) => (
              <div className={'list-group-item' + (isHighlighted ? ' active' : '')}>
                { item }
              </div>
            )}
            renderMenu={(items, value, style) => (
              <div className='list-group' children={items} />
            )}
            wrapperStyle={{}}
            value={this.state.searchTerm}
          />
        </form>
      </div>
    )
  }
}

Searchbar.propTypes = {
  searchTerm: string,
  dispatch: func
}

Searchbar.contextTypes = {
  router: object
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Searchbar)
