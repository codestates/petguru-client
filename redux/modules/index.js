import { combineReducers } from "redux";
import auth from "./auth";
import write from './missing_write';
import post from './missing_post';

const rootReducer = combineReducers({
  auth,
  write,
  post,
});

export default rootReducer;
