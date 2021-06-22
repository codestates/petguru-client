import { createAction, handleActions } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestActionTypes";
import * as postsAPI from '../lib/api/missing/posts';
import { takeLatest } from "@redux-saga/core/effects";

const [
  LIST_POSTS,
  LIST_POSTS_SUCCESS,
  LIST_POSTS_ERROR
] = createRequestActionTypes('posts/LIST_POSTS');


const initialState = {
  posts: [],
  error: null,
}

export const listPosts = createAction(
  LIST_POSTS,
  (lastId) => (lastId)
);

const listPostsSaga = createRequestSaga(LIST_POSTS, postsAPI.listPosts);
export function* postsSaga() {
  yield takeLatest(LIST_POSTS, listPostsSaga);
}

const posts = handleActions(
  {
    [LIST_POSTS_SUCCESS]: (state, { payload: posts }) => ({
      ...state,
      posts,
    }),
    [LIST_POSTS_ERROR]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState
)

export default posts;