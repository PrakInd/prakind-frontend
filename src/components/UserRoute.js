import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogin, isUser } from "../utils/Auth";

const UserRoute = ({ component: Component, ...rest }) => {
  return (
    // <Route
    //   {...rest}
    //   render={(props) =>
    //     isLogin() ? (
    //       !rest.isNotFound ? (
    //         !isUser() ? (
    //           <>
    //             <Redirect to="/perusahaan" />
    //             <Component {...props} />
    //           </>
    //         ) : (
    //           <Component {...props} />
    //         )
    //       ) : (
    //         <>
    //           <Redirect to="/error" />
    //           <Component {...props} />
    //         </>
    //       )
    //     ) : (
    //       <Redirect to="/login" />
    //     )
    //   }
    // />

    <Route
      {...rest}
      render={(props) =>
        isLogin() ? (
          isUser() ? (
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
              <Redirect to="/perusahaan" />
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
