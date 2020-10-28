import { ROUTES } from 'constants/routes'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import componentAsFunction from 'services/utils/component-as-function'

const routes = ROUTES.map(componentAsFunction(Route))

const Router = () => (
  <BrowserRouter>
    <Switch>
      {routes}
    </Switch>
  </BrowserRouter>
)

export default Router
