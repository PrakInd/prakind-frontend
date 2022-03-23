/*
  Ini komponen PrivateRoute, tujuannya dia ngecek kalo user belum login nanti 
  redirect ke halaman login
*/

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogin, isUser } from "../utils/Auth";

const UserRoute = ({ component: Component, ...rest }) => {
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) =>
        isLogin() ? (
          !rest.isNotFound ? (
            !isUser() ? (
              <>
                <Redirect to="/perusahaan/dashboard" />
                <Component {...props} />
              </>
            ) : (
              <Component {...props} />
            )
          ) : (
            <>
              <Redirect to="/error" />
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

export default UserRoute;
