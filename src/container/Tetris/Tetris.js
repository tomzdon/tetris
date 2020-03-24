import React, { useState } from "react";

import { DisplayGame } from "../../components/styles/DisplayGame";
import { StaticsGame } from "../../components/styles/StaticsGame";
import { TableWithCells } from "../../components/TableWithCells/TableWithCells";
import { createStage } from "../../constants/helpers";
import { Button } from "../../components/Button/Button";
import { figure } from "../../constants/figure";

export const Tetris = () => {
  const [stage, setStage] = useState(createStage());
  const [currentFigure, setCurrentFigure] = useState();

  const copyStage = () => {
    return stage.map(row =>
      row.map(cell => (cell[1] === "clear" ? [0, "clear"] : cell))
    );
  };

  const randomFigure = () => {
    const figuresName = "IJLSOTZ";
    const figureRandom =
      figuresName[Math.floor(Math.random() * figuresName.length)];
    setCurrentFigure(figure[figureRandom]);
  };

  const getFigure = figures => {
    const newStage = copyStage();
    currentFigure.positionStart.forEach((row, y) => {
      row.forEach((value, x) => {
        newStage[y][x] = [value];
      });
    });

    return newStage;
  };

  const startGame = () => {
    randomFigure();
    setStage(getFigure(figure));
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
