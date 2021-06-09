import { all } from 'redux-saga/effects';
import axios from 'axios';
import { writeSaga } from './missing_write';

axios.defaults.baseURL = `http://localhost:4000/`;


export default function* rootSaga() {
  yield all([writeSaga()]);
}