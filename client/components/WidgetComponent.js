import React from 'react'
import '../../style/widgets.scss'
import { widgetsHost } from '../config'

const WIDGET_URLS = {
  timeline: `${widgetsHost}/timeline-app.html?`,
  relations: `${widgetsHost}/relations-widget.html?useMockups`,
  map: `${widgetsHost}/map-app.html?`
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
    const { entityId, entityType, widgetType, useMockups } = this.props
    const entityTypeWithoutS = entityType.substring(0, entityType.length - 1)
    return (
      <iframe
        src={
          `${WIDGET_URLS[widgetType]}` +
          `${useMockups ? '&useMockups' : ''}` +
          `&entityId=${entityId}` +
          `&entityType=${entityTypeWithoutS}`
        }
        className={`widget ${this.state.fullscreen ? 'widget--full-screen' : ''}`}
        frameBorder='0'
      />
    )
  }
}

WidgetComponent.propTypes = {
  entityId: React.PropTypes.string.isRequired,
  entityType: React.PropTypes.string.isRequired,
  widgetType: React.PropTypes.string.isRequired,
  useMockups: React.PropTypes.bool
}

WidgetComponent.defaultProps = {
  useMockups: false
}
