import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Auth from "./Auth";
import Sidebar from "./layouts/sidebar/sidebar";
import ContentPage from "./pages/dashboard/content";
import Dashboard from "./pages/dashboard/dashboard";
import Finanical from "./pages/dashboard/finanical";
import DashContentSide from "./pages/dashboard/settings";
import Statistics from "./pages/dashboard/statistics";
import Subscribers from "./pages/dashboard/subscribers";

import Login from "./pages/login";

const Router = (data) => {
  return (
    <Switch>
      <PublicRoute exact path="/login" component={Login} />
      <PublicRoute exact path="/" component={Login} />
      <PrivateRoute exact path="/subscribers" component={Subscribers} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/settings" component={DashContentSide} />
      <PrivateRoute exact path="/content" component={ContentPage} />
      <PrivateRoute exact path="/statistics" component={Statistics} />
      <PrivateRoute exact path="/finanical" component={Finanical} />
    </Switch>
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        Auth.checkAuth() ? (
          <>
            <div className="min-h-screen flex">
              <Sidebar />
              <MyNotifications/>
              <div>
                <div className="main">
                  <Component {...props} />
                </div>
              </div>
            </div>
          </>
        ) : (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        )
      }
    />
  );
};

const PublicRoute = ({ componeusernt: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      Auth.checkAuth() === false ? (
        <>
          <Component {...props} />
        </>
      ) : (
        <Redirect to={{ pathname: "/dashboard" }} />
      )
    }
  />
);

export default Router;
