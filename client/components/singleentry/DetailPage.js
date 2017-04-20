import React from 'react'
import DetailTable from './DetailTable'
import RelationshipGraph from './RelationshipGraph'
import Comments from './Comments'
import elasticSearchClient from '../../services/ElasticSearch'
import '../../../style/details.scss'

export default class DetailPage extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      myData: '',
      loading: 'loading'
    }
  }

  componentDidMount () {
    elasticSearchClient.search({
      index: 'music',
      type: this.props.type,
      body: {
        query: {
          match: {
            _id: this.props.id
          }
        }
      }
    }).then((response) => {
      if (response.hits && response.hits.total > 0) {
        this.setState({myData: response.hits.hits[0]._source, loading: 'done'})
      } else {
        this.setState({myData: '', loading: 'error'})
      }
    }).catch((error) => {
      console.trace(error.message)
      this.setState({myData: '', loading: 'error'})
    })
  }

  render () {
    if (this.state.loading === 'error') {
      return (
        <div className='container-fluid'>
          <div className='searchMessage margin-top-20-p'>
            Could not display results. Please try again.
          </div>
        </div>
      )
    } else if (this.state.loading === 'loading') {
      return (
        <div className='container-fluid'>
          <div className='searchMessage margin-top-20-p'>Loading...</div>
        </div>
      )
    }
    var title
    if (this.props.type === 'composition') {
      title = this.state.myData['Work Title']
    }
    return (
      <div className='container-fluid'>
        <div className='margin-top-5-p row'>
          <h1>
            <a href='javascript:history.back()'><span className='glyphicon glyphicon-circle-arrow-left' /></a> {title}
          </h1>
        </div>
        <div className='row margin-top-5-p'>
          <RelationshipGraph type={this.props.type} id={this.props.id} myData={this.state.myData} />
        </div>
        <div className='row'>
          <DetailTable type={this.props.type} id={this.props.id} myData={this.state.myData} />
        </div>
        <div className='row'>
          <Comments type={this.props.type} id={this.props.id} myData={this.state.myData} />
        </div>
      </div>
    )
  }
}

DetailPage.propTypes = {
  type: React.PropTypes.string,
  id: React.PropTypes.string
}
