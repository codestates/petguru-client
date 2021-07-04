import { takeLatest } from "@redux-saga/core/effects";
import { createAction, handleActions } from "redux-actions";
import * as postsAPI from "../lib/api/missing/posts";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestActionTypes";

const INITIALIZE = "write/INITIALIZE";
const CHANGE_FIELD = "write/CHANGE_FIELD";
const SET_ORIGINAL_POST = "wrtie/SET_ORIGINAL_POST";

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const setOriginalPost = createAction(SET_ORIGINAL_POST, (post) => post);

const [WRITE_POST, WRITE_POST_SUCCESS, WRITE_POST_ERROR] =
  createRequestActionTypes("write/WRITE_POST"); // 게시물 작성
const [UPDATE_POST, UPDATE_POST_SUCCESS, UPDATE_POST_ERROR] =
  createRequestActionTypes("write/UPDATE_POST"); // 게시물 수정
const [UPLOAD_IMAGE, UPLOAD_IMAGE_SUCCESS, UPLOAD_IMAGE_ERROR] = createRequestActionTypes("write/UPLOAD_IMAGE"); // 이미지 업로드

export const writePost = createAction(
  WRITE_POST,
  ({
    // formData
    contents,
    latitude,
    longitude,
    location,
    image_url,
    missing_date,
    born_year,
    pet_name,
    type,
    sex,
  }) => ({
    // formData
    contents,
    latitude,
    longitude,
    location,
    image_url,
    missing_date,
    born_year,
    pet_name,
    type,
    sex,
  }),
);
export const updatePost = createAction(
  UPDATE_POST,
  ({
    id,
    title,
    contents,
    latitude,
    longitude,
    location,
    image_url,
    missing_date,
    born_year,
    pet_name,
    type,
    sex,
  }) => ({
    id,
    title,
    contents,
    latitude,
    longitude,
    location,
    image_url,
    missing_date,
    born_year,
    pet_name,
    type,
    sex,
  }),
);

export const uploadImage = createAction(
  UPLOAD_IMAGE,
  ({ data }) => {
    console.log('createAction실행', data);
    return ({ data })
  }
)

// saga
const writePostSaga = createRequestSaga(WRITE_POST, postsAPI.writePost);
const updatePostSaga = createRequestSaga(UPDATE_POST, postsAPI.updatePost);
const uploadImageSaga = createRequestSaga(UPLOAD_IMAGE, postsAPI.postImage);

export function* writeSaga() {
  yield takeLatest(WRITE_POST, writePostSaga);
  yield takeLatest(UPDATE_POST, updatePostSaga);
  yield takeLatest(UPLOAD_IMAGE, uploadImageSaga);
}

const initialState = {
  contents: "",
  latitude: "",
  longitude: "",
  location: "",
  image_url: "",
  missing_date: "",
  born_year: "",
  pet_name: "",
  type: "",
  sex: "",
  imageFormData: null,
  imageFormDataError:null,
  post: null,
  postError: null,
  originalPostId: null,
};

const write = handleActions(
  {
    [INITIALIZE]: (state) => initialState, // initialState를 넣으면 초기 상태로 변경
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [WRITE_POST]: (state) => ({
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
      contents: post.missingInfo.contents,
      latitude: post.missingInfo.latitude,
      longitude: post.missingInfo.longitude,
      location: post.missingInfo.location,
      image_url: post.missingInfo.image_url,
      missing_date: post.missingInfo.missing_date,
      born_year: post.missingInfo.born_year,
      pet_name: post.missingInfo.pet_name,
      type: post.missingInfo.type,
      sex: post.missingInfo.sex,
      orginalPostId: post.missingInfo.id,
    }),
    [UPDATE_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    [UPDATE_POST_ERROR]: (state, { payload: postError }) => ({
      ...state,
      postError,
    }),
    [UPLOAD_IMAGE_SUCCESS]: (state, { payload: imageFormData }) => ({
      ...state,
      imageFormData
    }),
    [UPLOAD_IMAGE_ERROR]: (state, { payload: imageFormDataError }) => ({
      ...state,
      imageFormDataError
    })
  },
  initialState,
);

export default write;
