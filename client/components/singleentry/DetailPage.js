import React from 'react'
import DetailTable from './DetailTable'
import MCMSearch from '../../services/MCMSearch'
import Spinner from 'react-spinkit'
import '../../../style/details.scss'
import WidgetComponent from '../WidgetComponent'

export default class DetailPage extends React.Component {

  constructor (props) {
    super(props)

    this.mcmsearch = new MCMSearch()

    this.state = {
      myData: '',
      loading: 'loading'
    }
  }

  componentDidMount () {
    this.mcmsearch.getEntity(this.props.type, this.props.id).then((response) => {
      this.setState({myData: response, loading: 'done'})
    }).catch((error) => {
      console.trace(error.message)
      this.setState({myData: null, loading: 'error'})
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
        <div className='parent-center'>
          <Spinner spinnerName='double-bounce' />
        </div>
      )
    }
    var title
    if (this.props.type === 'artists') {
      title = this.state.myData.name
    } else if (this.props.type === 'releases') {
      title = this.state.myData.title
    } else {
      title = 'Unknown'
    }

    return (
      <div className='container-fluid detailpage'>
        <div className='row'>
          <h1>
            <a href='javascript:history.back()'><span className='glyphicon glyphicon-circle-arrow-left' /></a> {title}
          </h1>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <DetailTable type={this.props.type} id={this.props.id} myData={this.state.myData} />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12 margin-top-5-p'>
            <WidgetComponent entityId={this.props.id} entityType={this.props.type} widgetType='relations' />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12 margin-top-5-p'>
            <WidgetComponent entityId={this.props.id} entityType={this.props.type} widgetType='map' />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12 margin-top-5-p'>
            <WidgetComponent entityId={this.props.id} entityType={this.props.type} widgetType='timeline' />
          </div>
        </div>
      </div>
    )
  }
}

DetailPage.propTypes = {
  type: React.PropTypes.string,
  id: React.PropTypes.string
}
