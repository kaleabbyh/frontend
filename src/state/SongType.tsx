export interface SongType {
  _id?: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface SongsState {
  songs: SongType[];
  isLoading: boolean;
  errorMessage: string | null;
}

export interface rootState {
  songs: SongsState;
}

export interface SongActionType {
  type: string;
  payload: SongType;
}
