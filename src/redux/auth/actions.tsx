const actions = {
  LOGIN_BEGIN: 'LOGIN_BEGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERR: 'LOGIN_ERR',

  SIGNUP_BEGIN: 'SIGNUP_BEGIN',
  SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
  SIGNUP_ERR: 'SIGNUP_ERR',

  loginBegin: () => {
    return {
      type: actions.LOGIN_BEGIN,
    };
  },

  loginSuccess: (data: any) => {
    return {
      type: actions.LOGIN_SUCCESS,
      data,
    };
  },

  loginErr: (err: any) => {
    return {
      type: actions.LOGIN_ERR,
      err,
    };
  },

  // -----------------------------------
  signupBegin: () => {
    return {
      type: actions.SIGNUP_BEGIN,
    };
  },

  signupSuccess: (data: any) => {
    return {
      type: actions.SIGNUP_SUCCESS,
      data,
    };
  },

  signupErr: (err: any) => {
    return {
      type: actions.SIGNUP_ERR,
      err,
    };
  },
};

export default actions;
