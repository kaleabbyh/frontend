/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSongsFetch, editSongFetch } from "../state/SongState";
import { useNavigate, useParams } from "react-router-dom";
import { SongType, rootState } from "../state/SongType";
import {
  FormWrapper,
  FormHeader,
  FormHeading,
  FormBody,
  FormFieldset,
  FormInput,
  FormButton,
  FormContainer,
} from "../components/style/Form.styled";

const UpdateSong: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { songs } = useSelector((state: rootState) => state.songs);
  const song = songs.filter((song: SongType) => song._id === id);

  const [formData, setFormData] = useState<SongType>({
    _id: song[0]._id,
    title: song[0].title,
    artist: song[0].artist,
    album: song[0].album,
    genre: song[0].genre,
  });

  const { _id, title, artist, album, genre } = formData;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongsFetch());
  }, [dispatch]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const musicData: SongType = {
      _id,
      title,
      artist,
      album,
      genre,
    };
    dispatch(editSongFetch(musicData));
    navigate("/");
  };

  return (
    <FormContainer>
      <FormWrapper action="#" method="POST" onSubmit={onSubmit}>
        <FormHeader>
          <FormHeading>Update Song </FormHeading>
        </FormHeader>

        <FormBody>
          <FormFieldset>
            <FormInput
              placeholder="artist"
              type="text"
              id="artist"
              name="artist"
              value={artist}
              onChange={onChange}
              required
            />
          </FormFieldset>

          <FormFieldset>
            <FormInput
              placeholder="title"
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={onChange}
              required
            />
          </FormFieldset>

          <FormFieldset>
            <FormInput
              placeholder="album"
              type="text"
              id="album"
              name="album"
              value={album}
              onChange={onChange}
              required
            />
          </FormFieldset>
          <FormFieldset>
            <FormInput
              placeholder="genre"
              type="text"
              id="genre"
              name="genre"
              value={genre}
              onChange={onChange}
              required
            />
          </FormFieldset>

          <FormFieldset>
            <FormButton type="submit">update song</FormButton>
          </FormFieldset>
        </FormBody>
      </FormWrapper>
    </FormContainer>
  );
};

export default UpdateSong;
