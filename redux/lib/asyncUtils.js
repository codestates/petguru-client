import { call, put } from "@redux-saga/core/effects";

export const createPromiseSaga = (type, promiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCEES`, `${type}_ERROR`];

  return function* (action) {
    try {
      const result = yield call(promiseCreator, action.payload);
      yield put({
        type: SUCCESS,
        payload: result
      });
    } catch (e) {
      yield put({
        type: ERROR,
        error: true,
        payload: e
      });
    } 
  }
}

export const createPromiseSagaById = (type, promiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCEES`, `${type}_ERROR`];

  return function* (action) {
    const id = action.meta;
    try {
      const result = yield call(promiseCreator, action.payload);
      yield put({
        type: SUCCESS,
        payload: result,
        meta: id,
      });
    } catch (e) {
      yield put({
        type: ERROR,
        error: true,
        payload: e,
        meta: id,
      });
    }
  }
}

export const handleAsyncActions = (type, key, keepData) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (state, action) => {
    //update
    switch (action.type) {
      case type:
        console.log(type);
        return {
          ...state,
          [key]: reducerUtils.loading(keepData ? state[key].data : null),
        }
      case SUCCESS:
        return {
          ...state,
          [key]: reducerUtils.success(action.payload),
        }
      case ERROR:
        return {
          ...state,
          [key]: reducerUtils.error(action.payload), 
        }
      default:
        return state;
    }
  }
}

export const handleAsyncActionsById = (type, key, keepData) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (state, action) => {
    const id = action.meta;
    //update
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: {
            ...state[key],
            [id]: reducerUtils.loading(keepData ? (state[key][id] && state[key][id].data) : null)
          },
        }
      case SUCCESS:
        return {
          ...state,
          [key]: {
            ...state,
            [id]: reducerUtils.success(action.payload),
          }
        }
      case ERROR:
        return {
          ...state,
          [key]: {
            ...state,
            [id]: reducerUtils.error(action.payload),
          }
        }
      default:
        return state;
    }
  }
}

export const reducerUtils = {
  initial: (data = null) => ({
    data,
    loading: false,
    error:null
  }),
  loading: (prevState = null) => ({
    data: prevState,
    loading: true,
    error: null
  }),
  success: (data) => ({
    data,
    loading: false,
    error: null
  }),
  error: error => ({
    data: null,
    loading: false,
    error
  })
}