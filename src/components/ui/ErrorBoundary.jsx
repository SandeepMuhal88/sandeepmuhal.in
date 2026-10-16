import { Component } from 'react'

export default class ErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('The portfolio encountered an unexpected rendering error.', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="app-error" role="alert">
          <h1>Something went wrong</h1>
          <p>Please reload the page to try again.</p>
          <button type="button" onClick={() => window.location.reload()}>
            Reload page
          </button>
        </main>
      )
    }

    return this.props.children
  }
}
