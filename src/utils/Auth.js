import Cookies from "js-cookie";

export const setUserLogin = (user) => {
  Cookies.set("USER", user);
};

export const setRole = (role) => {
  Cookies.set("ROLE", role);
}; 

export const login = (jwt) => {
  Cookies.set("JWT", jwt);
};

export const logout = () => {
  Cookies.remove("JWT");
};

export const isLogin = () => {
  if (Cookies.get("JWT")) {
    return true;
  }

  return false;
};

export const isAdmin = () => {
  if (Cookies.get("ROLE") === "1") {
    return true;
  }
  
  return false;
};

export const isUser = () => {
  if (Cookies.get("ROLE") === "2") {
    return true;
  }

  return false;
};

export const getToken = () => {
  return Cookies.get("JWT");
}