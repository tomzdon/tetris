import React, { useState, useEffect } from "react";

import { DisplayGame } from "../../components/styles/DisplayGame";
import { StaticsGame } from "../../components/styles/StaticsGame";
import { TableWithCells } from "../../components/TableWithCells/TableWithCells";
import { createStage } from "../../constants/helpers";
import { Button } from "../../components/Button/Button";
import { usePlayer } from "../../hooks/usePlayer";
import { useStage } from "../../hooks/useStage";

export const Tetris = () => {
  const [
    player,
    currentFigure,
    positionPlayer,
    resetPlayer,
    checkCollid,
    setPlayer
  ] = usePlayer();

  const [stage, setStage] = useStage(player, currentFigure, checkCollid, resetPlayer);

  const copyStage = () => {
    return stage.map(row =>
      row.map(cell => (cell[1] === "clear" ? [0, "clear"] : cell))
    );
  };

  const getFigure = () => {
    const newStage = copyStage();
    currentFigure.forEach((row, y) => {
      row.forEach((value, x) => {
        newStage[y + player.position.y][x + player.position.x] = [
          value,
          "clear"
        ];
      });
    });
    // setStage(newStage);
    return newStage;
  };

  const move = ({ keyCode }) => {
    console.log(keyCode);
    if (keyCode === 37) {
      positionPlayer(1, 1);
    } else if (keyCode === 39) {
      positionPlayer(0, 1);
    } else if (keyCode === 40) {
      // dropPlayer();
    } else if (keyCode === 38) {
      // playerRotate(stage, 1);
    }
  };

  const startGame = () => {
    // resetPlayer();
    // setStage(getFigure());
    // positionPlayer(0, 1);
  };

  return (
    <DisplayGame tabIndex="0"
      onKeyDown={e => move(e)} >
      <TableWithCells stage={stage} />
      <asad >
        <StaticsGame ></StaticsGame>
        <Button callback={startGame} > </Button>
      </asad >
    </DisplayGame>
  );
};