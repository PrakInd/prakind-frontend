import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = props => {
  const [user, setUser] = useState({
    role_id: '',
    name: '',
    email: '',
    avatar: ''
  });

  return (
    <UserContext.Provider value={[user, setUser]}>
      { props.children }
    </UserContext.Provider>
  );
};