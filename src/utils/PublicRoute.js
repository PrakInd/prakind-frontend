import React from "react";
import { Redirect, Route } from "react-router-dom";
import { isLogin, isUser } from "./Auth";

// const PublicRoute = ({ component: Component, restricted, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         !isLogin() && restricted ? (
//           <Component {...props} />
//         ) : (
//           <Redirect to={{ pathname:"/", from: props.location }} />
//         )
//       }
//     />
//   );
// };

const PublicRoute = ({ component: Component, isNotFound, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() && restricted ? (
          !isNotFound ? (
            isUser() ? (
              <Redirect to="/pelamar/profil" />
            ) : (
              <Redirect to="/perusahaan/dashboard" />
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