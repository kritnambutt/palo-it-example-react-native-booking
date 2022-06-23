import axios from 'axios';
import {BACKEND_HOST} from '../config/api/index';
// import authHeader from '../config/api/auth-header';
// import { logOut } from '../redux/authentication/actionCreator';
// import store from '../redux/store';
// import { checkJWTToken } from '../utility/responseHelper';

const backendHost = BACKEND_HOST;

const instance = axios.create({
  baseURL: backendHost,
  timeout: 30000,
});

instance.interceptors.request.use(
  async (config: any) => {
    // Do something before request is sent
    // config.headers = authHeader();

    if (config.url.includes('export')) {
      // console.log("config.url includes export")
      config.responseType = 'arraybuffer';
    }

    return config;
  },
  function (error: any) {
    // Do something with request error
    // console.log("interceptors err.response.data: " + JSON.stringify(error.response.data))
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (res: any) => {
    return res;
  },
  (err: any) => {
    // if (checkJWTToken(err)) {
    // 	store.dispatch(logOut());
    // }

    return Promise.reject(err);
  },
);

export default instance;
