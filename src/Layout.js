import React, { Fragment } from 'react'

import Nav from './components/Nav'
import styled from 'styled-components'

const Container = styled.div`
  width: 66%;
  margin: 1rem auto 0 auto;
`

export default ({ children }) => (
  <Fragment>
    <Nav />
    <Container>{children}</Container>
  </Fragment>
)
