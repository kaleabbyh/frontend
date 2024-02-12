import styled from "@emotion/styled";
import { CSSProperties } from "react";

interface ButtonProps {
  bg?: string;
  color?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

const Button = styled.button<ButtonProps>`
  border: none;
  background: none;
  cursor: pointer;
  background-color: none;
  margin-right: 10px;
  margin-left: 10px;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;

export default Button;
