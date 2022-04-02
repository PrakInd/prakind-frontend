import Profile from "../pages/user/Profile";
import ErrorPage from "../pages/ErrorPage";
import ApplicantFiles from "../pages/user/ApplicantFiles";
import FormRegister from "../pages/user/FormRegister";
import HomeUser from "../pages/user/HomeUser";
import ProfileRead from "../pages/user/ProfileRead";
import Token from "../pages/user/Token";
import MyActivity from "../pages/user/MyActivity";
import ApplicantFilesGroup from "../pages/user/ApplicantFilesGroup";

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
    component: ApplicantFiles,
    private: true,
    isUser: true,
  },
  {
    name: "Upload Dokumen Group",
    path: "/pelamar/upload-dokumen-kelompok",
    exact: true,
    component: ApplicantFilesGroup,
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