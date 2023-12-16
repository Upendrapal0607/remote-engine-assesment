import {
  DEVELOPER_POST_SUCCESS,
  DEVELOPER_REQUEST,
  DEVELOPER_REQUEST_FAIL,
  DEVELOPER_REQUEST_SUCCESS,
} from "./ActionType";

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
};

// developer reducer updator fuction 

export const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DEVELOPER_REQUEST:
      return { ...state, isLoading: true };
    case DEVELOPER_REQUEST_SUCCESS:
      return { ...state, isLoading: false, isError: false, data: payload };
    case DEVELOPER_REQUEST_FAIL:
      return { ...state, isLoading: false, data: [], isError: true };
    case DEVELOPER_POST_SUCCESS:
      return { ...state, isLoading: false, isError: false };
    default:
      return state;
  }
};
