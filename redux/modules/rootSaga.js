import { all } from 'redux-saga/effects';
import axios from 'axios';

axios.defaults.baseURL = `http://localhost:4000/`;


export default function* rootSaga() {
  console.log('rootSaga');
  yield all([missingSaga()]);
}