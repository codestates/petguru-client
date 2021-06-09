import axios from 'axios';
import { call, put, select, takeEvery, takeLatest } from "redux-saga/effects";
import { handleAsyncActions, handleAsyncActionsById, reducerUtils } from "../lib/asyncUtils";

// 타입: 하나의 액션 타입에 request, success, failure
// Action type
// 복수의 POST 가져오기
const GET_POSTS = 'missing/GET_POSTS'
const GET_POSTS_SUCCESS = 'missing/GET_POSTS_SUCCESS'
const GET_POSTS_ERROR = 'missing/GET_POSTS_ERROR'
// 단일 POST 가져오기
const GET_POST = 'missing/GET_POST'
const GET_POST_SUCCESS = 'missing/GET_POST_SUCCESS'
const GET_POST_ERROR = 'missing/GET_POST_ERROR'
// POST 추가하기
const ADD_POST = 'missing/ADD_POST'
const ADD_POST_SUCCESS = 'missing/ADD_POST_SUCCESS'
const ADD_POST_ERROR = 'missing/ADD_POST_ERROR'
// POST 업데이트하기
const UPDATE_POST = 'missing/UPDATE_POST'
const UPDATE_POST_SUCCESS = 'missing/UPDATE_POST_SUCCESS'
const UPDATE_POST_ERROR = 'missing/UPDATE_POST_ERROR'
// POST 삭제하기
const DELETE_POST = 'missing/DELETE_POST'
const DELETE_POST_SUCCESS = 'missing/DELETE_POST_SUCCESS'
const DELETE_POST_ERROR = 'missing/DELETE_POST_ERROR'
// Comment 가져오기
const GET_COMMENTS = 'missing/GET_COMMENTS';
const GET_COMMENTS_SUCCESS = 'missing/GET_COMMENTS_SUCCESS';
const GET_COMMENTS_ERROR = 'missing/GET_COMMENTS_ERROR';
// comment 등록하기
const ADD_COMMENTS = 'missing/ADD_COMMENTS';
const ADD_COMMENTS_SUCCESS = 'missing/ADD_COMMENTS_SUCCESS';
const ADD_COMMENTS_ERROR = 'missing/ADD_COMMENTS_ERROR';
// comment 수정하기
const UPDATE_COMMENTS = 'missing/UPDATE_COMMENTS';
const UPDATE_COMMENTS_SUCCESS = 'missing/UPDATE_COMMENTS_SUCCESS';
const UPDATE_COMMENTS_ERROR = 'missing/UPDATE_COMMENTS_ERROR';
// comment 삭제하기
const DELETE_COMMENTS = 'missing/DELETE_COMMENT';
const DELETE_COMMENTS_SUCCESS = 'missing/DELETE_COMMENT_SUCCESS';
const DELETE_COMMENTS_ERROR = 'missing/DELETE_COMMENT_ERROR';

// Action creator
const getPosts = () => ({ type: GET_POSTS });
const getPost = (id) => ({
  type: GET_POST,
  payload: id, // 사가에서 API 호출 시 파라미터
  meta: id, // 리듀서에서 처리할 때 사용
});
const addPost = () => ({
  type: ADD_POST
});
const updatePost = (id) => ({
  type: UPDATE_POST,
  payload: id,
  meta: id
});
const deletePost = (id) => ({
  type: DELETE_POST,
  payload: id,
  meta: id
});
const getComments = () => ({ type: GET_COMMENT });
const addComments = () => ({ type: ADD_COMMENTS });
const updateComments = (id) => ({
  type: UPDATE_COMMENTS,
  payload: id,
  meta: id
});
const deleteComments = (id) => ({
  type: DELETE_COMMENTS,
  payload: id,
  meta: id
});

// reducer func
const initialState = {
  posts: reducerUtils.initial(),
  post: {},
  comments: reducerUtils.initial()
}

