/* eslint-disable @typescript-eslint/no-explicit-any */

import { call, all, put, takeEvery } from "redux-saga/effects";
import {
  getSongsSuccess,
  getSongsFailure,
  addSongSuccess,
  addSongFailure,
  deleteSongSuccess,
  deleteSongFailure,
  editSongSuccess,
  editSongFailure,
} from "../state/SongState";

import { addSong, deleteSong, editSong, getAllSongs } from "../API/API";
import { AxiosResponse } from "axios";
import { SongType, SongActionType } from "../state/SongType";

// Saga for fetching songs
function* getSongs() {
  try {
    const response: AxiosResponse<SongType[]> = yield call(getAllSongs);
    const songs: SongType[] = response.data;
    yield put(getSongsSuccess(songs));
  } catch (e: any) {
    yield put(getSongsFailure(e.message));
  }
}

function* addsong(action: SongActionType) {
  try {
    const response: AxiosResponse<SongType> = yield call(
      addSong,
      action.payload
    );
    const song: SongType = response.data;
    yield put(addSongSuccess(song));
  } catch (e: any) {
    yield put(addSongFailure(e.message));
  }
}

function* updatesong(action: SongActionType) {
  try {
    const song: AxiosResponse<SongType> = yield call(editSong, action.payload);
    yield put(editSongSuccess(song.data));
  } catch (e: any) {
    yield put(editSongFailure(e.message));
  }
}

function* deletesong(action: SongActionType) {
  try {
    const songs: AxiosResponse<string> = yield deleteSong(action.payload);
    yield put(deleteSongSuccess(songs));
  } catch (e: any) {
    yield put(deleteSongFailure(e.message));
  }
}

// watcher saga
export function* watcherSongSaga() {
  yield takeEvery("songs/addSongFetch", addsong);
  yield takeEvery("songs/getSongsFetch", getSongs);
  yield takeEvery("songs/deleteSongFetch", deletesong);
  yield takeEvery("songs/editSongFetch", updatesong);
}

//root saga
export default function* rootSaga() {
  yield all([watcherSongSaga()]);
}
