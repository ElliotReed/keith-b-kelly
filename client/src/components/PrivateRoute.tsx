import React, { Component } from "react"
import { navigate } from "gatsby"
import Auth from "../services/auth"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  if (!Auth.authenticated && location.pathname !== `/admin`) {
    navigate("/admin")
    return null
  }

  return <Component {...rest} />
}

export default PrivateRoute
