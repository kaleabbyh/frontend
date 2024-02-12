/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  CardWrapper,
  CardHeading,
  CardBody,
  CardIcon,
  Card,
} from "./style/Card.styled";

import { BsJournalAlbum } from "react-icons/bs";
import { MdPhotoAlbum } from "react-icons/md";
import { BiSolidAlbum } from "react-icons/bi";
import { MdAlbum } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../state/SongType";
import { getSongsFetch } from "../state/SongState";
import { useEffect, useState } from "react";

export default function Cards() {
  const dispatch = useDispatch();
  const songs = useSelector((state: rootState) => state.songs.songs);
  const [artistCount, setArtistCount] = useState<number>(0);
  const [albumtCount, setAlbumCount] = useState<number>(0);
  const [genreCount, setGenreCount] = useState<number>(0);
  const [songCount, setSongCount] = useState<number>(0);

  useEffect(() => {
    dispatch(getSongsFetch());
  }, [dispatch]);

  useEffect(() => {
    const uniqueArtists = [
      ...new Set(songs.map((item) => item.artist.toLowerCase())),
    ];
    setArtistCount(uniqueArtists.length);

    const uniqueAlbums = [
      ...new Set(songs.map((item) => item.album.toLowerCase())),
    ];
    setAlbumCount(uniqueAlbums.length);

    const uniqueGenres = [
      ...new Set(songs.map((item) => item.genre.toLowerCase())),
    ];
    setGenreCount(uniqueGenres.length);

    setSongCount(songs.length);
  });
  return (
    <Card>
      <CardWrapper textColor="#4b5563">
        <CardBody>
          <CardIcon backgroundColor="#4f46e5">
            <BsJournalAlbum size={20} color="white" />
          </CardIcon>
          <div>
            <CardHeading>Songs</CardHeading>
            <CardHeading>{songCount}</CardHeading>
          </div>
        </CardBody>
      </CardWrapper>
      <CardWrapper textColor="#4b5563">
        <CardBody>
          <CardIcon backgroundColor="#14b8a6">
            <MdPhotoAlbum size={20} color="white" />
          </CardIcon>
          <div>
            <CardHeading>Albums</CardHeading>
            <CardHeading>{albumtCount}</CardHeading>
          </div>
        </CardBody>
      </CardWrapper>
      <CardWrapper textColor="#4b5563">
        <CardBody>
          <CardIcon backgroundColor="#3b82f6">
            <BiSolidAlbum size={25} color="white" />
          </CardIcon>
          <div>
            <CardHeading>Artists</CardHeading>
            <CardHeading>{artistCount}</CardHeading>
          </div>
        </CardBody>
      </CardWrapper>
      <CardWrapper textColor="#4b5563">
        <CardBody>
          <CardIcon backgroundColor="#00e6e6">
            <MdAlbum size={25} color="white" />
          </CardIcon>
          <div>
            <CardHeading>Genres</CardHeading>
            <CardHeading>{genreCount}</CardHeading>
          </div>
        </CardBody>
      </CardWrapper>
    </Card>
  );
}
