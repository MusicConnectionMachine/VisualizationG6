import $ from 'jquery'

const api = 'http://mcm.azure.com'

export default class MCMSearch {

  searchEntities (query, from, size) {
    let getRequest = api + '/search?query=' + query + '&from=' + from + '&size=' + size
    $.getJSON(getRequest, undefined, function (data) {
      return JSON.parse(data)
    })
  }

  getEntity (type, id) {
    let getRequest = api + '/' + type + '/' + id
    $.getJSON(getRequest, undefined, function (data) {
      return JSON.parse(data)
    })
  }

}