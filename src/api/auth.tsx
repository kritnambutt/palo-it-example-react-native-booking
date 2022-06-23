import {API} from '../config/api/index';
import axios from './index';

const {post} = axios;

const {index} = API.auth;

export interface apiDefaultProps {
  params?: Object;
  cb?: any;
  err?: any;
}

const api = {
  login: ({params, cb, err}: apiDefaultProps) => {
    post(index + API.auth.login, params)
      .then(res => cb(res.data))
      .catch(error => err(error));
  },
  signup: ({params, cb, err}: apiDefaultProps) => {
    post(index + API.auth.signup, params)
      .then(res => cb(res.data))
      .catch(error => err(error));
  },
  authorize: ({cb, err}: apiDefaultProps) => {
    post(index + API.auth.authorize)
      .then(res => cb(res.data))
      .catch(error => err(error));
  },
};

export default api;
