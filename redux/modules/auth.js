import axios from 'axios';

export const LOGIN_USER = "LOGIN_USER";
export const REGISTER_USER = "REGISTER_USER";
// Action type
// 로그인
const POST_LOGIN = 'auth/POST_LOGIN';
const POST_LOGIN_SUCCESS = 'auth/POST_LOGIN_SUCCESS';
const POST_LOGIN_ERROR = 'auth/POST_LOGIN_ERROR';
// 로그아웃
const POST_LOGOUT = 'auth/POST_LOGOUT';
const POST_LOGOUT_SUCCESS = 'auth/POST_LOGOUT_SUCCESS';
const POST_LOGOUT_ERROR = 'auth/POST_LOGOUT_ERROR';
// 회원가입
const POST_REGISTER = 'auth/POST_REGISTER';
const POST_REGISTER_SUCCESS = 'auth/POST_REGISTER_SUCCESS';
const POST_REGISTER_ERROR = 'auth/POST_REGISTER_ERROR';
// 유저 정보 가져오기
const GET_USER = 'auth/GET_USER';
const GET_USER_SUCCESS = 'auth/GET_USER_SUCCESS';
const GET_USER_ERROR = 'auth/GET_USER_ERROR';
// 유저 정보 수정하기
const UPDATE_USER = 'auth/UPDATE_USER';
const UPDATE_USER_SUCCESS = 'auth/UPDATE_USER_SUCCESS';
const UPDATE_USER_ERROR = 'auth/UPDATE_USER_ERROR';
// 유저 정보 삭제하기
const DELETE_USER = 'auth/DELETE_USER';
const DELETE_USER_SUCCESS = 'auth/DELETE_USER_SUCCESS';
const DELETE_USER_ERROR = 'auth/DELETE_USER_ERROR';
// 유저 이미지 추가하기
const ADD_IMAGE = 'auth/ADD_IMAGE';
const ADD_IMAGE_SUCCESS = 'auth/ADD_IMAGE_SUCCESS';
const ADD_IMAGE_ERRROR = 'auth/ADD_IMAGE_ERROR';
// 이미지 삭제하기
const DELETE_IMAGE = 'auth/DELETE_IMAGE';
const DELETE_IMAGE_SUCCESS = 'auth/DELETE_IMAGE_SUCCESS';
const DELETE_IMAGE_ERROR = 'auth/DELETE_IMAGE_ERROR';

//Action creator
export function loginUser(dataToSubmit) {
  const req = axios
    .post("http://localhost:3065/user/login", dataToSubmit) // URL: 배포 서버랑 연결해야하고 URL 변수 만들어서 defualt URL 관리
    .then((res) => res.data);

  return {
    type: LOGIN_USER,
    payload: req,
  };
}

//  {user_id:닉네임, username:실명, email: 이메일, password: 비밀번호}
export function registerUser(dataToSubmit) {
  const req = axios
    .post("http://localhost:3065/user/signup", dataToSubmit) // 엔드포인트 수정:user/siginup, URL: 배포 서버랑 연결해야함 URL 변수 만들어서 defualt URL 관리
    .then((res) => res.data);

  return {
    type: REGISTER_USER,
    payload: req,
  };
}
const postLogin = () => ({
  type: POST_LOGIN,
  
})

// auth reducer
export default function (state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
      break;
    case REGISTER_USER:
      return { ...state, register: action.payload };
      break;
    default:
      return state;
  }
}
