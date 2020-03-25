import React, { useState } from "react";

import { DisplayGame } from "../../components/styles/DisplayGame";
import { StaticsGame } from "../../components/styles/StaticsGame";
import { TableWithCells } from "../../components/TableWithCells/TableWithCells";
import { createStage } from "../../constants/helpers";
import { Button } from "../../components/Button/Button";
import { usePlayer } from "../../hooks/usePlayer";

export const Tetris = () => {
  const [stage, setStage] = useState(createStage());
  const [player, currentFigure, positionPlayer, resetPlayer, setPlayer] = usePlayer();

  const copyStage = () => {
    return stage.map(row =>
      row.map(cell => (cell[1] === "clear" ? [0, "clear"] : cell))
    );
  };

  const getFigure = () => {
    const newStage = copyStage();
    currentFigure.forEach((row, y) => {
      row.forEach((value, x) => {
        newStage[y + player.position.y][x + player.position.x] = [value, "clear"];
      });
    });

    return newStage;
  };

  const startGame = () => {
    // resetPlayer();
    setStage(getFigure());
    positionPlayer(0, 1);
  };

  return (
    <DisplayGame>
      <TableWithCells stage={stage} />
      <asad>
        <StaticsGame></StaticsGame>
        <Button callback={startGame}></Button>
      </asad>
    </DisplayGame>
  );
};