const getPostsReducer = handleAsyncActions(GET_POSTS, 'posts');
const getPostReducer = handleAsyncActionsById(GET_POST, 'post', true);
const addPostReducer = handleAsyncActions(ADD_POST, 'posts');
const updatePostReducer = handleAsyncActionsById(UPDATE_POST, 'post', true);
const deletePostReducer = handleAsyncActionsById(DELETE_POST, 'post', true)
const getCommentsReducer = handleAsyncActions(GET_COMMENTS, 'comments');
const addCommentsReducer = handleAsyncActions(ADD_COMMENTS, 'comments');
const updateCommentsReducer = handleAsyncActionsById(UPDATE_COMMENTS, 'comments', true);
const deleteCommentsReducer = handleAsyncActionsById(DELETE_COMMENTS, 'comments', true);


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      return getPostsReducer(state, action);
    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
      return getPostReducer(state, action);
    case ADD_POST:
    case ADD_POST_SUCCESS:
    case ADD_POST_ERROR:
      return addPostReducer(state, action);
    case UPDATE_POST:
    case UPDATE_POST_SUCCESS:
    case UPDATE_POST_ERROR:
      return updatePostReducer(state, action);
    case DELETE_POST:
    case DELETE_POST_SUCCESS:
    case DELETE_POST_ERROR:
      return deletePostReducer(state, acion);
    case GET_COMMENTS:
    case GET_COMMENTS_SUCCESS:
    case GET_COMMENTS_ERROR:
      return getCommentsReducer(state, action);
    case ADD_COMMENTS:
    case ADD_COMMENTS_SUCCESS:
    case ADD_COMMENTS_ERROR:
      return addCommentsReducer(state, action);
    case UPDATE_COMMENTS:
    case UPDATE_COMMENTS_SUCCESS:
    case UPDATE_COMMENTS_ERROR:
      return updateCommentsReducer(state, action);
    default:
      return state;
  }
}

// API 요청
const getPostsAPI = async () => {
  const response = await axios.get(`/posts`);

  return response.data;
}

const getPostByIdAPI = async (id) => {
  const response = await axios.get(`/posts/${id}`);

  return response.data;
}

const addPostAPI = async (formData) => {
  const response = await axios.post(`/posts`, formData);

  return response.data;
}
// saga
function* getPostsSaga() {
  try {
    const posts = yield call(getPostsAPI);
    yield put({
      type: GET_POSTS_SUCCESS,
      payload: posts
    })
  } catch (e) {
    yield put({
      type: GET_POSTS_ERROR,
      payload: e,
      error: true,
    })
  }
}

function* getPostSaga(action) {
  const id = action.payload;
  
  try {
    const post = yield call(getPostByIdAPI);
    yield put({
      type: GET_POST_SUCCESS,
      payload: post,
      meta: id
    });
  } catch (e) {
    yield put({
      type: GET_POST_ERROR,
      payload: e,
      error: true,
      meta: id
    })
  }
}

function* addPostSaga(action) {
  try {
    const post = yield call(addPostAPI);
    yield put({
      type: ADD_POST_SUCCESS,
      payload: post,
    })
  } catch (e) {
    yield put({
      type: ADD_POST_ERROR,
      payload: e,
      error: true
    })
  }
}

function* updatePostSaga(action) {
  try {

  } catch (e) {

  }
}
function* deletePostSaga(action) {
  try {
    
  } catch (e) {

  }
}
function* getCommentsSaga() {
  try {

  } catch(e) {

  }
}
function* addCommentsSaga(action) {
  try {
    
  } catch (e) {

  }
}
function* updateCommentsSaga(action) {
  try {
    
  } catch (e) {
    
  }
}
function* deleteCommentsSaga(action) {
  try {

  } catch (e) {
    
  }
}

export function* missingSaga() {
  // 실종 동물 게시물(복수) 가져오기(read)
  yield takeEvery(GET_POSTS, getPostsSaga);
  // 실종 동물 게시물(단일) 가져오기(read)
  yield takeLatest(GET_POST, getPostSaga);
  // 실종 동물 게시물(단일) 등록하기(create)
  yield takeLatest(ADD_POST, addPostSaga);
  // 실종 동물 게시물(단일) 수정하기(update)
  yield takeEvery(UPDATE_POST, updatePostSaga);
  // 실종 동물 게시물(단일) 삭제하기(delete)
  yield takeEvery(DELETE_POST, deletePostSaga);
  yield takeEvery(GET_COMMENTS, getCommentsSaga);
  yield takeEvery(ADD_COMMENTS, addCommentsSaga);
  yield takeEvery(UPDATE_COMMENTS, updateCommentsSaga);
  yield takeEvery(DELETE_COMMENTS, deleteCommentsSaga);
}