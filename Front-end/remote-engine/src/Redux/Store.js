
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { Reducer as UserReducer } from "./UserReducer/Reducer";
import { Reducer as OnboardingReducer } from "./OnboardingReducer/Reducer";
const rootReducer = combineReducers({
  UserReducer,
  OnboardingReducer,
});

// Store local data in react itself after reducer function update the data

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
