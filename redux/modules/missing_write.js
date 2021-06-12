import { takeLatest } from '@redux-saga/core/effects';
import { createAction, handleActions } from 'redux-actions';
import * as postsAPI from '../lib/api/missing/posts';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestActionTypes';

const INITIALIZE = 'write/INITIALIZE';
const CHANGE_FIELD = 'write/CHANGE_FIELD';
const SET_ORIGINAL_POST = 'wrtie/SET_ORIGINAL_POST';

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({ key, value }));
export const setOriginalPost = createAction(SET_ORIGINAL_POST, post => post);

const [
  WRITE_POST,
  WRITE_POST_SUCCESS,
  WRITE_POST_ERROR
] = createRequestActionTypes('write/WRITE_POST'); // 게시물 작성
const [
  UPDATE_POST,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_ERROR
] = createRequestActionTypes('write/UPDATE_POST'); // 게시물 수정

export const writePost = createAction(WRITE_POST, ({
  title,
  contents,
  latitude,
  logitude,
  location,
  images,
  missing_date,
  born_year,
  name,
  type,
  sex
}) => ({
  title,
  contents,
  latitude,
  logitude,
  location,
  images,
  missing_date,
  born_year,
  name,
  type,
  sex,
}));
export const updatePost = createAction(
  UPDATE_POST,
  ({
    id,
    title,
    contents,
    latitude,
    logitude,
    location,
    images,
    missing_date,
    born_year,
    name,
    type,
    sex,
  }) => ({
    id,
    title,
    contents,
    latitude,
    logitude,
    location,
    images,
    missing_date,
    born_year,
    name,
    type,
    sex,
  })
)

// saga
const writePostSaga = createRequestSaga(WRITE_POST, postsAPI.writePost);
const updatePostSaga = createRequestSaga(UPDATE_POST, postsAPI.updatePost);

export function* writeSaga() {
  yield takeLatest(WRITE_POST, writePostSaga);
  yield takeLatest(UPDATE_POST, updatePostSaga);
}


const initialState = {
  title: '',
  contents: '',
  latitude: '',
  logitude: '',
  location: '',
  images: [],
  missing_date: '',
  born_year: null,
  name: '',
  type: '',
  sex: '',
  post: null,
  postError: null,
  originalPostId: null,
}

const write = handleActions(
  {
    [INITIALIZE]: state => initialState, // initialState를 넣으면 초기 상태로 변경
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [WRITE_POST]: state => ({
      ...state,
      // post와 postError를 초기화
      post: null,
      postError: null,
    }),
    //포스트 작성 성공
    [WRITE_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    // 포스트 작성 실패
    [WRITE_POST_ERROR]: (state, { payload: postError }) => ({
      ...state,
      postError,
    }),
    [SET_ORIGINAL_POST]: (state, { payload: post }) => ({
      ...state,
      post,
      orginalPostId: post.id,
    }),
    [UPDATE_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    [UPDATE_POST_ERROR]: (state, { payload: postError }) => ({
      ...state,
      postError,
    }),
  },
  initialState,
);

export default write;