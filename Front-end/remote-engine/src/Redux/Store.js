
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { Reducer as UserReducer } from "./UserReducer/Reducer";
import { Reducer as OnboardingReducer } from "./OnboardingReducer/Reducer";
import { Reducer as skillsReducer } from "./SkillsReducer/Reducer";
const rootReducer = combineReducers({
  UserReducer,
  OnboardingReducer,
  skillsReducer
});


// Store local data in react itself after reducer function update the data

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
