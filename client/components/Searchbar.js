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
      suggestions: this.getSuggestionsFromCookie(props.searchTerm),
      searchTerm: props.searchTerm
    }
  }

  handleSearchTermChange (event) {
    let value = event.target.value
    this.setState({searchTerm: value})
    this.props.dispatch(setSearchTerm(value))

    let suggestions = this.getSuggestionsFromCookie(value)
    if (suggestions.length > 0) {
      this.setState({suggestions: suggestions})
    }
  }

  getSuggestionsFromCookie (searchString) {
    let cookie = document.cookie
    if (cookie !== undefined && cookie !== null && cookie.length > 0) {
      try {
        let suggestions = JSON.parse(cookie)
        if (suggestions instanceof Array && suggestions.length > 0) {
          return this.retrieveSuggestions(searchString, suggestions)
        }
      } catch (err) {
        console.log(err)
        document.cookie = ''
      }
    }
    return []
  }

  retrieveSuggestions (searchString, inputArray) {
    let suggestions = []
    let size = inputArray.length
    for (let i = 0; i < size; i++) {
      let entry = inputArray[i]
      if (entry.name.indexOf(searchString) === 0) {
        suggestions.push(entry)
      }
    }
    return suggestions.sort((a, b) => {
      let result = b.counter - a.counter
      if (result === 0) {
        result = a.name.localeCompare(b.name)
      }
      return result
    }).slice(0, 7).map((entry) => entry.name)
  }

  handleSearchSubmit (event) {
    event.preventDefault()

    if (this.state.searchTerm.length > 0) {
      let cookie = document.cookie
      let suggestions = []
      if (cookie !== undefined && cookie !== null && cookie.length > 0) {
        suggestions = JSON.parse(cookie)
      }
      let included = false
      let size = suggestions.length
      for (let i = 0; i < size; i++) {
        let entry = suggestions[i]
        if (entry.name === this.state.searchTerm) {
          entry.counter = entry.counter + 1
          included = true
          break
        }
      }
      if (!included) {
        suggestions.push({name: this.state.searchTerm, counter: 1})
      }
      document.cookie = JSON.stringify(suggestions)
    }

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
