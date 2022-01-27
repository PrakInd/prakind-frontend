import Dashboard from "./pages/Dashboard";
import HomeUser from "./pages/HomeUser";

export const APP_ROUTE = [
  {
    name: "Home User",
    path: "/",
    exact: true,
    component: HomeUser,
    restricted: true,
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    exact: true,
    component: Dashboard,
    // private: true,
  }
];