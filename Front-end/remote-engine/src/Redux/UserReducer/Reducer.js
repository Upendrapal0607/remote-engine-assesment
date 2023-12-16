import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_FAIL,
  LOGIN_REQUEST_SUCCESS,
  LOGOUT_REQUEST_SUCCESS,
  REGISTER_REQUEST_SUCCESS,
} from "./ActionType";

// default state for register and login functionality 

const initialState = {
  isLoading: false,
  message: "",
  isError: false,
  token: "",
  isAuth: false,
  userName: "",
  userDetails: {},
};

// Register and login reducer updator fuction with the special case

export const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        isError: false,
        isLoading: false,
        token: payload.token,
        message: payload.message,
        isAuth: payload.message == "login successful" ? true : false,
        userName: payload.name,
      };
    case LOGIN_REQUEST_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
        token: "",
        isAuth: false,
        userName: "",
        message: "",
      };
    case REGISTER_REQUEST_SUCCESS:
      return {
        ...state,
        isError: false,
        isLoading: false,
        userDetails: payload,
      };
    case LOGOUT_REQUEST_SUCCESS:
      return {
        ...state,
        isError: false,
        isLoading: false,
        token: "",
        message: "",
        isAuth: false,
        userName: "",
      };
    default:
      return state;
  }
};
