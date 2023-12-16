import { developer_api } from "../../Service/api";
import {
  DEVELOPER_POST_SUCCESS,
  DEVELOPER_REQUEST,
  DEVELOPER_REQUEST_FAIL,
  DEVELOPER_REQUEST_SUCCESS,
} from "./ActionType";
import axios from "axios";

// get all developer Action 

export const GetAllDeveloper = () => async (dispatch) => {
  try {
    dispatch({ type: DEVELOPER_REQUEST });
    return await axios
      .get(developer_api)
      .then((res) => {
        dispatch({ type: DEVELOPER_REQUEST_SUCCESS, payload: res.data });
        return res.data;
      })
      .catch((error) => {
        dispatch({ type: DEVELOPER_REQUEST_FAIL });
      });
  } catch (error) {
    dispatch({ type: DEVELOPER_REQUEST_FAIL });
  }
};

// add new developer action 

export const AddDeveloper = (payload) => async (dispatch) => {
  try {
    dispatch({ type: DEVELOPER_REQUEST });
    return await axios
      .post(`${developer_api}/add`, payload)
      .then((res) => {
        console.log({ res });
        dispatch({ type: DEVELOPER_POST_SUCCESS, payload: res.data });
        return res.data;
      })
      .catch((error) => {
        dispatch({ type: DEVELOPER_REQUEST_FAIL });
      });
  } catch (error) {
    dispatch({ type: DEVELOPER_REQUEST_FAIL });
  }
};
