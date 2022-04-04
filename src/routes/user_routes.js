import Token from "../pages/user/Token";
import ErrorPage from "../pages/ErrorPage";
import Profile from "../pages/user/Profile";
import HomeUser from "../pages/user/HomeUser";
import MyActivity from "../pages/user/MyActivity";
import ProfileRead from "../pages/user/ProfileRead";
import ProfileEdit from "../pages/user/ProfileEdit";
import ApplicantFiles from "../pages/user/ApplicantFiles";

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
    name: "Upload Dokumen",
    path: "/pelamar/upload-dokumen",
    exact: true,
    component: ApplicantFiles,
    private: true,
    isUser: true,
  },
  {
    name: "Akun Saya",
    path: "/pelamar/profil",
    exact: true,
    component: Profile,
    private: true,
    isUser: true,
  },
  {
    name: "Akun Saya",
    path: "/pelamar/profil-edit",
    exact: true,
    component: ProfileEdit,
    private: true,
    isUser: true,
  },
  {
    name: "Akun Saya",
    path: "/pelamar/profil-review",
    exact: true,
    component: ProfileRead,
    private: true,
    isUser: true,
  },
  {
    name: "Generate Token",
    path: "/pelamar/generate-token",
    exact: true,
    component: Token,
    private: true,
    isUser: true,
  },
  {
    name: "Aktifitasku",
    path: "/pelamar/aktifitasku",
    exact: true,
    component: MyActivity,
    private: true,
    isUser: true,
  },
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

