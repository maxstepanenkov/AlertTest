import { takeEvery, put, select } from 'redux-saga/effects';

const timer = (time) => new Promise((resolve) => {
  setTimeout(resolve, time);
})

export function* alertWatch() {
  yield takeEvery('SHOW_ALERT', alertShowWorker);
  yield takeEvery('SHOW_GLOBAL_ALERT', alertShowGlobalWorker);
}

export function* alertShowWorker() {
  const { alertType, id, delay, closable, text} = yield select(state => state.currentAlert);
  yield put({ type: 'ADD_TO_SHOWN_ALERT', payload: { alertType, id, delay, closable, text } });
  if (!closable) {
    yield timer(delay || 2000);
    yield put({ type: 'REMOVE_FROM_SHOWN_ALERT', payload: { id } })
  } 
}

export function* alertShowGlobalWorker() {
  yield timer(2000);
  const { alertType, id, text } = yield select(state => state.currentAlert);
  yield put({ type: 'ADD_TO_SHOWN_GLOBAL_ALERT', payload: { alertType, id, text } })
}

export default function* rootSaga() {
  yield alertWatch();
}