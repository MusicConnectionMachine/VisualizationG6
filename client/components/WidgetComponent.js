import React from 'react'
import '../../style/widgets.scss'

const WIDGET_URLS = {
  timeline: 'http://mcmwidgets.azurewebsites.net/widgets/timeline-app.html?useMockups',
  relations: 'http://mcmwidgets.azurewebsites.net/widgets/relations-widget.html?useMockups',
  map: 'http://mcmwidgets.azurewebsites.net/widgets/map-app.html?'
}

export default class WidgetComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      fullscreen: false
    }
  }

  componentWillMount () {
    const onMessageFromWidget = (event) => {
      const { widget, text } = event.data
      if (widget === this.props.widgetType) {
        if (text === 'full-screen activated') {
          this.setState({ fullscreen: true })
        } else if (text === 'full-screen deactivated') {
          this.setState({ fullscreen: false })
        }
      }
    }
    window.addEventListener('message', onMessageFromWidget, false)
  }

  render () {
    const { entityId, entityType, widgetType } = this.props
    const entityTypeWithoutS = entityType.substring(0, entityType.length - 1)
    return (
      <iframe
        src={`${WIDGET_URLS[widgetType]}&entityId=${entityId}&entityType=${entityTypeWithoutS}`}
        className={`widget ${this.state.fullscreen ? 'widget--full-screen' : ''}`}
        frameBorder='0'
      />
    )
  }
}

WidgetComponent.propTypes = {
  entityId: React.PropTypes.string.isRequired,
  entityType: React.PropTypes.string.isRequired,
  widgetType: React.PropTypes.string.isRequired
}
