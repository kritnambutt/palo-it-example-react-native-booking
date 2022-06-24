import actions from './actions';
import api from '../../api/auth';

const {
  loginBegin,
  loginSuccess,
  loginErr,
  // -----------
  signupBegin,
  signupSuccess,
  signupErr,
} = actions;

export interface actionDefaultProps {
  params?: Object;
  callbackSuccess?: any;
  callbackError?: any;
}

export const login = ({
  params,
  callbackSuccess = () => {},
  callbackError = () => {},
}: actionDefaultProps) => {
  return async (dispatch: any) => {
    dispatch(loginBegin());
    api.login({
      params,
      cb: (data: any) => {
        dispatch(loginSuccess(data));
        callbackSuccess(data);
      },
      err: (err: any) => {
        dispatch(loginErr(err));
        callbackError();
        console.log('err.response.data: ' + JSON.stringify(err.response.data));
      },
    });
  };
};

export const signup = ({
  params,
  callbackSuccess = () => {},
  callbackError = () => {},
}: actionDefaultProps) => {
  return async (dispatch: any) => {
    dispatch(signupBegin());
    api.signup({
      params,
      cb: (data: any) => {
        dispatch(signupSuccess(data));
        callbackSuccess(data);
      },
      err: (err: any) => {
        dispatch(signupErr(err));
        callbackError();
        console.log('err.response.data: ' + JSON.stringify(err.response.data));
      },
    });
  };
};
