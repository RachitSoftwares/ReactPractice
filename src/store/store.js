import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../store/slice/login";
import userReducer from "../store/slice/user";
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    login: loginReducer,
    user: userReducer,
  },
  middleware : ()=>[sagaMiddleware]
});

sagaMiddleware.run(rootSaga)
