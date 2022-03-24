import Profil from "../pages/user/Profil";
import ErrorPage from "../pages/ErrorPage";
import UploadDocs from "../pages/user/UploadDocs";
import FormRegister from "../pages/user/FormRegister";
import HomeUser from "../pages/user/HomeUser";

export const USER_ROUTES = [
  {
    name: "User Dashboard",
    path: "/pelamar",
    exact: true,
    component: HomeUser,
    private: true,
    isUser: true,
  },
  {
    name: "Form Biodata",
    path: "/pelamar/form-register",
    exact: true,
    component: FormRegister,
    private: true,
    isUser: true,
  },
  {
    name: "Upload Dokumen",
    path: "/pelamar/upload-dokumen",
    exact: true,
    component: UploadDocs,
    private: true,
    isUser: true,
  },
  {
    name: "Akun Saya",
    path: "/pelamar/profil",
    exact: true,
    component: Profil,
    private: true,
    isUser: true,
  },
  // {
  // name: "Daftar Magang",
  //   path: "/pelamar/daftar-magang",
  //   exact: true,
  //   component: Account,
  //   private: true,
  //   isUser: true,
  // },
  {
    name: "Error Page",
    path: "/pelamar/*",
    exact: true,
    component: ErrorPage,
    private: true,
    isUser: true,
    isNotFound: true,
  },
];