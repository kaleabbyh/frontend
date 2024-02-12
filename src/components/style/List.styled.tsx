import styled from "@emotion/styled";

export const Lists = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const StyledList = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 20px;
  padding: 20px;
  flex-direction: "row";
  width: 500px;

  & > div {
    flex: 1;
  }

  @media (max-width: 740px) {
    flex-direction: column;
    margin: 40px;
    text-align: center;
  }
`;

export const ListInput = styled.p`
  padding: 7px 7px;
  width: 100%;

  font-size: 14px;
  box-shadow: 0 0 1.5px rgba(0, 0, 0, 0.15);

  border-radius: 5px;
  display: flex;
  align-items: center;
`;

export const ListHeader = styled.p`
  padding: 3px;
  margin: 0;
  font-size: 14px;
  font-weight: bold;
`;
