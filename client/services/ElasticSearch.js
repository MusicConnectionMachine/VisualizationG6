import ElasticSearch from 'elasticsearch'

const client = new ElasticSearch.Client({
  host: 'http://elasticsearch-a2e1f328-1.352d537d.cont.dockerapp.io:9200/',
  log: 'trace'
})

export default client
