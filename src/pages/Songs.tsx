/* eslint-disable @typescript-eslint/no-unused-vars */
import { useSelector, useDispatch } from "react-redux";
import { getSongsFetch } from "../state/SongState";
import List from "../components/List";
import { Lists } from "../components/style/List.styled";
import { useEffect } from "react";
import { rootState } from "../state/SongType";
import Cards from "../components/Cards";

const Songs: React.FC = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state: rootState) => state.songs.songs);

  useEffect(() => {
    dispatch(getSongsFetch());
  }, [dispatch]);

  return (
    <>
      <Cards />
      <Lists>
        {songs?.map((item, index) => (
          <List key={index} item={item} />
        ))}
      </Lists>
    </>
  );
};

export default Songs;
