import * as React from 'react';
import UserRoute from './UserRoute';
import { Switch } from "react-router-dom";
import { USER_ROUTES } from "../routes/user_routes";

const UserContainer = () => {
  return (
    <Switch>
        {USER_ROUTES.map((value, key) => {
            return (
                <UserRoute
                    key={key}
                    pageName={value.name}
                    component={value.component}
                    path={value.path}
                    exact={value.exact}
                    isUser={value.isUser}
                    isNotFound={value.isNotFound}
                />
            )
        })}
    </Switch>
  )
};

export default UserContainer;
