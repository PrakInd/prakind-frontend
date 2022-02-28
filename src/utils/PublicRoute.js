import React from "react";
import { Redirect, Route } from "react-router-dom";
import { isLogin } from "./Auth";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !isLogin() && restricted ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PublicRoute;