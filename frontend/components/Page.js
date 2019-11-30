import React, { Component } from 'react'
import Header from './Header'
import Meta from './Meta'

class Page extends Component {
  render() {
    const { children } = this.props

    return (
      <div>
        <Meta />
        <Header />
        {children}
      </div>
    )
  }
}

export default Page
