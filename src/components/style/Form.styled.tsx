/* eslint-disable @typescript-eslint/no-unused-vars */

import styled from "@emotion/styled";

export const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px;
`;

export const FormWrapper = styled.form`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 10px;
  width: 500px;

  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
`;

export const FormHeader = styled.header`
  padding-top: 32px;
`;

export const FormHeading = styled.h1`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const FormBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`;

export const FormFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;
  margin-top: 24px;
`;

export const FormInput = styled.input`
  padding: 7px 7px;
  width: 100%;

  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: border-bottom-color 0.25s ease-in;

  &:focus {
    border-bottom-color: #e5195f;
    outline: 0;
  }
`;

export const FormButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px 0;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #e5195f;
  border: 0;
  border-radius: 10px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;
