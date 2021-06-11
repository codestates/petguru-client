import { all } from 'redux-saga/effects';
import axios from 'axios';
import { writeSaga } from './missing_write';
import { postSaga } from './missing_post';

axios.defaults.baseURL = `http://localhost:4000/`;


export default function* rootSaga() {
  yield all([writeSaga(), postSaga()]);
}