import axios from "axios";
import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_FAIL,
  LOGIN_REQUEST_SUCCESS,
  LOGOUT_REQUEST_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_REQUEST_FAIL,
  REGISTER_REQUEST_SUCCESS,
} from "./ActionType";
import { user_api } from "../../Service/api";

// login request with the special type 

export const LoginRequest = (payload) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    return await axios
      .post(`${user_api}/login`, payload)
      .then((res) => {
        dispatch({ type: LOGIN_REQUEST_SUCCESS, payload: res.data });
        console.log(res.data);
        return res.data;
      })
      .catch((error) => {
        dispatch({ type: LOGIN_REQUEST_FAIL });
      });
  } catch (error) {
    dispatch({ type: LOGIN_REQUEST_FAIL });
  }
};

// register request with the special type 

export const RgisterRequest = (payload) => async (dispatch) => {
  console.log({ payload });
  try {
    dispatch({ type: LOGIN_REQUEST });
    return await axios
      .post(`${user_api}/register`, payload)
      .then((res) => {
        dispatch({ type: REGISTER_REQUEST_SUCCESS, payload: res.data });
        // console.log({ Register: res.data });
        return res.data;
      })
      .catch((error) => {
        dispatch({ type: LOGIN_REQUEST_FAIL });
      });
  } catch (error) {
    dispatch({ type: LOGIN_REQUEST_FAIL });
  }
};

