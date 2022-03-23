// import ProfileForm from "../pages/user/ProfileForm";
// import UploadDocs from "../pages/user/UploadDocs";
// import Account from "../pages/user/Account";
// import ErrorPage from "../pages/ErrorPage";
// 
// export const APP_USER_ROUTE = [
//     {
//         name: "Form Biodata",
//         path: "/pelamar/form-biodata",
//         exact: true,
//         component: ProfileForm,
//         private: true,
//         isUser: true,
//     },
//     {
//         name: "Upload Dokumen",
//         path: "/pelamar/upload-dokumen",
//         exact: true,
//         component: UploadDocs,
//         private: true,
//         isUser: true,
//     },
//     {
//         name: "Akun Saya",
//         path: "/pelamar/akun-saya",
//         exact: true,
//         component: Account,
//         private: true,
//         isUser: true,
//     },
//     {
//         name: "Halaman Error",
//         path: "/pelamar/*",
//         exact: true,
//         component: ErrorPage,
//         private: true,
//         isUser: true,
//         isNotFound: true,
//       },
// ];

import ErrorPage from "../pages/ErrorPage";
import Profil from "../pages/user/Profil";
import UploadDocs from "../pages/user/UploadDocs";
import FormRegister from "../pages/user/FormRegister";

export const USER_ROUTES = [
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