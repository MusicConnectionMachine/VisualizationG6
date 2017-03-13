import ElasticSearch from 'elasticsearch'

const client = new ElasticSearch.Client({
  host: 'localhost:9200',
  log: 'trace'
})

export default client
