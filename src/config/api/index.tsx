import {BACKEND_API_URL, BACKEND_API_VERSION_ROUTE} from '@env';

export const BACKEND_HOST = BACKEND_API_URL + BACKEND_API_VERSION_ROUTE;

export const API = {
  auth: {
    index: '/auth',
    authorize: '/authorize',
    login: '/login',
    signup: '/sign-up',
  },
};
