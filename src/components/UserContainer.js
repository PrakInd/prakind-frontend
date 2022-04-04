import * as React from "react";
import { Switch } from "react-router-dom";
import UserRoute from "./UserRoute";
import { USER_ROUTES } from "../routes/user_routes";

const UserContainer = () => {
  return (
    <Switch>
      {USER_ROUTES.map((value, key) => {
        return (
          <UserRoute
            key={key}
            component={value.component}
            path={value.path}
            exact={value.exact}
            isUser={value.isUser}
            isNotFound={value.isNotFound}
          />
        );
      })}
    </Switch>
  );
};

export default UserContainer;