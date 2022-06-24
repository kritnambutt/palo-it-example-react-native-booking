import actions from './actions';

const initialState = {
  loading_login: null,
  error_login: null,

  loading_signup: null,
  error_signup: null,
};

const {
  // -----------------------
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_ERR,
  // -----------------------
  SIGNUP_BEGIN,
  SIGNUP_SUCCESS,
  SIGNUP_ERR,
} = actions;

const orderReducer = (state = initialState, action: any) => {
  const {type, data, err} = action;
  switch (type) {
    // ---------------------------------------------
    case LOGIN_BEGIN: {
      return {
        ...state,
        loading_login: true,
        error_login: initialState.error_login,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loading_login: false,
        error_login: null,
      };
    }
    case LOGIN_ERR: {
      return {
        ...state,
        error_login: err,
        loading_login: false,
      };
    }

    // ----------------------------------
    case SIGNUP_BEGIN: {
      return {
        ...state,
        loading_signup: true,
        error_signup: initialState.error_signup,
      };
    }
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        loading_signup: false,
        error_signup: null,
      };
    }
    case SIGNUP_ERR: {
      return {
        ...state,
        loading_signup: false,
        error_signup: err,
      };
    }

    default: {
      return state;
    }
  }
};

export default orderReducer;
