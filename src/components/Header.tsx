/* eslint-disable no-unused-vars */
import { StyledHeader, StyledLink } from "./style/Header.styled";
import Button from "./style/Button.styled";
import { useNavigate } from "react-router-dom";
import { PiMusicNotesPlusBold } from "react-icons/pi";

export default function Header() {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <div>
        <StyledLink to={"/"}>
          <h3>Home</h3>
        </StyledLink>

        <Button onClick={() => navigate("/addsong")}>
          <PiMusicNotesPlusBold size={25} color="#5F1D90" />
        </Button>
      </div>
    </StyledHeader>
  );
}
