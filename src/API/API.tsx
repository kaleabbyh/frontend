/* eslint-disable no-unused-vars */
import axios, { AxiosResponse } from "axios";
import { SongType } from "../state/SongType";
const baseUrl = "http://localhost:8000/api";

export const getAllSongs = (): Promise<AxiosResponse<SongType[]>> => {
  return axios.get<SongType[]>(`${baseUrl}/getAllSongs`);
};

export const addSong = (song: SongType): Promise<AxiosResponse<SongType>> => {
  return axios.post<SongType>(`${baseUrl}/addSong`, song);
};

export const editSong = (song: SongType) => {
  return axios.put(`${baseUrl}/editSong/${song._id}`, song);
};

export const deleteSong = (song: SongType): Promise<AxiosResponse<string>> => {
  return axios.delete<string>(`${baseUrl}/deleteSong/${song._id}`);
};
