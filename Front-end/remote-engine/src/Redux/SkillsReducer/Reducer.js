import {
  SKILLS_POST_SUCCESS,
  SKILLS_REQUEST,
  SKILLS_REQUEST_FAIL,
  SKILLS_REQUEST_SUCCESS,
} from "./ActionType";

const initialState = {
  isLoading: false,
  isError: false,
  skills: [],
};

// Skills Reducer updater function 
export const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SKILLS_REQUEST:
      return { ...state, isLoading: true };
    case SKILLS_REQUEST_SUCCESS:
      return { ...state, isLoading: false, isError: false, skills: payload };
    case SKILLS_REQUEST_FAIL:
      return { ...state, isLoading: false, isError: true, skills: [] };
    case SKILLS_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: true,
        skills: [...state.skills, payload],
      };
    default:
      return state;
  }
};
