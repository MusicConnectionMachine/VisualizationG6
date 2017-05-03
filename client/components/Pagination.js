import React from 'react'

export default class Pagination extends React.Component {
  render () {
    if (this.props.total > 0) {
      return (
        <nav aria-label='Page navigation'>
          <div className='btn-group btn-group-justified' role='group'>
            <div className='btn-group' role='group'>
              <button type='button' className='btn btn-default' aria-label='Last Results' onClick={this.props.last} disabled={this.props.current <= 0}>
                <span className='glyphicon glyphicon-chevron-left' aria-hidden='true' /> {Math.max(this.props.current - this.props.step + 1, 0)}
                - {Math.max(this.props.current, 0)}
              </button>
            </div>
            <div className='btn-group' role='group'>
              <button type='button' className='btn btn-default' aria-label='Next Results' onClick={this.props.next} disabled={this.props.current + this.props.step >= this.props.total}>{Math.min(this.props.total, this.props.current + this.props.step + 1)}
                - {Math.min(this.props.total, this.props.current + this.props.step + this.props.step)}
                <span className='glyphicon glyphicon-chevron-right' aria-hidden='true' />
              </button>
            </div>
          </div>
        </nav>
      )
    }
    return null
  }
}

Pagination.propTypes = {
  current: React.PropTypes.number,
  total: React.PropTypes.number,
  step: React.PropTypes.number,
  next: React.PropTypes.func,
  last: React.PropTypes.func
}
