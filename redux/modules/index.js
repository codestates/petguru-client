import { combineReducers } from "redux";
import auth from "./auth";
import missing from './missing';
import write from './missing_write';

const rootReducer = combineReducers({
  auth,
  write,
});

export default rootReducer;
