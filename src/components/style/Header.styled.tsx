import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  width: 100vw;
  margin: 0;
  text-decoration: none;
  div {
    padding: 10px 20px;
    margin: auto;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 500px) {
      flex-direction: column;
      text-align: center;
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
