import { createSlice } from "@reduxjs/toolkit";
import { SongsState } from "./SongType";

const initialState: SongsState = {
  songs: [],
  isLoading: false,
  errorMessage: null,
};

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    // get songs actions
    getSongsFetch: (state) => {
      state.isLoading = true;
      state.errorMessage = null;
    },
    getSongsSuccess: (state, action) => {
      state.isLoading = false;
      state.songs = action.payload;
    },
    getSongsFailure: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
    // add song actions
    addSongFetch: (state) => {
      state.isLoading = true;
      state.errorMessage = null;
    },
    addSongSuccess: (state, action) => {
      state.isLoading = false;
      state.songs.push(action.payload);
    },
    addSongFailure: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },

    // edit song actions
    editSongFetch: (state) => {
      state.isLoading = true;
      state.errorMessage = null;
    },
    editSongSuccess: (state, action) => {
      const updatedSong = action.payload;
      const songIndex = state.songs.findIndex(
        (song) => song._id === updatedSong._id
      );

      if (songIndex !== -1) {
        state.songs[songIndex] = updatedSong;
        state.isLoading = false;
        state.errorMessage = null;
      }
    },
    editSongFailure: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },

    // delete song actions
    deleteSongFetch: (state) => {
      state.isLoading = true;
      state.errorMessage = null;
    },
    deleteSongSuccess: (state, action) => {
      const songId = action.payload;
      state.isLoading = false;
      state.songs = state.songs.filter((song) => song._id !== songId);
      state.errorMessage = null;
    },
    deleteSongFailure: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
  },
});

export const {
  getSongsFetch,
  getSongsSuccess,
  getSongsFailure,
  addSongFetch,
  addSongSuccess,
  addSongFailure,
  editSongFetch,
  editSongSuccess,
  editSongFailure,
  deleteSongFetch,
  deleteSongSuccess,
  deleteSongFailure,
} = songsSlice.actions;

export default songsSlice.reducer;
