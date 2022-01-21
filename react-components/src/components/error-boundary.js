import { Component } from 'react'
import { reportError } from '../http-request/api'

export class ErrorBoundary extends Component {
  state = { hasError: false }

  componentDidCatch(error, info) {
    this.setState({ hasError: true })
    reportError(error, info)
  }

  tryAgain = () => this.setState({ hasError: false })

  render() {
    return this.state.hasError ? (
      <div>
        <div role="alert">There was a problem.</div>
        <button onClick={this.tryAgain}>Try again?</button>
      </div>
    ) : (this.props.children)
  }
}