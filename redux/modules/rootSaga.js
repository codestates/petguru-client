import { all, fork } from 'redux-saga/effects';
import { authSaga } from './auth';
import { userSaga } from './user';
import { writeSaga } from './missing_write';
import { postSaga } from './missing_post';
import { postsSaga } from './missing_posts';

export default function* rootSaga() {
  yield all([authSaga(), userSaga(), writeSaga(), postSaga(), postsSaga()]);
}