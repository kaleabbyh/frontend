/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getSongsFetch, addSongFetch } from "../state/SongState";
import { useNavigate } from "react-router-dom";
import { SongType } from "../state/SongType";
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

const AddSong: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<SongType>({
    title: "",
    artist: "",
    album: "",
    genre: "",
  });

  const { title, artist, album, genre } = formData;
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
      artist,
      title,
      album,
      genre,
    };
    dispatch(addSongFetch(musicData));

    navigate("/");
  };

  return (
    <FormContainer>
      <FormWrapper action="#" method="POST" onSubmit={onSubmit}>
        <FormHeader>
          <FormHeading>Add Song </FormHeading>
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
            <FormButton type="submit">add song</FormButton>
          </FormFieldset>
        </FormBody>
      </FormWrapper>
    </FormContainer>
  );
};

export default AddSong;
