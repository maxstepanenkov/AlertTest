import {
  createSlice,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import saga from './saga';

const alertSlice = createSlice({
  name: 'alert',
  initialState: {
    alerts: []
  },
  reducers: {
    showAlert: (state, action) => {
      return {
        alert: action.payload
      }
    }
  }
});

export const { showAlert } = alertSlice.actions;

let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
  reducer: {
    alert: alertSlice.reducer
  },
  middleware
});

sagaMiddleware.run(saga);

export default store;