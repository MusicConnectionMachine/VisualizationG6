import $ from 'jquery'
import apitoken from './apitoken.txt'
const api = 'http://mcmapi.azurewebsites.net'

export default class MCMSearch {

  searchEntities (query, from, size) {
    let getRequest = api + '/search/entities?q=' + query + '&offset=' + from + '&limit=' + size
    let promise = $.ajax({
      type: 'GET',
      headers: {
        'API-KEY': apitoken
      },
      url: getRequest
    })
    return Promise.resolve(promise)
  }

  getEntity (type, id) {
    let getRequest = api + '/' + type + '/' + id
    console.log(getRequest)
    let promise = $.ajax({
      type: 'GET',
      headers: {
        'API-KEY': apitoken
      },
      url: getRequest
    })
    return Promise.resolve(promise)
  }
}
