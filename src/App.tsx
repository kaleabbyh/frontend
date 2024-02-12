/* eslint-disable @typescript-eslint/no-unused-vars */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Songs from "./pages/Songs";
import Header from "./components/Header";
import AddSong from "./pages/AddSong";
import UpdateSong from "./pages/UpdateSong";

import styled from "@emotion/styled";

const StyledContainer = styled.div`
  font-family: "Roboto Slab", serif;
`;

function App() {
  return (
    <StyledContainer>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Songs />} />
          <Route path="/addsong" element={<AddSong />} />
          <Route path="/updatesong/:id" element={<UpdateSong />} />
        </Routes>
      </Router>
    </StyledContainer>
  );
}

export default App;
