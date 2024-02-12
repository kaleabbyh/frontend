/* eslint-disable no-unused-vars */
import createSagaMiddleWare from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import songReducer from "../state/SongState";
import songSaga from "../saga/SongSaga";

const saga = createSagaMiddleWare();
const strore = configureStore({
  reducer: {
    songs: songReducer,
  },
  middleware: [saga],
});

saga.run(songSaga);

export default strore;
