import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"
import Home from "./pages/HomePage"
import { NotFound } from "./component/NotFound"
import Notification from './pages/Notification/index'
import Explore from "./pages/Explore"
import Profile from "./pages/Profile"
import Login from "./pages/Login"

class Routes extends Component {

  render() {
    return (
      <Switch >
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route path="/explore" component={Explore} />
        <Route path="/notifications" component={Notification} />
        <Route path="/messages" />
        <Route path="/profile" component={Profile} />
        <Route component={NotFound} />
      </Switch>
    )
  }
}
export default Routes



