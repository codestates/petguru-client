import { createAction, handleActions } from "redux-actions";
import produce from 'immer';
import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestActionTypes";
import * as authAPI from '../lib/api/auth';
import { takeLatest } from "@redux-saga/core/effects";

const CHANGE_FIELD = 'auth/CHANGE_FIELD'; // 폼 상태 변화 
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM'; // 폼 초기화

const [LOGIN, LOGIN_SUCCESS, LOGIN_ERROR] = createRequestActionTypes('auth/LOGIN');

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form, // register, login
    key, // username, email, password, passwordConfirm
    value, // 실제 바꾸려는 값
  })
);
export const initializeForm = createAction(INITIALIZE_FORM, form => form);
export const login = createAction(LOGIN, ({ email, password }) => ({
  email,
  password
}));

// saga
const loginSaga = createRequestSaga(LOGIN, authAPI.login);
export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
}

const initialState = {
  register: {
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  },
  login: {
    email: '',
    password: '',
  },
  auth: null,
  authError: null,
}

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, draft => {
        draft[key] = value;
      }
    ),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
      authError: null,
    }),
    [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    [LOGIN_ERROR]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
  },
  initialState,
);

export default auth;