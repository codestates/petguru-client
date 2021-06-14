import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes
} from '../lib/createRequestActionTypes';
import * as authAPI from '../lib/api/auth';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

const [REGISTER, REGISTER_SUCCESS, REGISTER_ERROR] = createRequestActionTypes(
  'auth/REGISTER'
);
const [LOGIN, LOGIN_SUCCESS, LOGIN_ERROR] = createRequestActionTypes(
  'auth/LOGIN'
);
// 구글 로그인
const [GOOGLE, GOOGLE_SUCCESS, GOOGLE_ERROR] = createRequestActionTypes('auth/GOOGLE');

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form, // register , login
    key, // username, password, passwordConfirm
    value // 실제 바꾸려는 값
  })
);
export const initializeForm = createAction(INITIALIZE_FORM, form => form); // register / login
export const register = createAction(REGISTER, ({ username, email, password }) => ({
  username,
  email,
  password
}));
export const login = createAction(LOGIN, ({ email, password }) => ({
  email,
  password
}));
export const googleLogin = createAction(GOOGLE, ({ email, name, googleId }) => ({
  email,
  name,
  googleId
})) 

// saga 생성
const registerSaga = createRequestSaga(REGISTER, authAPI.register);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);
// google
const googleSaga = createRequestSaga(GOOGLE, authAPI.googleLogin);

export function* authSaga() {
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(GOOGLE, googleSaga);
}

const initialState = {
  register: {
    username: '',
    email:'',
    password: '',
    passwordConfirm: ''
  },
  login: {
    email: '',
    password: ''
  },
  googleLogin: {
    email: '',
    name: '',
    googleId:'',
  },
  auth: null,
  authError: null
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, draft => {
        draft[form][key] = value; // 예: state.register.username을 바꾼다
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
      authError: null // 폼 전환 시 회원 인증 에러 초기화
    }),
    // 회원가입 성공
    [REGISTER_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth
    }),
    // 회원가입 실패
    [REGISTER_ERROR]: (state, { payload: error }) => ({
      ...state,
      authError: error
    }),
    // 로그인 성공
    [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth
    }),
    // 로그인 실패
    [LOGIN_ERROR]: (state, { payload: error }) => ({
      ...state,
      authError: error
    }),
    [GOOGLE_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth
    }),
    [GOOGLE_ERROR]: (state, { payload: error }) => ({
      ...state,
      authError: error
    })
  },
  initialState
);

export default auth;