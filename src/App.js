import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import News from './pages/News'
import TodoApp from './pages/TodoApp'
import Layout from './Layout'

export default () => (
  <Layout>
    <Switch>
      <Route path="/todos" component={TodoApp} />
      <Route path="/news" component={News} />
      <Route path="/" component={Home} />
    </Switch>
  </Layout>
)
