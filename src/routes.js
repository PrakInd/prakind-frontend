import AddVacancy from "./pages/admin/AddVacancy";
import Dashboard from "./pages/admin/Dashboard"
import HomeUser from "./pages/user/HomeUser";
import CompanyProfile from "./pages/admin/CompanyProfile"
import ListApplicants from "./pages/admin/ListApplicants"
import ListVacancy from "./pages/admin/ListVacancy"
import Table from "./pages/admin/Table"
import Vacancy from "./pages/user/Vacancy";
import DetailVacancy from "./pages/user/DetailVacancy";
import ProfileForm from "./pages/user/ProfileForm";

export const APP_ROUTE = [
  {
    name: "Home User",
    path: "/magang-homepage",
    exact: true,
    component: HomeUser,
    restricted: true,
  },
  {
    name: "Dashboard",
    path: "/",
    exact: true,
    component: Dashboard,
    restricted: true,
    // private: true,
  },
  {
    name: "Add Vacancy",
    path: "/add-vacancy",
    exact: true,
    component: AddVacancy,
    restricted: true,
    // private: true,
  },
  {
    name: "Company Profile",
    path: "/company-profile",
    exact: true,
    component: CompanyProfile,
    restricted: true,
    // private: true,
  },
  {
    name: "List Applicants",
    path: "/list-applicants",
    exact: true,
    component: ListApplicants,
    restricted: true,
    // private: true,
  },
  {
    name: "List Vacancy",
    path: "/list-vacancy",
    exact: true,
    component: ListVacancy,
    restricted: true,
    // private: true,
  },
  {
    name: "Table",
    path: "/table",
    exact: true,
    component: Table,
    restricted: true,
    // private: true,
  },
  {
    name: "Vacancy",
    path: "/magang-vacancy",
    exact: true,
    component: Vacancy,
    restricted: true,
  },
  {
    name: "Detail Vacancy",
    path: "/magang-detail-vacancy",
    exact: true,
    component: DetailVacancy,
    restricted: true,
  },
  {
    name: "Form",
    path: "/magang-register-form",
    exact: true,
    component: ProfileForm,
    restricted: true,
  }
];