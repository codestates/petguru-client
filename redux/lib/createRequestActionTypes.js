import { call, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from '../modules/loading';

export const createRequestActionTypes = type => {
  const SUCCESS = `${type}_SUCCESS`;
  const ERROR = `${type}_ERROR`;
  return [type, SUCCESS, ERROR];
};

export default function createRequestSaga(type, request) {
  // LIST_POSTS , listposts API
  const SUCCESS = `${type}_SUCCESS`;
  const ERROR = `${type}_ERROR`;
  // request는 API 호출 함수
  // console.log('request가 도대체 뭔데', request);

  return function* (action) {
    // { type: "posts/LIST_POSTS"}
    // console.log('파라미터 :', type);
    // console.log('페이로드: ', action.payload);
    // type === action.type
    yield put(startLoading(type)); // 로딩 시작
    // console.log('로딩이 시작됩니다.')
    try {
      // console.log('action은', action);
      // console.log('action.payload는', action.payload);
      // console.log('Request 요청 후에 사가함수가 실행됩니다. request : ', request);
      // console.log('try문이 시작됩니다.')
      // console.log('request는', request);
      const response = yield call(request, action.payload);
      // console.log('response', response);
      yield put({
        type: SUCCESS,
        payload: response.data,
        meta: response,
      });
      // console.log('put까지 완료')
    } catch (e) {
      yield put({
        type: ERROR,
        payload: e,
        error: true,
      });
    }
    yield put(finishLoading(type)); // 로딩 끝
  };
}