import React from 'react'
import { Switch, Route } from 'react-router-dom'

export default () => (
  <Switch>
    <Route path="/" render={() => <h1>Home</h1>} />
  </Switch>
)
