import Cookies from "js-cookie";

// Base
let JWT = null;

if (Cookies.get('JWT') !== undefined) {
  JWT = Cookies.get('JWT');
}

export const JWT_HEADER = JWT;
export const SERVER_NAME_DEV = 'http://127.0.0.1:8000';
export const BASE_URL = SERVER_NAME_DEV + '/api';

// Auth
export const LOGIN_API = `${BASE_URL}/auth/login`;
export const LOGOUT_API = `${BASE_URL}/auth/logout`;
export const REGISTER_API = `${BASE_URL}/auth/register`;
export const ME_API = `${BASE_URL}/auth/me`;

// Users
export const SHOW_USERS = `${BASE_URL}/users`;
export const SHOW_USER = (user_id) => `${BASE_URL}/users/${user_id}`;
export const CREATE_USER = `${BASE_URL}/users`;
export const UPDATE_USER = (user_id) => `${BASE_URL}/users/${user_id}`;
export const DELETE_USER = (user_id) => `${BASE_URL}/users/${user_id}`;
export const USER_UPLOAD_IMAGE = (user_id) => {
  return `${BASE_URL}/users/${user_id}/upload-image`;
}

// Groups
export const SHOW_GROUPS = `${BASE_URL}/groups`;
export const SHOW_GROUP = (group_id) => `${BASE_URL}/groups/${group_id}`;
export const CREATE_GROUP = `${BASE_URL}/groups`;
export const UPDATE_GROUP = (group_id) => `${BASE_URL}/groups/${group_id}`;
export const DELETE_GROUP = (group_id) => `${BASE_URL}/groups/${group_id}`;

// Profiles
export const SHOW_PROFILES = `${BASE_URL}/profiles`;
export const SHOW_PROFILE = (profile_id) => `${BASE_URL}/profiles/${profile_id}`;
export const CREATE_PROFILE = `${BASE_URL}/profiles`;
export const UPDATE_PROFILE = (profile_id) => `${BASE_URL}/profiles/${profile_id}`;
export const DELETE_PROFILE = (profile_id) => `${BASE_URL}/profiles/${profile_id}`;
export const PROFILE_UPLOAD_DOCS = (profile_id, doc_ext) => {
  return `${BASE_URL}/profiles/${profile_id}/upload/${doc_ext}`;
}

// Companies
export const SHOW_COMPANIES = `${BASE_URL}/companies`;
export const SHOW_COMPANY = (company_id) => `${BASE_URL}/companies/${company_id}`;
export const COMPANY_BY_USER_ID = (user_id) => `${BASE_URL}/companies/profile/${user_id}`;
export const CREATE_COMPANY = `${BASE_URL}/companies`;
export const UPDATE_COMPANY = (company_id) => `${BASE_URL}/companies/${company_id}`;
export const DELETE_COMPANY = (company_id) => `${BASE_URL}/companies/${company_id}`;
export const COMPANY_UPLOAD_LOGO = (company_id) => {
  return `${BASE_URL}/companies/${company_id}/upload-logo`;
}

// Vacancies
export const SHOW_VACANCIES = `${BASE_URL}/vacancies`;
export const VACANCY_BY_USER_ID = (user_id) => `${BASE_URL}/vacancies/list/${user_id}`; 
export const SHOW_VACANCY = (vacancy_id) => `${BASE_URL}/vacancies/${vacancy_id}`;
export const CREATE_VACANCY = (user_id) => `${BASE_URL}/vacancies/${user_id}`;
export const UPDATE_VACANCY = (vacancy_id) => `${BASE_URL}/vacancies/${vacancy_id}`;
export const DELETE_VACANCY = (vacancy_id) => `${BASE_URL}/vacancies/${vacancy_id}`;

// Applications (Pengajuan)
export const SHOW_APPLICATIONS = `${BASE_URL}/applications`;
export const SHOW_APPLICATION = (application_id) => `${BASE_URL}/applications/${application_id}`;
export const CREATE_APPLICATION = `${BASE_URL}/applications`;
export const UPDATE_APPLICATION = (application_id) => `${BASE_URL}/applications/${application_id}`;
export const DELETE_APPLICATION = (application_id) => `${BASE_URL}/applications/${application_id}`;
export const APPLICATION_UPLOAD_CERTIFICATE = (application_id) => {
  return `${BASE_URL}/applications/${application_id}/upload-certificate`;
}

// Applicant Files
export const SHOW_APPLICANT_FILES = `${BASE_URL}/applicant-files`;
export const SHOW_APPLICANT_FILE = (applicant_file_id) => {
  return `${BASE_URL}/applicant-files/${applicant_file_id}`;
}
export const CREATE_APPLICANT_FILE = `${BASE_URL}/applicant-files`;
export const APPLICANT_FILE_UPLOAD = (applicant_file_id, doc_ext) => {
  return `${BASE_URL}/applicant-files/${applicant_file_id}/upload/${doc_ext}`;
}