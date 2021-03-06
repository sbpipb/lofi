import React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'unstated'

/**
 * Hook unstated's `<Provider>` into the React tree.
 *
 * See: https://github.com/gatsbyjs/gatsby/blob/master/examples/using-redux/gatsby-browser.js
 */

exports.replaceRouterComponent = ({ history }) => {
  const ConnectedRouterWrapper = ({ children }) => (
    <Provider>
      <Router history={history}>{children}</Router>
    </Provider>
  )

  return ConnectedRouterWrapper
}
