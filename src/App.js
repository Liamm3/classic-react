import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import News from './pages/News'
import TodoApp from './pages/TodoApp'
import Products from './pages/Products'

export default () => (
  <Switch>
    <Route path="/todos" component={TodoApp} />
    <Route path="/products" component={Products} />
    <Route path="/news" component={News} />
    <Route path="/" component={Home} />
  </Switch>
)
