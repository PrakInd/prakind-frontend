import React from "react";
import { Redirect, Route } from "react-router-dom";
import { isLogin, isAdmin } from "./Auth";

const PublicRoute = ({ component: Component, isNotFound, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() && restricted ? (
          !isNotFound ? (
            isAdmin() ? (
              <>
                <Redirect to="/perusahaan" />
              </>
            ) : (
              <>
                <Redirect to="/pelamar/profil" />
              </>
            )
          ) : (
            <>
              <Redirect to="/error" />
              <Component {...props} />
            </>
          )
        ) : isNotFound ? (
          <>
            <Redirect to="/error" />
            <Component {...props} />
          </>
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;