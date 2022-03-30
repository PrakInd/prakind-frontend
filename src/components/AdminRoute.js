import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogin, isAdmin } from "../utils/Auth";

const AdminRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() ? (
          isAdmin() ? (
            !rest.isNotFound ? (
              <Component {...props} />
            ) : (
              <>
                <Redirect to="/error" />
                <Component {...props} />
              </>
            )
          ) : (
            <>
              <Redirect to="/pelamar/profil" />
              <Component {...props} />
            </>
          )
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default AdminRoute;