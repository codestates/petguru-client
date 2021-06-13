import { takeLatest } from "@redux-saga/core/effects";
import { createAction, handleActions } from "redux-actions";
import * as authAPI from '../lib/api/auth';
import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestActionTypes";

const TEMP_SET_USER = 'user/TEMP_SET_USER'; //임시 로그인 처리
const [CHECK, CHECK_SUCCESS, CHECK_ERROR] = createRequestActionTypes('user/CHECK');

export const tempSetUser = createAction(TEMP_SET_USER, user => user);
export const check = createAction(CHECK);

const checkSaga = createRequestSaga(CHECK, authAPI.check);
function checkErrorSaga() {
  try {
    localStorage.removeItem('user');
  } catch (e) {
    console.log(e);
  }
}

export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
  yield takeLatest(CHECK_ERROR, checkErrorSaga);
}

const initialState = {
  user: '',
  checkError: null,
};

export default handleActions(
  {
    [TEMP_SET_USER]: (state, { payload: user }) => ({
      ...state,
      user,
    }),
    [CHECK_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      user,
      checkError:null,
    }),
    [CHECK_ERROR]: (state, { payload: error }) => ({
      ...state,
      user: null,
      checkError: error,
    }),
  },
  initialState
)