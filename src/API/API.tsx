/* eslint-disable no-unused-vars */
import axios from "axios";
import { SongType } from "../state/SongType";
const baseUrl = "http://localhost:8080/api";

export const getAllSongs = (): Promise<SongType[]> => {
  return axios.get(`${baseUrl}/getAllSongs`);
};

export const addSong = (song: SongType): Promise<SongType> => {
  return axios.post(`${baseUrl}/addSong`, song);
};

export const editSong = (song: SongType): Promise<SongType> => {
  return axios.put(`${baseUrl}/editSong/${song._id}`, song);
};

export const deleteSong = (song: SongType): Promise<string> => {
  return axios.delete(`${baseUrl}/deleteSong/${song._id}`);
};
