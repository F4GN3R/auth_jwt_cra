import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { isAuthenticated } from "../contexts/AuthContext";

import { routesConfig } from "./routeConfig";

export default function Routes() {
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );

  return (
    <Router>
      <Switch>
        {routesConfig.map((route, i) =>
          route.auth ? (
            <PrivateRoute
              key={i}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ) : (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          )
        )}
        <Route path="*">
          <h1>Página 404</h1>
        </Route>
      </Switch>
    </Router>
  );
}
