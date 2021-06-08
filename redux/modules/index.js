import { combineReducers } from "redux";
import auth from "./auth";
import missing from './missing';

const rootReducer = combineReducers({
  auth,
  missing
});

export default rootReducer;
