import Cookies from "js-cookie";

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
  if (Cookies.getJSON("USER")?.role_id === 1) {
    return true;
  }
  
  return false;
};

export const isUser = () => {
  if (Cookies.getJSON("USER")?.role_id === 2) {
    return true;
  }

  return false;
};

export const getToken = () => {
  return Cookies.get("JWT");
}