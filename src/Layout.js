import React, { Fragment } from 'react'

import Nav from './components/Nav'

export default ({ children }) => (
  <Fragment>
    <Nav />
    {children}
  </Fragment>
)
