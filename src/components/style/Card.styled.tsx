/* eslint-disable @typescript-eslint/no-unused-vars */

import styled from "@emotion/styled";

export const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 20px;
`;

interface CardProps {
  textColor?: string;
  backgroundColor?: string;
}

export const CardWrapper = styled.div<CardProps>`
  overflow: hidden;

  margin: 10px;
  width: 250px;
  height: 100px;
  color: ${(props) => props.textColor};

  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardHeading = styled.p`
  font-weight: bold;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardBody = styled.div`
  padding-right: 2px;
  padding-left: 2px;
  margin: 10px;
  display: flex;
  align-items: center;
`;

export const CardIcon = styled.div<CardProps>`
  background-color: ${(props) => props.backgroundColor};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  padding: 5px;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
