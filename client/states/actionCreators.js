import { SET_SEARCH_TERM } from './actions'

/**
* Function takes a searchTerm,
* returns a correctly shaped action
**/
export function setSearchTerm (searchTerm) {
  return { type: SET_SEARCH_TERM, searchTerm }
}
