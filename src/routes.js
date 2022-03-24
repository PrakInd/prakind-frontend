import HomeUser from "./pages/user/HomeUser";
import Vacancy from "./pages/user/Vacancy";
import DetailVacancy from "./pages/user/DetailVacancy";
import DetailCompany from "./pages/user/DetailCompany";
import AdminContainer from "./components/AdminContainer";
import UserContainer from "./components/UserContainer";

import Dashboard from "./pages/admin/Dashboard"
import ProfilPerusahaan from "./pages/admin/ProfilPerusahaan"
import ListPelamar from "./pages/admin/ListPelamar"
import ListLowongan from "./pages/admin/ListLowongan"
import TabelMagang from "./pages/admin/TabelMagang"
import Lowongan from "./pages/admin/Lowongan"
import DetailPelamar from "./pages/admin/DetailPelamar"

import FormRegister from "./pages/user/FormRegister";
import Login from "./pages/Login";
import UploadDocs from "./pages/user/UploadDocs";
import Profil from "./pages/user/Profil";
import Apply from "./pages/user/Apply";

import ErrorPage from "./pages/ErrorPage";

export const APP_ROUTES = [
  {
    name: "Home Page",
    path: "/dashboard",
    exact: true,
    component: HomeUser,
    restricted: true,
  },
  {
    name: "Login",
    path: "/login",
    exact: true,
    component: Login,
    restricted: true,
  },
  // {
  //   name: "Login",
  //   path: "/",
  //   exact: true,
  //   component: Login,
  //   restricted: true,
  // },
  // {
  //   name: "User Register",
  //   path: "/registrasi-pelamar",
  //   exact: true,
  //   component: RegisterUser,
  //   restricted: true,
  // },
  // {
  //   name: "Company Register",
  //   path: "/registrasi-perusahaan",
  //   exact: true,
  //   component: RegisterCompany,
  //   restricted: true,
  // },
  {
    name: "Vacancy",
    path: "/lowongan",
    exact: true,
    component: Vacancy,
    restricted: true,
  },
  {
    name: "Vacancy Detail",
    path: "/lowongan/:id",
    exact: true,
    component: DetailVacancy,
    restricted: true,
  },
  {
    name: "Company Detail",
    path: "/detail-perusahaan/:id",
    exact: true,
    component: DetailCompany,
    restricted: true,
  },

  // ===== TESTING ===== 
  {
    name: "Master Layout Admin",
    path: "/perusahaan",
    component: AdminContainer,
    private: true,
    isAdmin: true,
  },
  {
    name: "Master Layout User",
    path: "/pelamar",
    component: UserContainer,
    private: true,
    isUser: true,
  },
  {
    name: "Error Page",
    path: "/*",
    exact: true,
    component: ErrorPage,
    private: true,
    isNotFound: true,
  },
  {
    name: "Error Page",
    path: "/error",
    exact: true,
    component: ErrorPage,
    private: true,
    isNotFound: true,
  },
];