import { call, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from '../modules/loading';

export const createRequestActionTypes = type => {
  const SUCCESS = `${type}_SUCCESS`;
  const ERROR = `${type}_ERROR`;
  return [type, SUCCESS, ERROR];
};

export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const ERROR = `${type}_ERROR`;

  return function*(action) {
    yield put(startLoading(type)); // 로딩 시작
    console.log('로딩이 시작됩니다.')
    console.log(action)
    try {
      console.log('action은', action);
      console.log(request);
      console.log('try문이 시작됩니다.')
      const response = yield call(request, action.payload);
      console.log('response', response);
      yield put({
        type: SUCCESS,
        payload: response.data,
        meta: response,
      });
      console.log('put까지 완료')
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