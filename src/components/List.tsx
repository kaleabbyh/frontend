/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useEffect } from "react";
import Button from "./style/Button.styled";
import { ListHeader, ListInput, StyledList } from "./style/List.styled";
import { useNavigate } from "react-router-dom";
import { BiSolidMessageAltEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { deleteSongFetch, getSongsFetch } from "../state/SongState";
import { useDispatch } from "react-redux";
import { SongType } from "../state/SongType";

interface CardProps {
  item: SongType;
}
const List: React.FC<CardProps> = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongsFetch());
  }, [dispatch]);

  const handleDelete = (id: string | undefined) => {
    dispatch(deleteSongFetch({ _id: id }));
    window.location.reload();
  };

  return (
    <StyledList>
      <div>
        <ListInput>
          <ListHeader>Aritst :</ListHeader>
          <ListHeader>{item.artist}</ListHeader>
        </ListInput>

        <ListInput>
          <ListHeader>Title :</ListHeader>
          {item.title}
        </ListInput>

        <ListInput>
          <ListHeader>Album :</ListHeader>
          {item.album}
        </ListInput>

        <ListInput>
          <ListHeader>Genre :</ListHeader>
          {item.genre}
        </ListInput>

        <Button onClick={() => navigate(`/updatesong/${item._id}`)}>
          <BiSolidMessageAltEdit size={20} color="#5F1D90" />
        </Button>

        <Button onClick={() => handleDelete(item._id)}>
          <MdDelete size={20} color="#ff0099" />
        </Button>
      </div>
    </StyledList>
  );
};

export default List;
