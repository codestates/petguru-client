import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  position: flex;
  text-align: center;
  border: none;
  border-radius: 25px;
  font-size: 30px;
  font-weight: bold;
  padding: 10px;
  color: white;
  outline: none;
  cursor: pointer;
  text-align: center;

  background: #414a4f;
  &:hover {
    background: #868e96;
  }

  ${(props) =>
    props.fullWidth &&
    css`
      padding-top: 10px;
      padding-bottom: 10px;
      width: 100%;
      font-size: 25px;
    `}

  ${(props) =>
    props.cyan &&
    css`
      background: #22b8cf;
      &:hover {
        background: #3bc9db;
      }
    `}
`;

const Button = (props) => <StyledButton {...props} />;

export default Button;
