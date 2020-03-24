import React from "react";
import { ButtonStyled } from "../styles/ButtonStyle";

export const Button = ({ callback }) => (
  <ButtonStyled onClick={callback}>Start Game</ButtonStyled>
);
