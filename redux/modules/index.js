import { combineReducers } from "redux";
import auth from "./auth";
import write from './missing_write';
import post from './missing_post';
import posts from './missing_posts';

const rootReducer = combineReducers({
  auth,
  write,
  post,
  posts,
});

export default rootReducer;
